
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
        <div className="space-y-8">
          <LogMetadata chapter={chapter} />
          <TableOfContents chapter={chapter} />
          <LogSections chapter={chapter} />
          <FurtherReading />
        </div>
      </div>
    </main>
  );
};

export default LogContent;
