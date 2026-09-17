---
app: mealstack
version: "0.9.1"
order: 9001
changes: 52
groups: [{"title": "Today", "slug": "today", "leads": ["A meal the day can no longer hold says why under its name.", "With no daily target set, the totals show what you've eaten and nothing about what's left, with...", "\"Add fuel\" sits under the day's list.", "\"Swap for another meal\", under Not yet and on a meal's page, opens your Meals shelf for that meal, ready to...", "Tapping the box on a logged meal opens the meal instead of un-logging it.", "Push back reads \"15 min later\", and the session steps read \"1 hr earlier\" and \"30 min later\".", "The day type menu says \"Today only. Tomorrow follows your training days.\"", "VoiceOver reads each meal in the list as one item (name, time and where it stands) with Log, Skip and Open as...", "At the largest text sizes the totals stack instead of squeezing into one row."]}, {"title": "Around the app", "slug": "around-the-app", "leads": ["The app calls them ingredients everywhere now, with no more \"foods\" or \"pantry\".", "About's links all go to live pages.", "A meal logged from the Lock Screen or the widget late at night, with the app opened the next morning, now...", "\"Not yet · 20 min\" on a meal alert asks again twenty minutes after you tap it, even when you answer the alert...", "The home screen widget turns over at midnight on the nights the clocks change, not an hour early or late.", "\"Ate it now\" on a meal alert is kept even when the app wasn't running.", "If one of MealStack's files ever can't be read, a copy is kept beside it before anything is written over it.", "Every change you make says what it did in one line, with Undo.", "That line now sits just above the tab bar on Today, Plan and History, and on the screens you open from them...", "Meal alerts read \"Breakfast · 7:30 AM\", with no code in front, and fuel alerts no longer carry a line of...", "Apple Health names each entry by the meal alone (\"Lunch\", not \"M3 · Lunch\"), and a meal for today by its own...", "Times read \"1 hr 23 min\" and \"23 min\" in the app and on the widget, instead of \"1 h 23 m\".", "The meal the plan builder pins after the session is called \"After the session\", and the example plan's and...", "The Rotation's notes say stacks, not weeks...", "A built-in meal named \"… · training day\" or \"… · rest day\" drops that when you put it on a meal.", "On a fresh install the Meals shelf has the Tex-Mex rest-day salmon."]}, {"title": "Travel", "slug": "travel", "leads": ["Flying west no longer makes Today jump between two days every few seconds after midnight back home.", "Away from home, or with the week set to start on Monday, Today runs this week's stack.", "On a travel day the session time wheel and the log time wheel show the same times as the rest of Today."]}, {"title": "Meals, fuel and History", "slug": "meals-fuel-and-history", "leads": ["Fuel pinned well before the session (water two hours out) no longer squeezes the morning meals closer...", "Fuel you logged stays fuel when the day changes under it.", "History counts meals, not fuel: a skipped scoop no longer makes a missed meal look like a full day, and...", "A meal logged hours late no longer schedules what can't happen.", "Once the session starts, a carb surge (or scoop) you never logged is marked as passed.", "Those meals stay on the day to log or skip, but Today, the widget and the Lock Screen move on to what can...", "\"Session done\", in the session menu, marks today as trained when there's nothing to log at the session...", "Once the session is marked done, the session menu reads \"Trained\" and can take it back (\"Not trained yet\")...", "Picking the usual time for today's session puts today back on the usual time, so \"Usual time\" isn't offered...", "Switching a rest day to training says so first: \"Training day. Session 6:00 PM.\"", "History calls the meal before the session what the app calls it.", "Today's row in History is a day in progress.", "Clearing today's log also takes what it wrote to Apple Health out, and Undo puts both back.", "On fuel, the item's page drops the macros, the plate and Ask Coach, and its button says Skip.", "A meal you logged before switching stacks says \"Logged from your earlier plan\" instead of \"In place of …\"...", "The log sheet says \"11 hr 18 min later than planned\", not \"678 min\", the Planned button no longer cuts off...", "History puts today at the top as \"Today · in progress\".", "Each day in History shows its stack and, on a day that ran on its own count, \"4 meals (plan: 5)\".", "Once your session starts, the widget stops holding up a carb surge you didn't log."]}, {"title": "Bringing a plan in", "slug": "bringing-a-plan-in", "leads": ["Two plan files that each declare an ingredient under the same id (two coaches' \"sauce\") now keep both, each...", "A plan file that declares an ingredient under a built-in's id is refused, as the format says, instead of...", "A plan file from a newer format now says to update the app, instead of saying it isn't a plan file.", "The plan skill's checker now refuses the files the app can't read..."]}, {"title": "Coach", "slug": "coach", "leads": ["A Coach message lost to a dropped connection on the way to the model no longer counts against your allowance."]}]
status: in-progress
---

