import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Book, Activity, Clock, Circle, X } from "lucide-react";
import { Chapter } from "@/data/chapters-data";
import { cn } from "@/lib/utils";

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
          <span>Good Lift</span>
        </>
      );
    case "coming-soon":
      return (
        <>
          <Clock className="mr-1 h-3 w-3" />
          <span>Pushing Through</span>
        </>
      );
    case "not-started":
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
  // Determine if the chapter is Log 1 (special treatment)
  const isLog1 = chapter.id === 1;
  
  // If the chapter is Log 1, we'll make it clickable regardless of status
  const isClickable = chapter.status === "in-progress" || isLog1;
  
  // Render the card content
  return (
    <Card className="transition-all hover:shadow-md border-slate/10 h-full">
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
        <p className="text-muted-foreground mb-6 line-clamp-3">{chapter.description}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate/10">
          <div className="flex items-center text-sm text-muted-foreground">
            <Book className="mr-2 h-4 w-4" />
            <span>Log {chapter.id}</span>
          </div>
          {isClickable ? (
            <Link 
              to={`/log/${chapter.id}`}
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Read Log <Book className="ml-1 h-4 w-4" />
            </Link>
          ) : (
            <div className="inline-flex items-center text-sm font-medium opacity-50 cursor-not-allowed text-slate-500">
              404 Gains Not Found <X className="ml-1 h-4 w-4" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChapterCard;
