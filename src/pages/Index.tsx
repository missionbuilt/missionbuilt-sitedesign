
import HeroSection from "../components/HeroSection";
import NewsletterSignup from "../components/NewsletterSignup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyThisWhyNow from "../components/WhyThisWhyNow";
import BookUniqueAspects from "../components/BookUniqueAspects";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <BookUniqueAspects />
        <WhyThisWhyNow />
        <NewsletterSignup />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
