
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChapterCard from '@/components/fieldnotes/ChapterCard';
import ChapterCardSkeleton from '@/components/fieldnotes/ChapterCardSkeleton';
import ChapterFilters from '@/components/fieldnotes/ChapterFilters';
import ReadingProgress from '@/components/fieldnotes/ReadingProgress';
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

  // Get read chapters from localStorage
  const readChapters = JSON.parse(localStorage.getItem('readChapters') || '[]');

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
        <title>Field Notes | MissionBuilt</title>
        <meta name="description" content="A collection of field notes on building better products, one rep at a time." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <Navbar />
        
        <main className="container-custom py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-army/10 to-steel/10 dark:from-sunburst/10 dark:to-army/10">
                <BookOpen className="h-12 w-12 text-army dark:text-sunburst" />
              </div>
            </div>
            <h1 className="heading-lg mb-6 bg-gradient-to-r from-army via-steel to-sunburst bg-clip-text text-transparent">
              Field Notes
            </h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Building better products, one rep at a time. These field notes share lessons learned 
              across decades of product leadership through the lens of powerlifting discipline.
            </p>
            
            <ReadingProgress progress={readingProgress} />
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
              // Show skeleton cards while loading
              Array.from({ length: 12 }).map((_, index) => (
                <ChapterCardSkeleton key={index} />
              ))
            ) : (
              sortedChapters.map((chapter) => (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  isRead={readChapters.includes(chapter.chapterNumber)}
                  onMarkAsRead={markChapterAsRead}
                />
              ))
            )}
          </div>

          {/* No Results Message */}
          {!isLoading && sortedChapters.length === 0 && chapters.length > 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No field notes match your current filters.</p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FieldNotes;
