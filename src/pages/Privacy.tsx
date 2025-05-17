
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | MissionBuilt</title>
        <meta name="description" content="Privacy Policy for MissionBuilt.io" />
      </Helmet>

      <Navbar />
      
      <main className="container-custom py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-lg mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate/60 dark:text-slate-400 mb-8">
              Last updated: [Insert Date]
            </p>

            <p className="mb-6">
              Welcome to MissionBuilt.io, a personal project dedicated to exploring the intersection of product management and powerlifting — because building strength, in any form, is a mission.
            </p>

            <p className="mb-12">
              By accessing or using this site, you agree to the following terms. If you don't agree, that's okay — but please don't use the site.
            </p>
            
            {/* Additional content can be added here by the user later */}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Privacy;
