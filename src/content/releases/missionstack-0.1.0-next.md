---
app: missionstack
version: "0.1.0"
order: 1000
changes: 51
groups: [{"title": "Getting started", "slug": "getting-started", "leads": ["MissionStack is on TestFlight for the first time.", "Everything you do here is saved on this iPad or Mac.", "The first time you open it, Welcome asks where you want to start.", "The sidebar has Home, Social, Insights, Plan and Food, then Board, Settings and Stack AI.", "Hide the sidebar for more room with its button, or ⌘0 with a keyboard."]}, {"title": "Board", "slug": "board", "leads": ["Your workout on the big screen.", "Pair iPhone shows a QR.", "The board shows the exercise and set you're on, the workout's exercises with prep sets marked, the rest or...", "Beside the exercise squares the board says how far through the workout you are, like \"5 OF 9\", and beside the...", "A record flashes on the board for a few seconds at the set that made it.", "While a clock is running, Pause on the board, or the space bar with a keyboard, pauses the clock on your...", "The board speaks the clock cues out loud, in the same recorded voice you picked in IronStack.", "If your iPhone locks or IronStack closes, after a minute the board says \"iPhone away\" and keeps the last...", "On iPad, leave MissionStack while the board is up and come back within 10 minutes.", "The screen stays awake while a workout is on the board.", "If your iPad or Mac asks to use the local network, say yes: the board needs it to find your iPhone."]}, {"title": "Apple TV", "slug": "apple-tv", "leads": ["MissionStack on Apple TV is the board.", "The Siri Remote: Play/Pause pauses or resumes the clock.", "Once a phone is remembered, Forget all phones is on the TV's home page.", "The TV board always speaks the clock cues in this build; there's no switch for it yet.", "MissionStack has its own icon on the TV, which tilts as you move to it, and a Top Shelf picture."]}, {"title": "Plan", "slug": "plan", "leads": ["Plan is where your program lives, one workout at a time, with the week's days beside it.", "Add an exercise by typing it, like \"front squat 3x5 @7\", which fills in the sets, reps and RPE.", "Open an exercise to change its sets, reps, load and RPE, with minus and plus beside the load.", "Every exercise has one menu: Swap, Duplicate, Copy to, Move to, Add a Note and Remove.", "Every workout has one menu too: Cut, Copy, Paste, Rename Workout, Duplicate, Copy to, Move to, Add a Note and...", "Notes on a workout or an exercise: add one, change it, or clear it.", "Group exercises next to each other into a superset or a circuit, and ungroup them.", "Drag a workout to another day, and MissionStack asks: this week only, or every week.", "Step between the plan's weeks, copy this week forward, or add a week.", "Tap Select, then tap rows, to change several exercises at once.", "Every change can be undone.", "Find or do anything: type to add an exercise to a day or open a day.", "With a keyboard: ⌘Z and ⇧⌘Z, cut, copy and paste, the arrow keys to move between exercises, Return to open...", "See starters lists the starter programs.", "Settings › About › Before you start shows that note again whenever you want to read it."]}, {"title": "Home", "slug": "home", "leads": ["Home shows a week at a time once you have a plan.", "Last week and Next week step through the weeks that have a plan.", "One line at the top says where to start, from what's true right now.", "Tap a day that's still ahead to open it in Plan."]}, {"title": "Settings", "slug": "settings", "leads": ["Appearance: Light or dark, or System to match your iPad or Mac.", "Units: weights in Pounds or Kilos.", "Board: Voice cues, how many phones this iPad or Mac remembers, and Forget all phones.", "Your data › Export: your plan and settings in one file, to keep or to bring back.", "Your data › Import: pick a MissionStack export file, and you see what it replaces before anything changes.", "Your data › Delete all data: your plan, settings and remembered phones go from this iPad or Mac."]}, {"title": "Accessibility", "slug": "accessibility", "leads": ["Plan, the starters, Settings and the Board page pass Apple's accessibility checks, in light and in dark.", "Text grows with your text size.", "Every button and control has a name VoiceOver reads.", "The quieter lines under titles and the small labels are a stronger shade on every page, the one Settings had...", "On the Plan page with a keyboard, VoiceOver names Shift-Up and Shift-Down..."]}]
status: in-progress
---

**Your workout on the big screen.**

**NEW: MissionStack.** The third Mission Built app, made for the big screens: iPad, Mac and Apple TV. IronStack and MealStack run your day from your phone; MissionStack is where you'll see and plan it on a screen your size. This first build has two things: the gym board and workout planning.

