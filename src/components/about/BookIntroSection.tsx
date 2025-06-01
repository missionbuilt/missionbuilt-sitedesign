
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

const BookIntroSection = () => {
  return (
    <div className="mb-16">
      <Card className="bg-white dark:bg-white hover:shadow-md transition-shadow duration-300 border border-slate/10 overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-army/10 rounded-full">
              <a href="https://github.com/missionbuilt" target="_blank" rel="noopener noreferrer">
                <Github className="h-10 w-10 text-army" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6 text-slate dark:text-slate leading-relaxed">
            <p className="text-lg">
              MissionBuilt was born from a simple idea: that the principles driving successful product teams and driven lifters are more alike than they seem. After decades in both worlds—tech product management and competitive powerlifting—it became clear that each domain thrives on the same core truths: consistency, purpose, and relentless focus on the mission.
            </p>
            
            <p>
              This project isn't a manifesto. It's not here to tell you how it must be done. It's a personal contribution to the shared pool of knowledge—a new lens for understanding the craft of product leadership, seen through the eyes of the lifter, the builder, the grinder.
            </p>
            
            <p>
              Some people learn best from frameworks and acronyms. Others need narrative and analogy. MissionBuilt is for the latter. It's product management as told through the chalk-dusted hands of someone who's felt the pressure of a heavy barbell and a tight roadmap.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookIntroSection;
