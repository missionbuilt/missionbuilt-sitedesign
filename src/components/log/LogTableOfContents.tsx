
import React from "react";
import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TocItem {
  id: string;
  title: string;
  subsections?: {
    id: string;
    title: string;
  }[];
}

interface LogTableOfContentsProps {
  items: TocItem[];
}

const LogTableOfContents: React.FC<LogTableOfContentsProps> = ({ items }) => {
  return (
    <Card className="p-4">
      <h3 className="font-display font-semibold mb-4 text-lg text-slate dark:text-slate-100">
        <BookOpen className="h-4 w-4 inline-block mr-2" />
        Table of Contents
      </h3>
      <ul className="space-y-2 text-slate/80 dark:text-slate-300">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="hover:text-army transition-colors">
              {item.title}
            </a>
            {item.subsections && (
              <ul className="pl-4 mt-2 space-y-1 text-sm">
                {item.subsections.map((subsection) => (
                  <li key={subsection.id}>
                    <a href={`#${subsection.id}`} className="hover:text-army transition-colors">
                      {subsection.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default LogTableOfContents;
