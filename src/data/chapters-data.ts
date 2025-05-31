
// Chapter status types
export type ChapterStatus = "published" | "coming-soon" | "draft";

// Chapter interface - metadata only
export interface Chapter {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  status: ChapterStatus;
  heroImage: string;
  wordCount?: number;
  tags?: string[];
}

// Log content interfaces for separate log data files
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

// Metadata-only chapters array
// Actual log content will be stored in separate files: src/data/logs/log-{id}.ts
export const chapters: Chapter[] = [
  // Example structure - remove when adding real logs:
  // {
  //   id: 1,
  //   title: "Log Title",
  //   description: "Log description",
  //   author: "Author Name",
  //   date: "2025-05-31",
  //   status: "published",
  //   heroImage: "/path/to/image.jpg",
  //   wordCount: 1200,
  //   tags: ["product", "leadership"]
  // }
];
