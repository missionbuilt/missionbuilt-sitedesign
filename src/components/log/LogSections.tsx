
import React from "react";
import { Chapter } from "@/data/chapters-data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface LogSectionsProps {
  chapter: Chapter;
}

// Sample content for demonstration
const getSectionContent = (chapterId: number, sectionId: string) => {
  if (chapterId === 1) {
    switch (sectionId) {
      case "mission-before-metrics":
        return "This section explores the fundamental principle of putting mission before metrics...";
      case "building-foundation":
        return "Here we discuss the importance of building a solid foundation...";
      case "leading-by-example":
        return "Leadership starts with personal example and commitment...";
      case "key-takeaways":
        return "The key insights from this chapter include...";
      default:
        return "Content for this section will be added soon.";
    }
  }
  
  return "Content for this section will be added soon.";
};

const getSections = (chapterId: number) => {
  if (chapterId === 1) {
    return [
      { id: "mission-before-metrics", title: "Mission Before Metrics" },
      { id: "building-foundation", title: "Building the Foundation" },
      { id: "leading-by-example", title: "Leading by Example" },
      { id: "key-takeaways", title: "Key Takeaways" }
    ];
  }
  
  return [
    { id: "introduction", title: "Introduction" },
    { id: "main-concept", title: "Main Concept" },
    { id: "practical-application", title: "Practical Application" },
    { id: "conclusion", title: "Conclusion" }
  ];
};

const LogSections: React.FC<LogSectionsProps> = ({ chapter }) => {
  const sections = getSections(chapter.id);
  
  return (
    <div className="space-y-4">
      {sections.map((section, index) => (
        <Collapsible key={section.id} defaultOpen={index === 0}>
          <CollapsibleTrigger 
            id={section.id}
            className="flex items-center justify-between w-full text-left p-4 bg-slate/5 hover:bg-slate/10 rounded-lg border border-slate/10 transition-colors duration-200"
          >
            <h2 className="text-xl font-semibold text-slate">
              {index + 1}. {section.title}
            </h2>
            <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          
          <CollapsibleContent className="px-4 pb-4">
            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {getSectionContent(chapter.id, section.id)}
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default LogSections;
