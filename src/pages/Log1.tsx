
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogHeader from "../components/log/LogHeader";
import LogFeaturedImage from "../components/log/LogFeaturedImage";
import LogIntroduction from "../components/log/LogIntroduction";
import LogTableOfContents from "../components/log/LogTableOfContents";
import LogNavigation from "../components/log/LogNavigation";
import MissionMagnetSection from "../components/log/sections/MissionMagnetSection";
import TheDriftSection from "../components/log/sections/TheDriftSection";
import RitualsOverRulesSection from "../components/log/sections/RitualsOverRulesSection";

const Log1 = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, []);

  // Table of contents data
  const tocItems = [
    {
      id: "section-1",
      title: "The Mission Is the Magnet",
      subsections: [
        { id: "more-than-intentions", title: "More Than Just Good Intentions" },
        { id: "metrics-eclipse-meaning", title: "When Metrics Eclipse Meaning" },
        { id: "fulfillment-flywheel", title: "The Fulfillment Flywheel" }
      ]
    },
    {
      id: "section-2",
      title: "The Drift"
    },
    {
      id: "section-3",
      title: "Rituals Over Rules"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <LogHeader 
          title="Mission Before Metrics" 
          author="Author Name"
          publishedDate="Published Date"
          category="Category"
        />
        
        <LogFeaturedImage 
          imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
          imageAlt="Featured Image"
          caption="Featured image caption"
        />
        
        {/* Table of contents - mobile collapsible, desktop fixed */}
        <div className="lg:flex gap-8 relative">
          {/* Main content area */}
          <div className="lg:w-3/4">
            <LogIntroduction summary="This is where a brief summary or introduction would go." />
            
            {/* Content sections */}
            <div className="prose dark:prose-invert max-w-none">
              <MissionMagnetSection />
              <TheDriftSection />
              <RitualsOverRulesSection />
            </div>
            
            <LogNavigation />
          </div>
          
          {/* Sidebar - TOC, related posts, etc. */}
          <div className="hidden lg:block lg:w-1/4 sticky top-24 self-start">
            <LogTableOfContents items={tocItems} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Log1;
