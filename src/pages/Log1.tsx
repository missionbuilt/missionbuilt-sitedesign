
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogHeader from "@/components/logs/LogHeader";
import LogFeaturedImage from "@/components/logs/LogFeaturedImage";
import LogMeta from "@/components/logs/LogMeta";
import LogContent from "@/components/logs/LogContent";
import LogNavigation from "@/components/logs/LogNavigation";

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
          <LogHeader 
            logNumber={1}
            title="Mission Before Metrics"
          />
          
          <LogFeaturedImage />
          
          <LogMeta />
          
          <LogContent>
            <h2 className="text-2xl font-display font-bold mb-6">The Mission Is the Magnet</h2>
          </LogContent>
          
          <LogNavigation />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Log1;
