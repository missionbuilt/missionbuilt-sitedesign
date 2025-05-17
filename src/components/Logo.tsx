
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  /**
   * Size variant for the logo
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether to display logo as a link to home
   */
  asLink?: boolean;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

const Logo = ({ size = 'md', asLink = true, className }: LogoProps) => {
  // Size classes based on variant
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl md:text-3xl"
  };

  // Image sizes based on logo size
  const imageSizes = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10"
  };

  const logoContent = (
    <span className={cn(
      "font-display font-semibold inline-flex items-center gap-1.5",
      sizeClasses[size],
      className
    )}>
      <img 
        src="/lovable-uploads/dfd1484c-2dce-4c45-a3ef-e17eefa59dcc.png" 
        alt="MissionBuilt Logo" 
        className={cn("mix-blend-multiply", imageSizes[size])}
      />
      <span className="font-display">Mission<span className="text-sunburst">Built</span><span className="text-army">.io</span></span>
    </span>
  );

  if (asLink) {
    return (
      <Link to="/" className="inline-flex items-center">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;
