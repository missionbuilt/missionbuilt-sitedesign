
// Chapter data structure
export interface Resource {
  title: string;
  description: string;
  url: string;
  note: string;
}

export interface Section {
  id: string;
  title: string;
  content: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  slug: string;
  status: "published" | "coming-soon" | "draft";
  publishDate: string;
  heroImage: string;
  authorName: string;
  sections: Section[];
  furtherReading: Resource[];
  wordCount?: number;
  readingTime?: number;
}

// Utility function to calculate reading time (average 200 words per minute)
export const calculateReadingTime = (wordCount: number): number => {
  return Math.max(1, Math.ceil(wordCount / 200));
};

// Chapter data - clean slate
export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Mission Before Metrics",
    description: "Mission-driven work outlasts short-term wins. This chapter defines the book's core philosophy.",
    slug: "mission-before-metrics",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: [],
    wordCount: 2500,
    readingTime: calculateReadingTime(2500)
  },
  {
    id: 2,
    title: "Built Through Reps",
    description: "Progress is earned through intentional repetition. It's not about genius — it's about doing the work.",
    slug: "built-through-reps",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: [],
    wordCount: 3200,
    readingTime: calculateReadingTime(3200)
  },
  {
    id: 3,
    title: "Rituals Over Rules",
    description: "Adaptable routines create long-term resilience. Rules can be broken — rituals evolve.",
    slug: "rituals-over-rules",
    status: "coming-soon",
    publishDate: "May 29, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: [],
    wordCount: 2800,
    readingTime: calculateReadingTime(2800)
  },
  {
    id: 4,
    title: "Feedback is a Superpower",
    description: "Great products and great lifters grow through honest, iterative feedback.",
    slug: "feedback-is-a-superpower",
    status: "published",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: [],
    wordCount: 3500,
    readingTime: calculateReadingTime(3500)
  },
  {
    id: 5,
    title: "Progress Isn't Pretty",
    description: "Growth is messy. Embrace the uncomfortable middle.",
    slug: "progress-isnt-pretty",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: [],
    wordCount: 2900,
    readingTime: calculateReadingTime(2900)
  },
  {
    id: 6,
    title: "The Mission Demands Recovery",
    description: "Rest isn't a reward — it's a requirement. Real performance needs pause.",
    slug: "the-mission-demands-recovery",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: [],
    wordCount: 2600,
    readingTime: calculateReadingTime(2600)
  },
  {
    id: 7,
    title: "Train the Engine, Not Just the Output",
    description: "Don't optimize for appearance — build what actually powers performance.",
    slug: "train-the-engine-not-just-the-output",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: [],
    wordCount: 3100,
    readingTime: calculateReadingTime(3100)
  },
  {
    id: 8,
    title: "Decisions Are Made Under Load",
    description: "Who you are shows up under stress. Build decision strength now, not later.",
    slug: "decisions-are-made-under-load",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: [],
    wordCount: 2700,
    readingTime: calculateReadingTime(2700)
  },
  {
    id: 9,
    title: "Ship It Like You Show Up",
    description: "Every detail is a reflection of your standard. Show up like it matters.",
    slug: "ship-it-like-you-show-up",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: [],
    wordCount: 3000,
    readingTime: calculateReadingTime(3000)
  },
  {
    id: 10,
    title: "The Team Is the Tool",
    description: "You don't win alone. Build the crew that lifts with you.",
    slug: "the-team-is-the-tool",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: [],
    wordCount: 2400,
    readingTime: calculateReadingTime(2400)
  },
  {
    id: 11,
    title: "Strong Enough to Listen",
    description: "Power includes the ability to pause, receive, and adjust.",
    slug: "strong-enough-to-listen",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: [],
    wordCount: 2300,
    readingTime: calculateReadingTime(2300)
  },
  {
    id: 12,
    title: "The Weight Is Real. Own It.",
    description: "Real growth means taking responsibility for the hard things.",
    slug: "the-weight-is-real-own-it",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: [],
    wordCount: 2800,
    readingTime: calculateReadingTime(2800)
  },
  {
    id: 13,
    title: "Giving a Shit Works",
    description: "At the end of it all, it's not talent or tech that makes the difference. It's heart.",
    slug: "giving-a-shit-works",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: [],
    wordCount: 3400,
    readingTime: calculateReadingTime(3400)
  }
];
