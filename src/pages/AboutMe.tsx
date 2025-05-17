
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMeSection from "../components/about/AboutMeSection";
import BookSection from "../components/about/BookSection";
import { Button } from "@/components/ui/button";

const AboutMe = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
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
