---
app: ironstack
version: "0.1.1"
order: 1001
changes: 6
groups: [{"title": "Exercise info", "slug": "exercise-info", "leads": ["NEW: Info shows how to do 377 more exercises, 410 in all, up from 33."]}, {"title": "Logging", "slug": "logging", "leads": ["FIXED: A saved workout's sets open on what you lifted last time, set by set, not the weights it was saved...", "Known: Up next and Change planned sets still show the weights the workout was saved with.", "Known: If you do a set before a prep ladder you built, the prep steps you skipped still show on Today as sets...", "Known: A warm-up you log yourself, on a workout with no prep sets, counts as one of its sets, so the...", "Known: Tapping + Prep after you have logged more working sets than the plan had can put the new prep row in..."]}]
status: shipped
build: 79
---

**Info shows how to do 410 exercises, and a saved workout opens on what you lifted last time.**

**NEW: Cue cards for 410 exercises, up from 33.** Tap Info on an exercise in Plan, in search or in a workout, and you get a setup line, how it should feel, the usual miss, and the cues. An exercise without a card yet reads as before.

**FIXED: Sets open on last time's weights.** Open a workout you've done before and each working set shows what you lifted last time, not the weight the workout was saved with. Reps and prep sets stay the workout's. A program's week-by-week weights, and lifts done per hand, on body weight, with a band or assisted, work as before.

**Known:** About 850 of the 1,259 exercises have no cue card yet. Up next and Change planned sets still show the weights the workout was saved with. The Known lines under Logging below still apply. Add a workout still greys out once a starter's week holds 7 workouts.

**Try this:** Open Plan, tap Exercises, open Pause Squat and tap Info. Open a lift you do often and check its cues against how you do it; if one reads wrong, send it with Share Beta Feedback and name the exercise. Do a workout, change the weight on one working set, finish, and open the same workout again: that set opens on last time's weight. Open a program week with its own weights and check they are as the program wrote them.

## Every change in this build

### Exercise info

- **NEW: Info shows how to do 377 more exercises, 410 in all, up from 33.** Each has a short setup, how it should feel, the usual miss, and its cues.

### Logging

- **FIXED:** A saved workout's sets open on what you lifted last time, set by set, not the weights it was saved with. Reps and prep sets stay the workout's. A program's week-by-week weights, and lifts done per hand, on body weight, with a band or assisted, work as before.
- **Known: Up next and Change planned sets still show the weights the workout was saved with.** The set itself opens on last time's.
- **Known:** If you do a set before a prep ladder you built, the prep steps you skipped still show on Today as sets to do.
- **Known:** A warm-up you log yourself, on a workout with no prep sets, counts as one of its sets, so the workout's last set can be missing from Today and the watch. This was already so; the missing set used to be the first one.
- **Known:** Tapping + Prep after you have logged more working sets than the plan had can put the new prep row in the wrong place.
