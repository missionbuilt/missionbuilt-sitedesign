
import React from 'react';
import { Search, Filter, SortAsc, Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ChapterFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  statusFilter: string;
  onStatusFilterChange: (status: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  showFilters: boolean;
  onToggleFilters: () => void;
}

const ChapterFilters: React.FC<ChapterFiltersProps> = ({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  sortBy,
  onSortChange,
  showFilters,
  onToggleFilters
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search titles, descriptions, and tags..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Search chapter titles, descriptions, and tags only.<br />Chapter content is not searched.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-xs text-muted-foreground mt-1 dark:text-slate-400">
            Searches chapter metadata only
          </p>
        </div>
        
        <Button
          variant="outline"
          onClick={onToggleFilters}
          className="flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>
      
      {showFilters && (
        <div className="flex flex-col sm:flex-row gap-4 p-4 bg-muted/30 rounded-lg border border-muted/50">
          <div className="flex-1">
            <label className="text-sm font-medium text-foreground mb-2 block">Status</label>
            <Select value={statusFilter} onValueChange={onStatusFilterChange}>
              <SelectTrigger>
                <SelectValue placeholder="All statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Chapters</SelectItem>
                <SelectItem value="published">Published Only</SelectItem>
                <SelectItem value="draft">Drafts Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex-1">
            <label className="text-sm font-medium text-foreground mb-2 block">Sort By</label>
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger>
                <SelectValue placeholder="Chapter order" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chapter">Chapter Order</SelectItem>
                <SelectItem value="date">Publication Date</SelectItem>
                <SelectItem value="readTime">Reading Time</SelectItem>
                <SelectItem value="title">Title (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChapterFilters;
