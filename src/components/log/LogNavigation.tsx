
import React from "react";
import { Link } from "react-router-dom";

interface LogNavigationProps {
  previousLog?: {
    path: string;
    title: string;
  };
  nextLog?: {
    path: string;
    title: string;
  };
}

const LogNavigation: React.FC<LogNavigationProps> = ({ previousLog, nextLog }) => {
  return (
    <div className="mt-16 pt-8 border-t border-slate/10 dark:border-slate/20 flex justify-between">
      <div>
        {previousLog && (
          <Link
            to={previousLog.path}
            className="text-slate hover:text-army dark:text-slate-200 dark:hover:text-army transition-colors"
          >
            ← {previousLog.title}
          </Link>
        )}
      </div>
      <div>
        <Link 
          to="/chapters"
          className="btn-army inline-flex"
        >
          All Training Logs
        </Link>
      </div>
      <div>
        {nextLog && (
          <Link
            to={nextLog.path}
            className="text-slate hover:text-army dark:text-slate-200 dark:hover:text-army transition-colors"
          >
            {nextLog.title} →
          </Link>
        )}
      </div>
    </div>
  );
};

export default LogNavigation;
