---
app: ironstack
version: "0.1.1"
order: 1001
changes: 2
groups: [{"title": "Stack AI and Social", "slug": "stack-ai-and-social", "leads": ["FIXED: On some iPhones, every Stack AI question failed with \"That didn't go through. Try again.\" and Social...", "If Stack AI or Social still fails for you, send it with Share Beta Feedback and say what you tapped."]}]
status: shipped
build: 85
---

**Stack AI and Social sign-in work again.**

**What you will notice:** if every Stack AI question came back with "That didn't go through. Try again.", or Social wouldn't let you sign in, both should work now. IronStack now fixes the problem with this iPhone's security check by itself.

**Try this:** ask Stack AI one question, then sign in to Social.

## Every change in this build

### Stack AI and Social

- **FIXED:** On some iPhones, every Stack AI question failed with "That didn't go through. Try again." and Social sign-in didn't work, because Apple's security check refused the key the app had stored. IronStack now makes a new key and tries again by itself. If it still can't, it tells you plainly instead of the generic line.
- **If Stack AI or Social still fails for you, send it with Share Beta Feedback and say what you tapped.** We'll look at it right away.
