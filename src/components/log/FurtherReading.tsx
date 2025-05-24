
import React, { useState, useEffect } from "react";
import { ExternalLink, BookOpen, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface Resource {
  title: string;
  description: string;
  url: string;
  note: string;
}

interface FurtherReadingProps {
  isExpanded?: boolean;
  resources: Resource[];
}

const FurtherReading: React.FC<FurtherReadingProps> = ({ isExpanded = false, resources }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Update isOpen when isExpanded prop changes
  useEffect(() => {
    if (isExpanded) {
      setIsOpen(true);
    }
  }, [isExpanded]);

  return (
    <section id="further-reading" className="border-t border-slate/10 pt-8">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-army" />
            <h3 className="text-xl font-semibold text-foreground">Further Reading</h3>
          </div>
          <ChevronDown 
            className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </CollapsibleTrigger>
        
        <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          <div className="grid gap-4 mt-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between p-4 bg-slate/5 hover:bg-slate/10 rounded-lg border border-slate/10 transition-colors duration-200 group"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-foreground group-hover:text-army transition-colors duration-200 mb-1">
                    {resource.title}
                  </h4>
                  {resource.description && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {resource.description}
                    </p>
                  )}
                  {resource.note && (
                    <p className="text-xs text-muted-foreground italic">
                      {resource.note}
                    </p>
                  )}
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-army transition-colors duration-200 flex-shrink-0 ml-4 mt-1" />
              </a>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
};

export default FurtherReading;
