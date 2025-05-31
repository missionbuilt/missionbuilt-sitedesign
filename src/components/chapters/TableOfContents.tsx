
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Chapter } from "@/data/chapters-data";
import { Clock, CheckCircle2, Circle, Calendar } from "lucide-react";

interface TableOfContentsProps {
  chapters: Chapter[];
}

// Helper function to get badge variant for book statuses
const getBadgeVariant = (status: Chapter["status"]): "default" | "secondary" | "outline" => {
  switch (status) {
    case "published":
      return "default";
    case "coming-soon":
      return "secondary";
    case "draft":
      return "outline";
    default:
      return "outline";
  }
};

// Helper function to get badge content for book statuses
const getBadgeContent = (status: Chapter["status"]) => {
  switch (status) {
    case "published":
      return (
        <>
          <CheckCircle2 className="mr-1 h-3 w-3" />
          <span>Good Lift</span>
        </>
      );
    case "coming-soon":
      return (
        <>
          <Calendar className="mr-1 h-3 w-3" />
          <span>Chalking Up</span>
        </>
      );
    case "draft":
      return (
        <>
          <Circle className="mr-1 h-3 w-3" />
          <span>Sipping the Pre</span>
        </>
      );
    default:
      return "Unknown";
  }
};

// Helper function to get badge styling
const getBadgeClass = (status: Chapter["status"]): string => {
  switch (status) {
    case "published":
      return "bg-army text-white dark:bg-army/90 dark:text-white";
    case "coming-soon":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
    case "draft":
      return "bg-slate-100 text-slate-800 dark:bg-slate-800/30 dark:text-slate-400";
    default:
      return "";
  }
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ chapters }) => {
  const [filterStatus, setFilterStatus] = useState<Chapter["status"] | "all">("all");

  const publishedChapters = chapters.filter(chapter => chapter.status === "published").length;
  const comingSoonChapters = chapters.filter(chapter => chapter.status === "coming-soon").length;
  const draftChapters = chapters.filter(chapter => chapter.status === "draft").length;

  const filteredChapters = filterStatus === "all" 
    ? chapters 
    : chapters.filter(chapter => chapter.status === filterStatus);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Filter Buttons */}
      <div className="mb-8 p-3 bg-slate/5 rounded border border-slate/10">
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={filterStatus === "published" ? "default" : "outline"}
            onClick={() => setFilterStatus(filterStatus === "published" ? "all" : "published")}
            className="bg-army text-white hover:bg-army/90 border-army"
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            {publishedChapters} Good Lift
          </Button>
          
          <Button
            variant={filterStatus === "coming-soon" ? "secondary" : "outline"}
            onClick={() => setFilterStatus(filterStatus === "coming-soon" ? "all" : "coming-soon")}
            className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-300"
          >
            <Calendar className="mr-2 h-4 w-4" />
            {comingSoonChapters} Chalking Up
          </Button>
          
          <Button
            variant={filterStatus === "draft" ? "outline" : "outline"}
            onClick={() => setFilterStatus(filterStatus === "draft" ? "all" : "draft")}
            className="bg-slate-100 text-slate-800 hover:bg-slate-200 border-slate-300"
          >
            <Circle className="mr-2 h-4 w-4" />
            {draftChapters} Sipping the Pre
          </Button>
        </div>
      </div>

      {/* Training Logs */}
      <div className="bg-white dark:bg-slate/5 rounded-lg border border-slate/10 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate/10 bg-slate/5">
          <h2 className="text-2xl font-display font-bold text-center">Training Logs</h2>
        </div>
        
        <div className="p-8">
          <div className="space-y-1">
            {filteredChapters.map((chapter, index) => {
              const chapterNumber = String(chapter.id).padStart(2, '0');
              const isClickable = chapter.status === "published" || chapter.id === 1;
              
              return (
                <div
                  key={chapter.id}
                  className={`group flex items-center py-4 px-2 rounded-lg transition-colors ${
                    isClickable ? 'hover:bg-slate/5 cursor-pointer' : 'cursor-default'
                  }`}
                >
                  {/* Chapter Number */}
                  <div className="flex-shrink-0 w-16">
                    <span className="text-lg font-mono font-bold text-slate-600 dark:text-slate-400">
                      {chapterNumber}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div className="flex-grow min-w-0 mx-6">
                    {isClickable ? (
                      <Link to={`/log/${chapter.id}`} className="block">
                        <h3 className="text-lg font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                          {chapter.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {chapter.description}
                        </p>
                      </Link>
                    ) : (
                      <>
                        <h3 className="text-lg font-display font-semibold mb-1 text-slate-400">
                          {chapter.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {chapter.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Dots (traditional TOC styling) */}
                  <div className="flex-grow border-b border-dotted border-slate-300 dark:border-slate-600 mx-4 mb-2"></div>

                  {/* Reading Time and Status */}
                  <div className="flex-shrink-0 flex items-center gap-4">
                    {chapter.readingTime && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>{chapter.readingTime} min</span>
                      </div>
                    )}
                    
                    <Badge 
                      variant={getBadgeVariant(chapter.status)} 
                      className={`flex items-center ${getBadgeClass(chapter.status)}`}
                    >
                      {getBadgeContent(chapter.status)}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
