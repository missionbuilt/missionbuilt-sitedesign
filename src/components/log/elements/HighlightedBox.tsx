
import React, { ReactNode } from "react";

interface HighlightedBoxProps {
  children: ReactNode;
  bordered?: boolean;
  className?: string;
}

const HighlightedBox: React.FC<HighlightedBoxProps> = ({ 
  children, 
  bordered = false, 
  className = "" 
}) => {
  const borderClass = bordered ? "border-l-4 border-army" : "";
  
  return (
    <div className={`my-6 p-5 bg-slate/5 dark:bg-slate/10 rounded-lg ${borderClass} ${className}`}>
      {children}
    </div>
  );
};

export default HighlightedBox;
