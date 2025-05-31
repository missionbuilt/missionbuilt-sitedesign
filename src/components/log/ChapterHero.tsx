
import React from "react";
import { Chapter, getDynamicReadingTime } from "@/data/chapters-data";
import { Calendar, User, Clock } from "lucide-react";

interface ChapterHeroProps {
  chapter: Chapter;
}

const ChapterHero: React.FC<ChapterHeroProps> = ({ chapter }) => {
  const dynamicReadingTime = getDynamicReadingTime(chapter.wordCount);
  
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
                <span>{chapter.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{chapter.date}</span>
              </div>
              {chapter.status === "published" && chapter.wordCount && chapter.wordCount > 0 && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{dynamicReadingTime} min read</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterHero;
