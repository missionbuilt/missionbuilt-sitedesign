import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { contentService } from '@/services/contentService';
import { calculateReadTime } from '@/utils/readTimeCalculator';

const FieldNotes = () => {
  const [chapters, setChapters] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadChaptersData = async () => {
      setIsLoading(true);
      setError(null);
      console.log('Starting to load chapters data...');
      
      try {
        console.log('Loading chapter data...');
        
        // Load chapter 1 and chapter 2 data
        const [
          content1, metadata1,
          content2, metadata2
        ] = await Promise.all([
          contentService.loadChapterContent('chapter-1'),
          contentService.loadChapterMetadata('chapter-1'),
          contentService.loadChapterContent('chapter-2'),
          contentService.loadChapterMetadata('chapter-2')
        ]);
        
        console.log('Chapter 1 metadata:', metadata1);
        console.log('Chapter 2 metadata:', metadata2);
        
        const chaptersData = [];
        
        if (metadata1) {
          const readTime1 = calculateReadTime(content1);
          chaptersData.push({
            id: metadata1.id,
            title: metadata1.title,
            publishedDate: 'May 25th, 2025', // Keep hardcoded as requested
            readTime: readTime1,
            tags: metadata1.tags,
            description: metadata1.description,
            slug: 'chapter-1',
            status: metadata1.status
          });
        }
        
        if (metadata2) {
          const readTime2 = calculateReadTime(content2);
          chaptersData.push({
            id: metadata2.id,
            title: metadata2.title,
            publishedDate: 'May 25th, 2025', // Keep hardcoded as requested
            readTime: readTime2,
            tags: metadata2.tags,
            description: metadata2.description,
            slug: 'chapter-2',
            status: metadata2.status
          });
        }
        
        console.log('Final chapters data:', chaptersData);
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
            
            <div className="space-y-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead>Read Time</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2].map((i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Skeleton className="h-4 w-48 mb-2" />
                        <Skeleton className="h-3 w-64" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-24" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-16" />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Skeleton className="h-6 w-16 rounded-full" />
                          <Skeleton className="h-6 w-20 rounded-full" />
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Skeleton className="h-6 w-20 rounded-full mx-auto" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
              <p className="text-destructive mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-army text-white px-4 py-2 rounded hover:bg-army/80 transition-colors"
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Field Notes</h1>
          </header>
          
          <div className="space-y-6">
            {chapters.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No field notes available at the moment.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead>Read Time</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {chapters.map((chapter) => (
                    <TableRow key={chapter.id}>
                      <TableCell>
                        <Link 
                          to={`/field-notes/${chapter.slug}`}
                          className="font-medium text-army hover:text-army/80 transition-colors"
                        >
                          {chapter.title}
                        </Link>
                        {chapter.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {chapter.description}
                          </p>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {chapter.publishedDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {chapter.readTime}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {chapter.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-army/10 text-army"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          chapter.status === 'published' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                            : chapter.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                        }`}>
                          {chapter.status === 'published' ? 'Good Lift' : chapter.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FieldNotes;
