---
app: ironstack
version: "0.1.1"
order: 1001
changes: 58
groups: [{"title": "Apple Watch", "slug": "apple-watch", "leads": ["IronStack is on Apple Watch.", "Swipe between its pages: Set, Clock, Controls and the workout.", "After every log the watch moves on.", "The Clock page has the rest, EMOM and the timer for timed sets, with your heart rate in the corner.", "Start a workout on your phone and IronStack opens on your watch.", "The watch's cues are taps on your wrist: one at 30 seconds, two at 5, a long one at 0.", "Finish on either one and both finish.", "The watch follows Save my workouts to Health: with it off, IronStack saves no workout to Health.", "Phone out of reach?", "Your heart rate shows on the phone's clock too, while the watch is in the workout.", "Which build is on the watch: at the foot of its screens and in Settings › Apple Watch, with a line when the...", "If your iPhone has a watch without IronStack, Today offers \"Add IronStack to your Apple Watch\" until you...", "New badges, On your wrist: workouts run with the watch."]}, {"title": "Today", "slug": "today", "leads": ["One tap logs exactly one set, on the phone or the watch.", "Unlog a set logged by mistake: swipe left on it for Unlog or Delete, or use its press and hold menu.", "Swipe right on an exercise for History; swipe left for Swap or Remove.", "Swap shows the closest exercises first: same movement and muscles, equipment at your gym, ones you've done.", "Undo never covers a button.", "Plan sets, in an exercise's press and hold menu, sets up its sets, reps and weights without logging anything."]}, {"title": "The clock", "slug": "the-clock", "leads": ["A timer for timed sets: planks, holds, carries.", "The clock follows each exercise's pace.", "Every spoken cue is a recording now, never a computer voice.", "A running clock folds to one line.", "The numbers hold still as they count down, instead of shifting sideways every second.", "Coming back to the app no longer plays a cue for a rest that ended while you were away."]}, {"title": "Lock Screen and Dynamic Island", "slug": "lock-screen-and-dynamic-island", "leads": ["The Live Activity leads with the clock.", "MealStack's card steps back while an IronStack workout is live."]}, {"title": "Logging a set", "slug": "logging-a-set", "leads": ["\"+ Add weight\" on any set's load.", "Volume counts each added weight in full and a band at half its rating.", "The next set opens on everything the last one had.", "Each tap on a plate puts exactly one more pair on the bar, and the total is always the bar plus the plates...", "Changing the bar keeps the plates you tapped, and the number follows: a 35 bar with 70 a side reads 175."]}, {"title": "Supersets and circuits", "slug": "supersets-and-circuits", "leads": ["A round rests the group's one rest, even when it ends early because the last exercise is out of sets.", "Ask Stack AI to \"superset these two\" and it groups what's on today."]}, {"title": "Plan", "slug": "plan", "leads": ["A workout lives in one place.", "A program can run a set number of weeks (\"Runs 8 weeks\", from the program's ···), or repeat its list with no...", "One search on Plan finds programs, workouts and exercises.", "Tap any workout in a program and it opens.", "Each step of putting an exercise into a workout, or a workout into a program, can be undone.", "Adding an exercise from Plan offers Today's workout, then an existing workout, then a new one.", "Pilates, barre, yoga and more conditioning."]}, {"title": "Home", "slug": "home", "leads": ["After a workout, until midnight, Home opens with its recap.", "The Home section of people who supported you is called Lifted you, as it is in Social."]}, {"title": "Social", "slug": "social", "leads": ["Reporting a handle or a card name says reports are reviewed with help from Anthropic's Claude."]}, {"title": "Coach mode (beta)", "slug": "coach-mode-beta", "leads": ["Coach mode is a small beta: only some accounts see it.", "With it, Social › Your people links you with a coach by handle or by invite link...", "A coach's plan comes to Today with Use this plan or Look first."]}, {"title": "Stack AI", "slug": "stack-ai", "leads": ["Coach is now called Stack AI.", "Stack AI no longer gets where you trained (your gym's name or your town) with your workouts.", "Stack AI is off until you turn it on.", "Stack AI says it's an AI and can be wrong under every chat, and its replies are labelled."]}, {"title": "Everywhere", "slug": "everywhere", "leads": ["One top bar: Settings, then Stack AI, top left in the same place on all five tabs.", "A day of training is called a workout everywhere.", "Home and away: MealStack now uses IronStack's Counts as away distance, so the two apps agree when you travel."]}, {"title": "History", "slug": "history", "leads": ["A workout's weather carries the Apple Weather mark and a link to its data sources."]}, {"title": "Settings", "slug": "settings", "leads": ["Settings › The app has the privacy policy, and a Not medical advice note.", "Settings › Acknowledgements names the Oswald typeface and its licence, and shows the reserved-usernames...", "Settings › The server's copy no longer lists usage data, and the hashed id is called the install id."]}]
status: shipped
build: 52
---

