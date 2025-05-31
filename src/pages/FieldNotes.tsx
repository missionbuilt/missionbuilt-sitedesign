
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FieldNotes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Field Notes - MissionBuilt</title>
        <meta name="description" content="Table of contents for all field notes and chapters" />
      </Helmet>
      
      <Navbar />
      
      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Field Notes</h1>
          </header>
          
          {/* Table of contents will be populated here */}
          <div className="space-y-6">
            {/* Chapter entries will be added here */}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FieldNotes;
