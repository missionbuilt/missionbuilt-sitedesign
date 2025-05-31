
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

// Sample chapters data - now only metadata
export const chapters: Chapter[] = [
  {
    id: 1,
    title: "",
    subtitle: "The Core Values That Drive Mission Success",
    description: "",
    author: "Author Name",
    date: "2024-01-15",
    status: "draft",
    heroImage: "/lovable-uploads/35170400-1b3f-446c-ae37-a3bb988dc1b8.png",
    wordCount: 0
  },
  {
    id: 2,
    title: "",
    subtitle: "Building Strength Through Systematic Challenge",
    description: "",
    author: "Author Name", 
    date: "2024-01-22",
    status: "coming-soon",
    heroImage: "/lovable-uploads/35170400-1b3f-446c-ae37-a3bb988dc1b8.png",
    wordCount: 0
  },
  {
    id: 3,
    title: "",
    subtitle: "Developing Unshakeable Focus",
    description: "",
    author: "Author Name",
    date: "2024-01-29", 
    status: "coming-soon",
    heroImage: "/lovable-uploads/35170400-1b3f-446c-ae37-a3bb988dc1b8.png",
    wordCount: 0
  }
];
