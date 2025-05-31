
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Tag, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import LinkSection from '@/components/LinkSection';
import { contentService } from '@/services/contentService';
import { calculateReadTime } from '@/utils/readTimeCalculator';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Chapter4 = () => {
  const [content, setContent] = React.useState<string>('');
  const [metadata, setMetadata] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadChapterData = async () => {
      try {
        const [chapterContent, chapterMetadata] = await Promise.all([
          contentService.loadChapterContent('chapter-4'),
          contentService.loadChapterMetadata('chapter-4')
        ]);
        
        setContent(chapterContent);
        setMetadata(chapterMetadata);
      } catch (error) {
        console.error('Error loading chapter 4:', error);
        setError('Failed to load chapter content');
      } finally {
        setIsLoading(false);
      }
    };

    loadChapterData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-4/5"></div>
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-destructive mb-4">Error Loading Chapter</h1>
            <p className="text-muted-foreground">{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const readTime = calculateReadTime(content);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{metadata?.title ? `${metadata.title} - MissionBuilt` : 'Chapter 4 - MissionBuilt'}</title>
        <meta name="description" content={metadata?.description || 'Chapter 4 content'} />
      </Helmet>
      
      <ReadingProgress />
      <Navbar />
      
      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            {metadata?.title && <h1 className="text-4xl font-bold text-foreground mb-4">{metadata.title}</h1>}
            {metadata?.subtitle && <p className="text-xl text-muted-foreground mb-6">{metadata.subtitle}</p>}
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              {metadata?.publishedDate && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(metadata.publishedDate + 'T12:00:00').toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              )}
              
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {readTime}
              </div>
            </div>
            
            {metadata?.tags && metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {metadata.tags.map((tag: string) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-army/10 text-army"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          
          <article className="prose prose-lg prose-slate dark:prose-invert max-w-none mb-12">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({children}) => <h1 className="text-3xl font-bold mb-6 text-foreground">{children}</h1>,
                h2: ({children}) => <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground">{children}</h2>,
                h3: ({children}) => <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">{children}</h3>,
                p: ({children}) => <p className="mb-4 text-foreground leading-relaxed">{children}</p>,
                blockquote: ({children}) => (
                  <blockquote className="border-l-4 border-army pl-4 my-6 italic text-muted-foreground bg-muted/50 py-2">
                    {children}
                  </blockquote>
                ),
                strong: ({children}) => <strong className="font-semibold text-army">{children}</strong>,
                a: ({href, children}) => (
                  <a 
                    href={href} 
                    className="text-army hover:text-army/80 underline transition-colors inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                ),
                ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
                li: ({children}) => <li className="text-foreground">{children}</li>,
                code: ({children}) => (
                  <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">{children}</code>
                ),
                pre: ({children}) => (
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </article>

          {metadata?.links && metadata.links.length > 0 && (
            <LinkSection 
              chapterId="chapter-4"
              initialLinks={metadata.links}
            />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapter4;
