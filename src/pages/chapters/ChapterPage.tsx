
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContentEditor from '@/components/ContentEditor';
import LinkSection from '@/components/LinkSection';
import ReadingProgress from '@/components/ReadingProgress';
import SectionDivider from '@/components/SectionDivider';
import PdfDownloadButton from '@/components/PdfDownloadButton';
import ChapterNavigation from '@/components/ChapterNavigation';
import { calculateReadTime } from '@/utils/readTimeCalculator';
import { contentService, ChapterMeta } from '@/services/contentService';

const CHAPTER_IMAGES: Record<number, { src: string; alt: string }> = {
  1:  { src: '/hero-images/chapter-1.webp',  alt: 'Field Note 1 Hero - Foundations and Systems' },
  2:  { src: '/hero-images/chapter-2.webp',  alt: 'Field Note 2 Hero - Built Through Reps' },
  3:  { src: '/hero-images/chapter-3.webp',  alt: 'Field Note 3 Hero' },
  4:  { src: '/hero-images/chapter-4.webp',  alt: 'Field Note 4 Hero' },
  5:  { src: '/hero-images/chapter-5.webp',  alt: 'Field Note 5 Hero' },
  6:  { src: '/hero-images/chapter-6.webp',  alt: 'Field Note 6 Hero' },
  7:  { src: '/hero-images/chapter-7.webp',  alt: 'Field Note 7 Hero' },
  8:  { src: '/hero-images/chapter-8.webp',  alt: 'Field Note 8 Hero' },
  9:  { src: '/hero-images/chapter-9.webp',  alt: 'Ship It Like You Show Up' },
  10: { src: '/hero-images/chapter-10.webp', alt: 'Field Note 10 Hero' },
  11: { src: '/hero-images/chapter-11.webp', alt: 'Field Note 11 Hero' },
  12: { src: '/hero-images/chapter-12.webp', alt: 'Field Note 12 Hero' },
  13: { src: '/hero-images/chapter-13.webp', alt: 'Give A Shit - Chapter 13 Hero' },
};

const TOTAL_CHAPTERS = 13;

const ChapterPage = () => {
  const { chapterSlug } = useParams<{ chapterSlug: string }>();
  const chapterNum = parseInt(chapterSlug?.replace('chapter-', '') || '', 10);

  const [content, setContent] = React.useState('');
  const [metadata, setMetadata] = React.useState<ChapterMeta | null>(null);
  const [readTime, setReadTime] = React.useState('0 min read');
  const [isLoading, setIsLoading] = React.useState(true);

  if (isNaN(chapterNum) || chapterNum < 1 || chapterNum > TOTAL_CHAPTERS) {
    return <Navigate to="/not-found" replace />;
  }

  const chapterId = `chapter-${chapterNum}`;
  const heroImage = CHAPTER_IMAGES[chapterNum];

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
  }, [chapterId]);

  const formatPublishDate = (dateString: string) => {
    const date = new Date(dateString + 'T12:00:00');
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
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
        <title>{metadata?.title || `Field Note ${chapterNum}`} - MissionBuilt</title>
        <meta name="description" content={metadata?.description || 'Field Note content'} />
        <link rel="preload" as="image" href={heroImage.src} />
      </Helmet>

      <ReadingProgress />
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden bg-gray-900">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="sync"
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
            {metadata?.title || `Field Note ${chapterNum}`}
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
              to="/playbook"
              className="inline-flex items-center text-army hover:text-army/80 dark:text-sunburst dark:hover:text-sunburst/80 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Playbook
            </Link>
            <PdfDownloadButton />
          </div>

          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display leading-tight">
              {metadata?.title || `Field Note ${chapterNum}`}
            </h1>
            <div className="flex items-center text-muted-foreground text-sm bg-gray-50 dark:bg-gray-800/50 px-4 py-3 rounded-lg">
              <Clock className="w-4 h-4 mr-2" />
              Estimated read time: {readTime}
            </div>
          </header>

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
            <ContentEditor initialContent={content} />
          </div>

          <ChapterNavigation currentChapter={chapterNum} />

          <SectionDivider />

          <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
            <LinkSection
              chapterId={chapterId}
              initialLinks={metadata?.links || []}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChapterPage;
