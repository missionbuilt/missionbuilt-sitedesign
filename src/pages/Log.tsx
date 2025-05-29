
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogContent from "@/components/log/LogContent";

const Log = () => {
  const { id } = useParams<{ id: string }>();
  const logId = parseInt(id || "1", 10);
  
  // Scroll to top when component mounts or when log ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [logId]);
  
  // Create chapter data based on the log ID
  const getChapterData = (id: number) => {
    const chapters = [
      {
        id: 1,
        title: "Mission Before Metrics",
        description: "Mission-driven work outlasts short-term wins. This chapter defines the book's core philosophy.",
        slug: "mission-before-metrics",
        status: "in-progress" as const
      },
      {
        id: 2,
        title: "Built Through Reps",
        description: "Progress is earned through intentional repetition. It's not about genius — it's about doing the work.",
        slug: "built-through-reps",
        status: "in-progress" as const
      },
      {
        id: 3,
        title: "Rituals Over Rules",
        description: "Adaptable routines create long-term resilience. Rules can be broken — rituals evolve.",
        slug: "rituals-over-rules",
        status: "in-progress" as const
      }
    ];
    
    return chapters.find(c => c.id === id);
  };
  
  const chapter = getChapterData(logId);
  
  if (!chapter) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Helmet>
          <title>Log Not Found | Mission Built: Lessons from the Barbell and the Boardroom</title>
          <meta property="og:title" content="Mission Built: Lessons from the Barbell and the Boardroom" />
          <meta property="og:description" content="An open-source book exploring how product leadership and powerlifting share the same foundation: discipline, mission, and care. New chapters weekly." />
        </Helmet>
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Log Not Found</h1>
            <p className="text-muted-foreground">The requested training log could not be found.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const pageTitle = `Training Log ${chapter.id}: ${chapter.title} | Mission Built: Lessons from the Barbell and the Boardroom`;
  const pageDescription = chapter.description;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Mission Built: Lessons from the Barbell and the Boardroom" />
        <meta property="og:description" content="An open-source book exploring how product leadership and powerlifting share the same foundation: discipline, mission, and care. New chapters weekly." />
        <meta property="og:type" content="article" />
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
        
        {/* Article specific tags */}
        <meta property="article:author" content="MissionBuilt.io" />
        <meta property="article:section" content="Product Management" />
        <meta property="article:tag" content="Product Management" />
        <meta property="article:tag" content="Leadership" />
        <meta property="article:tag" content="Powerlifting" />
      </Helmet>
      <Navbar />
      <LogContent chapter={chapter} />
      <Footer />
    </div>
  );
};

export default Log;
