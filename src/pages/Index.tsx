
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
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className={`flex-grow transition-all duration-500 ease-in-out ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
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
