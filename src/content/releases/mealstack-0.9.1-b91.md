---
app: mealstack
version: "0.9.1"
order: 9001
changes: 2
groups: [{"title": "Today", "slug": "today", "leads": ["Tapping the widget or the Live Activity opens Today and nothing else.", "\"Ate it now\" on a meal alert for a meal you'd already logged, from the Lock Screen, the widget or the app..."]}]
status: shipped
build: 91
---

### Today

- **Tapping the widget or the Live Activity opens Today and nothing else.** The session time sheet opens only when you tap the session line or choose it from a menu. In build 90 it came up by itself. IronStack's after-workout alert now opens MealStack on Today too.
- **"Ate it now" on a meal alert for a meal you'd already logged, from the Lock Screen, the widget or the app, now leaves it as you logged it.** Before, it logged the meal again at the moment you tapped, moving its time and its Health entry. "Not yet" on a meal you've eaten does nothing too.