### Today

- **A meal the day can no longer hold says why under its name:** "Session started without it" or "Won't fit before 9:00 PM". Tap the box if you ate it, or tap Skip. When only those are left, Today says "Nothing else fits today" with Skip the rest, instead of "Day's fed".
- **With no daily target set, the totals show what you've eaten and nothing about what's left, with "No daily target yet · Set one" under them.**
- **"Add fuel" sits under the day's list.**
- **"Swap for another meal", under Not yet and on a meal's page, opens your Meals shelf for that meal, ready to use one for today only.**
- **Tapping the box on a logged meal opens the meal instead of un-logging it.** Un-log is on the meal's page, and it can be undone.
- **Push back reads "15 min later", and the session steps read "1 hr earlier" and "30 min later".** The line over the next item stays on one line ("Fuel · 5 hr 19 min late").
- The day type menu says "Today only. Tomorrow follows your training days."
- **VoiceOver reads each meal in the list as one item (name, time and where it stands) with Log, Skip and Open as actions, and reads times as "1 hour 23 minutes".**
- **At the largest text sizes the totals stack instead of squeezing into one row.**

### Around the app

- **The app calls them ingredients everywhere now, with no more "foods" or "pantry".** The shelves replaced the last mentions of the Kitchen, and a plan file may now list its ingredients under "ingredients".
- **About's links all go to live pages:** the plan skill, the release notes (opening on this build), the privacy page, and two new rows for MealStack's page on missionbuilt.io and the MealStack Schema.
- **A meal logged from the Lock Screen or the widget late at night, with the app opened the next morning, now lands on the night it was eaten.** Before, it marked the same meal eaten on the new day, at last night's time.
- **"Not yet · 20 min" on a meal alert asks again twenty minutes after you tap it, even when you answer the alert late.** Before, answering more than twenty minutes late meant no second alert.
- **The home screen widget turns over at midnight on the nights the clocks change, not an hour early or late.**
- **"Ate it now" on a meal alert is kept even when the app wasn't running; it's filed the next time you open MealStack.** An alert left over from yesterday no longer logs or moves today's meal.
- **If one of MealStack's files ever can't be read, a copy is kept beside it before anything is written over it.**
- **Every change you make says what it did in one line, with Undo:** logging or un-logging a meal, skipping it, pushing it back, a meal for today, clearing today's log, and on the shelves removing a meal, a stack or an ingredient, taking a stack out of the rotation, moving it, adding it or running it this week. Undo puts things back as they were, Apple Health included. Only the latest change can be undone, and a log from the Lock Screen, the widget or an alert doesn't post a line.
- **That line now sits just above the tab bar on Today, Plan and History, and on the screens you open from them, so a change on the shelves says so where you made it.** Tap it to put it away.
- **Meal alerts read "Breakfast · 7:30 AM", with no code in front, and fuel alerts no longer carry a line of macros.** The second button reads "Not yet · 20 min".
- **Apple Health names each entry by the meal alone ("Lunch", not "M3 · Lunch"), and a meal for today by its own name.**
- **Times read "1 hr 23 min" and "23 min" in the app and on the widget, instead of "1 h 23 m".**
- **The meal the plan builder pins after the session is called "After the session", and the example plan's and The Rotation's shake is the "After-session shake".** Nothing is called post-workout any more; the meal count readout says "the carb surge and the meal after the session".
- **The Rotation's notes say stacks, not weeks ("Stack 1 of The Rotation", "The Base · breakfast, training days"), the built-in meals lose their "Library" tag, and the scoop's note names it in full: Undefined Pre-Workout V2.** The copies MealStack put on your shelves and your plan take the new words on the next launch; anything you edited, renamed or removed stays as you left it.
- **A built-in meal named "… · training day" or "… · rest day" drops that when you put it on a meal:** the slot reads "Paprika chicken box".
- **On a fresh install the Meals shelf has the Tex-Mex rest-day salmon.** It was taken for the salmon night with the same plate and left off.

