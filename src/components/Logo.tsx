
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

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
   * Whether to show the logo image (M with barbell)
   */
  showImage?: boolean;
  /**
   * Whether to show the text (MissionBuilt.io)
   */
  showText?: boolean;
  /**
   * Color scheme for the logo text
   */
  colorScheme?: 'default' | 'monochrome' | 'subtle' | 'reverse';
}

const Logo = ({ 
  size = 'md', 
  asLink = true, 
  className,
  showImage = true,
  showText = true,
  colorScheme = 'default'
}: LogoProps) => {
  const { theme } = useTheme();
  
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

  // Color schemes for the text portion
  const colorSchemes = {
    // Original color scheme (Mission: slate, Built: sunburst, .io: army)
    default: {
      mission: "text-slate",
      built: "text-sunburst",
      domain: "text-army"
    },
    // All text in slate color for a cleaner look with dark mode support
    monochrome: {
      mission: "text-slate dark:text-slate-100",
      built: "text-slate dark:text-slate-100",
      domain: "text-slate dark:text-slate-100"
    },
    // Subtle two-color approach (Mission+Built: slate, .io: army)
    subtle: {
      mission: "text-slate",
      built: "text-slate",
      domain: "text-army"
    },
    // Reverse color scheme (Mission: sunburst, Built+.io: army)
    reverse: {
      mission: "text-sunburst",
      built: "text-army",
      domain: "text-army"
    }
  };
  
  // Get the selected color scheme
  const colors = colorSchemes[colorScheme];

  const logoContent = (
    <span className={cn(
      "font-display font-semibold inline-flex items-center gap-1.5",
      sizeClasses[size],
      className
    )}>
      {showImage && (
        <div className="flex items-center justify-center">
          <img 
            src="/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png" 
            alt="MissionBuilt Logo" 
            className={cn(imageSizes[size])}
          />
        </div>
      )}
      {showText && (
        <span className="font-display">
          <span className={colors.mission}>Mission</span>
          <span className={colors.built}>Built</span>
          <span className={colors.domain}>.io</span>
        </span>
      )}
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
