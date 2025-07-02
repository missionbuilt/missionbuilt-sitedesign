
import React from 'react';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { ReadingProgress as ReadingProgressType } from '@/hooks/useChapterData';

interface ReadingProgressProps {
  progress: ReadingProgressType;
}

const ReadingProgress: React.FC<ReadingProgressProps> = ({ progress }) => {
  const completionPercentage = progress.publishedChapters > 0 
    ? Math.round((progress.completedChapters / progress.publishedChapters) * 100)
    : 0;

  return (
    <div className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg border border-muted/50 p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-army dark:text-sunburst" />
          Reading Progress
        </h3>
        <div className="text-sm text-muted-foreground">
          {progress.completedChapters} of {progress.publishedChapters} chapters read
        </div>
      </div>
      
      <Progress value={completionPercentage} className="mb-4 h-2" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span className="text-foreground font-medium">{progress.completedChapters}</span>
          <span className="text-muted-foreground">Completed</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-foreground font-medium">
            {progress.publishedChapters - progress.completedChapters}
          </span>
          <span className="text-muted-foreground">Remaining</span>
        </div>
        
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-army dark:text-sunburst" />
          <span className="text-foreground font-medium">{progress.totalChapters}</span>
          <span className="text-muted-foreground">Total Planned</span>
        </div>
      </div>
      
      {progress.currentChapter && (
        <div className="mt-4 pt-4 border-t border-muted/50">
          <p className="text-sm text-muted-foreground">
            Last read: <span className="text-foreground font-medium">Chapter {progress.currentChapter}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ReadingProgress;
