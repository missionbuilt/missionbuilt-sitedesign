---
app: ironstack
version: "0.1.1"
order: 1001
changes: 19
groups: [{"title": "Plan", "slug": "plan", "leads": ["Plan opens on three tabs: Programs, Workouts and Exercises.", "One search at the top of Plan finds programs, workouts and exercises.", "Plan reopens on the last page you were on, even after you close the app.", "Tapping an exercise opens its page, with Info and History.", "Info shows the cues where there are some, the muscles it works, where it's filed, and Loaded in lb or kg for...", "On an exercise's page, Use for today and Add to a workout...", "A program card's next line says \"Workout 2\", not \"Day 2\".", "A program's page has Edit.", "The button that puts a workout on Today for today only now reads Use for today (it was Add to today).", "A workout you add is named \"Workout 5\", or \"Week 3, workout 4\" on a starter you're using.", "On a starter you're using, Add a workout adds a workout to every week, so the weeks stay the same length, and...", "A workout's page has a typed line."]}, {"title": "Groups", "slug": "groups", "leads": ["FIXED: A group you make under Up next now has an Ungroup button, so you can take it apart after Done.", "FIXED: If you group exercises and leave one you already started alone in its old group, that exercise comes...", "FIXED: Undo after dragging an exercise no longer also undoes the drag."]}, {"title": "Apple Watch", "slug": "apple-watch", "leads": ["FIXED: On the watch's set screen, the Digital Crown now changes Reps after you tap Reps."]}, {"title": "Gym board", "slug": "gym-board", "leads": ["FIXED: A set planned or logged in feet or yards, such as the starters' \"4 × 20 yd\" sled push, reads \"50 ft\"..."]}, {"title": "Clock", "slug": "clock", "leads": ["NEW: A timed set, like a plank or a wall sit, counts 3, 2, 1 before its timer starts, so you can get into...", "Turn it off in Settings › The clock › Get-in-position countdown."]}]
status: shipped
build: 78
---

**Plan has a new layout with one search, you can add and copy workouts right in it, and timed sets count you in.**

**NEW: Plan opens on Programs, Workouts and Exercises, with one search.** Programs holds your program, your own, ones from your coach, and the starters. Workouts holds your saved workouts (it was called My workouts). Exercises holds the library. The search at the top finds all three; tap All, Programs, Workouts or Exercises to narrow it. Plan reopens on the last page you were on, and tapping the Plan tab again takes you back to the start.

**NEW: Every exercise has its own page.** Tap an exercise in Plan, in search, or on a workout (swipe right, or hold it) and you get Info and History side by side. Info shows the cues where we have them, what it works and where it's filed. History shows your last five times with your best set, and a way to see them all in Insights. Use for today puts it on Today for today only; Add to a workout puts it in a workout you choose, or a new one. Nothing starts and nothing is logged from this page.

**NEW: Add a workout, and Copy this week forward.** On a program's page, tap Edit. Under a week you can drag a workout to move it, add a workout at the end, or copy this week forward so next week starts as a copy of this one (as it is, or +5 lb or +1 rep on the main lifts). Undo puts it back. A new workout is named "Workout 5", or "Week 3, workout 4" on a starter you're using, and the typed line on a workout's page takes "front squat 3x5 @7" and adds it.

**NEW: Get in position first.** A timed set, like a plank or a wall sit, counts 3, 2, 1 before its timer starts. Your watch gives a short buzz at each number and one long buzz as the time starts. With voice cues on, you hear "Go." Turn it off in Settings › The clock › Get-in-position countdown. Rest, EMOM and a stopwatch start when you tap, as before.

**CHANGED: "Use for today".** The button that puts a workout on Today for today only used to read Add to today. While a workout is live, Add to this workout is gone.

**FIXED: The watch's Digital Crown changes Reps** after you tap Reps on the set screen.

**FIXED: Groups.** A group you make under Up next has an Ungroup button after Done. An exercise you already started comes out of a group you leave it in. Undo after dragging an exercise no longer also undoes the drag.

**FIXED: Carries in feet or yards on the gym board** read "50 ft" or "20 yd", not "50 reps". This needs MissionStack's next build on the board.

**Known:** Add a workout greys out once a starter's week already holds 7 workouts. That limit goes in the next build.

**Try this:** Open a starter you're using, tap Edit, and tap Add a workout, then Undo. Copy week 2 forward and read week 3. Start a plank and count 3, 2, 1 with your wrist on: short buzz at each number, long buzz at the start. On the watch, open a set, tap Reps, and turn the Crown. Group two exercises under Up next, tap Done, then Ungroup. Tap Use for today on a workout and look at Today. Open Plan and tap Programs, Workouts and Exercises. Type "squat" in the search, then tap Exercises to narrow it. Tap Back Squat, then flip between Info and History. Tap Use for today and look at Today. Leave Plan, come back, and check it opens on the same page; tap the Plan tab again to go back to the start.

## Every change in this build

### Plan

- **Plan opens on three tabs: Programs, Workouts and Exercises.** Programs lists your program, your own, ones from your coach, and the starters ("10 programs written out week by week."). Workouts is what was My workouts. Exercises is the library.
- **One search at the top of Plan finds programs, workouts and exercises.** All, Programs, Workouts and Exercises narrow it, and a kind with nothing found is left out.
- **Plan reopens on the last page you were on, even after you close the app.** Tap the Plan tab again to go back to the start.
- **Tapping an exercise opens its page, with Info and History.** It opens from the Exercises tab, from search, and from a workout (swipe right, or hold the exercise).
- **Info shows the cues where there are some, the muscles it works, where it's filed, and Loaded in lb or kg for that exercise only.** History shows your last five times with your best set, and See all in Insights.
- **On an exercise's page, Use for today and Add to a workout (Today's workout first, then your others, or a new one).** While a workout is live neither shows.
- **A program card's next line says "Workout 2", not "Day 2".**
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