### Apple Watch

- **IronStack is on Apple Watch.** It comes with the iPhone app and works as a remote for the workout on your phone, so the two always show the same thing.
- **Swipe between its pages: Set, Clock, Controls and the workout.** Tap the card on the Set page to log the set. Hold it, or tap Adjust, and turn the Crown to change the weight, reps or RPE.
- **After every log the watch moves on:** to the next set, the next exercise in a group, or the next exercise when you're done with this one. A rest running out moves nothing and logs nothing.
- **The Clock page has the rest, EMOM and the timer for timed sets, with your heart rate in the corner.** Tap the time to pause it; turn the Crown to add or take 15 seconds off a rest.
- **Start a workout on your phone and IronStack opens on your watch.** Settings › Apple Watch › Open on my watch when I start turns that off.
- **The watch's cues are taps on your wrist: one at 30 seconds, two at 5, a long one at 0.** Its speaker stays quiet unless you turn on Settings › Apple Watch › Voice cues on the watch. Earbuds still hear the voice.
- **Finish on either one and both finish.** The watch shows Stacked, with your average and top heart rate, then gives the watch face back. Health gets one workout, not two.
- **The watch follows Save my workouts to Health: with it off, IronStack saves no workout to Health.** Delete all IronStack data clears the watch too.
- **Phone out of reach?** The watch says so, the clock keeps going, and sets you log arrive on the phone once each when it's back.
- **Your heart rate shows on the phone's clock too, while the watch is in the workout.**
- **Which build is on the watch:** at the foot of its screens and in Settings › Apple Watch, with a line when the phone and the watch don't match.
- **If your iPhone has a watch without IronStack, Today offers "Add IronStack to your Apple Watch" until you dismiss it.** The first time you train with it you get one ask (Show me or Not for me), and an "On your watch" chip during workouts after that. "Not for me", or Settings › Apple Watch › Use my Apple Watch, turns all of it off.
- **New badges, On your wrist: workouts run with the watch.**

### Today

- **One tap logs exactly one set, on the phone or the watch.** A quick double tap on Log logs one, and the clock never logs a set for you.
- **Unlog a set logged by mistake: swipe left on it for Unlog or Delete, or use its press and hold menu.** It goes back to its planned numbers and becomes the next set, and Undo puts it back. Unlogging or deleting a set no longer restarts the rest.
- **Swipe right on an exercise for History; swipe left for Swap or Remove.** The same are in the press and hold menu and the card's new ··· button.
- **Swap shows the closest exercises first: same movement and muscles, equipment at your gym, ones you've done.** Pick one, then Just today, or Every time to change the saved workout too. Sets still to do move to the new exercise, logged sets stay, and Undo puts it all back.
- **Undo never covers a button.** On Today it sits above the tab bar. In Edit the day it's in the edit bar, and Done still works. Any tap puts it away and still does what you tapped.
- **Plan sets, in an exercise's press and hold menu, sets up its sets, reps and weights without logging anything.**

### The clock

- **A timer for timed sets: planks, holds, carries.** On a timed exercise Timer comes first in the clock row. It counts down, holds the time and puts it on the set for you to log. It never logs. Each side runs left, then right, and says "Switch sides". Starting it during a rest asks first.
- **The clock follows each exercise's pace.** Move on to an exercise paced EMOM 5:00 and the clock switches to it, with a tap and "EMOM, every five minutes" in Mike's recorded voice. A running rest finishes first, and EMOM starts on your first log or a tap, never by itself. Change the pace mid-exercise and it's remembered next time.
- **Every spoken cue is a recording now, never a computer voice.** The timer says "Thirty seconds", "Five seconds" and "Time."
- **A running clock folds to one line.** Tap it to open it again.
- **The numbers hold still as they count down, instead of shifting sideways every second.**
- **Coming back to the app no longer plays a cue for a rest that ended while you were away.**

### Lock Screen and Dynamic Island

- **The Live Activity leads with the clock:** "Rest 1:07" or "EMOM 0:39 · round 3 of 5", counting down with the app asleep. Under it, the next set ("Next: Box Squat 275 × 3") and the workout time. Paused, it says so, and the last five seconds turn red.
- **MealStack's card steps back while an IronStack workout is live.**

