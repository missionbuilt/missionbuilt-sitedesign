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

// Chapter data - only your two written logs
export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Mission Before Metrics",
    description: "Success isn't the dashboard — it's the user's outcome. A clear breakdown of the User Mission Method. Forget vanity metrics — this is about aligning everything you do to help users win.",
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
    description: "Greatness isn't born; it's built — one rep, one iteration at a time. Whether it's product iteration or lifting volume, this chapter highlights how repeated effort compounds into capability.",
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
  }
];
