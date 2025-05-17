
import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyThisWhyNow from "../components/WhyThisWhyNow";
import BookUniqueAspects from "../components/BookUniqueAspects";
import CallToAction from "../components/CallToAction";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Use effect to handle smooth mounting of components
  useEffect(() => {
    // Short timeout to ensure DOM is ready before animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background transition-opacity duration-300 ease-in-out">
      <Navbar />
      
      <main className={`flex-grow ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        <HeroSection />
        <BookUniqueAspects />
        <WhyThisWhyNow />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
