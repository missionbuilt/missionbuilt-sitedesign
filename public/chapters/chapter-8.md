# Stress Tests the System

Stress doesn’t break the system. It exposes what was already weak.

We often talk about “testing under load” as a strength-building concept. In the gym, it’s simple—your ability to move weight when you're tired is the real signal of progress. But in product leadership, systems design, and incident response, stress testing is often overlooked until it's too late.

The **Log4j vulnerability** in December 2021 made that brutally clear. A zero-day exploit in a widely used Java library allowed remote code execution with minimal effort. Suddenly, nearly every organization had the same urgent questions:
- Are we exposed?
- Where is Log4j deployed in our environment?
- Do we have visibility into historical access or exploitation attempts?

This wasn’t just a code issue. It was a test of organizational readiness—technical, operational, and strategic. Teams that had practiced incident response, mapped their architecture, and built cross-functional trust could move with purpose. Others stumbled, not because they didn’t care, but because they’d never trained for the moment.

It was the backup problem, writ large. Many companies back up data religiously, but few test whether they can actually recover it. Even fewer know how long recovery will take, or what their **RTO (Recovery Time Objective)** or **RPO (Recovery Point Objective)** really are. And as ransomware surged in recent years, those blind spots turned into existential threats. The lesson was hard-earned: backups are only as valuable as your ability to restore fast.

Log4j forced a parallel reckoning. In many cases, malicious scanning began months before the public disclosure—but most organizations didn’t retain accessible data that far back. They had cold storage, sure—frozen or tiered off for cost savings—but had never practiced bringing it back online quickly for investigation.

> When the pressure hit, teams had to figure out—often in real time—how to thaw data, rehydrate logs, and search for infection markers across old records.

Some had tested this process before. They knew the commands, the timing, the quirks of their tooling. They’d trained like operators. Others… hadn’t. Some couldn’t search more than 30 days back. Others found that recovering historical logs was so cumbersome it may as well not have existed. Those companies weren’t just missing data. They were missing a **disaster recovery plan** for threat analytics.

At Elastic, customers who had previously rehearsed these data flows—archiving, restoring, and hunting—were able to quickly triage and verify impact, drawing from months-old telemetry. They weren’t just ingesting logs. They were building institutional memory.

And this mirrors what elite military units do when they train decision-making under fatigue. In Navy SEAL training or Army Special Forces SERE programs, candidates are made to perform operational tasks after sleep deprivation, cold water exposure, and physical exhaustion.

> Not to break them—but to reveal what’s already broken.

In those moments, you don’t rise to the level of the manual. You fall to the level of your defaults. And the only way to improve those defaults is to train them, deliberately, under controlled stress.

It’s no different in product and platform work. You might have a dashboard for monitoring, a workflow for restores, a playbook for incident response—but unless you’ve tested them when it matters, they’re just ideas. Stress finds the truth.

So whether you’re squatting on trembling legs after five working sets or trying to rehydrate petabytes of logs to confirm an intrusion:

> The system only works if it works under pressure.

This isn’t a new idea—it’s one we introduced back in **Chapter 2: Built Through Reps**, where we explored the quiet, compounding power of systems over goals. There, we referenced **James Clear**, who wrote in Atomic Habits:

> “You do not rise to the level of your goals. You fall to the level of your systems.”

That quote framed our conversation around sustainable progress—how strength is built not by heroic effort, but by consistent execution of a well-designed system. Here, under the weight of stress and urgency, the meaning deepens.

Goals vanish in crisis. Roadmaps collapse under pressure. What remains is the infrastructure you’ve trained, tested, and trusted.

Whether that’s a disaster recovery pipeline, a muscle memory forged in fatigue, or a culture that knows how to move without waiting for permission - **it’s your system that carries you**.

Resilience isn’t reactive. It’s built. Deliberately. Daily. And under load.

# Clarity Beats Certainty

> You don’t need to know the outcome to know how to act.

There’s a myth in leadership—and in lifting—that success comes from always having the right answer. That if you just gather enough data, wait long enough, or plan hard enough, certainty will arrive and carry you through.

But the best teams, the best lifters, the best products—they don’t run on certainty. They run on clarity.

You see it clearly in moments of disruption. In early 2020, when the COVID-19 pandemic rewrote every assumption about business, teams that waited for complete information froze. But the ones who moved quickly didn’t do it recklessly—they did it with intention.

- **Zoom** opened up free access to educators around the world.
  - So what? Within weeks, daily meeting participants skyrocketed from **10 million in December 2019** to **300 million by April 2020**, securing Zoom’s role as the go-to platform for remote communication.
