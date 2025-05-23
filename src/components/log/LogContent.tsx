
import React, { useState } from "react";
import { Chapter } from "@/data/chapters-data";
import LogHero from "./LogHero";
import LogMetadata from "./LogMetadata";
import TableOfContents from "./TableOfContents";
import LogSections from "./LogSections";
import FurtherReading from "./FurtherReading";

interface LogContentProps {
  chapter: Chapter;
}

const LogContent: React.FC<LogContentProps> = ({ chapter }) => {
  const [expandedSection, setExpandedSection] = useState<string>();
  
  const handleSectionClick = (sectionId: string) => {
    setExpandedSection(sectionId);
  };
  
  return (
    <main className="flex-grow">
      <LogHero chapter={chapter} />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          <LogMetadata chapter={chapter} />
          <TableOfContents chapter={chapter} onSectionClick={handleSectionClick} />
          <LogSections chapter={chapter} expandedSection={expandedSection} />
          <FurtherReading 
            isExpanded={expandedSection === "further-reading"} 
            resources={chapter.furtherReading}
          />
        </div>
      </div>
    </main>
  );
};

export default LogContent;
