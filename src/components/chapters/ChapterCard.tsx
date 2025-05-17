
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Book, ArrowRight } from "lucide-react";
import { Chapter } from "@/data/chapters-data";

// Helper function to get badge variant
const getBadgeVariant = (status: Chapter["status"]): "default" | "secondary" | "outline" => {
  return "outline"; // Since all chapters are in-progress, we'll use outline style
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
          <Badge variant={getBadgeVariant(chapter.status)} className="bg-slate/10 text-slate dark:bg-slate/20 dark:text-slate-300">
            In Progress
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
          <div className="inline-flex items-center text-primary hover:underline text-sm font-medium opacity-50 cursor-not-allowed">
            Coming Soon <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChapterCard;
