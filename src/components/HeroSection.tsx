
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
          <span className="inline-block px-4 py-1.5 bg-secondary dark:bg-secondary/30 text-slate dark:text-slate-100 rounded-full text-sm font-medium mb-6 shadow-sm">
            Product Leadership × Strength Training × Personal Growth
          </span>
          
          <div className="flex justify-center mb-8">
            <div className="h-24 w-24 flex items-center justify-center">
              <img 
                src="/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png" 
                alt="MissionBuilt Logo" 
                className="h-20 w-auto"
              />
            </div>
          </div>
          
          <h1 className="heading-lg mb-6">
            Building <span className="text-sunburst font-bold">Products</span> and <span className="text-sunburst font-bold">Strength</span> with Purpose
          </h1>
          
          <p className="body-lg mb-10 max-w-2xl mx-auto">
            Product is simple: Make users successful in their mission.
            At MissionBuilt, we believe product and training share the same code: purpose, discipline, and relentless focus on outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/field-notes" className="btn-army">
              Read Field Notes
            </a>
            <a href="/training" className="btn-secondary">
              Training
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
