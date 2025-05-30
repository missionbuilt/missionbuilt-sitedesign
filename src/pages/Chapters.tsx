
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChaptersHeader from "@/components/chapters/ChaptersHeader";
import TableOfContents from "@/components/chapters/TableOfContents";
import { chapters } from "@/data/chapters-data";

const Chapters = () => {
  // Automatically scroll to the top when this component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, []);

  const pageTitle = "Table of Contents | Mission Built: Lessons from the Barbell and the Boardroom";
  const pageDescription = "An open-source book exploring how product leadership and powerlifting share the same foundation: discipline, mission, and care. New chapters weekly.";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Mission Built: Lessons from the Barbell and the Boardroom" />
        <meta property="og:description" content="An open-source book exploring how product leadership and powerlifting share the same foundation: discipline, mission, and care. New chapters weekly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://missionbuilt.io" />
        <meta property="og:image" content="https://missionbuilt.io/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="MissionBuilt.io" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@missionbuilt" />
        <meta name="twitter:title" content="Mission Built: Lessons from the Barbell and the Boardroom" />
        <meta name="twitter:description" content="An open-source book exploring how product leadership and powerlifting share the same foundation: discipline, mission, and care. New chapters weekly." />
        <meta name="twitter:image" content="https://missionbuilt.io/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Book Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-slate dark:text-slate-100">
              Mission Built
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-8">
              Lessons from the Barbell and the Boardroom
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          {/* Table of Contents */}
          <TableOfContents chapters={chapters} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapters;
