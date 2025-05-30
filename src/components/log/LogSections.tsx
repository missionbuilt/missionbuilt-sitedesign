
import React, { useState, useEffect } from "react";
import { Chapter } from "@/data/chapters-data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface LogSectionsProps {
  chapter: Chapter;
  expandedSection?: string;
}

// Function to calculate estimated read time
const calculateReadTime = (content: string): number => {
  // Clean up the text by removing extra whitespace and filtering out empty words
  const words = content.split(/\s+/).filter(word => word.trim().length > 0);
  const wordCount = words.length;
  const wordsPerMinute = 250; // Slightly higher reading speed for more accurate calculation
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readTime); // Minimum 1 minute
};

// Function to format text content with proper line breaks
const formatTextContent = (content: string) => {
  return content.split('\n').map((paragraph, index) => {
    if (paragraph.trim() === '') return null;
    return (
      <p key={index} className="mb-4 last:mb-0">
        {paragraph}
      </p>
    );
  }).filter(Boolean);
};

const LogSections: React.FC<LogSectionsProps> = ({ chapter, expandedSection }) => {
  // Use the actual sections from the chapter data, or fall back to empty array
  const sections = chapter.sections || [];
  const [openSections, setOpenSections] = useState<Set<string>>(new Set([sections[0]?.id]));
  
  useEffect(() => {
    if (expandedSection) {
      setOpenSections(prev => new Set([...prev, expandedSection]));
    }
  }, [expandedSection]);
  
  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  // If no sections are available, show a message
  if (sections.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Content for this chapter is coming soon.</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {sections.map((section, index) => {
        const readTime = calculateReadTime(section.content);
        const isOpen = openSections.has(section.id);
        
        return (
          <Collapsible key={section.id} open={isOpen} onOpenChange={() => toggleSection(section.id)}>
            <CollapsibleTrigger 
              id={section.id}
              className="flex items-center justify-between w-full text-left p-4 bg-slate/5 hover:bg-slate/10 rounded-lg border border-slate/10 transition-colors duration-200"
            >
              <div className="flex flex-col items-start">
                <h2 className="text-xl font-semibold text-foreground">
                  {index + 1}. {section.title}
                </h2>
                <span className="text-sm text-muted-foreground mt-1">
                  {readTime} min read
                </span>
              </div>
              <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            
            <CollapsibleContent className="px-4 pb-4">
              <div className="prose prose-slate max-w-none pt-4">
                <div className="text-muted-foreground leading-relaxed">
                  {formatTextContent(section.content)}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </div>
  );
};

export default LogSections;
