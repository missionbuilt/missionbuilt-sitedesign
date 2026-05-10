/**
 * Mission Built — book metadata and structure.
 *
 * Ported from the design handoff's `mockups/shared.jsx` (`MB` object).
 * This file is the source of truth for chapter list, section names, and
 * sample reading content. Real chapter prose lives in `src/content/chapters/`
 * as MDX once migrated.
 */

export interface Chapter {
  /** Two-digit chapter number, e.g. "01" */
  n: string;
  title: string;
  sections: string[];
  /** Estimated read time in minutes (sum across all sections) */
  mins: number;
}

export interface Bookend {
  n: string;
  title: string;
  kicker: 'Prologue' | 'Conclusion';
  /** Estimated read time in minutes */
  mins: number;
}

export interface Part {
  /** Roman numeral, e.g. 'I' */
  roman: 'I' | 'II' | 'III';
  /** Spelled-out label, e.g. 'Part One' */
  label: string;
  /** The Part's title, e.g. 'The Foundation' */
  title: string;
  /** One-line blurb shown under the title in the Part header column */
  blurb: string;
  /** Slice range into MB.chapters — [startInclusive, endExclusive] */
  range: [number, number];
  /** Number of chapters within the Part the reader has finished */
  done: number;
}

export interface ReadingFixture {
  chapterN: string;
  chapterTitle: string;
  sectionN: string;
  sectionTitle: string;
  body: string[];
  pull: string;
  prev: { n: string; title: string };
  next: { n: string; title: string; section: string };
}

export interface BookMeta {
  bookTitle: string;
  bookSubtitle: string;
  author: string;
  authorTagline: string;
  blurbLong: string;
  blurbShort: string;
  license: string;
  version: string;
  prologue: Bookend;
  conclusion: Bookend;
  parts: Part[];
  chapters: Chapter[];
  reading: ReadingFixture;
}

