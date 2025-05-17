
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, Github, Book, Target, Award, Users, Bot } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* About Me Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">About</h1>
            <p className="text-muted-foreground">
              The person behind MissionBuilt
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 mb-16">
            <Avatar className="w-40 h-40 border-4 border-primary/10">
              <AvatarFallback className="text-5xl">MB</AvatarFallback>
            </Avatar>

            <Card className="w-full bg-card shadow-md border border-slate/10">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Hi, I'm Mike</h2>
                <div className="space-y-6 text-slate dark:text-slate-200">
                  <p className="text-lg">
                    A product leader by trade, a powerlifter by obsession, and a father before all else.
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Journey</h3>
                    <p>
                      I've spent over 20 years in cybersecurity, from early days as an intelligence analyst in the U.S. Army to leading the vision for Elastic Security as VP of Product. Along the way, I've helped build, ship, and scale security solutions by sticking to one core belief: we win when our users do. Whether I'm mentoring teams or shaping roadmaps, my product philosophy is rooted in empathy, mission, and execution. I've never believed in building for metrics — I build for outcomes.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Beyond Work</h3>
                    <p>
                      Outside of work, I'm a USAPL-certified powerlifting coach and a not-so-serious competitive lifter. My platform may be unofficial, but my PR board is sacred. I train in the garage gym I've been obsessively building for years — a personal cathedral of steel and sweat. It's where I reset, get stronger, and connect with the people I love. The home gym is more than racks and rep schemes; it's a space that keeps my body sharp and my mind clearer than any meeting ever could.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Family</h3>
                    <p>
                      I'm a proud and lucky dad who learned the meaning of unconditional love the moment they arrived. They've taught me more about patience, play, and perspective than any product launch ever could.
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-medium">
                      What you'll get from me — whether in my work, my writing, or my life — is honesty, heart, and a little bit of barbell grit. I don't pretend to have all the answers, but I show up, give a shit, and do the reps. Every day.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Get in touch
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-4 mt-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Button>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="sm">Blog</Button>
              <Button variant="ghost" size="sm">Speaking</Button>
              <Button variant="ghost" size="sm">Chapters</Button>
            </div>
          </div>

          {/* About the Book Section - Enhanced with more content and styling */}
          <div className="mt-20 border-t pt-16 border-slate/10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">About the Book</h2>
              <p className="text-muted-foreground">
                The Mission Behind MissionBuilt
              </p>
            </div>
            
            {/* Book Introduction Section */}
            <div className="mb-16">
              <Card className="bg-gradient-to-br from-slate/5 to-army/5 hover:shadow-md transition-shadow duration-300 border border-slate/10 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-3 bg-army/10 rounded-full">
                      <Book className="h-10 w-10 text-army" />
                    </div>
                  </div>
                  
                  <div className="space-y-6 text-slate dark:text-slate-200 leading-relaxed">
                    <p className="text-lg">
                      MissionBuilt was born from a simple idea: that the principles driving successful product teams and driven lifters are more alike than they seem. After decades in both worlds—tech product management and competitive powerlifting—it became clear that each domain thrives on the same core truths: consistency, purpose, and relentless focus on the mission.
                    </p>
                    
                    <p>
                      This project isn't a manifesto. It's not here to tell you how it must be done. It's a personal contribution to the shared pool of knowledge—a new lens for understanding the craft of product leadership, seen through the eyes of the lifter, the builder, the grinder.
                    </p>
                    
                    <p>
                      Some people learn best from frameworks and acronyms. Others need narrative and analogy. MissionBuilt is for the latter. It's product management as told through the chalk-dusted hands of someone who's felt the pressure of a heavy barbell and a tight roadmap.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Project Purpose Section */}
            <div className="mb-16">
              <Card className="bg-gradient-to-br from-army/5 to-slate/5 hover:shadow-md transition-shadow duration-300 border border-slate/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-center">This project exists to:</h3>
                  
                  <ul className="space-y-6 text-slate dark:text-slate-200 list-none">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <p>Offer a free and open-source book that ties together the rigor of product leadership with the discipline of physical training.</p>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <p>Present an alternative philosophy, not a prescriptive method.</p>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <p>Encourage introspection, empathy, and ownership—especially in a world that too often prizes speed over substance.</p>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <p>Share what's been learned from years of building: products, teams, strength, and character.</p>
                    </li>
                  </ul>
                  
                  <p className="mt-8 text-slate dark:text-slate-200 font-medium text-center border-t border-slate/10 pt-6">
                    Most of all, MissionBuilt exists because you might be like me—someone who cares deeply, grinds daily, and believes that strength (in life, in teams, in outcomes) is built, not bought.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Embracing AI Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Embracing AI</h3>
              <Card className="bg-gradient-to-br from-steel/5 to-slate/5 hover:shadow-md transition-shadow duration-300 border border-slate/10">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-steel/10 rounded-full">
                      <Bot className="h-8 w-8 text-steel" />
                    </div>
                  </div>
                  
                  <div className="space-y-6 text-slate dark:text-slate-200 leading-relaxed">
                    <p>
                      We're not just okay with using AI — we depend on it. MissionBuilt is a product of passion, purpose, and pragmatic tooling. AI is our creative amplifier. It's how we move faster without burning out. It's how we stay honest to the mission while still making time for our kids, our training, our teams.
                    </p>
                    
                    <p>
                      This open-source book and everything around it were made with human experience and machine acceleration — not to replace craft, but to respect time. We believe in spending our hours where they matter most: with the users we serve, under the bar, or beside the people we love.
                    </p>
                    
                    <p>
                      AI didn't write this for us. But it helped us write it faster and with fewer excuses. And we're proud of that.
                    </p>
                    
                    <p>
                      So no, this isn't a luddite's blog. It's not a shrine to handcrafted suffering. It's a modern-day field manual forged by a human lifter, builder, and father — built with tools that work.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-10">
              <Button className="bg-army hover:bg-army/90 text-white">
                Join the Waiting List
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
