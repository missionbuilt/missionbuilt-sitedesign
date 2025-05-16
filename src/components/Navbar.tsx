
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-10 border-b border-slate/10">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/dfd1484c-2dce-4c45-a3ef-e17eefa59dcc.png" 
            alt="MissionBuilt Logo" 
            className="h-10 w-auto"
          />
          <span className="font-display font-semibold text-lg md:text-xl text-slate">MissionBuilt<span className="text-army">.io</span></span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="p-2 rounded-md md:hidden text-slate hover:bg-slate/10"
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
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/philosophy">Philosophy</NavLink>
          <NavLink to="/training">Training</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate/10 md:hidden py-2">
            <nav className="flex flex-col">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</MobileNavLink>
              <MobileNavLink to="/philosophy" onClick={() => setIsMenuOpen(false)}>Philosophy</MobileNavLink>
              <MobileNavLink to="/training" onClick={() => setIsMenuOpen(false)}>Training</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
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
      className="text-slate px-4 py-3 block hover:bg-slate/10 transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
