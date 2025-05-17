
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
        className="data-[state=checked]:bg-army"
      />
      <Moon 
        className={cn(
          "h-4 w-4 transition-opacity",
          isDarkMode ? "opacity-100" : "opacity-50"
        )}
      />
      <span className="text-sm font-medium">
        Night Vision
      </span>
    </div>
  );
};

export default NightVisionToggle;
