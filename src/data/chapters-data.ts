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

// Utility function to calculate word count from chapter content
export const calculateWordCount = (chapter: Chapter): number => {
  let totalWords = 0;
  
  // Count words in description
  if (chapter.description) {
    totalWords += chapter.description.split(/\s+/).filter(word => word.length > 0).length;
  }
  
  // Count words in all sections
  if (chapter.sections && chapter.sections.length > 0) {
    chapter.sections.forEach(section => {
      if (section.title) {
        totalWords += section.title.split(/\s+/).filter(word => word.length > 0).length;
      }
      if (section.content) {
        totalWords += section.content.split(/\s+/).filter(word => word.length > 0).length;
      }
    });
  }
  
  return totalWords;
};

// Utility function to get dynamic reading time for a chapter
export const getDynamicReadingTime = (chapter: Chapter): number => {
  const wordCount = calculateWordCount(chapter);
  return calculateReadingTime(wordCount);
};

// Chapter data - clean slate
export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Mission Before Metrics",
    description: "Before progress can be measured, purpose must be clarified. This chapter explores how clear, motivating missions outlast vanity metrics — in both lifting and leadership. It draws on military, product, and gym floor lessons to show that true progress begins with alignment to something bigger than the numbers.",
    slug: "mission-before-metrics",
    status: "published",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 2,
    title: "Built Through Reps",
    description: "Mastery doesn't happen in a moment — it's forged through consistent, intentional repetition. This chapter examines how showing up, rep after rep, creates strength and strategy alike. Featuring parallels between building great software and building great squats, it's a case for doing the work — especially when it's boring.",
    slug: "built-through-reps",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 3,
    title: "Rituals Over Rules",
    description: "Systems that scale aren't built on rigid rules — they're powered by meaningful rituals. This chapter explores how intentional, repeatable behaviors unlock both innovation and resilience. Drawing from training cycles, product cadences, and team habits, it makes the case for flexible structure over dogma.",
    slug: "rituals-over-rules",
    status: "draft",
    publishDate: "May 29, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 4,
    title: "Feedback is a Superpower",
    description: "Strength grows where feedback flows. This chapter will dig into how lifters and leaders alike depend on real, raw, and regular feedback to improve. Whether it's a bar path breakdown or a postmortem from a launch, feedback is the force multiplier — but only if you're strong enough to seek it.",
    slug: "feedback-is-a-superpower",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 5,
    title: "Progress Isn't Pretty",
    description: "It's tempting to chase polished outcomes — but real growth looks messy. This chapter reframes failure, soreness, and setbacks as essential signs of pursuit. From missed PRs to product pivots, it's all part of the mission.",
    slug: "progress-isnt-pretty",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 6,
    title: "The Mission Demands Recovery",
    description: "High performance can't be sustained without strategic rest. Just like training cycles include deload weeks, leadership must include space to reset. This chapter explores burnout, recovery rhythms, and how stillness fuels strength.",
    slug: "the-mission-demands-recovery",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 7,
    title: "Train the Engine, Not Just the Output",
    description: "Don't just chase flashy features or max lifts — build the engine underneath. This chapter will cover foundational systems thinking, aerobic capacity, platform architecture, and the quiet capabilities that make everything else possible.",
    slug: "train-the-engine-not-just-the-output",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 8,
    title: "Decisions Are Made Under Load",
    description: "Stress reveals the truth — in your form, your product, and your team. From crisis decision-making to heavy triples, this chapter explores how clarity, composure, and character are tested under pressure.",
    slug: "decisions-are-made-under-load",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 9,
    title: "Ship It Like You Show Up",
    description: "Great teams ship with the same integrity they train with. This chapter draws a line between effort in the gym and excellence in execution — showing how preparation, not perfection, defines professional momentum.",
    slug: "ship-it-like-you-show-up",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 10,
    title: "The Team Is the Tool",
    description: "No matter how skilled you are, you're only as strong as your squad. In lifting and in leadership, collaboration compounds results. This chapter will emphasize humility, trust, and the compound power of working in sync.",
    slug: "the-team-is-the-tool",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 11,
    title: "Strong Enough to Listen",
    description: "Listening is a strength skill. Whether you're spotting a lift or guiding a product, hearing others — really hearing them — is what separates amateurs from pros. This chapter explores user research, active listening, and feedback loops from the bar to the boardroom.",
    slug: "strong-enough-to-listen",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 12,
    title: "The Weight Is Real. Own It.",
    description: "Responsibility isn't a burden — it's the privilege of those strong enough to carry it. This chapter dives into leadership accountability, from PR mishandling to platform failures, and reminds us that owning the weight is part of the mission.",
    slug: "the-weight-is-real-own-it",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 13,
    title: "Giving a Shit Works",
    description: "The secret ingredient isn't talent. It's care. This closing chapter highlights anonymized success stories and returns to the core theme: that showing up, giving a shit, and working with heart changes lives — and not just your own.",
    slug: "giving-a-shit-works",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  }
];
