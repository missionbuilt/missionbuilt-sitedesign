
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMeSection from "../components/about/AboutMeSection";
import BookSection from "../components/about/BookSection";
import { Button } from "@/components/ui/button";

const AboutMe = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pageTitle = "About Mike | Mission Built: Lessons from the Barbell and the Boardroom";
  const pageDescription = "An open-source book exploring how product leadership and powerlifting share the same foundation: discipline, mission, and care. New chapters weekly.";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Mission Built: Lessons from the Barbell and the Boardroom" />
        <meta property="og:description" content="An open-source book exploring how product leadership and powerlifting share the same foundation: discipline, mission, and care. New chapters weekly." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://missionbuilt.io" />
        <meta property="og:image" content="https://missionbuilt.io/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="MissionBuilt.io" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@missionbuilt" />
        <meta name="twitter:title" content="Mission Built: Lessons from the Barbell and the Boardroom" />
        <meta name="twitter:description" content="An open-source book exploring how product leadership and powerlifting share the same foundation: discipline, mission, and care. New chapters weekly." />
        <meta name="twitter:image" content="https://missionbuilt.io/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png" />
        
        {/* Profile specific tags */}
        <meta property="profile:first_name" content="Mike" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        {/* Two clickable sections at the top */}
        <div className="flex justify-center space-x-8 mb-12">
          <Button 
            variant="outline"
            className="w-full max-w-xs py-8 text-xl font-semibold border-2 hover:bg-slate/5"
            onClick={() => scrollToSection('about-me')}
          >
            About Me
          </Button>
          
          <Button 
            variant="outline"
            className="w-full max-w-xs py-8 text-xl font-semibold border-2 hover:bg-slate/5"
            onClick={() => scrollToSection('about-book')}
          >
            About the Book
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* About Me Section */}
          <div className="text-center mb-10" id="about-me">
            <h1 className="text-4xl font-bold mb-4">About</h1>
            <p className="text-muted-foreground">
              The person behind MissionBuilt
            </p>
          </div>

          <AboutMeSection />

          {/* Book Section with ID for scrolling */}
          <div id="about-book">
            <BookSection />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
