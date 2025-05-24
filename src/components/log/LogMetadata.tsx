
import React from "react";
import { Chapter } from "@/data/chapters-data";
import { Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface LogMetadataProps {
  chapter: Chapter;
}

// Function to calculate estimated read time for content
const calculateReadTime = (content: React.ReactNode): number => {
  // Convert React content to text for word counting
  const getTextFromReactNode = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (React.isValidElement(node) && node.props.children) {
      return getTextFromReactNode(node.props.children);
    }
    if (Array.isArray(node)) {
      return node.map(getTextFromReactNode).join(' ');
    }
    return '';
  };

  const text = getTextFromReactNode(content);
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  const wordsPerMinute = 200; // Average reading speed
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readTime); // Minimum 1 minute
};

// Sample content for demonstration (duplicated from LogSections for consistency)
const getSectionContent = (chapterId: number, sectionId: string) => {
  if (chapterId === 1) {
    switch (sectionId) {
      case "mission-is-the-magnet":
        return (
          <div className="space-y-6">
            <p>Before I ever built products, I served in the U.S. Army as an Airborne intelligence sergeant. That experience — of working in service of something larger than myself, of making decisions under pressure with lives on the line — shaped everything that came after. I learned early that mission comes first. Not ego. Not recognition. Mission.</p>
            {/* Additional content abbreviated for brevity */}
          </div>
        );
      case "the-drift":
        return (
          <div className="space-y-6">
            <p>At first, the metric is a mirror — it reflects the mission. Clean, focused, and true.</p>
            {/* Additional content abbreviated for brevity */}
          </div>
        );
      case "repetition-with-intention":
        return (
          <div className="space-y-6">
            <p>You don't get strong by lifting heavy once.</p>
            {/* Additional content abbreviated for brevity */}
          </div>
        );
      default:
        return "Content for this section will be added soon.";
    }
  }
  
  if (chapterId === 2) {
    switch (sectionId) {
      case "the-myth-of-overnight-success":
        return (
          <div className="space-y-6">
            <p>We've all heard the stories.</p>
            {/* Additional content abbreviated for brevity */}
          </div>
        );
      case "repetition-is-not-redundancy":
        return (
          <div className="space-y-6">
            <p>In Section 1, we looked at the myth of overnight success...</p>
            {/* Additional content abbreviated for brevity */}
          </div>
        );
      case "when-the-spark-fades":
        return (
          <div className="space-y-6">
            <p>The first reps are easy — not physically, but emotionally...</p>
            {/* Additional content abbreviated for brevity */}
          </div>
        );
      case "the-multiplier-of-boring-work":
        return (
          <div className="space-y-6">
            <p>There's a kind of work that doesn't make headlines...</p>
            {/* Additional content abbreviated for brevity */}
          </div>
        );
      case "the-work-becomes-the-win":
        return (
          <div className="space-y-6">
            <p>At some point, the reps stop being something you have to do...</p>
            {/* Additional content abbreviated for brevity */}
          </div>
        );
      default:
        return "Content for this section will be added soon.";
    }
  }
  
  return "Content for this section will be added soon.";
};

const getSections = (chapterId: number) => {
  if (chapterId === 1) {
    return [
      { id: "mission-is-the-magnet", title: "The Mission Is the Magnet" },
      { id: "the-drift", title: "The Drift" },
      { id: "repetition-with-intention", title: "Repetition with Intention" }
    ];
  }
  
  if (chapterId === 2) {
    return [
      { id: "the-myth-of-overnight-success", title: "The Myth of Overnight Success" },
      { id: "repetition-is-not-redundancy", title: "Repetition Is Not Redundancy" },
      { id: "when-the-spark-fades", title: "When the Spark Fades" },
      { id: "the-multiplier-of-boring-work", title: "The Multiplier of Boring Work" },
      { id: "the-work-becomes-the-win", title: "The Work Becomes the Win" }
    ];
  }
  
  return [
    { id: "introduction", title: "Introduction" },
    { id: "main-concept", title: "Main Concept" },
    { id: "practical-application", title: "Practical Application" },
    { id: "conclusion", title: "Conclusion" }
  ];
};

// Function to get total read time by summing individual sections
const getTotalReadTime = (chapterId: number): string => {
  const sections = getSections(chapterId);
  const totalMinutes = sections.reduce((total, section) => {
    const content = getSectionContent(chapterId, section.id);
    return total + calculateReadTime(content);
  }, 0);
  
  return `${totalMinutes} min read`;
};

const LogMetadata: React.FC<LogMetadataProps> = ({ chapter }) => {
  return (
    <div className="border-b border-slate/10 pb-6">
      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Author: <Link to="/about" className="text-army hover:text-army/80 transition-colors">Mike</Link></span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>Published: May 24, 2025</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{getTotalReadTime(chapter.id)}</span>
        </div>
      </div>
    </div>
  );
};

export default LogMetadata;
