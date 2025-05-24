
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
                  <a href="#consistency" className="block text-sm text-slate/70 dark:text-slate-300 hover:text-slate dark:hover:text-slate-100 transition-colors">
                    The Power of Consistency
                  </a>
                  <a href="#progress" className="block text-sm text-slate/70 dark:text-slate-300 hover:text-slate dark:hover:text-slate-100 transition-colors">
                    Measuring Real Progress
                  </a>
                  <a href="#mindset" className="block text-sm text-slate/70 dark:text-slate-300 hover:text-slate dark:hover:text-slate-100 transition-colors">
                    The Rep Mindset
                  </a>
                  <a href="#mission-built" className="block text-sm text-slate/70 dark:text-slate-300 hover:text-slate dark:hover:text-slate-100 transition-colors">
                    What Mission Built Means
                  </a>
                </nav>
              </Card>
            </div>
          </div>

          {/* Content sections */}
          <article className="prose prose-lg max-w-none prose-slate dark:prose-invert">
            <section id="myth-overnight-success" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate dark:text-slate-100">The Myth of Overnight Success</h2>
              
              <div className="space-y-6 text-slate/80 dark:text-slate-300 leading-relaxed">
                <p className="text-lg">
                  We've all heard the stories.
                </p>
                
                <p>
                  The product that "took off overnight."
                </p>
                
                <p>
                  The lifter who casually pulls four plates like they've always been able to.
                </p>
                
                <p>
                  The founder in a garage who changes the world with a single keynote.
                </p>
                
                <p>
                  It's tempting to believe that mastery happens like that — in a flash.
                </p>
                
                <p className="font-medium">
                  But that's not really how it works.
                </p>
                
                <p>
                  Take the iPhone. The 2007 reveal made it feel like it dropped from the sky fully formed. But behind that moment were years of trial and error. Touchscreens that didn't quite work. Software that crashed mid-demo. A mountain of prototypes that never saw the light of day. The final product wasn't a stroke of brilliance — it was the result of relentless iteration.
                </p>
                
                <p>
                  Same with Instagram. What looked like an overnight success was actually the second version of a too-close-to-Foursquare check-in app called Burbn. The team just kept listening, trimming, trying again. One update at a time.
                </p>
                
                <p>
                  And that big deadlift on your feed? Probably not magic. More likely: a hundred quiet sessions, some of them rough. A lot of small choices to show up, tweak form, trust the program.
                </p>
                
                <p>
                  We love the idea of sparks — fast wins, big leaps, sudden breakthroughs. But progress usually doesn't feel like that.
                </p>
                
                <p className="font-medium text-lg">
                  Most of the time, it feels a lot more like repetition.
                </p>
                
                <div className="pl-6 border-l-4 border-army/30 dark:border-destructive/30 bg-slate/5 dark:bg-slate/10 p-4 rounded-r-lg">
                  <p className="mb-2">
                    The engineer fixing the same piece of code — again.
                  </p>
                  <p className="mb-2">
                    The founder rewriting their pitch for the fifth time.
                  </p>
                  <p>
                    The lifter doing the same warm-up cues every session, no matter the weight.
                  </p>
                </div>
                
                <p>
                  It's not flashy. But it adds up.
                </p>
                
                <p>
                  That's part of what makes the first few months — or the first year — so exhilarating. In the gym, you make gains almost every week. In a startup, your product evolves daily. Everything feels fast, and the feedback is loud.
                </p>
                
                <p className="font-medium">
                  But then you hit the plateau.
                </p>
                
                <p>
                  The easy wins dry up. Strength doesn't come as quickly. Users get harder to surprise. Suddenly, it's not about chasing sparks anymore — it's about showing up and pushing through.
                </p>
                
                <p className="text-lg font-medium text-army dark:text-destructive">
                  This is where the real work begins.
                </p>
                
                <p>
                  In lifting, that means grinding through the middle — not maxing out, but mastering the basics under load. In product, it's navigating the shift from scrappy innovation to enterprise-grade reliability. Less fanfare, more focus.
                </p>
                
                <p>
                  That's the part people don't always talk about — and the part that actually defines mastery.
                </p>
                
                <p>
                  It's not just about adding more weight or shipping more features.
                </p>
                
                <p className="font-medium">
                  It's about learning to hone your form.
                </p>
                
                <p>
                  In lifting, that might mean dialing in your brace, fixing a subtle shift in your squat, or finally feeling your lats engage in a deadlift.
                </p>
                
                <p>
                  In product, it's refining an initiative until it truly solves the right problem — not just adds to the roadmap.
                </p>
                
                <p className="font-medium">
                  You start to realize: Reps aren't just about volume.
                </p>
                
                <p className="font-medium">
                  They're about attention.
                </p>
                
                <p>
                  That's what makes progress sustainable.
                </p>
                
                <p className="text-lg font-medium text-army dark:text-destructive">
                  And that's what Mission Built is really about — building better products, one rep at a time.
                </p>
              </div>
            </section>

            <section id="consistency" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">The Power of Consistency</h2>
              <p className="text-slate/80 dark:text-slate-300 mb-4">
                Building strength isn't about perfect workouts or optimal conditions. It's about showing up even when 
                you don't feel like it, especially when you don't feel like it.
              </p>
            </section>

            <section id="progress" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Measuring Real Progress</h2>
              <p className="text-slate/80 dark:text-slate-300 mb-4">
                Progress isn't always visible in the mirror or on the scale. Sometimes it's in the ability to push 
                through when everything tells you to quit. Sometimes it's in the discipline to maintain form when 
                fatigue sets in.
              </p>
            </section>

            <section id="mindset" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">The Rep Mindset</h2>
              <p className="text-slate/80 dark:text-slate-300 mb-4">
                Every rep is a choice. Every set is a commitment. Every workout is a step toward becoming the person 
                you want to be. The magic isn't in the moment - it's in the accumulation of moments.
              </p>
              <p className="text-slate/80 dark:text-slate-300">
                Build through reps. Build through consistency. Build through showing up when it matters most.
              </p>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Log2;
