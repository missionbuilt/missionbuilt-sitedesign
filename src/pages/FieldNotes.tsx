import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PdfDownloadButton from '@/components/PdfDownloadButton';
import { Skeleton } from '@/components/ui/skeleton';
import { useChapterData } from '@/hooks/useChapterData';
import ChapterCard from '@/components/fieldnotes/ChapterCard';
import ChapterFilters from '@/components/fieldnotes/ChapterFilters';
import { ChapterData } from '@/services/chapterService';

const FieldNotes = () => {
  const { chapters, isLoading, error, readingProgress, markChapterAsRead, refetch } = useChapterData();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('chapter');
  const [showFilters, setShowFilters] = useState(false);

  // Get read chapters from localStorage
  const readChapters = useMemo(() => {
    return JSON.parse(localStorage.getItem('readChapters') || '[]');
  }, [chapters]);

  // Filter and sort chapters
  const filteredAndSortedChapters = useMemo(() => {
    let filtered = chapters;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(chapter =>
        chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chapter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chapter.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(chapter => chapter.status === statusFilter);
    }

    // Sort chapters
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
        case 'readTime':
          const timeA = parseInt(a.readTime.replace(/\D/g, ''));
          const timeB = parseInt(b.readTime.replace(/\D/g, ''));
          return timeA - timeB;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'chapter':
        default:
          return a.chapterNumber - b.chapterNumber;
      }
    });

    return sorted;
  }, [chapters, searchTerm, statusFilter, sortBy]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container-custom py-12">
          <div className="max-w-6xl mx-auto">
            <header className="mb-12">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-medium text-army mb-2 dark:text-sunburst">Mission Built: Lessons from the Barbell and the Boardroom</h2>
                  <h1 className="text-4xl font-bold text-foreground mb-4 dark:text-slate-100">Field Notes</h1>
                </div>
                <Skeleton className="h-10 w-32" />
              </div>
            </header>
            
            <Skeleton className="h-32 w-full mb-8" />
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-80">
                  <Skeleton className="h-full w-full rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container-custom py-12">
          <div className="max-w-6xl mx-auto">
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Field Notes</h1>
            </header>
            
            <div className="text-center py-8">
              <p className="text-destructive mb-4 dark:text-red-400">{error}</p>
              <button 
                onClick={refetch} 
                className="bg-army text-white px-4 py-2 rounded hover:bg-army/80 transition-colors dark:bg-army/90 dark:hover:bg-army dark:text-slate-100"
              >
                Retry
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Field Notes - MissionBuilt</title>
        <meta name="description" content="Table of contents for all field notes and chapters" />
      </Helmet>
      
      <Navbar />
      
      <main className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-medium text-army mb-2 dark:text-sunburst">Mission Built: Lessons from the Barbell and the Boardroom</h2>
                <h1 className="text-4xl font-bold text-foreground mb-4 dark:text-slate-100">Field Notes</h1>
              </div>
              <div className="mt-4">
                <PdfDownloadButton />
              </div>
            </div>
          </header>
          
          <ChapterFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            sortBy={sortBy}
            onSortChange={setSortBy}
            showFilters={showFilters}
            onToggleFilters={() => setShowFilters(!showFilters)}
          />
          
          <div className="mt-8">
            {filteredAndSortedChapters.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground dark:text-slate-300 mb-2">
                  {searchTerm || statusFilter !== 'all' 
                    ? 'No chapters match your current filters.' 
                    : 'No field notes available at the moment.'}
                </p>
                {(searchTerm || statusFilter !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setStatusFilter('all');
                    }}
                    className="text-army dark:text-sunburst hover:underline text-sm"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredAndSortedChapters.map((chapter) => (
                  <ChapterCard
                    key={chapter.id}
                    chapter={chapter}
                    isRead={readChapters.includes(chapter.chapterNumber)}
                    onMarkAsRead={markChapterAsRead}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FieldNotes;
