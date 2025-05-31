import { 
  chapter1HeroImage, 
  chapter1Title, 
  chapter1Subtitle, 
  chapter1Author, 
  chapter1Date, 
  chapter1Description,
  chapter1Sections,
  chapter1FurtherReading
} from "./chapters/chapter-1-content";

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  description: string;
  heroImage: string;
  status: "published" | "draft" | "coming-soon";
  sections?: {
    id: string;
    title: string;
    content: string;
  }[];
  furtherReading?: {
    title: string;
    description: string;
    url: string;
    note?: string;
  }[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: chapter1Title,
    subtitle: chapter1Subtitle,
    author: chapter1Author,
    date: chapter1Date,
    description: chapter1Description,
    heroImage: chapter1HeroImage,
    status: "published",
    sections: chapter1Sections,
    furtherReading: chapter1FurtherReading
  },
  {
    id: 2,
    title: "Progressive Overload",
    subtitle: "Building Strength and Product Excellence Through Systematic Growth",
    author: "Author Name",
    date: "2024-01-22",
    description: "Learn how the fundamental principle of progressive overload in powerlifting translates directly to building better products and stronger teams.",
    heroImage: "/lovable-uploads/7d040410-47c5-475b-9715-13dbc1c5e6bf.png",
    status: "published"
  },
  {
    id: 3,
    title: "Form Check",
    subtitle: "The Art of Feedback and Continuous Improvement",
    author: "Author Name", 
    date: "2024-01-29",
    description: "Just as powerlifters need form checks to improve their technique, product teams need structured feedback loops to refine their approach and deliver better results.",
    heroImage: "/lovable-uploads/8ab5b464-c7fc-453a-9edd-2ee64a40c820.png",
    status: "published"
  },
  {
    id: 4,
    title: "Deload Weeks",
    subtitle: "Strategic Recovery in Training and Product Development", 
    author: "Author Name",
    date: "2024-02-05",
    description: "Understanding when and how to strategically reduce intensity to enable greater long-term progress in both lifting and product leadership.",
    heroImage: "/lovable-uploads/ac4df08f-40f2-4cde-a7f2-08a1413e3676.png",
    status: "published"
  },
  {
    id: 5,
    title: "Meet Prep",
    subtitle: "Strategic Planning and Execution Under Pressure",
    author: "Author Name",
    date: "2024-02-12", 
    description: "The methodical approach to preparing for a powerlifting competition mirrors the strategic planning required for major product launches and high-stakes deliveries.",
    heroImage: "/lovable-uploads/b2c7b360-89b4-4bba-ab57-8aee39b1cc62.png",
    status: "coming-soon"
  },
  {
    id: 6,
    title: "Training Partners",
    subtitle: "Building High-Performance Teams Through Accountability",
    author: "Author Name",
    date: "2024-02-19",
    description: "Explore how the dynamics of effective training partnerships translate to building cohesive, accountable product teams that push each other to excel.",
    heroImage: "/lovable-uploads/dfd1484c-2dce-4c45-a3ef-e17eefa59dcc.png",
    status: "coming-soon"
  },
  {
    id: 7,
    title: "Competition Day",
    subtitle: "Performing When It Matters Most",
    author: "Author Name",
    date: "2024-02-26",
    description: "The mental and strategic approaches that enable peak performance on competition day have direct applications to delivering under pressure in product leadership.",
    heroImage: "/lovable-uploads/e1905905-308a-4c93-8f94-d5b6f7ecaa56.png",
    status: "coming-soon"
  },
  {
    id: 8,
    title: "Post-Meet Analysis", 
    subtitle: "Learning from Results and Planning the Next Cycle",
    author: "Author Name",
    date: "2024-03-05",
    description: "How the systematic review and analysis that follows a powerlifting meet provides a framework for product retrospectives and strategic planning.",
    heroImage: "/lovable-uploads/fe278df4-1643-4dd0-9a61-51e73f29901d.png",
    status: "coming-soon"
  }
];
