
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Chapter } from "@/data/chapters-data";
import { CheckCircle2, Calendar, Circle } from "lucide-react";

interface StatusCounterProps {
  chapters: Chapter[];
}

const StatusCounter: React.FC<StatusCounterProps> = ({ chapters }) => {
  const publishedCount = chapters.filter(chapter => chapter.status === "published").length;
  const comingSoonCount = chapters.filter(chapter => chapter.status === "coming-soon").length;
  const draftCount = chapters.filter(chapter => chapter.status === "draft").length;

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-4 py-2">
        <CheckCircle2 className="mr-2 h-4 w-4" />
        {publishedCount} Published
      </Badge>
      
      <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 px-4 py-2">
        <Calendar className="mr-2 h-4 w-4" />
        {comingSoonCount} Coming Soon
      </Badge>
      
      <Badge variant="outline" className="bg-slate-100 text-slate-800 dark:bg-slate-800/30 dark:text-slate-400 px-4 py-2">
        <Circle className="mr-2 h-4 w-4" />
        {draftCount} Draft
      </Badge>
    </div>
  );
};

export default StatusCounter;
