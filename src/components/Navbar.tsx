
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Logo from '@/components/Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 dark:bg-slate/5 backdrop-blur-sm sticky top-0 z-10 border-b border-slate/10 dark:border-slate/20">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo with reverse color scheme */}
        <Logo colorScheme="reverse" />

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/field-notes">Page 1</NavLink>
          <NavLink to="/training">Page 2</NavLink>
          <NavLink to="/pr-board">Page 3</NavLink>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-slate/10 shadow-lg border-t border-slate/10 dark:border-slate/20 md:hidden py-2">
            <nav className="flex flex-col">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/field-notes" onClick={() => setIsMenuOpen(false)}>Page 1</MobileNavLink>
              <MobileNavLink to="/training" onClick={() => setIsMenuOpen(false)}>Page 2</MobileNavLink>
              <MobileNavLink to="/pr-board" onClick={() => setIsMenuOpen(false)}>Page 3</MobileNavLink>
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
}

const NavLink = ({ to, children, exact }: NavLinkProps) => {
  // TODO: Replace with actual route matching logic once we have useLocation
  const isActive = (exact && to === window.location.pathname) || 
    (!exact && window.location.pathname.startsWith(to));

  return (
    <Link 
      to={to} 
      className={cn("nav-link", isActive && "nav-link-active")}
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
