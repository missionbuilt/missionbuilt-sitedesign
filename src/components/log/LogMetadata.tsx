
import React from "react";
import { Chapter } from "@/data/chapters-data";
import { Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface LogMetadataProps {
  chapter: Chapter;
}

// Function to calculate estimated read time for content
const calculateReadTime = (content: string): number => {
  const wordCount = content.split(/\s+/).filter(word => word.length > 0).length;
  const wordsPerMinute = 200; // Average reading speed
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readTime); // Minimum 1 minute
};

// Function to get publish date based on chapter
const getPublishDate = (chapterId: number): string => {
  switch (chapterId) {
    case 1:
    case 2:
      return "May 24, 2025";
    case 3:
      return "May 29, 2025";
    default:
      return "May 24, 2025";
  }
};

// Function to get total read time by summing individual sections
const getTotalReadTime = (chapter: Chapter): string => {
  const totalMinutes = chapter.sections.reduce((total, section) => {
    return total + calculateReadTime(section.content);
  }, 0);
  
  return `${totalMinutes} min read`;
};

const LogMetadata: React.FC<LogMetadataProps> = ({ chapter }) => {
  return (
    <div className="border-b border-slate/10 pb-6">
      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Author: <Link to="/about" className="text-sunburst hover:text-sunburst/80 transition-colors dark:text-sunburst dark:hover:text-sunburst/80">Mike</Link></span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>Published: {getPublishDate(chapter.id)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{getTotalReadTime(chapter)}</span>
        </div>
      </div>
    </div>
  );
};

export default LogMetadata;
