
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate/5 dark:bg-slate/10 border-t border-slate/10 dark:border-slate/20 py-12 mt-20">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and Tagline Column */}
          <div className="md:max-w-xs">
            <Logo size="md" colorScheme="monochrome" />
            <p className="mt-3 text-sm text-slate/80 dark:text-slate-300 mb-6">
              Product lessons through the lens of powerlifting.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 mb-6 md:mb-0">
              <a href="#" className="text-slate/70 hover:text-army dark:text-slate-400 dark:hover:text-army transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-slate/70 hover:text-army dark:text-slate-400 dark:hover:text-army transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://bsky.app/profile/missionbuilt.bsky.social" className="text-slate/70 hover:text-army dark:text-slate-400 dark:hover:text-army transition-colors">
                <img 
                  src="/lovable-uploads/14e0963a-6afa-437d-ac6a-c8b45d07bc2b.png" 
                  alt="Bluesky" 
                  className="h-5 w-5" 
                />
                <span className="sr-only">Bluesky</span>
              </a>
              <a href="mailto:hello@example.com" className="text-slate/70 hover:text-army dark:text-slate-400 dark:hover:text-army transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
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
                  <Link to="/" className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">
                    The Mission
                  </Link>
                </li>
                <li>
                  <Link to="/chapters" className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">
                    Training Logs
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">
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
                  <Link to="/terms" className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-slate/10 dark:border-slate/20">
          <p className="text-sm text-slate/60 dark:text-slate-400 text-center">
            &copy; {currentYear} MissionBuilt.io. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
