import React, { useState, useEffect } from "react";
import { ExternalLink, BookOpen, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface FurtherReadingProps {
  isExpanded?: boolean;
}

const FurtherReading: React.FC<FurtherReadingProps> = ({ isExpanded = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Update isOpen when isExpanded prop changes
  useEffect(() => {
    if (isExpanded) {
      setIsOpen(true);
    }
  }, [isExpanded]);

  const resources = [
    {
      title: "Deeper Read on Instagram's Rise:",
      description: "No Filter: The Inside Story of Instagram by Sarah Frier – A detailed, behind-the-scenes look at Instagram's transformation from Burbn to a cultural phenomenon.",
      url: "https://en.wikipedia.org/wiki/No_Filter:_The_Inside_Story_of_Instagram",
      note: ""
    },
    {
      title: "The iPhone's hidden grind:",
      description: "How Steve Jobs Faked His Way Through Unveiling the iPhone – NY Magazine",
      url: "https://nymag.com/intelligencer/2017/01/how-steve-jobs-faked-his-way-through-unveiling-the-iphone.html",
      note: ""
    },
    {
      title: "Instagram's evolution from Burbn:",
      description: "Instagram – Wikipedia",
      url: "https://en.wikipedia.org/wiki/Instagram#History",
      note: ""
    },
    {
      title: "Lifting progress and the plateau effect:",
      description: "Overcoming Strength Training Plateaus – Ironmaster",
      url: "https://www.ironmaster.com/blog/strength-training-plateau/",
      note: ""
    },
    {
      title: "Product development isn't always fast:",
      description: "Failing Fast: Why It's Essential for Entrepreneurs – Harvard Business School Online",
      url: "https://online.hbs.edu/blog/post/fail-fast",
      note: ""
    },
    {
      title: "Israetel, Mike. \"MV, MEV, MAV, MRV Explained.\"",
      description: "Renaissance Periodization",
      url: "https://drmikeisraetel.com/dr-mike-israetel-mv-mev-mav-mrv-explained/",
      note: ""
    },
    {
      title: "The Medici Effect: Finding Creative Inspiration in Unlikely Places",
      description: "A foundational book on innovation through diversity and intersectional thinking.",
      url: "https://phoscreative.com/articles/the-medici-effect/",
      note: ""
    },
    {
      title: "James Clear – Atomic Habits",
      description: "A guide to building better habits and systems that support long-term success, including the principle: \"You do not rise to the level of your goals. You fall to the level of your systems.\"",
      url: "https://jamesclear.com/atomic-habits",
      note: ""
    },
    {
      title: "Basecamp's Shape Up Method – Signal v. Noise",
      description: "An approach to product work that values thoughtful iteration, foundational improvements, and meaningful user feedback.",
      url: "https://basecamp.com/shapeup",
      note: ""
    },
    {
      title: "Talking to Humans — Giff Constable",
      description: "A practical guide to validating ideas and rediscovering motivation by speaking directly with the users you aim to serve.",
      url: "https://talkingtohumans.com",
      note: ""
    },
    {
      title: "Angela Duckworth – Grit: The Power of Passion and Perseverance",
      description: "Explores why sustained effort matters more than intensity, and how consistency builds excellence.",
      url: "https://angeladuckworth.com/grit-book",
      note: ""
    },
    {
      title: "Darren Hardy – The Compound Effect",
      description: "Details how small actions done consistently lead to exponential outcomes — a key insight for boring but high-leverage work.",
      url: "https://www.thecompoundeffect.com",
      note: ""
    },
    {
      title: "Martin Fowler – Is High Quality Software Worth the Cost?",
      description: "Argues that invisible work like refactoring and testing leads to faster long-term delivery — a strong product parallel to back-off sets and mobility work.",
      url: "https://martinfowler.com/articles/is-quality-worth-cost.html",
      note: ""
    }
  ];

  return (
    <section id="further-reading" className="border-t border-slate/10 pt-8">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-army" />
            <h3 className="text-xl font-semibold text-slate">Further Reading</h3>
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
                  <h4 className="font-medium text-slate group-hover:text-army transition-colors duration-200 mb-1">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {resource.description}
                  </p>
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
