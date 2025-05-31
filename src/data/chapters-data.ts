
// Chapter type definition - now only contains metadata
export interface Chapter {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  author: string;
  date: string;
  status: "published" | "coming-soon" | "draft";
  heroImage: string;
  wordCount?: number; // Optional field to store word count for reading time calculation
}

// LogContent interface for individual log content files
export interface LogContent {
  sections: Array<{
    id: string;
    title: string;
    content: string;
  }>;
  furtherReading?: Array<{
    title: string;
    description: string;
    url: string;
  }>;
}

// Utility function to calculate reading time
export const getDynamicReadingTime = (wordCount?: number): number => {
  if (!wordCount) {
    return 5; // Default reading time
  }
  
  // Assuming average reading speed of 200 words per minute
  return Math.ceil(wordCount / 200);
};

// Sample chapters data - now empty
export const chapters: Chapter[] = [];
