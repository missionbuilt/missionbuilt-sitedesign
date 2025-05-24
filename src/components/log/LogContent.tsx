
import React from "react";
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
  return (
    <main className="flex-grow">
      <LogHero chapter={chapter} />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-8">
            <LogMetadata chapter={chapter} />
            <LogSections chapter={chapter} />
            <FurtherReading />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <TableOfContents chapter={chapter} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogContent;
