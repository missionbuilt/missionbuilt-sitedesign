import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Chapter } from "@/data/chapters-data";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";

interface PdfExportButtonProps {
  chapter: Chapter;
}

// Function to get the actual content from LogSections
const getSectionContent = (chapterId: number, sectionId: string) => {
  if (chapterId === 1) {
    switch (sectionId) {
      case "mission-is-the-magnet":
        return `Before I ever built products, I served in the U.S. Army as an Airborne intelligence sergeant. That experience — of working in service of something larger than myself, of making decisions under pressure with lives on the line — shaped everything that came after. I learned early that mission comes first. Not ego. Not recognition. Mission.

That mindset followed me from the military to cybersecurity, and into leadership roles where the stakes changed but the values stayed the same. Whether it was securing critical systems, helping build Elastic Security, or coaching in the gym, the goal has always been the same: real strength is lifting others.

One of the proudest chapters of my product career was building Endgame. We entered a brutally competitive market — going head-to-head with massive players like McAfee and CrowdStrike — and carved out real ground. Not because we had more money or brand recognition, but because we had something harder to copy: a clear mission. Protect high-value targets from nation-state level attacks. That focus, and the small, fierce team who rallied behind it, made all the difference.

At the heart of it was Nate Fick, a Marine officer turned tech CEO, and later the U.S. Ambassador for Cyberspace and Digital Policy. He led with conviction, clarity, and a deep respect for the mission. In all-hands meetings, Nate would remind us that we were an "elevator asset company" — that if the building burned down, the most important assets could still fit in the elevator. It wasn't the code or the tools. It was the people — the ones who understood the user's mission and had the passion to serve it.

That idea stuck with me. Nate's example reinforced what I learned in uniform: The success is the user's success. Your mission is their mission.

Metrics are the outcome of making your user successful. Yes, we need to measure them. But they are the result of serving the mission — not the reason for it.

There's a moment in every product meeting when the question slides in like it always does:

"How will we measure success?"

It's a good question — just not always a good first question.

In lifting, it's the same story. People chase PRs every week like the number on the barbell is the whole point. Add five pounds. Hit record. Post the clip. Repeat.

But metrics without mission? That's just noise. Pressure with no direction. Goals with no guts.

"The weight on the bar isn't the goal — it's the evidence of progress, not the destination."

We've all seen what happens when this mindset takes over. It's not a failure of talent — it's a failure of alignment. Cyberpunk 2077 didn't initially flop because the devs didn't care — far from it. The development team poured years into building something ambitious. But the pressure to hit a holiday launch window — a decision made at the executive level — overrode the mission of delivering a complete, polished experience. The result was a rocky release, millions in refunds, a reputational hit, and a stock crash.

To their credit, the team stuck with it. Years later, after patches and a reimagined DLC, the game has earned back much of the trust it lost — a testament to what happens when talented people are finally given the space to do the work right.

And we've seen what it looks like to protect the mission — even when it means stepping back. Simone Biles did exactly that in front of the entire world at the 2021 Olympics. Under unimaginable pressure, she chose long-term purpose over short-term performance. She knew something was off, and she honored that instinct.

"I have to focus on my mental health… if you don't, then you're not going to enjoy your score and you're not gonna succeed as much as you want to." - Simone Biles

Her move wasn't retreat — it was leadership. And in time, she returned to competition stronger, on her terms, and more respected than ever. A different kind of comeback — one powered by mission, not metrics.

Success isn't about hitting every metric. It's about refusing to lose yourself trying.

MORE THAN JUST GOOD INTENTIONS

Mission-driven isn't a poster in the break room or a bullet in a pitch deck. It's how you move — how you decide, how you show up when it's hard.

In a world that celebrates velocity, mission is quiet. But that doesn't make it weak. Mission gives you clarity when things get blurry and stamina when things get hard.

Take Patagonia. They once ran a campaign telling customers not to buy their jacket unless they truly needed it. Why? Because their values mattered more than their quarterly revenue.

Or SpaceX — aiming at goals that span decades, not quarters. It's not about idolizing companies. It's about recognizing what real mission-alignment looks like when the stakes are high and the timelines are long.

And it pays off. Research shows that people who believe in the purpose behind their work stay longer, burn out less, and deliver more.

WHEN METRICS ECLIPSE MEANING

Let's be clear: metrics matter. But only when they serve the mission — not when they become it.

Here's where teams lose the plot:
- They ship fast instead of shipping right.
- They chase signups instead of learning why users leave.
- They brag about launches and ignore long-term usage.

When dates drive development, teams start cutting corners. Feedback loops close. Energy fades. You build momentum toward a number — not toward value.

In the gym, this is ego lifting. In product, it's just as risky. It looks like burned-out engineers, brittle systems, and growth that collapses the second you stop pushing it uphill.

THE FULFILLMENT FLYWHEEL (POWERED BY PURPOSE)

There's a better model. One that's as relevant in combat as it is in code — or in the squat rack.

It's called the OODA Loop: Observe, Orient, Decide, Act. Developed for fighter pilots. Adopted by startups. Powered by clarity.

But here's the catch — without a clear mission, the whole loop spins out.

[TABLE: OODA Loop Analysis]

In lifting, it's trusting the plan instead of maxing out because you feel good that day. In product, it's waiting to ship because your users aren't ready — even if your OKRs are.

Mission turns chaos into clarity. It makes every rep count. Every release matter. Every decision directional.

This is the real flywheel of fulfillment:
- Mission fuels clarity.
- Clarity powers resilience.
- Resilience drives real progress.
- And real progress reinforces the mission.

That's the throughline. That's what keeps us going.
Metrics follow. But the mission leads.`;
      case "the-drift":
        return `At first, the metric is a mirror — it reflects the mission. Clean, focused, and true.

But over time, something shifts. Quietly. Gradually. The mirror warps. And without noticing, we begin steering toward the reflection instead of the road.

This is the Drift.

It doesn't announce itself. It rarely arrives with bad intent. It begins with a goal:

Launch the feature by Q4.

Hit 405 on deadlift.

Increase MAUs by 20%.

Reasonable. Measurable. Actionable. These are the numbers we hold up as evidence that we're making progress — and for a while, they are.

But then: the goal becomes the game.

In product, we've seen it time and time again. Shipping becomes more important than solving. Teams crunch to meet a date set quarters ago, long after the user problem has evolved. Metrics chase headlines. Investors want news. Executives want motion. The dashboard glows green while user trust fades red.

Think of Boeing. In the race to beat Airbus, they needed the 737 Max on runways — fast. Shareholder pressure mounted. Deadlines became immovable. On paper, the metrics looked great: deliveries met, costs controlled. But beneath the numbers, safety systems were skipped, warnings dismissed.

Two crashes. Hundreds of lives lost. The drift wasn't just technical — it was cultural. Speed overtook scrutiny. The metric overtook the mission.

In strength, the signs are physical — and brutal. Hafthor Björnsson, one of the strongest men in history, returned to powerlifting after two years of boxing. He set his sights on breaking the raw total world record. Big lifts were stacking fast. But recovery lagged behind. He felt the warning signs — tightness, fatigue — but kept pushing.

"I wasn't recovering fully between sessions… not listening to my body, which is silly."

Then came the snap. Attempting a 556-pound bench press, his pec tore clean off the bone.

The drift had found him too: progress misaligned with process, recovery sacrificed to reach a number that no longer served the mission. The result was pain, delay, and a lesson carved in scar tissue.

The damage isn't just physical. It's psychological. Because when we treat metrics as the mission, missing them feels like failure. And so we hide the truth, inflate success, or worst of all — stop trying.

The Drift corrodes not through force, but through inversion. It flips process into performance. It turns care into compliance.

And it burns people out.

I've worked with brilliant people who could have built anything — but they left, not because they failed, but because the system stopped valuing why they showed up in the first place. When we reduce contribution to a dashboard, we forget the soul behind the keyboard.

This isn't just anecdotal. Research shows that mission-driven employees are significantly more loyal.

A LinkedIn survey found that employees motivated by mission were 54% more likely to stay with their company for five or more years.

Another study revealed that companies engaging employees in purpose-driven programs saw a 52% lower turnover among newer employees.

So what's the antidote?

It's not to ignore metrics. It's to anchor them. To use them as signal, not steering.

To build systems that reinforce why we do the work, not just how fast we do it.

Because the real goal is not a launch date or a deadlift.

The real goal is built through the reps, not measured by them.`;
      case "repetition-with-intention":
        return `You don't get strong by lifting heavy once.

You get strong by showing up again. And again. And again.

But if you do the same thing forever, you don't get stronger — you get stuck.

That's the tension of progress: it demands ritual, but it punishes repetition without variation.

Whether in the gym or in product, growth comes through iteration — small, deliberate cycles of effort. You log your training. You tweak your form. You try a new tempo. In software, you ship. You measure. You talk to the user. You try again. The process isn't glamorous — but it's generative.

Rituals compound. Rules confine.

A rule says "do this."

A ritual says "do this because it matters."

One is brittle. The other bends with you.

Agile, for example, isn't magic. It's just a set of rituals. Daily standups, retros, demos, sprints — all meant to create rhythm and reflection. But rituals only work when they're anchored in meaning and adapted to context. If your team treats retros like checkbox theater, then you're not iterating — you're just looping. And if your standup sounds like "I did stuff, I'll do stuff, no blockers," you've got a ritual without reason.

The same failure shows up in the gym. People find a powerlifting program online and follow it to the letter, even when it doesn't fit their recovery, their age, their job, their life. They wonder why they plateau — or get hurt. It's because they forgot the principle beneath the plan.

That's where most systems fail: not because the framework is flawed, but because the user is forgotten. They're treated like an input to a method, instead of the reason for its existence.

Let's be honest: there's no shortage of books telling you how to do things.

And yes — here we are, writing another one.

But this isn't a blueprint. It's a philosophy.

The implementation is on you.

What works for one team, one lifter, one body, won't work for another. That's not failure — that's reality.

Stefi Cohen didn't become a record-breaking lifter by blindly following a single powerlifting template. Her training evolved through experimentation: strength phases, hypertrophy cycles, hybrid athletic blocks. She didn't just lift heavy — she studied her feedback, varied her stimuli, and rewrote her rituals to fit her mission.

Progress didn't come from rigidity. It came from rhythm and reinvention.

In product, that same spirit of experimentation lives in hack weeks — short, sacred breaks from routine where teams can stretch in new directions.

Atlassian, Spotify, and Elastic have all embraced this. At Elastic, hack weeks became a celebrated ritual — not just for innovation, but for joy. Engineers got to break free from roadmap gravity and chase ideas that didn't need to justify themselves in Jira. Some of Elastic Security's most creative features — including internal workflow improvements, experimental visualizations, and early prototypes of user-requested tooling — were born not in sprint planning, but in that carved-out chaos.

Sometimes, the best way to realign with the mission is to deliberately step outside it.

Rituals work when they're shaped by the user, not imposed on them.

They're tools — not commandments.

And when they're working, you feel it: not just in output, but in outlook. A team that trusts its rituals doesn't need micromanagement. A lifter that trusts their program doesn't need motivation hacks. The rhythm carries you. The meaning sustains you.

But rituals aren't static.

They must flex to your fatigue. They must bend to your bandwidth. They must evolve — not just to avoid boredom, but to stay honest with the mission.

Same input, same outcome. If the goal has changed, so must the reps.

That's what separates the lifter who grows from the one who stalls.

That's what separates the product team that adapts from the one that burns out.

Because if the mission is the magnet —

rituals are the rails.

They don't tell you where to go.

They keep you from sliding off the path while you find it.

Rituals give you direction.

But progress? That comes from the work itself — the grind, the reps, the effort no one applauds.

In the next chapter, we talk about how strength is built — and why it doesn't always look like progress.`;
      default:
        return "Content for this section will be added soon.";
    }
  }
  
  if (chapterId === 2) {
    switch (sectionId) {
      case "the-myth-of-overnight-success":
        return `We've all heard the stories.

The product that "took off overnight."

The lifter who casually pulls four plates like they've always been able to.

The founder in a garage who changes the world with a single keynote.

It's tempting to believe that mastery happens like that — in a flash.

But that's not really how it works.

Take the iPhone. The 2007 reveal made it feel like it dropped from the sky fully formed. But behind that moment were years of trial and error. Touchscreens that didn't quite work. Software that crashed mid-demo. A mountain of prototypes that never saw the light of day. The final product wasn't a stroke of brilliance — it was the result of relentless iteration.

Same with Instagram. What looked like an overnight success was actually the second version of a too-close-to-Foursquare check-in app called Burbn. The team just kept listening, trimming, trying again. One update at a time.

And that big deadlift on your feed? Probably not magic. More likely: a hundred quiet sessions, some of them rough. A lot of small choices to show up, tweak form, trust the program.

We love the idea of sparks — fast wins, big leaps, sudden breakthroughs. But progress usually doesn't feel like that.

Most of the time, it feels a lot more like repetition.

The engineer fixing the same piece of code — again.

The founder rewriting their pitch for the fifth time.

The lifter doing the same warm-up cues every session, no matter the weight.

It's not flashy. But it adds up.

That's part of what makes the first few months — or the first year — so exhilarating. In the gym, you make gains almost every week. In a startup, your product evolves daily. Everything feels fast, and the feedback is loud.

But then you hit the plateau.

The easy wins dry up. Strength doesn't come as quickly. Users get harder to surprise. Suddenly, it's not about chasing sparks anymore — it's about showing up and pushing through.

This is where the real work begins.

In lifting, that means grinding through the middle — not maxing out, but mastering the basics under load. In product, it's navigating the shift from scrappy innovation to enterprise-grade reliability. Less fanfare, more focus.

That's the part people don't always talk about — and the part that actually defines mastery.

It's not just about adding more weight or shipping more features.

It's about learning to hone your form.

In lifting, that might mean dialing in your brace, fixing a subtle shift in your squat, or finally feeling your lats engage in a deadlift.

In product, it's refining an initiative until it truly solves the right problem — not just adds to the roadmap.

You start to realize: Reps aren't just about volume.

They're about attention.

That's what makes progress sustainable.

And that's what Mission Built is really about — building better products, one rep at a time.`;
      case "repetition-is-not-redundancy":
        return `In Section 1, we looked at the myth of overnight success — how real strength, in the gym or in product, is built through showing up again and again. But not all reps are created equal. The real magic isn't just in the repetition — it's in how you use it.

Not all reps count the same.

Anyone who's coasted through a gym session, just moving weight, knows the difference. One set burns time. Another builds awareness, precision, and strength — even if the numbers don't change.

The same is true in product.

Repetition isn't redundant when it's intentional. When it's used to test assumptions, refine interfaces, tune performance, or build something just a little closer to what users actually need. That's the kind of rep that moves things forward.

But repetition alone isn't enough — variation is what makes repetition transformative.

As Dr. Mike Israetel, co-founder of Renaissance Periodization, teaches:

"Training works best when structured into intentional blocks that emphasize different goals. In hypertrophy-focused blocks, lifters increase volume over time — guided by principles like Minimum Effective Volume (MEV), Maximum Adaptive Volume (MAV), and Maximum Recoverable Volume (MRV). This structured overload builds muscle while preserving recovery, setting the stage for later strength expression. The concept isn't just about working hard — it's about working smart, within clear, adaptive boundaries."

Source: https://drmikeisraetel.com/dr-mike-israetel-mv-mev-mav-mrv-explained/

In training, we use blocks for different goals: hypertrophy to build muscle, strength to build expression, and deloads to recover and grow. We manipulate movement, load, and tempo to avoid stagnation. A paused bench press, a deficit deadlift, or chains added to a bar — each variation targets a different adaptation, even if the base movement stays the same.

Product is no different.

You might run a block of sprints to achieve a specific outcome — refining onboarding, improving performance, or tackling tech debt. Then shift into a new block with a new goal. Like training, it takes enough intentionality to complete a cycle, maybe one, two, or three sprints, before varying the focus. Progress comes not from flailing in every direction, but from focused variation over time.

And just like strength doesn't grow without tension, product insight doesn't grow without diverse input.

You can't just loop with your own team forever. Sometimes you have to stretch — to talk to sales, to customers, to analysts, to skeptics. Even when it's uncomfortable. Especially when it is.

This is where The Medici Group gets it right: innovation happens when diverse perspectives collide.

As Frans Johansson puts it in The Medici Effect:

"When you step into an intersection of fields, disciplines, or cultures, you can combine existing concepts into a large number of extraordinary new ideas."

In the gym, that might mean lifting with people stronger or different than you. In product, it means bringing in voices from outside your echo chamber — support calls, sales objections, the person who almost churned.

Reps alone build endurance.

Smart variation builds power.

This is how you break through the plateau — not by abandoning the reps, but by evolving them.`;
      case "when-the-spark-fades":
        return `The first reps are easy — not physically, but emotionally. You're fired up. Everything's new. Progress is loud and obvious.

But what happens after the rush?

In lifting, it's the long middle. The early PRs stop coming. Your form stalls. You show up, grind through the same sets, and wonder if you're actually moving forward. You're not always chasing your one-rep max. And you shouldn't be. Strength isn't built by living at your limit — it's built in the space between peaks, when you train with intention and recover with discipline.

In product, it's the same. You can't always be doing the flashy, innovative thing. Sometimes the most important work is foundational — fixing backend debt, improving accessibility, tightening up performance. The kind of work that creates capacity for brilliance later.

And for many, this is where the wheels come off.

Because motivation — that spark — is unreliable. It's not designed for the long haul. And it doesn't care about your goals.

That's why systems matter more than sparks.

Systems are how you keep showing up when the dopamine dies down. Morning routines. Logbooks. Standups. Progress reviews. They don't need to be rigid. But they do need to be real. Reps don't get done by accident.

You don't need hype — you need structure.

In training, that structure might be a coach, a program, a calendar alert that says "get under the bar." In product, it might be a rhythm of sprint planning, async demos, or check-ins with customers. Externalized accountability is often the only thing that keeps momentum moving.

James Clear — author of the bestselling book Atomic Habits, known for his work on behavior change and habit formation — wrote:

"You do not rise to the level of your goals. You fall to the level of your systems."

The work still has to be done. But when your environment supports your actions, it gets done more often.

And here's the quiet truth:

The people who make the biggest progress aren't usually the most intense — they're the most consistent.

They build when no one's watching.

They train when it's not fun.

They keep caring — even when the spark is gone.

But what if you need to find the spark again?

One of the fastest ways to reignite your drive is to reconnect with the people you're building for. Talk to your users — especially the ones who aren't shouting. You might think the work you're doing isn't flashy, but somewhere out there, someone is craving exactly what you're building.

Stability. Accessibility. Visibility. These aren't buzzwords — they're lifelines for users with real problems. Find them. Listen to them. Let them lift you up.

Because nothing recharges momentum like hearing someone say: "This made my day better."

And that brings us to the next section: the power of the quiet reps — the multiplier of boring work.`;
      case "the-multiplier-of-boring-work":
        return `There's a kind of work that doesn't make headlines. No one posts their warm-up sets. No one celebrates shaving 100ms off load time.

But that's the work that wins.

For every PR pulled in competition, there are hundreds of days of grinding behind it — submaximal sets, long pauses, light reps, mental resets. The same is true in product. Every effortless-looking release rests on a foundation of something much deeper: months of planning, iteration, bug-fixing, and late-night Slack threads.

In lifting, it's the mobility work you do alone at 6 a.m. The back-off sets you don't skip. The deload week you take seriously. It doesn't look impressive — but it makes everything else possible.

In product, it's building out role-based access controls — not because it's exciting, but because your biggest customers expect it. It's mapping audit logs across services so your platform isn't a compliance risk anymore. It's the 10th conversation with a user about the same rough edge in the UX. These aren't "big bets," but they're the reason your big bets land.

That's what boring work does: it compounds.

Each rep you don't skip, each ticket you don't shortcut, each problem you refine instead of avoid — it stacks. Quietly. Relentlessly. And over time, it becomes your edge.

You don't need to go viral. You need to be trusted.

And trust is built in the boring work.

The warm-up that prevents injury.

The small fix that prevents churn.

The five-second improvement that gives a user five minutes back.

This is what separates the strong from the strong enough.

It's not what you do once.

It's what you do without applause.

You do it for the growth. For the discipline. For the user whose day you quietly made better. Not for the accolades.

That's what separates long-term success from short-term effort — not glory, but the passion to do the work for its own sake. The features and the gains? They're just symptoms. What matters is the mission that fuels them.

That's why I'm so passionate about product management — and about lifting. Because the best PMs and the best lifters don't just show up for themselves. They show up for the team, for the user, for their own growth — not in a selfish way, but in a way that elevates everything and everyone around them.

And if you've made it this far — through the reps, the plateaus, the quiet work — you already know:

This isn't just about shipping or lifting.

It's about becoming the kind of person, or the kind of team, that keeps showing up.

That's the real win. And that's where we end this chapter — not at the peak, but at the foundation.`;
      case "the-work-becomes-the-win":
        return `At some point, the reps stop being something you have to do. They just become something you do.

You stop chasing motivation and start trusting momentum.

You stop asking when it gets easy and start asking how to keep showing up.

And that's the shift — not just in the gym or in your sprint board, but in your mindset. You lift because you care. You build because it matters. Because you love it.

It's not about PRs or product launches. It's about what they represent: The hours you logged. The patterns you learned. The people you helped.

That's what it means to be mission built.

You're not doing it for the spotlight.

You're doing it because you've seen the power of the process — and you're not walking away from it.

Progress doesn't shout — it stacks.

One quiet rep at a time.

And if repetition is the foundation, what you build on top of it matters.

The next chapter explores exactly that: how rituals — not rules — help you grow, adapt, and lead with purpose.

Up next: Rituals Over Rules.`;
      default:
        return "Content for this section will be added soon.";
    }
  }
  
  return "Content for this section will be added soon.";
};

