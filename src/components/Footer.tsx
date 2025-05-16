
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate/5 border-t border-slate/10 py-10 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/dfd1484c-2dce-4c45-a3ef-e17eefa59dcc.png" 
                alt="MissionBuilt Logo" 
                className="h-10 w-auto"
              />
              <span className="font-display font-semibold text-lg text-slate">MissionBuilt<span className="text-army">.io</span></span>
            </Link>
            <p className="mt-3 text-sm text-slate/80">
              Uniting product passion and weightlifting philosophy for balanced growth.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-3 text-slate">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-slate/80 hover:text-army transition-colors">Blog</Link></li>
              <li><Link to="/philosophy" className="text-slate/80 hover:text-army transition-colors">Philosophy</Link></li>
              <li><Link to="/training" className="text-slate/80 hover:text-army transition-colors">Training</Link></li>
              <li><Link to="/about" className="text-slate/80 hover:text-army transition-colors">About</Link></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-display font-semibold mb-3 text-slate">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate/80 hover:text-army transition-colors">Twitter</a></li>
              <li><a href="#" className="text-slate/80 hover:text-army transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-slate/80 hover:text-army transition-colors">Instagram</a></li>
              <li><a href="mailto:hello@missionbuilt.io" className="text-slate/80 hover:text-army transition-colors">Email</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold mb-3 text-slate">Newsletter</h3>
            <p className="text-sm text-slate/80 mb-3">Get the latest insights straight to your inbox.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 rounded-l-lg border border-slate/20 focus:outline-none focus:ring-1 focus:ring-army text-sm"
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
        
        <div className="mt-10 pt-6 border-t border-slate/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate/60 mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} MissionBuilt.io. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-slate/60 hover:text-army transition-colors">Privacy</Link>
            <Link to="/terms" className="text-sm text-slate/60 hover:text-army transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
