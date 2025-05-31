
export interface ChapterMetadata {
  id: string;
  title: string;
  subtitle?: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  description: string;
  slug: string;
  status: 'draft' | 'published' | 'archived';
}

export interface Chapter extends ChapterMetadata {
  content: string;
}
