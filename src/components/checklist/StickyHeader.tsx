
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Target } from 'lucide-react';

interface StickyHeaderProps {
  showStickyHeader: boolean;
  totalScore: number;
  maxScore: number;
  completionPercentage: number;
  scoreLevel: {
    label: string;
    description: string;
    color: string;
    ring: string;
  };
}

const StickyHeader: React.FC<StickyHeaderProps> = ({
  showStickyHeader,
  totalScore,
  maxScore,
  completionPercentage,
  scoreLevel
}) => {
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm transition-all duration-300 ${
      showStickyHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-army dark:text-sunburst" />
              <span className="font-semibold text-foreground">Mission Alignment</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-army dark:text-sunburst">
                {totalScore}
              </div>
              <div className="text-sm text-muted-foreground">
                / {maxScore}
              </div>
              <Badge className={`${scoreLevel.color} text-sm px-3 py-1 font-semibold`}>
                {scoreLevel.label}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Progress value={completionPercentage} className="w-32 h-2" />
            <span className="text-sm font-medium text-muted-foreground min-w-[3ch]">
              {completionPercentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
