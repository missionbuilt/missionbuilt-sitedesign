
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';

interface ChecklistItemProps {
  id: string;
  text: string;
  points: number;
  isChecked: boolean;
  onCheck: (id: string, checked: boolean) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({
  id,
  text,
  points,
  isChecked,
  onCheck
}) => {
  return (
    <div
      className={`flex items-center space-x-4 p-4 rounded-lg border-2 transition-all duration-300 ${
        isChecked 
          ? 'bg-gradient-to-r from-army/5 to-steel/5 dark:from-sunburst/5 dark:to-army/5 border-army/30 dark:border-sunburst/30 shadow-md' 
          : 'bg-card hover:bg-gradient-to-r hover:from-muted/30 hover:to-muted/10 border-muted/30 hover:border-muted/50 hover:shadow-md'
      }`}
    >
      <Checkbox
        id={id}
        checked={isChecked}
        onCheckedChange={(checked) => onCheck(id, checked as boolean)}
        className="data-[state=checked]:bg-army dark:data-[state=checked]:bg-sunburst data-[state=checked]:border-army dark:data-[state=checked]:border-sunburst"
      />
      <div className="flex-1">
        <label
          htmlFor={id}
          className={`body cursor-pointer transition-all duration-200 ${
            isChecked ? 'line-through text-muted-foreground' : 'text-foreground hover:text-army dark:hover:text-sunburst'
          }`}
        >
          {text}
        </label>
      </div>
      <Badge 
        className={`text-xs font-semibold transition-all duration-200 ${
          isChecked ? 'bg-army text-white dark:bg-sunburst dark:text-slate shadow-md' : 'bg-muted hover:bg-muted/80'
        }`}
      >
        {points} pts
      </Badge>
    </div>
  );
};

export default ChecklistItem;
