
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChevronLeft, BookOpen, Clock, Link as LinkIcon } from "lucide-react";
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
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        {/* Back navigation */}
        <div className="mb-8">
          <Link to="/chapters" className="flex items-center text-slate hover:text-army transition-colors dark:text-slate-200 dark:hover:text-army">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span>Back to Training Logs</span>
          </Link>
        </div>
        
        {/* Log header section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate dark:text-slate-100 mb-6 leading-tight">
            Mission Before Metrics
          </h1>
          
          <div className="flex items-center gap-6 text-slate/80 dark:text-slate-300 mb-8">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src="/lovable-uploads/777697e9-e718-4177-9c47-cb5be778fdd3.png" alt="Mike" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <span className="text-base font-medium">Mike</span>
            </div>
            <div className="flex items-center text-base">
              <Clock className="h-4 w-4 mr-2" />
              <span>Published Date</span>
            </div>
          </div>
        </div>
        
        {/* Featured image */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-lg">
            <AspectRatio ratio={21/9}>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Featured Image"
                className="object-cover w-full h-full" 
              />
            </AspectRatio>
            <CardContent className="p-3 text-center text-sm text-slate/70 dark:text-slate-400">
              Featured image caption
            </CardContent>
          </Card>
        </div>
        
        {/* Table of contents - mobile collapsible, desktop fixed */}
        <div className="lg:flex gap-12 relative">
          {/* Main content area */}
          <div className="lg:w-3/4">
            {/* Summary/Introduction card */}
            <Alert className="mb-12 bg-gradient-to-r from-slate/5 to-slate/10 dark:from-slate/10 dark:to-slate/20 border-l-4 border-army">
              <AlertDescription className="text-lg italic leading-relaxed">
                This is where a brief summary or introduction would go.
              </AlertDescription>
            </Alert>
            
            {/* Content sections */}
            <div className="prose dark:prose-invert max-w-none">
              {/* Section 1 */}
              <div className="mb-16">
                <h2 id="section-1" className="text-3xl md:text-4xl font-display font-semibold text-slate dark:text-slate-100 mb-8 scroll-mt-24">
                  The Mission Is the Magnet
                </h2>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-slate dark:text-slate-200">
                    Before I ever built products, I served in the U.S. Army as an Airborne intelligence sergeant. That experience — of working in service of something larger than myself, of making decisions under pressure with lives on the line — shaped everything that came after. I learned early that mission comes first. Not ego. Not recognition. Mission.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    That mindset followed me from the military to cybersecurity, and into leadership roles where the stakes changed but the values stayed the same. Whether it was securing critical systems, helping build Elastic Security, or coaching in the gym, the goal has always been the same: real strength is lifting others.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    One of the proudest chapters of my product career was building Endgame. We entered a brutally competitive market — going head-to-head with massive players like McAfee and CrowdStrike — and carved out real ground. Not because we had more money or brand recognition, but because we had something harder to copy: a clear mission. Protect high-value targets from nation-state level attacks. That focus, and the small, fierce team who rallied behind it, made all the difference.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    At the heart of it was Nate Fick, a Marine officer turned tech CEO, and later the U.S. Ambassador for Cyberspace and Digital Policy. He led with conviction, clarity, and a deep respect for the mission. In all-hands meetings, Nate would remind us that we were an "elevator asset company" — that if the building burned down, the most important assets could still fit in the elevator. It wasn't the code or the tools. It was the people — the ones who understood the user's mission and had the passion to serve it.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    That idea stuck with me. Nate's example reinforced what I learned in uniform: The success is the user's success. Your mission is their mission.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    Metrics are the outcome of making your user successful. Yes, we need to measure them. But they are the result of serving the mission — not the reason for it.
                  </p>

                  <div className="my-10 p-6 bg-gradient-to-r from-slate/5 to-slate/10 dark:from-slate/10 dark:to-slate/20 rounded-xl border-l-4 border-army">
                    <p className="text-slate dark:text-slate-200 text-xl leading-relaxed italic">
                      There's a moment in every product meeting when the question slides in like it always does:
                      <br/>"How will we measure success?"
                      <br/>It's a good question — just not always a good first question.
                    </p>
                  </div>

                  <p className="text-slate dark:text-slate-200">
                    In lifting, it's the same story. People chase PRs every week like the number on the barbell is the whole point. Add five pounds. Hit record. Post the clip. Repeat.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    But metrics without mission? That's just noise. Pressure with no direction. Goals with no guts.
                  </p>

                  <div className="my-8 text-center py-6">
                    <p className="text-2xl font-semibold text-army dark:text-army italic">
                      "The weight on the bar isn't the goal — it's the evidence of progress, not the destination."
                    </p>
                  </div>

                  <p className="text-slate dark:text-slate-200">
                    We've all seen what happens when this mindset takes over. It's not a failure of talent — it's a failure of alignment. Cyberpunk 2077 didn't initially flop because the devs didn't care — far from it. The development team poured years into building something ambitious. But the pressure to hit a holiday launch window — a decision made at the executive level — overrode the mission of delivering a complete, polished experience. The result was a rocky release, millions in refunds, a reputational hit, and a stock crash.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    To their credit, the team stuck with it. Years later, after patches and a reimagined DLC, the game has earned back much of the trust it lost — a testament to what happens when talented people are finally given the space to do the work right.
                  </p>
                  
                  <p className="text-sm text-slate/70 dark:text-slate-400 italic mb-6">
                    Source: CD Projekt's stock plunges amid Cyberpunk 2077 launch issues — Bloomberg, Dec 2020
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    And we've seen what it looks like to protect the mission — even when it means stepping back. Simone Biles did exactly that in front of the entire world at the 2021 Olympics. Under unimaginable pressure, she chose long-term purpose over short-term performance. She knew something was off, and she honored that instinct.
                  </p>

                  <div className="my-8 p-6 bg-gradient-to-r from-slate/5 to-slate/10 dark:from-slate/10 dark:to-slate/20 rounded-xl">
                    <p className="text-slate dark:text-slate-200 text-xl leading-relaxed italic">
                      "I have to focus on my mental health… if you don't, then you're not going to enjoy your score and you're not gonna succeed as much as you want to."
                    </p>
                    <p className="text-sm text-slate/70 dark:text-slate-400 mt-3">
                      Source: Simone Biles on Mental Health — People Magazine, July 2021
                    </p>
                  </div>

                  <p className="text-slate dark:text-slate-200">
                    Her move wasn't retreat — it was leadership. And in time, she returned to competition stronger, on her terms, and more respected than ever. A different kind of comeback — one powered by mission, not metrics.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 font-semibold text-xl">
                    Success isn't about hitting every metric. It's about refusing to lose yourself trying.
                  </p>

                  <div className="mt-12 mb-8">
                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-slate dark:text-slate-100 mb-6">
                      More Than Just Good Intentions
                    </h3>

                    <div className="space-y-6">
                      <p className="text-slate dark:text-slate-200">
                        Mission-driven isn't a poster in the break room or a bullet in a pitch deck. It's how you move — how you decide, how you show up when it's hard.
                      </p>
                      
                      <p className="text-slate dark:text-slate-200">
                        In a world that celebrates velocity, mission is quiet. But that doesn't make it weak. Mission gives you clarity when things get blurry and stamina when things get hard.
                      </p>
                      
                      <p className="text-slate dark:text-slate-200">
                        Take Patagonia. They once ran a campaign telling customers not to buy their jacket unless they truly needed it. Why? Because their values mattered more than their quarterly revenue.
                      </p>
                      
                      <p className="text-sm text-slate/70 dark:text-slate-400 italic">
                        Source: Don't Buy This Jacket — Patagonia, 2011<br/>
                        Analysis: Harvard Business Review, 2016
                      </p>
                      
                      <p className="text-slate dark:text-slate-200">
                        Or SpaceX — aiming at goals that span decades, not quarters. It's not about idolizing companies. It's about recognizing what real mission-alignment looks like when the stakes are high and the timelines are long.
                      </p>
                      
                      <p className="text-slate dark:text-slate-200">
                        And it pays off. Research shows that people who believe in the purpose behind their work stay longer, burn out less, and deliver more.
                      </p>
                      
                      <p className="text-sm text-slate/70 dark:text-slate-400 italic">
                        Source: Imperative & NYU Study on Purpose-Driven Work, 2016<br/>
                        Source: McKinsey & Co., 2020 — Purpose: Shifting from Why to How
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 mb-8">
                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-slate dark:text-slate-100 mb-6">
                      When Metrics Eclipse Meaning
                    </h3>

                    <div className="space-y-6">
                      <p className="text-slate dark:text-slate-200">
                        Let's be clear: metrics matter. But only when they serve the mission — not when they become it.
                      </p>
                      
                      <p className="text-slate dark:text-slate-200">
                        Here's where teams lose the plot:
                      </p>
                      
                      <ul className="list-disc pl-6 space-y-3 text-slate dark:text-slate-200 my-6">
                        <li>They ship fast instead of shipping right.</li>
                        <li>They chase signups instead of learning why users leave.</li>
                        <li>They brag about launches and ignore long-term usage.</li>
                      </ul>
                      
                      <p className="text-slate dark:text-slate-200">
                        When dates drive development, teams start cutting corners. Feedback loops close. Energy fades. You build momentum toward a number — not toward value.
                      </p>
                      
                      <p className="text-sm text-slate/70 dark:text-slate-400 italic">
                        Source: Date-Driven Development is Killing Your Product — Built to Adapt, 2021
                      </p>
                      
                      <p className="text-slate dark:text-slate-200">
                        In the gym, this is ego lifting. In product, it's just as risky. It looks like burned-out engineers, brittle systems, and growth that collapses the second you stop pushing it uphill.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 mb-8">
                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-slate dark:text-slate-100 mb-6">
                      The Fulfillment Flywheel (Powered by Purpose)
                    </h3>

                    <div className="space-y-6">
                      <p className="text-slate dark:text-slate-200">
                        There's a better model. One that's as relevant in combat as it is in code — or in the squat rack.
                      </p>
                      
                      <p className="text-slate dark:text-slate-200">
                        It's called the OODA Loop: Observe, Orient, Decide, Act. Developed for fighter pilots. Adopted by startups. Powered by clarity.
                      </p>
                      
                      <p className="text-sm text-slate/70 dark:text-slate-400 italic">
                        Source: John Boyd — The Essence of Winning and Losing, 1995 (PDF)
                      </p>
                      
                      <p className="text-slate dark:text-slate-200">
                        But here's the catch — without a clear mission, the whole loop spins out.
                      </p>
                      
                      <div className="my-8 overflow-hidden rounded-xl border border-slate/20 dark:border-slate/30 shadow-lg">
                        <table className="min-w-full bg-white dark:bg-slate-900">
                          <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate/20 dark:border-slate/30">
                              <th className="px-6 py-4 text-left text-sm font-semibold text-slate dark:text-slate-200">OODA Stage</th>
                              <th className="px-6 py-4 text-left text-sm font-semibold text-slate dark:text-slate-200">With Mission-Driven Focus</th>
                              <th className="px-6 py-4 text-left text-sm font-semibold text-slate dark:text-slate-200">Without It</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate/10 dark:divide-slate/30">
                            <tr className="hover:bg-slate/5 dark:hover:bg-slate/10 transition-colors">
                              <td className="px-6 py-4 text-sm text-slate dark:text-slate-300 font-medium">Observe</td>
                              <td className="px-6 py-4 text-sm text-slate dark:text-slate-300">You know what matters to watch</td>
                              <td className="px-6 py-4 text-sm text-slate dark:text-slate-300">You collect everything, drowning in noise</td>
                            </tr>
                            <tr className="hover:bg-slate/5 dark:hover:bg-slate/10 transition-colors">
                              <td className="px-6 py-4 text-sm text-slate dark:text-slate-300 font-medium">Orient</td>
                              <td className="px-6 py-4 text-sm text-slate dark:text-slate-300">Purpose helps filter & frame inputs</td>
                              <td className="px-6 py-4 text-sm text-slate dark:text-slate-300">Metrics get over-prioritized, lose big picture</td>
                            </tr>
                            <tr className="hover:bg-slate/5 dark:hover:bg-slate/10 transition-colors">
                              <td className="px-6 py-4 text-sm text-slate dark:text-slate-300 font-medium">Decide</td>
                              <td className="px-6 py-4 text-sm text-slate dark:text-slate-300">Mission becomes a north star for action</td>
                              <td className="px-6 py-4 text-sm text-slate dark:text-slate-300">Risk of chasing vanity wins or short-term gains</td>
                            </tr>
                            <tr className="hover:bg-slate/5 dark:hover:bg-slate/10 transition-colors">
                              <td className="px-6 py-4 text-sm text-slate dark:text-slate-300 font-medium">Act</td>
                              <td className="px-6 py-4 text-sm text-slate dark:text-slate-300">Execution has energy and resolve</td>
                              <td className="px-6 py-4 text-sm text-slate dark:text-slate-300">Actions may be misaligned or half-hearted</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="text-slate dark:text-slate-200">
                        In lifting, it's trusting the plan instead of maxing out because you feel good that day. In product, it's waiting to ship because your users aren't ready — even if your OKRs are.
                      </p>
                      
                      <p className="text-slate dark:text-slate-200">
                        Mission turns chaos into clarity. It makes every rep count. Every release matter. Every decision directional.
                      </p>

                      <div className="my-10 p-6 bg-gradient-to-r from-army/5 to-army/10 dark:from-army/10 dark:to-army/20 rounded-xl border-l-4 border-army">
                        <p className="text-slate dark:text-slate-200 text-lg leading-relaxed mb-4">
                          This is the real flywheel of fulfillment:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-slate dark:text-slate-200">
                          <li>Mission fuels clarity.</li>
                          <li>Clarity powers resilience.</li>
                          <li>Resilience drives real progress.</li>
                          <li>And real progress reinforces the mission.</li>
                        </ul>
                        <p className="text-slate dark:text-slate-200 leading-relaxed mt-4">
                          That's the throughline. That's what keeps us going.
                        </p>
                      </div>

                      <p className="text-slate dark:text-slate-200 text-xl font-medium">
                        Metrics follow. But the mission leads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Section 2 */}
              <div className="mb-16">
                <h2 id="section-2" className="text-3xl md:text-4xl font-display font-semibold text-slate dark:text-slate-100 mb-8 scroll-mt-24">
                  The Drift
                </h2>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-slate dark:text-slate-200">
                    At first, the metric is a mirror — it reflects the mission. Clean, focused, and true.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    But over time, something shifts. Quietly. Gradually. The mirror warps. And without noticing, we begin steering toward the reflection instead of the road.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 font-semibold text-xl">
                    This is the Drift.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    It doesn't announce itself. It rarely arrives with bad intent. It begins with a goal:
                  </p>
                  
                  <div className="my-8 space-y-4">
                    <p className="text-slate dark:text-slate-200 text-xl pl-6 border-l-4 border-army">
                      Launch the feature by Q4.
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 text-xl pl-6 border-l-4 border-army">
                      Hit 405 on deadlift.
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 text-xl pl-6 border-l-4 border-army">
                      Increase MAUs by 20%.
                    </p>
                  </div>
                  
                  <p className="text-slate dark:text-slate-200">
                    Reasonable. Measurable. Actionable. These are the numbers we hold up as evidence that we're making progress — and for a while, they are.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 font-semibold text-xl">
                    But then: the goal becomes the game.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    In product, we've seen it time and time again. Shipping becomes more important than solving. Teams crunch to meet a date set quarters ago, long after the user problem has evolved. Metrics chase headlines. Investors want news. Executives want motion. The dashboard glows green while user trust fades red.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    Think of Boeing. In the race to beat Airbus, they needed the 737 Max on runways — fast. Shareholder pressure mounted. Deadlines became immovable. On paper, the metrics looked great: deliveries met, costs controlled. But beneath the numbers, safety systems were skipped, warnings dismissed.
                  </p>
                  
                  <div className="my-8 p-6 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl border-l-4 border-red-500">
                    <p className="text-slate dark:text-slate-200 text-lg leading-relaxed">
                      Two crashes. Hundreds of lives lost. The drift wasn't just technical — it was cultural. Speed overtook scrutiny. The metric overtook the mission.
                    </p>
                  </div>
                  
                  <p className="text-slate dark:text-slate-200">
                    In strength, the signs are physical — and brutal. Hafthor Björnsson, one of the strongest men in history, returned to powerlifting after two years of boxing. He set his sights on breaking the raw total world record. Big lifts were stacking fast. But recovery lagged behind. He felt the warning signs — tightness, fatigue — but kept pushing.
                  </p>
                  
                  <div className="my-6 text-center py-4">
                    <p className="text-slate dark:text-slate-300 text-xl italic">
                      "I wasn't recovering fully between sessions… not listening to my body, which is silly."
                    </p>
                  </div>
                  
                  <p className="text-slate dark:text-slate-200">
                    Then came the snap. Attempting a 556-pound bench press, his pec tore clean off the bone.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    The drift had found him too: progress misaligned with process, recovery sacrificed to reach a number that no longer serves the mission. The result was pain, delay, and a lesson carved in scar tissue.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    The damage isn't just physical. It's psychological. Because when we treat metrics as the mission, missing them feels like failure. And so we hide the truth, inflate success, or worst of all — stop trying.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    The Drift corrodes not through force, but through inversion. It flips process into performance. It turns care into compliance.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 font-semibold text-xl">
                    And it burns people out.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    I've worked with brilliant people who could have built anything — but they left, not because they failed, but because the system stopped valuing why they showed up in the first place. When we reduce contribution to a dashboard, we forget the soul behind the keyboard.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    This isn't just anecdotal. Research shows that mission-driven employees are significantly more loyal.
                  </p>
                  
                  <div className="my-8 space-y-4">
                    <p className="text-slate dark:text-slate-200 text-lg pl-6 border-l-2 border-slate/30 dark:border-slate/40">
                      A LinkedIn survey found that employees motivated by mission were 54% more likely to stay with their company for five or more years.
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 text-lg pl-6 border-l-2 border-slate/30 dark:border-slate/40">
                      Another study revealed that companies engaging employees in purpose-driven programs saw a 52% lower turnover among newer employees.
                    </p>
                  </div>
                  
                  <p className="text-slate dark:text-slate-200">
                    So what's the antidote?
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    It's not to ignore metrics. It's to anchor them. To use them as signal, not steering.
                  </p>
                  
                  <div className="my-10 p-6 bg-gradient-to-r from-army/5 to-army/10 dark:from-army/10 dark:to-army/20 rounded-xl border-l-4 border-army">
                    <p className="text-slate dark:text-slate-200 text-lg leading-relaxed">
                      To build systems that reinforce why we do the work, not just how fast we do it.
                    </p>
                    <p className="text-slate dark:text-slate-200 text-lg leading-relaxed mt-3">
                      Because the real goal is not a launch date or a deadlift.
                    </p>
                    <p className="text-slate dark:text-slate-200 text-lg leading-relaxed font-semibold mt-3">
                      The real goal is built through the reps, not measured by them.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Section 3 */}
              <div className="mb-16">
                <h2 id="section-3" className="text-3xl md:text-4xl font-display font-semibold text-slate dark:text-slate-100 mb-8 scroll-mt-24">
                  Rituals Over Rules
                </h2>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-slate dark:text-slate-200">
                    You don't get strong by lifting heavy once.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 text-xl ml-6 border-l-4 border-army pl-6 py-2">
                    You get strong by showing up again. And again. And again.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    But if you do the same thing forever, you don't get stronger — you get stuck.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    That's the tension of progress: it demands ritual, but it punishes repetition without variation.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    Whether in the gym or in product, growth comes through iteration — small, deliberate cycles of effort. You log your training. You tweak your form. You try a new tempo. In software, you ship. You measure. You talk to the user. You try again. The process isn't glamorous — but it's generative.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 font-semibold text-xl">
                    Rituals compound. Rules confine.
                  </p>
                  
                  <div className="my-8 space-y-4">
                    <p className="text-slate dark:text-slate-200 text-lg pl-6 border-l-4 border-army">
                      A rule says "do this."
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 text-lg pl-6 border-l-4 border-army">
                      A ritual says "do this because it matters."
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 text-lg pl-6 border-l-4 border-army">
                      One is brittle. The other bends with you.
                    </p>
                  </div>
                  
                  <p className="text-slate dark:text-slate-200">
                    Agile, for example, isn't magic. It's just a set of rituals. Daily standups, retros, demos, sprints — all meant to create rhythm and reflection. But rituals only work when they're anchored in meaning and adapted to context. If your team treats retros like checkbox theater, then you're not iterating — you're just looping. And if your standup sounds like "I did stuff, I'll do stuff, no blockers," you've got a ritual without reason.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    The same failure shows up in the gym. People find a powerlifting program online and follow it to the letter, even when it doesn't fit their recovery, their age, their job, their life. They wonder why they plateau — or get hurt. It's because they forgot the principle beneath the plan.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    That's where most systems fail: not because the framework is flawed, but because the user is forgotten. They're treated like an input to a method, instead of the reason for its existence.
                  </p>

                  <div className="my-8 p-6 bg-gradient-to-r from-slate/5 to-slate/10 dark:from-slate/10 dark:to-slate/20 rounded-xl">
                    <p className="text-slate dark:text-slate-200 text-lg leading-relaxed">
                      Let's be honest: there's no shortage of books telling you how to do things.
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 text-lg leading-relaxed italic mt-3">
                      And yes — here we are, writing another one.
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 text-lg leading-relaxed mt-3">
                      But this isn't a blueprint. It's a philosophy.
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 text-lg leading-relaxed italic mt-3">
                      The implementation is on you.
                    </p>
                  </div>

                  <p className="text-slate dark:text-slate-200">
                    What works for one team, one lifter, one body, won't work for another. That's not failure — that's reality.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    Stefi Cohen didn't become a record-breaking lifter by blindly following a single powerlifting template. Her training evolved through experimentation: strength phases, hypertrophy cycles, hybrid athletic blocks. She didn't just lift heavy — she studied her feedback, varied her stimuli, and rewrote her rituals to fit her mission.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 text-lg ml-6 italic border-l-4 border-slate/30 dark:border-slate/40 pl-6 py-2">
                    Progress didn't come from rigidity. It came from rhythm and reinvention.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    In product, that same spirit of experimentation lives in hack weeks — short, sacred breaks from routine where teams can stretch in new directions.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    Atlassian, Spotify, and Elastic have all embraced this. At Elastic, hack weeks became a celebrated ritual — not just for innovation, but for joy. Engineers got to break free from roadmap gravity and chase ideas that didn't need to justify themselves in Jira. Some of Elastic Security's most creative features — including internal workflow improvements, experimental visualizations, and early prototypes of user-requested tooling — were born not in sprint planning, but in that carved-out chaos.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 text-xl ml-6 border-l-4 border-army pl-6 py-2">
                    Sometimes, the best way to realign with the mission is to deliberately step outside it.
                  </p>
                  
                  <div className="my-10 p-6 bg-gradient-to-r from-army/5 to-army/10 dark:from-army/10 dark:to-army/20 rounded-xl border-l-4 border-army">
                    <p className="text-slate dark:text-slate-200 text-lg leading-relaxed">
                      Rituals work when they're shaped by the user, not imposed on them.
                    </p>
                    <p className="text-slate dark:text-slate-200 text-lg leading-relaxed mt-3">
                      They're tools — not commandments.
                    </p>
                  </div>
                  
                  <p className="text-slate dark:text-slate-200">
                    And when they're working, you feel it: not just in output, but in outlook. A team that trusts its rituals doesn't need micromanagement. A lifter that trusts their program doesn't need motivation hacks. The rhythm carries you. The meaning sustains you.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    But rituals aren't static.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    They must flex to your fatigue. They must bend to your bandwidth. They must evolve — not just to avoid boredom, but to stay honest with the mission.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 text-lg ml-6 border-l-4 border-slate/30 dark:border-slate/40 pl-6 py-2">
                    Same input, same outcome. If the goal has changed, so must the reps.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    That's what separates the lifter who grows from the one who stalls.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200 text-lg ml-6 italic border-l-4 border-slate/30 dark:border-slate/40 pl-6 py-2">
                    That's what separates the product team that adapts from the one that burns out.
                  </p>
                  
                  <div className="my-8 space-y-4">
                    <p className="text-slate dark:text-slate-200 text-lg">
                      Because if the mission is the magnet —
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 text-lg ml-6">
                      rituals are the rails.
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 text-lg">
                      They don't tell you where to go.
                    </p>
                    
                    <p className="text-slate dark:text-slate-200 text-lg ml-6">
                      They keep you from sliding off the path while you find it.
                    </p>
                  </div>
                  
                  <p className="text-slate dark:text-slate-200">
                    Rituals give you direction.
                  </p>
                  
                  <p className="text-2xl text-center font-semibold text-army dark:text-army my-8 py-4">
                    But progress? That comes from the work itself — the grind, the reps, the effort no one applauds.
                  </p>
                  
                  <p className="text-slate dark:text-slate-200">
                    In the next chapter, we talk about how strength is built — and why it doesn't always look like progress.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Next/Previous navigation - MOVED ABOVE SOURCES */}
            <div className="mt-20 pt-8 border-t border-slate/20 dark:border-slate/30 flex justify-between mb-16">
              <div>
                {/* This would be the previous log link if available */}
              </div>
              <div>
                <Link 
                  to="/chapters"
                  className="btn-army inline-flex items-center px-6 py-3 bg-army text-white font-semibold rounded-lg hover:bg-army/90 transition-colors"
                >
                  All Training Logs
                </Link>
              </div>
              <div>
                {/* This would be the next log link if available */}
              </div>
            </div>
            
            {/* Sources Section */}
            <div className="pt-8 border-t border-slate/20 dark:border-slate/30">
              <h2 id="sources" className="text-3xl md:text-4xl font-display font-semibold text-slate dark:text-slate-100 mb-8 scroll-mt-24">
                Sources
              </h2>
              
              <div className="space-y-6">
                <p className="text-slate dark:text-slate-200 text-lg leading-relaxed">
                  The following sources were referenced in this article:
                </p>
                
                <div className="grid gap-4">
                  <Card className="p-6 hover:shadow-md transition-all duration-200 border border-slate/20 dark:border-slate/30">
                    <div className="flex items-start gap-4">
                      <LinkIcon className="h-6 w-6 mt-1 flex-shrink-0 text-army dark:text-army" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate dark:text-slate-200 text-lg mb-2">Cyberpunk 2077 Launch & CD Projekt Red</h4>
                        <p className="text-slate/80 dark:text-slate-300 mb-3 leading-relaxed">A case study in date-driven shipping that sacrificed long-term trust for short-term metrics.</p>
                        <a 
                          href="https://www.forbes.com/sites/davidthier/2020/12/11/cd-projekt-red-stock-drops-after-buggy-messy-cyberpunk-2077-launch/"
                          className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 font-medium"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          CD Projekt Red Stock Drops After Buggy, Messy Cyberpunk 2077 Launch – Forbes
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 hover:shadow-md transition-all duration-200 border border-slate/20 dark:border-slate/30">
                    <div className="flex items-start gap-4">
                      <LinkIcon className="h-6 w-6 mt-1 flex-shrink-0 text-army dark:text-army" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate dark:text-slate-200 text-lg mb-2">Simone Biles & Mission-Aligned Decision-Making</h4>
                        <p className="text-slate/80 dark:text-slate-300 mb-3 leading-relaxed">An athlete choosing alignment over achievement — and sparking a global conversation.</p>
                        <a 
                          href="https://people.com/sports/everything-simone-biles-has-said-about-mental-health/"
                          className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 font-medium"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          I Don&apos;t Have to Be Fine: Everything Simone Biles Has Said About Mental Health – People Magazine
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 hover:shadow-md transition-all duration-200 border border-slate/20 dark:border-slate/30">
                    <div className="flex items-start gap-4">
                      <LinkIcon className="h-6 w-6 mt-1 flex-shrink-0 text-army dark:text-army" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate dark:text-slate-200 text-lg mb-2">Patagonia & Purpose-Driven Brand Behavior</h4>
                        <p className="text-slate/80 dark:text-slate-300 mb-3 leading-relaxed">Iconic ad campaign where brand values overrode short-term sales incentives.</p>
                        <a 
                          href="https://www.patagonia.com/stories/dont-buy-this-jacket/story-18615.html"
                          className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 font-medium"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Don&apos;t Buy This Jacket – Patagonia
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 hover:shadow-md transition-all duration-200 border border-slate/20 dark:border-slate/30">
                    <div className="flex items-start gap-4">
                      <LinkIcon className="h-6 w-6 mt-1 flex-shrink-0 text-army dark:text-army" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate dark:text-slate-200 text-lg mb-2">Research on Purpose & Fulfillment</h4>
                        <p className="text-slate/80 dark:text-slate-300 mb-3 leading-relaxed">Purpose-driven companies see higher retention, satisfaction, and performance.</p>
                        <a 
                          href="https://hbr.org/sponsored/2016/04/the-business-case-for-purpose"
                          className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 font-medium"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          The Business Case for Purpose – Harvard Business Review, 2016
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 hover:shadow-md transition-all duration-200 border border-slate/20 dark:border-slate/30">
                    <div className="flex items-start gap-4">
                      <LinkIcon className="h-6 w-6 mt-1 flex-shrink-0 text-army dark:text-army" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate dark:text-slate-200 text-lg mb-2">Strategic Framing: The OODA Loop</h4>
                        <p className="text-slate/80 dark:text-slate-300 mb-3 leading-relaxed">Military strategy model focused on Observation, Orientation, Decision, and Action. Useful for product and performance under uncertainty.</p>
                        <a 
                          href="https://en.wikipedia.org/wiki/OODA_loop"
                          className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 font-medium"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          John Boyd – OODA Loop – Wikipedia
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 hover:shadow-md transition-all duration-200 border border-slate/20 dark:border-slate/30">
                    <div className="flex items-start gap-4">
                      <LinkIcon className="h-6 w-6 mt-1 flex-shrink-0 text-army dark:text-army" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate dark:text-slate-200 text-lg mb-2">Case Study: Product & Organizational Drift</h4>
                        <p className="text-slate/80 dark:text-slate-300 mb-3 leading-relaxed">How engineering culture and metric pressures at Boeing overtook the company&apos;s safety-driven mission — with catastrophic results.</p>
                        <a 
                          href="https://www.nytimes.com/2019/09/18/magazine/boeing-737-max-crashes.html"
                          className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 font-medium"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          What Really Brought Down the Boeing 737 Max? – The New York Times
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 hover:shadow-md transition-all duration-200 border border-slate/20 dark:border-slate/30">
                    <div className="flex items-start gap-4">
                      <LinkIcon className="h-6 w-6 mt-1 flex-shrink-0 text-army dark:text-army" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate dark:text-slate-200 text-lg mb-2">Individual Drift: Strength and Misalignment</h4>
                        <p className="text-slate/80 dark:text-slate-300 mb-3 leading-relaxed">A personal reflection on chasing numbers too hard — and paying the price with injury.</p>
                        <a 
                          href="https://www.essentiallysports.com/bodybuilding-news-probably-my-biggest-mistake-months-after-a-horrifying-pec-tear-while-bench-pressing-strongman-legend-makes-a-candid-confession-about-his-injury-hafthor-bjornsson/"
                          className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 font-medium"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Hafthor Björnsson on Pec Injury – Essentially Sports
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 hover:shadow-md transition-all duration-200 border border-slate/20 dark:border-slate/30">
                    <div className="flex items-start gap-4">
                      <LinkIcon className="h-6 w-6 mt-1 flex-shrink-0 text-army dark:text-army" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate dark:text-slate-200 text-lg mb-2">Research: Purpose and Retention</h4>
                        <p className="text-slate/80 dark:text-slate-300 mb-3 leading-relaxed">Mission-driven workers are significantly more likely to stay long-term — supports your thesis with compelling data.</p>
                        <a 
                          href="https://guidehouse.com/-/media/new-library/industries/defense-and-security/documents/2023/gh-161-wp-improving-employee-retention.pdf"
                          className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 font-medium"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Improving Employee Retention – Guidehouse
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 hover:shadow-md transition-all duration-200 border border-slate/20 dark:border-slate/30">
                    <div className="flex items-start gap-4">
                      <LinkIcon className="h-6 w-6 mt-1 flex-shrink-0 text-army dark:text-army" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate dark:text-slate-200 text-lg mb-2">Rituals, Adaptation, and Innovation</h4>
                        <p className="text-slate/80 dark:text-slate-300 mb-3 leading-relaxed">How structure and creativity can coexist to drive meaningful progress.</p>
                        <a 
                          href="https://www.hybridperformancemethod.com/"
                          className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 font-medium"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Stefi Cohen&apos;s Training Philosophy and Hybrid Methodology – Hybrid Performance Method
                        </a>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - TOC, related posts, etc. */}
          <div className="hidden lg:block lg:w-1/4 sticky top-24 self-start">
            <Card className="p-6 shadow-lg border border-slate/20 dark:border-slate/30">
              <h3 className="font-display font-semibold mb-6 text-xl text-slate dark:text-slate-100">
                <BookOpen className="h-5 w-5 inline-block mr-2" />
                Table of Contents
              </h3>
              <ul className="space-y-3 text-slate/80 dark:text-slate-300">
                <li>
                  <a href="#section-1" className="hover:text-army transition-colors text-base leading-relaxed">The Mission Is the Magnet</a>
                  <ul className="pl-4 mt-3 space-y-2 text-sm">
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
                <li className="pt-2">
                  <a href="#section-2" className="hover:text-army transition-colors text-base leading-relaxed">The Drift</a>
                </li>
                <li>
                  <a href="#section-3" className="hover:text-army transition-colors text-base leading-relaxed">Rituals Over Rules</a>
                </li>
                <li className="pt-2">
                  <a href="#sources" className="hover:text-army transition-colors text-base leading-relaxed">Sources</a>
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
