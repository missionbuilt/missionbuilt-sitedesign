
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogContent from "@/components/log/LogContent";
import { chapters } from "@/data/chapters-data";

const Log = () => {
  const { id } = useParams<{ id: string }>();
  const logId = parseInt(id || "1", 10);
  
  // Scroll to top when component mounts or when log ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [logId]);
  
  // Find the chapter data
  const chapter = chapters.find(c => c.id === logId);
  
  if (!chapter) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <LogContent chapter={chapter} />
      <Footer />
    </div>
  );
};

export default Log;
