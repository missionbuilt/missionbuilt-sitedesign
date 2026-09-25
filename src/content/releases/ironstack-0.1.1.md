---
app: ironstack
version: "0.1.1"
order: 1001
changes: 36
groups: [{"title": "Today", "slug": "today", "leads": ["Loading a workout no longer starts the session.", "You can change the workout before your first set: \"Change\" on Today, or beside Up next.", "A day with no workout behind it says so and offers a way on: pick a workout, add exercises, or start empty.", "A calmer screen during a session."]}, {"title": "Home", "slug": "home", "leads": ["Home is five sections, always in this order."]}, {"title": "Coach", "slug": "coach", "leads": ["Coach takes photos and files now.", "Send Coach the program you already have, as a photo, a PDF, a spreadsheet or a program file, and it writes it...", "Share a Coach conversation, or the whole transcript, as text from the ••• menu.", "A workout or program Coach writes down for you can be shared as an .ironstack file, the same kind the Plan..."]}, {"title": "Bringing history in", "slug": "bringing-history-in", "leads": ["History comes in from any spreadsheet now, not just Hevy, Strong and JuggernautAI.", "Anything that isn't a table, like a PDF, a photo of a paper log or another app's text file, can go to Coach..."]}, {"title": "Plan", "slug": "plan", "leads": ["One word for each thing.", "Build a workout from muscles.", "A program file whose workouts say which day they are comes in as a program, and the program counts the...", "A program you put together by hand becomes your current one when you give it its first workout and no other..."]}, {"title": "Names to check", "slug": "names-to-check", "leads": ["Names to check has a way out for every name.", "\"Unnamed lift\" rows offer Rename, so the numbers you said before naming the lift end up on the right lift for..."]}, {"title": "Logging a set", "slug": "logging-a-set", "leads": ["Timed sets take minutes.", "The next set starts from the one you just logged: weight, reps, RPE and gear.", "The gear list opens on what you've used lately."]}, {"title": "The clock", "slug": "the-clock", "leads": ["Change a lift's pace while its clock is running and the clock follows.", "Start a clock from the panel for a lift with no pace or rest written, and that lift takes the interval you...", "The spoken clock says \"Five seconds\" before any round or rest of 15 seconds or more, between \"Thirty seconds\"...", "The clock's voice is less robotic: it uses the best voice installed on your phone, at a calmer pace."]}, {"title": "Sharing", "slug": "sharing", "leads": ["Sharing a session shows its name with a pencil, so it's clear you can change it before it goes."]}, {"title": "Badges", "slug": "badges", "leads": ["Double Stacked: use Ironstack and MealStack on the same phone."]}, {"title": "Travel", "slug": "travel", "leads": ["Travel mode is on Today: a small Travel chip on the session header turns it on or off, and it's the same...", "New in Settings: Set travel automatically."]}, {"title": "Widgets", "slug": "widgets", "leads": ["The Home Screen widget sits on the app's dark ground at every size, with your phone in light or dark mode."]}, {"title": "What counts as weight lifted", "slug": "what-counts-as-weight-lifted", "leads": ["Log what one dumbbell, stack or loaded bar weighs.", "Each exercise has a Sides setting (both hands together, a pair, or one side at a time), guessed from its name...", "Because of this, pounds moved on past dumbbell and kettlebell sessions goes up, and so can the tonnage badges..."]}, {"title": "Fixes", "slug": "fixes", "leads": ["Tapping an Ironstack notification, from the lock screen or the Home Screen, could close the app instead of...", "In the last ten seconds of a clock, the panel at the top of Today was see-through, so the lift names scrolled...", "Opening the app after a session could say \"Get to work\" out of nowhere.", "Deleting a lift that came from a loaded workout stays deleted; it no longer comes straight back under Up next."]}]
status: in-progress
---

### Today

