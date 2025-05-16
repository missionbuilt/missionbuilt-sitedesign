
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container-custom text-center">
          <div className="max-w-md mx-auto">
            <span className="text-9xl font-display font-bold text-steel">404</span>
            <h1 className="heading-md mt-6 mb-4">Page Not Found</h1>
            <p className="text-slate/70 mb-8">
              The page you're looking for doesn't seem to exist or has been moved.
            </p>
            <a href="/" className="btn-primary inline-flex items-center">
              Back to Home
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
