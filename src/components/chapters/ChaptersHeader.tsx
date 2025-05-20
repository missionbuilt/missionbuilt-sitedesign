
import React from "react";

interface ChaptersHeaderProps {
  title: string;
  subtitle: string;
}

const ChaptersHeader: React.FC<ChaptersHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-slate dark:text-slate-100">
        {title}
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default ChaptersHeader;
