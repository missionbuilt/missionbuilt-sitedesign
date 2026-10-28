---
app: ironstack
version: "0.1.1"
order: 1001
changes: 11
groups: [{"title": "Exercise info", "slug": "exercise-info", "leads": ["NEW: Info on 33 lifts shows three short cues (Set up, Feel it, Common miss) where there is no animation yet."]}, {"title": "Plan", "slug": "plan", "leads": ["Plan has no Start on a program card or a program page.", "Add to today: a workout's page has Add to today where Start was (or swipe a day right).", "After Add to today, Today shows \"Back to Day 2 · Bench and rows\" to put your program's day back.", "Add to today on a starter's workout puts your copy on Today for today only.", "While a workout is live, Add to today reads Add to this workout."]}, {"title": "Stack AI", "slug": "stack-ai", "leads": ["FIXED: When Stack AI turns a question down, the app now says which limit it was."]}, {"title": "Logging", "slug": "logging", "leads": ["FIXED: A set you log as body weight now stays body weight."]}, {"title": "Groups", "slug": "groups", "leads": ["FIXED: A circuit you make by ungrouping two exercises and grouping them again can be moved like any other..."]}, {"title": "Sharing", "slug": "sharing", "leads": ["FIXED: Sharing a workout no longer shows an old spotter support message as a new alert."]}, {"title": "Apple Watch", "slug": "apple-watch", "leads": ["FIXED: With your wrist down, the rest clock at the top of the set screen and the countdown under a set you..."]}]
status: shipped
build: 77
---

**Fixes from your b76 feedback, and Add to today.**

**NEW: Add to today.** A workout's page has Add to today where Start was (or swipe a day right). It goes on Today for today only: nothing starts, and your program's next workout and week stay where they were. While a workout is live it reads Add to this workout, and the exercises go at the end of Up next. Undo takes it back.

**FIXED: Stack AI says which limit stopped you.** Today's questions, this month's questions, this month's dollars, or Stack AI's own budget for everyone: each now says so, and when it's back.

**FIXED: A set you log as body weight stays body weight.** A pull-up with weight added from your watch opens as body weight plus the weight, and a weight in each hand carries to the next set as each hand. VoiceOver reads it as "50 each hand".

**FIXED: A circuit you make from two exercises can be moved.** Ungroup two exercises, group them again, and the group moves like any other.

**FIXED: Sharing a workout no longer brings back an old spotter message as a new alert.**

**FIXED: The watch's rest clock, wrist down.** The clock at the top of the set screen and the countdown under a set you just logged show every second again, counting down, instead of flickering to "1:--".

**NEW: Cues in Info.** On 33 lifts, Info shows three short cues (Set up, Feel it, Common miss) where there's no animation yet. The animations aren't switched on in this build.

**Try this:** open a workout in Plan and tap Add to today, then look at Today. Do three sets of a pull-up with weight added, and check the third opens the way the first two did. Start a rest, drop your wrist for a minute, and read the clock. Open Info on a squat and tell us if the cues match how you lift.

## Every change in this build

### Exercise info

- **NEW: Info on 33 lifts shows three short cues (Set up, Feel it, Common miss) where there is no animation yet.** The animations are not switched on in this build.

### Plan

- **Plan has no Start on a program card or a program page:** Add to today puts a workout on Today, and you start it from there. Plan says "Find, review and build. Start from Today."
- **Add to today: a workout's page has Add to today where Start was (or swipe a day right).** It goes on Today for today only; nothing starts, and your program's next workout and week stay where they were: it doesn't count as your program's day. Undo takes it back.
- **After Add to today, Today shows "Back to Day 2 · Bench and rows" to put your program's day back.**
- **Add to today on a starter's workout puts your copy on Today for today only.** It isn't added to your workouts and is gone the next day; use Copy to My Workouts to keep it.
- **While a workout is live, Add to today reads Add to this workout:** the exercises go at the end of Up next for today only, the saved workout doesn't change, and nothing is logged. On an exercise, Add to this workout shows only while a workout is live; otherwise it's Add to a workout. Swiping an exercise in the library adds it only while a workout is live.

### Stack AI

- **FIXED:** When Stack AI turns a question down, the app now says which limit it was: today's questions, this month's questions, this month's dollars, or Stack AI's own budget for everyone, and when it comes back. A refusal the app can't place saves nothing and stays quiet until you relaunch.

### Logging

- **FIXED: A set you log as body weight now stays body weight.** A pull-up with weight added from your watch opens as body weight plus the weight, and a weight in each hand carries to the next set as each hand. VoiceOver reads it as "50 each hand".

### Groups

- **FIXED:** A circuit you make by ungrouping two exercises and grouping them again can be moved like any other group.

### Sharing

- **FIXED: Sharing a workout no longer shows an old spotter support message as a new alert.**

### Apple Watch

- **FIXED:** With your wrist down, the rest clock at the top of the set screen and the countdown under a set you just logged show every second again, counting down once a second, instead of flickering to "1:--".
