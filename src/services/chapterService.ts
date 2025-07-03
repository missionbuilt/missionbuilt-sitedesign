import { contentService } from './contentService';
import { calculateReadTime } from '@/utils/readTimeCalculator';

export interface ChapterConfig {
  id: string;
  chapterNumber: number;
  slug: string;
  published: boolean;
}

// Centralized chapter configuration - easily extensible
const CHAPTER_CONFIG: ChapterConfig[] = [
  { id: 'chapter-1', chapterNumber: 1, slug: 'chapter-1', published: true },
  { id: 'chapter-2', chapterNumber: 2, slug: 'chapter-2', published: true },
  { id: 'chapter-3', chapterNumber: 3, slug: 'chapter-3', published: true },
  { id: 'chapter-4', chapterNumber: 4, slug: 'chapter-4', published: true },
  { id: 'chapter-5', chapterNumber: 5, slug: 'chapter-5', published: true },
  { id: 'chapter-6', chapterNumber: 6, slug: 'chapter-6', published: true },
  { id: 'chapter-7', chapterNumber: 7, slug: 'chapter-7', published: true },
  { id: 'chapter-8', chapterNumber: 8, slug: 'chapter-8', published: true },
  { id: 'chapter-9', chapterNumber: 9, slug: 'chapter-9', published: true },
  { id: 'chapter-10', chapterNumber: 10, slug: 'chapter-10', published: true },
  { id: 'chapter-11', chapterNumber: 11, slug: 'chapter-11', published: true },
  { id: 'chapter-12', chapterNumber: 12, slug: 'chapter-12', published: true },
  { id: 'chapter-13', chapterNumber: 13, slug: 'chapter-13', published: true }
];

export interface ChapterData {
  id: string;
  title: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  description: string;
  slug: string;
  status: 'draft' | 'published' | 'archived';
  chapterNumber: number;
  content?: string;
}

export const chapterService = {
  async loadChapterMetadata(): Promise<ChapterData[]> {
    console.log('Loading chapter metadata for', CHAPTER_CONFIG.length, 'chapters');
    
    // Load all chapters in parallel for much faster loading
    const chapterPromises = CHAPTER_CONFIG.map(async (config) => {
      try {
        console.log(`Loading metadata for ${config.id}`);
        const [metadata, content] = await Promise.all([
          contentService.loadChapterMetadata(config.id),
          contentService.loadChapterContent(config.id)
        ]);
        
        console.log(`Metadata loaded for ${config.id}:`, metadata?.status);
        
        if (metadata && (metadata.status === 'published' || metadata.status === 'draft')) {
          // Calculate actual reading time from content
          const actualReadTime = calculateReadTime(content);
          
          return {
            id: metadata.id,
            title: metadata.title,
            publishedDate: this.formatPublishDate(metadata.publishedDate),
            readTime: actualReadTime,
            tags: metadata.tags,
            description: metadata.description,
            slug: metadata.slug || config.slug,
            status: metadata.status,
            chapterNumber: config.chapterNumber
          } as ChapterData;
        }
        return null;
      } catch (error) {
        console.warn(`Failed to load metadata for chapter ${config.id}:`, error);
        return null;
      }
    });

    const results = await Promise.all(chapterPromises);
    const chapters = results.filter((chapter): chapter is ChapterData => 
      chapter !== null && (chapter.status === 'published' || chapter.status === 'draft')
    );
    
    console.log('Final chapters loaded:', chapters.length, 'chapters:', chapters.map(c => c.id));
    
    return chapters.sort((a, b) => a.chapterNumber - b.chapterNumber);
  },

  async loadAllChapters(): Promise<ChapterData[]> {
    const chapters: ChapterData[] = [];
    
    for (const config of CHAPTER_CONFIG) {
      try {
        const [content, metadata] = await Promise.all([
          contentService.loadChapterContent(config.id),
          contentService.loadChapterMetadata(config.id)
        ]);

        if (metadata && (metadata.status === 'published' || metadata.status === 'draft')) {
          const readTime = calculateReadTime(content);
          chapters.push({
            id: metadata.id,
            title: metadata.title,
            publishedDate: this.formatPublishDate(metadata.publishedDate),
            readTime,
            tags: metadata.tags,
            description: metadata.description,
            slug: metadata.slug || config.slug,
            status: metadata.status,
            chapterNumber: config.chapterNumber,
            content: content
          });
        }
      } catch (error) {
        console.warn(`Failed to load chapter ${config.id}:`, error);
      }
    }

    return chapters.sort((a, b) => a.chapterNumber - b.chapterNumber);
  },

  formatPublishDate(dateString: string): string {
    const date = new Date(dateString + 'T12:00:00');
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  },

  getPublishedChapters(): ChapterConfig[] {
    return CHAPTER_CONFIG.filter(chapter => chapter.published);
  },

  getTotalChapters(): number {
    return CHAPTER_CONFIG.length;
  }
};
