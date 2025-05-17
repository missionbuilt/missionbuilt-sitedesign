
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChapterGrid from "@/components/chapters/ChapterGrid";
import ChapterTable from "@/components/chapters/ChapterTable";
import ChaptersHeader from "@/components/chapters/ChaptersHeader";
import { chapters } from "@/data/chapters-data";

const Chapters = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <ChaptersHeader 
            title="Training Logs" 
            subtitle="Lift Heavy. Lead Strong. One Rep, One Release at a Time." 
          />
          
          <ChapterGrid chapters={chapters} />
          <ChapterTable chapters={chapters} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapters;
