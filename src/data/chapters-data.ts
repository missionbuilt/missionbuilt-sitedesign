
// Chapter status types
export type ChapterStatus = "published" | "coming-soon" | "draft";

// Simplified Chapter interface - metadata only
export interface Chapter {
  id: number;
  title: string;
  description: string;
  status: ChapterStatus;
}

// Log content structure for dynamic loading
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
  heroImage?: string;
  title?: string;
  author?: string;
  datePublished?: string;
  sections: LogSection[];
  furtherReading?: FurtherReadingResource[];
}

// Utility function for reading time calculation
export const getDynamicReadingTime = (wordCount: number = 0): number => {
  const wordsPerMinute = 200;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};

// Metadata-only chapters array
export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Mission Before Metrics",
    description: "Before progress can be measured, purpose must be clarified. This chapter explores how clear, motivating missions outlast vanity metrics — in both lifting and leadership. It draws on military, product, and gym floor lessons to show that true progress begins with alignment to something bigger than the numbers.",
    status: "coming-soon"
  },
  {
    id: 2,
    title: "Built Through Reps",
    description: "Mastery doesn't happen in a moment — it's forged through consistent, intentional repetition. This chapter examines how showing up, rep after rep, creates strength and strategy alike. Featuring parallels between building great software and building great squats, it's a case for doing the work — especially when it's boring.",
    status: "coming-soon"
  },
  {
    id: 3,
    title: "Rituals Over Rules",
    description: "Systems that scale aren't built on rigid rules — they're powered by meaningful rituals. This chapter explores how intentional, repeatable behaviors unlock both innovation and resilience. Drawing from training cycles, product cadences, and team habits, it makes the case for flexible structure over dogma.",
    status: "coming-soon"
  },
  {
    id: 4,
    title: "Feedback Is a Superpower",
    description: "Strength grows where feedback flows. This chapter will dig into how lifters and leaders alike depend on real, raw, and regular feedback to improve. Whether it's a bar path breakdown or a postmortem from a launch, feedback is the force multiplier — but only if you're strong enough to seek it.",
    status: "coming-soon"
  },
  {
    id: 5,
    title: "Progress Isn't Pretty",
    description: "It's tempting to chase polished outcomes — but real growth looks messy. This chapter reframes failure, soreness, and setbacks as essential signs of pursuit. From missed PRs to product pivots, it's all part of the mission.",
    status: "coming-soon"
  },
  {
    id: 6,
    title: "The Mission Demands Recovery",
    description: "High performance can't be sustained without strategic rest. Just like training cycles include deload weeks, leadership must include space to reset. This chapter explores burnout, recovery rhythms, and how stillness fuels strength.",
    status: "coming-soon"
  },
  {
    id: 7,
    title: "Train the Engine, Not Just the Output",
    description: "Don't just chase flashy features or max lifts — build the engine underneath. This chapter will cover foundational systems thinking, aerobic capacity, platform architecture, and the quiet capabilities that make everything else possible.",
    status: "coming-soon"
  },
  {
    id: 8,
    title: "Decisions Are Made Under Load",
    description: "Stress reveals the truth — in your form, your product, and your team. From crisis decision-making to heavy triples, this chapter explores how clarity, composure, and character are tested under pressure.",
    status: "coming-soon"
  },
  {
    id: 9,
    title: "Ship It Like You Show Up",
    description: "Great teams ship with the same integrity they train with. This chapter draws a line between effort in the gym and excellence in execution — showing how preparation, not perfection, defines professional momentum.",
    status: "coming-soon"
  },
  {
    id: 10,
    title: "The Team Is the Tool",
    description: "No matter how skilled you are, you're only as strong as your squad. In lifting and in leadership, collaboration compounds results. This chapter will emphasize humility, trust, and the compound power of working in sync.",
    status: "coming-soon"
  },
  {
    id: 11,
    title: "Strong Enough to Listen",
    description: "Listening is a strength skill. Whether you're spotting a lift or guiding a product, hearing others — really hearing them — is what separates amateurs from pros. This chapter explores user research, active listening, and feedback loops from the bar to the boardroom.",
    status: "coming-soon"
  },
  {
    id: 12,
    title: "The Weight Is Real. Own It.",
    description: "Responsibility isn't a burden — it's the privilege of those strong enough to carry it. This chapter dives into leadership accountability, from PR mishandling to platform failures, and reminds us that owning the weight is part of the mission.",
    status: "coming-soon"
  },
  {
    id: 13,
    title: "Giving a Shit Works",
    description: "The secret ingredient isn't talent. It's care. This closing chapter highlights anonymized success stories and returns to the core theme: that showing up, giving a shit, and working with heart changes lives — and not just your own.",
    status: "coming-soon"
  }
];
