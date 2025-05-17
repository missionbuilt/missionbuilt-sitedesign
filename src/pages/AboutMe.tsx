
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-muted-foreground">
              The person behind MissionBuilt
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8">
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
