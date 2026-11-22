---
app: mealstack
version: "0.9.1"
order: 9001
changes: 10
groups: [{"title": "Today", "slug": "today", "leads": ["Your meals are placed around your training by a new planner.", "A meal you didn't log, before one you did, stays at its time marked \"Not logged\".", "Pushing a meal back, Until or Move to now says so when the day can't take it..."]}, {"title": "Apple Watch", "slug": "apple-watch", "leads": ["MealStack on Apple Watch: your next meal with Log it, Not yet · 20 min and the rest of today.", "A complication with the next meal's time; meal names are hidden on the face while the watch is locked.", "Settings › Apple Watch turns it on, and MealStack asks once when it's on your watch.", "Change on iPhone, at the end of the list, opens that meal on your iPhone."]}, {"title": "Alerts", "slug": "alerts", "leads": ["A meal's alert comes ten minutes before the meal, and its button reads \"Log it\", the same words as the watch."]}, {"title": "Stack AI", "slug": "stack-ai", "leads": ["When Stack AI reaches a limit, the message says plainly which one and when it's back.", "Stack AI's sheet lists only what stays on your phone today: food search and the Kitchen's saved meals."]}]
status: shipped
build: 93
---

**MealStack on your wrist.**

**NEW: MealStack on Apple Watch.** Your next meal with Log it and Not yet · 20 min, and the rest of today. A complication shows the next meal's time; its name stays hidden while the watch is locked. A tap is saved on the watch first, so nothing is lost if your iPhone is out of reach. Turn it on in Settings › Apple Watch; it's off until you say yes.

**NEW: Meal alerts ten minutes ahead.** A meal's alert comes ten minutes before it, and its button reads Log it, the same words as the watch.

**Also:** when Stack AI reaches a limit, it says plainly which one and when it's back ("That's today's limit for Stack AI. Try again after 9 pm."). Stack AI's sheet lists only what works on your phone today: food search and the Kitchen's saved meals.

**NEW: Meal times built around your workout.** Your workout is now a block with a real length, from how long your recent workouts ran in IronStack (or Settings › Usual session length). The shake lands when you finish, digestion room comes before you lift, and the day re-spreads from the facts whenever it changes, so protein keeps coming.

**Try this:** move today's workout an hour later and watch the day re-flow. Then turn on MealStack in Settings › Apple Watch and log your next meal from your wrist.

## Every change in this build

### Today

- **Your meals are placed around your training by a new planner:** each meal keeps its room before and after a session, a meal whose time has come says "Due now" and stays put, and a line says when a gap runs long or your last meal sits more than 4 h before the session. It plans around a session as long as yours usually runs: how long your recent workouts ran in IronStack, once you share workout lengths there (When you usually train), else Settings › Usual session length.
- **A meal you didn't log, before one you did, stays at its time marked "Not logged".** You can still log it or skip it.
- **Pushing a meal back, Until or Move to now says so when the day can't take it ("Dinner can't go later today."), instead of moving it past your last-meal time.**

### Apple Watch

- **MealStack on Apple Watch: your next meal with Log it, Not yet · 20 min and the rest of today.** A tap is saved on the watch first, so nothing is lost if your iPhone is out of reach; it logs once it's back.
- **A complication with the next meal's time; meal names are hidden on the face while the watch is locked.**
- **Settings › Apple Watch turns it on, and MealStack asks once when it's on your watch.** Off until you say yes.
- **Change on iPhone, at the end of the list, opens that meal on your iPhone.** Out of reach, the watch says so, and the meal waits in the app switcher.

### Alerts

- **A meal's alert comes ten minutes before the meal, and its button reads "Log it", the same words as the watch.**

### Stack AI

- When Stack AI reaches a limit, the message says plainly which one and when it's back: "That's today's limit for Stack AI. Try again after 9 pm."
- **Stack AI's sheet lists only what stays on your phone today: food search and the Kitchen's saved meals.**
