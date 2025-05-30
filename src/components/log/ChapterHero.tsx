
import React from "react";
import { Chapter } from "@/data/chapters-data";
import { Calendar, User, Clock } from "lucide-react";

interface ChapterHeroProps {
  chapter: Chapter;
}

// Simple read time calculation utility
const calculateReadTime = (sections: any[]): string => {
  if (!sections || sections.length === 0) return "1 min read";
  
  const totalWords = sections.reduce((total, section) => {
    const wordCount = section.content ? section.content.split(/\s+/).filter((word: string) => word.length > 0).length : 0;
    return total + wordCount;
  }, 0);
  
  const wordsPerMinute = 250;
  const readTime = Math.ceil(totalWords / wordsPerMinute);
  return `${Math.max(1, readTime)} min read`;
};

const ChapterHero: React.FC<ChapterHeroProps> = ({ chapter }) => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={chapter.heroImage}
          alt={chapter.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Chapter Info Overlay */}
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Chapter {chapter.id}
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              {chapter.title}
            </h2>
            
            {/* Metadata */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{chapter.authorName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{chapter.publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{calculateReadTime(chapter.sections)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterHero;
