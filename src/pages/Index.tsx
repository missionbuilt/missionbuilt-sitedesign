
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyThisWhyNow from "../components/WhyThisWhyNow";
import BookUniqueAspects from "../components/BookUniqueAspects";
import CallToAction from "../components/CallToAction";
import FeaturedLogs from "../components/FeaturedLogs";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>MissionBuilt.io | The Mission</title>
        <meta name="description" content="An open-source book exploring how product leadership and powerlifting intersect." />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="MissionBuilt.io | The Mission" />
        <meta property="og:description" content="An open-source book exploring how product leadership and powerlifting intersect." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://missionbuilt.io" />
        <meta property="og:image" content="https://missionbuilt.io/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="MissionBuilt.io" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@missionbuilt" />
        <meta name="twitter:title" content="MissionBuilt.io | The Mission" />
        <meta name="twitter:description" content="An open-source book exploring how product leadership and powerlifting intersect." />
        <meta name="twitter:image" content="https://missionbuilt.io/og-image.png" />
      </Helmet>
      
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
