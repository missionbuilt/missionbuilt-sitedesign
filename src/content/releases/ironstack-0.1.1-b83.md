---
app: ironstack
version: "0.1.1"
order: 1001
changes: 9
groups: [{"title": "Social", "slug": "social", "leads": ["FIXED: Signing in to Social now sticks."]}, {"title": "Stack AI", "slug": "stack-ai", "leads": ["NEW: Press and hold any message in the Stack AI chat, yours or the answer, to Copy it.", "FIXED: Signing in to Social while a Stack AI question was on its way could make the question fail with...", "CHANGED: The line under every Stack AI chat is easier to tap."]}, {"title": "Today", "slug": "today", "leads": ["FIXED: If you log a working set before a prep ladder you built, the prep steps you skipped no longer count as...", "FIXED: Swapping an exercise after you skipped its prep steps no longer carries those steps, or a set you...", "A prep set you log yourself on a workout with no prep sets counts as one of the workout's sets, so Today and...", "Tapping + Prep after you've logged more working sets than the plan had can put the new prep row in the wrong...", "If Stack AI still says \"That didn't go through\" on every question, tell us with Share Beta Feedback and say..."]}]
status: shipped
build: 83
---

**Social sign-in now sticks, Stack AI answers more reliably, and you can copy anything in the chat.**

**What you will notice:**
- **Sign in to Social once, and it stays.** The Sign in link and the sample feed go away and your own feed shows. If Social needs a moment to finish your sign-in, the tab says so: pull down to try again.
- **Stack AI and Social no longer get in each other's way.** Signing in to Social while a question is on its way can no longer make the question fail.
- **Press and hold to copy.** Any message in the Stack AI chat, yours or an answer, can be copied, and answers can be shared.

**Try this:**
1. Sign out of Social, then sign in again from the Social tab. Your feed should show at once, with no sample cards.
2. Ask Stack AI a question, then press and hold the answer and tap Copy.
3. Build a prep ladder before a lift, log a working set first, and look at Today: the skipped prep steps don't count as sets to do.

## Every change in this build

### Social

- **FIXED: Signing in to Social now sticks.** The Sign in link and the sample feed go away and your feed shows. If Social needs a moment to finish your sign-in, the tab says so: pull down to try again.

### Stack AI

- **NEW: Press and hold any message in the Stack AI chat, yours or the answer, to Copy it.** Answers also offer Share. With VoiceOver, Copy is in the message's actions.
- **FIXED:** Signing in to Social while a Stack AI question was on its way could make the question fail with "That didn't go through." Stack AI now sends one request at a time.
- **CHANGED: The line under every Stack AI chat is easier to tap.**

### Today

- **FIXED:** If you log a working set before a prep ladder you built, the prep steps you skipped no longer count as sets to do on Today, the workout bar or the watch. They stay on the card marked skipped. Tap one to log it as prep.
- **FIXED:** Swapping an exercise after you skipped its prep steps no longer carries those steps, or a set you already did, onto the new exercise.
- **A prep set you log yourself on a workout with no prep sets counts as one of the workout's sets, so Today and the watch can show it done one set early.**
- **Tapping + Prep after you've logged more working sets than the plan had can put the new prep row in the wrong place.**
- **If Stack AI still says "That didn't go through" on every question, tell us with Share Beta Feedback and say what you asked.** We're still finding the cause of one report.
