---
app: ironstack
version: "0.1.1"
order: 1001
changes: 28
groups: [{"title": "Today", "slug": "today", "leads": ["Changes you make during a workout are for today only, with no question each time.", "You can rename today's workout from the ⋯ menu (\"Rename\").", "Exercises you add or remove, notes, a new order and groups also join the Finish question, each with its own...", "If IronStack can't save a change, a bar says so and keeps trying, even if you close the app.", "Kill and reopen the app mid-workout and you are exactly where you were."]}, {"title": "Exercises", "slug": "exercises", "leads": ["1ct Pause Bench is its own exercise now."]}, {"title": "Stack AI", "slug": "stack-ai", "leads": ["Meet Stack AI: on a fresh install, or the first time you open Stack AI if you've never said yes or no to it...", "When you're offline, Stack AI is busy, your month is used up or the server fails, Stack AI says so in one...", "A question waiting on \"Send it again\" is still there after you kill the app, and the answer held for you is...", "A question that is too long is handed back to type shorter."]}, {"title": "Bring in", "slug": "bring-in", "leads": ["A file with nothing in it, only a header, or a date IronStack can't read now says so in one line instead of...", "Bringing in a file with an exercise name IronStack doesn't know now says \"1 exercise needs a match.\" with a...", "Your export, brought back in on a clean phone, gives back the same log, and keeps a program's coach.", "A brought-in program never replaces or doubles one of yours (it gets \" (2)\"), and one line says what was...", "After a bring-in, \"Have Stack AI read it\" is on the done screen."]}, {"title": "Plan", "slug": "plan", "leads": ["Edit works the same on Today and in Plan.", "A week takes an eighth workout and more: + Add a workout is never dimmed.", "Groups go by count, with \"Make it a PAP pair\" and \"Make it a superset\"."]}, {"title": "Coach", "slug": "coach", "leads": ["A program whose coaching ended stays yours after an export and a bring-in.", "When coaching ends, the programs you started stay and become your own, to edit and copy.", "When the limit on lifters drops below the number you coach, nobody is unlinked, new invites and requests are..."]}, {"title": "Settings", "slug": "settings", "leads": ["Settings are grouped into categories.", "Settings › Stack AI shows how much of your allowance is used and when it resets, when the server sends it."]}, {"title": "Support", "slug": "support", "leads": ["A Support you saw on the lock screen mid-workout comes back to your notifications after the workout, with no..."]}, {"title": "Fixes", "slug": "fixes", "leads": ["Fixed a crash on launch for a workout whose log had a repeated event, which could happen after a failed save...", "The rest timer on the watch no longer shows dashes when your wrist is down.", "The chosen tile on the watch's RPE picker no longer paints up over the title and the clock."]}, {"title": "Apple Watch", "slug": "apple-watch", "leads": ["After you finish, the watch says \"Today's changes wait on your iPhone\" until you answer the question there."]}]
status: shipped
build: 80
---

### Today

- **Changes you make during a workout are for today only, with no question each time.** Swaps, planned sets and pace stay today's. When you finish, "Save today's changes to {workout}?" lists each one with a switch, all off. Save puts the ones you switch on into the workout; Not now keeps them for today only. On a coach's plan the button says "Suggest to @coach", and only swaps and sets can be switched on. A workout ended on your Apple Watch asks the next time you open the app. "Just today" and "Every time" are gone from Swap, Plan sets and the pace picker.
- **You can rename today's workout from the ⋯ menu ("Rename").** The new name shows on Today, Up next and your watch right away, and it joins the Finish question as "Rename to {name}".
- **Exercises you add or remove, notes, a new order and groups also join the Finish question, each with its own switch: "Add Farmer Carry", "Remove RDL", "New order: Leg Press, Back Squat, RDL".** Undo changes the list along with the workout.
- **If IronStack can't save a change, a bar says so and keeps trying, even if you close the app.** Retry saves it, and only once.
- **Kill and reopen the app mid-workout and you are exactly where you were:** the sets you logged are there once, a rest keeps the time it had left, and a workout you are logging for a lifter is still theirs.

### Exercises

- **1ct Pause Bench is its own exercise now.** Clean Deadlift is Conventional Deadlift: the lift is renamed in your log and workouts the first time you open this build, and typing Clean Deadlift finds Conventional Deadlift.

### Stack AI

- **Meet Stack AI:** on a fresh install, or the first time you open Stack AI if you've never said yes or no to it, a short page introduces it. Its headline is "Stack AI reads what you log."
- **When you're offline, Stack AI is busy, your month is used up or the server fails, Stack AI says so in one line.** Questions your phone can answer still get answered.
- **A question waiting on "Send it again" is still there after you kill the app, and the answer held for you is fetched once.**
- **A question that is too long is handed back to type shorter.** A weight suggestion for an exercise you've since removed does nothing and says so. An answer that arrives after you turned Stack AI off is not shown.

### Bring in

- **A file with nothing in it, only a header, or a date IronStack can't read now says so in one line instead of importing part of it.** Files from Excel (comma decimals, day-first dates, a byte-order mark) read properly.
- **Bringing in a file with an exercise name IronStack doesn't know now says "1 exercise needs a match." with a Match them button that opens Names to check.** The sets are already in your log.
- **Your export, brought back in on a clean phone, gives back the same log, and keeps a program's coach.**
- A brought-in program never replaces or doubles one of yours (it gets " (2)"), and one line says what was added, such as "Added 3 programs and 12 workouts."
- **After a bring-in, "Have Stack AI read it" is on the done screen.**

### Plan

- **Edit works the same on Today and in Plan:** Group, Ungroup, Swap, Note and Remove, with Undo lines such as "Made a superset", "Grouped" and "Ungrouped". Plan has Add a note, Edit note and Clear note (read only on a coach's plan), Swap, and renaming a program.
- **A week takes an eighth workout and more: + Add a workout is never dimmed.**
- **Groups go by count, with "Make it a PAP pair" and "Make it a superset".**

### Coach

- **A program whose coaching ended stays yours after an export and a bring-in.**
- **When coaching ends, the programs you started stay and become your own, to edit and copy.** A plan of one workout reads "Use this workout", and Coach mode's entry reads "Get a coach". The weekly read is gone from release builds.
- **When the limit on lifters drops below the number you coach, nobody is unlinked, new invites and requests are refused, and the coach is told the limit.**

### Settings

- **Settings are grouped into categories.**
- **Settings › Stack AI shows how much of your allowance is used and when it resets, when the server sends it.**

### Support

- **A Support you saw on the lock screen mid-workout comes back to your notifications after the workout, with no banner and no sound.**

### Fixes

- **Fixed a crash on launch for a workout whose log had a repeated event, which could happen after a failed save was retried.**
- **The rest timer on the watch no longer shows dashes when your wrist is down.**
- **The chosen tile on the watch's RPE picker no longer paints up over the title and the clock.**

### Apple Watch

- **After you finish, the watch says "Today's changes wait on your iPhone" until you answer the question there.** A renamed workout shows its new name on the watch.
