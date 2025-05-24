
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
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Log2;
