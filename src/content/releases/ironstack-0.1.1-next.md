---
app: ironstack
version: "0.1.1"
order: 1001
changes: 4
groups: [{"title": "Logging", "slug": "logging", "leads": ["A saved workout's sets open on what you lifted last time, set by set, not the weights it was saved with."]}, {"title": "Today", "slug": "today", "leads": ["In a superset or circuit, a log keeps you on the workout page with the next exercise's set highlighted."]}, {"title": "Stack AI", "slug": "stack-ai", "leads": ["Loading a workout from Stack AI puts it on Today without starting it."]}, {"title": "Apple Watch", "slug": "apple-watch", "leads": ["Finish a workout on your watch and the phone's \"End and log?\" goes away."]}]
status: in-progress
---

<!-- WAITING on the product lead (#146): the cue headline line, the count of exercises with a cue, and the cue "Try this" step. Nothing about cues is written here until those words are posted. Remove this note when they are in. -->

**What you will notice:** open a workout you've done before and the weight on each working set is last time's, not the weight the workout was saved with. Reps and warm-up sets stay as the workout has them. A program's week-by-week weights, and lifts done per hand, on body weight, with a band or assisted, work as before.

**Try this:**
1. Do a workout, change a weight on one working set, and finish.
2. Open the same saved workout again. The set you changed opens on last time's weight.
3. On a program, open a week that has its own weights and check they are as the program wrote them.
4. Log a warm-up set by hand on a workout that has no warm-up sets, and look at Today.

**Known:**
- Up next and Change planned sets still show the weights the workout was saved with. The set itself opens on last time's.
- If you do a set before a warm-up ladder you built, the warm-up steps you skipped still show on Today as sets to do.
- A warm-up you log yourself, on a workout with no warm-up sets, counts as one of its sets, so the workout's last set can be missing from Today and the watch. This was already so; the missing set used to be the first one.
- Tapping + Prep after you've logged more working sets than the plan had can put the new warm-up row in the wrong place.

## Every change in this build

### Logging

- **A saved workout's sets open on what you lifted last time, set by set, not the weights it was saved with.** Reps and prep sets stay the workout's. A program's week-by-week weights, and lifts done per hand, on body weight, with a band or assisted, work as before.

### Today

- **In a superset or circuit, a log keeps you on the workout page with the next exercise's set highlighted.** The set sheet no longer opens by itself; tap the set when you're ready. The sheet that opened by itself could come up with a Log button that did nothing.

### Stack AI

- **Loading a workout from Stack AI puts it on Today without starting it.** A swap, sets or note card accepted before you start now asks you to start first; it used to start the workout quietly, so the Load went into a workout already running.

### Apple Watch

- **Finish a workout on your watch and the phone's "End and log?" goes away.** Tapping it afterwards could add a second, empty workout.
