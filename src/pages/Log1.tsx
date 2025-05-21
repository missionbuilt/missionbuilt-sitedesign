
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
            <p className="mb-4">
              Before diving into the details of program design, exercise selection, and the myriad of 
              metrics that'll inevitably follow, I need to establish something more fundamental: 
              <strong>why I'm doing this in the first place</strong>.
            </p>
            
            <p className="mb-4">
              Every sustainable training journey begins not with a perfect plan but with a 
              compelling mission. The mission is what pulls you toward consistent action when 
              motivation wanes, when obstacles arise, and when the path ahead becomes 
              unclear.
            </p>
            
            <p className="mb-4">
              For me, this mission extends beyond simply adding pounds to a barbell or 
              inches to my frame. It's about proving that intentional, intelligent physical 
              training can be a transformative practice that enhances every other aspect of life.
            </p>
            
            <p className="mb-8">
              When the alarm goes off at 5 AM and the comfort of bed seems infinitely more 
              appealing than the cold iron waiting in the garage, it's not discipline alone that 
              gets me moving. It's the magnetism of the mission—the vision of becoming stronger 
              not just physically, but mentally and emotionally as well.
            </p>
          </LogContent>
          
          <LogNavigation />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Log1;
