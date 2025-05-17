
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="bg-slate/5 dark:bg-slate/10 border-t border-slate/10 dark:border-slate/20 py-10 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <Logo size="md" colorScheme="monochrome" />
            <p className="mt-3 text-sm text-slate/80 dark:text-slate-300">
              [Site tagline or short description]
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-3 text-slate dark:text-slate-100">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/field-notes" className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">Page 1</Link></li>
              <li><Link to="/pr-board" className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">Page 2</Link></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-display font-semibold mb-3 text-slate dark:text-slate-100">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">Social 1</a></li>
              <li><a href="#" className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">Social 2</a></li>
              <li><a href="#" className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">Social 3</a></li>
              <li><a href="mailto:hello@example.com" className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">Email</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold mb-3 text-slate dark:text-slate-100">Newsletter</h3>
            <p className="text-sm text-slate/80 dark:text-slate-300 mb-3">[Newsletter description]</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 rounded-l-lg border border-slate/20 dark:border-slate/30 dark:bg-slate/20 focus:outline-none focus:ring-1 focus:ring-army text-sm dark:text-slate-100 dark:placeholder-slate-400"
                required
              />
              <button 
                type="submit" 
                className="bg-army text-white px-3 py-2 rounded-r-lg hover:bg-army/90 transition-colors"
              >
                <span className="sr-only">Subscribe</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-slate/10 dark:border-slate/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate/60 dark:text-slate-400 mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} [Your Company]. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-slate/60 dark:text-slate-400 hover:text-army dark:hover:text-army transition-colors">Privacy</Link>
            <Link to="/terms" className="text-sm text-slate/60 dark:text-slate-400 hover:text-army dark:hover:text-army transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
