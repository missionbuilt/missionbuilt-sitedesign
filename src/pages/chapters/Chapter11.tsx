
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import ChapterNavigation from '@/components/ChapterNavigation';
import { contentService } from '@/services/contentService';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Chapter11 = () => {
  const [content, setContent] = React.useState<string>('');
  const [metadata, setMetadata] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const loadChapter = async () => {
      try {
        const [chapterContent, chapterMetadata] = await Promise.all([
          contentService.loadChapterContent('chapter-11'),
          contentService.loadChapterMetadata('chapter-11')
        ]);
        
        setContent(chapterContent);
        setMetadata(chapterMetadata);
      } catch (error) {
        console.error('Error loading chapter 11:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadChapter();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-8"></div>
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
        <title>{metadata?.title || 'Strong Enough to Listen'} - MissionBuilt</title>
        <meta name="description" content={metadata?.description || 'Chapter 11 of Mission Built'} />
      </Helmet>
      
      <ReadingProgress />
      <Navbar />
      
      <main className="container-custom py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-army/10 text-army dark:bg-sunburst/20 dark:text-sunburst">
                Chapter 11
              </span>
              {metadata?.publishedDate && (
                <span className="text-sm text-muted-foreground dark:text-slate-400">
                  {new Date(metadata.publishedDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              )}
              {metadata?.readTime && (
                <span className="text-sm text-muted-foreground dark:text-slate-400">
                  • {metadata.readTime}
                </span>
              )}
            </div>
            
            {metadata?.subtitle && (
              <p className="text-lg text-muted-foreground mb-4 dark:text-slate-300">
                {metadata.subtitle}
              </p>
            )}
          </header>
          
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-li:text-foreground/90">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold mb-8 text-foreground dark:text-slate-100">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-semibold mt-12 mb-6 text-foreground dark:text-slate-100">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-medium mt-8 mb-4 text-foreground dark:text-slate-100">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-6 leading-relaxed text-foreground/90 dark:text-slate-200">
                    {children}
                  </p>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-army dark:border-sunburst pl-6 my-8 italic text-foreground/80 dark:text-slate-300">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="mb-6 space-y-2 text-foreground/90 dark:text-slate-200">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-6 space-y-2 text-foreground/90 dark:text-slate-200">
                    {children}
                  </ol>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
          
          <ChapterNavigation currentChapter={11} />
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapter11;
