
import React, { useState } from "react";
import { Chapter } from "@/data/chapters-data";
import { Skeleton } from "@/components/ui/skeleton";

interface LogHeroProps {
  chapter: Chapter;
}

const LogHero: React.FC<LogHeroProps> = ({ chapter }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Use the uploaded image for Log 1, fallback to the original for others
  const getHeroImage = (chapterId: number) => {
    if (chapterId === 1) {
      return "/lovable-uploads/e99cef43-4b1f-469b-80cf-a4896d8629b7.png";
    }
    if (chapterId === 2) {
      return "/lovable-uploads/35170400-1b3f-446c-ae37-a3bb988dc1b8.png";
    }
    return "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
  };

  return (
    <section className="relative h-96 bg-gradient-to-r from-army to-army/80 text-white overflow-hidden">
      {/* Hero background image */}
      {!imageLoaded && (
        <Skeleton className="absolute inset-0 bg-army/20" />
      )}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transition-opacity duration-300 ${
          imageLoaded ? 'opacity-20' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${getHeroImage(chapter.id)})`
        }}
      />
      <img
        src={getHeroImage(chapter.id)}
        alt=""
        className="hidden"
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
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
