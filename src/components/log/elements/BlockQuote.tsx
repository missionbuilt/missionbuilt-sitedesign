
import React, { ReactNode } from "react";

interface BlockQuoteProps {
  children: ReactNode;
  className?: string;
}

const BlockQuote: React.FC<BlockQuoteProps> = ({ children, className = "" }) => {
  return (
    <div className={`my-6 text-center ${className}`}>
      <p className="text-lg font-semibold text-army dark:text-army italic">
        {children}
      </p>
    </div>
  );
};

export default BlockQuote;
