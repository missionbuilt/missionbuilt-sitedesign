
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Switch } from '@/components/ui/switch';
import { Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NightVisionToggleProps {
  className?: string;
}

const NightVisionToggle: React.FC<NightVisionToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Switch 
        checked={isDarkMode} 
        onCheckedChange={toggleTheme} 
        className={cn(
          "data-[state=checked]:bg-army dark:data-[state=checked]:bg-sunburst",
          "data-[state=unchecked]:bg-slate/20"
        )}
      />
      <Moon 
        className={cn(
          "h-4 w-4 transition-opacity",
          isDarkMode ? "opacity-100 text-sunburst" : "opacity-50"
        )}
      />
      <span className="text-sm font-medium dark:text-slate-200">
        Night Vision
      </span>
    </div>
  );
};

export default NightVisionToggle;
