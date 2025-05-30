
import React from "react";
import { Chapter } from "@/data/chapters-data";
import LogHero from "./LogHero";
import LogMetadata from "./LogMetadata";
import TableOfContents from "./TableOfContents";
import LogSections from "./LogSections";
import FurtherReading from "./FurtherReading";
import PdfExportButton from "./PdfExportButton";

interface LogContentProps {
  chapter: Chapter;
}

const LogContent: React.FC<LogContentProps> = ({ chapter }) => {
  const handleSectionClick = (sectionId: string) => {
    // This is handled by the TableOfContents component
  };
  
  return (
    <main className="flex-grow">
      <LogHero chapter={chapter} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Chapter metadata and export */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div className="flex-1">
              <LogMetadata chapter={chapter} />
            </div>
            <div className="flex-shrink-0">
              <PdfExportButton />
            </div>
          </div>

          {/* Main content area with sidebar layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of contents - sticky sidebar */}
            <aside className="lg:col-span-1">
              <TableOfContents chapter={chapter} onSectionClick={handleSectionClick} />
            </aside>

            {/* Main chapter content */}
            <div className="lg:col-span-3">
              <LogSections chapter={chapter} />
              
              {/* Further reading at the end */}
              <div className="mt-16 pt-8 border-t border-border">
                <FurtherReading 
                  isExpanded={false}
                  resources={chapter.furtherReading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogContent;
