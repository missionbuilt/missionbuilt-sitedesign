
import React from "react";
import { Chapter } from "@/data/chapters-data";
import { BookOpen } from "lucide-react";

interface TableOfContentsProps {
  chapter: Chapter;
  onSectionClick?: (sectionId: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ chapter, onSectionClick }) => {
  const sections = chapter.sections || [];
  
  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    onSectionClick?.(sectionId);
    
    // Scroll to the section with offset for fixed header
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Adjust based on your header height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // If no sections, don't show the table of contents
  if (sections.length === 0) {
    return null;
  }
  
  return (
    <nav className="bg-slate/5 dark:bg-slate-800/40 rounded-xl p-6 border border-slate/10 dark:border-slate-700/50 sticky top-8">
      <div className="flex items-center gap-3 mb-4">
        <BookOpen className="h-5 w-5 text-army dark:text-sunburst" />
        <h3 className="font-semibold text-foreground dark:text-slate-100">In This Chapter</h3>
      </div>
      
      <ol className="space-y-3">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleSectionClick(e, section.id)}
              className="block text-sm text-muted-foreground dark:text-slate-300 hover:text-army dark:hover:text-sunburst transition-colors duration-200 py-1 cursor-pointer leading-relaxed"
            >
              <span className="font-medium text-army dark:text-sunburst mr-2">
                {index + 1}.
              </span>
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;
