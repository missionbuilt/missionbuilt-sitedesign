
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
      setIsLoading(true);
      setError(null);
      
      try {
        const chaptersData = await chapterService.loadChapterMetadata();
        setChapters(chaptersData);
        
        // Calculate reading progress
        const totalChapters = chapterService.getTotalChapters();
        const publishedChapters = chaptersData.filter(c => c.status === 'published').length;
        
        // Get reading progress from localStorage
        const readChapters = JSON.parse(localStorage.getItem('readChapters') || '[]');
        const completedChapters = readChapters.length;
        
        setReadingProgress({
          totalChapters,
          publishedChapters,
          completedChapters,
          currentChapter: readChapters[readChapters.length - 1]
        });
      } catch (error) {
        console.error('Error loading chapters:', error);
        setError('Failed to load field notes. Please try refreshing the page.');
        setChapters([]);
      } finally {
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
