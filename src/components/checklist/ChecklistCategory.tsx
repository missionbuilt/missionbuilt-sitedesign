
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { getCategoryLink } from '@/utils/anchorUtils';
import ChecklistItem from './ChecklistItem';

interface ChecklistItem {
  id: string;
  text: string;
  points: number;
  category: string;
  group: string;
}

interface ChecklistCategoryProps {
  categoryName: string;
  items: ChecklistItem[];
  checkedItems: Set<string>;
  onItemCheck: (itemId: string, checked: boolean) => void;
}

const ChecklistCategory: React.FC<ChecklistCategoryProps> = ({
  categoryName,
  items,
  checkedItems,
  onItemCheck
}) => {
  const getCategoryLinkText = (categoryName: string) => {
    switch (categoryName) {
      case 'Mission Clarity':
        return 'Chapter 1: Mission Before Metrics, Section 1: The Mission Is the Magnet';
      case 'Metric Awareness (Not Obsession)':
        return 'Chapter 1: Mission Before Metrics, Section 3: Repetition with Intention';
      case 'Drift Detection':
        return 'Chapter 1: Mission Before Metrics, Section 2: The Drift';
      case 'Ritual Reinforcement':
        return 'Chapter 3: Rituals Over Rules, Sections 1–3';
      case 'Feedback Loops':
        return 'Chapter 4: Feedback Is a Superpower, Section 1: Cues, Not Critiques';
      case 'Decision Alignment':
        return 'Chapter 8: Decisions Are Made Under Load, Section 2: Clarity Beats Certainty';
      case 'System Check Under Stress':
        return 'Chapter 8: Decisions Are Made Under Load, Section 1: Stress Tests the System';
      case 'Recovery Rhythm Review':
        return 'Chapter 6: The Mission Demands Recovery, Sections 1–3';
      case 'Shared PR Reflection':
        return 'Chapter 10: The Team Is the Tool, Section 2: Trust is a Shared PR';
      default:
        return '';
    }
  };

  return (
    <Card className="border-2 border-muted/30 bg-gradient-to-br from-card to-muted/10 shadow-lg hover:shadow-xl transition-all duration-300">
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
            {getCategoryLinkText(categoryName)}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <ChecklistItem
            key={item.id}
            id={item.id}
            text={item.text}
            points={item.points}
            isChecked={checkedItems.has(item.id)}
            onCheck={onItemCheck}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default ChecklistCategory;
