
import React from "react";
import ChapterCard from "./ChapterCard";
import { Chapter } from "@/data/chapters-data";

interface ChapterGridProps {
  chapters: Chapter[];
}

const ChapterGrid: React.FC<ChapterGridProps> = ({ chapters }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {chapters.map((chapter) => (
        <ChapterCard key={chapter.id} chapter={chapter} />
      ))}
    </div>
  );
};

export default ChapterGrid;
