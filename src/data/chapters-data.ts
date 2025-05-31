
// Chapter status types
export type ChapterStatus = "published" | "coming-soon" | "draft";

// Chapter interface
export interface Chapter {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  status: ChapterStatus;
  heroImage: string;
  wordCount?: number;
}

// Log content interfaces
export interface LogSection {
  id: string;
  title: string;
  content: string;
}

export interface FurtherReadingResource {
  title: string;
  url: string;
  description: string;
}

export interface LogContent {
  sections: LogSection[];
  furtherReading?: FurtherReadingResource[];
}

// Utility function for reading time calculation
export const getDynamicReadingTime = (wordCount?: number): number => {
  if (!wordCount || wordCount <= 0) {
    return 0;
  }
  // Assuming average reading speed of 200 words per minute
  return Math.ceil(wordCount / 200);
};

// Empty chapters array - all content has been cleared
export const chapters: Chapter[] = [];
