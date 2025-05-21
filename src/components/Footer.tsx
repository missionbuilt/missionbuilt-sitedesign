
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Heart, ExternalLink, Github } from "lucide-react";

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
            
            {/* Motto - Updated with more aggressive styling */}
            <div className="mb-6 bg-slate/10 dark:bg-slate/20 p-3 border-l-4 border-army dark:border-destructive rounded-r-md">
              <p className="font-display font-bold text-xl uppercase tracking-wider text-army dark:text-destructive drop-shadow-sm">
                "GIVE A SHIT"
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 mb-6 md:mb-0">
              {/* Bluesky Icon */}
              <a href="https://bsky.app/profile/missionbuilt.bsky.social" className="text-slate/70 hover:text-army dark:text-slate-400 dark:hover:text-army transition-colors">
                <img 
                  src="/lovable-uploads/14e0963a-6afa-437d-ac6a-c8b45d07bc2b.png" 
                  alt="Bluesky" 
                  className="h-5 w-5" 
                />
                <span className="sr-only">Bluesky</span>
              </a>
              
              {/* Discord Icon */}
              <a href="https://discord.gg/H5cSFKz2" className="text-slate/70 hover:text-army dark:text-slate-400 dark:hover:text-army transition-colors">
                {/* Using SVG for Discord instead of the lucide icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                  <path d="M7.5 7.2c.4-.9 1.3-2 2.6-2.5 1.7-.7 3.6-.7 5.4-.2 1.1.3 2.4 1 3.1 2.2.3.7.3 1.8.2 2.5-.3 2-.7 3.7-2.4 5a3.6 3.6 0 0 1-1.5.8"></path>
                  <path d="M9 17c-2.1 0-3.8-1.3-5-2.5-.3-.3-.2-1 .3-1.5.4-.4 1-.2 1.3.1.4.4 1.6 1.4 3.4 1.4 1.6 0 2.9-1 3.4-1.4.4-.3 1-.5 1.4 0 .5.4.6 1.2.3 1.5-1.2 1.2-2.9 2.5-5 2.5"></path>
                  <path d="M8 17v5l4-4-4-4v3"></path>
                </svg>
                <span className="sr-only">Discord</span>
              </a>
              
              {/* GitHub Icon */}
              <a href="https://github.com/missionbuilt" className="text-slate/70 hover:text-army dark:text-slate-400 dark:hover:text-army transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
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
              <a 
                href="https://lovable.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-display font-semibold text-army hover:underline flex items-center"
              >
                Lovable
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
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
