
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
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Open and Free, But With Boundaries</h2>
              <p className="mb-6">
                The content here, including blog posts, articles, and the open-source book "The Unity of Product & Power", is shared under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
              </p>
              
              <p className="mb-6">
                <strong>In short:</strong><br />
                You're welcome to read, share, and remix the content — just don't sell it, and please give credit. If you build upon it, share it under the same license. A link back is love.
              </p>
              
              <p className="mb-6">
                More info on the license: <a href="https://creativecommons.org/licenses/by-nc-sa/4.0" target="_blank" rel="noopener noreferrer" className="text-army hover:underline">creativecommons.org/licenses/by-nc-sa/4.0</a>
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. No Professional Advice</h2>
              <p className="mb-6">
                This site blends personal experience from decades in product leadership and the discipline of strength training. But it's not professional product consulting or fitness coaching. Any actions you take based on this content are your own responsibility.
              </p>
              
              <p className="mb-6">
                Always listen to your body. And your users.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Contributions and Feedback</h2>
              <p className="mb-6">
                If you submit feedback, edits, or ideas — thank you. You grant MissionBuilt.io a non-exclusive right to use and publish that content. You still own it, but we can build with it.
              </p>
              
              <p className="mb-6">
                We don't accept unsolicited product pitches, growth hacks, or miracle supplements.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Respect the Mission</h2>
              <p className="mb-6">
                Please don't do anything that would harm the site, the author, or the community. That includes hacking, spamming, copying content without attribution, or being a jerk.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Analytics and Privacy</h2>
              <p className="mb-6">
                We may use basic analytics (like Google Analytics or Plausible) to understand how the site is used. We don't sell your data. If we add a newsletter, it'll be opt-in only — and you can unsubscribe any time.
              </p>
              
              <p className="mb-6">
                For more details, see our Privacy Policy (coming soon).
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. This May Change</h2>
              <p className="mb-6">
                This project is alive — just like you. Terms may be updated occasionally. We'll timestamp the latest version. Keep checking back if that matters to you.
              </p>
            </section>
            
            {/* Additional content can be added here by the user later */}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Privacy;
