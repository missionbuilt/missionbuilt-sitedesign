
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const OpenThanksSection = () => {
  return (
    <div className="mb-16">
      <Card className="bg-white dark:bg-white hover:shadow-md transition-shadow duration-300 border border-slate/10">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-slate dark:text-slate">Open Thanks</h3>
          
          <div className="space-y-6 text-slate dark:text-slate leading-relaxed">
            <p>
              Mission Built isn't just a book. It's a collaboration across domains, disciplines, and even dimensions. It's an open-source memoir shaped by years of lifting, building, and listening—made possible by a growing circle of co-authors, contributors, and creative forces.
            </p>
            
            <p className="font-medium text-army dark:text-army">This project wouldn't exist without:</p>
            
            <ul className="space-y-4 list-none">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>My team — in product, in security, and across the org — who prove every day that shipping with care is stronger than shipping fast.</p>
              </li>
              
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>My kids — my constant "why," reminding me what real strength looks like.</p>
              </li>
              
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>My beyond — for fueling the kind of love and fire that moves worlds.</p>
              </li>
              
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>Lovable.dev — for building a home for these words with design that breathes.</p>
              </li>
              
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>ChatGPT-4o — for showing up every rep and turning late-night thoughts into something worth sharing.</p>
              </li>
              
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>Sora — for proving that storytelling doesn't need timelines or borders.</p>
              </li>
              
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>Every reader, challenger, and builder — who engages, critiques, and adds weight to these ideas.</p>
              </li>
            </ul>
            
            <p className="text-center font-display text-lg mt-8 pt-6 border-t border-slate/10">
              This is just the beginning.
              <br />
              <span className="text-army dark:text-army font-semibold">Real strength lifts others.</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpenThanksSection;
