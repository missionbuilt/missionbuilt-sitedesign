
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChapterHero from "../components/log/ChapterHero";
import ChapterContent from "../components/log/ChapterContent";
import FurtherReading from "../components/log/FurtherReading";
import { chapters, LogContent } from "@/data/chapters-data";
import { loadLogContent } from "@/utils/logLoader";

const Log = () => {
  const { id } = useParams<{ id: string }>();
  const logId = parseInt(id || "1", 10);
  const [logContent, setLogContent] = useState<LogContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Scroll to top when component mounts or when log ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [logId]);

  // Load log content when component mounts or logId changes
  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      const content = await loadLogContent(logId);
      setLogContent(content);
      setIsLoading(false);
    };

    loadContent();
  }, [logId]);
  
  // Find the chapter data
  const chapter = chapters.find(c => c.id === logId);
  
  if (!chapter) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Helmet>
          <title>Chapter Not Found | Mission Built: Lessons from the Barbell and the Boardroom</title>
          <meta property="og:title" content="Mission Built: Lessons from the Barbell and the Boardroom" />
          <meta property="og:description" content="An open-source book exploring how product leadership and powerlifting share the same foundation: discipline, mission, and care. New chapters weekly." />
        </Helmet>
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Chapter Not Found</h1>
            <p className="text-muted-foreground">The requested chapter could not be found.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const pageTitle = `Chapter ${chapter.id}: ${chapter.title} | Mission Built: Lessons from the Barbell and the Boardroom`;
  const pageDescription = chapter.description;

  if (isLoading) {
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
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Loading...</h1>
            <p className="text-muted-foreground">Loading chapter content...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
      <ChapterHero chapter={chapter} />
      <ChapterContent chapter={chapter} logContent={logContent} />
      <FurtherReading logContent={logContent} />
      <Footer />
    </div>
  );
};

export default Log;
