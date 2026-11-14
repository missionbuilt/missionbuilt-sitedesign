---
app: mealstack
version: "0.9.1"
order: 9001
changes: 6
groups: [{"title": "Photo logging and label scanning", "slug": "photo-logging-and-label-scanning", "leads": ["ADDED: Photo log in the meal editor's food picker.", "ADDED: Scan label in the same picker.", "FIXED: label reading could stop before it finished its answer."]}, {"title": "Stack AI", "slug": "stack-ai", "leads": ["CHANGED: the permission screen lists a plate photo, or a label your phone can't read.", "FIXED, already live since 11-12: when a request failed inside the Stack AI server, it could go quiet."]}, {"title": "Camera", "slug": "camera", "leads": ["CHANGED: the message iOS shows when MealStack asks to use your camera now names Stack AI, Mission Built's server and then Anthropic."]}]
status: shipped
build: 96
---

**Log a meal from a photo of your plate, and read a nutrition label with your camera.**

**What you will notice:** two new buttons, **Photo log** and **Scan label**, in the food picker of the meal editor. Photo log looks at a photo of your plate and fills in what it sees. Scan label reads a nutrition label on your phone and fills in the numbers. They are not in Add snack or in the Stack AI food picker, which still show Scan barcode only. Your meals, your fueling plan and the "Eat by" lines work as in build 95.

**After updating, MealStack asks once more before Stack AI sends anything.** The permission screen now lists a plate photo, or a label your phone can't read. It comes up the next time you open Stack AI or tap anything that sends: a question, an idea, a barcode lookup, Photo log or Read with Stack AI. Until you answer, Stack AI shows **Off** in Settings, and barcode lookups wait too. Tap **Turn on Stack AI** to keep going. If you tap **Not now**, Stack AI stays off. Barcode lookups, Photo log and Read with Stack AI ask again when you tap them; otherwise turn it on any time in Settings › Stack AI.

**Try this:**
1. In the meal editor, open the food picker and tap **Photo log**. Take a photo of a plate.
2. In the same picker, tap **Scan label** and point the camera at a nutrition label. If the phone can't read it, you'll see **Read with Stack AI**; nothing is sent unless you tap it.
3. Look over what it filled in before you save. Change anything that looks off.
4. Tell us what it got wrong or right. In TestFlight, tap **Share Beta Feedback**, or reply to the tester email. Say what you photographed and what MealStack filled in.

**Where your photo goes:** a photo of your plate goes to Stack AI when you tap Find the foods. It goes to Mission Built's server and on to Anthropic, which reads it. Mission Built does not keep it; Anthropic deletes it within 30 days. A nutrition label is read on your phone. Only if the phone can't read it and you tap **Read with Stack AI** does that one photo go the same way. A barcode scan stays on your phone, and only the barcode's numbers are looked up. Turn Stack AI off in Settings › Stack AI and nothing is sent.

## Every change in this build

### Photo logging and label scanning

- **ADDED:** **Photo log** in the meal editor's food picker. It reads a photo of your plate and fills in the meal.
- **ADDED:** **Scan label** in the same picker. It reads a nutrition label on your phone and fills in the numbers. If the phone can't read it, **Read with Stack AI** sends that one photo.
- **FIXED:** label reading could stop before it finished its answer. It now reads the whole label.

### Stack AI

- **CHANGED:** the permission screen lists a plate photo, or a label your phone can't read. After updating, MealStack asks once more before Stack AI sends anything, and barcode lookups need the same yes.
- **FIXED, already live since 11-12:** when a request failed inside the Stack AI server, it could go quiet. It now answers with an error line.

### Camera

- **CHANGED:** the message iOS shows when MealStack asks to use your camera now names Stack AI, Mission Built's server and then Anthropic, and says Mission Built does not keep a photo.

### Not in this build

- No change to meals, the fueling plan, "Eat by", the late-night offer or the Apple Watch.
