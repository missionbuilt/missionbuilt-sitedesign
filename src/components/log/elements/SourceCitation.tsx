
import React from "react";

interface SourceCitationProps {
  source: string;
  className?: string;
}

const SourceCitation: React.FC<SourceCitationProps> = ({ source, className = "" }) => {
  return (
    <p className={`text-xs text-slate/70 dark:text-slate-400 italic ${className}`}>
      Source: {source}
    </p>
  );
};

export default SourceCitation;
