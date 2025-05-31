// Chapter type definition
export interface Chapter {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  author: string;
  date: string;
  status: "published" | "coming-soon" | "draft";
  heroImage: string;
  sections?: Array<{
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

// Utility function to calculate reading time based on content
export const getDynamicReadingTime = (chapter: Chapter): number => {
  if (!chapter.sections || chapter.sections.length === 0) {
    return 5; // Default reading time
  }
  
  const totalWords = chapter.sections.reduce((total, section) => {
    const wordCount = section.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return total + wordCount;
  }, 0);
  
  // Assuming average reading speed of 200 words per minute
  return Math.ceil(totalWords / 200);
};

// Sample chapters data - starting fresh
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
    sections: [],
    furtherReading: []
  },
  {
    id: 2,
    title: "",
    subtitle: "Building Strength Through Systematic Challenge",
    description: "Chapter 2 placeholder - ready for your content.",
    author: "Author Name", 
    date: "2024-01-22",
    status: "coming-soon",
    heroImage: "/lovable-uploads/35170400-1b3f-446c-ae37-a3bb988dc1b8.png",
    sections: [],
    furtherReading: []
  },
  {
    id: 3,
    title: "Mental Resilience",
    subtitle: "Developing Unshakeable Focus",
    description: "Chapter 3 placeholder - ready for your content.",
    author: "Author Name",
    date: "2024-01-29", 
    status: "coming-soon",
    heroImage: "/lovable-uploads/35170400-1b3f-446c-ae37-a3bb988dc1b8.png",
    sections: [],
    furtherReading: []
  }
];
