
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Target } from "lucide-react";

const WhyThisWhyNow = () => {
  return (
    <section className="py-24 bg-slate/5 dark:bg-slate/10 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sunburst/20 to-transparent"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-md mb-4">Why This, Why Now</h2>
          <p className="body-md max-w-2xl mx-auto text-slate/80 dark:text-slate-300">
            The intersection of product leadership and physical discipline has never been more relevant
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Why This Card */}
          <Card className="bg-gradient-to-br from-slate/5 to-army/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-slate/10 overflow-hidden group">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center justify-center mb-8">
                <div className="p-4 bg-army/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-army" />
                </div>
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-6 text-center">The Mission Focus</h3>
              
              <div className="space-y-4 text-slate dark:text-slate-200">
                <p>
                  In a world of endless frameworks and methodologies, we've lost sight of what matters most — the mission. 
                  Product teams today are overwhelmed with processes but underwhelmed with purpose.
                </p>
                
                <p>
                  Powerlifting teaches us that despite endless variations of programs and techniques, 
                  the fundamentals never change: consistency, progressive overload, and recovery. 
                  These same principles apply to product leadership.
                </p>
                
                <p>
                  This book exists because too many teams are chasing trends instead of truth. Too many 
                  products optimize for features instead of outcomes. We need a return to first principles.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Why Now Card */}
          <Card className="bg-gradient-to-br from-slate/5 to-sunburst/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-slate/10 overflow-hidden group">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center justify-center mb-8">
                <div className="p-4 bg-sunburst/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-sunburst" />
                </div>
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-6 text-center">The Critical Timing</h3>
              
              <div className="space-y-4 text-slate dark:text-slate-200">
                <p>
                  We're at an inflection point for product teams. AI is changing how we build. Remote work 
                  is changing how we collaborate. Market pressures are shortening timelines while raising expectations.
                </p>
                
                <p>
                  Just as a lifter must adapt their training to their changing body, product leaders must 
                  adapt to this new environment without abandoning core principles. But how?
                </p>
                
                <p>
                  Now is the time for clarity and conviction. For a philosophy of product leadership that transcends 
                  trends and tools. For a return to what actually moves the needle: deep user empathy, 
                  disciplined execution, and the courage to optimize for long-term impact.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyThisWhyNow;
