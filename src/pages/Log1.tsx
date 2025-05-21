
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
              Success isn't the dashboard — it's the user's outcome.
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
                  &nbsp;
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Chapter reading time and date */}
          <div className="flex items-center justify-between mb-10 text-sm text-muted-foreground">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>&nbsp;</span>
            </div>
            <div>&nbsp;</div>
          </div>
          
          {/* Chapter introduction */}
          <div className="mb-10 prose dark:prose-invert max-w-none">
            <p className="lead text-lg">
              &nbsp;
            </p>
          </div>
          
          {/* Table of contents */}
          <Card className="mb-10">
            <CardContent className="p-6">
              <h2 className="text-xl font-display font-semibold mb-4">In this log:</h2>
              <ScrollArea className="h-auto max-h-52">
                <ul className="space-y-2">
                  <li>
                    <Link to="#section-1" className="text-army hover:underline">&nbsp;</Link>
                  </li>
                  <li>
                    <Link to="#section-2" className="text-army hover:underline">&nbsp;</Link>
                  </li>
                  <li>
                    <Link to="#section-3" className="text-army hover:underline">&nbsp;</Link>
                  </li>
                  <li>
                    <Link to="#section-4" className="text-army hover:underline">&nbsp;</Link>
                  </li>
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
          
          {/* Section 1 */}
          <div id="section-1" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-slate dark:text-slate-100">
              &nbsp;
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                &nbsp;
              </p>
            </div>
            
            {/* Section 1 image */}
            <div className="my-8">
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="" 
                  className="w-full h-auto object-cover aspect-video"
                />
                <CardContent className="py-2 px-4 bg-muted/30">
                  <p className="text-sm text-muted-foreground italic">
                    &nbsp;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Section 2 */}
          <div id="section-2" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-slate dark:text-slate-100">
              &nbsp;
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                &nbsp;
              </p>
            </div>
            
            {/* Section 2 image */}
            <div className="my-8">
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="" 
                  className="w-full h-auto object-cover aspect-video"
                />
                <CardContent className="py-2 px-4 bg-muted/30">
                  <p className="text-sm text-muted-foreground italic">
                    &nbsp;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Section 3 */}
          <div id="section-3" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-slate dark:text-slate-100">
              &nbsp;
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                &nbsp;
              </p>
            </div>
          </div>
          
          {/* Section 4 */}
          <div id="section-4" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-slate dark:text-slate-100">
              &nbsp;
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                &nbsp;
              </p>
            </div>
          </div>
          
          {/* Next/Previous chapter navigation */}
          <div className="mt-12 pt-8 border-t border-slate/10">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <span className="block text-sm text-muted-foreground mb-1">&nbsp;</span>
                <Link to="/chapters" className="text-army hover:text-army/80 font-display font-semibold">
                  &nbsp;
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
