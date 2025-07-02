
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ChapterCardSkeleton: React.FC = () => {
  return (
    <Card className="h-full min-h-[320px] flex flex-col relative overflow-hidden">
      {/* Status banner skeleton */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600" />

      <CardHeader className="pb-3 flex-shrink-0 pt-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-20" />
          </div>
          <Skeleton className="w-4 h-4" />
        </div>
        
        <Skeleton className="h-8 w-full mb-3" />
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full" />
      </CardHeader>
      
      <CardContent className="pt-0 mt-auto">
        <div className="flex items-center gap-4 mb-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
        
        <div className="flex flex-wrap gap-1">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ChapterCardSkeleton;
