
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="bg-slate/5 dark:bg-slate/10 border-t border-slate/10 dark:border-slate/20 py-10 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <Logo size="md" colorScheme="monochrome" />
            <p className="mt-3 text-sm text-slate/80 dark:text-slate-300">
              Product lessons through the lens of powerlifting.
            </p>
          </div>
          
          {/* Quick Links - Updated to match Navbar links */}
          <div>
            <h3 className="font-display font-semibold mb-3 text-slate dark:text-slate-100">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">The Mission</Link></li>
              <li><Link to="/chapters" className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">Training Logs</Link></li>
              <li><Link to="/about" className="text-slate/80 dark:text-slate-300 hover:text-army dark:hover:text-army transition-colors">About</Link></li>
            </ul>
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