- **Peloton** overhauled its entire supply chain when demand outpaced capacity.
  - So what? By Q4 of 2020, Peloton reported **232% year-over-year revenue growth** and added over **1 million new subscribers**, despite early shipping delays—because it chose to act early.
- **Notion** refocused messaging to meet the remote work moment head-on.
  - So what? In 2020, Notion’s user base grew from **1 million to over 4 million users**, aided by a pivot to freemium and a surge in international adoption driven by product-led, mission-aligned messaging.

None of them knew how long the shift would last. They couldn’t predict the full impact. But they didn’t need certainty—they had clarity of mission. That clarity became a compass.

This is the same clarity that high-level lifters use when training with RPE—Rate of Perceived Exertion. Instead of sticking to a fixed number on the bar, they assess how each set feels in real time. On some days, that means pulling back to preserve recovery. On others, it means pushing heavier than planned.

> It’s not guesswork—it’s informed adaptation. It’s clarity in action, even when conditions change.

We talked about this earlier in the book when introducing the **OODA Loop** — Observe, Orient, Decide, Act. Originally developed by military strategist John Boyd to train fighter pilots for split-second decisions in combat, the OODA loop isn’t about perfection. It’s about momentum. You act, assess, and adjust faster than the environment can overwhelm you.

This model doesn’t just apply to military operations. It applies to product releases, user feedback, platform incidents, and even organizational change. You’re not waiting for every signal to align—you’re moving with awareness, grounded in your principles, and fast enough to respond before inertia sets in.

And this is where clarity beats certainty.
- Certainty waits.
- Clarity prepares.
- Certainty asks, “Are we sure?”
- Clarity says, “Here’s what we do next.”

You don’t always need a perfect map if you’ve trained your compass.

Let’s be honest: **Agile** is a loaded word.

Some teams swear by it. Others roll their eyes. And more often than not, the problem isn’t with the philosophy—it’s with the implementation.

Too many teams have had Agile forced on them by someone who read a textbook but never wrote a line of code. The rituals become rigid. The flexibility becomes performative. And the spirit gets lost in the ceremony.

I’m a firm believer in the **Agile mindset**—but not the dogmatic, by-the-book version. True agility means responding quickly to new information. It means iteration with intent. But that only works if the team has clarity. Without it, Agile devolves into a flurry of half-finished tickets, context switches, and directionless pivots.

The point was never to abandon focus. The point was to stay mission-aligned, laser-focused on the “why,” while remaining flexible on the “how.”

Where I most often see Agile fail is when it becomes a cover for **indecision**. When teams confuse agility with ambiguity. When the lack of a clear goal gets labeled as “keeping our options open.”

I also see it fail when people demand certainty before committing to action. Even today—with more data than ever before—certainty is rare. We have telemetry, user interviews, funnel analysis, Salesforce records, analyst feedback… But the decision on what to build next is still more art than science.

> If there was a playbook to follow, we’d be project managers. But we’re product managers.

Our craft isn’t in perfect foresight. It’s in translating user pain into progress. It’s in surfacing the “why” beneath the “what.” It’s in seeing the pattern behind the request.

And as **Nathaniel Fick** wrote in One Bullet Away—his memoir about the transformation from Ivy League student to Marine officer leading combat missions in Afghanistan and Iraq:

> “Complex ideas must be made simple, or they'll remain ideas and never be put into action.”

That’s our job. To take everything we know—the signals, the inputs, the intuition—and turn it into action. Not after a perfect analysis. Not when every detail is known. But when it’s time to move.

We do that not by being certain—but by being clear. Clear on the mission. Clear on the user. Clear on what matters most right now.

Because clarity moves. Certainty stalls.

And in the fog of delivery, feedback, and shifting priorities, the job is not to predict perfectly. It’s to navigate **intentionally**.

# Training for Chaos

> We don’t rise to the level of our plans—we fall to the level of our preparation.

In the last chapter, we explored the idea of **training the engine**—building general physical and mental capacity, not just specific skills. But that alone isn’t enough. What happens when the plan vanishes? When you're under pressure, short on time, and forced to act without hesitation?

That’s when preparation has to become instinct.

I learned this firsthand as a **U.S. Army paratrooper**. Before you ever board a plane, you train on the ground for weeks. You drill every movement until it’s embedded—how to hook up your static line, how to check your gear, how to exit, how to land. You jump from towers. You simulate the aircraft. And you practice failure—not because you want it, but because it’s coming.

> You want to fail when you’re four feet off the ground—not 800.