const getSections = (chapterId: number) => {
  if (chapterId === 1) {
    return [
      { id: "mission-is-the-magnet", title: "The Mission Is the Magnet" },
      { id: "the-drift", title: "The Drift" },
      { id: "repetition-with-intention", title: "Repetition with Intention" }
    ];
  }
  
  if (chapterId === 2) {
    return [
      { id: "the-myth-of-overnight-success", title: "The Myth of Overnight Success" },
      { id: "repetition-is-not-redundancy", title: "Repetition Is Not Redundancy" },
      { id: "when-the-spark-fades", title: "When the Spark Fades" },
      { id: "the-multiplier-of-boring-work", title: "The Multiplier of Boring Work" },
      { id: "the-work-becomes-the-win", title: "The Work Becomes the Win" }
    ];
  }
  
  return [];
};

const PdfExportButton: React.FC<PdfExportButtonProps> = ({ chapter }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      const maxWidth = pageWidth - (margin * 2);
      let yPosition = margin;
      const lineHeight = 1.5;

      // Helper function to add footer to current page
      const addFooter = () => {
        const footerY = pageHeight - 10;
        
        // Left side - missionbuilt.io
        pdf.setFontSize(9);
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(107, 114, 128); // Gray color
        pdf.text("missionbuilt.io", margin, footerY);
        
        // Middle - page number
        const pageNum = pdf.internal.getNumberOfPages();
        const pageText = `${pageNum}`;
        const pageTextWidth = pdf.getTextWidth(pageText);
        const pageX = (pageWidth - pageTextWidth) / 2;
        pdf.text(pageText, pageX, footerY);
        
        // Right side - CC BY-NC 4.0
        const licenseText = "CC BY-NC 4.0";
        const licenseTextWidth = pdf.getTextWidth(licenseText);
        const licenseX = pageWidth - margin - licenseTextWidth;
        pdf.text(licenseText, licenseX, footerY);
      };

      // Helper function to check if we need a new page
      const checkPageBreak = (additionalHeight: number) => {
        if (yPosition + additionalHeight > pageHeight - margin - 15) { // Leave space for footer
          addFooter(); // Add footer to current page before creating new one
          pdf.addPage();
          yPosition = margin;
          return true;
        }
        return false;
      };

      // Helper function to add text with word wrapping and proper page breaks
      const addText = (text: string, fontSize: number = 11, isBold: boolean = false, isTitle: boolean = false) => {
        pdf.setFontSize(fontSize);
        if (isBold) {
          pdf.setFont("helvetica", "bold");
        } else {
          pdf.setFont("helvetica", "normal");
        }
        
        const lines = pdf.splitTextToSize(text, maxWidth);
        const totalHeight = lines.length * fontSize * 0.3 * lineHeight;
        
        // Check if we need a new page for this text block
        checkPageBreak(totalHeight);
        
        // Add extra space before titles (except if at top of page)
        if (isTitle && yPosition > margin) {
          yPosition += 8;
        }
        
        // Add the text line by line
        lines.forEach((line: string, index: number) => {
          // Check for page break before each line if needed
          if (yPosition + fontSize * 0.3 * lineHeight > pageHeight - margin - 15) {
            addFooter(); // Add footer before page break
            pdf.addPage();
            yPosition = margin;
          }
          
          pdf.text(line, margin, yPosition);
          yPosition += fontSize * 0.3 * lineHeight;
        });
        
        // Add spacing after text blocks
        yPosition += fontSize * 0.2;
      };

      // Helper function to add centered text
      const addCenteredText = (text: string, fontSize: number = 11, isBold: boolean = false, yPos?: number) => {
        pdf.setFontSize(fontSize);
        if (isBold) {
          pdf.setFont("helvetica", "bold");
        } else {
          pdf.setFont("helvetica", "normal");
        }
        
        const textWidth = pdf.getTextWidth(text);
        const x = (pageWidth - textWidth) / 2;
        const y = yPos || yPosition;
        
        pdf.text(text, x, y);
        
        if (!yPos) {
          yPosition += fontSize * 0.3 * lineHeight;
        }
      };

      // Helper function to add table
      const addTable = () => {
        const tableData = [
          ["OODA Stage", "With Mission-Driven Focus", "Without It"],
          ["Observe", "You know what matters to watch", "You collect everything, drowning in noise"],
          ["Orient", "Purpose helps filter & frame inputs", "Metrics get over-prioritized, lose big picture"],
          ["Decide", "Mission becomes a north star for action", "Risk of chasing vanity wins or short-term gains"],
          ["Act", "Execution has energy and resolve", "Actions may be misaligned or half-hearted"]
        ];

        const colWidths = [maxWidth * 0.2, maxWidth * 0.4, maxWidth * 0.4];
        const rowHeight = 20;
        const tableHeight = tableData.length * rowHeight;
        
        // Check if table fits on current page
        checkPageBreak(tableHeight + 20);
        
        // Add some space before table
        yPosition += 10;
        
        tableData.forEach((row, rowIndex) => {
          // Check for page break before each row
          if (yPosition + rowHeight > pageHeight - margin - 15) {
            addFooter(); // Add footer before page break
            pdf.addPage();
            yPosition = margin;
          }
          
          let xPosition = margin;
          
          row.forEach((cell, colIndex) => {
            // Draw cell border
            pdf.rect(xPosition, yPosition, colWidths[colIndex], rowHeight);
            
            // Add cell content
            pdf.setFontSize(9);
            if (rowIndex === 0) {
              pdf.setFont("helvetica", "bold");
            } else {
              pdf.setFont("helvetica", "normal");
            }
            
            // Split text to fit in cell
            const cellLines = pdf.splitTextToSize(cell, colWidths[colIndex] - 4);
            const textY = yPosition + 6;
            
            cellLines.forEach((line: string, lineIndex: number) => {
              pdf.text(line, xPosition + 2, textY + (lineIndex * 4));
            });
            
            xPosition += colWidths[colIndex];
          });
          
          yPosition += rowHeight;
        });
        
        // Add space after table
        yPosition += 10;
      };

      // Add spacing between sections
      const addSectionSpacing = () => {
        yPosition += 15;
      };

      // === COVER PAGE ===
      // Set dark background color (matching dark mode)
      pdf.setFillColor(34, 40, 49); // Dark blue-gray background
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');

      // Add Mission Built logo area - include the actual logo image
      pdf.setTextColor(255, 255, 255); // White text
      
      // Logo image (M with barbell)
      try {
        // Add the logo image at the top
        const logoSize = 40;
        const logoX = (pageWidth - logoSize) / 2;
        pdf.addImage("/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png", "PNG", logoX, 40, logoSize, logoSize);
      } catch (error) {
        // Fallback if image fails to load - use text representation
        pdf.setFontSize(32);
        pdf.setFont("helvetica", "bold");
        addCenteredText("M", 32, true, 60);
      }
      
      // MissionBuilt text logo
      pdf.setTextColor(255, 255, 255); // White text
      pdf.setFontSize(24);
      pdf.setFont("helvetica", "bold");
      addCenteredText("MISSION", 24, true, 90);
      addCenteredText("BUILT", 24, true, 115);
      
      // Website
      pdf.setTextColor(156, 163, 175); // Light gray
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "normal");
      addCenteredText("missionbuilt.io", 14, false, 140);

      // Book title
      pdf.setTextColor(245, 158, 11); // Sunburst color (amber)
      pdf.setFontSize(28);
      pdf.setFont("helvetica", "bold");
      addCenteredText("Mission Built", 28, true, 190);
      
      pdf.setTextColor(255, 255, 255); // White
      pdf.setFontSize(20);
      pdf.setFont("helvetica", "normal");
      addCenteredText("Lessons from the Barbell", 20, false, 220);
      addCenteredText("and the Boardroom", 20, false, 245);

      // Training log details
      pdf.setTextColor(34, 197, 94); // Army green
      pdf.setFontSize(18);
      pdf.setFont("helvetica", "bold");
      addCenteredText(`Training Log ${chapter.id}`, 18, true, 290);
      
      pdf.setTextColor(255, 255, 255); // White
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "normal");
      addCenteredText(chapter.title, 16, false, 315);

      // Author
      pdf.setTextColor(156, 163, 175); // Light gray
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "normal");
      addCenteredText("by Mike Nichols", 16, false, 350);

      // Creative Commons License at bottom - properly positioned
      pdf.setTextColor(107, 114, 128); // Darker gray
      pdf.setFontSize(8);
      pdf.setFont("helvetica", "normal");
      addCenteredText("This work is licensed under a Creative Commons", 8, false, pageHeight - 30);
      addCenteredText("Attribution-NonCommercial 4.0 International License", 8, false, pageHeight - 20);

      // Add footer to cover page
      addFooter();

      // Start new page for content
      pdf.addPage();
      
      // Reset text color and position for content
      pdf.setTextColor(0, 0, 0); // Black text for content
      yPosition = margin;

      // Title
      addText(chapter.title, 18, true, true);
      addSectionSpacing();

      // Description
      addText(chapter.description, 12);
      addSectionSpacing();

      // Get all sections for this chapter
      const sections = getSections(chapter.id);
      
      // Process each section
      sections.forEach((section, index) => {
        // Section title
        addText(`${index + 1}. ${section.title}`, 14, true, true);
        yPosition += 5;
        
        // Get section content
        const content = getSectionContent(chapter.id, section.id);
        
        // Handle special case for section with table (mission-is-the-magnet in chapter 1)
        if (chapter.id === 1 && section.id === "mission-is-the-magnet") {
          // Split content at the table marker
          const beforeTable = content.split('But here\'s the catch — without a clear mission, the whole loop spins out.')[0] + 'But here\'s the catch — without a clear mission, the whole loop spins out.';
          const afterTable = content.split('But here\'s the catch — without a clear mission, the whole loop spins out.')[1].replace('[TABLE: OODA Loop Analysis]', '').trim();
          
          // Add content before table
          const beforeTableParagraphs = beforeTable.split('\n\n');
          beforeTableParagraphs.forEach((paragraph) => {
            if (paragraph.trim()) {
              addText(paragraph.trim(), 11);
              yPosition += 3;
            }
          });
          
          // Add the table
          addTable();
          
          // Add content after table
          const afterTableParagraphs = afterTable.split('\n\n');
          afterTableParagraphs.forEach((paragraph) => {
            if (paragraph.trim()) {
              addText(paragraph.trim(), 11);
              yPosition += 3;
            }
          });
        } else {
          // Regular content processing for other sections
          const paragraphs = content.split('\n\n');
          paragraphs.forEach((paragraph) => {
            if (paragraph.trim()) {
              addText(paragraph.trim(), 11);
              yPosition += 3;
            }
          });
        }
        
        // Add spacing between sections
        if (index < sections.length - 1) {
          addSectionSpacing();
        }
      });

      // Further Reading section
      if (chapter.furtherReading && chapter.furtherReading.length > 0) {
        addSectionSpacing();
        addText("Further Reading", 14, true, true);
        
        chapter.furtherReading.forEach((resource, index) => {
          // Resource title
          addText(resource.title, 11, true);
          
          // Resource description
          if (resource.description) {
            addText(resource.description, 10);
          }
          
          // Resource note
          if (resource.note) {
            addText(resource.note, 10);
          }
          
          // Resource URL
          addText(resource.url, 9);
          
          // Add spacing between resources
          if (index < chapter.furtherReading.length - 1) {
            yPosition += 8;
          }
        });
      }

      // Add License and Citation section
      addSectionSpacing();
      addSectionSpacing(); // Extra space before license section
      
      addText("License", 14, true, true);
      addText("This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0).", 11);
      addText("You are free to share and adapt this material for non-commercial purposes, with proper attribution.", 11);
      
      yPosition += 10; // Space between license and citation
      
      addText("Citation", 14, true, true);
      addText("Nichols, Mike. Mission Built: Lessons from the Barbell and the Boardroom. missionbuilt.io", 11);

      // Add footer to the last page
      addFooter();

      // Download the PDF
      const fileName = `training-log-${chapter.id}-${chapter.title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
      pdf.save(fileName);

      toast({
        title: "PDF Generated",
        description: "Your training log has been downloaded as a PDF.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={generatePDF}
      disabled={isGenerating}
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
    >
      <Download className="h-4 w-4" />
      {isGenerating ? "Generating PDF..." : "Download PDF"}
    </Button>
  );
};

export default PdfExportButton;
