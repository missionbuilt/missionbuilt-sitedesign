
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, CheckCircle, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChapterData } from '@/services/chapterService';

interface ChapterCardProps {
  chapter: ChapterData;
  isRead?: boolean;
  onMarkAsRead?: (chapterNumber: number) => void;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, isRead = false, onMarkAsRead }) => {
  const handleCardClick = () => {
    if (onMarkAsRead && chapter.status === 'published') {
      onMarkAsRead(chapter.chapterNumber);
    }
  };

  const CardComponent = (
    <Card className={`card-hover transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/50 dark:hover:bg-slate-800/50 dark:hover:border-slate-600 h-full min-h-[320px] flex flex-col relative overflow-hidden ${
      isRead ? 'ring-2 ring-army/20 dark:ring-sunburst/20' : ''
    }`}>
      {/* Reading status indicator */}
      {isRead && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-army dark:bg-sunburst text-white dark:text-slate-900 rounded-full p-1">
            <CheckCircle className="w-4 h-4" />
          </div>
        </div>
      )}
      
      {/* Status banner */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${
        chapter.status === 'published' 
          ? 'bg-gradient-to-r from-army to-steel dark:from-sunburst dark:to-steel'
          : 'bg-gradient-to-r from-yellow-500 to-orange-500'
      }`} />

      <CardHeader className="pb-3 flex-shrink-0 pt-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs font-semibold dark:border-slate-600 dark:text-slate-200">
              {chapter.id === 'conclusion' ? 'Conclusion' : `Chapter ${chapter.chapterNumber}`}
            </Badge>
            <Badge className={`text-xs font-medium ${
              chapter.status === 'published' 
                ? 'bg-army text-white dark:bg-army dark:text-white border-army'
                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700'
            }`}>
              {chapter.status === 'published' ? 'Published' : 'Draft'}
            </Badge>
          </div>
          
          {chapter.status === 'published' && (
            <BookOpen className="w-4 h-4 text-muted-foreground dark:text-slate-400" />
          )}
        </div>
        
        <CardTitle className="text-xl leading-tight mb-3 group-hover:text-army dark:group-hover:text-sunburst transition-colors">
          <span className={chapter.slug ? "text-foreground dark:text-slate-100" : "text-muted-foreground dark:text-slate-400"}>
            {chapter.title}
          </span>
        </CardTitle>
        
        {chapter.description && (
          <CardDescription className="text-sm leading-relaxed dark:text-slate-300 flex-grow line-clamp-3">
            {chapter.description}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="pt-0 mt-auto">
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground dark:text-slate-400">
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
          {chapter.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted/50 text-muted-foreground dark:bg-slate-800/50 dark:text-slate-300 border border-muted dark:border-slate-700"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
          {chapter.tags.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted/30 text-muted-foreground dark:bg-slate-800/30 dark:text-slate-400">
              +{chapter.tags.length - 3} more
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );

  // If the chapter has a slug (is published), wrap with Link
  if (chapter.slug && chapter.status === 'published') {
    return (
      <Link 
        key={chapter.id}
        to={`/playbook/${chapter.slug}`}
        className="block hover:scale-[1.02] transition-transform duration-200 group"
        onClick={handleCardClick}
      >
        {CardComponent}
      </Link>
    );
  }

  return CardComponent;
};

export default ChapterCard;
