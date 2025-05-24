
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Log2: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Built Through Reps | Training Log</title>
        <meta name="description" content="A training log about building strength through consistent repetition and intentional practice." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              to="/chapters" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Chapters
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate dark:text-slate-100">
              Built Through Reps
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
              <div className="flex items-center text-sm">
                <User className="h-4 w-4 mr-1" />
                <span>Training Log</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>May 24, 2025</span>
              </div>
            </div>
          </header>

          {/* Content will be added here */}
          <article className="prose prose-lg max-w-none">
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-xl">Content coming soon...</p>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Log2;
