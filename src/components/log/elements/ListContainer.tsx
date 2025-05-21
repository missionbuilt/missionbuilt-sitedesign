
import React, { ReactNode } from "react";

interface ListContainerProps {
  children: ReactNode;
  spacing?: string;
  className?: string;
}

const ListContainer: React.FC<ListContainerProps> = ({ 
  children, 
  spacing = "space-y-2", 
  className = "" 
}) => {
  return (
    <div className={`my-6 ${spacing} ${className}`}>
      {children}
    </div>
  );
};

export default ListContainer;
