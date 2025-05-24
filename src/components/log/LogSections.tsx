import React from "react";
import { Chapter } from "@/data/chapters-data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface LogSectionsProps {
  chapter: Chapter;
}

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
      { id: "practical-application", title: "Practical Application" },
      { id: "conclusion", title: "Conclusion" }
    ];
  }
  
  return [
    { id: "introduction", title: "Introduction" },
    { id: "main-concept", title: "Main Concept" },
    { id: "practical-application", title: "Practical Application" },
    { id: "conclusion", title: "Conclusion" }
  ];
};

const LogSections: React.FC<LogSectionsProps> = ({ chapter }) => {
  const sections = getSections(chapter.id);
  
  return (
    <div className="space-y-4">
      {sections.map((section, index) => (
        <Collapsible key={section.id} defaultOpen={index === 0}>
          <CollapsibleTrigger 
            id={section.id}
            className="flex items-center justify-between w-full text-left p-4 bg-slate/5 hover:bg-slate/10 rounded-lg border border-slate/10 transition-colors duration-200"
          >
            <h2 className="text-xl font-semibold text-slate">
              {index + 1}. {section.title}
            </h2>
            <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          
          <CollapsibleContent className="px-4 pb-4">
            <div className="prose prose-slate max-w-none">
              <div className="text-muted-foreground leading-relaxed">
                {getSectionContent(chapter.id, section.id)}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default LogSections;
