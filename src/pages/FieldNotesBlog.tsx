
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';

const FieldNotesBlog = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Field Notes - MissionBuilt</title>
        <meta name="description" content="Ongoing reflections beyond Mission Built - blog posts, insights, and updates" />
      </Helmet>
      
      <Navbar />
      
      <main className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-medium text-muted-foreground mb-2 dark:text-slate-400">Ongoing Reflections Beyond Mission Built</h2>
                <h1 className="text-4xl font-bold text-foreground mb-4 dark:text-slate-100">Field Notes</h1>
              </div>
            </div>
          </header>
          
          {/* Welcome Blurb */}
          <div className="mb-8 bg-slate/5 dark:bg-slate/10 border border-slate/10 dark:border-slate/20 rounded-lg p-6">
            <p className="text-foreground dark:text-slate-200 leading-relaxed">
              Welcome to Field Notes — a living collection of blog posts, insights, and updates that extend the lessons of Mission Built into the ever-evolving challenges of product leadership and strength training.
              Here, you'll find practical ideas, fresh experiments, and real-world stories that build on the book's chapters, helping you stay aligned with your mission as you grow, adapt, and lead.
            </p>
          </div>
          
          {/* Coming Soon Message */}
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-slate/10 dark:bg-slate/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate/60 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground dark:text-slate-100 mb-2">
                  Field Notes Coming Soon
                </h3>
                <p className="text-muted-foreground dark:text-slate-300 mb-4">
                  We're preparing thoughtful content that builds on the Mission Built philosophy. 
                  Check back soon for insights on product leadership, strength training, and mission-driven growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FieldNotesBlog;
