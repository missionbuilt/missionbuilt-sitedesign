
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Function to handle scrolling to top when links are clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-slate/5 dark:bg-slate/10 border-t border-slate/10 dark:border-slate/20 py-12 mt-20">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and Tagline Column */}
          <div className="md:max-w-xs">
            <Logo size="md" colorScheme="monochrome" />
            <p className="mt-3 text-sm text-slate/80 dark:text-slate-300 mb-6">
              Building better products, one rep at a time.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 mb-6 md:mb-0">
              <a href="https://bsky.app/profile/missionbuilt.bsky.social" className="text-slate/70 hover:text-army dark:text-slate-400 dark:hover:text-army transition-colors">
                <img 
                  src="/lovable-uploads/14e0963a-6afa-437d-ac6a-c8b45d07bc2b.png" 
                  alt="Bluesky" 
                  className="h-5 w-5" 
                />
                <span className="sr-only">Bluesky</span>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:flex gap-16">
            {/* Sets Links (was Logs) */}
            <div className="mb-8 md:mb-0">
              <h3 className="font-display font-semibold mb-4 text-slate dark:text-slate-100">Sets</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" onClick={scrollToTop} className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">
                    The Mission
                  </Link>
                </li>
                <li>
                  <Link to="/chapters" onClick={scrollToTop} className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">
                    Training Logs
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={scrollToTop} className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Resources Links */}
            <div className="mb-8 md:mb-0">
              <h3 className="font-display font-semibold mb-4 text-slate dark:text-slate-100">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/terms" onClick={scrollToTop} className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Made with Lovable Section */}
        <div className="mt-10 py-6 border-t border-slate/10 dark:border-slate/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 bg-slate/5 dark:bg-slate/10 py-4 px-6 rounded-xl">
            <p className="text-sm text-slate/80 dark:text-slate-300 font-medium">Made with</p>
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-army mr-1 animate-pulse" />
              <span className="font-display font-semibold text-army">Lovable</span>
            </div>
            <p className="text-sm text-slate/80 dark:text-slate-300">— celebrating the joy of AI-assisted development</p>
          </div>
        </div>
        
        {/* Creative Commons License */}
        <div className="border-t border-slate/10 dark:border-slate/20 text-sm text-slate/70 dark:text-slate-400">
          <div className="flex flex-col md:flex-row items-center gap-4 pt-6">
            <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
              <img 
                alt="Creative Commons License" 
                style={{ borderWidth: 0 }}
                src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" 
              />
            </a>
            <p>
              This work is licensed under a{" "}
              <a 
                rel="license" 
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                className="text-army hover:underline"
              >
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
              </a>.
            </p>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="mt-6 pt-6 border-t border-slate/10 dark:border-slate/20">
          <p className="text-sm text-slate/60 dark:text-slate-400 text-center">
            &copy; {currentYear} MissionBuilt.io. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
