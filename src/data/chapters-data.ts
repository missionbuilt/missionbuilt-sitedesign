
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
  status: "in-progress" | "coming-soon" | "not-started";
  sections?: Section[];
  furtherReading: Resource[];
}

// Chapter data - clean slate
export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Mission Before Metrics",
    description: "Mission-driven work outlasts short-term wins. This chapter defines the book's core philosophy.",
    slug: "mission-before-metrics",
    status: "not-started",
    sections: [],
    furtherReading: []
  },
  {
    id: 2,
    title: "Built Through Reps",
    description: "Progress is earned through intentional repetition. It's not about genius — it's about doing the work.",
    slug: "built-through-reps",
    status: "not-started",
    sections: [],
    furtherReading: []
  },
  {
    id: 3,
    title: "Rituals Over Rules",
    description: "Adaptable routines create long-term resilience. Rules can be broken — rituals evolve.",
    slug: "rituals-over-rules",
    status: "not-started",
    sections: [],
    furtherReading: []
  },
  {
    id: 4,
    title: "Feedback is a Superpower",
    description: "Great products and great lifters grow through honest, iterative feedback.",
    slug: "feedback-is-a-superpower",
    status: "not-started",
    sections: [],
    furtherReading: []
  },
  {
    id: 5,
    title: "Progress Isn't Pretty",
    description: "Growth is messy. Embrace the uncomfortable middle.",
    slug: "progress-isnt-pretty",
    status: "not-started",
    sections: [],
    furtherReading: []
  },
  {
    id: 6,
    title: "The Mission Demands Recovery",
    description: "Rest isn't a reward — it's a requirement. Real performance needs pause.",
    slug: "the-mission-demands-recovery",
    status: "not-started",
    sections: [],
    furtherReading: []
  },
  {
    id: 7,
    title: "Train the Engine, Not Just the Output",
    description: "Don't optimize for appearance — build what actually powers performance.",
    slug: "train-the-engine-not-just-the-output",
    status: "not-started",
    sections: [],
    furtherReading: []
  },
  {
    id: 8,
    title: "Decisions Are Made Under Load",
    description: "Who you are shows up under stress. Build decision strength now, not later.",
    slug: "decisions-are-made-under-load",
    status: "not-started",
    sections: [],
    furtherReading: []
  },
  {
    id: 9,
    title: "Ship It Like You Show Up",
    description: "Every detail is a reflection of your standard. Show up like it matters.",
    slug: "ship-it-like-you-show-up",
    status: "not-started",
    sections: [],
    furtherReading: []
  },
  {
    id: 10,
    title: "The Team Is the Tool",
    description: "You don't win alone. Build the crew that lifts with you.",
    slug: "the-team-is-the-tool",
    status: "not-started",
    sections: [],
    furtherReading: []
  },
  {
    id: 11,
    title: "Strong Enough to Listen",
    description: "Power includes the ability to pause, receive, and adjust.",
    slug: "strong-enough-to-listen",
    status: "not-started",
    sections: [],
    furtherReading: []
  },
  {
    id: 12,
    title: "The Weight Is Real. Own It.",
    description: "Real growth means taking responsibility for the hard things.",
    slug: "the-weight-is-real-own-it",
    status: "not-started",
    sections: [],
    furtherReading: []
  },
  {
    id: 13,
    title: "Giving a Shit Works",
    description: "At the end of it all, it's not talent or tech that makes the difference. It's heart.",
    slug: "giving-a-shit-works",
    status: "not-started",
    sections: [],
    furtherReading: []
  }
];
