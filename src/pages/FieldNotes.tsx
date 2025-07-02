
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChapterCard from '@/components/fieldnotes/ChapterCard';
import ChapterCardSkeleton from '@/components/fieldnotes/ChapterCardSkeleton';
import ChapterFilters from '@/components/fieldnotes/ChapterFilters';
import PdfDownloadButton from '@/components/PdfDownloadButton';
import { useChapterData } from '@/hooks/useChapterData';

const FieldNotes = () => {
  const { chapters, isLoading, error, readingProgress, markChapterAsRead } = useChapterData();
  const [selectedStatus, setSelectedStatus] = React.useState<string>('all');
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [sortBy, setSortBy] = React.useState<string>('chapter');
  const [showFilters, setShowFilters] = React.useState<boolean>(false);

  // Get unique tags from all chapters
  const allTags = React.useMemo(() => {
    const tags = new Set<string>();
    chapters.forEach(chapter => {
      chapter.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [chapters]);

  // Filter chapters based on selected filters
  const filteredChapters = React.useMemo(() => {
    return chapters.filter(chapter => {
      // Search filter
      const searchMatch = searchTerm === '' || 
        chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chapter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chapter.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // Status filter
      const statusMatch = selectedStatus === 'all' || chapter.status === selectedStatus;
      
      // Tags filter
      const tagsMatch = selectedTags.length === 0 || selectedTags.some(tag => chapter.tags.includes(tag));
      
      return searchMatch && statusMatch && tagsMatch;
    });
  }, [chapters, searchTerm, selectedStatus, selectedTags]);

  // Sort filtered chapters
  const sortedChapters = React.useMemo(() => {
    const sorted = [...filteredChapters];
    switch (sortBy) {
      case 'date':
        return sorted.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
      case 'readTime':
        return sorted.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
      case 'title':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'chapter':
      default:
        return sorted.sort((a, b) => a.chapterNumber - b.chapterNumber);
    }
  }, [filteredChapters, sortBy]);

  // Optimize read chapters tracking with memoization
  const [readChapters, setReadChapters] = React.useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('readChapters') || '[]');
    } catch {
      return [];
    }
  });

  // Optimize callback to prevent unnecessary re-renders
  const handleMarkAsRead = React.useCallback((chapterNumber: number) => {
    markChapterAsRead(chapterNumber);
    setReadChapters(prev => {
      if (prev.includes(chapterNumber)) return prev;
      return [...prev, chapterNumber];
    });
  }, [markChapterAsRead]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <Navbar />
        <main className="container-custom py-16">
          <div className="text-center">
            <p className="text-destructive">{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>The Playbook | MissionBuilt</title>
        <meta name="description" content="The Core Chapters of Mission Built: Lessons from the Barbell and the Boardroom" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <Navbar />
        
        <main className="container-custom py-8">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-medium text-muted-foreground mb-2 dark:text-slate-400">The Core Chapters of Mission Built: Lessons from the Barbell and the Boardroom</h2>
                  <h1 className="text-4xl font-bold text-foreground mb-4 dark:text-slate-100">The Playbook</h1>
                </div>
                <PdfDownloadButton />
              </div>
            </header>
            
            {/* Welcome Blurb */}
            <div className="mb-8 bg-slate/5 dark:bg-slate/10 border border-slate/10 dark:border-slate/20 rounded-lg p-6">
              <p className="text-foreground dark:text-slate-200 leading-relaxed">
                Welcome to The Playbook — these are the foundational chapters of Mission Built, where each lesson combines real experiences from the gym and the boardroom to give you practical strategies for mission-driven growth.
                Here, you'll find the complete set of insights, stories, and tools that define the book's philosophy, helping you align your actions with your purpose and build strength that lasts.
              </p>
            </div>

            {/* Filters */}
            <ChapterFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              statusFilter={selectedStatus}
              onStatusFilterChange={setSelectedStatus}
              sortBy={sortBy}
              onSortChange={setSortBy}
              showFilters={showFilters}
              onToggleFilters={() => setShowFilters(!showFilters)}
            />

            {/* Chapter Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading ? (
                // Show 3 skeleton cards for faster perceived loading
                Array.from({ length: 3 }).map((_, index) => (
                  <ChapterCardSkeleton key={index} />
                ))
              ) : (
                sortedChapters.map((chapter) => (
                  <ChapterCard
                    key={chapter.id}
                    chapter={chapter}
                    isRead={readChapters.includes(chapter.chapterNumber)}
                    onMarkAsRead={handleMarkAsRead}
                  />
                ))
              )}
            </div>

            {/* No Results Message */}
            {!isLoading && sortedChapters.length === 0 && chapters.length > 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No chapters match your current filters.</p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FieldNotes;
