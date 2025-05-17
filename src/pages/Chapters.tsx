
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
import { format } from "date-fns";
import { CalendarDays, Book, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Chapter data structure
interface Chapter {
  id: number;
  title: string;
  description: string;
  slug: string;
  publishedDate?: Date; // Optional for published chapters
  status: "published" | "coming-soon" | "in-progress";
}

// Sample chapter data
const chapters: Chapter[] = [
  {
    id: 1,
    title: "Introduction: The Journey Begins",
    description: "An overview of the philosophy behind Forged Under Load.",
    slug: "introduction",
    publishedDate: new Date(2025, 0, 15), // January 15, 2025
    status: "published"
  },
  {
    id: 2,
    title: "Chapter 1: Foundation Principles",
    description: "The core principles that guide our approach to strength and leadership.",
    slug: "foundation-principles",
    publishedDate: new Date(2025, 1, 10), // February 10, 2025
    status: "published"
  },
  {
    id: 3,
    title: "Chapter 2: Breaking Barriers",
    description: "How to identify and overcome mental and physical limitations.",
    slug: "breaking-barriers",
    publishedDate: new Date(2025, 2, 5), // March 5, 2025
    status: "coming-soon"
  },
  {
    id: 4,
    title: "Chapter 3: The Discipline Matrix",
    description: "A framework for building consistent habits across all areas of life.",
    slug: "discipline-matrix",
    status: "in-progress"
  },
  {
    id: 5,
    title: "Chapter 4: Compound Growth",
    description: "Leveraging the power of small, consistent actions over time.",
    slug: "compound-growth",
    status: "in-progress"
  }
];

// Helper function to format dates or return status
const formatDateOrStatus = (chapter: Chapter): string => {
  if (chapter.status === "published" && chapter.publishedDate) {
    return format(chapter.publishedDate, "MMMM d, yyyy");
  } else if (chapter.status === "coming-soon") {
    return "Coming Soon";
  } else {
    return "In Development";
  }
};

// Helper function to determine badge color
const getBadgeVariant = (status: Chapter["status"]): "default" | "secondary" | "outline" => {
  switch (status) {
    case "published":
      return "default";
    case "coming-soon":
      return "secondary";
    case "in-progress":
      return "outline";
    default:
      return "outline";
  }
};

const Chapters = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4">Book Chapters</h1>
            <p className="text-muted-foreground">
              The complete guide to strength, leadership, and personal growth.
            </p>
          </div>

          <div className="space-y-6">
            {chapters.map((chapter) => (
              <Card key={chapter.id} className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{chapter.title}</CardTitle>
                    <Badge variant={getBadgeVariant(chapter.status)}>
                      {chapter.status === "published" ? "Published" : chapter.status === "coming-soon" ? "Coming Soon" : "In Progress"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{chapter.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      {chapter.status === "published" ? (
                        <>
                          <CalendarDays className="mr-2 h-4 w-4" />
                          <span>Published: {formatDateOrStatus(chapter)}</span>
                        </>
                      ) : (
                        <>
                          <Book className="mr-2 h-4 w-4" />
                          <span>{formatDateOrStatus(chapter)}</span>
                        </>
                      )}
                    </div>
                    {chapter.status === "published" && (
                      <Link 
                        to={`/chapters/${chapter.slug}`} 
                        className="inline-flex items-center text-primary hover:underline text-sm font-medium"
                      >
                        Read Chapter <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    )}
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
                        <Badge variant={getBadgeVariant(chapter.status)}>
                          {formatDateOrStatus(chapter)}
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
