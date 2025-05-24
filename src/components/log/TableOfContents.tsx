import React from "react";
import { Chapter } from "@/data/chapters-data";
import { BookOpen } from "lucide-react";

interface TableOfContentsProps {
  chapter: Chapter;
}

// Sample sections for demonstration
const getSections = (chapterId: number) => {
  if (chapterId === 1) {
    return [
      { id: "mission-is-the-magnet", title: "The Mission Is the Magnet" },
      { id: "the-drift", title: "The Drift" },
      { id: "leading-by-example", title: "Leading by Example" },
      { id: "key-takeaways", title: "Key Takeaways" }
    ];
  }
  
  // Default sections for other chapters
  return [
    { id: "introduction", title: "Introduction" },
    { id: "main-concept", title: "Main Concept" },
    { id: "practical-application", title: "Practical Application" },
    { id: "conclusion", title: "Conclusion" }
  ];
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ chapter }) => {
  const sections = getSections(chapter.id);
  
  return (
    <div className="bg-slate/5 rounded-lg p-6 border border-slate/10">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-army" />
        <h3 className="font-semibold text-slate">Table of Contents</h3>
      </div>
      
      <nav className="space-y-2">
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="block text-sm text-muted-foreground hover:text-army transition-colors duration-200 py-1"
          >
            {index + 1}. {section.title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents;
