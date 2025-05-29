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

// Chapter data - your complete original list
export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Mission Before Metrics",
    description: "Mission-driven work outlasts short-term wins. This chapter defines the book's core philosophy.",
    slug: "mission-before-metrics",
    status: "in-progress",
    sections: [
      {
        id: "the-mission-is-the-magnet",
        title: "The Mission is the Magnet",
        content: "Success isn't the dashboard — it's the user's outcome. A clear breakdown of the User Mission Method. Forget vanity metrics — this is about aligning everything you do to help users win."
      }
    ],
    furtherReading: [
      {
        title: "One Bullet Away — Wikipedia",
        description: "Memoir by Marine officer Nathaniel Fick, tracing his journey from Ivy League student to combat leader in Afghanistan and Iraq, offering an unflinching look at modern military leadership and ethical decision-making in war.",
        url: "https://en.wikipedia.org/wiki/One_Bullet_Away",
        note: ""
      },
      {
        title: "Cyberpunk 2077 Launch & CD Projekt Red",
        description: "CD Projekt Red Stock Drops After Buggy, Messy 'Cyberpunk 2077' Launch – Forbes",
        url: "https://www.forbes.com/sites/davidthier/2020/12/11/cd-projekt-red-stock-drops-after-buggy-messy-cyberpunk-2077-launch/",
        note: "A case study in date-driven shipping that sacrificed long-term trust for short-term metrics."
      },
      {
        title: "Simone Biles & Mission-Aligned Decision-Making",
        description: "\"I Don't Have to Be Fine\": Everything Simone Biles Has Said About Mental Health – People Magazine",
        url: "https://people.com/sports/everything-simone-biles-has-said-about-mental-health/",
        note: "An athlete choosing alignment over achievement — and sparking a global conversation."
      },
      {
        title: "Patagonia & Purpose-Driven Brand Behavior",
        description: "Don't Buy This Jacket – Patagonia",
        url: "https://www.patagonia.com/stories/dont-buy-this-jacket/story-18615.html",
        note: "Iconic ad campaign where brand values overrode short-term sales incentives."
      },
      {
        title: "Research on Purpose & Fulfillment",
        description: "The Business Case for Purpose – Harvard Business Review, 2016",
        url: "https://hbr.org/sponsored/2016/04/the-business-case-for-purpose",
        note: "Purpose-driven companies see higher retention, satisfaction, and performance."
      },
      {
        title: "Purpose at Work – Imperative & NYU Study, 2016",
        description: "",
        url: "https://www.imperative.com/resource/2016-workforce-purpose-index",
        note: "54% of purpose-driven employees are more likely to stay 5+ years."
      },
      {
        title: "Purpose: Shifting from Why to How – McKinsey & Company, 2020",
        description: "",
        url: "https://www.mckinsey.com/business-functions/people-and-organizational-performance/our-insights/purpose-shifting-from-why-to-how",
        note: "A roadmap for operationalizing purpose across the org."
      },
      {
        title: "Strategic Framing: The OODA Loop",
        description: "John Boyd – OODA Loop – Wikipedia",
        url: "https://en.wikipedia.org/wiki/OODA_loop",
        note: "Military strategy model focused on Observation, Orientation, Decision, and Action. Useful for product and performance under uncertainty."
      },
      {
        title: "Case Study: Product & Organizational Drift",
        description: "What Really Brought Down the Boeing 737 Max? – The New York Times",
        url: "https://www.nytimes.com/2019/09/18/magazine/boeing-737-max-crashes.html",
        note: "How engineering culture and metric pressures at Boeing overtook the company's safety-driven mission — with catastrophic results."
      },
      {
        title: "Individual Drift: Strength and Misalignment",
        description: "Hafthor Björnsson on Pec Injury – Essentially Sports",
        url: "https://www.essentiallysports.com/bodybuilding-news-probably-my-biggest-mistake-months-after-a-horrifying-pec-tear-while-bench-pressing-strongman-legend-makes-a-candid-confession-about-his-injury-hafthor-bjornsson/",
        note: "A personal reflection on chasing numbers too hard — and paying the price with injury."
      },
      {
        title: "Hafthor Björnsson Injury Coverage – AS.com",
        description: "",
        url: "https://en.as.com/entertainment/game-of-thrones-star-hafthor-bjornsson-suffers-nasty-injury-while-bench-pressing-n/",
        note: "News coverage providing details and public reaction to the injury — reinforces the story's cautionary angle."
      },
      {
        title: "Research: Purpose and Retention",
        description: "Improving Employee Retention – Guidehouse",
        url: "https://guidehouse.com/-/media/new-library/industries/defense-and-security/documents/2023/gh-161-wp-improving-employee-retention.pdf",
        note: "Research-based strategies for employee retention, including mission alignment and culture as key levers."
      },
      {
        title: "Purpose-Driven Work and Turnover – Benevity Talent Retention Study",
        description: "",
        url: "https://benevity.com/talent-retention-study",
        note: "Mission-driven workers are significantly more likely to stay long-term — supports your thesis with compelling data."
      },
      {
        title: "Rituals, Adaptation, and Innovation",
        description: "Stefi Cohen's Training Philosophy and Hybrid Methodology – Hybrid Performance Method",
        url: "https://www.hybridperformancemethod.com/",
        note: "An elite athlete's fusion of structure and adaptation in strength programming."
      },
      {
        title: "Agile Retrospectives and Team Rituals – Esther Derby & Diana Larsen",
        description: "",
        url: "https://www.agilealliance.org/resources/books/agile-retrospectives-making-good-teams-great/",
        note: "A guide to turning recurring team reviews into meaningful improvement rituals."
      },
      {
        title: "Atlassian ShipIt (Hack Week Model) – Atlassian",
        description: "",
        url: "https://www.atlassian.com/company/shipit",
        note: "A structured ritual encouraging innovation through autonomy and creative freedom."
      },
      {
        title: "Spotify Hack Culture Overview – Scaling Agile @ Spotify (Whitepaper)",
        description: "",
        url: "https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf",
        note: "How Spotify built agility and creativity into team rituals — not rigid processes."
      }
    ]
  },
  {
    id: 2,
    title: "Built Through Reps",
    description: "Progress is earned through intentional repetition. It's not about genius — it's about doing the work.",
    slug: "built-through-reps",
    status: "in-progress",
    sections: [
      {
        id: "the-myth-of-overnight-success",
        title: "The Myth of Overnight Success",
        content: "Greatness isn't born; it's built — one rep, one iteration at a time. Whether it's product iteration or lifting volume, this chapter highlights how repeated effort compounds into capability."
      }
    ],
    furtherReading: [
      {
        title: "Deeper Read on Instagram's Rise",
        description: "No Filter: The Inside Story of Instagram by Sarah Frier – A detailed, behind-the-scenes look at Instagram's transformation from Burbn to a cultural phenomenon.",
        url: "https://en.wikipedia.org/wiki/No_Filter:_The_Inside_Story_of_Instagram",
        note: ""
      },
      {
        title: "The iPhone's hidden grind",
        description: "How Steve Jobs Faked His Way Through Unveiling the iPhone – NY Magazine",
        url: "https://nymag.com/intelligencer/2017/01/how-steve-jobs-faked-his-way-through-unveiling-the-iphone.html",
        note: ""
      },
      {
        title: "Instagram's evolution from Burbn",
        description: "Instagram – Wikipedia",
        url: "https://en.wikipedia.org/wiki/Instagram#History",
        note: ""
      },
      {
        title: "Lifting progress and the plateau effect",
        description: "Overcoming Strength Training Plateaus – Ironmaster",
        url: "https://www.ironmaster.com/blog/strength-training-plateau/",
        note: ""
      },
      {
        title: "Product development isn't always fast",
        description: "Failing Fast: Why It's Essential for Entrepreneurs – Harvard Business School Online",
        url: "https://online.hbs.edu/blog/post/fail-fast",
        note: ""
      },
      {
        title: "MV, MEV, MAV, MRV Explained",
        description: "Israetel, Mike. \"MV, MEV, MAV, MRV Explained.\" Renaissance Periodization.",
        url: "https://drmikeisraetel.com/dr-mike-israetel-mv-mev-mav-mrv-explained/",
        note: ""
      },
      {
        title: "The Medici Effect",
        description: "Finding Creative Inspiration in Unlikely Places - A foundational book on innovation through diversity and intersectional thinking.",
        url: "https://phoscreative.com/articles/the-medici-effect/",
        note: ""
      },
      {
        title: "James Clear – Atomic Habits",
        description: "A guide to building better habits and systems that support long-term success, including the principle: \"You do not rise to the level of your goals. You fall to the level of your systems.\"",
        url: "https://jamesclear.com/atomic-habits",
        note: ""
      },
      {
        title: "Basecamp's Shape Up Method – Signal v. Noise",
        description: "An approach to product work that values thoughtful iteration, foundational improvements, and meaningful user feedback.",
        url: "https://basecamp.com/shapeup",
        note: ""
      },
      {
        title: "Talking to Humans — Giff Constable",
        description: "A practical guide to validating ideas and rediscovering motivation by speaking directly with the users you aim to serve.",
        url: "https://talkingtohumans.com",
        note: ""
      },
      {
        title: "Angela Duckworth – Grit: The Power of Passion and Perseverance",
        description: "Explores why sustained effort matters more than intensity, and how consistency builds excellence.",
        url: "https://angeladuckworth.com/grit-book",
        note: ""
      },
      {
        title: "Darren Hardy – The Compound Effect",
        description: "Details how small actions done consistently lead to exponential outcomes — a key insight for boring but high-leverage work.",
        url: "https://www.thecompoundeffect.com",
        note: ""
      },
      {
        title: "Martin Fowler – Is High Quality Software Worth the Cost?",
        description: "Argues that invisible work like refactoring and testing leads to faster long-term delivery — a strong product parallel to back-off sets and mobility work.",
        url: "https://martinfowler.com/articles/is-quality-worth-cost.html",
        note: ""
      }
    ]
  },
  {
    id: 3,
    title: "Rituals Over Rules",
    description: "Adaptable routines create long-term resilience. Rules can be broken — rituals evolve.",
    slug: "rituals-over-rules",
    status: "in-progress",
    sections: [
      {
        id: "the-ritual-is-the-rail",
        title: "The Ritual is the Rail",
        content: "Rituals provide flexible structure in both training and team life. Coming soon."
      }
    ],
    furtherReading: [
      {
        title: "Chalk Up: Rituals That Prepare the Mind and Body",
        description: "Explores how pre-lift rituals like chalking hands and visualization prepare athletes mentally and physically.",
        url: "https://www.elitefts.com/education/pre-workout-ritual-instructions",
        note: ""
      },
      {
        title: "Stefi Cohen's Hybrid Training Philosophy",
        description: "Discusses balancing compound and isolation movements, emphasizing adaptability in training.",
        url: "https://www.hybridperformancemethod.com/blog/are-isolation-movements-better-for-muscle-growth",
        note: ""
      },
      {
        title: "Autoregulation: Can It Be Beneficial for Every Type of Strength Athlete?",
        description: "Details how lifters adjust training intensity based on daily readiness, promoting flexibility within structured programs.",
        url: "https://barbend.com/autoregulation/",
        note: ""
      },
      {
        title: "CNS Fatigue: Symptoms and Recovery Strategies",
        description: "Addresses central nervous system fatigue and strategies for recovery, highlighting the importance of listening to one's body.",
        url: "https://www.strongerbyscience.com/qa/",
        note: ""
      },
      {
        title: "What is a Stand-Up Meeting? [+ Expert Tips]",
        description: "Provides guidance on conducting effective stand-up meetings to maintain team alignment.",
        url: "https://www.atlassian.com/agile/scrum/standups",
        note: ""
      },
      {
        title: "Leadership @ Elastic | Kevin Kluge: Distributed for the Better",
        description: "Discusses Elastic's approach to distributed work and maintaining engineering culture.",
        url: "https://www.elastic.co/blog/leadership-elastic-kevin-kluge-distributed-for-the-better",
        note: ""
      },
      {
        title: "How to Collaborate Effectively If Your Team Is Remote",
        description: "Harvard Business Review offers evidence-based strategies for improving communication and trust across distributed teams — reinforcing the importance of intentional, adaptive rituals in asynchronous environments.",
        url: "https://hbr.org/2018/02/how-to-collaborate-effectively-if-your-team-is-remote",
        note: ""
      },
      {
        title: "Shape Up: Stop Running in Circles and Ship Work that Matters",
        description: "Introduces a methodology that emphasizes flexible work cycles over rigid sprints.",
        url: "https://basecamp.com/shapeup",
        note: ""
      },
      {
        title: "Understanding Developer Burnout",
        description: "Breaks down the causes, symptoms, and strategies for preventing developer burnout — with a focus on workload balance, autonomy, and the importance of adaptive team rituals.",
        url: "https://devskiller.com/blog/developer-burnout/",
        note: ""
      },
      {
        title: "The Hidden Power of Workplace Rituals",
        description: "Explores how intentional rituals in the workplace can strengthen psychological safety, enhance purpose, and boost performance.Harvard Business Review",
        url: "https://hbr.org/2022/08/the-hidden-power-of-workplace-rituals",
        note: ""
      },
      {
        title: "Crunch Culture: How Game Development Becomes Toxic",
        description: "Investigates the detrimental effects of excessive overtime in the gaming industry, highlighting how passion-driven projects can lead to burnout and decreased quality.",
        url: "https://reporter.rit.edu/6288/tech/crunch-culture-how-game-development-becomes-toxic/",
        note: ""
      },
      {
        title: "Red Dead Redemption 2 Exposes the Gaming Industry's Dangerous Addiction to Overtime",
        description: "WIRED investigates the systemic issue of \"crunch culture\" in game development, using Rockstar Games as a focal point. The article highlights how extended overtime, driven by passion and pressure, can lead to long-term burnout and erode product quality.",
        url: "https://www.wired.com/story/red-dead-redemption-2-rockstar-overtime-crunch/",
        note: ""
      },
      {
        title: "How Product Leaders Can Learn to Say No",
        description: "Ken Norton, a former Google product leader and GV partner, emphasizes the critical skill of saying \"no\" in product management. He discusses how ambiguity can derail teams and the necessity for PMs to set clear boundaries, even when facing pressure from executives. This essay provides practical advice on maintaining focus and protecting the team's priorities.",
        url: "https://www.bringthedonuts.com/essays/discipline-of-no.html",
        note: ""
      }
    ]
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
