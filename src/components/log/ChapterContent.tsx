
import React from "react";
import { Chapter } from "@/data/chapters-data";

interface ChapterContentProps {
  chapter: Chapter;
}

const ChapterContent: React.FC<ChapterContentProps> = ({ chapter }) => {
  if (!chapter.sections || chapter.sections.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="lead text-xl text-muted-foreground mb-8">
              {chapter.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          {/* Chapter Description */}
          <p className="lead text-xl text-muted-foreground mb-12">
            {chapter.description}
          </p>
          
          {/* Chapter Sections */}
          {chapter.sections.map((section, index) => (
            <section key={section.id} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
              <div 
                className="prose-content"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterContent;
