
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContentEditor from '@/components/ContentEditor';

const Chapter1 = () => {
  const handleContentSave = (content: string) => {
    // In a real application, you might save this to localStorage, a database, etc.
    console.log('Content saved:', content);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Chapter 1 - MissionBuilt</title>
        <meta name="description" content="Chapter 1 content" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Image Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="/lovable-uploads/e090226a-c451-4cfe-82ff-2d1c054040ae.png"
          alt="Chapter 1 Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Link 
            to="/about" 
            className="text-sunburst hover:text-sunburst/80 transition-colors text-lg font-medium mb-2"
          >
            by Mike
          </Link>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            Mission Before Metrics
          </h1>
          <div className="flex items-center text-white/90 text-sm font-medium">
            <Calendar className="w-4 h-4 mr-2" />
            Published May 25th, 2025
          </div>
        </div>
      </div>
      
      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/field-notes" 
            className="inline-flex items-center text-army hover:text-army/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Field Notes
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Chapter 1</h1>
          </header>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <ContentEditor 
              initialContent=""
              onSave={handleContentSave}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapter1;
