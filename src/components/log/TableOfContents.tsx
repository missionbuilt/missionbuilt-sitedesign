
import React from "react";
import { Chapter } from "@/data/chapters-data";
import { BookOpen } from "lucide-react";

interface TableOfContentsProps {
  chapter: Chapter;
  onSectionClick?: (sectionId: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ chapter, onSectionClick }) => {
  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    onSectionClick?.(sectionId);
    
    // Scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="bg-slate/5 dark:bg-slate-800/40 rounded-lg p-6 border border-slate/10 dark:border-slate-700/50">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-army dark:text-sunburst" />
        <h3 className="font-semibold text-foreground dark:text-slate-100">Table of Contents</h3>
      </div>
      
      <nav className="space-y-2">
        {chapter.sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleSectionClick(e, section.id)}
            className="block text-sm text-muted-foreground dark:text-slate-300 hover:text-army dark:hover:text-sunburst transition-colors duration-200 py-1 cursor-pointer"
          >
            {index + 1}. {section.title}
          </a>
        ))}
        <a
          href="#further-reading"
          onClick={(e) => handleSectionClick(e, "further-reading")}
          className="block text-sm text-muted-foreground dark:text-slate-300 hover:text-army dark:hover:text-sunburst transition-colors duration-200 py-1 cursor-pointer"
        >
          {chapter.sections.length + 1}. Further Reading
        </a>
      </nav>
    </div>
  );
};

export default TableOfContents;
