
import NightVisionToggle from "./NightVisionToggle";
import { useTheme } from '@/context/ThemeContext';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Dumbbell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-army/5 dark:bg-army/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-sunburst/10 dark:bg-sunburst/20 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>
      </div>
      
      <div className="container-custom relative">
        {/* Night Vision Toggle */}
        <div className="flex justify-center mb-6">
          <NightVisionToggle />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="secondary" className="px-3 py-1.5 text-sm font-medium bg-secondary/70 dark:bg-secondary/30 text-slate dark:text-slate-100 flex items-center gap-1.5">
              <Dumbbell className="h-3.5 w-3.5" />
              <span>Powerlifting</span>
            </Badge>
            <Badge variant="outline" className="px-3 py-1.5 text-sm font-medium border-slate/20 dark:border-slate/40 text-slate/80 dark:text-slate-200/80">
              Product Management
            </Badge>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="h-24 w-24 flex items-center justify-center">
              <img 
                src="/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png" 
                alt="Logo" 
                className="h-20 w-auto"
              />
            </div>
          </div>
          
          <h1 className="heading-lg mb-6">
            Product lessons through the lens of <span className="text-sunburst font-bold">powerlifting</span>.
          </h1>
          
          {/* Project purpose section - redesigned */}
          <div className="mb-12 max-w-2xl mx-auto">
            <Card className="bg-slate/5 dark:bg-slate/10 border border-slate/10 dark:border-slate/20 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="py-4 px-6 border-b border-slate/10 dark:border-slate/20 bg-slate/10 dark:bg-slate/15">
                  <h2 className="text-lg font-display font-semibold text-slate dark:text-slate-100 flex items-center justify-center gap-2">
                    <BookOpen className="h-5 w-5 text-sunburst" />
                    Forged Under Load
                  </h2>
                </div>
                
                <div className="p-6 text-left space-y-4">
                  <p className="text-sm text-slate/90 dark:text-slate-200/90 leading-relaxed">
                    MissionBuilt was born from a simple idea: that the principles driving successful product teams and driven lifters are more alike than they seem. After decades in both worlds—tech product management and competitive powerlifting—it became clear that each domain thrives on the same core truths: consistency, purpose, and relentless focus on the mission.
                  </p>
                  
                  <p className="text-sm text-slate/90 dark:text-slate-200/90 leading-relaxed">
                    This project isn't a manifesto. It's not here to tell you how it must be done. It's a personal contribution to the shared pool of knowledge—a new lens for understanding the craft of product leadership, seen through the eyes of the lifter, the builder, the grinder.
                  </p>
                  
                  <p className="text-sm text-slate/90 dark:text-slate-200/90 leading-relaxed">
                    Some people learn best from frameworks and acronyms. Others need narrative and analogy. MissionBuilt is for the latter. It's product management as told through the chalk-dusted hands of someone who's felt the pressure of a heavy barbell and a tight roadmap.
                  </p>
                  
                  <div className="py-4">
                    <h3 className="text-base font-medium text-slate dark:text-slate-100 mb-3">This project exists to:</h3>
                    <ul className="space-y-3 pl-5 list-disc marker:text-sunburst">
                      <li className="text-sm text-slate/90 dark:text-slate-200/90 leading-relaxed">
                        Offer a free and open-source book that ties together the rigor of product leadership with the discipline of physical training.
                      </li>
                      <li className="text-sm text-slate/90 dark:text-slate-200/90 leading-relaxed">
                        Present an alternative philosophy, not a prescriptive method.
                      </li>
                      <li className="text-sm text-slate/90 dark:text-slate-200/90 leading-relaxed">
                        Encourage introspection, empathy, and ownership—especially in a world that too often prizes speed over substance.
                      </li>
                      <li className="text-sm text-slate/90 dark:text-slate-200/90 leading-relaxed">
                        Share what's been learned from years of building: products, teams, strength, and character.
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-slate/90 dark:text-slate-200/90 leading-relaxed">
                    Most of all, MissionBuilt exists because you might be like me—someone who cares deeply, grinds daily, and believes that strength (in life, in teams, in outcomes) is built, not bought.
                  </p>
                  
                  <div className="pt-2 border-t border-slate/10 dark:border-slate/20 flex flex-col items-center text-center">
                    <p className="text-sm italic text-slate/80 dark:text-slate-200/80 mt-2">This is a perspective, a point of view. One forged under load.</p>
                    <p className="text-sm font-medium text-sunburst mt-1">And it's yours to build with.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <p className="body-lg mb-10 max-w-2xl mx-auto">
            An open-source book about building products with relentless care and empathetic discipline.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/field-notes" className="btn-army">
              [Primary CTA]
            </a>
            <a href="/training" className="btn-secondary">
              [Secondary CTA]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
