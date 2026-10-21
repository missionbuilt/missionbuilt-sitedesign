---
app: ironstack
version: "0.1.1"
order: 1001
changes: 23
groups: [{"title": "Logging", "slug": "logging", "leads": ["FIXED: − stops at the bar, and a number below the bar is logged at the bar.", "When the number sits at the bar, a line under it says why (\"The bar is 45 lb.\", or \"Each handle is 35 lb.\")..."]}, {"title": "Gym board", "slug": "gym-board", "leads": ["On the board, a load in each hand reads \"60 ea × 8\", as on your iPhone, and a superset, circuit or PAP pair...", "FIXED: Scanning a board's code while IronStack was closed opened the app and then did nothing.", "The phone now says what's going on with a board you just paired."]}, {"title": "Coach mode", "slug": "coach-mode", "leads": ["A coach can log a workout for a lifter, for example when you train together.", "A lifter sees it in History marked \"Logged by @coach\", and can delete it."]}, {"title": "History", "slug": "history", "leads": ["FIXED: A carry with a weight in each hand (farmer's walk) shows its weight, \"145ea · 50 ft\"."]}, {"title": "Social", "slug": "social", "leads": ["FIXED: Once a workout is shared, nothing asks you to share it again."]}, {"title": "Apple Watch", "slug": "apple-watch", "leads": ["FIXED: Setting the timer with the Digital Crown keeps the time you turned to, and moves in steps you can..."]}, {"title": "Exercise demos", "slug": "exercise-demos", "leads": ["Info works on every lift in the library now, not only the four with demos.", "A version of a lift with a demo (a 1.5-rep squat, a board press) plays the main lift's demo, says under it..."]}, {"title": "Starter programs", "slug": "starter-programs", "leads": ["Starter programs open from Plan so you can see every week before you use one.", "The first time you open a starter, it shows its cautions once and asks you to tap I understand.", "Copy a starter's workout to your workouts, or add one of its exercises to the end of a workout of yours.", "\"Start this\" is now \"Use this program\", and Starters is now Starter programs.", "Basketball and lacrosse are now \"off-season training\"."]}, {"title": "Plan", "slug": "plan", "leads": ["A program and a starter open on the same page.", "Use this program asks once on one sheet.", "A program you come back to resumes on the week you left it.", "A workout put on Today and not started is gone the next morning (at 4 AM), so Today, your watch and Stack AI...", "Plan's program card shows Next as a line, Starter programs open on Plan's own page, and \"Kept\" is gone."]}, {"title": "MealStack", "slug": "mealstack", "leads": ["When you usually train, in Settings, can now also share how long your last 8 workouts ran, so MealStack can..."]}]
status: shipped
build: 76
---

**Your coach, on the gym floor.**

**NEW: Your coach can log a workout for you.** Train together and your coach logs it on their phone: they open your report, tap Start their workout, and pick a day from the plan they sent or your last workout. When they finish, it lands in your History marked "Logged by @coach", and you can delete it. It's a switch in Coach mode, on unless you turn it off. If you're already linked to a coach, you'll see a one-time notice with Turn off.

**NEW: Plan, built for looking before you lift.** Starters open like your own programs: every week, every workout, every exercise, with their cautions shown once. Use this program says what it replaces and where your old program keeps its place. Your program's next workout is a line in its card.

**NEW: Basketball and lacrosse with drill days.** Both starters are now "off-season training": six workouts a week for six weeks. Hard days (sprints, jumps, a short shooting block, the lift) take turns with easy drill days (shooting or stick work, footwork, an easy run), then a day off.

**FIXED: You can't log less than the bar.** − stops at the bar, and a lower number is logged at the bar. A line under the number says why ("The bar is 45 lb.", "Each handle is 35 lb."), with Change the bar if you're lifting less. Squat, bench and deadlift count the bar even if you never set one. Sets you've already logged stay as they are.

**FIXED: Pairing with the board.** Scanning a board's code while IronStack was closed opened the app and then did nothing. Now it asks "Pair with this board?". If the board can't be reached, your phone says why: it's still looking, the Wi-Fi to check, Local Network turned off for IronStack, or the board doesn't know this iPhone. Each comes with Try again.

**Info on every lift.** Swipe right on any exercise and tap Info: the muscles it works, and the demo where we have one. A version of a lift (a 1.5-rep squat, a board press) plays the main lift's demo and says how yours differs. Lifts without a demo show their equipment and movement, with "Search this lift".

