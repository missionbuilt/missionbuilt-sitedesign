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
    title: "Discipline: The Hidden Framework",
    description: "True strength comes from showing up, especially when you don't feel like it. Learn how rituals, feedback, and adaptability form the foundation of both great lifts and great products.",
    slug: "discipline-the-hidden-framework",
    status: "in-progress" as const,
    sections: [
      {
        id: "ritual-strength",
        title: "Ritual as Strength",
        content: `The barbell doesn't care how you feel.

It doesn't care if you're tired, if you're stressed, if the world is ending outside the gym doors. It sits there, honest and indifferent, waiting for you to show up and do the work.

That's the first lesson powerlifting teaches: strength isn't about how you feel in the moment. It's about what you do regardless of how you feel.

In product, we have our own version of this truth. The user doesn't care if your team had a rough quarter, if the roadmap shifted, if stakeholders are breathing down your neck. They care about one thing: does your product solve their problem? And the only way to consistently deliver that solution is to show up to the work — especially when motivation is nowhere to be found.

This is where ritual becomes your ally.

Not the empty kind — not process for process's sake, or meetings that could have been emails. I'm talking about the intentional, repeatable actions that keep you moving toward your mission when everything else feels uncertain.

In the gym, my ritual is simple:
- Arrive 15 minutes early.
- Same warm-up sequence, every time.
- Write down the planned lifts.
- Chalk up. Set up. Lift.

It's not about perfection. Some days I'm strong. Some days I'm not. But the ritual ensures I show up consistently enough to make progress over time. The ritual doesn't guarantee the outcome — it guarantees the input.

The same principle applies to product work. Consistency beats intensity. A daily check-in with your team beats a quarterly all-hands meeting. Regular user feedback sessions beat a massive user research project every six months. Reliable deployment processes beat heroic weekend pushes.

But here's what most people miss: the best rituals aren't rigid. They're adaptive.

A smart lifter doesn't follow the same program forever. As you get stronger, as your body changes, as life throws curveballs, the ritual evolves. The commitment stays the same. The tactics change.

Product teams that thrive understand this balance. They have non-negotiables — the user research, the regular check-ins, the focus on mission — but they adapt the how based on what they learn. They're disciplined, not dogmatic.

Because discipline isn't about following rules. It's about making progress toward what matters, one consistent action at a time.

The barbell taught me that. Product management proved it.

**The ritual doesn't make the work easier. It makes the work possible.**`,
      },
      {
        id: "listen-signals",
        title: "Listen to Your Signals",
        content: `Rituals only work if you're paying attention.

You can't run the same program forever. Not in the gym. Not in product. Not in life. Progress demands feedback. And feedback starts with listening.

Lifters learn this early. You might show up ready to deadlift heavy — but your grip feels off, your back's tight, your CNS just isn't firing.

(CNS: Central Nervous System — the part of your body responsible for strength output, coordination, and neural drive. If it's fatigued, you'll feel it, even if your muscles are technically rested.)

That's not failure. That's information. A smart lifter doesn't abandon the workout — they adjust. They keep the ritual, shift the intensity. Maybe you pause at 70%, maybe you pivot to accessories. Listening doesn't make you weaker. It keeps you in the game longer.

In product teams, the same truth holds: rituals without awareness become liabilities.

You can run the ceremonies — sprint planning, retros, standups — but if you're ignoring signals from your team or your users, you're performing process theater. Burnout doesn't show up in Jira. Disengagement doesn't flash red in a dashboard. You feel it in the delay before someone unmutes. In the tension after a roadmap shift. In the quiet attrition of both teammates and customers.

Nowhere is this more visible than in the game industry's long-standing reliance on crunch time. Late-stage death marches, where teams work 60-, 70-, 80-hour weeks to hit a ship date. Executives cite passion. Teams call it what it is: avoidable. The rituals of "just one more sprint," of all-hands war rooms, of praise for pulling all-nighters — they're treated as signs of commitment, when they're actually signals of failure.

Failure to listen. To plan. To build sustainable systems.

Failure to treat the team as human — not just headcount.

This is where product management has a second, often overlooked role.

Yes, product is the voice of the user inside the development team — but product is also the shield of the team against the wrong voices from above. A good PM doesn't just absorb pressure from the top and pass it down. A good PM pushes back. Uses data to say no to date-driven development. Advocates for pacing, not panic. Protects the team's ability to think, breathe, and build well — even when the deadline is loud.

> **Because our goal isn't to meet an investor's timeline or an executive's forecast.**
> 
> **It's to build the best product to solve our user's mission.**

And the only way to do that — sustainably, meaningfully, and well — is to listen.

To your body.

To your team.

To your users.

To the mission.`,
      },
      {
        id: "change-pattern",
        title: "Change the Pattern, Not the Practice",
        content: `When things stop working, you don't abandon the ritual — you adapt it.

Progress isn't a straight line. It's a cycle of push, plateau, pivot. And when you hit that plateau — when the usual ritual no longer delivers results — it's not a sign to quit. It's a sign to evolve.

In the gym, this happens all the time. You run a successful squat cycle, adding five pounds a week like clockwork. But then you stall. Your knees cave, your speed slows, and the bar starts winning. The answer isn't to scrap the movement. It's to change the pattern. Maybe you shift to pause squats, change your stance, or drop the volume to focus on recovery. The ritual — showing up and squatting — stays. The shape of it changes.

The same holds true in product.

The standup that once helped your team sync becomes a box-checking chore. The planning meeting that used to set priorities now spirals into status updates. That doesn't mean you stop planning. It means you shift how you plan. You move from live check-ins to async threads. You replace calendar fatigue with focused, flexible rituals that match your team's needs — and their current phase of growth.

Rituals that don't evolve become rules. And rules, as we've seen, break people.

This is especially true in globally distributed teams. At Elastic, our workforce spans time zones and continents. We had to learn — early — that rituals built for co-located teams don't translate. Sync meetings at 10 a.m. in California are 7 p.m. in Berlin, and 2:30 a.m. in Sydney. So we changed the pattern.

We moved toward asynchronous rhythms:

Key decisions live in documents, not meetings.

Slack threads replace sidebars.

Recorded meetings include transcripts and tagged callouts.

Big calls are followed by quiet time — space for global teammates to reflect, respond, and contribute.

We didn't stop collaborating. We just restructured how and when collaboration happens. The ritual of cross-team communication stayed. Its shape changed. And it made space for more voices, not fewer.

What matters isn't how you do it.

What matters is that you keep showing up with purpose.

The gym teaches you this without words.

You hit a wall. You adjust. You don't abandon the work — you change the pattern.

Because in the end, progress comes from consistent effort, not perfect conditions.

That's the lesson: rituals serve the mission. When they stop serving, reshape them.

Don't confuse rigidity for discipline.

Don't let the form matter more than the function.

(And please — don't treat your favorite product management book like doctrine.

Those frameworks weren't written for your team. Your mission was.)

Rituals aren't constraints — they're commitments. But only if we let them evolve. The strongest systems, the longest-lasting teams, the most resilient lifters — all share this in common: they don't cling to routine for routine's sake. They adapt. With intention. With feedback. With mission in mind.

**Up Next: Feedback Is a Superpower**

Adaptation only works when you know what to change. And knowing what to change starts with feedback — not just getting it, but learning how to hear it, invite it, and act on it.

In the next chapter, we'll explore how the best lifters and product leaders make feedback part of their strength — not their insecurity.`,
      },
    ],
    furtherReading: [
      {
        title: "Chalk Up: Rituals That Prepare the Mind and Body",
        description: "Explores how pre-lift rituals like chalking hands and visualization prepare athletes mentally and physically.",
        url: "https://www.elitefts.com/education/pre-workout-ritual-instructions",
        note: "🏋️ Powerlifting Rituals & Adaptive Training"
      },
      {
        title: "Stefi Cohen's Hybrid Training Philosophy",
        description: "Discusses balancing compound and isolation movements, emphasizing adaptability in training.",
        url: "https://www.hybridperformancemethod.com/blog/are-isolation-movements-better-for-muscle-growth",
        note: "🏋️ Powerlifting Rituals & Adaptive Training"
      },
      {
        title: "Autoregulation: Can It Be Beneficial for Every Type of Strength Athlete?",
        description: "Details how lifters adjust training intensity based on daily readiness, promoting flexibility within structured programs.",
        url: "https://barbend.com/autoregulation/",
        note: "🏋️ Powerlifting Rituals & Adaptive Training"
      },
      {
        title: "CNS Fatigue: Symptoms and Recovery Strategies",
        description: "Addresses central nervous system fatigue and strategies for recovery, highlighting the importance of listening to one's body.",
        url: "https://www.strongerbyscience.com/qa/",
        note: "🏋️ Powerlifting Rituals & Adaptive Training"
      },
      {
        title: "What is a Stand-Up Meeting? [+ Expert Tips]",
        description: "Provides guidance on conducting effective stand-up meetings to maintain team alignment.",
        url: "https://www.atlassian.com/agile/scrum/standups",
        note: "💻 Product Rituals, Burnout & Team Evolution"
      },
      {
        title: "Leadership @ Elastic | Kevin Kluge: Distributed for the Better",
        description: "Discusses Elastic's approach to distributed work and maintaining engineering culture.",
        url: "https://www.elastic.co/blog/leadership-elastic-kevin-kluge-distributed-for-the-better",
        note: "💻 Product Rituals, Burnout & Team Evolution"
      },
      {
        title: "How to Collaborate Effectively If Your Team Is Remote",
        description: "Harvard Business Review offers evidence-based strategies for improving communication and trust across distributed teams — reinforcing the importance of intentional, adaptive rituals in asynchronous environments.",
        url: "https://hbr.org/2018/02/how-to-collaborate-effectively-if-your-team-is-remote",
        note: "💻 Product Rituals, Burnout & Team Evolution"
      },
      {
        title: "Shape Up: Stop Running in Circles and Ship Work that Matters",
        description: "Introduces a methodology that emphasizes flexible work cycles over rigid sprints.",
        url: "https://basecamp.com/shapeup",
        note: "💻 Product Rituals, Burnout & Team Evolution"
      },
      {
        title: "Understanding Developer Burnout",
        description: "Breaks down the causes, symptoms, and strategies for preventing developer burnout — with a focus on workload balance, autonomy, and the importance of adaptive team rituals.",
        url: "https://devskiller.com/blog/developer-burnout/",
        note: "💻 Product Rituals, Burnout & Team Evolution"
      },
      {
        title: "The Hidden Power of Workplace Rituals",
        description: "Explores how intentional rituals in the workplace can strengthen psychological safety, enhance purpose, and boost performance.",
        url: "https://hbr.org/2022/08/the-hidden-power-of-workplace-rituals",
        note: "🧠 Organizational Culture & Ritual Evolution"
      },
      {
        title: "Crunch Culture: How Game Development Becomes Toxic",
        description: "Investigates the detrimental effects of excessive overtime in the gaming industry, highlighting how passion-driven projects can lead to burnout and decreased quality.",
        url: "https://reporter.rit.edu/6288/tech/crunch-culture-how-game-development-becomes-toxic/",
        note: "🎮 Crunch Time & Anti-patterns in Product Culture"
      },
      {
        title: "Red Dead Redemption 2 Exposes the Gaming Industry's Dangerous Addiction to Overtime",
        description: "WIRED investigates the systemic issue of \"crunch culture\" in game development, using Rockstar Games as a focal point. The article highlights how extended overtime, driven by passion and pressure, can lead to long-term burnout and erode product quality.",
        url: "https://www.wired.com/story/red-dead-redemption-2-rockstar-overtime-crunch/",
        note: "🎮 Crunch Time & Anti-patterns in Product Culture"
      },
      {
        title: "How Product Leaders Can Learn to Say No",
        description: "Ken Norton, a former Google product leader and GV partner, emphasizes the critical skill of saying \"no\" in product management. He discusses how ambiguity can derail teams and the necessity for PMs to set clear boundaries, even when facing pressure from executives. This essay provides practical advice on maintaining focus and protecting the team's priorities.",
        url: "https://www.bringthedonuts.com/essays/discipline-of-no.html",
        note: "🛡️ Product Managers as Advocates & Shields"
      }
    ],
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
