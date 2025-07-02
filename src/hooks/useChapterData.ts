
import { useState, useEffect } from 'react';
import { chapterService, ChapterData } from '@/services/chapterService';

export interface ReadingProgress {
  totalChapters: number;
  publishedChapters: number;
  completedChapters: number;
  currentChapter?: number;
}

export const useChapterData = () => {
  const [chapters, setChapters] = useState<ChapterData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [readingProgress, setReadingProgress] = useState<ReadingProgress>({
    totalChapters: 0,
    publishedChapters: 0,
    completedChapters: 0
  });

  useEffect(() => {
    const loadChapters = async () => {
      try {
        // Get read chapters once at the start
        const readChapters = (() => {
          try {
            return JSON.parse(localStorage.getItem('readChapters') || '[]');
          } catch {
            return [];
          }
        })();

        // Load chapters in parallel
        const chaptersData = await chapterService.loadChapterMetadata();
        
        // Calculate all values in one go to minimize state updates
        const totalChapters = chapterService.getTotalChapters();
        const publishedChapters = chaptersData.filter(c => c.status === 'published').length;
        const completedChapters = readChapters.length;
        
        // Update all state at once
        setChapters(chaptersData);
        setReadingProgress({
          totalChapters,
          publishedChapters,
          completedChapters,
          currentChapter: readChapters[readChapters.length - 1]
        });
        setError(null);
        setIsLoading(false);
        
      } catch (error) {
        console.error('Error loading chapters:', error);
        setError('Failed to load field notes. Please try refreshing the page.');
        setChapters([]);
        setIsLoading(false);
      }
    };

    loadChapters();
  }, []);

  const markChapterAsRead = (chapterNumber: number) => {
    const readChapters = JSON.parse(localStorage.getItem('readChapters') || '[]');
    if (!readChapters.includes(chapterNumber)) {
      readChapters.push(chapterNumber);
      localStorage.setItem('readChapters', JSON.stringify(readChapters));
      
      setReadingProgress(prev => ({
        ...prev,
        completedChapters: readChapters.length,
        currentChapter: chapterNumber
      }));
    }
  };

  return {
    chapters,
    isLoading,
    error,
    readingProgress,
    markChapterAsRead,
    refetch: () => window.location.reload()
  };
};
