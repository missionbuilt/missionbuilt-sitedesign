
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

// Helper function to get badge variant
const getBadgeVariant = (status: Chapter["status"]): "default" | "secondary" | "outline" => {
  return "outline"; // Since all chapters are in-progress, we'll use outline style
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
                  <Badge variant={getBadgeVariant(chapter.status)} className="bg-slate/10 text-slate dark:bg-slate/20 dark:text-slate-300">
                    In Progress
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
