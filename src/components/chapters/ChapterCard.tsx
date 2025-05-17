
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Book, ArrowRight, Activity, Clock, Circle } from "lucide-react";
import { Chapter } from "@/data/chapters-data";

// Helper function to get badge variant
const getBadgeVariant = (status: Chapter["status"]): "default" | "secondary" | "outline" => {
  switch (status) {
    case "in-progress":
      return "default";
    case "coming-soon":
      return "secondary";
    case "not-started":
      return "outline";
    default:
      return "outline";
  }
};

// Helper function to get badge content
const getBadgeContent = (status: Chapter["status"]) => {
  switch (status) {
    case "in-progress":
      return (
        <>
          <Activity className="mr-1 h-3 w-3" />
          <span>Reps on the Board</span>
        </>
      );
    case "coming-soon":
      return (
        <>
          <Clock className="mr-1 h-3 w-3" />
          <span>Pushing Through, Don't Touch the Bar</span>
        </>
      );
    case "not-started":
      return (
        <>
          <Circle className="mr-1 h-3 w-3" />
          <span>Still Racking the Plates</span>
        </>
      );
    default:
      return "Unknown";
  }
};

// Helper function to get badge class
const getBadgeClass = (status: Chapter["status"]): string => {
  switch (status) {
    case "in-progress":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    case "coming-soon":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
    case "not-started":
      return "bg-slate-100 text-slate-800 dark:bg-slate-800/30 dark:text-slate-400";
    default:
      return "";
  }
};

interface ChapterCardProps {
  chapter: Chapter;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => {
  return (
    <Card className="transition-all hover:shadow-md border-slate/10">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{chapter.title}</CardTitle>
          <Badge 
            variant={getBadgeVariant(chapter.status)} 
            className={`flex items-center ${getBadgeClass(chapter.status)}`}
          >
            {getBadgeContent(chapter.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{chapter.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Book className="mr-2 h-4 w-4" />
            <span>Not Yet Determined</span>
          </div>
          <div className={`inline-flex items-center text-sm font-medium ${
            chapter.status === "not-started" || chapter.status === "coming-soon" ?
            "opacity-50 cursor-not-allowed text-slate-500" :
            "text-primary hover:underline cursor-pointer"
          }`}>
            {chapter.status === "in-progress" ? (
              <>Read Chapter <ArrowRight className="ml-1 h-4 w-4" /></>
            ) : (
              <>Coming Soon <ArrowRight className="ml-1 h-4 w-4" /></>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChapterCard;
