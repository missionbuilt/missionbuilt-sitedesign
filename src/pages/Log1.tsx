import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChevronLeft, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Log1 = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {/* Back navigation */}
        <div className="mb-6">
          <Link to="/chapters" className="flex items-center text-slate hover:text-army transition-colors dark:text-slate-200 dark:hover:text-army">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span>Back to Training Logs</span>
          </Link>
        </div>
        
        {/* Log header section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate dark:text-slate-100 mb-4">
            Mission Before Metrics
          </h1>
          
          <div className="flex items-center gap-4 text-slate/80 dark:text-slate-300 mb-6">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="/placeholder.svg" alt="Author" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <span className="text-sm">Author Name</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>Published Date</span>
            </div>
            <div className="text-sm px-2 py-1 bg-slate/10 dark:bg-slate/20 rounded-full">Category</div>
          </div>
        </div>
        
        {/* Featured image */}
        <div className="mb-10">
          <Card className="overflow-hidden border-0 shadow-md">
            <AspectRatio ratio={21/9}>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Featured Image"
                className="object-cover w-full h-full" 
              />
            </AspectRatio>
            <CardContent className="p-2 text-center text-xs text-slate/70 dark:text-slate-400">
              Featured image caption
            </CardContent>
          </Card>
        </div>
        
        {/* Table of contents - mobile collapsible, desktop fixed */}
        <div className="lg:flex gap-8 relative">
          {/* Main content area */}
          <div className="lg:w-3/4">
            {/* Summary/Introduction card */}
            <Alert className="mb-8 bg-slate/5 dark:bg-slate/10">
              <AlertDescription className="text-base italic">
                This is where a brief summary or introduction would go.
              </AlertDescription>
            </Alert>
            
            {/* Content sections */}
            <div className="prose dark:prose-invert max-w-none">
              {/* Section 1 */}
              <div className="mb-10">
                <h2 id="section-1" className="text-2xl md:text-3xl font-display font-semibold text-slate dark:text-slate-100 mb-6">
                  The Mission Is the Magnet
                </h2>
                
                <div className="space-y-4">
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    Before I ever built products, I served in the U.S. Army as an Airborne intelligence sergeant. That experience — of working in service of something larger than myself, of making decisions under pressure with lives on the line — shaped everything that came after. I learned early that mission comes first. Not ego. Not recognition. Mission.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    That mindset followed me from the military to cybersecurity, and into leadership roles where the stakes changed but the values stayed the same. Whether it was securing critical systems, helping build Elastic Security, or coaching in the gym, the goal has always been the same: real strength is lifting others.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    One of the proudest chapters of my product career was building Endgame. We entered a brutally competitive market — going head-to-head with massive players like McAfee and CrowdStrike — and carved out real ground. Not because we had more money or brand recognition, but because we had something harder to copy: a clear mission. Protect high-value targets from nation-state level attacks. That focus, and the small, fierce team who rallied behind it, made all the difference.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    At the heart of it was Nate Fick, a Marine officer turned tech CEO, and later the U.S. Ambassador for Cyberspace and Digital Policy. He led with conviction, clarity, and a deep respect for the mission. In all-hands meetings, Nate would remind us that we were an "elevator asset company" — that if the building burned down, the most important assets could still fit in the elevator. It wasn't the code or the tools. It was the people — the ones who understood the user's mission and had the passion to serve it.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    That idea stuck with me. Nate's example reinforced what I learned in uniform: The success is the user's success. Your mission is their mission.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    Metrics are the outcome of making your user successful. Yes, we need to measure them. But they are the result of serving the mission — not the reason for it.
                  </p>

                  <div className="my-8 border-l-4 border-army pl-4 py-2 bg-slate/5 dark:bg-slate/10">
                    <p className="text-slate dark:text-slate-200 leading-relaxed italic">
                      There's a moment in every product meeting when the question slides in like it always does:
                      <br/>"How will we measure success?"
                      <br/>It's a good question — just not always a good first question.
                    </p>
                  </div>

                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    In lifting, it's the same story. People chase PRs every week like the number on the barbell is the whole point. Add five pounds. Hit record. Post the clip. Repeat.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    But metrics without mission? That's just noise. Pressure with no direction. Goals with no guts.
                  </p>

                  <div className="my-6 text-center">
                    <p className="text-lg font-semibold text-army dark:text-army italic">
                      "The weight on the bar isn't the goal — it's the evidence of progress, not the destination."
                    </p>
                  </div>

                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    We've all seen what happens when this mindset takes over. It's not a failure of talent — it's a failure of alignment. Cyberpunk 2077 didn't initially flop because the devs didn't care — far from it. The development team poured years into building something ambitious. But the pressure to hit a holiday launch window — a decision made at the executive level — overrode the mission of delivering a complete, polished experience. The result was a rocky release, millions in refunds, a reputational hit, and a stock crash.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    To their credit, the team stuck with it. Years later, after patches and a reimagined DLC, the game has earned back much of the trust it lost — a testament to what happens when talented people are finally given the space to do the work right.
                  </p>
                  
                  <p className="text-xs text-slate/70 dark:text-slate-400 italic">
                    Source: CD Projekt's stock plunges amid Cyberpunk 2077 launch issues — Bloomberg, Dec 2020
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed mt-4">
                    And we've seen what it looks like to protect the mission — even when it means stepping back. Simone Biles did exactly that in front of the entire world at the 2021 Olympics. Under unimaginable pressure, she chose long-term purpose over short-term performance. She knew something was off, and she honored that instinct.
                  </p>

                  <div className="my-6 bg-slate/5 dark:bg-slate/10 p-4 rounded-md">
                    <p className="text-slate dark:text-slate-200 leading-relaxed italic">
                      "I have to focus on my mental health… if you don't, then you're not going to enjoy your score and you're not gonna succeed as much as you want to."
                    </p>
                    <p className="text-xs text-slate/70 dark:text-slate-400 mt-2">
                      Source: Simone Biles on Mental Health — People Magazine, July 2021
                    </p>
                  </div>

                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    Her move wasn't retreat — it was leadership. And in time, she returned to competition stronger, on her terms, and more respected than ever. A different kind of comeback — one powered by mission, not metrics.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed font-semibold">
                    Success isn't about hitting every metric. It's about refusing to lose yourself trying.
                  </p>

                  <h3 className="text-xl md:text-2xl font-display font-semibold text-slate dark:text-slate-100 mt-10 mb-4">
                    More Than Just Good Intentions
                  </h3>

                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    Mission-driven isn't a poster in the break room or a bullet in a pitch deck. It's how you move — how you decide, how you show up when it's hard.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    In a world that celebrates velocity, mission is quiet. But that doesn't make it weak. Mission gives you clarity when things get blurry and stamina when things get hard.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    Take Patagonia. They once ran a campaign telling customers not to buy their jacket unless they truly needed it. Why? Because their values mattered more than their quarterly revenue.
                  </p>
                  
                  <p className="text-xs text-slate/70 dark:text-slate-400 italic">
                    Source: Don't Buy This Jacket — Patagonia, 2011<br/>
                    Analysis: Harvard Business Review, 2016
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed mt-4">
                    Or SpaceX — aiming at goals that span decades, not quarters. It's not about idolizing companies. It's about recognizing what real mission-alignment looks like when the stakes are high and the timelines are long.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    And it pays off. Research shows that people who believe in the purpose behind their work stay longer, burn out less, and deliver more.
                  </p>
                  
                  <p className="text-xs text-slate/70 dark:text-slate-400 italic">
                    Source: Imperative & NYU Study on Purpose-Driven Work, 2016<br/>
                    Source: McKinsey & Co., 2020 — Purpose: Shifting from Why to How
                  </p>

                  <h3 className="text-xl md:text-2xl font-display font-semibold text-slate dark:text-slate-100 mt-10 mb-4">
                    When Metrics Eclipse Meaning
                  </h3>

                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    Let's be clear: metrics matter. But only when they serve the mission — not when they become it.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    Here's where teams lose the plot:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-slate dark:text-slate-200">
                    <li>They ship fast instead of shipping right.</li>
                    <li>They chase signups instead of learning why users leave.</li>
                    <li>They brag about launches and ignore long-term usage.</li>
                  </ul>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed mt-4">
                    When dates drive development, teams start cutting corners. Feedback loops close. Energy fades. You build momentum toward a number — not toward value.
                  </p>
                  
                  <p className="text-xs text-slate/70 dark:text-slate-400 italic">
                    Source: Date-Driven Development is Killing Your Product — Built to Adapt, 2021
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed mt-4">
                    In the gym, this is ego lifting. In product, it's just as risky. It looks like burned-out engineers, brittle systems, and growth that collapses the second you stop pushing it uphill.
                  </p>

                  <h3 className="text-xl md:text-2xl font-display font-semibold text-slate dark:text-slate-100 mt-10 mb-4">
                    The Fulfillment Flywheel (Powered by Purpose)
                  </h3>

                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    There's a better model. One that's as relevant in combat as it is in code — or in the squat rack.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    It's called the OODA Loop: Observe, Orient, Decide, Act. Developed for fighter pilots. Adopted by startups. Powered by clarity.
                  </p>
                  
                  <p className="text-xs text-slate/70 dark:text-slate-400 italic">
                    Source: John Boyd — The Essence of Winning and Losing, 1995 (PDF)
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed mt-4">
                    But here's the catch — without a clear mission, the whole loop spins out.
                  </p>
                  
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-slate/20 dark:divide-slate/10 border border-slate/20 dark:border-slate/10">
                      <thead>
                        <tr className="bg-slate/5 dark:bg-slate/10">
                          <th className="px-4 py-3 text-left text-sm font-medium text-slate dark:text-slate-200">OODA Stage</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-slate dark:text-slate-200">With Mission-Driven Focus</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-slate dark:text-slate-200">Without It</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate/10 dark:divide-slate/20">
                        <tr>
                          <td className="px-4 py-3 text-sm text-slate dark:text-slate-300 font-medium">Observe</td>
                          <td className="px-4 py-3 text-sm text-slate dark:text-slate-300">You know what matters to watch</td>
                          <td className="px-4 py-3 text-sm text-slate dark:text-slate-300">You collect everything, drowning in noise</td>
                        </tr>
                        <tr className="bg-slate/5 dark:bg-slate/5">
                          <td className="px-4 py-3 text-sm text-slate dark:text-slate-300 font-medium">Orient</td>
                          <td className="px-4 py-3 text-sm text-slate dark:text-slate-300">Purpose helps filter & frame inputs</td>
                          <td className="px-4 py-3 text-sm text-slate dark:text-slate-300">Metrics get over-prioritized, lose big picture</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-slate dark:text-slate-300 font-medium">Decide</td>
                          <td className="px-4 py-3 text-sm text-slate dark:text-slate-300">Mission becomes a north star for action</td>
                          <td className="px-4 py-3 text-sm text-slate dark:text-slate-300">Risk of chasing vanity wins or short-term gains</td>
                        </tr>
                        <tr className="bg-slate/5 dark:bg-slate/5">
                          <td className="px-4 py-3 text-sm text-slate dark:text-slate-300 font-medium">Act</td>
                          <td className="px-4 py-3 text-sm text-slate dark:text-slate-300">Execution has energy and resolve</td>
                          <td className="px-4 py-3 text-sm text-slate dark:text-slate-300">Actions may be misaligned or half-hearted</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    In lifting, it's trusting the plan instead of maxing out because you feel good that day. In product, it's waiting to ship because your users aren't ready — even if your OKRs are.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    Mission turns chaos into clarity. It makes every rep count. Every release matter. Every decision directional.
                  </p>

                  <div className="my-8 p-5 bg-slate/5 dark:bg-slate/10 rounded-lg border-l-4 border-army">
                    <p className="text-slate dark:text-slate-200 leading-relaxed">
                      This is the real flywheel of fulfillment:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate dark:text-slate-200 mt-2">
                      <li>Mission fuels clarity.</li>
                      <li>Clarity powers resilience.</li>
                      <li>Resilience drives real progress.</li>
                      <li>And real progress reinforces the mission.</li>
                    </ul>
                    <p className="text-slate dark:text-slate-200 leading-relaxed mt-2">
                      That's the throughline. That's what keeps us going.
                    </p>
                  </div>

                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    Metrics follow. But the mission leads.
                  </p>
                </div>
              </div>
              
              {/* Section 2 */}
              <div className="mb-10">
                <h2 id="section-2" className="text-2xl md:text-3xl font-display font-semibold text-slate dark:text-slate-100 mb-6">
                  The Drift
                </h2>
                
                <div className="space-y-4">
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    At first, the metric is a mirror — it reflects the mission. Clean, focused, and true.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    But over time, something shifts. Quietly. Gradually. The mirror warps. And without noticing, we begin steering toward the reflection instead of the road.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed font-semibold">
                    This is the Drift.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    It doesn't announce itself. It rarely arrives with bad intent. It begins with a goal:
                  </p>
                  
                  <div className="my-6 space-y-2">
                    <p className="text-slate dark:text-slate-200 leading-relaxed pl-4 border-l-2 border-army">
                      Launch the feature by Q4.
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 leading-relaxed pl-4 border-l-2 border-army">
                      Hit 405 on deadlift.
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 leading-relaxed pl-4 border-l-2 border-army">
                      Increase MAUs by 20%.
                    </p>
                  </div>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    Reasonable. Measurable. Actionable. These are the numbers we hold up as evidence that we're making progress — and for a while, they are.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed font-semibold">
                    But then: the goal becomes the game.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    In product, we've seen it time and time again. Shipping becomes more important than solving. Teams crunch to meet a date set quarters ago, long after the user problem has evolved. Metrics chase headlines. Investors want news. Executives want motion. The dashboard glows green while user trust fades red.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    Think of Boeing. In the race to beat Airbus, they needed the 737 Max on runways — fast. Shareholder pressure mounted. Deadlines became immovable. On paper, the metrics looked great: deliveries met, costs controlled. But beneath the numbers, safety systems were skipped, warnings dismissed.
                  </p>
                  
                  <div className="my-6 bg-slate/5 dark:bg-slate/10 p-4 rounded-md">
                    <p className="text-slate dark:text-slate-200 leading-relaxed">
                      Two crashes. Hundreds of lives lost. The drift wasn't just technical — it was cultural. Speed overtook scrutiny. The metric overtook the mission.
                    </p>
                  </div>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    In strength, the signs are physical — and brutal. Hafthor Björnsson, one of the strongest men in history, returned to powerlifting after two years of boxing. He set his sights on breaking the raw total world record. Big lifts were stacking fast. But recovery lagged behind. He felt the warning signs — tightness, fatigue — but kept pushing.
                  </p>
                  
                  <div className="my-4 text-center">
                    <p className="text-slate dark:text-slate-300 italic">
                      "I wasn't recovering fully between sessions… not listening to my body, which is silly."
                    </p>
                  </div>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    Then came the snap. Attempting a 556-pound bench press, his pec tore clean off the bone.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    The drift had found him too: progress misaligned with process, recovery sacrificed to reach a number that no longer serves the mission. The result was pain, delay, and a lesson carved in scar tissue.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    The damage isn't just physical. It's psychological. Because when we treat metrics as the mission, missing them feels like failure. And so we hide the truth, inflate success, or worst of all — stop trying.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    The Drift corrodes not through force, but through inversion. It flips process into performance. It turns care into compliance.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed font-semibold">
                    And it burns people out.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    I've worked with brilliant people who could have built anything — but they left, not because they failed, but because the system stopped valuing why they showed up in the first place. When we reduce contribution to a dashboard, we forget the soul behind the keyboard.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    This isn't just anecdotal. Research shows that mission-driven employees are significantly more loyal.
                  </p>
                  
                  <div className="my-4 space-y-2">
                    <p className="text-slate dark:text-slate-200 leading-relaxed pl-4 border-l-2 border-slate/20 dark:border-slate/30">
                      A LinkedIn survey found that employees motivated by mission were 54% more likely to stay with their company for five or more years.
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 leading-relaxed pl-4 border-l-2 border-slate/20 dark:border-slate/30">
                      Another study revealed that companies engaging employees in purpose-driven programs saw a 52% lower turnover among newer employees.
                    </p>
                  </div>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    So what's the antidote?
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 leading-relaxed">
                    It's not to ignore metrics. It's to anchor them. To use them as signal, not steering.
                  </p>
                  
                  <div className="my-6 p-5 bg-slate/5 dark:bg-slate/10 rounded-lg border-l-4 border-army">
                    <p className="text-slate dark:text-slate-200 leading-relaxed">
                      To build systems that reinforce why we do the work, not just how fast we do it.
                    </p>
                    <p className="text-slate dark:text-slate-200 leading-relaxed mt-2">
                      Because the real goal is not a launch date or a deadlift.
                    </p>
                    <p className="text-slate dark:text-slate-200 leading-relaxed font-semibold mt-2">
                      The real goal is built through the reps, not measured by them.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Section 3 placeholder */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-slate dark:text-slate-100 mb-4">
                  Section 3
                </h2>
                <div className="h-40 bg-slate/5 dark:bg-slate/10 rounded-lg flex items-center justify-center">
                  <p className="text-slate/50 dark:text-slate-400">Content for section 3</p>
                </div>
              </div>
            </div>
            
            {/* Next/Previous navigation */}
            <div className="mt-16 pt-8 border-t border-slate/10 dark:border-slate/20 flex justify-between">
              <div>
                {/* This would be the previous log link if available */}
              </div>
              <div>
                <Link 
                  to="/chapters"
                  className="btn-army inline-flex"
                >
                  All Training Logs
                </Link>
              </div>
              <div>
                {/* This would be the next log link if available */}
              </div>
            </div>
          </div>
          
          {/* Sidebar - TOC, related posts, etc. */}
          <div className="hidden lg:block lg:w-1/4 sticky top-24 self-start">
            <Card className="p-4">
              <h3 className="font-display font-semibold mb-4 text-lg text-slate dark:text-slate-100">
                <BookOpen className="h-4 w-4 inline-block mr-2" />
                Table of Contents
              </h3>
              <ul className="space-y-2 text-slate/80 dark:text-slate-300">
                <li>
                  <a href="#section-1" className="hover:text-army transition-colors">The Mission Is the Magnet</a>
                  <ul className="pl-4 mt-2 space-y-1 text-sm">
                    <li>
                      <a href="#" className="hover:text-army transition-colors">More Than Just Good Intentions</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-army transition-colors">When Metrics Eclipse Meaning</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-army transition-colors">The Fulfillment Flywheel</a>
                    </li>
                  </ul>
                </li>
                <li className="pt-1">
                  <a href="#section-2" className="hover:text-army transition-colors">The Drift</a>
                </li>
                <li>
                  <a href="#" className="hover:text-army transition-colors">Section 3</a>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Log1;
