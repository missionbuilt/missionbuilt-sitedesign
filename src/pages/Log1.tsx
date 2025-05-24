
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Clock, Link as LinkIcon } from "lucide-react";
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
                <AvatarImage src="/lovable-uploads/777697e9-e718-4177-9c47-cb5be778fdd3.png" alt="Mike" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <span className="text-sm">Mike</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>Published Date</span>
            </div>
          </div>
        </div>
        
        {/* Section 1: The Mission Is the Magnet */}
        <article className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate dark:text-slate-100 mb-8 leading-tight">
              The Mission Is the Magnet
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-6">
                Before I ever built products, I served in the U.S. Army as an Airborne intelligence sergeant. That experience — of working in service of something larger than myself, of making decisions under pressure with lives on the line — shaped everything that came after. I learned early that mission comes first. Not ego. Not recognition. Mission.
              </p>
              
              <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-6">
                That mindset followed me from the military to cybersecurity, and into leadership roles where the stakes changed but the values stayed the same. Whether it was securing critical systems, helping build Elastic Security, or coaching in the gym, the goal has always been the same: real strength is lifting others.
              </p>
              
              <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-6">
                One of the proudest chapters of my product career was building Endgame. We entered a brutally competitive market — going head-to-head with massive players like McAfee and CrowdStrike — and carved out real ground. Not because we had more money or brand recognition, but because we had something harder to copy: a clear mission. Protect high-value targets from nation-state level attacks. That focus, and the small, fierce team who rallied behind it, made all the difference.
              </p>
              
              <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-6">
                At the heart of it was Nate Fick, a Marine officer turned tech CEO, and later the U.S. Ambassador for Cyberspace and Digital Policy. He led with conviction, clarity, and a deep respect for the mission. In all-hands meetings, Nate would remind us that we were an "elevator asset company" — that if the building burned down, the most important assets could still fit in the elevator. It wasn't the code or the tools. It was the people — the ones who understood the user's mission and had the passion to serve it.
              </p>
              
              <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-6">
                That idea stuck with me. Nate's example reinforced what I learned in uniform: The success is the user's success. Your mission is their mission.
              </p>
              
              <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-8 font-medium">
                Metrics are the outcome of making your user successful. Yes, we need to measure them. But they are the result of serving the mission — not the reason for it.
              </p>
              
              <div className="border-l-4 border-army/30 pl-6 mb-8">
                <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-4">
                  There's a moment in every product meeting when the question slides in like it always does:
                </p>
                <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-4">
                  "How will we measure success?"
                </p>
                <p className="text-lg leading-relaxed text-slate dark:text-slate-200">
                  It's a good question — just not always a good first question.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-6">
                In lifting, it's the same story. People chase PRs every week like the number on the barbell is the whole point. Add five pounds. Hit record. Post the clip. Repeat.
              </p>
              
              <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-6">
                But metrics without mission? That's just noise. Pressure with no direction. Goals with no guts.
              </p>
              
              <blockquote className="border-l-4 border-army bg-army/5 dark:bg-army/10 p-6 my-8 rounded-r-lg">
                <p className="text-xl font-medium text-slate dark:text-slate-100 italic">
                  "The weight on the bar isn't the goal — it's the evidence of progress, not the destination."
                </p>
              </blockquote>
              
              <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-6">
                We've all seen what happens when this mindset takes over. It's not a failure of talent — it's a failure of alignment. Cyberpunk 2077 didn't initially flop because the devs didn't care — far from it. The development team poured years into building something ambitious. But the pressure to hit a holiday launch window — a decision made at the executive level — overrode the mission of delivering a complete, polished experience. The result was a rocky release, millions in refunds, a reputational hit, and a stock crash.
              </p>
              
              <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-6">
                To their credit, the team stuck with it. Years later, after patches and a reimagined DLC, the game has earned back much of the trust it lost — a testament to what happens when talented people are finally given the space to do the work right.
              </p>
              
              <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-6">
                And we've seen what it looks like to protect the mission — even when it means stepping back. Simone Biles did exactly that in front of the entire world at the 2021 Olympics. Under unimaginable pressure, she chose long-term purpose over short-term performance. She knew something was off, and she honored that instinct.
              </p>
              
              <blockquote className="border-l-4 border-army bg-army/5 dark:bg-army/10 p-6 my-8 rounded-r-lg">
                <p className="text-lg font-medium text-slate dark:text-slate-100 italic mb-2">
                  "I have to focus on my mental health… if you don't, then you're not going to enjoy your score and you're not gonna succeed as much as you want to."
                </p>
                <footer className="text-sm text-slate/80 dark:text-slate-300">
                  — Simone Biles
                </footer>
              </blockquote>
              
              <p className="text-lg leading-relaxed text-slate dark:text-slate-200 mb-6">
                Her move wasn't retreat — it was leadership. And in time, she returned to competition stronger, on her terms, and more respected than ever. A different kind of comeback — one powered by mission, not metrics.
              </p>
              
              <p className="text-xl leading-relaxed text-slate dark:text-slate-100 font-medium">
                Success isn't about hitting every metric. It's about refusing to lose yourself trying.
              </p>
            </div>
          </section>
        </article>
        
        {/* Next/Previous navigation */}
        <div className="mt-16 pt-8 border-t border-slate/10 dark:border-slate/20 flex justify-between mb-16">
          <div>
            {/* This would be the previous log link if available */}
          </div>
          <div>
            <Link to="/chapters" className="btn-army inline-flex">
              All Training Logs
            </Link>
          </div>
          <div>
            {/* This would be the next log link if available */}
          </div>
        </div>
        
        {/* Sources Section */}
        <div className="pt-8 border-t border-slate/10 dark:border-slate/20">
          <h2 id="sources" className="text-2xl md:text-3xl font-display font-semibold text-slate dark:text-slate-100 mb-6">
            Sources
          </h2>
          
          <div className="space-y-4">
            <p className="text-slate dark:text-slate-200 leading-relaxed">
              The following sources were referenced in this article:
            </p>
            
            <ul className="space-y-3 list-none pl-0">
              <li className="p-3 bg-slate/5 hover:bg-slate/10 dark:bg-slate/10 dark:hover:bg-slate/20 rounded-md transition-colors">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <LinkIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-slate dark:text-slate-300" />
                    <div>
                      <h4 className="font-semibold text-slate dark:text-slate-200">Cyberpunk 2077 Launch & CD Projekt Red</h4>
                      <p className="text-sm text-slate/80 dark:text-slate-300 mb-2">A case study in date-driven shipping that sacrificed long-term trust for short-term metrics.</p>
                      <a href="https://www.forbes.com/sites/davidthier/2020/12/11/cd-projekt-red-stock-drops-after-buggy-messy-cyberpunk-2077-launch/" className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                        CD Projekt Red Stock Drops After Buggy, Messy 'Cyberpunk 2077' Launch – Forbes
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="p-3 bg-slate/5 hover:bg-slate/10 dark:bg-slate/10 dark:hover:bg-slate/20 rounded-md transition-colors">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <LinkIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-slate dark:text-slate-300" />
                    <div>
                      <h4 className="font-semibold text-slate dark:text-slate-200">Simone Biles & Mission-Aligned Decision-Making</h4>
                      <p className="text-sm text-slate/80 dark:text-slate-300 mb-2">An athlete choosing alignment over achievement — and sparking a global conversation.</p>
                      <a href="https://people.com/sports/everything-simone-biles-has-said-about-mental-health/" className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                        "I Don't Have to Be Fine": Everything Simone Biles Has Said About Mental Health – People Magazine
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="p-3 bg-slate/5 hover:bg-slate/10 dark:bg-slate/10 dark:hover:bg-slate/20 rounded-md transition-colors">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <LinkIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-slate dark:text-slate-300" />
                    <div>
                      <h4 className="font-semibold text-slate dark:text-slate-200">Patagonia & Purpose-Driven Brand Behavior</h4>
                      <p className="text-sm text-slate/80 dark:text-slate-300 mb-2">Iconic ad campaign where brand values overrode short-term sales incentives.</p>
                      <a href="https://www.patagonia.com/stories/dont-buy-this-jacket/story-18615.html" className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                        Don't Buy This Jacket – Patagonia
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="p-3 bg-slate/5 hover:bg-slate/10 dark:bg-slate/10 dark:hover:bg-slate/20 rounded-md transition-colors">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <LinkIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-slate dark:text-slate-300" />
                    <div>
                      <h4 className="font-semibold text-slate dark:text-slate-200">Research on Purpose & Fulfillment</h4>
                      <p className="text-sm text-slate/80 dark:text-slate-300 mb-2">Purpose-driven companies see higher retention, satisfaction, and performance.</p>
                      <div className="space-y-1">
                        <a href="https://hbr.org/sponsored/2016/04/the-business-case-for-purpose" className="block text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                          The Business Case for Purpose – Harvard Business Review, 2016
                        </a>
                        <a href="https://www.imperative.com/resource/2016-workforce-purpose-index" className="block text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                          Purpose at Work – Imperative & NYU Study, 2016 (54% of purpose-driven employees are more likely to stay 5+ years)
                        </a>
                        <a href="https://www.mckinsey.com/business-functions/people-and-organizational-performance/our-insights/purpose-shifting-from-why-to-how" className="block text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                          Purpose: Shifting from Why to How – McKinsey & Company, 2020
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="p-3 bg-slate/5 hover:bg-slate/10 dark:bg-slate/10 dark:hover:bg-slate/20 rounded-md transition-colors">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <LinkIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-slate dark:text-slate-300" />
                    <div>
                      <h4 className="font-semibold text-slate dark:text-slate-200">Strategic Framing: The OODA Loop</h4>
                      <p className="text-sm text-slate/80 dark:text-slate-300 mb-2">Military strategy model focused on Observation, Orientation, Decision, and Action. Useful for product and performance under uncertainty.</p>
                      <a href="https://en.wikipedia.org/wiki/OODA_loop" className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                        John Boyd – OODA Loop – Wikipedia
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="p-3 bg-slate/5 hover:bg-slate/10 dark:bg-slate/10 dark:hover:bg-slate/20 rounded-md transition-colors">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <LinkIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-slate dark:text-slate-300" />
                    <div>
                      <h4 className="font-semibold text-slate dark:text-slate-200">Case Study: Product & Organizational Drift</h4>
                      <p className="text-sm text-slate/80 dark:text-slate-300 mb-2">How engineering culture and metric pressures at Boeing overtook the company's safety-driven mission — with catastrophic results.</p>
                      <a href="https://www.nytimes.com/2019/09/18/magazine/boeing-737-max-crashes.html" className="text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                        What Really Brought Down the Boeing 737 Max? – The New York Times
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="p-3 bg-slate/5 hover:bg-slate/10 dark:bg-slate/10 dark:hover:bg-slate/20 rounded-md transition-colors">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <LinkIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-slate dark:text-slate-300" />
                    <div>
                      <h4 className="font-semibold text-slate dark:text-slate-200">Individual Drift: Strength and Misalignment</h4>
                      <p className="text-sm text-slate/80 dark:text-slate-300 mb-2">A personal reflection on chasing numbers too hard — and paying the price with injury.</p>
                      <div className="space-y-1">
                        <a href="https://www.essentiallysports.com/bodybuilding-news-probably-my-biggest-mistake-months-after-a-horrifying-pec-tear-while-bench-pressing-strongman-legend-makes-a-candid-confession-about-his-injury-hafthor-bjornsson/" className="block text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                          Hafthor Björnsson on Pec Injury – Essentially Sports
                        </a>
                        <a href="https://en.as.com/entertainment/game-of-thrones-star-hafthor-bjornsson-suffers-nasty-injury-while-bench-pressing-n/" className="block text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                          Hafthor Björnsson Injury Coverage – AS.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="p-3 bg-slate/5 hover:bg-slate/10 dark:bg-slate/10 dark:hover:bg-slate/20 rounded-md transition-colors">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <LinkIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-slate dark:text-slate-300" />
                    <div>
                      <h4 className="font-semibold text-slate dark:text-slate-200">Research: Purpose and Retention</h4>
                      <p className="text-sm text-slate/80 dark:text-slate-300 mb-2">Mission-driven workers are significantly more likely to stay long-term — supports your thesis with compelling data.</p>
                      <div className="space-y-1">
                        <a href="https://guidehouse.com/-/media/new-library/industries/defense-and-security/documents/2023/gh-161-wp-improving-employee-retention.pdf" className="block text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                          Improving Employee Retention – Guidehouse
                        </a>
                        <a href="https://benevity.com/talent-retention-study" className="block text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                          Purpose-Driven Work and Turnover – Benevity Talent Retention Study
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="p-3 bg-slate/5 hover:bg-slate/10 dark:bg-slate/10 dark:hover:bg-slate/20 rounded-md transition-colors">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <LinkIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-slate dark:text-slate-300" />
                    <div>
                      <h4 className="font-semibold text-slate dark:text-slate-200">Rituals, Adaptation, and Innovation</h4>
                      <p className="text-sm text-slate/80 dark:text-slate-300 mb-2">How structure and creativity can coexist to drive meaningful progress.</p>
                      <div className="space-y-1">
                        <a href="https://www.hybridperformancemethod.com/" className="block text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                          Stefi Cohen's Training Philosophy and Hybrid Methodology – Hybrid Performance Method
                        </a>
                        <a href="https://www.agilealliance.org/resources/books/agile-retrospectives-making-good-teams-great/" className="block text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                          Agile Retrospectives and Team Rituals – Esther Derby & Diana Larsen
                        </a>
                        <a href="https://www.atlassian.com/company/shipit" className="block text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                          Atlassian ShipIt (Hack Week Model) – Atlassian
                        </a>
                        <a href="https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf" className="block text-army hover:text-army/80 dark:text-army dark:hover:text-army/80 text-sm" target="_blank" rel="noopener noreferrer">
                          Spotify Hack Culture Overview – Scaling Agile @ Spotify (Whitepaper)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Log1;
