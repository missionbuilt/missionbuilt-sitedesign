import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PdfDownloadButton from '@/components/PdfDownloadButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { contentService } from '@/services/contentService';
import { calculateReadTime } from '@/utils/readTimeCalculator';

const FieldNotes = () => {
  const [chapters, setChapters] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

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

  React.useEffect(() => {
    const loadChaptersData = async () => {
      setIsLoading(true);
      setError(null);
      console.log('Starting to load chapters data...');
      
      try {
        console.log('Loading chapter data...');
        
        // Load all chapters data including Chapter 8 and 9
        console.log('About to call contentService methods...');
        const [
          content1, metadata1,
          content2, metadata2,
          content3, metadata3,
          content4, metadata4,
          content5, metadata5,
          content6, metadata6,
          content7, metadata7,
          content8, metadata8,
          content9, metadata9
        ] = await Promise.all([
          contentService.loadChapterContent('chapter-1'),
          contentService.loadChapterMetadata('chapter-1'),
          contentService.loadChapterContent('chapter-2'),
          contentService.loadChapterMetadata('chapter-2'),
          contentService.loadChapterContent('chapter-3'),
          contentService.loadChapterMetadata('chapter-3'),
          contentService.loadChapterContent('chapter-4'),
          contentService.loadChapterMetadata('chapter-4'),
          contentService.loadChapterContent('chapter-5'),
          contentService.loadChapterMetadata('chapter-5'),
          contentService.loadChapterContent('chapter-6'),
          contentService.loadChapterMetadata('chapter-6'),
          contentService.loadChapterContent('chapter-7'),
          contentService.loadChapterMetadata('chapter-7'),
          contentService.loadChapterContent('chapter-8'),
          contentService.loadChapterMetadata('chapter-8'),
          contentService.loadChapterContent('chapter-9'),
          contentService.loadChapterMetadata('chapter-9')
        ]);
        
        console.log('Chapter 1 content length:', content1?.length || 0);
        console.log('Chapter 1 metadata:', metadata1);
        console.log('Chapter 2 content length:', content2?.length || 0);
        console.log('Chapter 2 metadata:', metadata2);
        console.log('Chapter 3 content length:', content3?.length || 0);
        console.log('Chapter 3 metadata:', metadata3);
        console.log('Chapter 4 content length:', content4?.length || 0);
        console.log('Chapter 4 metadata:', metadata4);
        console.log('Chapter 5 content length:', content5?.length || 0);
        console.log('Chapter 5 metadata:', metadata5);
        console.log('Chapter 6 content length:', content6?.length || 0);
        console.log('Chapter 6 metadata:', metadata6);
        console.log('Chapter 7 content length:', content7?.length || 0);
        console.log('Chapter 7 metadata:', metadata7);
        console.log('Chapter 8 content length:', content8?.length || 0);
        console.log('Chapter 8 metadata:', metadata8);
        console.log('Chapter 9 content length:', content9?.length || 0);
        console.log('Chapter 9 metadata:', metadata9);
        
        const chaptersData = [];
        
        if (metadata1 && metadata1.status === 'published') {
          const readTime1 = calculateReadTime(content1);
          chaptersData.push({
            id: metadata1.id,
            title: metadata1.title,
            publishedDate: formatPublishDate(metadata1.publishedDate),
            readTime: readTime1,
            tags: metadata1.tags,
            description: metadata1.description,
            slug: 'chapter-1',
            status: metadata1.status,
            chapterNumber: 1
          });
          console.log('Added chapter 1 to list');
        } else {
          console.log('Chapter 1 not added - metadata1:', metadata1, 'status:', metadata1?.status);
        }
        
        if (metadata2 && metadata2.status === 'published') {
          const readTime2 = calculateReadTime(content2);
          chaptersData.push({
            id: metadata2.id,
            title: metadata2.title,
            publishedDate: formatPublishDate(metadata2.publishedDate),
            readTime: readTime2,
            tags: metadata2.tags,
            description: metadata2.description,
            slug: 'chapter-2',
            status: metadata2.status,
            chapterNumber: 2
          });
          console.log('Added chapter 2 to list');
        } else {
          console.log('Chapter 2 not added - metadata2:', metadata2, 'status:', metadata2?.status);
        }

        if (metadata3 && metadata3.status === 'published') {
          const readTime3 = calculateReadTime(content3);
          chaptersData.push({
            id: metadata3.id,
            title: metadata3.title,
            publishedDate: formatPublishDate(metadata3.publishedDate),
            readTime: readTime3,
            tags: metadata3.tags,
            description: metadata3.description,
            slug: 'chapter-3',
            status: metadata3.status,
            chapterNumber: 3
          });
          console.log('Added chapter 3 to list');
        } else {
          console.log('Chapter 3 not added - metadata3:', metadata3, 'status:', metadata3?.status);
        }

        if (metadata4 && metadata4.status === 'published') {
          const readTime4 = calculateReadTime(content4);
          chaptersData.push({
            id: metadata4.id,
            title: metadata4.title,
            publishedDate: formatPublishDate(metadata4.publishedDate),
            readTime: readTime4,
            tags: metadata4.tags,
            description: metadata4.description,
            slug: 'chapter-4',
            status: metadata4.status,
            chapterNumber: 4
          });
          console.log('Added chapter 4 to list');
        } else {
          console.log('Chapter 4 not added - metadata4:', metadata4, 'status:', metadata4?.status);
        }

        if (metadata5 && metadata5.status === 'published') {
          const readTime5 = calculateReadTime(content5);
          chaptersData.push({
            id: metadata5.id,
            title: metadata5.title,
            publishedDate: formatPublishDate(metadata5.publishedDate),
            readTime: readTime5,
            tags: metadata5.tags,
            description: metadata5.description,
            slug: 'chapter-5',
            status: metadata5.status,
            chapterNumber: 5
          });
          console.log('Added chapter 5 to list');
        } else {
          console.log('Chapter 5 not added - metadata5:', metadata5, 'status:', metadata5?.status);
        }

        if (metadata6 && metadata6.status === 'published') {
          const readTime6 = calculateReadTime(content6);
          chaptersData.push({
            id: metadata6.id,
            title: metadata6.title,
            publishedDate: formatPublishDate(metadata6.publishedDate),
            readTime: readTime6,
            tags: metadata6.tags,
            description: metadata6.description,
            slug: 'chapter-6',
            status: metadata6.status,
            chapterNumber: 6
          });
          console.log('Added chapter 6 to list');
        } else {
          console.log('Chapter 6 not added - metadata6:', metadata6, 'status:', metadata6?.status);
        }

        if (metadata7 && metadata7.status === 'published') {
          const readTime7 = calculateReadTime(content7);
          chaptersData.push({
            id: metadata7.id,
            title: metadata7.title,
            publishedDate: formatPublishDate(metadata7.publishedDate),
            readTime: readTime7,
            tags: metadata7.tags,
            description: metadata7.description,
            slug: 'chapter-7',
            status: metadata7.status,
            chapterNumber: 7
          });
          console.log('Added chapter 7 to list');
        } else {
          console.log('Chapter 7 not added - metadata7:', metadata7, 'status:', metadata7?.status);
        }

        if (metadata8 && metadata8.status === 'published') {
          const readTime8 = calculateReadTime(content8);
          chaptersData.push({
            id: metadata8.id,
            title: metadata8.title,
            publishedDate: formatPublishDate(metadata8.publishedDate),
            readTime: readTime8,
            tags: metadata8.tags,
            description: metadata8.description,
            slug: 'chapter-8',
            status: metadata8.status,
            chapterNumber: 8
          });
          console.log('Added chapter 8 to list');
        } else {
          console.log('Chapter 8 not added - metadata8:', metadata8, 'status:', metadata8?.status);
        }

        // Add Chapter 9 as published
        chaptersData.push({
          id: 'chapter-9',
          title: 'Ship It Like You Show Up',
          publishedDate: formatPublishDate('2025-01-15'),
          readTime: calculateReadTime(content9),
          tags: ['Execution', 'Integrity', 'Team Performance', 'Professional Excellence'],
          description: 'Great teams ship with the same integrity they train with. This chapter draws a line between effort in the gym and excellence in execution — showing how preparation, not perfection, defines professional momentum.',
          slug: 'chapter-9',
          status: 'published',
          chapterNumber: 9
        });
        console.log('Added chapter 9 to list');

        // Sort chapters by chapter number to ensure proper reading order
        chaptersData.sort((a, b) => a.chapterNumber - b.chapterNumber);
        
        console.log('Final chapters data:', chaptersData);
        console.log('Total chapters to display:', chaptersData.length);
        setChapters(chaptersData);
      } catch (error) {
        console.error('Error loading chapters data:', error);
        setError('Failed to load field notes. Please try refreshing the page.');
        // Fallback to empty array
        setChapters([]);
      } finally {
        setIsLoading(false);
        console.log('Finished loading chapters data');
      }
    };

    loadChaptersData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Field Notes</h1>
            </header>
            
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="h-48 dark:border-slate-700 dark:bg-slate-900/50">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Skeleton className="h-6 w-20 rounded-full dark:bg-slate-700" />
                      <Skeleton className="h-4 w-16 rounded-full dark:bg-slate-700" />
                    </div>
                    <Skeleton className="h-6 w-3/4 mb-2 dark:bg-slate-700" />
                    <Skeleton className="h-4 w-full dark:bg-slate-700" />
                    <Skeleton className="h-4 w-2/3 dark:bg-slate-700" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-3">
                      <Skeleton className="h-4 w-24 dark:bg-slate-700" />
                      <Skeleton className="h-4 w-16 dark:bg-slate-700" />
                    </div>
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-16 rounded-full dark:bg-slate-700" />
                      <Skeleton className="h-6 w-20 rounded-full dark:bg-slate-700" />
                    </div>
                  </CardContent>
                </Card>
              ))}
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
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Field Notes</h1>
            </header>
            
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

  console.log('Rendering FieldNotes with chapters:', chapters);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Field Notes - MissionBuilt</title>
        <meta name="description" content="Table of contents for all field notes and chapters" />
      </Helmet>
      
      <Navbar />
      
      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-medium text-army mb-2 dark:text-sunburst">Mission Built: Lessons from the Barbell and the Boardroom</h2>
                <h1 className="text-4xl font-bold text-foreground mb-4 dark:text-slate-100">Field Notes</h1>
              </div>
              <div className="mt-4">
                <PdfDownloadButton />
              </div>
            </div>
          </header>
          
          <div className="space-y-6">
            {chapters.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground dark:text-slate-300">No field notes available at the moment.</p>
                <p className="text-sm text-muted-foreground mt-2 dark:text-slate-400">Check the browser console for loading details.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2">
                  {chapters.map((chapter) => {
                    const CardComponent = (
                      <Card key={chapter.id} className="card-hover transition-all duration-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/50 dark:hover:bg-slate-800/50 dark:hover:border-slate-600 h-full min-h-[280px] flex flex-col">
                        <CardHeader className="pb-3 flex-shrink-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs font-semibold dark:border-slate-600 dark:text-slate-200">
                                Chapter {chapter.chapterNumber}
                              </Badge>
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                chapter.status === 'published' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:border dark:border-green-700'
                                  : chapter.status === 'draft'
                                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border dark:border-yellow-700'
                                  : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 dark:border dark:border-gray-700'
                              }`}>
                                {chapter.status === 'published' ? 'Good Lift' : chapter.status === 'draft' ? 'Chalking Up' : chapter.status}
                              </span>
                            </div>
                          </div>
                          
                          <CardTitle className="text-xl leading-tight mb-3">
                            <span className={chapter.slug ? "text-army dark:text-sunburst" : "text-muted-foreground dark:text-slate-400"}>
                              {chapter.title}
                            </span>
                          </CardTitle>
                          
                          {chapter.description && (
                            <CardDescription className="text-sm leading-relaxed dark:text-slate-300 flex-grow">
                              {chapter.description}
                            </CardDescription>
                          )}
                        </CardHeader>
                        
                        <CardContent className="pt-0 mt-auto">
                          <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground dark:text-slate-400">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {chapter.publishedDate}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {chapter.readTime}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1">
                            {chapter.tags.map((tag) => (
                              <span 
                                key={tag}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-army/10 text-army dark:bg-sunburst/20 dark:text-sunburst dark:border dark:border-sunburst/30"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );

                    // If the chapter has a slug (is published), wrap the entire card with Link
                    if (chapter.slug) {
                      return (
                        <Link 
                          key={chapter.id}
                          to={`/field-notes/${chapter.slug}`}
                          className="block hover:text-army/80 dark:hover:text-sunburst/80 transition-colors h-full"
                        >
                          {CardComponent}
                        </Link>
                      );
                    }

                    // If no slug (unpublished), return the card without Link
                    return CardComponent;
                  })}
                </div>
                
                <div className="mt-8 text-center py-6 border-t border-border dark:border-slate-700">
                  <p className="text-muted-foreground text-sm dark:text-slate-300">
                    More chapters are on the way
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FieldNotes;
