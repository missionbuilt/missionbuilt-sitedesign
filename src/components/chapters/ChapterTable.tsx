
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from "@/components/ui/table";
import { Chapter } from "@/data/chapters-data";
import { Activity, Clock, Circle } from "lucide-react";

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
          <span>Pushing Through</span>
        </>
      );
    case "not-started":
      return (
        <>
          <Circle className="mr-1 h-3 w-3" />
          <span>Still Racking</span>
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

interface ChapterTableProps {
  chapters: Chapter[];
}

const ChapterTable: React.FC<ChapterTableProps> = ({ chapters }) => {
  return (
    <div className="mt-12 md:hidden">
      <h2 className="text-xl font-semibold mb-4">Chapter List</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {chapters.map((chapter) => (
              <TableRow key={chapter.id}>
                <TableCell className="font-medium">{chapter.title}</TableCell>
                <TableCell>
                  <Badge 
                    variant={getBadgeVariant(chapter.status)} 
                    className={`flex items-center ${getBadgeClass(chapter.status)}`}
                  >
                    {getBadgeContent(chapter.status)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ChapterTable;
