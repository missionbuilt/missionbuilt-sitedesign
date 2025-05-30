
import React from "react";
import { Chapter } from "@/data/chapters-data";
import { ExternalLink, BookOpen } from "lucide-react";

interface FurtherReadingProps {
  chapter: Chapter;
}

const FurtherReading: React.FC<FurtherReadingProps> = ({ chapter }) => {
  if (!chapter.furtherReading || chapter.furtherReading.length === 0) {
    return null;
  }

  return (
    <div className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Further Reading</h2>
          </div>
          
          <div className="space-y-6">
            {chapter.furtherReading.map((resource, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {resource.title}
                      </a>
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      {resource.description}
                    </p>
                    {resource.note && (
                      <p className="text-sm text-muted-foreground italic">
                        {resource.note}
                      </p>
                    )}
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurtherReading;
