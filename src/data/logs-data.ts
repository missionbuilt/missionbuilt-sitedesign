
// Training log data structure
export interface TrainingLog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  content?: string;
}

// Training logs data
export const trainingLogs: TrainingLog[] = [
  {
    id: 1,
    title: "Mission before Metrics",
    excerpt: "Why zero-sum thinking might be limiting your product decisions and how to break free from this mental model.",
    date: "Jan 20, 2025",
    slug: "/log/1"
  },
  {
    id: 2,
    title: "Built Through Reps",
    excerpt: "Greatness isn't born; it's built — one rep, one iteration at a time. Whether it's product iteration or lifting volume, this chapter highlights how repeated effort compounds into capability.",
    date: "Jan 15, 2025",
    slug: "/log/2"
  }
];

// Helper function to get featured logs (most recent)
export const getFeaturedLogs = (limit: number = 3): TrainingLog[] => {
  return trainingLogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Helper function to get log by ID
export const getLogById = (id: number): TrainingLog | undefined => {
  return trainingLogs.find(log => log.id === id);
};
