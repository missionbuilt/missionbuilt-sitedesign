
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
  colorScheme?: 'default' | 'monochrome' | 'subtle';
}

const Logo = ({ 
  size = 'md', 
  asLink = true, 
  className,
  showImage = true,
  showText = true,
  colorScheme = 'default'
}: LogoProps) => {
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
    // All text in slate color for a cleaner look
    monochrome: {
      mission: "text-slate",
      built: "text-slate",
      domain: "text-slate"
    },
    // Subtle two-color approach (Mission+Built: slate, .io: army)
    subtle: {
      mission: "text-slate",
      built: "text-slate",
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
        <img 
          src="/lovable-uploads/dfd1484c-2dce-4c45-a3ef-e17eefa59dcc.png" 
          alt="MissionBuilt Logo" 
          className={cn("mix-blend-multiply", imageSizes[size])}
        />
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
