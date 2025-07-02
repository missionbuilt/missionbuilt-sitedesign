import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import NightVisionToggle from '@/components/NightVisionToggle';
import { CheckCircle, Circle, ExternalLink } from 'lucide-react';
import { getCategoryLink } from '@/utils/anchorUtils';

interface ChecklistItem {
  id: string;
  text: string;
  points: number;
  category: string;
  group: string;
}

const checklistItems: ChecklistItem[] = [
  // Mission Foundation - Mission Clarity (2 points each)
  { id: '1', text: 'Have I clearly articulated the mission behind this effort?', points: 2, category: 'Mission Clarity', group: 'Mission Foundation' },
  { id: '2', text: 'Can every team member (or I personally) explain why this matters without referring to metrics?', points: 2, category: 'Mission Clarity', group: 'Mission Foundation' },
  { id: '3', text: 'Does this mission align with my/our long-term purpose?', points: 2, category: 'Mission Clarity', group: 'Mission Foundation' },
  
  // Mission Foundation - Metric Awareness (2 points each)
  { id: '4', text: 'Do I know what metrics might reflect progress — but also recognize they\'re indicators, not the mission itself?', points: 2, category: 'Metric Awareness (Not Obsession)', group: 'Mission Foundation' },
  { id: '5', text: 'Are these metrics supporting the mission, or are they starting to dictate behavior?', points: 2, category: 'Metric Awareness (Not Obsession)', group: 'Mission Foundation' },
  
  // Mission Foundation - Drift Detection (2 points each)
  { id: '6', text: 'Am I or my team currently pursuing work or reps that look busy but don\'t move us closer to the mission?', points: 2, category: 'Drift Detection', group: 'Mission Foundation' },
  { id: '7', text: 'Have I noticed recent moments of drifting into comfort zones or distractions?', points: 2, category: 'Drift Detection', group: 'Mission Foundation' },
  
  // Execution & Adaptation - Ritual Reinforcement (1.5 points each)
  { id: '8', text: 'Have I established or maintained meaningful rituals that keep me connected to the mission?', points: 1.5, category: 'Ritual Reinforcement', group: 'Execution & Adaptation' },
  { id: '9', text: 'Are these rituals adaptable when conditions change, so they don\'t become rigid rules?', points: 1.5, category: 'Ritual Reinforcement', group: 'Execution & Adaptation' },
  
  // Execution & Adaptation - Feedback Loops (1.5 points each)
  { id: '10', text: 'Am I seeking feedback that tells me if I\'m aligned with the mission, rather than just if I\'m hitting numbers?', points: 1.5, category: 'Feedback Loops', group: 'Execution & Adaptation' },
  { id: '11', text: 'Do I have a system or trusted peers who can call out mission drift?', points: 1.5, category: 'Feedback Loops', group: 'Execution & Adaptation' },
  
  // Execution & Adaptation - Decision Alignment (1.5 points each)
  { id: '12', text: 'When making a key decision, am I asking: Does this move us/me closer to the mission or just satisfy a short-term metric?', points: 1.5, category: 'Decision Alignment', group: 'Execution & Adaptation' },
  { id: '13', text: 'Can I trace a clear line from today\'s work to the bigger mission?', points: 1.5, category: 'Decision Alignment', group: 'Execution & Adaptation' },
  
  // Sustainability & Culture - System Check Under Stress (1 point each)
  { id: '14', text: 'Have I validated that our systems (product, training plan, or team workflows) can withstand real-world stress and unexpected challenges?', points: 1, category: 'System Check Under Stress', group: 'Sustainability & Culture' },
  { id: '15', text: 'Have we proactively rehearsed potential crises or failure points so we\'re prepared, not reactive?', points: 1, category: 'System Check Under Stress', group: 'Sustainability & Culture' },
  
  // Sustainability & Culture - Recovery Rhythm Review (1 point each)
  { id: '16', text: 'Have I built intentional recovery time into my plan — whether that means deload weeks, cooldown cycles, or strategy days — to prevent burnout and maintain long-term alignment with the mission?', points: 1, category: 'Recovery Rhythm Review', group: 'Sustainability & Culture' },
  { id: '17', text: 'Do I recognize recovery as a requirement, not a reward?', points: 1, category: 'Recovery Rhythm Review', group: 'Sustainability & Culture' },
  
  // Sustainability & Culture - Shared PR Reflection (1 point each)
  { id: '18', text: 'Have I recognized and celebrated recent team or personal milestones as shared wins, reinforcing that we succeed together, not alone?', points: 1, category: 'Shared PR Reflection', group: 'Sustainability & Culture' },
  { id: '19', text: 'Are our current incentives and recognition systems encouraging shared ownership rather than individual heroics?', points: 1, category: 'Shared PR Reflection', group: 'Sustainability & Culture' }
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

  const { totalScore, maxScore, completionPercentage, categoryScores, groupScores } = useMemo(() => {
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

    const groups = checklistItems.reduce((acc, item) => {
      if (!acc[item.group]) {
        acc[item.group] = { total: 0, max: 0 };
      }
      acc[item.group].max += item.points;
      if (checkedItems.has(item.id)) {
        acc[item.group].total += item.points;
      }
      return acc;
    }, {} as Record<string, { total: number; max: number }>);

    return {
      totalScore: total,
      maxScore: max,
      completionPercentage: percentage,
      categoryScores: categories,
      groupScores: groups
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
    'Metric Awareness (Not Obsession)',
    'Drift Detection', 
    'Ritual Reinforcement',
    'Feedback Loops',
    'Decision Alignment',
    'System Check Under Stress',
    'Recovery Rhythm Review',
    'Shared PR Reflection'
  ];

  // Group categories by their group
  const groupOrder = ['Mission Foundation', 'Execution & Adaptation', 'Sustainability & Culture'];
  
  const getGroupDescription = (group: string) => {
    switch (group) {
      case 'Mission Foundation':
        return 'Mission clarity, metric awareness, and drift detection (2 points per question)';
      case 'Execution & Adaptation':
        return 'Rituals, feedback loops, and decision-making alignment (1.5 points per question)';
      case 'Sustainability & Culture':
        return 'System resilience, recovery rhythms, and shared success (1 point per question)';
      default:
        return '';
    }
  };

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
                Track your progress across three key areas: Mission Foundation, Execution & Adaptation, and Sustainability & Culture.
              </p>
            </div>
            <NightVisionToggle />
          </div>

          {/* Score Dashboard - Redesigned for Visual Hierarchy */}
          <div className="mb-8">
            {/* Total Score - Large and Prominent */}
            <Card className="mb-6 border-2 border-army/20 dark:border-sunburst/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center">Mission Alignment Score</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-6xl font-bold text-army dark:text-sunburst mb-4">
                  {totalScore}/{maxScore}
                </div>
                <Progress value={completionPercentage} className="mb-4 h-3" />
                <Badge className={`${scoreLevel.color} text-lg px-4 py-2`}>
                  {scoreLevel.label} - {completionPercentage}%
                </Badge>
              </CardContent>
            </Card>

            {/* Group Scores - Smaller and Compact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {groupOrder.map((groupName) => {
                const groupScore = groupScores[groupName];
                const percentage = groupScore ? Math.round((groupScore.total / groupScore.max) * 100) : 0;
                
                return (
                  <Card key={groupName} className="border border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">{groupName}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-semibold text-army dark:text-sunburst">
                          {groupScore?.total || 0}/{groupScore?.max || 0}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {percentage}%
                        </span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Checklist by Group */}
          <div className="space-y-12">
            {groupOrder.map((groupName) => (
              <div key={groupName} className="space-y-6">
                <div className="text-center">
                  <h2 className="heading-lg text-army dark:text-sunburst mb-2">{groupName}</h2>
                  <p className="body text-muted-foreground">{getGroupDescription(groupName)}</p>
                </div>
                
                <div className="space-y-8">
                  {categoryOrder
                    .filter(categoryName => {
                      const categoryItems = groupedItems[categoryName] || [];
                      return categoryItems.some(item => item.group === groupName);
                    })
                    .map((categoryName) => {
                      const categoryItems = groupedItems[categoryName]?.filter(item => item.group === groupName) || [];
                      if (categoryItems.length === 0) return null;
                      
                      return (
                        <Card key={categoryName}>
                          <CardHeader>
                            <CardTitle className="heading-md">{categoryName}</CardTitle>
                            
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>Learn more:</span>
                              <a 
                                href={getCategoryLink(categoryName)}
                                className="text-army dark:text-sunburst hover:underline flex items-center gap-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {categoryName === 'Mission Clarity' && 'Chapter 1: Mission Before Metrics, Section 1: The Mission Is the Magnet'}
                                {categoryName === 'Metric Awareness (Not Obsession)' && 'Chapter 1: Mission Before Metrics, Section 3: Repetition with Intention'}
                                {categoryName === 'Drift Detection' && 'Chapter 1: Mission Before Metrics, Section 2: The Drift'}
                                {categoryName === 'Ritual Reinforcement' && 'Chapter 3: Rituals Over Rules, Sections 1–3'}
                                {categoryName === 'Feedback Loops' && 'Chapter 4: Feedback Is a Superpower, Section 1: Cues, Not Critiques'}
                                {categoryName === 'Decision Alignment' && 'Chapter 8: Decisions Are Made Under Load, Section 2: Clarity Beats Certainty'}
                                {categoryName === 'System Check Under Stress' && 'Chapter 8: Decisions Are Made Under Load, Section 1: Stress Tests the System'}
                                {categoryName === 'Recovery Rhythm Review' && 'Chapter 6: The Mission Demands Recovery, Sections 1–3'}
                                {categoryName === 'Shared PR Reflection' && 'Chapter 10: The Team Is the Tool, Section 2: Trust is a Shared PR'}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractiveChecklist;
