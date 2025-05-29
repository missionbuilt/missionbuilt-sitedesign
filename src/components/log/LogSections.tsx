
import React from "react";
import { Chapter } from "@/data/chapters-data";

interface LogSectionsProps {
  chapter: Chapter;
  expandedSection?: string;
}

const LogSections: React.FC<LogSectionsProps> = ({ chapter, expandedSection }) => {
  return (
    <div className="space-y-12">
      {chapter.sections.map((section, index) => (
        <section 
          key={section.id} 
          id={section.id}
          className={`scroll-mt-24 ${expandedSection === section.id ? 'ring-2 ring-army/20 rounded-lg p-6' : ''}`}
        >
          <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-slate-100">
            {index + 1}. {section.title}
          </h2>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="space-y-6">
              {section.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="text-muted-foreground dark:text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default LogSections;
