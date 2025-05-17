
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Dumbbell } from 'lucide-react';

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
  /**
   * Whether to show the dumbbell icon
   */
  showIcon?: boolean;
}

const Logo = ({ size = 'md', asLink = true, className, showIcon = true }: LogoProps) => {
  // Size classes based on variant
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl md:text-3xl"
  };

  // Icon sizes based on logo size
  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 28
  };

  const logoContent = (
    <span className={cn(
      "font-display font-semibold inline-flex items-center gap-1.5",
      sizeClasses[size],
      className
    )}>
      {showIcon && (
        <Dumbbell 
          size={iconSizes[size]} 
          className="text-army" 
          strokeWidth={2.5}
        />
      )}
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
