
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import ChapterNavigation from '@/components/ChapterNavigation';
import ContentEditor from '@/components/ContentEditor';

const Chapter8 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSave = (content: string) => {
    console.log('Chapter 8 content saved:', content.length, 'characters');
  };

  const handleContentChange = (content: string) => {
    console.log('Chapter 8 content changed:', content.length, 'characters');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Chapter 8: Decisions Are Made Under Load - MissionBuilt</title>
        <meta name="description" content="Stress reveals the truth — in your form, your product, and your team. From crisis decision-making to heavy triples, this chapter explores how clarity, composure, and character are tested under pressure." />
      </Helmet>
      
      <ReadingProgress />
      <Navbar />
      
      <main className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="text-sm text-army mb-4 dark:text-sunburst font-medium">
              Chapter 8
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-6 dark:text-slate-100 leading-tight">
              Decisions Are Made Under Load
            </h1>
            <p className="text-lg text-muted-foreground dark:text-slate-300 leading-relaxed">
              Stress reveals the truth — in your form, your product, and your team. From crisis decision-making to heavy triples, this chapter explores how clarity, composure, and character are tested under pressure.
            </p>
          </header>
          
          <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-code:text-foreground prose-blockquote:text-foreground/80 prose-blockquote:border-l-army dark:prose-blockquote:border-l-sunburst prose-a:text-army dark:prose-a:text-sunburst hover:prose-a:text-army/80 dark:hover:prose-a:text-sunburst/80">
            <ContentEditor
              chapterId="chapter-8"
              onSave={handleSave}
              onContentChange={handleContentChange}
            />
          </article>
          
          <ChapterNavigation currentChapter={8} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapter8;
