
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
  { id: '1', text: 'Complete morning routine before 7 AM', points: 5, category: 'Discipline' },
  { id: '2', text: 'Exercise for at least 30 minutes', points: 10, category: 'Physical' },
  { id: '3', text: 'Read for 20 minutes', points: 8, category: 'Growth' },
  { id: '4', text: 'Plan tomorrow\'s priorities', points: 6, category: 'Planning' },
  { id: '5', text: 'Connect with someone important', points: 7, category: 'Relationships' },
  { id: '6', text: 'Practice gratitude (3 things)', points: 4, category: 'Mindset' },
  { id: '7', text: 'Complete most important task first', points: 12, category: 'Productivity' },
  { id: '8', text: 'Maintain proper nutrition', points: 8, category: 'Physical' },
  { id: '9', text: 'Review and reflect on the day', points: 5, category: 'Growth' },
  { id: '10', text: 'Prepare for tomorrow', points: 6, category: 'Planning' }
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

          {/* Checklist */}
          <Card>
            <CardHeader>
              <CardTitle className="heading-md">Your Daily Missions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {checklistItems.map((item) => {
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
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <Badge 
                        className={`text-xs ${
                          isChecked ? 'bg-army text-white dark:bg-sunburst dark:text-slate' : 'bg-muted'
                        }`}
                      >
                        {item.points} pts
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Category Breakdown */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="heading-md">Category Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(categoryScores).map(([category, scores]) => {
                  const percentage = Math.round((scores.total / scores.max) * 100);
                  return (
                    <div key={category} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category}</span>
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
