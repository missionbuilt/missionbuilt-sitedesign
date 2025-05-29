
import React from "react";
import { Activity, Clock, Circle, X } from "lucide-react";
import { Chapter } from "@/data/chapters-data";

interface StatusCounterProps {
  chapters: Chapter[];
}

const StatusCounter: React.FC<StatusCounterProps> = ({ chapters }) => {
  // Count chapters by status
  const statusCounts = {
    "in-progress": chapters.filter(chapter => chapter.status === "in-progress").length,
    "coming-soon": chapters.filter(chapter => chapter.status === "coming-soon").length,
    "not-started": chapters.filter(chapter => chapter.status === "not-started").length,
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 animate-fade-in">
      <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 shadow-sm">
        <Activity className="h-4 w-4" />
        <span className="font-semibold text-lg">{statusCounts["in-progress"]}</span>
        <span className="text-sm">Good Lift</span>
      </div>
      
      <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 shadow-sm">
        <Clock className="h-4 w-4" />
        <span className="font-semibold text-lg">{statusCounts["coming-soon"]}</span>
        <span className="text-sm">Pushing Through</span>
      </div>
      
      <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800/30 text-slate-800 dark:text-slate-400 shadow-sm">
        <X className="h-4 w-4" />
        <span className="font-semibold text-lg">{statusCounts["not-started"]}</span>
        <span className="text-sm">Sipping the Pre</span>
      </div>
    </div>
  );
};

export default StatusCounter;
