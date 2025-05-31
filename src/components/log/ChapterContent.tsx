
import React from "react";
import { Chapter, LogContent } from "@/data/chapters-data";

interface ChapterContentProps {
  chapter: Chapter;
  logContent: LogContent | null;
}

const ChapterContent: React.FC<ChapterContentProps> = ({ chapter, logContent }) => {
  if (!logContent || !logContent.sections || logContent.sections.length === 0) {
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
          {logContent.sections.map((section, index) => (
            <section key={section.id} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
              <div 
                className="prose-content prose prose-lg max-w-none dark:prose-invert [&>p]:mb-6 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-4 [&>blockquote]:border-l-4 [&>blockquote]:border-army [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-lg [&>blockquote]:bg-muted/30 [&>ul]:my-6 [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-6 [&>li]:ml-0 [&>table]:my-8 [&>table]:w-full [&>table]:border-collapse [&>thead>tr]:bg-muted [&>th]:border [&>th]:border-border [&>th]:px-4 [&>th]:py-3 [&>th]:text-left [&>th]:font-semibold [&>td]:border [&>td]:border-border [&>td]:px-4 [&>td]:py-3 [&>strong]:font-semibold"
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
