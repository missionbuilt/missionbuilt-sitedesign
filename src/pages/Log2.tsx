
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
                  <a href="#foundation" className="block text-sm text-slate/70 dark:text-slate-300 hover:text-slate dark:hover:text-slate-100 transition-colors">
                    Building the Foundation
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
                </nav>
              </Card>
            </div>
          </div>

          {/* Content sections */}
          <article className="prose prose-lg max-w-none prose-slate dark:prose-invert">
            <section id="foundation" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Building the Foundation</h2>
              <p className="text-slate/80 dark:text-slate-300 mb-4">
                Every great achievement starts with a single rep. Whether it's in the gym, in your career, or in life, 
                progress comes from showing up consistently and putting in the work, one repetition at a time.
              </p>
              <p className="text-slate/80 dark:text-slate-300 mb-4">
                The image captures this perfectly - a moment of quiet determination in a garage gym where real work happens. 
                No fancy equipment, no distractions, just pure focus on the fundamentals.
              </p>
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
