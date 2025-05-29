
import { useTheme } from '@/context/ThemeContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { generateLogoSVG } from '@/utils/logoGenerator';

const HeroSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  // Generate logo SVG based on theme
  const logoColor = isDarkMode ? '#ffffff' : '#10b981';
  const logoSVG = generateLogoSVG(logoColor, 80);
  
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements with improved styling */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-army/5 dark:bg-army/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunburst/10 dark:bg-sunburst/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <div className="h-24 w-24 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-army/5 dark:bg-army/10 rounded-full"></div>
              <div 
                className="h-20 w-20 relative z-10"
                dangerouslySetInnerHTML={{ __html: logoSVG }}
              />
            </div>
          </div>
          
          <h1 className="heading-lg mb-8">
            Building better products, one <span className="text-sunburst font-bold">rep</span> at a time.
          </h1>
          
          <div className="mb-8 max-w-2xl mx-auto">
            <p className="body-lg mb-6">
              What if building great products had less to do with frameworks and more to do with focus? Less with process and more with passion? That's the idea behind MissionBuilt — a free, open-source book sharing lessons I've learned across decades of product leadership, through a unique and sometimes sweaty lens: powerlifting.
            </p>
            
            <p className="body-md mb-8">
              This isn't a manifesto. It's not a masterclass. It's a perspective — one forged from military discipline, startup chaos, scaling software, and lifting very heavy things. You won't find a one-size-fits-all product method here. You will find honest stories, field-tested tactics, and a philosophy grounded in a single belief:
            </p>
            
            <p className="body-lg font-semibold text-sunburst">
              You win when your users win. Period.
            </p>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/traininglogs" className="btn-army flex items-center justify-center gap-2 group">
              <span>Start Reading</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="btn-secondary flex items-center justify-center">
              About the Author
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
