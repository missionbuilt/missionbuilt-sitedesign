
// Chapter data structure
export interface Chapter {
  id: number;
  title: string;
  description: string;
  slug: string;
  status: "in-progress" | "coming-soon" | "not-started";
}

// Chapter data
export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Mission Before Metrics",
    description: "Success isn't the dashboard — it's the user's outcome. A clear breakdown of the User Mission Method. Forget vanity metrics — this is about aligning everything you do to help users win.",
    slug: "mission-before-metrics",
    status: "coming-soon"
  },
  {
    id: 2,
    title: "Built Through Reps",
    description: "Greatness isn't born; it's built — one rep, one iteration at a time. Whether it's product iteration or lifting volume, this chapter highlights how repeated effort compounds into capability.",
    slug: "built-through-reps",
    status: "coming-soon"
  },
  {
    id: 3,
    title: "Rituals Over Rules",
    description: "Rigid processes break. Rituals scale. Replace rigid roadmaps and overly prescriptive training programs with adaptable, purpose-driven rituals.",
    slug: "rituals-over-rules",
    status: "not-started"
  },
  {
    id: 4,
    title: "Feedback is a Superpower",
    description: "Only the honest get stronger. Lifters use mirrors and video. Builders use retros and customer interviews. The best learn from what's real — not what's comfortable.",
    slug: "feedback-superpower",
    status: "not-started"
  },
  {
    id: 5,
    title: "Progress Isn't Pretty",
    description: "Messy lifts and messy launches mean you're trying. Product and powerlifting are both iterative by nature. Failures aren't signs of weakness — they're markers of forward motion.",
    slug: "progress-isnt-pretty",
    status: "not-started"
  },
  {
    id: 6,
    title: "The Mission Demands Recovery",
    description: "Pursuing the mission doesn't mean burning out. Recovery isn't downtime — it's mission support. From sleep and silence to deloads and retros.",
    slug: "mission-demands-recovery",
    status: "not-started"
  },
  {
    id: 7,
    title: "Train the Engine, Not Just the Output",
    description: "Power comes from the core — of products and people. Behind every visible lift or release is deep, quiet work. That's your core — your engine. Build it.",
    slug: "train-the-engine",
    status: "not-started"
  },
  {
    id: 8,
    title: "Decisions Are Made Under Load",
    description: "Stress reveals integrity — of steel and of strategy. How you make decisions under pressure says everything. Prepare before the lift. Build judgment into your roadmap.",
    slug: "decisions-under-load",
    status: "not-started"
  },
  {
    id: 9,
    title: "Ship It Like You Show Up",
    description: "Consistency > Genius. Most wins come from those who don't flinch. Show up. Ship. Lift. Repeat.",
    slug: "ship-it",
    status: "not-started"
  },
  {
    id: 10,
    title: "The Team Is the Tool",
    description: "You can't outlift a bad spotter. You can't outrun a bad culture. Good teammates matter in the gym and in the roadmap room. Culture is a compounder of success.",
    slug: "team-is-the-tool",
    status: "not-started"
  },
  {
    id: 11,
    title: "Strong Enough to Listen",
    description: "Empathy is a performance enhancer. Listening — really listening — makes you stronger. It drives better design and deeper connections. It reveals where you grow next.",
    slug: "strong-enough-to-listen",
    status: "not-started"
  },
  {
    id: 12,
    title: "The Weight Is Real. Own It.",
    description: "Responsibility isn't optional when the mission matters. Ownership in the gym means no excuses. Same with customers. Own the mission. Own the outcome.",
    slug: "weight-is-real",
    status: "not-started"
  },
  {
    id: 13,
    title: "Deload Doesn't Mean Quit",
    description: "Strategic recovery as a path to longevity in product and power.",
    slug: "deload-doesnt-mean-quit",
    status: "not-started"
  },
  {
    id: 14,
    title: "Burn the Roadmap (and Rewrite It With the User)",
    description: "Kill the fake plans. Design with real feedback.",
    slug: "burn-the-roadmap",
    status: "not-started"
  },
  {
    id: 15,
    title: "Lift Loud, Ship Quiet",
    description: "Let your impact speak louder than your promises.",
    slug: "lift-loud-ship-quiet",
    status: "not-started"
  },
  {
    id: 16,
    title: "Conclusion: Giving a Shit Works",
    description: "Caring deeply isn't soft — it's the sharpest edge you have. Anonymized stories of success where relentless care — for users, teammates, and the mission — made the difference.",
    slug: "giving-a-shit-works",
    status: "not-started"
  }
];
