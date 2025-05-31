
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { contentService } from '@/services/contentService';
import { calculateReadTime } from '@/utils/readTimeCalculator';

const FieldNotes = () => {
  const [chapters, setChapters] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const loadChaptersData = async () => {
      setIsLoading(true);
      
      try {
        // Load chapter 1 data from the same source as the log page
        const [content, metadata] = await Promise.all([
          contentService.loadChapterContent('chapter-1'),
          contentService.loadChapterMetadata('chapter-1')
        ]);
        
        if (metadata) {
          const readTime = calculateReadTime(content);
          
          const chapterData = {
            id: metadata.id,
            title: metadata.title,
            publishedDate: 'May 25th, 2025', // Keep hardcoded as requested
            readTime: readTime,
            tags: metadata.tags,
            description: metadata.description,
            slug: 'chapter-1',
            status: metadata.status
          };
          
          setChapters([chapterData]);
        }
      } catch (error) {
        console.error('Error loading chapters data:', error);
        // Fallback to empty array
        setChapters([]);
      } finally {
        setIsLoading(false);
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
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-army mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading field notes...</p>
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Published</TableHead>
                  <TableHead>Read Time</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {chapters.map((chapter) => {
                  console.log('Chapter status:', chapter.status);
                  const statusClasses = chapter.status === 'Good Lift'
                    ? 'bg-army/10 text-army dark:bg-army/20 dark:text-army'
                    : chapter.status === 'published' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    : chapter.status === 'draft'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
                  
                  console.log('Status classes for', chapter.status, ':', statusClasses);
                  
                  return (
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
                      <TableCell>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusClasses}`}>
                          {chapter.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FieldNotes;
