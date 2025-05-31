
import React from 'react';

interface SectionDividerProps {
  className?: string;
}

const SectionDivider = ({ className = '' }: SectionDividerProps) => {
  return (
    <div className={`my-12 ${className}`}>
      <div className="flex items-center">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
        <div className="mx-4">
          <div className="w-2 h-2 bg-army dark:bg-sunburst rounded-full"></div>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
      </div>
    </div>
  );
};

export default SectionDivider;
