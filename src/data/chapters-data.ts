// Chapter data structure
export interface Resource {
  title: string;
  description: string;
  url: string;
  note: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  slug: string;
  status: "in-progress" | "coming-soon" | "not-started";
  furtherReading: Resource[];
}

// Chapter data
export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Mission Before Metrics",
    description: "Success isn't the dashboard — it's the user's outcome. A clear breakdown of the User Mission Method. Forget vanity metrics — this is about aligning everything you do to help users win.",
    slug: "mission-before-metrics",
    status: "in-progress",
    furtherReading: [
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
    description: "Greatness isn't born; it's built — one rep, one iteration at a time. Whether it's product iteration or lifting volume, this chapter highlights how repeated effort compounds into capability.",
    slug: "built-through-reps",
    status: "in-progress",
    furtherReading: [
      {
        title: "The Power of Repetition in Skill Development",
        description: "Research on deliberate practice and the 10,000-hour rule",
        url: "https://example.com/repetition-skill-development",
        note: "Different resources for chapter 2 about building through repetition."
      }
    ]
  },
  {
    id: 3,
    title: "Rituals Over Rules",
    description: "Rigid processes break. Rituals scale. Replace rigid roadmaps and overly prescriptive training programs with adaptable, purpose-driven rituals.",
    slug: "rituals-over-rules",
    status: "coming-soon",
    furtherReading: []
  },
  {
    id: 4,
    title: "Feedback is a Superpower",
    description: "Only the honest get stronger. Lifters use mirrors and video. Builders use retros and customer interviews. The best learn from what's real — not what's comfortable.",
    slug: "feedback-superpower",
    status: "not-started",
    furtherReading: []
  },
  {
    id: 5,
    title: "Progress Isn't Pretty",
    description: "Messy lifts and messy launches mean you're trying. Product and powerlifting are both iterative by nature. Failures aren't signs of weakness — they're markers of forward motion.",
    slug: "progress-isnt-pretty",
    status: "not-started",
    furtherReading: []
  },
  {
    id: 6,
    title: "The Mission Demands Recovery",
    description: "Pursuing the mission doesn't mean burning out. Recovery isn't downtime — it's mission support. From sleep and silence to deloads and retros.",
    slug: "mission-demands-recovery",
    status: "not-started",
    furtherReading: []
  },
  {
    id: 7,
    title: "Train the Engine, Not Just the Output",
    description: "Power comes from the core — of products and people. Behind every visible lift or release is deep, quiet work. That's your core — your engine. Build it.",
    slug: "train-the-engine",
    status: "not-started",
    furtherReading: []
  },
  {
    id: 8,
    title: "Decisions Are Made Under Load",
    description: "Stress reveals integrity — of steel and of strategy. How you make decisions under pressure says everything. Prepare before the lift. Build judgment into your roadmap.",
    slug: "decisions-under-load",
    status: "not-started",
    furtherReading: []
  },
  {
    id: 9,
    title: "Ship It Like You Show Up",
    description: "Consistency > Genius. Most wins come from those who don't flinch. Show up. Ship. Lift. Repeat.",
    slug: "ship-it",
    status: "not-started",
    furtherReading: []
  },
  {
    id: 10,
    title: "The Team Is the Tool",
    description: "You can't outlift a bad spotter. You can't outrun a bad culture. Good teammates matter in the gym and in the roadmap room. Culture is a compounder of success.",
    slug: "team-is-the-tool",
    status: "not-started",
    furtherReading: []
  },
  {
    id: 11,
    title: "Strong Enough to Listen",
    description: "Empathy is a performance enhancer. Listening — really listening — makes you stronger. It drives better design and deeper connections. It reveals where you grow next.",
    slug: "strong-enough-to-listen",
    status: "not-started",
    furtherReading: []
  },
  {
    id: 12,
    title: "The Weight Is Real. Own It.",
    description: "Responsibility isn't optional when the mission matters. Ownership in the gym means no excuses. Same with customers. Own the mission. Own the outcome.",
    slug: "weight-is-real",
    status: "not-started",
    furtherReading: []
  },
  {
    id: 13,
    title: "Deload Doesn't Mean Quit",
    description: "Strategic recovery as a path to longevity in product and power.",
    slug: "deload-doesnt-mean-quit",
    status: "not-started",
    furtherReading: []
  },
  {
    id: 14,
    title: "Burn the Roadmap (and Rewrite It With the User)",
    description: "Kill the fake plans. Design with real feedback.",
    slug: "burn-the-roadmap",
    status: "not-started",
    furtherReading: []
  },
  {
    id: 15,
    title: "Lift Loud, Ship Quiet",
    description: "Let your impact speak louder than your promises.",
    slug: "lift-loud-ship-quiet",
    status: "not-started",
    furtherReading: []
  },
  {
    id: 16,
    title: "Conclusion: Giving a Shit Works",
    description: "Caring deeply isn't soft — it's the sharpest edge you have. Anonymized stories of success where relentless care — for users, teammates, and the mission — made the difference.",
    slug: "giving-a-shit-works",
    status: "not-started",
    furtherReading: []
  }
];
