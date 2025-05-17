
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Logo from '@/components/Logo';
import NightVisionToggle from '@/components/NightVisionToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Function to handle scrolling to top when navigating to home
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Changed from 'smooth' to 'instant' for immediate scrolling
    });
  };

  // Effect to ensure we're at the top of the page when navigating to home
  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <header className="bg-white/90 dark:bg-slate/5 backdrop-blur-sm sticky top-0 z-10 border-b border-slate/10 dark:border-slate/20">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo with reverse color scheme */}
        <Logo colorScheme="reverse" />
        
        {/* Desktop Navigation with Night Vision Toggle */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center space-x-1 mr-6">
            <NavLink to="/" exact onClick={scrollToTop}>The Mission</NavLink>
            <NavLink to="/chapters">Training Logs</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
          
          <NightVisionToggle />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="p-2 rounded-md md:hidden text-slate hover:bg-slate/10 dark:text-slate-200 dark:hover:bg-slate/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-slate/10 shadow-lg border-t border-slate/10 dark:border-slate/20 md:hidden py-2">
            <nav className="flex flex-col">
              <MobileNavLink to="/" onClick={() => {setIsMenuOpen(false); scrollToTop();}}>The Mission</MobileNavLink>
              <MobileNavLink to="/chapters" onClick={() => setIsMenuOpen(false)}>Training Logs</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <div className="px-4 py-3">
                <NightVisionToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  exact?: boolean;
  onClick?: () => void;
}

const NavLink = ({ to, children, exact, onClick }: NavLinkProps) => {
  const location = useLocation();
  const isActive = (exact && to === location.pathname) || 
    (!exact && location.pathname.startsWith(to));

  return (
    <Link 
      to={to} 
      className={cn("nav-link", isActive && "nav-link-active")}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => {
  return (
    <Link 
      to={to} 
      className="text-slate dark:text-slate-200 px-4 py-3 block hover:bg-slate/10 transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
