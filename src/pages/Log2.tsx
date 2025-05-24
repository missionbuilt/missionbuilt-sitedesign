
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronLeft, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Log2: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Built Through Reps | Training Log</title>
        <meta name="description" content="A training log about building strength through consistent repetition and intentional practice." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              to="/chapters" 
              className="inline-flex items-center text-slate/60 dark:text-slate-400 hover:text-slate dark:hover:text-slate-100 transition-colors text-sm"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              <span>Back to Training Logs</span>
            </Link>
          </div>
        
          {/* Log header section */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate dark:text-slate-100 mb-4">
              Built Through Reps
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
                <span>May 24, 2025</span>
              </div>
            </div>
          </div>
        
          {/* Hero section with image and compact TOC */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Hero Image */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/lovable-uploads/af1227a8-77de-4d0f-9dc7-14d29a017dca.png" 
                alt="Built Through Reps - Training in the gym"
                className="rounded-lg shadow-lg max-w-xl w-full h-auto object-cover"
              />
            </div>
            
            {/* Table of Contents */}
            <div className="flex items-start lg:pt-8">
              <Card className="p-6 w-full bg-card border-border">
                <h3 className="text-lg font-semibold mb-4 text-slate dark:text-slate-100">In This Log</h3>
                <nav className="space-y-2">
                  <a href="#myth-overnight-success" className="block text-sm text-slate/70 dark:text-slate-300 hover:text-slate dark:hover:text-slate-100 transition-colors">
                    The Myth of Overnight Success
                  </a>
                  <a href="#repetition-redundancy" className="block text-sm text-slate/70 dark:text-slate-300 hover:text-slate dark:hover:text-slate-100 transition-colors">
                    Repetition Is Not Redundancy
                  </a>
                  <a href="#spark-fades" className="block text-sm text-slate/70 dark:text-slate-300 hover:text-slate dark:hover:text-slate-100 transition-colors">
                    When the Spark Fades
                  </a>
                  <a href="#multiplier-boring-work" className="block text-sm text-slate/70 dark:text-slate-300 hover:text-slate dark:hover:text-slate-100 transition-colors">
                    The Multiplier of Boring Work
                  </a>
                  <a href="#work-becomes-win" className="block text-sm text-slate/70 dark:text-slate-300 hover:text-slate dark:hover:text-slate-100 transition-colors">
                    The Work Becomes the Win
                  </a>
                </nav>
              </Card>
            </div>
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section id="myth-overnight-success" className="mb-16">
              <h2 className="text-3xl font-display font-bold text-slate dark:text-slate-100 mb-8">
                Section 1: The Myth of Overnight Success
              </h2>
              <div className="space-y-6 text-slate dark:text-slate-200 leading-relaxed">
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
            </section>

            {/* Section 2 */}
            <section id="repetition-redundancy" className="mb-16">
              <h2 className="text-3xl font-display font-bold text-slate dark:text-slate-100 mb-8">
                Section 2: Repetition Is Not Redundancy
              </h2>
              <div className="space-y-6 text-slate dark:text-slate-200 leading-relaxed">
                <p>In Section 1, we looked at the myth of overnight success — how real strength, in the gym or in product, is built through showing up again and again. But not all reps are created equal. The real magic isn't just in the repetition — it's in how you use it.</p>
                <p>Not all reps count the same.</p>
                <p>Anyone who's coasted through a gym session, just moving weight, knows the difference. One set burns time. Another builds awareness, precision, and strength — even if the numbers don't change.</p>
                <p>The same is true in product.</p>
                <p>Repetition isn't redundant when it's intentional. When it's used to test assumptions, refine interfaces, tune performance, or build something just a little closer to what users actually need. That's the kind of rep that moves things forward.</p>
                <p>But repetition alone isn't enough — variation is what makes repetition transformative.</p>
                <p>As Dr. Mike Israetel, co-founder of Renaissance Periodization, teaches:</p>
                <blockquote className="border-l-4 border-army pl-6 italic text-slate/80 dark:text-slate-300 my-6">
                  "Training works best when structured into intentional blocks that emphasize different goals. In hypertrophy-focused blocks, lifters increase volume over time — guided by principles like Minimum Effective Volume (MEV), Maximum Adaptive Volume (MAV), and Maximum Recoverable Volume (MRV). This structured overload builds muscle while preserving recovery, setting the stage for later strength expression. The concept isn't just about working hard — it's about working smart, within clear, adaptive boundaries."
                </blockquote>
                <p className="text-sm text-slate/60 dark:text-slate-400">Source: https://drmikeisraetel.com/dr-mike-israetel-mv-mev-mav-mrv-explained/</p>
                <p>In training, we use blocks for different goals: hypertrophy to build muscle, strength to build expression, and deloads to recover and grow. We manipulate movement, load, and tempo to avoid stagnation. A paused bench press, a deficit deadlift, or chains added to a bar — each variation targets a different adaptation, even if the base movement stays the same.</p>
                <p>Product is no different.</p>
                <p>You might run a block of sprints to achieve a specific outcome — refining onboarding, improving performance, or tackling tech debt. Then shift into a new block with a new goal. Like training, it takes enough intentionality to complete a cycle, maybe one, two, or three sprints, before varying the focus. Progress comes not from flailing in every direction, but from focused variation over time.</p>
                <p>And just like strength doesn't grow without tension, product insight doesn't grow without diverse input.</p>
                <p>You can't just loop with your own team forever. Sometimes you have to stretch — to talk to sales, to customers, to analysts, to skeptics. Even when it's uncomfortable. Especially when it is.</p>
                <p>This is where The Medici Group gets it right: innovation happens when diverse perspectives collide.</p>
                <p>As Frans Johansson puts it in The Medici Effect:</p>
                <blockquote className="border-l-4 border-army pl-6 italic text-slate/80 dark:text-slate-300 my-6">
                  "When you step into an intersection of fields, disciplines, or cultures, you can combine existing concepts into a large number of extraordinary new ideas."
                </blockquote>
                <p>In the gym, that might mean lifting with people stronger or different than you. In product, it means bringing in voices from outside your echo chamber — support calls, sales objections, the person who almost churned.</p>
                <p>Reps alone build endurance.</p>
                <p>Smart variation builds power.</p>
                <p>This is how you break through the plateau — not by abandoning the reps, but by evolving them.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="spark-fades" className="mb-16">
              <h2 className="text-3xl font-display font-bold text-slate dark:text-slate-100 mb-8">
                Section 3: When the Spark Fades
              </h2>
              <div className="space-y-6 text-slate dark:text-slate-200 leading-relaxed">
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
                <blockquote className="border-l-4 border-army pl-6 italic text-slate/80 dark:text-slate-300 my-6">
                  "You do not rise to the level of your goals. You fall to the level of your systems."
                </blockquote>
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
            </section>

            {/* Section 4 */}
            <section id="multiplier-boring-work" className="mb-16">
              <h2 className="text-3xl font-display font-bold text-slate dark:text-slate-100 mb-8">
                Section 4: The Multiplier of Boring Work
              </h2>
              <div className="space-y-6 text-slate dark:text-slate-200 leading-relaxed">
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
            </section>

            {/* Section 5 */}
            <section id="work-becomes-win" className="mb-16">
              <h2 className="text-3xl font-display font-bold text-slate dark:text-slate-100 mb-8">
                Section 5: The Work Becomes the Win
              </h2>
              <div className="space-y-6 text-slate dark:text-slate-200 leading-relaxed">
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
                <p className="font-semibold">Up next: Rituals Over Rules.</p>
              </div>
            </section>

            {/* Sources & Further Reading */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold text-slate dark:text-slate-100 mb-8">
                Sources & Further Reading
              </h2>
              <div className="space-y-6 text-slate dark:text-slate-200">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-slate dark:text-slate-100">Deeper Read on Instagram's Rise:</h3>
                  <p className="mb-2"><em>No Filter: The Inside Story of Instagram</em> by Sarah Frier – A detailed, behind-the-scenes look at Instagram's transformation from Burbn to a cultural phenomenon.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-slate dark:text-slate-100">The iPhone's hidden grind:</h3>
                  <p className="mb-2">How Steve Jobs Faked His Way Through Unveiling the iPhone – NY Magazine: <a href="https://nymag.com/intelligencer/2017/01/how-steve-jobs-faked-his-way-through-unveiling-the-iphone.html" className="text-army hover:text-army/80 underline" target="_blank" rel="noopener noreferrer">https://nymag.com/intelligencer/2017/01/how-steve-jobs-faked-his-way-through-unveiling-the-iphone.html</a></p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-slate dark:text-slate-100">Instagram's evolution from Burbn:</h3>
                  <p className="mb-2">Instagram – Wikipedia: <a href="https://en.wikipedia.org/wiki/Instagram#History" className="text-army hover:text-army/80 underline" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Instagram#History</a></p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-slate dark:text-slate-100">Lifting progress and the plateau effect:</h3>
                  <p className="mb-2">Overcoming Strength Training Plateaus – Ironmaster: <a href="https://www.ironmaster.com/blog/strength-training-plateau/" className="text-army hover:text-army/80 underline" target="_blank" rel="noopener noreferrer">https://www.ironmaster.com/blog/strength-training-plateau/</a></p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-slate dark:text-slate-100">Product development isn't always fast:</h3>
                  <p className="mb-2">Failing Fast: Why It's Essential for Entrepreneurs – Harvard Business School Online: <a href="https://online.hbs.edu/blog/post/fail-fast" className="text-army hover:text-army/80 underline" target="_blank" rel="noopener noreferrer">https://online.hbs.edu/blog/post/fail-fast</a></p>
                </div>

                <div>
                  <p className="mb-2">Israetel, Mike. "MV, MEV, MAV, MRV Explained." Renaissance Periodization. <a href="https://drmikeisraetel.com/dr-mike-israetel-mv-mev-mav-mrv-explained/" className="text-army hover:text-army/80 underline" target="_blank" rel="noopener noreferrer">https://drmikeisraetel.com/dr-mike-israetel-mv-mev-mav-mrv-explained/</a></p>
                </div>

                <div>
                  <p className="mb-2"><em>The Medici Effect: Finding Creative Inspiration in Unlikely Places</em> - A foundational book on innovation through diversity and intersectional thinking.</p>
                  <p className="mb-2"><a href="https://phoscreative.com/articles/the-medici-effect/" className="text-army hover:text-army/80 underline" target="_blank" rel="noopener noreferrer">https://phoscreative.com/articles/the-medici-effect/</a></p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-slate dark:text-slate-100">Behavior & Systems Thinking</h3>
                  <p className="mb-2">James Clear – <em>Atomic Habits</em></p>
                  <p className="mb-2"><a href="https://jamesclear.com/atomic-habits" className="text-army hover:text-army/80 underline" target="_blank" rel="noopener noreferrer">https://jamesclear.com/atomic-habits</a></p>
                  <p className="mb-2">A guide to building better habits and systems that support long-term success, including the principle: "You do not rise to the level of your goals. You fall to the level of your systems."</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-slate dark:text-slate-100">User-Centered Product Development</h3>
                  <p className="mb-2">Basecamp's Shape Up Method – Signal v. Noise</p>
                  <p className="mb-2"><a href="https://basecamp.com/shapeup" className="text-army hover:text-army/80 underline" target="_blank" rel="noopener noreferrer">https://basecamp.com/shapeup</a></p>
                  <p className="mb-4">An approach to product work that values thoughtful iteration, foundational improvements, and meaningful user feedback.</p>

                  <p className="mb-2"><em>Talking to Humans</em> — Giff Constable</p>
                  <p className="mb-2"><a href="https://talkingtohumans.com" className="text-army hover:text-army/80 underline" target="_blank" rel="noopener noreferrer">https://talkingtohumans.com</a></p>
                  <p className="mb-4">A practical guide to validating ideas and rediscovering motivation by speaking directly with the users you aim to serve.</p>

                  <p className="mb-2">Angela Duckworth – <em>Grit: The Power of Passion and Perseverance</em></p>
                  <p className="mb-2"><a href="https://angeladuckworth.com/grit-book" className="text-army hover:text-army/80 underline" target="_blank" rel="noopener noreferrer">https://angeladuckworth.com/grit-book</a></p>
                  <p className="mb-4">Explores why sustained effort matters more than intensity, and how consistency builds excellence.</p>

                  <p className="mb-2">Darren Hardy – <em>The Compound Effect</em></p>
                  <p className="mb-2"><a href="https://www.thecompoundeffect.com" className="text-army hover:text-army/80 underline" target="_blank" rel="noopener noreferrer">https://www.thecompoundeffect.com</a></p>
                  <p className="mb-4">Details how small actions done consistently lead to exponential outcomes — a key insight for boring but high-leverage work.</p>

                  <p className="mb-2">Martin Fowler – Is High Quality Software Worth the Cost?</p>
                  <p className="mb-2"><a href="https://martinfowler.com/articles/is-quality-worth-cost.html" className="text-army hover:text-army/80 underline" target="_blank" rel="noopener noreferrer">https://martinfowler.com/articles/is-quality-worth-cost.html</a></p>
                  <p>Argues that invisible work like refactoring and testing leads to faster long-term delivery — a strong product parallel to back-off sets and mobility work.</p>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Log2;
