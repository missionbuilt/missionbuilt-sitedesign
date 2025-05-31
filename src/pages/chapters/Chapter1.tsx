
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContentEditor from '@/components/ContentEditor';
import LinkSection from '@/components/LinkSection';
import ReadingProgress from '@/components/ReadingProgress';
import SectionDivider from '@/components/SectionDivider';
import { calculateReadTime } from '@/utils/readTimeCalculator';

const Chapter1 = () => {
  const [content, setContent] = React.useState('');
  const [readTime, setReadTime] = React.useState('0 min read');

  const handleContentSave = (newContent: string) => {
    console.log('Content saved:', newContent);
    setContent(newContent);
    setReadTime(calculateReadTime(newContent));
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    setReadTime(calculateReadTime(newContent));
  };

  const handleLinksChange = (links: any[]) => {
    console.log('Links updated:', links);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Field Note 1: Mission Before Metrics - MissionBuilt</title>
        <meta name="description" content="Field Note 1: Mission Before Metrics content" />
      </Helmet>
      
      <ReadingProgress />
      <Navbar />
      
      {/* Hero Image Section with improved overlay */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="/lovable-uploads/e090226a-c451-4cfe-82ff-2d1c054040ae.png"
          alt="Field Note 1 Hero"
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
            Mission Before Metrics
          </h1>
          <div className="flex items-center gap-6 text-white/95 text-sm font-medium">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Published May 25th, 2025
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
          <Link 
            to="/field-notes" 
            className="inline-flex items-center text-army hover:text-army/80 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Field Notes
          </Link>
          
          {/* Enhanced article header */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display leading-tight">
              Field Note 1: Mission Before Metrics
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
              initialContent=""
              onSave={handleContentSave}
              onContentChange={handleContentChange}
            />
          </div>

          <SectionDivider />

          {/* Enhanced Links Section */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
            <LinkSection onLinksChange={handleLinksChange} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapter1;
