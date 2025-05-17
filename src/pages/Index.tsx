
import HeroSection from "../components/HeroSection";
import NewsletterSignup from "../components/NewsletterSignup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <NewsletterSignup />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