**NEW: The gym board.** Your live workout on an iPad, a Mac or an Apple TV. Choose Start on my own, scan the code with your iPhone's Camera, and the set you're on, the load, the rest clock and your records show big enough to read across the room. You still log on your iPhone or watch; the board only shows. When you finish it says Stacked with your time, volume and records, then keeps nothing: your workout is saved on your iPhone. On Apple TV the Siri Remote pauses the clock. Pairing needs IronStack's TestFlight build from today.

**TESTING: Plan your training on iPad and Mac.** Start empty, type "front squat 3x5 @7" and the sets, reps and RPE fill in. Drag workouts between days, make a superset, swap a lift, copy a week forward. Every change can be undone, and a keyboard makes it faster. For now your plan stays on this iPad or Mac; it doesn't reach your iPhone yet.

**TESTING: Put a program on your plan.** Starters has one placeholder program so you can try it: pick a week, read the note that comes with it, and its workouts land on that week, with one Undo. The real starter programs come next.

**Also:** the pairing sheet closes by itself when your phone joins. The board's voice no longer stops your music; it dips it under a spoken line. "5 OF 9" beside the exercise squares and "3 OF 3" beside the set ticks show where you are.

**Coming soon:** sync with IronStack, so a week planned here is on your phone at the gym; meal planning with MealStack; the real starter programs; Team lifts on the board; Stack AI. They're in the sidebar marked "Not built yet" so you can see where they'll go.

**Try this:** pair your iPhone with the board and run one real workout start to finish. Tell us anything the board showed that didn't match your phone, and how far away you could still read it. Then plan next week on the iPad and tell us what felt slower than it should.

## Every change in this build

### Getting started

- **MissionStack is on TestFlight for the first time.** It runs on iPad, on an Apple silicon Mac (as an iPad app), and on Apple TV, where it is the board only.
- **Everything you do here is saved on this iPad or Mac.** Nothing syncs with your iPhone in this build: the sidebar's foot says "Saved on this iPad." (or Mac) and "Sync is not set up yet."
- **The first time you open it, Welcome asks where you want to start.** See starters and Start empty work in this build; Bring it over shows, but is off for now.
- **The sidebar has Home, Social, Insights, Plan and Food, then Board, Settings and Stack AI.** Social, Insights, Food and Stack AI say what they will be, marked "Not built yet".
- **Hide the sidebar for more room with its button, or ⌘0 with a keyboard.** It stays the way you left it.

### Board

- **Your workout on the big screen.** Start on my own, pair your iPhone, and the workout IronStack is running shows here, big enough to read across the room. You still log on your iPhone or Watch, as always. Pairing needs the IronStack TestFlight build that comes out the same day as this one.
- **Pair iPhone shows a QR.** Scan it with your iPhone's Camera. Turn on Remember this iPhone before you scan, and next time it joins without scanning. The pairing card closes on its own as soon as your iPhone joins.
- **The board shows the exercise and set you're on, the workout's exercises with prep sets marked, the rest or EMOM clock, and the workout time and volume.** Every load carries its unit.
- **Beside the exercise squares the board says how far through the workout you are, like "5 OF 9", and beside the set ticks how far through the exercise, like "3 OF 3".**
- **A record flashes on the board for a few seconds at the set that made it.** Finish on your iPhone and the board says Stacked, with your time, sets, volume and records, and "Your workout is saved on your iPhone". The board keeps none of it.
- **While a clock is running, Pause on the board, or the space bar with a keyboard, pauses the clock on your iPhone too.**
- **The board speaks the clock cues out loud, in the same recorded voice you picked in IronStack.** Your music keeps playing: on iPad it dips only while a cue is spoken; on a Mac the cue plays over it. Settings › Board › Voice cues turns the cues off.
- **If your iPhone locks or IronStack closes, after a minute the board says "iPhone away" and keeps the last thing it showed.** It catches up when you open IronStack again.
- **On iPad, leave MissionStack while the board is up and come back within 10 minutes:** the board opens again and a remembered iPhone reconnects. After that, start it again from Board. On a Mac the board keeps running while you use other apps.
- **The screen stays awake while a workout is on the board.**
- **If your iPad or Mac asks to use the local network, say yes: the board needs it to find your iPhone.** If it's turned off, the board says where to turn it back on.

### Apple TV

