
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from "@/components/ui/table";
import { Book, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Chapter data structure
interface Chapter {
  id: number;
  title: string;
  description: string;
  slug: string;
  status: "in-progress";
}

// Chapter data based on provided content
const chapters: Chapter[] = [
  {
    id: 1,
    title: "Mission Before Metrics",
    description: "Success isn't the dashboard — it's the user's outcome. A clear breakdown of the User Mission Method. Forget vanity metrics — this is about aligning everything you do to help users win.",
    slug: "mission-before-metrics",
    status: "in-progress"
  },
  {
    id: 2,
    title: "Built Through Reps",
    description: "Greatness isn't born; it's built — one rep, one iteration at a time. Whether it's product iteration or lifting volume, this chapter highlights how repeated effort compounds into capability.",
    slug: "built-through-reps",
    status: "in-progress"
  },
  {
    id: 3,
    title: "Rituals Over Rules",
    description: "Rigid processes break. Rituals scale. Replace rigid roadmaps and overly prescriptive training programs with adaptable, purpose-driven rituals.",
    slug: "rituals-over-rules",
    status: "in-progress"
  },
  {
    id: 4,
    title: "Feedback is a Superpower",
    description: "Only the honest get stronger. Lifters use mirrors and video. Builders use retros and customer interviews. The best learn from what's real — not what's comfortable.",
    slug: "feedback-superpower",
    status: "in-progress"
  },
  {
    id: 5,
    title: "Progress Isn't Pretty",
    description: "Messy lifts and messy launches mean you're trying. Product and powerlifting are both iterative by nature. Failures aren't signs of weakness — they're markers of forward motion.",
    slug: "progress-isnt-pretty",
    status: "in-progress"
  },
  {
    id: 6,
    title: "The Mission Demands Recovery",
    description: "Pursuing the mission doesn't mean burning out. Recovery isn't downtime — it's mission support. From sleep and silence to deloads and retros.",
    slug: "mission-demands-recovery",
    status: "in-progress"
  },
  {
    id: 7,
    title: "Train the Engine, Not Just the Output",
    description: "Power comes from the core — of products and people. Behind every visible lift or release is deep, quiet work. That's your core — your engine. Build it.",
    slug: "train-the-engine",
    status: "in-progress"
  },
  {
    id: 8,
    title: "Decisions Are Made Under Load",
    description: "Stress reveals integrity — of steel and of strategy. How you make decisions under pressure says everything. Prepare before the lift. Build judgment into your roadmap.",
    slug: "decisions-under-load",
    status: "in-progress"
  },
  {
    id: 9,
    title: "Ship It Like You Show Up",
    description: "Consistency > Genius. Most wins come from those who don't flinch. Show up. Ship. Lift. Repeat.",
    slug: "ship-it",
    status: "in-progress"
  },
  {
    id: 10,
    title: "The Team Is the Tool",
    description: "You can't outlift a bad spotter. You can't outrun a bad culture. Good teammates matter in the gym and in the roadmap room. Culture is a compounder of success.",
    slug: "team-is-the-tool",
    status: "in-progress"
  },
  {
    id: 11,
    title: "Strong Enough to Listen",
    description: "Empathy is a performance enhancer. Listening — really listening — makes you stronger. It drives better design and deeper connections. It reveals where you grow next.",
    slug: "strong-enough-to-listen",
    status: "in-progress"
  },
  {
    id: 12,
    title: "The Weight Is Real. Own It.",
    description: "Responsibility isn't optional when the mission matters. Ownership in the gym means no excuses. Same with customers. Own the mission. Own the outcome.",
    slug: "weight-is-real",
    status: "in-progress"
  },
  {
    id: 13,
    title: "Deload Doesn't Mean Quit",
    description: "Strategic recovery as a path to longevity in product and power.",
    slug: "deload-doesnt-mean-quit",
    status: "in-progress"
  },
  {
    id: 14,
    title: "Burn the Roadmap (and Rewrite It With the User)",
    description: "Kill the fake plans. Design with real feedback.",
    slug: "burn-the-roadmap",
    status: "in-progress"
  },
  {
    id: 15,
    title: "Lift Loud, Ship Quiet",
    description: "Let your impact speak louder than your promises.",
    slug: "lift-loud-ship-quiet",
    status: "in-progress"
  },
  {
    id: 16,
    title: "Conclusion: Giving a Shit Works",
    description: "Caring deeply isn't soft — it's the sharpest edge you have. Anonymized stories of success where relentless care — for users, teammates, and the mission — made the difference.",
    slug: "giving-a-shit-works",
    status: "in-progress"
  }
];

// Helper function to get badge variant
const getBadgeVariant = (status: Chapter["status"]): "default" | "secondary" | "outline" => {
  return "outline"; // Since all chapters are in-progress, we'll use outline style
};

const Chapters = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4">Book Chapters</h1>
            <p className="text-muted-foreground">
              The complete guide to strength, leadership, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapters.map((chapter) => (
              <Card key={chapter.id} className="transition-all hover:shadow-md border-slate/10">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{chapter.title}</CardTitle>
                    <Badge variant={getBadgeVariant(chapter.status)} className="bg-slate/10 text-slate dark:bg-slate/20 dark:text-slate-300">
                      In Progress
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{chapter.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Book className="mr-2 h-4 w-4" />
                      <span>Not Yet Determined</span>
                    </div>
                    <div className="inline-flex items-center text-primary hover:underline text-sm font-medium opacity-50 cursor-not-allowed">
                      Coming Soon <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Alternative table view for smaller screens */}
          <div className="mt-12 md:hidden">
            <h2 className="text-xl font-semibold mb-4">Chapter List</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {chapters.map((chapter) => (
                    <TableRow key={chapter.id}>
                      <TableCell className="font-medium">{chapter.title}</TableCell>
                      <TableCell>
                        <Badge variant={getBadgeVariant(chapter.status)} className="bg-slate/10 text-slate dark:bg-slate/20 dark:text-slate-300">
                          In Progress
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapters;
