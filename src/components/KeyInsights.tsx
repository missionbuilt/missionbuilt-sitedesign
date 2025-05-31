import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit3, Save, X, Lightbulb, Trash2 } from 'lucide-react';

interface Insight {
  id: string;
  title: string;
  description: string;
}

interface KeyInsightsProps {
  onInsightsChange?: (insights: Insight[]) => void;
}

const KeyInsights = ({ onInsightsChange }: KeyInsightsProps) => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const isDevelopment = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';

  const handleAdd = () => {
    if (formData.title.trim()) {
      const newInsight: Insight = {
        id: Date.now().toString(),
        title: formData.title.trim(),
        description: formData.description.trim()
      };
      
      const updatedInsights = [...insights, newInsight];
      setInsights(updatedInsights);
      onInsightsChange?.(updatedInsights);
      
      setFormData({ title: '', description: '' });
      setIsAdding(false);
    }
  };

  const handleEdit = (insight: Insight) => {
    setFormData({
      title: insight.title,
      description: insight.description
    });
    setEditingId(insight.id);
  };

  const handleSaveEdit = () => {
    if (formData.title.trim() && editingId) {
      const updatedInsights = insights.map(insight =>
        insight.id === editingId
          ? {
              ...insight,
              title: formData.title.trim(),
              description: formData.description.trim()
            }
          : insight
      );
      
      setInsights(updatedInsights);
      onInsightsChange?.(updatedInsights);
      
      setFormData({ title: '', description: '' });
      setEditingId(null);
    }
  };

  const handleDelete = (id: string) => {
    const updatedInsights = insights.filter(insight => insight.id !== id);
    setInsights(updatedInsights);
    onInsightsChange?.(updatedInsights);
  };

  const handleCancel = () => {
    setFormData({ title: '', description: '' });
    setIsAdding(false);
    setEditingId(null);
  };

  return (
    <div className="w-full">
      {/* Editor Controls */}
      {isDevelopment && (
        <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Manage Key Insights</h3>
            {!isAdding && !editingId && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAdding(true)}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Insight
              </Button>
            )}
          </div>

          {/* Add/Edit Form */}
          {(isAdding || editingId) && (
            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="text-base">
                  {editingId ? 'Edit Insight' : 'Add New Insight'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Key insight title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Detailed explanation of the insight"
                    rows={3}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={editingId ? handleSaveEdit : handleAdd}
                    disabled={!formData.title.trim()}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {editingId ? 'Save Changes' : 'Add Insight'}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCancel}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Existing insights management */}
          {insights.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-muted-foreground">Existing Insights:</h4>
              {insights.map((insight) => (
                <div key={insight.id} className="flex items-center justify-between p-2 bg-white dark:bg-gray-700 rounded border">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{insight.title}</p>
                    {insight.description && (
                      <p className="text-sm text-muted-foreground truncate">{insight.description}</p>
                    )}
                  </div>
                  <div className="flex gap-1 ml-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(insight)}
                      disabled={editingId !== null || isAdding}
                    >
                      <Edit3 className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(insight.id)}
                      disabled={editingId !== null || isAdding}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Published Insights Display */}
      {insights.length > 0 && (
        <div className="my-12">
          <div className="border-l-4 border-sunburst bg-sunburst/5 dark:bg-sunburst/10 p-6 rounded-r-lg">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-sunburst" />
              <h3 className="text-xl font-semibold font-display text-foreground">Key Insights</h3>
            </div>
            <div className="space-y-4">
              {insights.map((insight) => (
                <div key={insight.id}>
                  <h4 className="font-medium text-foreground mb-1">{insight.title}</h4>
                  {insight.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{insight.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeyInsights;
