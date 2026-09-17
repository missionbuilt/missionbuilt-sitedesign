MealStack keeps three things: **ingredients** (a thing with macros per unit: what one unit of it is worth), **meals** (ingredients with amounts on a plate) and **stacks** (a training day and a rest day of meals, in order, under a name). Ingredients make meals, meals make stacks. A **plan** is stacks in rotation, one per calendar week, with a target and a schedule; a **day** is the record of what ran and what was eaten. "Week" in the schema always means the calendar week, never a stack. The same five things show up in five places: the app's own stores, the `.mealstack` file the app imports and exports, the file the MealStack skill writes in a model, what Coach proposes, and the telemetry the app sends. Until now each place spelled them a little differently. The MealStack Schema is one vocabulary for all five, so an ingredient is `ingredient.id` everywhere, a meal's time is `meal.anchor` and `meal.offset_minutes` everywhere, and a document from any of them reads the same.

## Borrowed from ECS

The schema follows the [Elastic Common Schema](https://www.elastic.co/guide/en/ecs/current/index.html) in its shape and its rules, because ECS has already solved the problem of one vocabulary across many producers, and because MealStack's telemetry lands in Elastic. Specifically:

- **Field sets are namespaces.** Every field lives under a set named for the thing it describes (`ingredient.*`, `meal.*`, `day.*`), nested from general to specific with dots. A reader can understand `meal.*` without reading anything else. The only fields at the root are the ones ECS keeps at the root: `@timestamp`, `labels`, `tags`.
- **Names are lower case, words joined with underscores, no abbreviations** except the ones everyone uses (`kcal`, `id`). Present tense. Singular for one thing, plural for a list (`meal.portions`, `schedule.training_weekdays`). No stuttering: `ingredient.name`, not `ingredient.ingredient_name`.
- **Reuse instead of repetition.** `macros` (protein, carbs, fat, kcal) is defined once and nested wherever a value lives: `ingredient.per`, `meal.stated`, `target.training`, `day.consumed`. `meal` is nested under `stack.training`, `stack.rest` and `day.meal.landed`; `ingredient` under `portion.ingredient`. The reference says where each set is reused.
- **Core and extended.** Core fields are the ones every document of that kind carries and every reader must handle. Extended fields are narrower and more likely to change.
- **A version field.** Every document says which schema version it follows (`mealstack.version`, the way ECS carries `ecs.version`), and what kind of document it is (`mealstack.kind`).
- **Custom fields are welcome, outside the schema's names.** Anything the schema does not name goes under `labels` (key/value) or `tags`, never as a new key inside a MealStack field set, so a later version of the schema cannot collide with it.
- **Telemetry uses ECS itself.** An event is an ECS `event.*` (`event.action`, `event.category`, `event.outcome`, `event.dataset`), not a MealStack copy of it, so it lands in any ECS-aware store without a mapping.

Two rules are MealStack's own and shape everything:

- **The app computes every number.** An ingredient carries what one unit is worth; a portion carries a quantity; everything above that (a portion's macros, a meal's, a day's) is derived. A document may include a derived value for a reader that cannot multiply, and a reader recomputes it and ignores the stored one. `meal.stated` is the single exception, for a plate that was never weighed, and it is read only when the plate has no portions. A document never carries a day's total.
- **The record is never rewritten.** A logged meal is frozen at logging (`day.meal.landed`, `day.meal.consumed`) and a later change to the plan, an ingredient or a stack never touches it.

## Versioning

The schema has a semantic version, kept in `docs/schema/VERSION` and written into every document as `mealstack.version`. It tracks the app's version while both are under 1.0; the rules below apply from 1.0 on, and until then any release may rename. 0.9.2 renamed the `food` field set to `ingredient` (so `portion.food` is `portion.ingredient` and `plan.foods` is `plan.ingredients`), the `source` value `pantry` to `built_in`, and `pantry_version` to `built_in_version`. 0.9.3 redefined fuel (`meal.kind: fuel`): fuel may carry macros, which count in the day's totals; it never counts in `day.meal_count` or `plan.meals_per_day`; and an `at_session` anchor makes an item fuel.

- A **patch** changes descriptions and examples only.
- A **minor** adds fields, field sets or expected values. A reader built for 1.0 reads a 1.3 document and ignores what it does not know.
- A **major** renames or removes a field, changes a type, or changes a rule. A reader refuses a major version it does not know and says so.

Field sets and fields can also carry a stability marker the way ECS does: nothing in 1.0 is marked, which means stable; a field added later may arrive as `beta` for a release before it is held to the major/minor rule.

## How the five places map onto it

| Place | Today | Under the schema |
|---|---|---|
| `.mealstack` plan file (format 1) | camelCase keys (`offsetMinutes`, `latestMeal`, `trainingWeekdays`), `"mealstack": 1`, anchors `beforeSession` etc.; `stacks` (with `weeks` read as the older spelling); declared ingredients under `foods`, with `ingredients` read as the same list from app 0.9.1 and written once 0.9.1 is the oldest build in use | Format 2 is the schema's names verbatim: `mealstack.version`, `meal.offset_minutes`, `schedule.latest_meal`, `meal.anchor: before_session`, `plan.ingredients`. The app reads both; the skill writes 2. |
| The app's stores (`plan.json`, `logs.json`, `kitchen*.json`) | Swift property names, camelCase, some historical (`rule` for the anchor, `dayKey`, `moreWeeks` and `SavedWeek` for stacks, `Food` and `foods.json` for ingredients) | Migrated on the first launch after the change, to the schema's names, one store at a time behind a version stamp; the old file is kept until the new one has been read back once. |
| The MealStack skill | writes format 1 | writes format 2 and reads `mealstack-schema.json` for its field reference instead of a hand-kept copy |
| Coach's `propose_plan` | its own JSON shape, close to format 1 | the same document as a plan file with `mealstack.kind: proposal`; accepting a proposal is importing it |
| Telemetry | event names as strings | ECS `event.*` with the same names in `event.action` |

The mapping table for format 1 to the schema, key by key, lives in `plan-format.md` once format 2 ships; until then format 1 is documented there as it is.

## Reading the reference

Each field set in [the field reference](/rack/mealstack/schema#field-sets) has a description, a list of where it is reused, and a table of its fields: the full name, the level, the type, the description with allowed values and patterns, and an example. Types are the plain ones: `keyword` (a short string, matched exactly), `text` (free text), `float`, `integer`, `boolean`, `date` (RFC 3339 with offset), `object` (a nested field set, named in the description). A field marked *array* is a list of that type.

`mealstack-schema.json` is the same information as one flat map from full field name to attributes, for the skill, the checker and anything else that wants to validate a document by machine.

## Extending it

To add a field: edit the YAML under `fields/`, run `python3 scripts/build_schema.py`, and bump `VERSION` by a minor. The build refuses a name that is not lower_snake_case, a level that is not core or extended, a type outside the list, or a field with no description. `python3 scripts/build_schema.py --check` fails when the generated files are stale; the test target runs it.

To add a field set: a new YAML file with `name`, `title`, `group` (its place in the ordering), `description`, optionally `reusable` (where it nests), and its fields. Custom fields for a single producer do not go here; they go under `labels`.

## Why publish it

The schema is the contract between the app and everything that writes for it: a model running the skill, a coach with a spreadsheet, a friend with a plan, a future version of the app reading today's file. Publishing it means a file written today reads next year, and a tool written by someone else can write one. Its license is the app's, which is not decided yet; MealStack is a mark of Mission Built.
