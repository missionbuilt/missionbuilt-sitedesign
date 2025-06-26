import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContentEditor from '@/components/ContentEditor';
import ChapterNavigation from '@/components/ChapterNavigation';
import ReadingProgress from '@/components/ReadingProgress';
import LinkSection from '@/components/LinkSection';
import { Badge } from '@/components/ui/badge';
import { contentService } from '@/services/contentService';
import { calculateReadTime } from '@/utils/readTimeCalculator';

const Chapter9 = () => {
  const [content, setContent] = React.useState<string>('');
  const [metadata, setMetadata] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [links, setLinks] = React.useState<any[]>([]);

  const chapterId = 'chapter-9';

  // Helper function to format date properly
  const formatPublishDate = (dateString: string) => {
    const date = new Date(dateString + 'T12:00:00');
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  React.useEffect(() => {
    const loadChapterData = async () => {
      setIsLoading(true);
      setError(null);
      console.log(`Loading ${chapterId} data...`);
      
      try {
        const [chapterContent, chapterMetadata] = await Promise.all([
          contentService.loadChapterContent(chapterId),
          contentService.loadChapterMetadata(chapterId)
        ]);
        
        console.log(`${chapterId} content length:`, chapterContent?.length || 0);
        console.log(`${chapterId} metadata:`, chapterMetadata);
        
        setContent(chapterContent || '');
        setMetadata(chapterMetadata);

        // Load links from localStorage
        const savedLinks = localStorage.getItem(`${chapterId}-links`);
        if (savedLinks) {
          try {
            setLinks(JSON.parse(savedLinks));
          } catch (error) {
            console.error('Error parsing saved links:', error);
          }
        }
      } catch (error) {
        console.error(`Error loading ${chapterId} data:`, error);
        setError(`Failed to load chapter content. Please try refreshing the page.`);
      } finally {
        setIsLoading(false);
      }
    };

    loadChapterData();
  }, []);

  const handleContentSave = async (newContent: string) => {
    try {
      contentService.saveContentToLocalStorage(chapterId, newContent);
      setContent(newContent);
      console.log(`${chapterId} content saved successfully`);
    } catch (error) {
      console.error(`Error saving ${chapterId} content:`, error);
    }
  };

  const handleLinksChange = (newLinks: any[]) => {
    setLinks(newLinks);
    localStorage.setItem(`${chapterId}-links`, JSON.stringify(newLinks));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center py-8">
              <p className="text-destructive mb-4 dark:text-red-400">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
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

  const readTime = calculateReadTime(content);
  const publishedDate = metadata?.publishedDate ? formatPublishDate(metadata.publishedDate) : formatPublishDate('2025-01-15');

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Chapter 9: Ship It Like You Show Up - MissionBuilt</title>
        <meta name="description" content="Great teams ship with the same integrity they train with. This chapter draws a line between effort in the gym and excellence in execution — showing how preparation, not perfection, defines professional momentum." />
      </Helmet>
      
      <ReadingProgress />
      <Navbar />
      
      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <Link 
              to="/field-notes" 
              className="inline-flex items-center text-army hover:text-army/80 dark:text-sunburst dark:hover:text-sunburst/80 transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Field Notes
            </Link>
            
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="text-sm font-semibold dark:border-slate-600 dark:text-slate-200">
                  Chapter 9
                </Badge>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:border dark:border-green-700">
                  Good Lift
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display dark:text-slate-100">
                Ship It Like You Show Up
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed dark:text-slate-300">
                Great teams ship with the same integrity they train with. This chapter draws a line between effort in the gym and excellence in execution — showing how preparation, not perfection, defines professional momentum.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground dark:text-slate-400 border-b border-border dark:border-slate-700 pb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {publishedDate}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {readTime}
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <div className="flex flex-wrap gap-1">
                  {['Execution', 'Integrity', 'Team Performance', 'Professional Excellence'].map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-army/10 text-army dark:bg-sunburst/20 dark:text-sunburst dark:border dark:border-sunburst/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Hero Image Section */}
          <div className="mb-12">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Chapter 9 hero image"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>

          {/* Content */}
          <article className="mb-12">
            <ContentEditor
              initialContent={content}
              chapterId={chapterId}
              onSave={handleContentSave}
            />
          </article>

          {/* Links Section */}
          <div className="mb-12">
            <LinkSection
              chapterId={chapterId}
              initialLinks={links}
              onLinksChange={handleLinksChange}
            />
          </div>

          {/* Navigation */}
          <ChapterNavigation currentChapter={9} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapter9;