We don’t take our first flight until the basics are second nature. Because stepping out the side door of a C‑130 at 800 feet, in pitch black, isn’t natural. It’s against every self-preservation instinct. And in that moment, you don’t want to be thinking through a checklist. You want to be moving.

If your main chute doesn’t deploy, you have **9 to 10 seconds** to respond before impact. That’s it. There’s no time to think. You just act.

I still remember my first jump. The roar of the engines. The rush of the open door. And when we stood up, hooked up, and waited for the green light—I didn’t feel fear. I didn’t feel stress.

I felt clarity.

I knew what to do. And I executed. Because we had trained for it.

That same mindset exists in the best teams—even in tech.

At Netflix, **Chaos Monkey** was built to deliberately shut down random services in production—to ensure that both systems and people could adapt under pressure. They didn’t just hope their systems were resilient. They trained them to be. And the results were measurable:

> Netflix prevented **80% of potential outages** through the learnings surfaced by Chaos Monkey and the broader chaos engineering discipline. These weren’t hypothetical flaws—they were real vulnerabilities, caught early because someone had the courage to test failure on purpose.

This wasn’t an act of sabotage. It was an act of preparation. You don’t find out if you’re ready in the middle of a real incident. You find out beforehand—if you’re willing to simulate the storm.

You see this in sport, too. During the CrossFit Open, athletes receive surprise workouts announced just days before competition. Movement patterns shift. Equipment combinations vary. Sometimes it’s a short, explosive sprint. Other times, it’s a long, grinding engine test. You don’t know what’s coming—and that’s the point.

This unpredictability isn’t accidental. It reflects one of CrossFit’s founding principles: prepare for the unknown and the unknowable. Because in real life—just like in combat, product development, or incident response—you don’t get a playbook with advance notice. You’re asked to perform under pressure, with incomplete information and limited control.

By designing chaos into the format—new standards, awkward movement pairings, strange pacing demands—CrossFit forces athletes to confront not just their physical readiness, but their emotional and mental adaptability. The top performers aren’t just strong. They don’t just move well.

> They stay composed when the plan disappears.

And that’s the test. That’s the transferability. The Open doesn’t just reward fitness. It rewards clarity under fatigue, pacing under uncertainty, and strategy when the rules shift.

The chaos isn’t a bug—it’s the feature. It reveals what structure alone can’t.

This belongs in the same category as **paratrooper training** or **chaos engineering**. You don’t need bullets or breakage for chaos to be real. All you need is volatility, pressure, and a demand for action.

And when that moment comes, the best don’t panic.

They breathe. They move. They decide.

*I want to pause here and share something personal.*

I’ve never claimed to have done the hardest thing in the military. Many others have faced more direct danger, made life-or-death decisions in the field, and carried far heavier loads. Nate Fick, whose story we referenced earlier, is one of many. But I’ve also learned that **you can’t live your life comparing hardships**. Chaos shows up in many forms. And every one of us has moments when our training is tested by stress.

For me, that came during my deployments in support of Operation Enduring Freedom and Operation Iraqi Freedom, where I served as an intelligence analyst at the Combined Air Operations Center. My job was to represent U.S. Army interests in daily joint targeting and mission planning—to advocate for the air support our soldiers needed downrange.

That meant walking into rooms where I was often the lowest-ranking person present, trying to secure limited airframes for missions that couldn’t afford to fail. There were more missions than aircraft. Everyone in the room wanted to help—but everyone had missions to support. The real pressure wasn’t the data. It was the conversation. The negotiation. The weight of knowing that if I couldn’t make our case clearly, my brothers in arms might not get the support they needed.

That stress taught me the true value of clarity. Not just in numbers, but in stories. It wasn’t the PowerPoint or the packet that made the difference—it was being able to explain why this mattered, what the risk really was, and who would be impacted if we didn’t act. I learned young, and under pressure, how to speak across rank and service. How to translate intelligence into insight. And most importantly, how to **give a shit** - loudly, clearly, and with purpose.

One of the awards I received—the Army Commendation Medal—noted that I served in multiple roles normally held by ranks far above mine, including as the BCD Intelligence NCOIC (a Sergeant First Class role) and as an Intelligence Plans Officer, a position typically held by a Major. I don’t say that to boast. I say it to underscore this truth:

> You don’t perform under stress unless you care deeply about the mission and the people it impacts.

That lesson stayed with me. In uniform. In product. In leadership.

It’s not process that drives you when the pressure hits. It’s **principle**. It’s **preparation**. And it’s the ability to act with conviction, because you know exactly what’s at stake.

You don’t have to be on the front lines to know what chaos feels like. You just have to care enough to move when it matters most.



























