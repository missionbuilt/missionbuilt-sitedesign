---
app: ironstack
version: "0.1.1"
order: 1001
changes: 30
groups: [{"title": "Today", "slug": "today", "leads": ["Distances read in the exercise's own unit: a row says \"2,000 m\", a loaded sled push \"90 · 150 ft\".", "A plan's distance column uses the same unit.", "A coach's note on an exercise shows on its card while it's up (\"From @coach:\"), and a coach's video link..."]}, {"title": "Stack AI", "slug": "stack-ai", "leads": ["Photos and files are under + in Stack AI's bar, beside the camera.", "Turning on Stack AI from Settings works again.", "The phone answers what it can from your own log, even with Stack AI off.", "With Stack AI off, a question that needs it waits for your yes; Not now puts it back in the box, unsent.", "On a drill like free throws, Stack AI and the share card count makes in the drill's own word."]}, {"title": "Exercises", "slug": "exercises", "leads": ["16 more lifts in the library, among them barbell lunge and split squat, B-stance RDL, dumbbell hip thrust...", "Library search puts your own sport first once you've logged a drill of it, so a lacrosse player finds wall...", "Fixed (in build 74 too): you couldn't find the way to add an exercise the list doesn't have, from Swap, Add...", "A dumbbell or kettlebell lift's estimated max is for one dumbbell, and says so: \"99 lb each\".", "Testing: Info, on a swipe right after History in Plan, the library and Add an exercise."]}, {"title": "Apple Watch", "slug": "apple-watch", "leads": ["Fixed (in build 74 too): after your last planned set, the watch shows Every set logged and Finish right away...", "Heart rate keeps its last number instead of disappearing.", "A distance set reaches the watch as its distance, in metres, feet or yards, not as \"1 rep\"."]}, {"title": "Home and Social", "slug": "home-and-social", "leads": ["A program's next workout follows where you are.", "Home's last card no longer shows through the tab bar.", "When nothing new has come in for two days, the feed says where your own shares are."]}, {"title": "Coach mode", "slug": "coach-mode", "leads": ["Opening Coach mode starts with one screen: Coach someone, or Get coached.", "Accepting a coach is one switch, and you choose how far back they see...", "A coach can keep notes about a lifter on their own phone.", "A coach can copy a week forward: the same, +5 lb (or +2.5 kg), or +1 rep on the main lifts.", "Heart rate and calories from a workout file you import stay on your phone."]}, {"title": "Gym board", "slug": "gym-board", "leads": ["Your workout can show on a big screen.", "You keep logging on the phone or the watch; the board follows while IronStack is open.", "While a board shows your workout, the phone and the watch buzz instead of speaking, so there's one voice in...", "Once you've paired, Settings › Board says \"On the board\" while a board shows your workout, or \"Not connected\".", "Delete all IronStack data forgets every board too, and says that a board keeps this iPhone until you forget...", "Without IronStack, the board's code opens missionbuilt.io/join: what the board is and how to get IronStack."]}]
status: in-progress
---

**Your training, on every screen.**

**NEW: MissionStack, the big-screen side of IronStack.** A second app for iPad, Mac and Apple TV, in TestFlight today. In this build it puts your live workout on a gym board: open the board, point your iPhone's Camera at the code, tap Pair. Your set, load, rest clock and records show across the room while you keep logging on your phone or watch. The board keeps nothing; your workout stays on your iPhone. **Coming soon:** plan your workouts and your meals on iPad and Mac, in sync with IronStack and MealStack.

**NEW: Coach mode, for working with a coach or coaching someone.** A coach sees the workouts you log, sends you programs and leaves notes on your lifts. Open Coach mode and pick Coach someone or Get coached. Accepting a coach is one switch, and you choose how far back they see: today, 30, 60 or 90 days, or everything. Narrow it later and the older workouts leave your coach's copy. Coaches can keep their own notes on each lifter and copy a week forward with a small bump.

**TESTING: Exercise demos.** We're testing how you'll learn a lift in IronStack with 4 lifts: squat, bench press, deadlift and bent-over row. Swipe right on one and tap Info: a looping demo, what to set up, what you should feel, and the common miss. Squat, bench and deadlift have a male and a female demo; their pause, tempo and other versions use the same one. Every other lift shows a "Search this lift" link for now. The full library is coming: licensed animations for every lift, plus videos Mike films himself for the most common ones.

**Faster answers that never leave your phone.** Ask Stack AI your best squat, this week's total or how to load 140 kg, and the answer comes back instantly from your own log. Nothing is sent anywhere, it works with no signal, and it works with Stack AI off.

**Also:** a program's next workout follows where you are, not the top of the list. Rows, runs and sled pushes read in their own units. 16 more lifts in the library. A dumbbell lift's estimated max is per dumbbell. Heart rate on the watch keeps its last number and shows when it's old.

**Try this:** run one workout with the board up on a TV or iPad. Then tap Info on your squat, bench or deadlift and tell us if the cues match how you actually lift it.

## Every change in this build

### Today

