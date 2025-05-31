
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const FieldNotes = () => {
  const chapters = [
    {
      id: 'chapter-1',
      title: 'Field Note 1: Mission Before Metrics',
      publishedDate: '2025-05-25',
      readTime: '5 min read',
      tags: ['Getting Started'],
      description: 'First chapter description',
      slug: 'chapter-1',
      status: 'published' as const
    }
  ];

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
                        {new Date(chapter.publishedDate).toLocaleDateString()}
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
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        chapter.status === 'published' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : chapter.status === 'draft'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                      }`}>
                        {chapter.status}
                      </span>
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
};

export default FieldNotes;
