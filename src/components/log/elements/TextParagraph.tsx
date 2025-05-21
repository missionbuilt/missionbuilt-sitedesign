
import React, { ReactNode } from "react";

interface TextParagraphProps {
  children: ReactNode;
  className?: string;
}

const TextParagraph: React.FC<TextParagraphProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-slate dark:text-slate-200 leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

export default TextParagraph;
