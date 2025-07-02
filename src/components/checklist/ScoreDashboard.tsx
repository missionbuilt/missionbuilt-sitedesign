
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Target, TrendingUp, Shield } from 'lucide-react';

interface ScoreDashboardProps {
  totalScore: number;
  maxScore: number;
  completionPercentage: number;
  scoreLevel: {
    label: string;
    description: string;
    color: string;
    ring: string;
  };
  groupScores: Record<string, { total: number; max: number }>;
}

const ScoreDashboard: React.FC<ScoreDashboardProps> = ({
  totalScore,
  maxScore,
  completionPercentage,
  scoreLevel,
  groupScores
}) => {
  const groupOrder = ['Mission Foundation', 'Execution & Adaptation', 'Sustainability & Culture'];
  
  const getGroupIcon = (group: string) => {
    switch (group) {
      case 'Mission Foundation':
        return <Target className="h-8 w-8 text-army dark:text-sunburst" />;
      case 'Execution & Adaptation':
        return <TrendingUp className="h-8 w-8 text-steel dark:text-steel" />;
      case 'Sustainability & Culture':
        return <Shield className="h-8 w-8 text-sunburst dark:text-sunburst" />;
      default:
        return null;
    }
  };

  return (
    <div id="score-dashboard" className="mb-8">
      {/* Total Score - Large and Prominent with Gradient */}
      <Card className={`mb-4 border-2 ${scoreLevel.ring} ring-4 bg-gradient-to-br from-card to-card/50 shadow-xl`}>
        <CardHeader className="pb-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-army/10 dark:bg-sunburst/10">
              <Target className="h-6 w-6 text-army dark:text-sunburst" />
            </div>
            <CardTitle className="text-2xl bg-gradient-to-r from-army to-steel bg-clip-text text-transparent">
              Mission Alignment Score
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <div className="relative mb-6">
            <div className="text-6xl font-bold text-army dark:text-sunburst mb-2 tracking-tight">
              {totalScore}
            </div>
            <div className="text-2xl text-muted-foreground">
              / {maxScore}
            </div>
          </div>
          <Progress value={completionPercentage} className="mb-4 h-4 bg-muted" />
          <Badge className={`${scoreLevel.color} text-lg px-6 py-3 font-semibold shadow-lg mb-4`}>
            {scoreLevel.label}
          </Badge>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {scoreLevel.description}
          </p>
        </CardContent>
      </Card>

      {/* Group Scores - Enhanced with Icons and Colors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {groupOrder.map((groupName) => {
          const groupScore = groupScores[groupName];
          const percentage = groupScore ? Math.round((groupScore.total / groupScore.max) * 100) : 0;
          
          return (
            <Card key={groupName} className="border-2 border-muted/50 bg-gradient-to-br from-card to-muted/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  {getGroupIcon(groupName)}
                  <div>
                    <h3 className="font-semibold text-sm text-foreground leading-tight">{groupName}</h3>
                    <div className="text-lg font-bold text-army dark:text-sunburst">
                      {groupScore?.total || 0}/{groupScore?.max || 0}
                    </div>
                  </div>
                </div>
                <Progress value={percentage} className="h-2 mb-2" />
                <div className="text-sm text-muted-foreground text-right font-medium">
                  {percentage}%
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ScoreDashboard;
