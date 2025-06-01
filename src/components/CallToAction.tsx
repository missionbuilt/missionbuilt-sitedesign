
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  // Function to handle scrolling to top when navigating to a new page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-army/5 dark:bg-army/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-2xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-sunburst/5 dark:bg-sunburst/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-2xl"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-md mb-6">Ready to Start Building Better?</h2>
          
          <div className="bg-gradient-to-br from-slate/5 to-army/5 p-8 md:p-10 rounded-2xl border border-slate/10 mb-8 shadow-sm">
            <p className="body-md mb-8">
              This is more than a book – it's an evolving conversation about how to build products that truly matter. 
              Begin with the field notes, share your thoughts, and help shape where this goes next.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/field-notes" onClick={scrollToTop} className="btn-army flex items-center justify-center gap-2 group animate-fade-in">
                <span>Start Reading</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn-secondary flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
