
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface LogIntroductionProps {
  summary: string;
  className?: string;
}

const LogIntroduction: React.FC<LogIntroductionProps> = ({ 
  summary, 
  className = "mb-8" 
}) => {
  return (
    <Alert className={`${className} bg-slate/5 dark:bg-slate/10`}>
      <AlertDescription className="text-base italic">
        {summary}
      </AlertDescription>
    </Alert>
  );
};

export default LogIntroduction;
