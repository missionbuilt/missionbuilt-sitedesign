---
app: mealstack
version: "0.9.1"
order: 9001
changes: 9
groups: [{"title": "Today", "slug": "today", "leads": ["FIXED: Your pre-workout meal, your carb surge and your after-workout shake always stay on their side of your...", "CHANGED: The first thing your plan has after your workout follows the shake rules.", "CHANGED: A full meal right after your workout (when nothing comes between) stays open until your Last meal by...", "NEW: A meal that is due now and would otherwise move after your workout warns you first.", "CHANGED: A workout late in the evening now tries to end with a real meal.", "CHANGED: The carb surge now counts as fuel on Today.", "FIXED: A shake or drink waiting after your workout stays \"up next\" through its hour.", "FIXED: \"Not logged\" now follows the order of your day as Today planned it, not the order of your plan's list."]}, {"title": "Apple Watch", "slug": "apple-watch", "leads": ["CHANGED: The watch follows the phone's day."]}]
status: shipped
build: 95
---

**Your pre-workout meal, your carb surge and your after-workout shake now always stay on their own side of your workout.**

**FIXED:** the pre-workout meal and the carb surge never land after your workout starts, and the after-workout shake never lands before it. If one can't fit on its side, Today says so and offers a new time instead of moving it across.

**CHANGED:** the first thing your plan has after your workout follows the shake rules: it lands when your workout ends, and the next meal can come 45 minutes later. With IronStack linked, ending a workout there sets that time.

**NEW:** a due meal warns before it jumps. "Eat Lunch by 2:30 PM, or Dinner takes its place."

**CHANGED:** a late workout tries to end with a real meal. Today offers to move your last meal later tonight (as late as 11:45 PM), says which meals still won't fit, and "Not tonight" says no.

**CHANGED:** the carb surge counts as fuel on Today. If there's no room, Today offers "Start at" a later time, or "Skip Carb surge".

**FIXED:** a shake or drink waiting after your workout stays "up next" through its hour, then shows "Not logged · have it now if you can". A pre-workout meal you didn't have shows "Workout started without it" once your workout starts. "Not logged" now follows the order Today planned, not your plan's list.

**Apple Watch, CHANGED:** the watch follows what the phone shows; a shake past its hour shows dim after the iPhone sends it.

**Try this:**
1. Set a 6:00 PM workout and don't log lunch until 1:30 PM. Your dinner may sit before or after the workout, but the shake stays after and the pre-workout meal and carb surge stay before.
2. Set a 9:00 PM workout. Today offers to move your last meal later tonight. Tap "Not tonight": the pop-up stops, the quiet reminder under the top card stays, and it returns if you move the workout.
3. Skip your pre-workout meal and start the workout. The row says "Workout started without it".
4. Change your workout time late in the afternoon and watch the "Eat by" line appear before a meal moves.

**Known:** in rare plans, keeping the pinned items on their side leaves more than 5 hours between protein meals. Today says "A snack would close it". A fix comes later, behind the shadow-mode gate.

**Testers:** an old widget keeps a missed shake as "next" until the app rewrites its data. The watch learns a shake is missed from the phone, not on its own.

## Every change in this build

### Today

- **FIXED:** Your pre-workout meal, your carb surge and your after-workout shake always stay on their side of your workout, whatever time you ate lunch. Before, the same plan could put dinner before your workout one day and after it the next.
- **CHANGED:** The first thing your plan has after your workout follows the shake rules: it lands when your workout ends, and the next meal can come 45 minutes later. When IronStack is linked, ending a workout there sets that time.
- **CHANGED:** A full meal right after your workout (when nothing comes between) stays open until your Last meal by time. It doesn't turn "Not logged" an hour after, as a shake does.
- **NEW:** A meal that is due now and would otherwise move after your workout warns you first: "Eat Lunch by 2:30 PM, or Dinner takes its place." You get the line before the moment passes.
- **CHANGED: A workout late in the evening now tries to end with a real meal.** Today offers to move your last meal later tonight (as late as 11:45 PM) and says which meals still won't fit. You can say "Not tonight".
- **CHANGED: The carb surge now counts as fuel on Today.** If there is no room for it before your workout, Today offers "Start at" a later time for your workout, worked out from the clock when you tap.
- **FIXED: A shake or drink waiting after your workout stays "up next" through its hour.** After that it shows "Not logged", with "have it now if you can", instead of vanishing early. A pre-workout meal you didn't have shows "Workout started without it" once your workout starts.
- **FIXED: "Not logged" now follows the order of your day as Today planned it, not the order of your plan's list.**

### Apple Watch

- **CHANGED: The watch follows the phone's day.** A shake that has passed its hour shows dim after your iPhone sends the day (the watch learns it from the phone, not on its own).
