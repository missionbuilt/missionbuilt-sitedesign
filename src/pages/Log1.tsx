
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, BookOpen, Link as LinkIcon } from "lucide-react";

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
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Link 
              to="/chapters" 
              className="inline-flex items-center text-army hover:text-army/80 transition-colors font-medium"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Training Logs
            </Link>
          </div>
          
          {/* Chapter header */}
          <div className="mb-10 text-center">
            <p className="text-muted-foreground mb-2">Log 1</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-slate dark:text-slate-100">
              Mission Before Metrics
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Success isn't the dashboard — it's the user's outcome. A clear breakdown of the User Mission Method.
            </p>
          </div>
          
          {/* Featured image */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Mission Before Metrics" 
                className="w-full h-auto object-cover aspect-video"
              />
              <CardContent className="py-2 px-4 bg-muted/30">
                <p className="text-sm text-muted-foreground italic">
                  Building products that matter requires focusing on user missions, not just metrics.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Chapter reading time and date */}
          <div className="flex items-center justify-between mb-10 text-sm text-muted-foreground">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>12 min read</span>
            </div>
            <div>Published: May 21, 2025</div>
          </div>
          
          {/* Chapter introduction */}
          <div className="mb-10 prose dark:prose-invert max-w-none">
            <p className="lead text-lg">
              In the world of product development and strength training, we often become slaves to metrics. We chase 
              numbers on dashboards, rep counts, and weight on the bar — all while forgetting the fundamental 
              question: <strong>What mission are these metrics supposed to serve?</strong>
            </p>
          </div>
          
          {/* Table of contents */}
          <Card className="mb-10">
            <CardContent className="p-6">
              <h2 className="text-xl font-display font-semibold mb-4">In this log:</h2>
              <ScrollArea className="h-auto max-h-52">
                <ul className="space-y-2">
                  <li>
                    <Link to="#section-1" className="text-army hover:underline">The Metrics Trap</Link>
                  </li>
                  <li>
                    <Link to="#section-2" className="text-army hover:underline">User Mission Method</Link>
                  </li>
                  <li>
                    <Link to="#section-3" className="text-army hover:underline">Building With Purpose</Link>
                  </li>
                  <li>
                    <Link to="#section-4" className="text-army hover:underline">Putting It Into Practice</Link>
                  </li>
                  <li>
                    <Link to="#resources" className="text-army hover:underline">Resources & Further Reading</Link>
                  </li>
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
          
          {/* Section 1 */}
          <div id="section-1" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-slate dark:text-slate-100">
              The Metrics Trap
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                We've all been there: staring at dashboards, obsessing over conversion rates, session duration, or weekly active users. 
                In the gym, it's not much different — fixating on adding five pounds to our bench press or hitting a specific number of reps.
              </p>
              
              <p>
                But metrics without mission are just numbers. They become hollow achievements that might look impressive but 
                ultimately fail to create lasting value. The problem is rarely the metrics themselves — it's forgetting why 
                we're measuring them in the first place.
              </p>
              
              <blockquote>
                "When a measure becomes a target, it ceases to be a good measure." — Goodhart's Law
              </blockquote>
            </div>
            
            {/* Section 1 image */}
            <div className="my-8">
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Metrics dashboard" 
                  className="w-full h-auto object-cover aspect-video"
                />
                <CardContent className="py-2 px-4 bg-muted/30">
                  <p className="text-sm text-muted-foreground italic">
                    Metrics are important tools, but they shouldn't be the mission themselves.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Think about it: what good is a 400-pound deadlift if it comes with chronic back pain? What good is a 30% increase in user 
                registrations if none of those users stick around to achieve their goals with your product?
              </p>
            </div>
          </div>
          
          {/* Section 2 */}
          <div id="section-2" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-slate dark:text-slate-100">
              User Mission Method
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The User Mission Method flips the traditional product development approach on its head. Instead of starting 
                with features or metrics, we start with a simple question: <strong>What mission is our user trying to accomplish?</strong>
              </p>
              
              <p>
                Whether they're trying to get stronger, learn a new skill, or streamline their business operations, users come to your 
                product with a mission in mind. Your job isn't to make them use your features; it's to help them complete their mission.
              </p>
              
              <h3>The Three Principles:</h3>
              
              <ol>
                <li><strong>Define the mission clearly</strong> — What is the user truly trying to accomplish?</li>
                <li><strong>Measure mission progress</strong> — How do we know if users are getting closer to their goal?</li>
                <li><strong>Remove mission obstacles</strong> — What's getting in the way of users accomplishing their mission?</li>
              </ol>
            </div>
            
            {/* Section 2 image */}
            <div className="my-8">
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="User focused design" 
                  className="w-full h-auto object-cover aspect-video"
                />
                <CardContent className="py-2 px-4 bg-muted/30">
                  <p className="text-sm text-muted-foreground italic">
                    Focus on the user's mission, not just engagement metrics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Section 3 */}
          <div id="section-3" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-slate dark:text-slate-100">
              Building With Purpose
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                When you understand the user's mission, everything else falls into place. Features become tools for mission completion 
                rather than shiny objects meant to impress. Metrics become indicators of mission progress rather than vanity numbers.
              </p>
              
              <p>
                This approach mirrors how the best strength coaches operate. They don't just throw weights on the bar to hit arbitrary 
                numbers; they program with your specific goals in mind, whether that's competition performance, general health, or 
                aesthetic improvements.
              </p>
              
              <blockquote>
                "If you're not serving the user's mission, you're just a feature looking for a purpose."
              </blockquote>
              
              <h3>Examples in Practice:</h3>
              <ul>
                <li><strong>Instead of:</strong> "We need to increase session duration."<br/>
                <strong>Try:</strong> "We need to help users complete their research more effectively."</li>
                <li><strong>Instead of:</strong> "Let's add gamification to increase engagement."<br/>
                <strong>Try:</strong> "Let's make the core mission more achievable and satisfying."</li>
              </ul>
            </div>
          </div>
          
          {/* Section 4 */}
          <div id="section-4" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-slate dark:text-slate-100">
              Putting It Into Practice
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To apply the User Mission Method to your product development process:
              </p>
              
              <ol>
                <li><strong>Interview your best users</strong> — Ask them not what they like about your product, but what mission they're trying to accomplish with it.</li>
                <li><strong>Map the mission journey</strong> — What steps do users take to complete their mission? Where do they struggle?</li>
                <li><strong>Align your metrics</strong> — Choose metrics that reflect mission progress, not just product usage.</li>
                <li><strong>Ruthlessly prioritize</strong> — Every feature should directly support the user's mission.</li>
                <li><strong>Test against the mission</strong> — When evaluating new features or changes, the first question should be: "How does this help users complete their mission?"</li>
              </ol>
              
              <p>
                The true power of the User Mission Method is that it creates a virtuous cycle: When users successfully accomplish their missions, they become advocates. They stick around longer, buy more, and tell others about their success.
              </p>
            </div>
            
            {/* Section 4 image */}
            <div className="my-8">
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="User solving a problem" 
                  className="w-full h-auto object-cover aspect-video"
                />
                <CardContent className="py-2 px-4 bg-muted/30">
                  <p className="text-sm text-muted-foreground italic">
                    Success means helping users accomplish their missions effectively.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Resources section */}
          <div id="resources" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-slate dark:text-slate-100">
              Resources & Further Reading
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <LinkIcon className="h-5 w-5 mr-2 mt-0.5 text-army" />
                    <span>
                      <a href="https://hbr.org/2016/09/know-your-customers-jobs-to-be-done" className="text-army hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                        Jobs to Be Done Framework
                      </a>
                      <p className="text-sm text-muted-foreground">Harvard Business Review article on understanding user needs</p>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <LinkIcon className="h-5 w-5 mr-2 mt-0.5 text-army" />
                    <span>
                      <a href="https://www.amazon.com/Inspired-Create-Tech-Products-Customers/dp/1119387507" className="text-army hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                        "Inspired: How to Create Tech Products Customers Love"
                      </a>
                      <p className="text-sm text-muted-foreground">Book by Marty Cagan on product development</p>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <LinkIcon className="h-5 w-5 mr-2 mt-0.5 text-army" />
                    <span>
                      <a href="https://www.startingstrength.com" className="text-army hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                        Starting Strength
                      </a>
                      <p className="text-sm text-muted-foreground">Resource on strength training fundamentals</p>
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Next/Previous chapter navigation */}
          <div className="mt-12 pt-8 border-t border-slate/10">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <span className="block text-sm text-muted-foreground mb-1">Next Log</span>
                <Link to="/log/2" className="text-army hover:text-army/80 font-display font-semibold">
                  Built Through Reps
                </Link>
              </div>
              
              <Link 
                to="/chapters" 
                className="px-5 py-2 text-army border border-army/30 rounded-lg hover:bg-army/5 transition-colors"
              >
                All Training Logs
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Log1;
