
import React from 'react';
import { Target, TrendingUp, Shield } from 'lucide-react';
import ChecklistCategory from './ChecklistCategory';

interface ChecklistItem {
  id: string;
  text: string;
  points: number;
  category: string;
  group: string;
}

interface ChecklistGroupProps {
  groupName: string;
  categories: string[];
  groupedItems: Record<string, ChecklistItem[]>;
  checkedItems: Set<string>;
  onItemCheck: (itemId: string, checked: boolean) => void;
}

const ChecklistGroup: React.FC<ChecklistGroupProps> = ({
  groupName,
  categories,
  groupedItems,
  checkedItems,
  onItemCheck
}) => {
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
    <div className="space-y-8">
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
        {categories
          .filter(categoryName => {
            const categoryItems = groupedItems[categoryName] || [];
            return categoryItems.some(item => item.group === groupName);
          })
          .map((categoryName) => {
            const categoryItems = groupedItems[categoryName]?.filter(item => item.group === groupName) || [];
            if (categoryItems.length === 0) return null;
            
            return (
              <ChecklistCategory
                key={categoryName}
                categoryName={categoryName}
                items={categoryItems}
                checkedItems={checkedItems}
                onItemCheck={onItemCheck}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ChecklistGroup;
