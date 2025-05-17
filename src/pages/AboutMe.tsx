
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
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
              The person behind Forged Under Load
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <Avatar className="w-40 h-40 border-4 border-primary/10">
              <AvatarFallback className="text-5xl">FUL</AvatarFallback>
            </Avatar>

            <Card className="w-full bg-card shadow-md border border-slate/10">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Hello there!</h2>
                <div className="space-y-4 text-slate dark:text-slate-200">
                  <p>
                    I'm passionate about the intersection of product development and strength training. 
                    Through Forged Under Load, I explore how principles from both worlds complement and 
                    reinforce each other.
                  </p>
                  <p>
                    My journey began when I noticed striking similarities between building great products 
                    and building physical strength. Both require consistent effort, thoughtful planning, 
                    and a willingness to learn from failure.
                  </p>
                  <p>
                    When I'm not writing or lifting, you might find me enjoying time outdoors, 
                    reading widely across disciplines, or experimenting with new approaches to 
                    old problems.
                  </p>
                  <p>
                    Thanks for joining me on this journey. I believe that the principles shared here 
                    can help anyone build better — whether you're building products, strength, or 
                    anything meaningful in life.
                  </p>
                </div>

                <div className="mt-8 flex justify-center">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Get in touch
                  </Button>
                </div>
              </CardContent>
            </Card>

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