- **Distances read in the exercise's own unit: a row says "2,000 m", a loaded sled push "90 · 150 ft".** Rowing, ski, bike and air-bike ergs start in metres for everyone; runs start in miles on a US phone. The set sheet's unit is now a menu with ft, yd, m, km and mi, and your pick is kept for that exercise. What was logged never changes when you switch.
- **A plan's distance column uses the same unit.**
- **A coach's note on an exercise shows on its card while it's up ("From @coach:"), and a coach's video link reads "Watch the video on youtube.com", naming the site before you tap.**

### Stack AI

- **Photos and files are under + in Stack AI's bar, beside the camera.**
- **Turning on Stack AI from Settings works again:** the permission sheet stays up until you answer, and Settings stays open behind it. In build 74 it closed by itself and Stack AI stayed off.
- **The phone answers what it can from your own log, even with Stack AI off:** your best on a lift, how often and when you last did it, a day's workouts, this week's total, plate math ("how do I load 140 kg") and library swaps. Those answers say they came from your phone and never go to Stack AI.
- **With Stack AI off, a question that needs it waits for your yes; Not now puts it back in the box, unsent.**
- **On a drill like free throws, Stack AI and the share card count makes in the drill's own word:** "19 makes", "3 goals".

### Exercises

- **16 more lifts in the library, among them barbell lunge and split squat, B-stance RDL, dumbbell hip thrust, band-assisted pull-up, kneeling push-up, back lever, block snatch and four stretches.**
- **Library search puts your own sport first once you've logged a drill of it, so a lacrosse player finds wall ball the lacrosse way.** Since build 74 every search put sport drills first; that's fixed. Adding a name as typed says which lift it becomes, aloud too.
- **Fixed (in build 74 too):** you couldn't find the way to add an exercise the list doesn't have, from Swap, Add an exercise, Plan's search, the exercise library or Add to a workout. It sat under a dozen close matches, below the keyboard. Now "Add “Seated Trap Bar Press” as your own exercise" is the first row once you type, and it adds the name as you typed it.
- **A dumbbell or kettlebell lift's estimated max is for one dumbbell, and says so: "99 lb each".** A set logged per hand and one logged as a pair now give the same number, and per-hand sets count toward records and weight suggestions.
- **Testing: Info, on a swipe right after History in Plan, the library and Add an exercise.** Squat, bench press, deadlift and bent-over row show a looping demo with no sound (squat, bench and deadlift with a male and a female model, opening on the one your profile says), then Set up, Feel it, Common miss and the muscles worked. Their pause, tempo and other versions use the same demo. The overhead press shows its cues without a demo. Every lift without a demo has Search this lift.

### Apple Watch

- **Fixed (in build 74 too):** after your last planned set, the watch shows Every set logged and Finish right away, with Log another set under it, instead of sitting on the last set. While your iPhone asks to end the workout, the watch says Finishing on your iPhone, then shows Stacked when the phone saves.
- **Heart rate keeps its last number instead of disappearing:** dimmed with an outlined heart after 10 seconds, faint with a slashed heart once the signal's been gone a minute. VoiceOver says how old it is.
- **A distance set reaches the watch as its distance, in metres, feet or yards, not as "1 rep".**

### Home and Social

- **A program's next workout follows where you are:** finish workout 3 and workout 4 is next, wherever it sits, and the list keeps your order. On a long program, Home and Today count past seven. "Make this next" in a workout's ••• menu moves the next mark there, with Undo. Choosing the day in Settings › Program moves it too.
- **Home's last card no longer shows through the tab bar.**
- When nothing new has come in for two days, the feed says where your own shares are: "Workouts you share are on your profile, under Your posts."

### Coach mode

- **Opening Coach mode starts with one screen: Coach someone, or Get coached.**
- **Accepting a coach is one switch, and you choose how far back they see (today, 30, 60 or 90 days, or everything).** You can change it later; narrowing it removes the older workouts from your coach's copy.
- **A coach can keep notes about a lifter on their own phone.**
- **A coach can copy a week forward: the same, +5 lb (or +2.5 kg), or +1 rep on the main lifts.**
- **Heart rate and calories from a workout file you import stay on your phone:** your coach sees the set's distance and watts, never those.

### Gym board

- **Your workout can show on a big screen:** the board in MissionStack (a separate TestFlight app) on an iPad, a Mac or an Apple TV, on the same Wi-Fi. Point the iPhone's Camera at the code on the board and IronStack asks "Pair with this board?", over whatever screen is open. Nothing pairs without your tap. If a board is already showing your workout, it asks "Move this workout to this board?" instead.
- **You keep logging on the phone or the watch; the board follows while IronStack is open.** When the iPhone locks, the board says "iPhone away" after a minute and keeps your last sets, and it catches up when you open IronStack again.
- **While a board shows your workout, the phone and the watch buzz instead of speaking, so there's one voice in the room.** The board can pause, resume and restart; only you log a set, on the phone or the watch.
- **Once you've paired, Settings › Board says "On the board" while a board shows your workout, or "Not connected".** "Forget boards" forgets every board this iPhone paired with. A board keeps this iPhone until you forget it on the board too, and Settings says so.
- **Delete all IronStack data forgets every board too, and says that a board keeps this iPhone until you forget it there.**
- **Without IronStack, the board's code opens missionbuilt.io/join: what the board is and how to get IronStack.**
