
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { format } from 'date-fns';

const Privacy = () => {
  // Format today's date as Month Day, Year (e.g. May 17, 2025)
  const formattedDate = format(new Date(), 'MMMM d, yyyy');
  
  // Function to handle scrolling to top when links are clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to scroll to a specific section by ID
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      scrollToTop(); // Fallback to scrolling to top if section not found
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Terms of Service | MissionBuilt</title>
        <meta name="description" content="Terms of Service for MissionBuilt.io" />
      </Helmet>

      <Navbar />
      
      <main className="container-custom py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <h1 className="heading-lg mb-6">Terms of Service</h1>
            
            <p className="text-slate/60 dark:text-slate-400">
              Last updated: {formattedDate}
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="mb-6 text-lg">
              Welcome to MissionBuilt.io, a personal project dedicated to exploring the intersection of product management and powerlifting — because building strength, in any form, is a mission.
            </p>

            <p className="mb-12 text-lg">
              By accessing or using this site, you agree to the following terms. If you don't agree, that's okay — but please don't use the site.
            </p>
            
            <section id="use-freely" className="mb-12 bg-slate/5 dark:bg-slate/10 p-6 rounded-xl border border-slate/10 dark:border-slate/20 shadow-sm">
              <h2 className="text-2xl font-display font-semibold mb-4 text-slate dark:text-slate-100">1. Use Freely, Attribute Kindly</h2>
              <div className="space-y-4">
                <p className="mb-4">
                  The content here, including blog posts, articles, and the open-source book "The Unity of Product & Power", is shared under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
                </p>
                
                <p className="mb-4">
                  <strong>In short:</strong><br />
                  You're welcome to read, share, and remix the content — just don't sell it, and please give credit. If you build upon it, share it under the same license. A link back is love.
                </p>
                
                <p className="mb-4">
                  More info on the license: <a href="https://creativecommons.org/licenses/by-nc-sa/4.0" target="_blank" rel="noopener noreferrer" className="text-army hover:underline" onClick={scrollToTop}>creativecommons.org/licenses/by-nc-sa/4.0</a>
                </p>
              </div>
            </section>
            
            <section id="no-professional-advice" className="mb-12 bg-slate/5 dark:bg-slate/10 p-6 rounded-xl border border-slate/10 dark:border-slate/20 shadow-sm">
              <h2 className="text-2xl font-display font-semibold mb-4 text-slate dark:text-slate-100">2. No Professional Advice</h2>
              <div className="space-y-4">
                <p className="mb-4">
                  This site blends personal experience from decades in product leadership and the discipline of strength training. But it's not professional product consulting or fitness coaching. Any actions you take based on this content are your own responsibility.
                </p>
                
                <p className="mb-4">
                  Always listen to your body. And your users.
                </p>
              </div>
            </section>
            
            <section id="contributions" className="mb-12 bg-slate/5 dark:bg-slate/10 p-6 rounded-xl border border-slate/10 dark:border-slate/20 shadow-sm">
              <h2 className="text-2xl font-display font-semibold mb-4 text-slate dark:text-slate-100">3. Contributions and Feedback</h2>
              <div className="space-y-4">
                <p className="mb-4">
                  If you submit feedback, edits, or ideas — thank you. You grant MissionBuilt.io a non-exclusive right to use and publish that content. You still own it, but we can build with it.
                </p>
                
                <p className="mb-4">
                  We don't accept unsolicited product pitches, growth hacks, or miracle supplements.
                </p>
              </div>
            </section>
            
            <section id="respect-mission" className="mb-12 bg-slate/5 dark:bg-slate/10 p-6 rounded-xl border border-slate/10 dark:border-slate/20 shadow-sm">
              <h2 className="text-2xl font-display font-semibold mb-4 text-slate dark:text-slate-100">4. Respect the Mission</h2>
              <div className="space-y-4">
                <p className="mb-4">
                  Please don't do anything that would harm the site, the author, or the community. That includes hacking, spamming, copying content without attribution, or being a jerk.
                </p>
              </div>
            </section>
            
            <section id="analytics" className="mb-12 bg-slate/5 dark:bg-slate/10 p-6 rounded-xl border border-slate/10 dark:border-slate/20 shadow-sm">
              <h2 className="text-2xl font-display font-semibold mb-4 text-slate dark:text-slate-100">5. Analytics and Privacy</h2>
              <div className="space-y-4">
                <p className="mb-4">
                  We may use basic analytics (like Google Analytics or Plausible) to understand how the site is used. We don't sell your data. If we add a newsletter, it'll be opt-in only — and you can unsubscribe any time.
                </p>
              </div>
            </section>
            
            <section id="changes" className="mb-12 bg-slate/5 dark:bg-slate/10 p-6 rounded-xl border border-slate/10 dark:border-slate/20 shadow-sm">
              <h2 className="text-2xl font-display font-semibold mb-4 text-slate dark:text-slate-100">6. This May Change</h2>
              <div className="space-y-4">
                <p className="mb-4">
                  This project is alive — just like you. Terms may be updated occasionally. We'll timestamp the latest version. Keep checking back if that matters to you.
                </p>
              </div>
            </section>
            
            <section id="contact" className="mb-12 bg-slate/5 dark:bg-slate/10 p-6 rounded-xl border border-slate/10 dark:border-slate/20 shadow-sm">
              <h2 className="text-2xl font-display font-semibold mb-4 text-slate dark:text-slate-100">7. Contact</h2>
              <div className="space-y-4">
                <p className="mb-4">
                  Questions, concerns, or brilliant ideas?<br />
                  Bluesky: <a href="https://bsky.app/profile/missionbuilt.bsky.social" className="text-army hover:underline" onClick={scrollToTop}>missionbuilt.bsky.social</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Privacy;
