
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectPurposeSection = () => {
  return (
    <div className="mb-16">
      <Card className="bg-gradient-to-br from-army/5 to-slate/5 hover:shadow-md transition-shadow duration-300 border border-slate/10">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">This project exists to:</h3>
          
          <ul className="space-y-6 text-slate dark:text-slate-200 list-none">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Offer a free and open-source book that ties together the rigor of product leadership with the discipline of physical training.</p>
            </li>
            
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Present an alternative philosophy, not a prescriptive method.</p>
            </li>
            
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Encourage introspection, empathy, and ownership—especially in a world that too often prizes speed over substance.</p>
            </li>
            
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-army rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Share what's been learned from years of building: products, teams, strength, and character.</p>
            </li>
          </ul>
          
          <p className="mt-8 text-slate dark:text-slate-200 font-medium text-center border-t border-slate/10 pt-6">
            Most of all, MissionBuilt exists because you might be like me—someone who cares deeply, grinds daily, and believes that strength (in life, in teams, in outcomes) is built, not bought.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectPurposeSection;
