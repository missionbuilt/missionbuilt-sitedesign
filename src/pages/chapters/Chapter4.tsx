
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, AlertCircle, Save, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContentEditor from '@/components/ContentEditor';
import LinkSection from '@/components/LinkSection';
import ReadingProgress from '@/components/ReadingProgress';
import SectionDivider from '@/components/SectionDivider';
import PdfDownloadButton from '@/components/PdfDownloadButton';
import ChapterNavigation from '@/components/ChapterNavigation';
import { calculateReadTime } from '@/utils/readTimeCalculator';
import { contentService, ChapterMeta, ChapterLink } from '@/services/contentService';

const Chapter4 = () => {
  const [content, setContent] = React.useState('');
  const [metadata, setMetadata] = React.useState<ChapterMeta | null>(null);
  const [readTime, setReadTime] = React.useState('0 min read');
  const [isLoading, setIsLoading] = React.useState(true);
  const { toast } = useToast();

  const chapterId = 'chapter-4';

  // Enhanced development mode detection
  const isDevelopment = process.env.NODE_ENV === 'development' || 
                        window.location.hostname === 'localhost' || 
                        window.location.hostname.includes('lovable.app') ||
                        window.location.hostname.includes('127.0.0.1') ||
                        window.location.port !== '';

  React.useEffect(() => {
    const loadChapterData = async () => {
      setIsLoading(true);
      
      try {
        const [loadedContent, loadedMetadata] = await Promise.all([
          contentService.loadChapterContent(chapterId),
          contentService.loadChapterMetadata(chapterId)
        ]);
        
        setContent(loadedContent);
        setMetadata(loadedMetadata);
        setReadTime(calculateReadTime(loadedContent));
      } catch (error) {
        console.error('Error loading chapter data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadChapterData();
  }, []);

  const handleContentSave = (newContent: string) => {
    console.log('Content saved:', newContent);
    setContent(newContent);
    setReadTime(calculateReadTime(newContent));
    contentService.saveContentToLocalStorage(chapterId, newContent);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    setReadTime(calculateReadTime(newContent));
    // Auto-save to localStorage on every change
    contentService.saveContentToLocalStorage(chapterId, newContent);
  };

  const handleLinksChange = (links: ChapterLink[]) => {
    console.log('Links updated:', links);
    if (metadata) {
      const updatedMetadata = { ...metadata, links };
      setMetadata(updatedMetadata);
      contentService.saveMetadataToLocalStorage(chapterId, updatedMetadata);
    }
  };

  const handleSavePermanently = () => {
    if (!metadata) {
      toast({
        title: "Error",
        description: "Cannot save: metadata not loaded",
        variant: "destructive"
      });
      return;
    }

    contentService.savePermanently(chapterId, content, metadata);
    
    toast({
      title: "Files Downloaded Successfully!",
      description: "Replace the files in src/content/chapters/ folder and refresh the page to see permanent changes.",
    });
  };

  const handleClearLocalStorage = () => {
    contentService.clearLocalStorage(chapterId);
    toast({
      title: "Local changes cleared",
      description: "Page will reload to show the original content.",
    });
    
    // Reload the page to show the original content
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleDownloadContent = () => {
    contentService.downloadContentFile(chapterId, content);
    toast({
      title: "Content File Downloaded",
      description: "The .md file has been downloaded successfully.",
    });
  };

  const handleDownloadMetadata = () => {
    if (!metadata) {
      toast({
        title: "Error",
        description: "Cannot download: metadata not loaded",
        variant: "destructive"
      });
      return;
    }

    contentService.downloadMetadataFile(chapterId, metadata);
    toast({
      title: "Metadata File Downloaded", 
      description: "The .json file has been downloaded successfully.",
    });
  };

  const hasUnsavedChanges = contentService.hasUnsavedChanges(chapterId);

  // Helper function to format date properly
  const formatPublishDate = (dateString: string) => {
    // Create date object and add timezone offset to avoid timezone issues
    const date = new Date(dateString + 'T12:00:00');
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-army mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading chapter...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{metadata?.title || 'Field Note 4'} - MissionBuilt</title>
        <meta name="description" content={metadata?.description || 'Field Note content'} />
      </Helmet>
      
      <ReadingProgress />
      <Navbar />

      {/* Unsaved Changes Banner - Show in development environments */}
      {isDevelopment && hasUnsavedChanges && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800">
          <div className="container-custom py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <div>
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                    You have unsaved changes
                  </p>
                  <p className="text-xs text-amber-700 dark:text-amber-300">
                    Changes are saved locally but not permanent. Download files to make them permanent.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownloadContent}
                  className="flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  Download .md
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownloadMetadata}
                  className="flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  Download .json
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearLocalStorage}
                >
                  Discard Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Image Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="/lovable-uploads/8dbb8bdb-6a96-4dd9-adb7-06cb1bbc5e08.png"
          alt="Field Note 4 Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Link 
            to="/about" 
            className="text-sunburst hover:text-sunburst/80 transition-colors text-lg font-medium mb-3 hover:underline"
          >
            by Mike
          </Link>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight drop-shadow-lg">
            {metadata?.title || 'Chapter 4 Title'}
          </h1>
          <div className="flex items-center gap-6 text-white/95 text-sm font-medium">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Published {metadata?.publishedDate ? formatPublishDate(metadata.publishedDate) : 'TBD'}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {readTime}
            </div>
          </div>
        </div>
      </div>
      
      <main className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <Link 
              to="/field-notes" 
              className="inline-flex items-center text-army hover:text-army/80 dark:text-sunburst dark:hover:text-sunburst/80 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Field Notes
            </Link>
            <PdfDownloadButton />
          </div>
          
          {/* Enhanced article header */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display leading-tight">
              {metadata?.title || 'Field Note 4: Chapter Title'}
            </h1>
            <div className="flex items-center text-muted-foreground text-sm bg-gray-50 dark:bg-gray-800/50 px-4 py-3 rounded-lg">
              <Clock className="w-4 h-4 mr-2" />
              Estimated read time: {readTime}
            </div>
          </header>
          
          {/* Enhanced content area with better typography */}
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none mb-16
                          prose-headings:font-display prose-headings:tracking-tight
                          prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12
                          prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10
                          prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
                          prose-p:text-base prose-p:leading-relaxed prose-p:mb-6
                          prose-li:text-base prose-li:leading-relaxed
                          prose-blockquote:border-l-4 prose-blockquote:border-sunburst 
                          prose-blockquote:bg-sunburst/5 prose-blockquote:rounded-r-lg
                          prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8
                          prose-blockquote:italic prose-blockquote:text-lg
                          prose-strong:text-army dark:prose-strong:text-sunburst prose-strong:font-semibold
                          prose-a:text-army dark:prose-a:text-sunburst prose-a:no-underline hover:prose-a:underline">
            <ContentEditor 
              initialContent={content}
              chapterId={chapterId}
              onSave={handleContentSave}
              onContentChange={handleContentChange}
            />
          </div>

          <ChapterNavigation currentChapter={4} />

          <SectionDivider />

          {/* Enhanced Links Section */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
            <LinkSection 
              chapterId={chapterId}
              initialLinks={metadata?.links || []}
              onLinksChange={handleLinksChange} 
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapter4;
