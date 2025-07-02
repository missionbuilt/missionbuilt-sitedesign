
import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import NightVisionToggle from '@/components/NightVisionToggle';
import ChecklistPdfExport from '@/components/ChecklistPdfExport';
import { CheckCircle, Circle, ExternalLink, Target, TrendingUp, Shield, RotateCcw } from 'lucide-react';
import { getCategoryLink } from '@/utils/anchorUtils';

interface ChecklistItem {
  id: string;
  text: string;
  points: number;
  category: string;
  group: string;
}

const checklistItems: ChecklistItem[] = [
  // Mission Foundation - Mission Clarity (4 points each)
  { id: '1', text: 'Have I clearly articulated the mission behind this effort?', points: 4, category: 'Mission Clarity', group: 'Mission Foundation' },
  { id: '2', text: 'Can every team member (or I personally) explain why this matters without referring to metrics?', points: 4, category: 'Mission Clarity', group: 'Mission Foundation' },
  { id: '3', text: 'Does this mission align with my/our long-term purpose?', points: 4, category: 'Mission Clarity', group: 'Mission Foundation' },
  
  // Mission Foundation - Metric Awareness (4 points each)
  { id: '4', text: 'Do I know what metrics might reflect progress — but also recognize they\'re indicators, not the mission itself?', points: 4, category: 'Metric Awareness (Not Obsession)', group: 'Mission Foundation' },
  { id: '5', text: 'Are these metrics supporting the mission, or are they starting to dictate behavior?', points: 4, category: 'Metric Awareness (Not Obsession)', group: 'Mission Foundation' },
  
  // Mission Foundation - Drift Detection (4 points each)
  { id: '6', text: 'Am I or my team currently pursuing work or reps that look busy but don\'t move us closer to the mission?', points: 4, category: 'Drift Detection', group: 'Mission Foundation' },
  { id: '7', text: 'Have I noticed recent moments of drifting into comfort zones or distractions?', points: 4, category: 'Drift Detection', group: 'Mission Foundation' },
  
  // Execution & Adaptation - Ritual Reinforcement (3 points each)
  { id: '8', text: 'Have I established or maintained meaningful rituals that keep me connected to the mission?', points: 3, category: 'Ritual Reinforcement', group: 'Execution & Adaptation' },
  { id: '9', text: 'Are these rituals adaptable when conditions change, so they don\'t become rigid rules?', points: 3, category: 'Ritual Reinforcement', group: 'Execution & Adaptation' },
  
  // Execution & Adaptation - Feedback Loops (3 points each)
  { id: '10', text: 'Am I seeking feedback that tells me if I\'m aligned with the mission, rather than just if I\'m hitting numbers?', points: 3, category: 'Feedback Loops', group: 'Execution & Adaptation' },
  { id: '11', text: 'Do I have a system or trusted peers who can call out mission drift?', points: 3, category: 'Feedback Loops', group: 'Execution & Adaptation' },
  
  // Execution & Adaptation - Decision Alignment (3 points each)
  { id: '12', text: 'When making a key decision, am I asking: Does this move us/me closer to the mission or just satisfy a short-term metric?', points: 3, category: 'Decision Alignment', group: 'Execution & Adaptation' },
  { id: '13', text: 'Can I trace a clear line from today\'s work to the bigger mission?', points: 3, category: 'Decision Alignment', group: 'Execution & Adaptation' },
  
  // Sustainability & Culture - System Check Under Stress (2 points each)
  { id: '14', text: 'Have I validated that our systems (product, training plan, or team workflows) can withstand real-world stress and unexpected challenges?', points: 2, category: 'System Check Under Stress', group: 'Sustainability & Culture' },
  { id: '15', text: 'Have we proactively rehearsed potential crises or failure points so we\'re prepared, not reactive?', points: 2, category: 'System Check Under Stress', group: 'Sustainability & Culture' },
  
  // Sustainability & Culture - Recovery Rhythm Review (2 points each)
  { id: '16', text: 'Have I built intentional recovery time into my plan — whether that means deload weeks, cooldown cycles, or strategy days — to prevent burnout and maintain long-term alignment with the mission?', points: 2, category: 'Recovery Rhythm Review', group: 'Sustainability & Culture' },
  { id: '17', text: 'Do I recognize recovery as a requirement, not a reward?', points: 2, category: 'Recovery Rhythm Review', group: 'Sustainability & Culture' },
  
  // Sustainability & Culture - Shared PR Reflection (2 points each)
  { id: '18', text: 'Have I recognized and celebrated recent team or personal milestones as shared wins, reinforcing that we succeed together, not alone?', points: 2, category: 'Shared PR Reflection', group: 'Sustainability & Culture' },
  { id: '19', text: 'Are our current incentives and recognition systems encouraging shared ownership rather than individual heroics?', points: 2, category: 'Shared PR Reflection', group: 'Sustainability & Culture' }
];

const InteractiveChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  const handleItemCheck = (itemId: string, checked: boolean) => {
    const newCheckedItems = new Set(checkedItems);
    if (checked) {
      newCheckedItems.add(itemId);
    } else {
      newCheckedItems.delete(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const handleResetAll = () => {
    setCheckedItems(new Set());
  };

  // Scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scoreDashboard = document.getElementById('score-dashboard');
      if (scoreDashboard) {
        const rect = scoreDashboard.getBoundingClientRect();
        // Show sticky header when the score dashboard is mostly scrolled out of view
        setShowStickyHeader(rect.bottom < 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const getScoreLevel = (score: number, hasStarted: boolean) => {
    // If no items are checked yet, show a neutral getting started state
    if (!hasStarted) {
      return { 
        label: 'Getting Started', 
        description: 'begin checking items to see your mission alignment score.',
        color: 'bg-muted text-muted-foreground', 
        ring: 'ring-muted/20' 
      };
    }
    
    if (score >= 46) return { 
      label: 'Mission Strong', 
      description: 'you\'re deeply aligned; keep reinforcing your purpose, rituals, and team dynamics.',
      color: 'bg-army text-white', 
      ring: 'ring-army/20' 
    };
    if (score >= 30) return { 
      label: 'Mission Drifting', 
      description: 'you\'re partially aligned, but risk losing focus; revisit mission clarity, feedback systems, or recovery plans.',
      color: 'bg-sunburst text-slate', 
      ring: 'ring-sunburst/20' 
    };
    return { 
      label: 'Mission Lost', 
      description: 'serious misalignment; pause, reassess, and realign your actions with your mission before proceeding.',
      color: 'bg-destructive text-destructive-foreground', 
      ring: 'ring-destructive/20' 
    };
  };

  const hasStarted = checkedItems.size > 0;
  const scoreLevel = getScoreLevel(totalScore, hasStarted);

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
        return 'Mission clarity, metric awareness, and drift detection (4 points per question)';
      case 'Execution & Adaptation':
        return 'Rituals, feedback loops, and decision-making alignment (3 points per question)';
      case 'Sustainability & Culture':
        return 'System resilience, recovery rhythms, and shared success (2 points per question)';
      default:
        return '';
    }
  };

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
    <>
      <Helmet>
        <title>Mission Alignment Checklist | Mission Built</title>
        <meta name="description" content="Track your daily mission alignment with our interactive checklist and dynamic scoring system." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        {/* Sticky Header */}
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

        <div className="container-custom py-8">
          {/* Header without Logo */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="heading-lg mb-4 bg-gradient-to-r from-army via-steel to-sunburst bg-clip-text text-transparent">
                Mission Alignment Checklist
              </h1>
              <p className="body text-muted-foreground max-w-2xl">
                Questions to Ensure Every Step Serves the Mission
              </p>
            </div>
            <div className="flex items-center gap-4">
              <ChecklistPdfExport
                checkedItems={checkedItems}
                checklistItems={checklistItems}
                totalScore={totalScore}
                maxScore={maxScore}
                completionPercentage={completionPercentage}
                scoreLevel={scoreLevel}
                groupScores={groupScores}
              />
              <Button
                onClick={handleResetAll}
                variant="outline"
                className="flex items-center gap-2 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
              >
                <RotateCcw className="h-4 w-4" />
                Reset All
              </Button>
              <NightVisionToggle />
            </div>
          </div>

          {/* Score Dashboard - Enhanced with Colors */}
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

          {/* Checklist by Group - Enhanced Design */}
          <div className="space-y-16">
            {groupOrder.map((groupName, groupIndex) => (
              <div key={groupName} className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-army/10 to-steel/10 dark:from-sunburst/10 dark:to-army/10">
                      {getGroupIcon(groupName)}
                    </div>
                    <h2 className="heading-lg bg-gradient-to-r from-army via-steel to-sunburst bg-clip-text text-transparent">
                      {groupName}
                    </h2>
                  </div>
                  <p className="body text-muted-foreground max-w-2xl mx-auto">
                    {getGroupDescription(groupName)}
                  </p>
                </div>
                
                <div className="space-y-8">
                  {categoryOrder
                    .filter(categoryName => {
                      const categoryItems = groupedItems[categoryName] || [];
                      return categoryItems.some(item => item.group === groupName);
                    })
                    .map((categoryName, categoryIndex) => {
                      const categoryItems = groupedItems[categoryName]?.filter(item => item.group === groupName) || [];
                      if (categoryItems.length === 0) return null;
                      
                      return (
                        <Card key={categoryName} className="border-2 border-muted/30 bg-gradient-to-br from-card to-muted/10 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CardHeader className="bg-gradient-to-r from-muted/20 via-transparent to-muted/20">
                            <CardTitle className="heading-md text-foreground">{categoryName}</CardTitle>
                            
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>Learn more:</span>
                              <a 
                                href={getCategoryLink(categoryName)}
                                className="text-army dark:text-sunburst hover:underline flex items-center gap-1 font-medium hover:text-steel dark:hover:text-army transition-colors"
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
                                  className={`flex items-center space-x-4 p-4 rounded-lg border-2 transition-all duration-300 ${
                                    isChecked 
                                      ? 'bg-gradient-to-r from-army/5 to-steel/5 dark:from-sunburst/5 dark:to-army/5 border-army/30 dark:border-sunburst/30 shadow-md' 
                                      : 'bg-card hover:bg-gradient-to-r hover:from-muted/30 hover:to-muted/10 border-muted/30 hover:border-muted/50 hover:shadow-md'
                                  }`}
                                >
                                  <Checkbox
                                    id={item.id}
                                    checked={isChecked}
                                    onCheckedChange={(checked) => handleItemCheck(item.id, checked as boolean)}
                                    className="data-[state=checked]:bg-army dark:data-[state=checked]:bg-sunburst data-[state=checked]:border-army dark:data-[state=checked]:border-sunburst"
                                  />
                                  <div className="flex-1">
                                    <label
                                      htmlFor={item.id}
                                      className={`body cursor-pointer transition-all duration-200 ${
                                        isChecked ? 'line-through text-muted-foreground' : 'text-foreground hover:text-army dark:hover:text-sunburst'
                                      }`}
                                    >
                                      {item.text}
                                    </label>
                                  </div>
                                  <Badge 
                                    className={`text-xs font-semibold transition-all duration-200 ${
                                      isChecked ? 'bg-army text-white dark:bg-sunburst dark:text-slate shadow-md' : 'bg-muted hover:bg-muted/80'
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