- **Loading a workout no longer starts the session.** Load it from Home, Plan or Today and it waits on Today: the workout, its first exercise with the sets the workout asks for (or what you did last time when the workout doesn't say), the exercises after it, and one Start button. Nothing runs and nothing is logged until you tap Start or log your first set.
- **You can change the workout before your first set: "Change" on Today, or beside Up next.** Your program's days come first, then the rest of your workouts, and you can search them.
- **A day with no workout behind it says so and offers a way on: pick a workout, add exercises, or start empty.** It used to open to an empty page.
- **A calmer screen during a session.** Three numbers at the top (time, sets, weight moved); tap them for what's left. "Hold to talk" is a lighter bar until you hold it. "Log set" beside the type field is the one way to the keypad, and "Add an exercise" sits at the foot of the day.

### Home

- **Home is five sections, always in this order:** Today (what's on the docket, with Load it and Pick another), Your people (Support right there), In your corner, Progress (the top insight from your last session, and your next badge), and Ask Coach.

### Coach

- **Coach takes photos and files now.** Attach a photo from your library or the camera, a PDF, or a CSV, text, JSON or .ironstack file to a message: the program your coach sent, the whiteboard at your gym, a page of an old log. Photos are shrunk before they go and aren't kept; the conversation shows a thumbnail and the file's name.
- **Send Coach the program you already have, as a photo, a PDF, a spreadsheet or a program file, and it writes it down for you: every day in order, your exercises, sets, reps and rest, and nothing the program doesn't say.** Weights come from your log. Tap the card to check it on the same preview a program file opens on, then bring it into Plan, as your current program if you like. Coach doesn't make programs up: ask for one without sending anything and it will ask you for the photo or the file.
- **Share a Coach conversation, or the whole transcript, as text from the ••• menu.**
- **A workout or program Coach writes down for you can be shared as an .ironstack file, the same kind the Plan tab opens, so a training partner can bring it in too.**

### Bringing history in

- **History comes in from any spreadsheet now, not just Hevy, Strong and JuggernautAI.** Pick a CSV from JEFIT, FitNotes, Fitbod, a coach's export or the sheet you've kept by hand, and Ironstack shows what it thinks each column is (date, exercise, sets, reps, weight, unit, RPE, notes, time, distance) with a live count of what that reads as. Change anything that's wrong, then check every session on the usual preview. It earns its badges and gets its "On the record" like any other history.
- **Anything that isn't a table, like a PDF, a photo of a paper log or another app's text file, can go to Coach from the same screen.** Coach reads the sessions off it and brings them back to that preview, and nothing goes in your log until you've checked it.

### Plan

- **One word for each thing.** A program is weeks of days, each day is a workout, an exercise is one movement, and a session is the time you actually train. The app uses them that way everywhere now, and Plan says so when it's empty.
- **Build a workout from muscles.** In Plan, pick the muscles you want to train (and a kind of training if you like: common, powerlifting, strongman, conditioning or machine) and Ironstack puts together four to six exercises from the collection, the ones you've done first, then compound before isolation. Swap, remove, add or reorder any of them, then load it or save it as a workout. It picks the exercises only: no sets, reps or weights, so last time fills in from your log as usual.
- **A program file whose workouts say which day they are comes in as a program, and the program counts the workouts in it, so every day it offers has a workout behind it.**
- **A program you put together by hand becomes your current one when you give it its first workout and no other program is current.**

### Names to check

- **Names to check has a way out for every name.** Swipe one, or press and hold, to keep it as it is or to hide it. Hidden names are one tap away at the bottom of the list, and your sets stay exactly as you logged them.
- **"Unnamed lift" rows offer Rename, so the numbers you said before naming the lift end up on the right lift for today's session.**

### Logging a set

- **Timed sets take minutes.** Tap the time and type 5 for five minutes, 5:30, or 1:05:00 for a long one; a switch on the keypad says whether a plain number is minutes or seconds. The + and − buttons move 15 seconds under two minutes, 30 seconds under ten, and a minute above that.
- **The next set starts from the one you just logged: weight, reps, RPE and gear.** A loaded workout's planned sets still win for whatever they spell out, and a weight you set on the exercise page wins over the last set.
- **The gear list opens on what you've used lately:** your last five pieces, today's first, then what this lift usually wears. No more searching for your belt every set.

### The clock

- **Change a lift's pace while its clock is running and the clock follows:** the round you're on starts again at the new interval and keeps its number. A new rest changes the rest clock the same way.
- **Start a clock from the panel for a lift with no pace or rest written, and that lift takes the interval you started.** One you already wrote is never changed.
- **The spoken clock says "Five seconds" before any round or rest of 15 seconds or more, between "Thirty seconds" and "Get to work".**
- **The clock's voice is less robotic: it uses the best voice installed on your phone, at a calmer pace.** A new Voice row in Settings, under "Say the clock out loud", lists the natural voices you have, with a Preview, and says where iOS keeps more to download.

### Sharing

- **Sharing a session shows its name with a pencil, so it's clear you can change it before it goes.** It starts on the name closest to your workout's ("Week 3 Squat day" starts as "Squat day"). Names still come from the list, because nothing on a card is typed, and changing it renames the card, not your log.

### Badges

- **Double Stacked: use Ironstack and MealStack on the same phone.** It's a new family on the Badges page, Both stacks, with a Stacked week, a Stacked month and Stacked for 100 for days you train here and use MealStack too. MealStack has Double Stacked as well, with the same medal.

### Travel

- **Travel mode is on Today:** a small Travel chip on the session header turns it on or off, and it's the same switch MealStack uses.
- **New in Settings: Set travel automatically.** It asks for your location once, takes where you are as home, and turns travel on when you're more than 100 km away and off when you're back. Turning travel on or off yourself always wins. "Set home to here" and "Forget home" are there if home moves.

### Widgets

- **The Home Screen widget sits on the app's dark ground at every size, with your phone in light or dark mode.** It used to be a pale tile in light mode. Lock Screen widgets are unchanged.

### What counts as weight lifted

- **Log what one dumbbell, stack or loaded bar weighs.** Pounds moved counts a pair of dumbbells or kettlebells twice, a single-arm or single-leg set once, and a set done on each side for both sides. Handles, ropes and straps add nothing.
- Each exercise has a Sides setting (both hands together, a pair, or one side at a time), guessed from its name and changeable on the exercise's page or from the line under the weight when you log a set, which says what the set counts: "60 lb each hand · counts 960 lb".
- **Because of this, pounds moved on past dumbbell and kettlebell sessions goes up, and so can the tonnage badges they count toward.**

### Fixes

- **Tapping an Ironstack notification, from the lock screen or the Home Screen, could close the app instead of opening it.** It opens now.
- **In the last ten seconds of a clock, the panel at the top of Today was see-through, so the lift names scrolled through the numbers.** It stays solid now.
- **Opening the app after a session could say "Get to work" out of nowhere.** The clock now stops when the session ends.
- **Deleting a lift that came from a loaded workout stays deleted; it no longer comes straight back under Up next.** Up next rows also swipe to skip a lift for today, and pressing and holding a lift on Today offers Delete exercise too.
