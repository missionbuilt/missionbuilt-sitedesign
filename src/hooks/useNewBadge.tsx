
import { useState, useEffect } from 'react';

export const useNewBadge = () => {
  const [hasVisitedTrainingLogs, setHasVisitedTrainingLogs] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem('hasVisitedTrainingLogs');
    setHasVisitedTrainingLogs(visited === 'true');
  }, []);

  const markTrainingLogsAsVisited = () => {
    localStorage.setItem('hasVisitedTrainingLogs', 'true');
    setHasVisitedTrainingLogs(true);
  };

  return {
    hasVisitedTrainingLogs,
    markTrainingLogsAsVisited
  };
};