### Logging a set

- **"+ Add weight" on any set's load:** chains, a vest, bands, a bell on a dip belt, on top of a bar, a bell or your bodyweight. It carries from set to set and into your next workout, and the row reads "225 + chains 40 + 2× mini band". Gear in My Gym that adds weight is in that list.
- **Volume counts each added weight in full and a band at half its rating.** The line under the weight says "band counts half".
- **The next set opens on everything the last one had:** the band, the weight on top, the shape of the load, per hand.
- **Each tap on a plate puts exactly one more pair on the bar, and the total is always the bar plus the plates drawn.**
- **Changing the bar keeps the plates you tapped, and the number follows: a 35 bar with 70 a side reads 175.** A weight you typed stays, and the plates change to make it.

### Supersets and circuits

- **A round rests the group's one rest, even when it ends early because the last exercise is out of sets.**
- **Ask Stack AI to "superset these two" and it groups what's on today.**

### Plan

- **A workout lives in one place.** Adding a workout that's in a program adds a copy; adding one of your own workouts asks Move it in or Add a copy. A workout you had in several programs becomes one copy per program the first time you open this build, names kept. Your log doesn't change.
- **A program can run a set number of weeks ("Runs 8 weeks", from the program's ···), or repeat its list with no weeks.**
- **One search on Plan finds programs, workouts and exercises.**
- **Tap any workout in a program and it opens.**
- **Each step of putting an exercise into a workout, or a workout into a program, can be undone.**
- **Adding an exercise from Plan offers Today's workout, then an existing workout, then a new one.**
- **Pilates, barre, yoga and more conditioning:** 146 new exercises, and search finds them by what they are ("pilates", "low impact", "hotel"). Two new shelves, Pilates & barre and Yoga & mobility, each with chips to narrow it (Reformer, Mat, Zone 2, Prep). A reformer set's springs go in Gear for now.

### Home

- **After a workout, until midnight, Home opens with its recap:** "Stacked. Heavy lower done.", the time, working sets and weight moved, your best ★, how many sets came from your watch, and Share and See the workout.
- **The Home section of people who supported you is called Lifted you, as it is in Social.**

### Social

- **Reporting a handle or a card name says reports are reviewed with help from Anthropic's Claude.** Other reports go to a person only.

### Coach mode (beta)

- **Coach mode is a small beta: only some accounts see it.** If you don't see it, nothing is wrong and nothing is missing. Coach here always means a person, never Stack AI.
- **With it, Social › Your people links you with a coach by handle or by invite link (Coach me or Coach them, beside Spotter).** You choose what your coach sees before anything is shared.
- **A coach's plan comes to Today with Use this plan or Look first.** On a coach's plan, Swap's Every time becomes Suggest to @coach: from, to, the week it starts and a short note. Your coach accepts or declines.

### Stack AI

- **Coach is now called Stack AI.** It's the same assistant with a new name, because "Coach" is for a real coach working with you in the app. Your conversation, what it saved to your Plan and your settings all carry over.
- **Stack AI no longer gets where you trained (your gym's name or your town) with your workouts.** It never needed it to answer.
- **Stack AI is off until you turn it on.** The first time you open it, one screen says what goes to Anthropic, what never does, and what happens to it, and asks. If you had Coach on, you'll see it once. Settings › Stack AI has the switch, what it has cost this month, and that same screen to read again.
- **Stack AI says it's an AI and can be wrong under every chat, and its replies are labelled.** Tap that line to see what it sends, and to whom.

### Everywhere

- **One top bar: Settings, then Stack AI, top left in the same place on all five tabs.** Each tab's own buttons sit on the right.
- **A day of training is called a workout everywhere:** Today, History, Insights, badges, the Live Activity, notifications and Stack AI's answers. "Start workout", "Finish workout", "25 workouts". Nothing about your log changes, only the word.
- **Home and away: MealStack now uses IronStack's Counts as away distance, so the two apps agree when you travel.** The location permission text names that distance.

### History

- **A workout's weather carries the Apple Weather mark and a link to its data sources.**

### Settings

- **Settings › The app has the privacy policy, and a Not medical advice note:** IronStack isn't a doctor, and Stack AI can be wrong.
- **Settings › Acknowledgements names the Oswald typeface and its licence, and shows the reserved-usernames list's MIT License in full.**
- **Settings › The server's copy no longer lists usage data, and the hashed id is called the install id.** IronStack never sent usage data to an outside service.
