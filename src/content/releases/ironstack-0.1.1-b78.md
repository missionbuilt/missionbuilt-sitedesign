---
app: ironstack
version: "0.1.1"
order: 1001
changes: 12
groups: [{"title": "Plan", "slug": "plan", "leads": ["A program's page has Edit.", "The button that puts a workout on Today for today only now reads Use for today (it was Add to today).", "A workout you add is named \"Workout 5\", or \"Week 3, workout 4\" on a starter you're using.", "On a starter you're using, Add a workout adds a workout to every week, so the weeks stay the same length, and...", "A workout's page has a typed line."]}, {"title": "Groups", "slug": "groups", "leads": ["FIXED: A group you make under Up next now has an Ungroup button, so you can take it apart after Done.", "FIXED: If you group exercises and leave one you already started alone in its old group, that exercise comes...", "FIXED: Undo after dragging an exercise no longer also undoes the drag."]}, {"title": "Apple Watch", "slug": "apple-watch", "leads": ["FIXED: On the watch's set screen, the Digital Crown now changes Reps after you tap Reps."]}, {"title": "Gym board", "slug": "gym-board", "leads": ["FIXED: A set planned or logged in feet or yards, such as the starters' \"4 × 20 yd\" sled push, reads \"50 ft\"..."]}, {"title": "Clock", "slug": "clock", "leads": ["NEW: A timed set, like a plank or a wall sit, counts 3, 2, 1 before its timer starts, so you can get into...", "Turn it off in Settings › The clock › Get-in-position countdown."]}]
status: shipped
build: 78
---

### Plan

- **A program's page has Edit.** In Edit, under the week: drag a workout to move it, Add a workout (an empty workout at the end, opened so you can type its exercises), and Copy this week forward. Copy this week forward moved out of the ⋯ menu.
- **The button that puts a workout on Today for today only now reads Use for today (it was Add to today).** The Add to this workout button that showed while a workout was live is gone.
- **A workout you add is named "Workout 5", or "Week 3, workout 4" on a starter you're using.** A program's page path and summary, the Use this program lines and the Undo lines say "workout" where they said "day".
- On a starter you're using, Add a workout adds a workout to every week, so the weeks stay the same length, and Copy this week forward makes next week a copy of this one (as it is, +5 lb or +1 rep on the main lifts); past the last week it adds a week. Undo puts it back.
- **A workout's page has a typed line:** "front squat 3x5 @7" and Return adds Front Squat, three sets of five at RPE 7, as MissionStack reads it. A name alone starts from last time. The magnifying glass beside it opens the exercise library.

### Groups

- **FIXED: A group you make under Up next now has an Ungroup button, so you can take it apart after Done.** Undo puts it back.
- **FIXED:** If you group exercises and leave one you already started alone in its old group, that exercise comes out of the group. Undo puts it back, and no set is lost.
- **FIXED: Undo after dragging an exercise no longer also undoes the drag.**

### Apple Watch

- **FIXED: On the watch's set screen, the Digital Crown now changes Reps after you tap Reps.**

### Gym board

- **FIXED:** A set planned or logged in feet or yards, such as the starters' "4 × 20 yd" sled push, reads "50 ft" or "20 yd" on the board, not 50 reps. This needs MissionStack's next build on the board; an older board shows what it showed before. A carry you log on the set screen shows on the board as it did before.

### Clock

- **NEW:** A timed set, like a plank or a wall sit, counts 3, 2, 1 before its timer starts, so you can get into position. Your watch gives a short buzz at each number and one long buzz as the timer starts; the phone shows 3, 2, 1 large on the timer face. The full time runs after the long buzz, on both. With voice cues on you hear "Go." at the start.
- **Turn it off in Settings › The clock › Get-in-position countdown.** Rest, EMOM and a stopwatch start when you tap, as before.
