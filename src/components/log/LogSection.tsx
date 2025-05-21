
import React, { ReactNode } from "react";

interface LogSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const LogSection: React.FC<LogSectionProps> = ({ id, title, children }) => {
  return (
    <div className="mb-10">
      <h2 id={id} className="text-2xl md:text-3xl font-display font-semibold text-slate dark:text-slate-100 mb-6">
        {title}
      </h2>
      
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default LogSection;
