
import NightVisionToggle from "./NightVisionToggle";
import { useTheme } from '@/context/ThemeContext';
import { Badge } from "@/components/ui/badge";
import { Dumbbell } from "lucide-react";

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
          
          <div className="mb-4 max-w-2xl mx-auto">
            <p className="body-lg mb-6">
              What if building great products had less to do with frameworks and more to do with focus? Less with process and more with passion? That's the idea behind MissionBuilt — a free, open-source book sharing lessons I've learned across decades of product leadership, through a unique and sometimes sweaty lens: powerlifting.
            </p>
            
            <p className="body-md mb-6">
              This isn't a manifesto. It's not a masterclass. It's a perspective — one forged from military discipline, startup chaos, scaling software, and lifting very heavy things. You won't find a one-size-fits-all product method here. You will find honest stories, field-tested tactics, and a philosophy grounded in a single belief:
            </p>
            
            <p className="body-lg font-semibold text-sunburst">
              You win when your users win. Period.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
