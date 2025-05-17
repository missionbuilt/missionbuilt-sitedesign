
import React from "react";
import { ArrowRight } from "lucide-react";

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
      
      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-slate/5 rounded-full text-sm text-muted-foreground border border-slate/10">
          <span className="font-medium">New chapters released weekly</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default ChaptersHeader;
