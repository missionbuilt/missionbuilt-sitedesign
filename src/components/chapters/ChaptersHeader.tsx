
import React from "react";

interface ChaptersHeaderProps {
  title: string;
  subtitle: string;
}

const ChaptersHeader: React.FC<ChaptersHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Building better products, one <span className="text-sunburst">rep</span> at a time.
      </h1>
      <p className="text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
};

export default ChaptersHeader;
