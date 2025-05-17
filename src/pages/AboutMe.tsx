
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMeSection from "../components/about/AboutMeSection";
import BookSection from "../components/about/BookSection";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* About Me Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">About</h1>
            <p className="text-muted-foreground">
              The person behind MissionBuilt
            </p>
          </div>

          <AboutMeSection />
          <BookSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
