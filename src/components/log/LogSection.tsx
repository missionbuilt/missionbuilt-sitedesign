
import React, { ReactNode } from "react";

interface LogSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  sectionClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const LogSection: React.FC<LogSectionProps> = ({ 
  id, 
  title, 
  children, 
  className = "", 
  sectionClassName = "mb-10",
  titleClassName = "text-2xl md:text-3xl font-display font-semibold text-slate dark:text-slate-100 mb-6",
  contentClassName = "space-y-4"
}) => {
  return (
    <div className={`${sectionClassName} ${className}`}>
      <h2 id={id} className={titleClassName}>
        {title}
      </h2>
      
      <div className={contentClassName}>
        {children}
      </div>
    </div>
  );
};

export default LogSection;