**Also:**
- A farmer's walk shows its weight again ("145ea · 50 ft"); it was always saved.
- Once you've shared a workout, nothing asks you to share it again.
- On the watch, the timer's Digital Crown keeps the time you turned to, in steps you can feel.
- When you usually train, in Settings, can also share how long your workouts run, so MealStack can time your after-workout meal.

**Try this:** dial a squat's weight down past the bar and read the line under it. Open Starter programs › Strongman and read week 3 before you use it. If you have a coach, ask them to log one workout for you, then find it in your History.

## Every change in this build

### Logging

- **FIXED: − stops at the bar, and a number below the bar is logged at the bar.** Squat, Bench Press and Deadlift count the bar (45 lb, or 20 kg) even if you never set one; farmer's walk counts the handles once you pick handles or its name says handles. Sets you've already logged stay as they are.
- **When the number sits at the bar, a line under it says why ("The bar is 45 lb.", or "Each handle is 35 lb.") with Change the bar, and a typed or spoken set raised to the bar says so when it's logged.**

### Gym board

- **On the board, a load in each hand reads "60 ea × 8", as on your iPhone, and a superset, circuit or PAP pair you're in is listed together with its kind.** These show on MissionStack's next TestFlight build.
- **FIXED: Scanning a board's code while IronStack was closed opened the app and then did nothing.** It now asks "Pair with this board?" once the app is up.
- **The phone now says what's going on with a board you just paired:** looking for it, that it can't find it (with the Wi-Fi to check), that Local Network is off for IronStack, or that the board doesn't know this iPhone, with Try again (and Open Settings for Local Network).

### Coach mode

- **A coach can log a workout for a lifter, for example when you train together:** open their report and tap Start their workout, pick a day from the plan you sent or their last workout, and log it on your phone. Your Lock Screen says "Logging for @them". When you finish, it goes to their history; until it arrives, their card says where it stands.
- **A lifter sees it in History marked "Logged by @coach", and can delete it.** "Your coach can log a workout for you" is a switch in Coach mode, on unless you turn it off; lifters already linked see a one-time notice with Turn off.

### History

- **FIXED: A carry with a weight in each hand (farmer's walk) shows its weight, "145ea · 50 ft".** It was always saved; only the line hid it.

### Social

- **FIXED: Once a workout is shared, nothing asks you to share it again.** Home's recap says Shared, and a watch workout's "share it" reminder goes away as soon as it's shared from anywhere. If you change a workout after sharing it, the share sheet offers Update the card.

### Apple Watch

- **FIXED:** Setting the timer with the Digital Crown keeps the time you turned to, and moves in steps you can feel: 15 seconds from 0:15 to 2:00, then 30 seconds to 10:00, the same as on your iPhone.

### Exercise demos

- **Info works on every lift in the library now, not only the four with demos.** It lists the muscle groups worked, and a lift without a demo shows its equipment and movement with "Search this lift".
- **A version of a lift with a demo (a 1.5-rep squat, a board press) plays the main lift's demo, says under it which lift the demo shows, and adds a line on how yours differs.**

### Starter programs

- **Starter programs open from Plan so you can see every week before you use one:** See starters, then a program's notes, its cautions and each week's workouts and exercises with their sets.
- **The first time you open a starter, it shows its cautions once and asks you to tap I understand.**
- **Copy a starter's workout to your workouts, or add one of its exercises to the end of a workout of yours.** The copy is yours, with no weights; the starter doesn't change, and Undo takes the copy back.
- **"Start this" is now "Use this program", and Starters is now Starter programs.**
- **Basketball and lacrosse are now "off-season training":** six workouts a week for six weeks, with easy drill days (shooting or stick work, footwork, an easy run) between the hard days, and a day off.

### Plan

- **A program and a starter open on the same page:** one week at a time with ‹ › (it opens on the week that holds Next), Next marked, and "done Mon" on a day you did this week.
- **Use this program asks once on one sheet:** what it replaces, that the program you leave keeps its place (its week and day), what comes off Today, and for a starter its cautions. It replaces "Make it my current program".
- **A program you come back to resumes on the week you left it.**
- **A workout put on Today and not started is gone the next morning (at 4 AM), so Today, your watch and Stack AI don't keep yesterday's.**
- **Plan's program card shows Next as a line, Starter programs open on Plan's own page, and "Kept" is gone:** they're Other programs. Plan says "Find, review and build."

### MealStack

- **When you usually train, in Settings, can now also share how long your last 8 workouts ran, so MealStack can time your after-workout meal to when your workout ends.** If you turned it on before, IronStack asks once, with one tap; until you say yes, it shares your start times only.
