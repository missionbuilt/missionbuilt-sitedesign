
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import NightVisionToggle from '@/components/NightVisionToggle';
import { CheckCircle, Circle } from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
  points: number;
  category: string;
}

const checklistItems: ChecklistItem[] = [
  // Mission Clarity
  { id: '1', text: 'Can you state your primary mission in one clear sentence?', points: 10, category: 'Mission Clarity' },
  { id: '2', text: 'Do your daily actions align with your stated mission?', points: 8, category: 'Mission Clarity' },
  { id: '3', text: 'Have you communicated your mission to key stakeholders?', points: 6, category: 'Mission Clarity' },
  
  // Metric Awareness (Not Obsession)
  { id: '4', text: 'Do you track 2-3 key metrics that matter most?', points: 8, category: 'Metric Awareness' },
  { id: '5', text: 'Can you identify which metrics are leading vs lagging indicators?', points: 7, category: 'Metric Awareness' },
  { id: '6', text: 'Do you review metrics weekly without becoming obsessed?', points: 6, category: 'Metric Awareness' },
  
  // Drift Detection
  { id: '7', text: 'Have you identified early warning signs of mission drift?', points: 9, category: 'Drift Detection' },
  { id: '8', text: 'Do you regularly audit your time allocation against priorities?', points: 7, category: 'Drift Detection' },
  { id: '9', text: 'Can you spot when you\'re saying yes to the wrong things?', points: 8, category: 'Drift Detection' },
  
  // Ritual Reinforcement
  { id: '10', text: 'Do you have daily rituals that reinforce your mission?', points: 6, category: 'Ritual Reinforcement' },
  { id: '11', text: 'Have you established weekly review sessions?', points: 5, category: 'Ritual Reinforcement' },
  { id: '12', text: 'Do your rituals adapt when circumstances change?', points: 7, category: 'Ritual Reinforcement' },
  
  // Feedback Loops
  { id: '13', text: 'Do you have systems to gather honest feedback regularly?', points: 8, category: 'Feedback Loops' },
  { id: '14', text: 'Can you quickly identify what\'s working vs what isn\'t?', points: 7, category: 'Feedback Loops' },
  { id: '15', text: 'Do you act on feedback within 48-72 hours?', points: 9, category: 'Feedback Loops' },
  
  // Decision Alignment
  { id: '16', text: 'Do major decisions clearly support your mission?', points: 10, category: 'Decision Alignment' },
  { id: '17', text: 'Can you explain how daily choices connect to larger goals?', points: 6, category: 'Decision Alignment' },
  { id: '18', text: 'Do you have criteria for saying no to opportunities?', points: 8, category: 'Decision Alignment' },
  
  // System Check Under Stress
  { id: '19', text: 'Do your systems hold up when under pressure?', points: 9, category: 'System Check Under Stress' },
  { id: '20', text: 'Can you maintain mission focus during crisis?', points: 10, category: 'System Check Under Stress' },
  { id: '21', text: 'Do you have backup plans for key mission components?', points: 7, category: 'System Check Under Stress' },
  
  // Recovery Rhythm Review
  { id: '22', text: 'Do you have sustainable recovery practices built in?', points: 8, category: 'Recovery Rhythm Review' },
  { id: '23', text: 'Can you maintain performance without burnout?', points: 9, category: 'Recovery Rhythm Review' },
  { id: '24', text: 'Do you regularly assess and adjust your pace?', points: 6, category: 'Recovery Rhythm Review' },
  
  // Shared PR Reflection
  { id: '25', text: 'Do you share progress reports with accountability partners?', points: 7, category: 'Shared PR Reflection' },
  { id: '26', text: 'Can you articulate lessons learned from recent wins/losses?', points: 8, category: 'Shared PR Reflection' },
  { id: '27', text: 'Do you celebrate mission-aligned victories with your team?', points: 5, category: 'Shared PR Reflection' }
];

const InteractiveChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const handleItemCheck = (itemId: string, checked: boolean) => {
    const newCheckedItems = new Set(checkedItems);
    if (checked) {
      newCheckedItems.add(itemId);
    } else {
      newCheckedItems.delete(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const { totalScore, maxScore, completionPercentage, categoryScores } = useMemo(() => {
    const total = checklistItems
      .filter(item => checkedItems.has(item.id))
      .reduce((sum, item) => sum + item.points, 0);
    
    const max = checklistItems.reduce((sum, item) => sum + item.points, 0);
    
    const percentage = max > 0 ? Math.round((total / max) * 100) : 0;
    
    const categories = checklistItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = { total: 0, max: 0 };
      }
      acc[item.category].max += item.points;
      if (checkedItems.has(item.id)) {
        acc[item.category].total += item.points;
      }
      return acc;
    }, {} as Record<string, { total: number; max: number }>);

    return {
      totalScore: total,
      maxScore: max,
      completionPercentage: percentage,
      categoryScores: categories
    };
  }, [checkedItems]);

  const getScoreLevel = (percentage: number) => {
    if (percentage >= 90) return { label: 'Elite', color: 'bg-army text-white' };
    if (percentage >= 75) return { label: 'Strong', color: 'bg-steel text-white' };
    if (percentage >= 60) return { label: 'Solid', color: 'bg-sunburst text-slate' };
    if (percentage >= 40) return { label: 'Building', color: 'bg-secondary text-secondary-foreground' };
    return { label: 'Starting', color: 'bg-muted text-muted-foreground' };
  };

  const scoreLevel = getScoreLevel(completionPercentage);

  // Group items by category for organized display
  const groupedItems = checklistItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ChecklistItem[]>);

  const categoryOrder = [
    'Mission Clarity',
    'Metric Awareness',
    'Drift Detection', 
    'Ritual Reinforcement',
    'Feedback Loops',
    'Decision Alignment',
    'System Check Under Stress',
    'Recovery Rhythm Review',
    'Shared PR Reflection'
  ];

  return (
    <>
      <Helmet>
        <title>Mission Alignment Checklist | Mission Built</title>
        <meta name="description" content="Track your daily mission alignment with our interactive checklist and dynamic scoring system." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container-custom py-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="heading-lg mb-4">Mission Alignment Checklist</h1>
              <p className="body text-muted-foreground max-w-2xl">
                Track your progress and see your mission score update in real-time as you complete each task.
              </p>
            </div>
            <NightVisionToggle />
          </div>

          {/* Score Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Total Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-army dark:text-sunburst mb-2">
                  {totalScore}/{maxScore}
                </div>
                <Progress value={completionPercentage} className="mb-2" />
                <Badge className={scoreLevel.color}>
                  {scoreLevel.label} - {completionPercentage}%
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Completed Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-steel dark:text-cloud mb-2">
                  {checkedItems.size}/{checklistItems.length}
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-army dark:text-sunburst" />
                  <span className="text-sm text-muted-foreground">
                    Tasks Complete
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Highest Category</CardTitle>
              </CardHeader>
              <CardContent>
                {Object.entries(categoryScores).length > 0 ? (
                  (() => {
                    const topCategory = Object.entries(categoryScores)
                      .sort(([,a], [,b]) => (b.total/b.max) - (a.total/a.max))[0];
                    const percentage = Math.round((topCategory[1].total / topCategory[1].max) * 100);
                    return (
                      <>
                        <div className="text-2xl font-bold text-army dark:text-sunburst mb-2">
                          {topCategory[0]}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {percentage}% complete
                        </div>
                      </>
                    );
                  })()
                ) : (
                  <div className="text-muted-foreground">No progress yet</div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Checklist by Category */}
          <div className="space-y-8">
            {categoryOrder.map((categoryName) => {
              const categoryItems = groupedItems[categoryName] || [];
              if (categoryItems.length === 0) return null;
              
              return (
                <Card key={categoryName}>
                  <CardHeader>
                    <CardTitle className="heading-md">{categoryName}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {categoryItems.map((item) => {
                      const isChecked = checkedItems.has(item.id);
                      return (
                        <div
                          key={item.id}
                          className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-200 ${
                            isChecked 
                              ? 'bg-army/5 dark:bg-sunburst/5 border-army/20 dark:border-sunburst/20' 
                              : 'bg-card hover:bg-muted/50'
                          }`}
                        >
                          <Checkbox
                            id={item.id}
                            checked={isChecked}
                            onCheckedChange={(checked) => handleItemCheck(item.id, checked as boolean)}
                            className="data-[state=checked]:bg-army dark:data-[state=checked]:bg-sunburst"
                          />
                          <div className="flex-1">
                            <label
                              htmlFor={item.id}
                              className={`body cursor-pointer ${
                                isChecked ? 'line-through text-muted-foreground' : ''
                              }`}
                            >
                              {item.text}
                            </label>
                          </div>
                          <Badge 
                            className={`text-xs ${
                              isChecked ? 'bg-army text-white dark:bg-sunburst dark:text-slate' : 'bg-muted'
                            }`}
                          >
                            {item.points} pts
                          </Badge>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Category Breakdown */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="heading-md">Category Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(categoryScores).map(([category, scores]) => {
                  const percentage = Math.round((scores.total / scores.max) * 100);
                  return (
                    <div key={category} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{category}</span>
                        <span className="text-sm text-muted-foreground">
                          {scores.total}/{scores.max} pts
                        </span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                      <div className="text-xs text-muted-foreground text-right">
                        {percentage}%
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default InteractiveChecklist;
