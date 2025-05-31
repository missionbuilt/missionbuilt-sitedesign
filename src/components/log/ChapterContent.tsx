
import React, { useState, useEffect } from "react";
import { Chapter, getChapterWithContent } from "@/data/chapters-data";

interface ChapterContentProps {
  chapter: Chapter;
}

const ChapterContent: React.FC<ChapterContentProps> = ({ chapter: initialChapter }) => {
  const [chapter, setChapter] = useState(initialChapter);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadChapterContent = async () => {
      if (initialChapter.loadContent && !initialChapter.sections) {
        setIsLoading(true);
        try {
          const chapterWithContent = await getChapterWithContent(initialChapter);
          setChapter(chapterWithContent);
        } catch (error) {
          console.error('Failed to load chapter content:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setChapter(initialChapter);
      }
    };

    loadChapterContent();
  }, [initialChapter]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="ml-3 text-muted-foreground">Loading chapter content...</span>
          </div>
        </div>
      </div>
    );
  }

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
