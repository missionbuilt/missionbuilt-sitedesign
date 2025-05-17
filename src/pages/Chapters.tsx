
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChapterGrid from "@/components/chapters/ChapterGrid";
import ChapterTable from "@/components/chapters/ChapterTable";
import ChaptersHeader from "@/components/chapters/ChaptersHeader";
import StatusCounter from "@/components/chapters/StatusCounter";
import { chapters } from "@/data/chapters-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, ListFilter } from "lucide-react";

const Chapters = () => {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  
  // Automatically scroll to the top when this component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header with improved animations */}
          <div className="mb-10 animate-fade-in">
            <ChaptersHeader 
              title="Training Logs" 
              subtitle="Lift Heavy. Lead Strong. One Rep, One Release at a Time." 
            />
          </div>
          
          {/* Status counters with improved visual appearance */}
          <div className="mb-8">
            <StatusCounter chapters={chapters} />
          </div>
          
          {/* View toggle for grid/table */}
          <div className="mb-6 flex justify-end">
            <Tabs 
              defaultValue="grid" 
              value={viewMode}
              onValueChange={(value) => setViewMode(value as "grid" | "table")}
              className="w-[200px]"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="grid" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Cards</span>
                </TabsTrigger>
                <TabsTrigger value="table" className="flex items-center gap-2">
                  <ListFilter className="h-4 w-4" />
                  <span>List</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {/* Chapter content with better transitions */}
          <div className="animate-fade-in">
            {viewMode === "grid" ? (
              <ChapterGrid chapters={chapters} />
            ) : (
              <div className="mt-0">
                <ChapterTable chapters={chapters} />
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapters;
