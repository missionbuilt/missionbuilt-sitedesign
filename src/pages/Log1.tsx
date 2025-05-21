import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft } from "lucide-react";

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
          
          {/* Chapter header - empty but keeping structure */}
          <div className="mb-10 text-center">
            <p className="text-muted-foreground mb-2">Log 1</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-slate dark:text-slate-100">
              
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              
            </p>
          </div>
          
          {/* Featured image - empty but keeping structure */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              
            </Card>
          </div>
          
          {/* Chapter reading time and date - empty but keeping structure */}
          <div className="flex items-center justify-between mb-10 text-sm text-muted-foreground">
            <div className="flex items-center">
              
            </div>
            <div></div>
          </div>
          
          {/* Chapter content area - empty but keeping structure */}
          <div className="mb-16">
            
          </div>
          
          {/* Next/Previous chapter navigation - empty but keeping structure */}
          <div className="mt-12 pt-8 border-t border-slate/10">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                
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
