
import React from "react";
import { Chapter } from "@/data/chapters-data";

interface LogHeroProps {
  chapter: Chapter;
}

const LogHero: React.FC<LogHeroProps> = ({ chapter }) => {
  // Use the uploaded image for Log 1, fallback to the original for others
  const getHeroImage = (chapterId: number) => {
    if (chapterId === 1) {
      return "/lovable-uploads/e99cef43-4b1f-469b-80cf-a4896d8629b7.png";
    }
    return "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
  };

  return (
    <section className="relative h-96 bg-gradient-to-r from-army to-army/80 text-white overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${getHeroImage(chapter.id)})`
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="text-sm font-medium text-sunburst mb-2">
            Training Log {chapter.id}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            {chapter.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {chapter.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogHero;