- **MissionStack on Apple TV is the board.** Choose Start on my own, pair your iPhone, and your workout shows on the TV.
- **The Siri Remote: Play/Pause pauses or resumes the clock.** Swipe down for Pair iPhone, Pause and Close; Back puts them away, and Back again closes the board. Select on its own does nothing, so a nudged remote changes nothing.
- **Once a phone is remembered, Forget all phones is on the TV's home page.** It asks first, and the remote rests on Keep them. Everyone who uses that Apple TV shares the list.
- **The TV board always speaks the clock cues in this build; there's no switch for it yet.** Music from another app keeps playing and dips only while a cue is spoken.
- **MissionStack has its own icon on the TV, which tilts as you move to it, and a Top Shelf picture.**

### Plan

- **Plan is where your program lives, one workout at a time, with the week's days beside it.** Start empty on Welcome gives you an empty week to build: this week, or next week if you start on a Friday, Saturday or Sunday, and Plan says the day it starts. A MissionStack export file (Settings › Your data › Import) brings a plan back.
- **Add an exercise by typing it, like "front squat 3x5 @7", which fills in the sets, reps and RPE.**
- **Open an exercise to change its sets, reps, load and RPE, with minus and plus beside the load.** Set by set shows each set on its own row, and "Use set 2 for all 3 sets" copies one set to the rest.
- **Every exercise has one menu: Swap, Duplicate, Copy to, Move to, Add a Note and Remove.** Swap keeps the sets and the note.
- **Every workout has one menu too:** Cut, Copy, Paste, Rename Workout, Duplicate, Copy to, Move to, Add a Note and Delete Workout.
- **Notes on a workout or an exercise: add one, change it, or clear it.**
- **Group exercises next to each other into a superset or a circuit, and ungroup them.** A group of two can be made a PAP pair.
- **Drag a workout to another day, and MissionStack asks: this week only, or every week.** Your plan stays the same unless you say every week.
- **Step between the plan's weeks, copy this week forward, or add a week.**
- **Tap Select, then tap rows, to change several exercises at once.**
- **Every change can be undone.** After each one a line says what just happened, with Undo, and the Undo and Redo buttons name what they undo.
- **Find or do anything: type to add an exercise to a day or open a day.**
- **With a keyboard:** ⌘Z and ⇧⌘Z, cut, copy and paste, the arrow keys to move between exercises, Return to open one, ⇧⌘R to rename a workout, ⇧⌘N for a note, ⌥⌘G to group and ⇧⌥⌘G to ungroup. On iPad, hold ⌘ to see every key; on a Mac they're in the menus.
- **See starters lists the starter programs.** For now there is one, marked Placeholder, so you can see how they work. The first time, Use this program shows Before you start. Then it asks which week to start: this week or next (from Friday on, next week or the week after). It goes on your plan from that week, every week of the program, and one Undo takes it all off.
- **Settings › About › Before you start shows that note again whenever you want to read it.**

### Home

- **Home shows a week at a time once you have a plan:** seven days, Monday to Sunday, with each day's training and a row for food, which says "Not set up yet".
- **Last week and Next week step through the weeks that have a plan.** On any other week, a This week button brings you back.
- **One line at the top says where to start, from what's true right now:** plan next week, look over today's workout, or that next week is planned already.
- **Tap a day that's still ahead to open it in Plan.**

### Settings

- **Appearance: Light or dark, or System to match your iPad or Mac.**
- **Units: weights in Pounds or Kilos.** Every load in the app follows it. Pounds unless you pick.
- **Board: Voice cues, how many phones this iPad or Mac remembers, and Forget all phones.** Deleting the app doesn't forget them, so use Forget all phones first if you want them gone.
- **Your data › Export: your plan and settings in one file, to keep or to bring back.** The file goes only where you save it. With no plan there's nothing to export, and the button is off.
- **Your data › Import: pick a MissionStack export file, and you see what it replaces before anything changes.**
- **Your data › Delete all data: your plan, settings and remembered phones go from this iPad or Mac.** It asks first, with Export first beside Cancel. Your iPhone keeps its IronStack log.

### Accessibility

- **Plan, the starters, Settings and the Board page pass Apple's accessibility checks, in light and in dark.**
- **Text grows with your text size.** At the largest sizes, and in a narrow Split View window, rows that don't fit side by side stack instead of cutting words off.
- **Every button and control has a name VoiceOver reads.**
- **The quieter lines under titles and the small labels are a stronger shade on every page, the one Settings had, so they're easier to read in light and in dark.**
- **On the Plan page with a keyboard, VoiceOver names Shift-Up and Shift-Down "Add the previous exercise to the selection" and "Add the next exercise to the selection".**
