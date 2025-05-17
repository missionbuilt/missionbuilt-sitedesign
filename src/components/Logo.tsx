
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

  const logoContent = (
    <span className={cn(
      "font-display font-semibold",
      sizeClasses[size],
      className
    )}>
      Mission<span className="text-sunburst">Built</span><span className="text-army">.io</span>
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
