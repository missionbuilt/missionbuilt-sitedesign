
import React from "react";
import { Chapter } from "@/data/chapters-data";

interface LogSectionsProps {
  chapter: Chapter;
}

// Function to calculate estimated read time
const calculateReadTime = (content: string): number => {
  const words = content.split(/\s+/).filter(word => word.trim().length > 0);
  const wordCount = words.length;
  const wordsPerMinute = 250;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readTime);
};

const LogSections: React.FC<LogSectionsProps> = ({ chapter }) => {
  const sections = chapter.sections || [];

  // If no sections are available, show a message
  if (sections.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Coming Soon</h2>
          <p className="text-muted-foreground text-lg">
            This chapter is currently being written. Check back soon for the full content.
          </p>
        </div>
      </div>
    );
  }

  // Calculate total read time for the chapter
  const totalReadTime = sections.reduce((total, section) => {
    return total + calculateReadTime(section.content);
  }, 0);
  
  return (
    <article className="prose prose-lg prose-slate max-w-none dark:prose-invert">
      {/* Chapter reading info */}
      <div className="not-prose mb-8 pb-6 border-b border-border">
        <div className="text-sm text-muted-foreground">
          {totalReadTime} min read • {sections.length} {sections.length === 1 ? 'section' : 'sections'}
        </div>
      </div>

      {/* Chapter sections */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            {/* Section header */}
            <header className="not-prose mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {section.title}
              </h2>
              <div className="text-sm text-muted-foreground">
                {calculateReadTime(section.content)} min read
              </div>
            </header>

            {/* Section content */}
            <div className="leading-relaxed">
              {section.content.split('\n\n').map((paragraph, pIndex) => {
                if (paragraph.trim() === '') return null;
                return (
                  <p key={pIndex} className="mb-6 text-foreground/90 leading-8">
                    {paragraph.trim()}
                  </p>
                );
              }).filter(Boolean)}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default LogSections;
