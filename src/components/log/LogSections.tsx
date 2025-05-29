
import React, { useState, useEffect } from "react";
import { Chapter } from "@/data/chapters-data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface LogSectionsProps {
  chapter: Chapter;
  expandedSection?: string;
}

// Function to calculate estimated read time
const calculateReadTime = (content: React.ReactNode): number => {
  // Convert React content to text for word counting
  const getTextFromReactNode = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (React.isValidElement(node) && node.props.children) {
      return getTextFromReactNode(node.props.children);
    }
    if (Array.isArray(node)) {
      return node.map(getTextFromReactNode).join(' ');
    }
    return '';
  };

  const text = getTextFromReactNode(content);
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  const wordsPerMinute = 200; // Average reading speed
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readTime); // Minimum 1 minute
};

// Sample content for demonstration
const getSectionContent = (chapterId: number, sectionId: string) => {
  if (chapterId === 1) {
    switch (sectionId) {
      case "mission-is-the-magnet":
        return (
          <div className="space-y-6">
            <p>Before I ever built products, I served in the U.S. Army as an Airborne intelligence sergeant. That experience — of working in service of something larger than myself, of making decisions under pressure with lives on the line — shaped everything that came after. I learned early that mission comes first. Not ego. Not recognition. Mission.</p>
            
            <p>That mindset followed me from the military to cybersecurity, and into leadership roles where the stakes changed but the values stayed the same. Whether it was securing critical systems, helping build Elastic Security, or coaching in the gym, the goal has always been the same: real strength is lifting others.</p>
            
            <p>One of the proudest chapters of my product career was building Endgame. We entered a brutally competitive market — going head-to-head with massive players like McAfee and CrowdStrike — and carved out real ground. Not because we had more money or brand recognition, but because we had something harder to copy: a clear mission. Protect high-value targets from nation-state level attacks. That focus, and the small, fierce team who rallied behind it, made all the difference.</p>
            
            <p>At the heart of it was Nate Fick, a Marine officer turned tech CEO, and later the U.S. Ambassador for Cyberspace and Digital Policy. He led with conviction, clarity, and a deep respect for the mission. In all-hands meetings, Nate would remind us that we were an "elevator asset company" — that if the building burned down, the most important assets could still fit in the elevator. It wasn't the code or the tools. It was the people — the ones who understood the user's mission and had the passion to serve it.</p>
            
            <p>That idea stuck with me. Nate's example reinforced what I learned in uniform: The success is the user's success. Your mission is their mission.</p>
            
            <p>Metrics are the outcome of making your user successful. Yes, we need to measure them. But they are the result of serving the mission — not the reason for it.</p>
            
            <p>There's a moment in every product meeting when the question slides in like it always does:</p>
            <p>"How will we measure success?"</p>
            <p>It's a good question — just not always a good first question.</p>
            
            <p>In lifting, it's the same story. People chase PRs every week like the number on the barbell is the whole point. Add five pounds. Hit record. Post the clip. Repeat.</p>
            
            <p>But metrics without mission? That's just noise. Pressure with no direction. Goals with no guts.</p>
            
            <blockquote className="border-l-4 border-army pl-4 italic text-muted-foreground">
              "The weight on the bar isn't the goal — it's the evidence of progress, not the destination."
            </blockquote>
            
            <p>We've all seen what happens when this mindset takes over. It's not a failure of talent — it's a failure of alignment. Cyberpunk 2077 didn't initially flop because the devs didn't care — far from it. The development team poured years into building something ambitious. But the pressure to hit a holiday launch window — a decision made at the executive level — overrode the mission of delivering a complete, polished experience. The result was a rocky release, millions in refunds, a reputational hit, and a stock crash.</p>
            
            <p>To their credit, the team stuck with it. Years later, after patches and a reimagined DLC, the game has earned back much of the trust it lost — a testament to what happens when talented people are finally given the space to do the work right.</p>
            
            <p>And we've seen what it looks like to protect the mission — even when it means stepping back. Simone Biles did exactly that in front of the entire world at the 2021 Olympics. Under unimaginable pressure, she chose long-term purpose over short-term performance. She knew something was off, and she honored that instinct.</p>
            
            <blockquote className="border-l-4 border-army pl-4 italic text-muted-foreground">
              "I have to focus on my mental health… if you don't, then you're not going to enjoy your score and you're not gonna succeed as much as you want to."<br />
              <span className="text-sm">- Simone Biles</span>
            </blockquote>
            
            <p>Her move wasn't retreat — it was leadership. And in time, she returned to competition stronger, on her terms, and more respected than ever. A different kind of comeback — one powered by mission, not metrics.</p>
            
            <p>Success isn't about hitting every metric. It's about refusing to lose yourself trying.</p>
            
            <h3 className="text-lg font-semibold mt-8 mb-4">More Than Just Good Intentions</h3>
            
            <p>Mission-driven isn't a poster in the break room or a bullet in a pitch deck. It's how you move — how you decide, how you show up when it's hard.</p>
            
            <p>In a world that celebrates velocity, mission is quiet. But that doesn't make it weak. Mission gives you clarity when things get blurry and stamina when things get hard.</p>
            
            <p>Take Patagonia. They once ran a campaign telling customers not to buy their jacket unless they truly needed it. Why? Because their values mattered more than their quarterly revenue.</p>
            
            <p>Or SpaceX — aiming at goals that span decades, not quarters. It's not about idolizing companies. It's about recognizing what real mission-alignment looks like when the stakes are high and the timelines are long.</p>
            
            <p>And it pays off. Research shows that people who believe in the purpose behind their work stay longer, burn out less, and deliver more.</p>
            
            <h3 className="text-lg font-semibold mt-8 mb-4">When Metrics Eclipse Meaning</h3>
            
            <p>Let's be clear: metrics matter. But only when they serve the mission — not when they become it.</p>
            
            <p>Here's where teams lose the plot:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>They ship fast instead of shipping right.</li>
              <li>They chase signups instead of learning why users leave.</li>
              <li>They brag about launches and ignore long-term usage.</li>
            </ul>
            
            <p>When dates drive development, teams start cutting corners. Feedback loops close. Energy fades. You build momentum toward a number — not toward value.</p>
            
            <p>In the gym, this is ego lifting. In product, it's just as risky. It looks like burned-out engineers, brittle systems, and growth that collapses the second you stop pushing it uphill.</p>
            
            <h3 className="text-lg font-semibold mt-8 mb-4">The Fulfillment Flywheel (Powered by Purpose)</h3>
            
            <p>There's a better model. One that's as relevant in combat as it is in code — or in the squat rack.</p>
            
            <p>It's called the OODA Loop: Observe, Orient, Decide, Act. Developed for fighter pilots. Adopted by startups. Powered by clarity.</p>
            
            <p>But here's the catch — without a clear mission, the whole loop spins out.</p>
            
            <div className="overflow-x-auto my-6">
              <table className="w-full border border-slate/20 rounded-lg">
                <thead>
                  <tr className="bg-slate/5">
                    <th className="border border-slate/20 p-3 text-left font-semibold">OODA Stage</th>
                    <th className="border border-slate/20 p-3 text-left font-semibold">With Mission-Driven Focus</th>
                    <th className="border border-slate/20 p-3 text-left font-semibold">Without It</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate/20 p-3 font-medium">Observe</td>
                    <td className="border border-slate/20 p-3">You know what matters to watch</td>
                    <td className="border border-slate/20 p-3">You collect everything, drowning in noise</td>
                  </tr>
                  <tr className="bg-slate/5">
                    <td className="border border-slate/20 p-3 font-medium">Orient</td>
                    <td className="border border-slate/20 p-3">Purpose helps filter & frame inputs</td>
                    <td className="border border-slate/20 p-3">Metrics get over-prioritized, lose big picture</td>
                  </tr>
                  <tr>
                    <td className="border border-slate/20 p-3 font-medium">Decide</td>
                    <td className="border border-slate/20 p-3">Mission becomes a north star for action</td>
                    <td className="border border-slate/20 p-3">Risk of chasing vanity wins or short-term gains</td>
                  </tr>
                  <tr className="bg-slate/5">
                    <td className="border border-slate/20 p-3 font-medium">Act</td>
                    <td className="border border-slate/20 p-3">Execution has energy and resolve</td>
                    <td className="border border-slate/20 p-3">Actions may be misaligned or half-hearted</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>In lifting, it's trusting the plan instead of maxing out because you feel good that day. In product, it's waiting to ship because your users aren't ready — even if your OKRs are.</p>
            
            <p>Mission turns chaos into clarity. It makes every rep count. Every release matter. Every decision directional.</p>
            
            <p>This is the real flywheel of fulfillment:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Mission fuels clarity.</li>
              <li>Clarity powers resilience.</li>
              <li>Resilience drives real progress.</li>
              <li>And real progress reinforces the mission.</li>
            </ul>
            
            <p>That's the throughline. That's what keeps us going.</p>
            <p>Metrics follow. But the mission leads.</p>
          </div>
        );
      case "the-drift":
        return (
          <div className="space-y-6">
            <p>At first, the metric is a mirror — it reflects the mission. Clean, focused, and true.</p>
            <p>But over time, something shifts. Quietly. Gradually. The mirror warps. And without noticing, we begin steering toward the reflection instead of the road.</p>
            <p>This is the Drift.</p>
            
            <p>It doesn't announce itself. It rarely arrives with bad intent. It begins with a goal:</p>
            
            <p>Launch the feature by Q4.</p>
            <p>Hit 405 on deadlift.</p>
            <p>Increase MAUs by 20%.</p>
            
            <p>Reasonable. Measurable. Actionable. These are the numbers we hold up as evidence that we're making progress — and for a while, they are.</p>
            
            <p>But then: the goal becomes the game.</p>
            
            <p>In product, we've seen it time and time again. Shipping becomes more important than solving. Teams crunch to meet a date set quarters ago, long after the user problem has evolved. Metrics chase headlines. Investors want news. Executives want motion. The dashboard glows green while user trust fades red.</p>
            
            <p>Think of Boeing. In the race to beat Airbus, they needed the 737 Max on runways — fast. Shareholder pressure mounted. Deadlines became immovable. On paper, the metrics looked great: deliveries met, costs controlled. But beneath the numbers, safety systems were skipped, warnings dismissed.</p>
            <p>Two crashes. Hundreds of lives lost. The drift wasn't just technical — it was cultural. Speed overtook scrutiny. The metric overtook the mission.</p>
            
            <p>In strength, the signs are physical — and brutal. Hafthor Björnsson, one of the strongest men in history, returned to powerlifting after two years of boxing. He set his sights on breaking the raw total world record. Big lifts were stacking fast. But recovery lagged behind. He felt the warning signs — tightness, fatigue — but kept pushing.</p>
            
            <blockquote className="border-l-4 border-army pl-4 italic text-muted-foreground">
              "I wasn't recovering fully between sessions… not listening to my body, which is silly."
            </blockquote>
            
            <p>Then came the snap. Attempting a 556-pound bench press, his pec tore clean off the bone.</p>
            <p>The drift had found him too: progress misaligned with process, recovery sacrificed to reach a number that no longer served the mission. The result was pain, delay, and a lesson carved in scar tissue.</p>
            
            <p>The damage isn't just physical. It's psychological. Because when we treat metrics as the mission, missing them feels like failure. And so we hide the truth, inflate success, or worst of all — stop trying.</p>
            
            <p>The Drift corrodes not through force, but through inversion. It flips process into performance. It turns care into compliance.</p>
            
            <p>And it burns people out.</p>
            
            <p>I've worked with brilliant people who could have built anything — but they left, not because they failed, but because the system stopped valuing why they showed up in the first place. When we reduce contribution to a dashboard, we forget the soul behind the keyboard.</p>
            
            <p>This isn't just anecdotal. Research shows that mission-driven employees are significantly more loyal.</p>
            <p>A LinkedIn survey found that employees motivated by mission were 54% more likely to stay with their company for five or more years.</p>
            <p>Another study revealed that companies engaging employees in purpose-driven programs saw a 52% lower turnover among newer employees.</p>
            
            <p>So what's the antidote?</p>
            
            <p>It's not to ignore metrics. It's to anchor them. To use them as signal, not steering.</p>
            <p>To build systems that reinforce why we do the work, not just how fast we do it.</p>
            
            <p>Because the real goal is not a launch date or a deadlift.</p>
            <p>The real goal is built through the reps, not measured by them.</p>
          </div>
        );
      case "repetition-with-intention":
        return (
          <div className="space-y-6">
            <p>You don't get strong by lifting heavy once.</p>
            <p>You get strong by showing up again. And again. And again.</p>
            <p>But if you do the same thing forever, you don't get stronger — you get stuck.</p>
            <p>That's the tension of progress: it demands ritual, but it punishes repetition without variation.</p>
            <p>Whether in the gym or in product, growth comes through iteration — small, deliberate cycles of effort. You log your training. You tweak your form. You try a new tempo. In software, you ship. You measure. You talk to the user. You try again. The process isn't glamorous — but it's generative.</p>
            <p>Rituals compound. Rules confine.</p>
            <p>A rule says "do this."</p>
            <p>A ritual says "do this because it matters."</p>
            <p>One is brittle. The other bends with you.</p>
            <p>Agile, for example, isn't magic. It's just a set of rituals. Daily standups, retros, demos, sprints — all meant to create rhythm and reflection. But rituals only work when they're anchored in meaning and adapted to context. If your team treats retros like checkbox theater, then you're not iterating — you're just looping. And if your standup sounds like "I did stuff, I'll do stuff, no blockers," you've got a ritual without reason.</p>
            <p>The same failure shows up in the gym. People find a powerlifting program online and follow it to the letter, even when it doesn't fit their recovery, their age, their job, their life. They wonder why they plateau — or get hurt. It's because they forgot the principle beneath the plan.</p>
            <p>That's where most systems fail: not because the framework is flawed, but because the user is forgotten. They're treated like an input to a method, instead of the reason for its existence.</p>
            <p>Let's be honest: there's no shortage of books telling you how to do things.</p>
            <p>And yes — here we are, writing another one.</p>
            <p>But this isn't a blueprint. It's a philosophy.</p>
            <p>The implementation is on you.</p>
            <p>What works for one team, one lifter, one body, won't work for another. That's not failure — that's reality.</p>
            <p>Stefi Cohen didn't become a record-breaking lifter by blindly following a single powerlifting template. Her training evolved through experimentation: strength phases, hypertrophy cycles, hybrid athletic blocks. She didn't just lift heavy — she studied her feedback, varied her stimuli, and rewrote her rituals to fit her mission.</p>
            <p>Progress didn't come from rigidity. It came from rhythm and reinvention.</p>
            <p>In product, that same spirit of experimentation lives in hack weeks — short, sacred breaks from routine where teams can stretch in new directions.</p>
            <p>Atlassian, Spotify, and Elastic have all embraced this. At Elastic, hack weeks became a celebrated ritual — not just for innovation, but for joy. Engineers got to break free from roadmap gravity and chase ideas that didn't need to justify themselves in Jira. Some of Elastic Security's most creative features — including internal workflow improvements, experimental visualizations, and early prototypes of user-requested tooling — were born not in sprint planning, but in that carved-out chaos.</p>
            <p>Sometimes, the best way to realign with the mission is to deliberately step outside it.</p>
            <p>Rituals work when they're shaped by the user, not imposed on them.</p>
            <p>They're tools — not commandments.</p>
            <p>And when they're working, you feel it: not just in output, but in outlook. A team that trusts its rituals doesn't need micromanagement. A lifter that trusts their program doesn't need motivation hacks. The rhythm carries you. The meaning sustains you.</p>
            <p>But rituals aren't static.</p>
            <p>They must flex to your fatigue. They must bend to your bandwidth. They must evolve — not just to avoid boredom, but to stay honest with the mission.</p>
            <p>Same input, same outcome. If the goal has changed, so must the reps.</p>
            <p>That's what separates the lifter who grows from the one who stalls.</p>
            <p>That's what separates the product team that adapts from the one that burns out.</p>
            <p>Because if the mission is the magnet —</p>
            <p>rituals are the rails.</p>
            <p>They don't tell you where to go.</p>
            <p>They keep you from sliding off the path while you find it.</p>
            <p>Rituals give you direction.</p>
            <p>But progress? That comes from the work itself — the grind, the reps, the effort no one applauds.</p>
            <p>In the next chapter, we talk about how strength is built — and why it doesn't always look like progress.</p>
          </div>
        );
      case "key-takeaways":
        return "The key insights from this chapter include...";
      default:
        return "Content for this section will be added soon.";
    }
  }
  
  if (chapterId === 2) {
    switch (sectionId) {
      case "the-myth-of-overnight-success":
        return (
          <div className="space-y-6">
            <p>We've all heard the stories.</p>
            <p>The product that "took off overnight."</p>
            <p>The lifter who casually pulls four plates like they've always been able to.</p>
            <p>The founder in a garage who changes the world with a single keynote.</p>
            <p>It's tempting to believe that mastery happens like that — in a flash.</p>
            <p>But that's not really how it works.</p>
            <p>Take the iPhone. The 2007 reveal made it feel like it dropped from the sky fully formed. But behind that moment were years of trial and error. Touchscreens that didn't quite work. Software that crashed mid-demo. A mountain of prototypes that never saw the light of day. The final product wasn't a stroke of brilliance — it was the result of relentless iteration.</p>
            <p>Same with Instagram. What looked like an overnight success was actually the second version of a too-close-to-Foursquare check-in app called Burbn. The team just kept listening, trimming, trying again. One update at a time.</p>
            <p>And that big deadlift on your feed? Probably not magic. More likely: a hundred quiet sessions, some of them rough. A lot of small choices to show up, tweak form, trust the program.</p>
            <p>We love the idea of sparks — fast wins, big leaps, sudden breakthroughs. But progress usually doesn't feel like that.</p>
            <p>Most of the time, it feels a lot more like repetition.</p>
            <p>The engineer fixing the same piece of code — again.</p>
            <p>The founder rewriting their pitch for the fifth time.</p>
            <p>The lifter doing the same warm-up cues every session, no matter the weight.</p>
            <p>It's not flashy. But it adds up.</p>
            <p>That's part of what makes the first few months — or the first year — so exhilarating. In the gym, you make gains almost every week. In a startup, your product evolves daily. Everything feels fast, and the feedback is loud.</p>
            <p>But then you hit the plateau.</p>
            <p>The easy wins dry up. Strength doesn't come as quickly. Users get harder to surprise. Suddenly, it's not about chasing sparks anymore — it's about showing up and pushing through.</p>
            <p>This is where the real work begins.</p>
            <p>In lifting, that means grinding through the middle — not maxing out, but mastering the basics under load. In product, it's navigating the shift from scrappy innovation to enterprise-grade reliability. Less fanfare, more focus.</p>
            <p>That's the part people don't always talk about — and the part that actually defines mastery.</p>
            <p>It's not just about adding more weight or shipping more features.</p>
            <p>It's about learning to hone your form.</p>
            <p>In lifting, that might mean dialing in your brace, fixing a subtle shift in your squat, or finally feeling your lats engage in a deadlift.</p>
            <p>In product, it's refining an initiative until it truly solves the right problem — not just adds to the roadmap.</p>
            <p>You start to realize: Reps aren't just about volume.</p>
            <p>They're about attention.</p>
            <p>That's what makes progress sustainable.</p>
            <p>And that's what Mission Built is really about — building better products, one rep at a time.</p>
          </div>
        );
      case "repetition-is-not-redundancy":
        return (
          <div className="space-y-6">
            <p>In Section 1, we looked at the myth of overnight success — how real strength, in the gym or in product, is built through showing up again and again. But not all reps are created equal. The real magic isn't just in the repetition — it's in how you use it.</p>
            <p>Not all reps count the same.</p>
            <p>Anyone who's coasted through a gym session, just moving weight, knows the difference. One set burns time. Another builds awareness, precision, and strength — even if the numbers don't change.</p>
            <p>The same is true in product.</p>
            <p>Repetition isn't redundant when it's intentional. When it's used to test assumptions, refine interfaces, tune performance, or build something just a little closer to what users actually need. That's the kind of rep that moves things forward.</p>
            <p>But repetition alone isn't enough — variation is what makes repetition transformative.</p>
            <p>As Dr. Mike Israetel, co-founder of Renaissance Periodization, teaches:</p>
            <p>"Training works best when structured into intentional blocks that emphasize different goals. In hypertrophy-focused blocks, lifters increase volume over time — guided by principles like Minimum Effective Volume (MEV), Maximum Adaptive Volume (MAV), and Maximum Recoverable Volume (MRV). This structured overload builds muscle while preserving recovery, setting the stage for later strength expression. The concept isn't just about working hard — it's about working smart, within clear, adaptive boundaries."</p>
            <p>Source: https://drmikeisraetel.com/dr-mike-israetel-mv-mev-mav-mrv-explained/</p>
            <p>In training, we use blocks for different goals: hypertrophy to build muscle, strength to build expression, and deloads to recover and grow. We manipulate movement, load, and tempo to avoid stagnation. A paused bench press, a deficit deadlift, or chains added to a bar — each variation targets a different adaptation, even if the base movement stays the same.</p>
            <p>Product is no different.</p>
            <p>You might run a block of sprints to achieve a specific outcome — refining onboarding, improving performance, or tackling tech debt. Then shift into a new block with a new goal. Like training, it takes enough intentionality to complete a cycle, maybe one, two, or three sprints, before varying the focus. Progress comes not from flailing in every direction, but from focused variation over time.</p>
            <p>And just like strength doesn't grow without tension, product insight doesn't grow without diverse input.</p>
            <p>You can't just loop with your own team forever. Sometimes you have to stretch — to talk to sales, to customers, to analysts, to skeptics. Even when it's uncomfortable. Especially when it is.</p>
            <p>This is where The Medici Group gets it right: innovation happens when diverse perspectives collide.</p>
            <p>As Frans Johansson puts it in The Medici Effect:</p>
            <p>"When you step into an intersection of fields, disciplines, or cultures, you can combine existing concepts into a large number of extraordinary new ideas."</p>
            <p>In the gym, that might mean lifting with people stronger or different than you. In product, it means bringing in voices from outside your echo chamber — support calls, sales objections, the person who almost churned.</p>
            <p>Reps alone build endurance.</p>
            <p>Smart variation builds power.</p>
            <p>This is how you break through the plateau — not by abandoning the reps, but by evolving them.</p>
          </div>
        );
      case "when-the-spark-fades":
        return (
          <div className="space-y-6">
            <p>The first reps are easy — not physically, but emotionally. You're fired up. Everything's new. Progress is loud and obvious.</p>
            <p>But what happens after the rush?</p>
            <p>In lifting, it's the long middle. The early PRs stop coming. Your form stalls. You show up, grind through the same sets, and wonder if you're actually moving forward. You're not always chasing your one-rep max. And you shouldn't be. Strength isn't built by living at your limit — it's built in the space between peaks, when you train with intention and recover with discipline.</p>
            <p>In product, it's the same. You can't always be doing the flashy, innovative thing. Sometimes the most important work is foundational — fixing backend debt, improving accessibility, tightening up performance. The kind of work that creates capacity for brilliance later.</p>
            <p>And for many, this is where the wheels come off.</p>
            <p>Because motivation — that spark — is unreliable. It's not designed for the long haul. And it doesn't care about your goals.</p>
            <p>That's why systems matter more than sparks.</p>
            <p>Systems are how you keep showing up when the dopamine dies down. Morning routines. Logbooks. Standups. Progress reviews. They don't need to be rigid. But they do need to be real. Reps don't get done by accident.</p>
            <p>You don't need hype — you need structure.</p>
            <p>In training, that structure might be a coach, a program, a calendar alert that says "get under the bar." In product, it might be a rhythm of sprint planning, async demos, or check-ins with customers. Externalized accountability is often the only thing that keeps momentum moving.</p>
            <p>James Clear — author of the bestselling book Atomic Habits, known for his work on behavior change and habit formation — wrote:</p>
            <p>"You do not rise to the level of your goals. You fall to the level of your systems."</p>
            <p>The work still has to be done. But when your environment supports your actions, it gets done more often.</p>
            <p>And here's the quiet truth:</p>
            <p>The people who make the biggest progress aren't usually the most intense — they're the most consistent.</p>
            <p>They build when no one's watching.</p>
            <p>They train when it's not fun.</p>
            <p>They keep caring — even when the spark is gone.</p>
            <p>But what if you need to find the spark again?</p>
            <p>One of the fastest ways to reignite your drive is to reconnect with the people you're building for. Talk to your users — especially the ones who aren't shouting. You might think the work you're doing isn't flashy, but somewhere out there, someone is craving exactly what you're building.</p>
            <p>Stability. Accessibility. Visibility. These aren't buzzwords — they're lifelines for users with real problems. Find them. Listen to them. Let them lift you up.</p>
            <p>Because nothing recharges momentum like hearing someone say: "This made my day better."</p>
            <p>And that brings us to the next section: the power of the quiet reps — the multiplier of boring work.</p>
          </div>
        );
      case "the-multiplier-of-boring-work":
        return (
          <div className="space-y-6">
            <p>There's a kind of work that doesn't make headlines. No one posts their warm-up sets. No one celebrates shaving 100ms off load time.</p>
            <p>But that's the work that wins.</p>
            <p>For every PR pulled in competition, there are hundreds of days of grinding behind it — submaximal sets, long pauses, light reps, mental resets. The same is true in product. Every effortless-looking release rests on a foundation of something much deeper: months of planning, iteration, bug-fixing, and late-night Slack threads.</p>
            <p>In lifting, it's the mobility work you do alone at 6 a.m. The back-off sets you don't skip. The deload week you take seriously. It doesn't look impressive — but it makes everything else possible.</p>
            <p>In product, it's building out role-based access controls — not because it's exciting, but because your biggest customers expect it. It's mapping audit logs across services so your platform isn't a compliance risk anymore. It's the 10th conversation with a user about the same rough edge in the UX. These aren't "big bets," but they're the reason your big bets land.</p>
            <p>That's what boring work does: it compounds.</p>
            <p>Each rep you don't skip, each ticket you don't shortcut, each problem you refine instead of avoid — it stacks. Quietly. Relentlessly. And over time, it becomes your edge.</p>
            <p>You don't need to go viral. You need to be trusted.</p>
            <p>And trust is built in the boring work.</p>
            <p>The warm-up that prevents injury.</p>
            <p>The small fix that prevents churn.</p>
            <p>The five-second improvement that gives a user five minutes back.</p>
            <p>This is what separates the strong from the strong enough.</p>
            <p>It's not what you do once.</p>
            <p>It's what you do without applause.</p>
            <p>You do it for the growth. For the discipline. For the user whose day you quietly made better. Not for the accolades.</p>
            <p>That's what separates long-term success from short-term effort — not glory, but the passion to do the work for its own sake. The features and the gains? They're just symptoms. What matters is the mission that fuels them.</p>
            <p>That's why I'm so passionate about product management — and about lifting. Because the best PMs and the best lifters don't just show up for themselves. They show up for the team, for the user, for their own growth — not in a selfish way, but in a way that elevates everything and everyone around them.</p>
            <p>And if you've made it this far — through the reps, the plateaus, the quiet work — you already know:</p>
            <p>This isn't just about shipping or lifting.</p>
            <p>It's about becoming the kind of person, or the kind of team, that keeps showing up.</p>
            <p>That's the real win. And that's where we end this chapter — not at the peak, but at the foundation.</p>
          </div>
        );
      case "the-work-becomes-the-win":
        return (
          <div className="space-y-6">
            <p>At some point, the reps stop being something you have to do. They just become something you do.</p>
            <p>You stop chasing motivation and start trusting momentum.</p>
            <p>You stop asking when it gets easy and start asking how to keep showing up.</p>
            <p>And that's the shift — not just in the gym or in your sprint board, but in your mindset. You lift because you care. You build because it matters. Because you love it.</p>
            <p>It's not about PRs or product launches. It's about what they represent: The hours you logged. The patterns you learned. The people you helped.</p>
            <p>That's what it means to be mission built.</p>
            <p>You're not doing it for the spotlight.</p>
            <p>You're doing it because you've seen the power of the process — and you're not walking away from it.</p>
            <p>Progress doesn't shout — it stacks.</p>
            <p>One quiet rep at a time.</p>
            
            <p>And if repetition is the foundation, what you build on top of it matters.</p>
            <p>The next chapter explores exactly that: how rituals — not rules — help you grow, adapt, and lead with purpose.</p>
            <p>Up next: Rituals Over Rules.</p>
          </div>
        );
      default:
        return "Content for this section will be added soon.";
    }
  }
  
  if (chapterId === 3) {
    switch (sectionId) {
      case "the-ritual-is-the-rail":
        return (
          <div className="space-y-6">
            <p>Rituals keep us on track — not by forcing us forward, but by guiding our momentum. Like rails under a train, they don't power the engine, but they make sure we're headed in the right direction. They keep drift from becoming derailment.</p>
            
            <p>In the gym, rituals aren't written on the whiteboard, but everyone knows them. The way you chalk your hands before a heavy lift. The nod from your training partner. The slap on the back before a max attempt. These moments don't make you stronger by themselves — but they signal that it's time to lock in. They tune your mind and body to the work ahead.</p>
            
            <p>In product, rituals shape how we build — and why. A startup might begin with a single weekly sync, focused on shipping a differentiated capability that makes a mark on the market. That urgency, that clarity of purpose, fuels early momentum. But as the company grows, the rituals evolve. Roadmap reviews become more structured. Standups get tighter. You start shipping the "boring" features — the ones that don't win awards, but win hearts. Role-based access control. Data retention workflows. RBAC and audit logging won't make the cover of TechCrunch, but they're what your biggest customers need to trust you.</p>
            
            <p>These shifts aren't a loss of agility — they're a deepening of commitment. The rituals grow because the mission does.</p>
            
            <p>The difference between a rule and a ritual is intention. Rules are imposed. Rituals are earned. A rule says "follow this or else." A ritual says "this is how we move with purpose." When teams stop questioning why they follow a process, it calcifies into dogma. But when the process stays tied to the mission, it adapts. It grows. It stays human.</p>
            
            <p>Elite lifters know this instinctively. Even as their programming changes — higher volume, lower intensity, or a shift from competition prep to recovery — their rituals stay intact. The warmup flow, the music choice, the way they approach the bar. These things evolve, but they never disappear. They guide the body into readiness. They keep the lifter connected to something deeper than the day's numbers.</p>
            
            <p>And that's the point.</p>
            
            <p>You don't need more rules. You need rails that carry you toward the mission — and flex with the turns ahead.</p>
            
            <p>Because if the mission is the magnet, the ritual is the rail — not to restrict your path, but to keep you from drifting when the pressure builds.</p>
          </div>
        );
      case "listen-to-your-signals":
        return (
          <div className="space-y-6">
            <p>Rituals only work if you're paying attention.</p>
            
            <p>You can't run the same program forever. Not in the gym. Not in product. Not in life. Progress demands feedback. And feedback starts with listening.</p>
            
            <p>Lifters learn this early. You might show up ready to deadlift heavy — but your grip feels off, your back's tight, your CNS just isn't firing.</p>
            
            <p className="text-muted-foreground italic">(CNS: Central Nervous System — the part of your body responsible for strength output, coordination, and neural drive. If it's fatigued, you'll feel it, even if your muscles are technically rested.)</p>
            
            <p>That's not failure. That's information. A smart lifter doesn't abandon the workout — they adjust. They keep the ritual, shift the intensity. Maybe you pause at 70%, maybe you pivot to accessories. Listening doesn't make you weaker. It keeps you in the game longer.</p>
            
            <p>In product teams, the same truth holds: rituals without awareness become liabilities.</p>
            
            <p>You can run the ceremonies — sprint planning, retros, standups — but if you're ignoring signals from your team or your users, you're performing process theater. Burnout doesn't show up in Jira. Disengagement doesn't flash red in a dashboard. You feel it in the delay before someone unmutes. In the tension after a roadmap shift. In the quiet attrition of both teammates and customers.</p>
            
            <p>Nowhere is this more visible than in the game industry's long-standing reliance on crunch time. Late-stage death marches, where teams work 60-, 70-, 80-hour weeks to hit a ship date. Executives cite passion. Teams call it what it is: avoidable. The rituals of "just one more sprint," of all-hands war rooms, of praise for pulling all-nighters — they're treated as signs of commitment, when they're actually signals of failure.</p>
            
            <p>Failure to listen. To plan. To build sustainable systems.</p>
            <p className="text-muted-foreground italic">Failure to treat the team as human — not just headcount.</p>
            
            <p>This is where product management has a second, often overlooked role.</p>
            
            <p>Yes, product is the voice of the user inside the development team — but product is also the shield of the team against the wrong voices from above. A good PM doesn't just absorb pressure from the top and pass it down. A good PM pushes back. Uses data to say no to date-driven development. Advocates for pacing, not panic. Protects the team's ability to think, breathe, and build well — even when the deadline is loud.</p>
            
            <blockquote className="border-l-4 border-army pl-6 py-4 my-6 bg-slate/5 rounded-r-lg">
              <p className="text-lg font-semibold mb-2">Because our goal isn't to meet an investor's timeline or an executive's forecast.</p>
              
              <p className="text-lg font-semibold">It's to build the best product to solve our user's mission.</p>
            </blockquote>
            
            <p>And the only way to do that — sustainably, meaningfully, and well — is to listen.</p>
            
            <p>To your body.</p>
            <p className="text-muted-foreground italic">To your team.</p>
            <p className="text-muted-foreground italic">To your users.</p>
            <p className="text-muted-foreground italic">To the mission.</p>
          </div>
        );
      case "change-the-pattern-not-the-practice":
        return (
          <div className="space-y-6">
            <p>When things stop working, you don't abandon the ritual — you adapt it.</p>
            
            <p>Progress isn't a straight line. It's a cycle of push, plateau, pivot. And when you hit that plateau — when the usual ritual no longer delivers results — it's not a sign to quit. It's a sign to evolve.</p>
            
            <p>In the gym, this happens all the time. You run a successful squat cycle, adding five pounds a week like clockwork. But then you stall. Your knees cave, your speed slows, and the bar starts winning. The answer isn't to scrap the movement. It's to change the pattern. Maybe you shift to pause squats, change your stance, or drop the volume to focus on recovery. The ritual — showing up and squatting — stays. The shape of it changes.</p>
            
            <p>The same holds true in product.</p>
            
            <p>The standup that once helped your team sync becomes a box-checking chore. The planning meeting that used to set priorities now spirals into status updates. That doesn't mean you stop planning. It means you shift how you plan. You move from live check-ins to async threads. You replace calendar fatigue with focused, flexible rituals that match your team's needs — and their current phase of growth.</p>
            
            <p>Rituals that don't evolve become rules. And rules, as we've seen, break people.</p>
            
            <p>This is especially true in globally distributed teams. At Elastic, our workforce spans time zones and continents. We had to learn — early — that rituals built for co-located teams don't translate. Sync meetings at 10 a.m. in California are 7 p.m. in Berlin, and 2:30 a.m. in Sydney. So we changed the pattern.</p>
            
            <p>We moved toward asynchronous rhythms:</p>
            
            <p>Key decisions live in documents, not meetings.</p>
            
            <p>Slack threads replace sidebars.</p>
            
            <p>Recorded meetings include transcripts and tagged callouts.</p>
            
            <p>Big calls are followed by quiet time — space for global teammates to reflect, respond, and contribute.</p>
            
            <p>We didn't stop collaborating. We just restructured how and when collaboration happens. The ritual of cross-team communication stayed. Its shape changed. And it made space for more voices, not fewer.</p>
            
            <p>What matters isn't how you do it.</p>
            <p className="text-muted-foreground italic">What matters is that you keep showing up with purpose.</p>
            
            <p>The gym teaches you this without words.</p>
            <p className="text-muted-foreground italic">You hit a wall. You adjust. You don't abandon the work — you change the pattern.</p>
            
            <p>Because in the end, progress comes from consistent effort, not perfect conditions.</p>
            
            <p>That's the lesson: rituals serve the mission. When they stop serving, reshape them.</p>
            <p className="text-muted-foreground italic">Don't confuse rigidity for discipline.</p>
            <p className="text-muted-foreground italic">Don't let the form matter more than the function.</p>
            
            <p className="text-muted-foreground italic">(And please — don't treat your favorite product management book like doctrine.</p>
            <p className="text-muted-foreground italic">Those frameworks weren't written for your team. Your mission was.)</p>
            
            <p>Rituals aren't constraints — they're commitments. But only if we let them evolve. The strongest systems, the longest-lasting teams, the most resilient lifters — all share this in common: they don't cling to routine for routine's sake. They adapt. With intention. With feedback. With mission in mind.</p>
            
            <h3 className="text-lg font-semibold mt-8 mb-4">Up Next: Feedback Is a Superpower</h3>
            
            <p>Adaptation only works when you know what to change. And knowing what to change starts with feedback — not just getting it, but learning how to hear it, invite it, and act on it.</p>
            <p className="text-muted-foreground italic">In the next chapter, we'll explore how the best lifters and product leaders make feedback part of their strength — not their insecurity.</p>
          </div>
        );
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
  
  if (chapterId === 3) {
    return [
      { id: "the-ritual-is-the-rail", title: "The Ritual Is the Rail" },
      { id: "listen-to-your-signals", title: "Listen to Your Signals" },
      { id: "change-the-pattern-not-the-practice", title: "Change the Pattern, Not the Practice" }
    ];
  }
  
  return [
    { id: "introduction", title: "Introduction" },
    { id: "main-concept", title: "Main Concept" },
    { id: "practical-application", title: "Practical Application" },
    { id: "conclusion", title: "Conclusion" }
  ];
};

const LogSections: React.FC<LogSectionsProps> = ({ chapter, expandedSection }) => {
  const sections = getSections(chapter.id);
  const [openSections, setOpenSections] = useState<Set<string>>(new Set([sections[0]?.id]));
  
  useEffect(() => {
    if (expandedSection) {
      setOpenSections(prev => new Set([...prev, expandedSection]));
    }
  }, [expandedSection]);
  
  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };
  
  return (
    <div className="space-y-4">
      {sections.map((section, index) => {
        const content = getSectionContent(chapter.id, section.id);
        const readTime = calculateReadTime(content);
        const isOpen = openSections.has(section.id);
        
        return (
          <Collapsible key={section.id} open={isOpen} onOpenChange={() => toggleSection(section.id)}>
            <CollapsibleTrigger 
              id={section.id}
              className="flex items-center justify-between w-full text-left p-4 bg-slate/5 hover:bg-slate/10 rounded-lg border border-slate/10 transition-colors duration-200"
            >
              <div className="flex flex-col items-start">
                <h2 className="text-xl font-semibold text-foreground">
                  {index + 1}. {section.title}
                </h2>
                <span className="text-sm text-muted-foreground mt-1">
                  {readTime} min read
                </span>
              </div>
              <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            
            <CollapsibleContent className="px-4 pb-4">
              <div className="prose prose-slate max-w-none pt-4">
                <div className="text-muted-foreground leading-relaxed">
                  {content}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </div>
  );
};

export default LogSections;
