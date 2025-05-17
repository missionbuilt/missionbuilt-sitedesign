
import NightVisionToggle from "./NightVisionToggle";
import { useTheme } from '@/context/ThemeContext';

const HeroSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background elements - reduced blur for better clarity */}
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
          <span className="inline-block px-4 py-1.5 bg-secondary dark:bg-secondary/30 text-slate dark:text-slate/90 rounded-full text-sm font-medium mb-6 shadow-sm">
            Product Management × Weightlifting × Strength
          </span>
          
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/dfd1484c-2dce-4c45-a3ef-e17eefa59dcc.png" 
              alt="MissionBuilt Logo" 
              className={`h-24 w-auto ${isDarkMode ? "invert" : "mix-blend-multiply"}`}
            />
          </div>
          
          <h1 className="heading-lg mb-6">
            Building Products with <span className="text-sunburst font-bold">Purpose</span> and <span className="text-sunburst font-bold">Strength</span>
          </h1>
          
          <p className="body-lg mb-10 max-w-2xl mx-auto">
            Exploring the intersection of product management methodology and the discipline of weightlifting. 
            Both require vision, persistence, and a growth mindset.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/field-notes" className="btn-army">
              Field Notes
            </a>
            <a href="/pr-board" className="btn-secondary">
              PR Board
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
