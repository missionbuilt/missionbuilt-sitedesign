
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyThisWhyNow from "../components/WhyThisWhyNow";
import BookUniqueAspects from "../components/BookUniqueAspects";
import CallToAction from "../components/CallToAction";
import FeaturedLogs from "../components/FeaturedLogs";
import { useEffect } from "react";

const Index = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturedLogs />
        <BookUniqueAspects />
        <WhyThisWhyNow />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