### Travel

- **Flying west no longer makes Today jump between two days every few seconds after midnight back home.** Today runs on until midnight where you are, then the next day starts on local time.
- **Away from home, or with the week set to start on Monday, Today runs this week's stack.** Before, a trip west or a Monday-first calendar could put next week's stack on the plates.
- **On a travel day the session time wheel and the log time wheel show the same times as the rest of Today.**

### Meals, fuel and History

- **Fuel pinned well before the session (water two hours out) no longer squeezes the morning meals closer together.**
- **Fuel you logged stays fuel when the day changes under it:** switching to a rest day after the pre-workout scoop no longer puts the scoop on a meal's place and hides that meal.
- **History counts meals, not fuel:** a skipped scoop no longer makes a missed meal look like a full day, and creatine at 6 AM no longer stretches the eating window.
- **A meal logged hours late no longer schedules what can't happen.** Lunch logged at 6:46 PM on a 6:00 PM session leaves the carb surge where it was, marked as passed, instead of moving it after the session. Breakfast logged at 10:44 PM no longer puts lunch at 12:44 AM: a meal that won't fit before your "Last meal by" time shows at that time, marked, and nothing is ever scheduled on the next day.
- **Once the session starts, a carb surge (or scoop) you never logged is marked as passed.**
- **Those meals stay on the day to log or skip, but Today, the widget and the Lock Screen move on to what can still happen, and no alert comes for them.** At day's end they count as missed, as before.
- **"Session done", in the session menu, marks today as trained when there's nothing to log at the session, starting at the session's time (or now, if you tap it before then).** The meals after the session move with it, the day stays a training day, and Undo takes it back.
- **Once the session is marked done, the session menu reads "Trained" and can take it back ("Not trained yet") after the Undo line has gone.**
- **Picking the usual time for today's session puts today back on the usual time, so "Usual time" isn't offered for a move that isn't one.**
- Switching a rest day to training says so first: "Training day. Session 6:00 PM."
- **History calls the meal before the session what the app calls it:** "Carb surge missed", "carb surge 74 min before".
- **Today's row in History is a day in progress:** a meal you haven't eaten yet is still to come, not missed, and the row follows today's day type, meal count and session.
- **Clearing today's log also takes what it wrote to Apple Health out, and Undo puts both back.**
- **On fuel, the item's page drops the macros, the plate and Ask Coach, and its button says Skip.** The log sheet asks "When did you take it?" and leaves off the line of zeros.
- **A meal you logged before switching stacks says "Logged from your earlier plan" instead of "In place of …", with nothing to put back.** A skipped meal's button says Un-skip, and a meal for today wears "Today only".
- The log sheet says "11 hr 18 min later than planned", not "678 min", the Planned button no longer cuts off its time, and "What happens next" says "won't fit" or "session started" for those meals instead of showing a time they won't move to.
- **History puts today at the top as "Today · in progress".** The averages and the on-time share cover the days before today and say so, and "Nothing behind you yet" no longer shows once you've logged a meal.
- **Each day in History shows its stack and, on a day that ran on its own count, "4 meals (plan: 5)".** Older weeks read "6 of 7 carb surges on time".
- **Once your session starts, the widget stops holding up a carb surge you didn't log.**

### Bringing a plan in

- **Two plan files that each declare an ingredient under the same id (two coaches' "sauce") now keep both, each with its own figures.** Before, the second file's plates used its figures while the Ingredients shelf showed the first file's, and editing that ingredient changed the second file's plates.
- **A plan file that declares an ingredient under a built-in's id is refused, as the format says, instead of quietly standing in for the built-in.**
- **A plan file from a newer format now says to update the app, instead of saying it isn't a plan file.**
- **The plan skill's checker now refuses the files the app can't read (a stack with no name or no rest list, steps written as one line instead of a list), so a file it passes always opens.**

### Coach

- **A Coach message lost to a dropped connection on the way to the model no longer counts against your allowance.**
