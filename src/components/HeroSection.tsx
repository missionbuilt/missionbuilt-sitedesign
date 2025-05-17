
import NightVisionToggle from "./NightVisionToggle";
import { useTheme } from '@/context/ThemeContext';

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
          <span className="inline-block px-4 py-1.5 bg-secondary dark:bg-secondary/30 text-slate dark:text-slate-100 rounded-full text-sm font-medium mb-6 shadow-sm">
            [Category/Tag]
          </span>
          
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
          
          {/* Project purpose section */}
          <div className="mb-8 py-4 px-6 bg-slate/5 dark:bg-slate/10 rounded-xl border border-slate/10 dark:border-slate/20 max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-lg font-medium mb-2 text-slate dark:text-slate-100">Why This Project Exists</h2>
            <p className="text-sm text-slate/80 dark:text-slate-200/80 leading-relaxed">
              I created this project to bridge the unlikely worlds of powerlifting and product development. Both require patience, discipline, and methodical progress. This resource aims to help product leaders develop mental models that blend technical craft with human empathy.
            </p>
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
