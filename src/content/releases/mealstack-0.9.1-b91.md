---
app: mealstack
version: "0.9.1"
order: 9001
changes: 2
groups: [{"title": "Today", "slug": "today", "leads": ["Tapping the widget or the Live Activity opens Today and nothing else.", "\"Ate it now\" on a meal alert for a meal you'd already logged, from the Lock Screen, the widget or the app..."]}]
status: shipped
build: 91
---

**Today stays on Today.**

Build 91 fixes the two things that got in the way in build 90.

**MealStack opens where you expect.** Opening the app, the widget or the Live Activity lands on Today. The session time sheet opens only when you tap the session line or pick it from a menu; in build 90 it popped up on its own. IronStack's after-workout alert opens MealStack on Today too.

**A meal you've logged stays logged.** Tapping "Ate it now" on an alert for a meal you already logged leaves it as you logged it. Before, it logged it again and moved its time and its Health entry.

**Try this:** open MealStack from the widget a few times today. It should land on Today every time.

## Every change in this build

### Today

- **Tapping the widget or the Live Activity opens Today and nothing else.** The session time sheet opens only when you tap the session line or choose it from a menu. In build 90 it came up by itself. IronStack's after-workout alert now opens MealStack on Today too.
- **"Ate it now" on a meal alert for a meal you'd already logged, from the Lock Screen, the widget or the app, now leaves it as you logged it.** Before, it logged the meal again at the moment you tapped, moving its time and its Health entry. "Not yet" on a meal you've eaten does nothing too.
