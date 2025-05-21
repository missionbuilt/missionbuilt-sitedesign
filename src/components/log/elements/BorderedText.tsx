
import React, { ReactNode } from "react";

interface BorderedTextProps {
  children: ReactNode;
  borderColor?: string;
  bgColor?: string;
  className?: string;
}

const BorderedText: React.FC<BorderedTextProps> = ({ 
  children, 
  borderColor = "border-army", 
  bgColor = "", 
  className = "" 
}) => {
  return (
    <p className={`text-slate dark:text-slate-200 leading-relaxed ml-4 border-l-4 ${borderColor} pl-4 py-1 ${bgColor} ${className}`}>
      {children}
    </p>
  );
};

export default BorderedText;
