
import React from "react";
import { Chapter } from "@/data/chapters-data";
import { Calendar, User, Clock } from "lucide-react";

interface LogMetadataProps {
  chapter: Chapter;
}

const LogMetadata: React.FC<LogMetadataProps> = ({ chapter }) => {
  return (
    <div className="border-b border-slate/10 pb-6">
      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Author: Your Name</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>Published: January 2024</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>5 min read</span>
        </div>
      </div>
    </div>
  );
};

export default LogMetadata;
