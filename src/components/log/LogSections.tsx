
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
      case "building-foundation":
        return "Here we discuss the importance of building a solid foundation...";
      case "leading-by-example":
        return "Leadership starts with personal example and commitment...";
      case "key-takeaways":
        return "The key insights from this chapter include...";
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
      { id: "building-foundation", title: "Building the Foundation" },
      { id: "leading-by-example", title: "Leading by Example" },
      { id: "key-takeaways", title: "Key Takeaways" }
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
