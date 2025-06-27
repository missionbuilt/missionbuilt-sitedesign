
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import ChapterNavigation from '@/components/ChapterNavigation';
import LinkSection from '@/components/LinkSection';
import { contentService } from '@/services/contentService';
import { calculateReadTime } from '@/utils/readTimeCalculator';

const Chapter10 = () => {
  const [content, setContent] = useState<string>('');
  const [metadata, setMetadata] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadChapter = async () => {
      try {
        console.log('Loading Chapter 10...');
        const [chapterContent, chapterMetadata] = await Promise.all([
          contentService.loadChapterContent('chapter-10'),
          contentService.loadChapterMetadata('chapter-10')
        ]);
        
        console.log('Chapter 10 content loaded:', chapterContent?.length || 0, 'characters');
        console.log('Chapter 10 metadata loaded:', chapterMetadata);
        
        setContent(chapterContent || '');
        setMetadata(chapterMetadata);
      } catch (err) {
        console.error('Error loading Chapter 10:', err);
        setError('Failed to load chapter content');
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
              <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !metadata) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container-custom py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-destructive mb-4">Error Loading Chapter</h1>
            <p className="text-muted-foreground mb-8">{error || 'Chapter metadata not found'}</p>
            <Link to="/field-notes" className="btn-primary">
              Back to Field Notes
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const readTime = calculateReadTime(content);
  const publishedDate = new Date(metadata.publishedDate + 'T12:00:00').toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{metadata.title} - Chapter 10 - MissionBuilt</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={`${metadata.title} - Chapter 10`} />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:title" content={`${metadata.title} - Chapter 10`} />
        <meta name="twitter:description" content={metadata.description} />
      </Helmet>
      
      <ReadingProgress />
      <Navbar />
      
      <main className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to Field Notes */}
          <Link 
            to="/field-notes" 
            className="inline-flex items-center text-army hover:text-army/80 dark:text-sunburst dark:hover:text-sunburst/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Field Notes
          </Link>

          {/* Chapter Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground dark:text-slate-400">
              <span className="bg-army/10 text-army dark:bg-sunburst/20 dark:text-sunburst px-3 py-1 rounded-full font-medium">
                Chapter 10
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {publishedDate}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {readTime}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 dark:text-slate-100">
              {metadata.title}
            </h1>
            
            {metadata.subtitle && (
              <p className="text-xl text-muted-foreground dark:text-slate-300 mb-6">
                {metadata.subtitle}
              </p>
            )}
            
            <p className="text-lg text-muted-foreground dark:text-slate-300 leading-relaxed">
              {metadata.description}
            </p>
          </header>

          {/* Chapter Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({children}) => <h1 className="text-3xl font-bold text-foreground mb-6 dark:text-slate-100">{children}</h1>,
                h2: ({children}) => <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 dark:text-slate-100">{children}</h2>,
                h3: ({children}) => <h3 className="text-xl font-bold text-foreground mt-8 mb-4 dark:text-slate-100">{children}</h3>,
                p: ({children}) => <p className="text-foreground mb-6 leading-relaxed dark:text-slate-200">{children}</p>,
                blockquote: ({children}) => (
                  <blockquote className="border-l-4 border-army dark:border-sunburst pl-6 my-8 italic text-muted-foreground dark:text-slate-300">
                    {children}
                  </blockquote>
                ),
                ul: ({children}) => <ul className="list-disc list-inside mb-6 space-y-2 text-foreground dark:text-slate-200">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal list-inside mb-6 space-y-2 text-foreground dark:text-slate-200">{children}</ol>,
                li: ({children}) => <li className="leading-relaxed">{children}</li>,
                strong: ({children}) => <strong className="font-bold text-army dark:text-sunburst">{children}</strong>,
                em: ({children}) => <em className="italic text-muted-foreground dark:text-slate-300">{children}</em>,
              }}
            >
              {content}
            </ReactMarkdown>
          </article>

          {/* Links Section */}
          {metadata.links && metadata.links.length > 0 && (
            <LinkSection chapterId="chapter-10" initialLinks={metadata.links || []} />
          )}

          {/* Chapter Navigation */}
          <ChapterNavigation currentChapter={10} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapter10;
