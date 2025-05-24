
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bot } from "lucide-react";

const EmbracingAiSection = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-6 text-center">Embracing AI</h3>
      <Card className="bg-gradient-to-br from-steel/5 to-slate/5 hover:shadow-md transition-shadow duration-300 border border-slate/10">
        <CardContent className="p-8">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-steel/10 rounded-full">
              <Bot className="h-8 w-8 text-steel" />
            </div>
          </div>
          
          <div className="space-y-6 text-slate dark:text-slate-200 leading-relaxed">
            <p>
              We're not just okay with using AI — we depend on it. MissionBuilt is a product of passion, purpose, and pragmatic tooling. AI is our creative amplifier. It's how we move faster without burning out. It's how we stay honest to the mission while still making time for our kids, our training, our teams.
            </p>
            
            <p>
              This open-source book and everything around it were made with human experience and machine acceleration — not to replace craft, but to respect time. We believe in spending our hours where they matter most: with the users we serve, under the bar, or beside the people we love.
            </p>
            
            <p>
              AI didn't write this for us. But it helped us write it faster and with fewer excuses. And we're proud of that.
            </p>
            
            <p>
              So no, this isn't a luddite's blog. It's not a shrine to handcrafted suffering. It's a modern-day field manual forged by a human lifter, builder, and father — built with tools that work.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmbracingAiSection;
