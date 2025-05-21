
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChevronLeft } from "lucide-react";
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
                <AvatarImage src="/placeholder.svg" alt="Author" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <span className="text-sm">Author Name</span>
            </div>
            <div className="text-sm">Published Date</div>
            <div className="text-sm px-2 py-1 bg-slate/10 dark:bg-slate/20 rounded-full">Category</div>
          </div>
        </div>
        
        {/* Featured image */}
        <div className="mb-10">
          <Card className="overflow-hidden border-0 shadow-md">
            <AspectRatio ratio={21/9}>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Featured Image"
                className="object-cover w-full h-full" 
              />
            </AspectRatio>
            <CardContent className="p-2 text-center text-xs text-slate/70 dark:text-slate-400">
              Featured image caption
            </CardContent>
          </Card>
        </div>
        
        {/* Table of contents - mobile collapsible, desktop fixed */}
        <div className="lg:flex gap-8 relative">
          {/* Main content area */}
          <div className="lg:w-3/4">
            {/* Summary/Introduction card */}
            <Alert className="mb-8 bg-slate/5 dark:bg-slate/10">
              <AlertDescription className="text-base italic">
                This is where a brief summary or introduction would go.
              </AlertDescription>
            </Alert>
            
            {/* Content sections */}
            <div className="prose dark:prose-invert max-w-none">
              {/* Section 1 placeholder */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-slate dark:text-slate-100 mb-4">
                  Section 1
                </h2>
                <div className="h-40 bg-slate/5 dark:bg-slate/10 rounded-lg flex items-center justify-center">
                  <p className="text-slate/50 dark:text-slate-400">Content for section 1</p>
                </div>
              </div>
              
              {/* Section 2 placeholder */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-slate dark:text-slate-100 mb-4">
                  Section 2
                </h2>
                <div className="h-40 bg-slate/5 dark:bg-slate/10 rounded-lg flex items-center justify-center">
                  <p className="text-slate/50 dark:text-slate-400">Content for section 2</p>
                </div>
              </div>
              
              {/* Section 3 placeholder */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-slate dark:text-slate-100 mb-4">
                  Section 3
                </h2>
                <div className="h-40 bg-slate/5 dark:bg-slate/10 rounded-lg flex items-center justify-center">
                  <p className="text-slate/50 dark:text-slate-400">Content for section 3</p>
                </div>
              </div>
            </div>
            
            {/* Next/Previous navigation */}
            <div className="mt-16 pt-8 border-t border-slate/10 dark:border-slate/20 flex justify-between">
              <div>
                {/* This would be the previous log link if available */}
              </div>
              <div>
                <Link 
                  to="/chapters"
                  className="btn-army inline-flex"
                >
                  All Training Logs
                </Link>
              </div>
              <div>
                {/* This would be the next log link if available */}
              </div>
            </div>
          </div>
          
          {/* Sidebar - TOC, related posts, etc. */}
          <div className="hidden lg:block lg:w-1/4 sticky top-24 self-start">
            <Card className="p-4">
              <h3 className="font-display font-semibold mb-4 text-lg text-slate dark:text-slate-100">
                Table of Contents
              </h3>
              <ul className="space-y-2 text-slate/80 dark:text-slate-300">
                <li>
                  <a href="#" className="hover:text-army transition-colors">Section 1</a>
                </li>
                <li>
                  <a href="#" className="hover:text-army transition-colors">Section 2</a>
                </li>
                <li>
                  <a href="#" className="hover:text-army transition-colors">Section 3</a>
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
