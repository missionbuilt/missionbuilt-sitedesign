
import React from "react";
import { Chapter } from "@/data/chapters-data";
import { BookOpen } from "lucide-react";

interface TableOfContentsProps {
  chapter: Chapter;
  onSectionClick?: (sectionId: string) => void;
}

// Sample sections for demonstration
const getSections = (chapterId: number) => {
  if (chapterId === 1) {
    return [
      { id: "mission-is-the-magnet", title: "The Mission Is the Magnet" },
      { id: "the-drift", title: "The Drift" },
      { id: "repetition-with-intention", title: "Repetition with Intention" },
      { id: "further-reading", title: "Further Reading" }
    ];
  }
  
  if (chapterId === 2) {
    return [
      { id: "the-myth-of-overnight-success", title: "The Myth of Overnight Success" },
      { id: "repetition-is-not-redundancy", title: "Repetition Is Not Redundancy" },
      { id: "when-the-spark-fades", title: "When the Spark Fades" },
      { id: "the-multiplier-of-boring-work", title: "The Multiplier of Boring Work" },
      { id: "the-work-becomes-the-win", title: "The Work Becomes the Win" },
      { id: "further-reading", title: "Further Reading" }
    ];
  }
  
  // Default sections for other chapters
  return [
    { id: "introduction", title: "Introduction" },
    { id: "main-concept", title: "Main Concept" },
    { id: "practical-application", title: "Practical Application" },
    { id: "conclusion", title: "Conclusion" },
    { id: "further-reading", title: "Further Reading" }
  ];
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ chapter, onSectionClick }) => {
  const sections = getSections(chapter.id);
  
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
    <div className="bg-slate/5 rounded-lg p-6 border border-slate/10">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-army" />
        <h3 className="font-semibold text-foreground dark:text-slate-100">Table of Contents</h3>
      </div>
      
      <nav className="space-y-2">
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleSectionClick(e, section.id)}
            className="block text-sm text-muted-foreground hover:text-army transition-colors duration-200 py-1 cursor-pointer"
          >
            {index + 1}. {section.title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents;