export const MB: BookMeta = {
  bookTitle: 'Mission Built',
  bookSubtitle: 'A Field Guide for Building Things That Matter',
  author: 'Mike Nichols',
  authorTagline: 'Veteran. Builder. Coach. Advocate.',
  blurbLong:
    "An open-source philosophy forged through reps in the gym and lessons from the field. It's for anyone who believes progress isn't pretty, leadership is earned, and showing up with purpose changes everything.",
  blurbShort:
    "A field guide for anyone trying to build something that lasts. A body, a product, a company, or a life with integrity.",
  license: 'CC BY-NC-SA 4.0',
  version: 'v1.13',
  prologue: { n: '00', title: 'Built for More', kicker: 'Prologue', mins: 4 },
  conclusion: { n: '14', title: 'Giving a Shit Works', kicker: 'Conclusion', mins: 6 },

  parts: [
    { roman: 'I',   label: 'Part One',   title: 'The Foundation',
      blurb: 'Mission, identity, the long game.',
      range: [0, 4], done: 0 },
    { roman: 'II',  label: 'Part Two',   title: 'The Reps',
      blurb: 'Practice, recovery, the work that compounds.',
      range: [4, 8], done: 0 },
    { roman: 'III', label: 'Part Three', title: 'The Lift',
      blurb: 'Decisions under load, shipping, the team, and the chapter the book has been reading toward.',
      range: [8, 13], done: 0 },
  ],

  chapters: [
    { n: '01', title: 'Mission Before Metrics',
      sections: ['The Mission Is the Magnet', 'The Drift', 'Repetition with Intention'],
      mins: 14 },
    { n: '02', title: 'Built Through Reps',
      sections: ['The Myth of Overnight Success', 'Repetition Is Not Redundancy', 'When the Spark Fades', 'The Multiplier of Boring Work', 'The Work Becomes the Win'],
      mins: 22 },
    { n: '03', title: 'Rituals Over Rules',
      sections: ['The Ritual Is the Rail', 'Listen to Your Signals', 'Change the Pattern, Not the Practice'],
      mins: 12 },
    { n: '04', title: 'Feedback Is A Superpower',
      sections: ['Cues, Not Critiques', 'Make Feedback a Ritual', 'Listening Is a Lift', 'Strong Feedback, Strong Foundations'],
      mins: 24 },
    { n: '05', title: "Progress Isn't Pretty",
      sections: ['Mastery Is Repetition with Feedback', 'The Grind That Grows', 'Change the Phase, Not the Process', 'Growth That Holds'],
      mins: 18 },
    { n: '06', title: 'The Mission Demands Recovery',
      sections: ['The Biology of Bounce Back', 'Rails, Not Barriers', 'Sustainable Strength', 'Recovery Creates Room for Perspective'],
      mins: 17 },
    { n: '07', title: 'Train the Engine, Not Just the Output',
      sections: ['Work Capacity Over Window Dressing', 'Internal Strength for External Load', 'What Powers You?'],
      mins: 16 },
    { n: '08', title: 'Decisions Are Made Under Load',
      sections: ['Stress Tests the System', 'Clarity Beats Certainty', 'Training for Chaos'],
      mins: 18 },
    { n: '09', title: 'Ship It Like You Show Up',
      sections: ['Integrity in Small Things', 'The Shipping Standard', 'Everything Built In'],
      mins: 17 },
    { n: '10', title: 'The Team Is the Tool',
      sections: ['Spotters Save More Than Reps', 'Trust Is a Shared PR', 'The Tool You Invest In'],
      mins: 16 },
    { n: '11', title: 'Strong Enough to Listen',
      sections: ['Listening as Leadership', 'Listening Between the Lines', 'The Ego Lift'],
      mins: 13 },
    { n: '12', title: 'The Weight Is Real. Own It.',
      sections: ["Don't Dodge the Heavy Sets", 'The Responsibility to Finish', 'The Lift and the Legacy'],
      mins: 12 },
    { n: '13', title: 'AI Is the New OS. The Mission Is the Only App That Matters.',
      sections: ['AI Under the Bar', 'AI in the Boardroom', 'What Stays Yours'],
      mins: 18 },
  ],

  reading: {
    chapterN: '01',
    chapterTitle: 'Mission Before Metrics',
    sectionN: '1.1',
    sectionTitle: 'The Mission Is the Magnet',
    body: [
      "Before I ever built products, I served in the U.S. Army as an Airborne intelligence sergeant. That experience shaped everything that came after: working in service of something larger than myself, making decisions under pressure with lives on the line. I learned early that mission comes first. Not ego. Not recognition. Mission.",
      "That mindset followed me from the military to cybersecurity, and into leadership roles where the stakes changed but the values stayed the same. Whether it was securing critical systems, helping build Elastic Security, or coaching in the gym, the goal has always been the same: real strength is lifting others.",
      "One of the proudest chapters of my product career was building Endgame. We entered a brutally competitive market, going head-to-head with massive players like McAfee and CrowdStrike, and carved out real ground. Not because we had more money or brand recognition, but because we had something harder to copy: a clear mission. Protect high-value targets from nation-state level attacks. That focus, and the small, fierce team who rallied behind it, made all the difference.",
    ],
    pull: '"Real strength is lifting others."',
    prev: { n: '00', title: 'Built for More' },
    next: { n: '01', title: 'The Drift', section: '1.2' },
  },
};

/** Total sections across all 12 chapters. */
export const TOTAL_SECTIONS: number = MB.chapters.reduce(
  (sum, c) => sum + c.sections.length,
  0
);

/** Total chapters. */
export const TOTAL_CHAPTERS: number = MB.chapters.length;

/** Total read time across all chapters (minutes). */
export const TOTAL_MINUTES: number = MB.chapters.reduce(
  (sum, c) => sum + c.mins,
  0
);

/** Pretty total read time, e.g. "~3h 19m". */
export function totalReadTime(): string {
  const total = TOTAL_MINUTES;
  const h = Math.floor(total / 60);
  const m = total % 60;
  return h > 0 ? `~${h}h ${m}m` : `~${m}m`;
}

/**
 * Convert a section title into a URL slug.
 * "The Mission Is the Magnet" → "the-mission-is-the-magnet"
 * "Don't Dodge the Heavy Sets" → "dont-dodge-the-heavy-sets"
 * "Aside: Recovery Creates Room for Perspective" → "aside-recovery-creates-room-for-perspective"
 */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Build a section URL from chapter number and section title. */
export function sectionUrl(chapterN: string, title: string): string {
  return `/chapters/${chapterN}/${slugify(title)}`;
}

/** Build the URL for the first section of a chapter. */
export function firstSectionUrl(chapter: Chapter): string {
  return sectionUrl(chapter.n, chapter.sections[0]);
}
