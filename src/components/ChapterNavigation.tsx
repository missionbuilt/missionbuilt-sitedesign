
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ChapterNavigationProps {
  currentChapter: number;
}

const ChapterNavigation: React.FC<ChapterNavigationProps> = ({ currentChapter }) => {
  // Define which chapters are published
  const publishedChapters = [1, 2, 3, 4, 5, 6, 7];
  
  const previousChapter = currentChapter > 1 && publishedChapters.includes(currentChapter - 1) 
    ? currentChapter - 1 
    : null;
  
  const nextChapter = publishedChapters.includes(currentChapter + 1) 
    ? currentChapter + 1 
    : null;

  const getChapterTitle = (chapterNum: number) => {
    const titles = {
      1: "Mission Before Metrics",
      2: "Built Through Reps", 
      3: "Rituals Over Rules",
      4: "Feedback Is a Superpower",
      5: "Progress Isn't Pretty",
      6: "The Mission Demands Recovery",
      7: "Train the Engine, Not Just the Output"
    };
    return titles[chapterNum as keyof typeof titles] || `Chapter ${chapterNum}`;
  };

  if (!previousChapter && !nextChapter) {
    return null;
  }

  return (
    <div className="flex justify-between items-center py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="flex-1">
        {previousChapter && (
          <Link 
            to={`/field-notes/chapter-${previousChapter}`}
            className="inline-flex items-center text-army hover:text-army/80 dark:text-sunburst dark:hover:text-sunburst/80 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-muted-foreground">Previous</div>
              <div className="font-medium">{getChapterTitle(previousChapter)}</div>
            </div>
          </Link>
        )}
      </div>
      
      <div className="flex-1 text-right">
        {nextChapter && (
          <Link 
            to={`/field-notes/chapter-${nextChapter}`}
            className="inline-flex items-center text-army hover:text-army/80 dark:text-sunburst dark:hover:text-sunburst/80 transition-colors group"
          >
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Next</div>
              <div className="font-medium">{getChapterTitle(nextChapter)}</div>
            </div>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ChapterNavigation;
