
import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LogHeaderProps {
  title: string;
  author?: string;
  publishedDate?: string;
  category?: string;
}

const LogHeader: React.FC<LogHeaderProps> = ({ 
  title, 
  author = "Author Name", 
  publishedDate = "Published Date", 
  category = "Category" 
}) => {
  return (
    <>
      {/* Back navigation */}
      <div className="mb-6">
        <Link to="/chapters" className="flex items-center text-slate hover:text-army transition-colors dark:text-slate-200 dark:hover:text-army">
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span>Back to Training Logs</span>
        </Link>
      </div>
      
      {/* Log header section */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate dark:text-slate-100 mb-4">
          {title}
        </h1>
        
        <div className="flex items-center gap-4 text-slate/80 dark:text-slate-300 mb-6">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src="/placeholder.svg" alt="Author" />
              <AvatarFallback>MB</AvatarFallback>
            </Avatar>
            <span className="text-sm">{author}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{publishedDate}</span>
          </div>
          <div className="text-sm px-2 py-1 bg-slate/10 dark:bg-slate/20 rounded-full">{category}</div>
        </div>
      </div>
    </>
  );
};

export default LogHeader;
