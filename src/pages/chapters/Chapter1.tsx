
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Chapter1 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Chapter 1 - MissionBuilt</title>
        <meta name="description" content="Chapter 1 content" />
      </Helmet>
      
      <Navbar />
      
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
            {/* Chapter content will go here */}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapter1;
