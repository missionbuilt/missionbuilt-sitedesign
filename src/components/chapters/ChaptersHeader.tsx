
import React from "react";

interface ChaptersHeaderProps {
  title: string;
  subtitle: string;
  bookTitle?: string;
  bookSubtitle?: string;
}

const ChaptersHeader: React.FC<ChaptersHeaderProps> = ({ 
  title, 
  subtitle, 
  bookTitle, 
  bookSubtitle 
}) => {
  return (
    <div className="mb-8 text-center">
      {bookTitle && (
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2 text-army dark:text-army">
            {bookTitle}
          </h1>
          {bookSubtitle && (
            <p className="text-xl md:text-2xl font-display text-muted-foreground max-w-3xl mx-auto">
              {bookSubtitle}
            </p>
          )}
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-slate dark:text-slate-100">
        {title}
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default ChaptersHeader;
