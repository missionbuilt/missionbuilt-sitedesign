
import React, { ReactNode } from "react";

interface KeyPointProps {
  children: ReactNode;
  className?: string;
}

const KeyPoint: React.FC<KeyPointProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-slate dark:text-slate-200 leading-relaxed font-semibold ${className}`}>
      {children}
    </p>
  );
};

export default KeyPoint;
