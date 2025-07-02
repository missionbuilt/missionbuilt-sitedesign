
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChapterCard from '@/components/fieldnotes/ChapterCard';
import ChapterCardSkeleton from '@/components/fieldnotes/ChapterCardSkeleton';
import ChapterFilters from '@/components/fieldnotes/ChapterFilters';
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
        <title>The Playbook | MissionBuilt</title>
        <meta name="description" content="The Core Chapters of Mission Built: Lessons from the Barbell and the Boardroom" />
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
              The Playbook
            </h1>
            <h2 className="text-xl font-medium text-muted-foreground mb-8 max-w-4xl mx-auto">
              The Core Chapters of Mission Built: Lessons from the Barbell and the Boardroom
            </h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
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
              <p className="text-muted-foreground">No chapters match your current filters.</p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FieldNotes;
