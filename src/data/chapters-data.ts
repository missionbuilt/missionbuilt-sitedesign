
export interface Section {
  id: string;
  title: string;
  content: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  status: 'planning' | 'in-progress' | 'complete';
  sections: Section[];
  furtherReading: string[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Mission Over Metrics",
    description: "Why purpose-driven leadership beats vanity metrics in both the gym and the boardroom.",
    status: 'complete',
    sections: [
      {
        id: "mission-is-the-magnet",
        title: "The Mission Is the Magnet",
        content: "Before I ever built products, I served in the U.S. Army as an Airborne intelligence sergeant. That experience — of working in service of something larger than myself, of making decisions under pressure with lives on the line — shaped everything that came after. I learned early that mission comes first. Not ego. Not recognition. Mission.\n\nThat mindset followed me from the military to cybersecurity, and into leadership roles where the stakes changed but the values stayed the same. Whether it was securing critical systems, helping build Elastic Security, or coaching in the gym, the goal has always been the same: real strength is lifting others.\n\nOne of the proudest chapters of my product career was building Endgame. We entered a brutally competitive market — going head-to-head with massive players like McAfee and CrowdStrike — and carved out real ground. Not because we had more money or brand recognition, but because we had something harder to copy: a clear mission. Protect high-value targets from nation-state level attacks. That focus, and the small, fierce team who rallied behind it, made all the difference.\n\nAt the heart of it was Nate Fick, a Marine officer turned tech CEO, and later the U.S. Ambassador for Cyberspace and Digital Policy. He led with conviction, clarity, and a deep respect for the mission. In all-hands meetings, Nate would remind us that we were an \"elevator asset company\" — that if the building burned down, the most important assets could still fit in the elevator. It wasn't the code or the tools. It was the people — the ones who understood the user's mission and had the passion to serve it.\n\nThat idea stuck with me. Nate's example reinforced what I learned in uniform: The success is the user's success. Your mission is their mission.\n\nMetrics are the outcome of making your user successful. Yes, we need to measure them. But they are the result of serving the mission — not the reason for it."
      },
      {
        id: "the-drift",
        title: "The Drift",
        content: "At first, the metric is a mirror — it reflects the mission. Clean, focused, and true.\n\nBut over time, something shifts. Quietly. Gradually. The mirror warps. And without noticing, we begin steering toward the reflection instead of the road.\n\nThis is the Drift.\n\nIt doesn't announce itself. It rarely arrives with bad intent. It begins with a goal:\n\nLaunch the feature by Q4.\nHit 405 on deadlift.\nIncrease MAUs by 20%.\n\nReasonable. Measurable. Actionable. These are the numbers we hold up as evidence that we're making progress — and for a while, they are.\n\nBut then: the goal becomes the game."
      },
      {
        id: "repetition-with-intention",
        title: "Repetition with Intention",
        content: "You don't get strong by lifting heavy once.\n\nYou get strong by showing up again. And again. And again.\n\nBut if you do the same thing forever, you don't get stronger — you get stuck.\n\nThat's the tension of progress: it demands ritual, but it punishes repetition without variation.\n\nWhether in the gym or in product, growth comes through iteration — small, deliberate cycles of effort. You log your training. You tweak your form. You try a new tempo. In software, you ship. You measure. You talk to the user. You try again. The process isn't glamorous — but it's generative."
      }
    ],
    furtherReading: [
      "The Lean Startup by Eric Ries",
      "Atomic Habits by James Clear",
      "The Hard Thing About Hard Things by Ben Horowitz"
    ]
  },
  {
    id: 2,
    title: "Reps Over Results",
    description: "How consistent effort compounds into extraordinary outcomes — one training session at a time.",
    status: 'complete',
    sections: [
      {
        id: "the-myth-of-overnight-success",
        title: "The Myth of Overnight Success",
        content: "We've all heard the stories.\n\nThe product that \"took off overnight.\"\n\nThe lifter who casually pulls four plates like they've always been able to.\n\nThe founder in a garage who changes the world with a single keynote.\n\nIt's tempting to believe that mastery happens like that — in a flash.\n\nBut that's not really how it works."
      },
      {
        id: "repetition-is-not-redundancy",
        title: "Repetition Is Not Redundancy",
        content: "Not all reps count the same.\n\nAnyone who's coasted through a gym session, just moving weight, knows the difference. One set burns time. Another builds awareness, precision, and strength — even if the numbers don't change.\n\nThe same is true in product.\n\nRepetition isn't redundant when it's intentional. When it's used to test assumptions, refine interfaces, tune performance, or build something just a little closer to what users actually need. That's the kind of rep that moves things forward."
      },
      {
        id: "when-the-spark-fades",
        title: "When the Spark Fades",
        content: "The first reps are easy — not physically, but emotionally. You're fired up. Everything's new. Progress is loud and obvious.\n\nBut what happens after the rush?\n\nIn lifting, it's the long middle. The early PRs stop coming. Your form stalls. You show up, grind through the same sets, and wonder if you're actually moving forward."
      },
      {
        id: "the-multiplier-of-boring-work",
        title: "The Multiplier of Boring Work",
        content: "There's a kind of work that doesn't make headlines. No one posts their warm-up sets. No one celebrates shaving 100ms off load time.\n\nBut that's the work that wins.\n\nFor every PR pulled in competition, there are hundreds of days of grinding behind it — submaximal sets, long pauses, light reps, mental resets."
      },
      {
        id: "the-work-becomes-the-win",
        title: "The Work Becomes the Win",
        content: "At some point, the reps stop being something you have to do. They just become something you do.\n\nYou stop chasing motivation and start trusting momentum.\n\nYou stop asking when it gets easy and start asking how to keep showing up.\n\nAnd that's the shift — not just in the gym or in your sprint board, but in your mindset. You lift because you care. You build because it matters. Because you love it."
      }
    ],
    furtherReading: [
      "Peak Performance by Brad Stulberg",
      "The Power of Now by Eckhart Tolle",
      "Mindset by Carol Dweck"
    ]
  },
  {
    id: 3,
    title: "Rituals Over Rules",
    description: "Building flexible frameworks that adapt to your team and your growth.",
    status: 'in-progress',
    sections: [
      {
        id: "the-ritual-is-the-rail",
        title: "The Ritual is the Rail",
        content: "Rituals provide flexible structure in both training and team life. Coming soon."
      }
    ],
    furtherReading: [
      "The Practice by Seth Godin",
      "Atomic Habits by James Clear"
    ]
  }
];
