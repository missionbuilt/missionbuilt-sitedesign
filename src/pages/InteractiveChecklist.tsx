import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChecklistPdfExport from '@/components/ChecklistPdfExport';
import ScoreDashboard from '@/components/checklist/ScoreDashboard';
import StickyHeader from '@/components/checklist/StickyHeader';
import ChecklistGroup from '@/components/checklist/ChecklistGroup';
import { RotateCcw } from 'lucide-react';

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
  { id: '12', text: 'Have I defined how we\'ll measure and observe progress over time — beyond static metrics — to capture qualitative and quantitative signals of improvement?', points: 3, category: 'Feedback Loops', group: 'Execution & Adaptation' },
  
  // Execution & Adaptation - Decision Alignment (3 points each)
  { id: '13', text: 'When making a key decision, am I asking: Does this move us/me closer to the mission or just satisfy a short-term metric?', points: 3, category: 'Decision Alignment', group: 'Execution & Adaptation' },
  { id: '14', text: 'Can I trace a clear line from today\'s work to the bigger mission?', points: 3, category: 'Decision Alignment', group: 'Execution & Adaptation' },
  { id: '15', text: 'Does this feature or initiative integrate smoothly into existing product workflows, minimizing friction and supporting the overall user journey?', points: 3, category: 'Decision Alignment', group: 'Execution & Adaptation' },
  { id: '16', text: 'Does this work meaningfully improve the user\'s experience, solving a real pain point or enabling real progress?', points: 3, category: 'Decision Alignment', group: 'Execution & Adaptation' },
  
  // Sustainability & Culture - System Check Under Stress (2 points each)
  { id: '17', text: 'Have I validated that our systems (product, training plan, or team workflows) can withstand real-world stress and unexpected challenges?', points: 2, category: 'System Check Under Stress', group: 'Sustainability & Culture' },
  { id: '18', text: 'Have we proactively rehearsed potential crises or failure points so we\'re prepared, not reactive?', points: 2, category: 'System Check Under Stress', group: 'Sustainability & Culture' },
  
  // Sustainability & Culture - Recovery Rhythm Review (2 points each)
  { id: '19', text: 'Have I built intentional recovery time into my plan — whether that means deload weeks, cooldown cycles, or strategy days — to prevent burnout and maintain long-term alignment with the mission?', points: 2, category: 'Recovery Rhythm Review', group: 'Sustainability & Culture' },
  { id: '20', text: 'Do I recognize recovery as a requirement, not a reward?', points: 2, category: 'Recovery Rhythm Review', group: 'Sustainability & Culture' },
  { id: '21', text: 'Does the scope of this work match the team\'s capacity, avoiding overcommitment that could lead to burnout or quality issues?', points: 2, category: 'Recovery Rhythm Review', group: 'Sustainability & Culture' },
  
  // Sustainability & Culture - Shared PR Reflection (2 points each)
  { id: '22', text: 'Have I recognized and celebrated recent team or personal milestones as shared wins, reinforcing that we succeed together, not alone?', points: 2, category: 'Shared PR Reflection', group: 'Sustainability & Culture' },
  { id: '23', text: 'Are our current incentives and recognition systems encouraging shared ownership rather than individual heroics?', points: 2, category: 'Shared PR Reflection', group: 'Sustainability & Culture' },
  { id: '24', text: 'Is the team aligned on expectations, ownership, and success criteria for this effort, minimizing surprises or misinterpretations?', points: 2, category: 'Shared PR Reflection', group: 'Sustainability & Culture' }
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

  const { totalScore, maxScore, completionPercentage, categoryScores, groupScores, missionFoundationChecked } = useMemo(() => {
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

    // Check Mission Foundation requirements
    const missionFoundationItems = checklistItems.filter(item => item.group === 'Mission Foundation');
    const missionFoundationCheckedCount = missionFoundationItems.filter(item => checkedItems.has(item.id)).length;

    return {
      totalScore: total,
      maxScore: max,
      completionPercentage: percentage,
      categoryScores: categories,
      groupScores: groups,
      missionFoundationChecked: missionFoundationCheckedCount
    };
  }, [checkedItems]);

  const getScoreLevel = (score: number, hasStarted: boolean, missionFoundationCount: number) => {
    // If no items are checked yet, show a neutral getting started state
    if (!hasStarted) {
      return { 
        label: 'Getting Started', 
        description: 'begin checking items to see your mission alignment score.',
        color: 'bg-muted text-muted-foreground', 
        ring: 'ring-muted/20' 
      };
    }
    
    if (score >= 56 && missionFoundationCount >= 5) return { 
      label: 'Mission Strong', 
      description: 'fully aligned; your mindset, execution, and culture support the mission.',
      color: 'bg-army text-white', 
      ring: 'ring-army/20' 
    };
    if (score >= 36) return { 
      label: 'Mission Drifting', 
      description: 'partial alignment; mission clarity, rituals, or sustainability may be slipping.',
      color: 'bg-sunburst text-slate', 
      ring: 'ring-sunburst/20' 
    };
    return { 
      label: 'Mission Lost', 
      description: 'severe misalignment; immediate reassessment needed.',
      color: 'bg-destructive text-destructive-foreground', 
      ring: 'ring-destructive/20' 
    };
  };

  const hasStarted = checkedItems.size > 0;
  const scoreLevel = getScoreLevel(totalScore, hasStarted, missionFoundationChecked);

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

  const groupOrder = ['Mission Foundation', 'Execution & Adaptation', 'Sustainability & Culture'];

  return (
    <>
      <Helmet>
        <title>Mission Alignment Checklist | Mission Built</title>
        <meta name="description" content="Track your daily mission alignment with our interactive checklist and dynamic scoring system." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <Navbar />
        
        <StickyHeader
          showStickyHeader={showStickyHeader}
          totalScore={totalScore}
          maxScore={maxScore}
          completionPercentage={completionPercentage}
          scoreLevel={scoreLevel}
        />

        <div className="container-custom py-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="heading-lg mb-4 bg-gradient-to-r from-army via-steel to-sunburst bg-clip-text text-transparent leading-tight pb-2">
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
            </div>
          </div>

          {/* Scoring Clarification */}
          <div className="mb-8 p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg border border-muted/50">
            <h3 className="font-semibold text-foreground mb-2">Scoring System</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><strong>Mission Strong (56-71 pts):</strong> Requires both high score AND at least 5 out of 7 Mission Foundation questions checked</p>
              <p><strong>Mission Drifting (36-55 pts):</strong> Partial alignment; some areas need attention</p>
              <p><strong>Mission Lost (0-35 pts):</strong> Severe misalignment; immediate reassessment needed</p>
            </div>
          </div>

          <ScoreDashboard
            totalScore={totalScore}
            maxScore={maxScore}
            completionPercentage={completionPercentage}
            scoreLevel={scoreLevel}
            groupScores={groupScores}
          />

          {/* Checklist by Group - Enhanced Design */}
          <div className="space-y-16">
            {groupOrder.map((groupName) => (
              <ChecklistGroup
                key={groupName}
                groupName={groupName}
                categories={categoryOrder}
                groupedItems={groupedItems}
                checkedItems={checkedItems}
                onItemCheck={handleItemCheck}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default InteractiveChecklist;
