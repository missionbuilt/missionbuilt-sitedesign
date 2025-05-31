import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit3, Save, X, ExternalLink, Trash2, Download, Upload } from 'lucide-react';

interface Link {
  id: string;
  name: string;
  summary: string;
  url: string;
}

interface LinkSectionProps {
  initialLinks?: Link[];
  onLinksChange?: (links: Link[]) => void;
}

const LinkSection = ({ initialLinks = [], onLinksChange }: LinkSectionProps) => {
  const [links, setLinks] = useState<Link[]>(initialLinks);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    summary: '',
    url: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if we're in development mode (editing capability)
  const isDevelopment = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';

  React.useEffect(() => {
    setLinks(initialLinks);
  }, [initialLinks]);

  const updateLinks = (newLinks: Link[]) => {
    setLinks(newLinks);
    onLinksChange?.(newLinks);
  };

  const handleAdd = () => {
    if (formData.name.trim() && formData.url.trim()) {
      const newLink: Link = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        summary: formData.summary.trim(),
        url: formData.url.trim()
      };
      
      const updatedLinks = [...links, newLink];
      updateLinks(updatedLinks);
      
      setFormData({ name: '', summary: '', url: '' });
      setIsAdding(false);
    }
  };

  const handleEdit = (link: Link) => {
    setFormData({
      name: link.name,
      summary: link.summary,
      url: link.url
    });
    setEditingId(link.id);
  };

  const handleSaveEdit = () => {
    if (formData.name.trim() && formData.url.trim() && editingId) {
      const updatedLinks = links.map(link =>
        link.id === editingId
          ? {
              ...link,
              name: formData.name.trim(),
              summary: formData.summary.trim(),
              url: formData.url.trim()
            }
          : link
      );
      
      updateLinks(updatedLinks);
      
      setFormData({ name: '', summary: '', url: '' });
      setEditingId(null);
    }
  };

  const handleDelete = (id: string) => {
    const updatedLinks = links.filter(link => link.id !== id);
    updateLinks(updatedLinks);
  };

  const handleCancel = () => {
    setFormData({ name: '', summary: '', url: '' });
    setIsAdding(false);
    setEditingId(null);
  };

  const handleExportLinks = () => {
    const dataStr = JSON.stringify(links, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `links-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportLinks = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedLinks = JSON.parse(e.target?.result as string);
          if (Array.isArray(importedLinks)) {
            // Validate that imported data has the correct structure
            const validLinks = importedLinks.filter(link => 
              link && typeof link === 'object' && 
              typeof link.name === 'string' && 
              typeof link.url === 'string'
            );
            
            if (validLinks.length > 0) {
              // Generate new IDs to avoid conflicts
              const newLinks = validLinks.map(link => ({
                ...link,
                id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                summary: link.summary || ''
              }));
              
              const updatedLinks = [...links, ...newLinks];
              updateLinks(updatedLinks);
              console.log(`Imported ${newLinks.length} links successfully`);
            }
          }
        } catch (error) {
          console.error('Error importing links:', error);
          alert('Error importing links. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
    // Reset the input value so the same file can be imported again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full">
      {/* Editor Controls - Only visible in development */}
      {isDevelopment && (
        <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Manage Links</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportLinks}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Import
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleImportLinks}
                className="hidden"
              />
              {!isAdding && !editingId && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsAdding(true)}
                  className="flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Link
                </Button>
              )}
            </div>
          </div>

          {/* Add/Edit Form */}
          {(isAdding || editingId) && (
            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="text-base">
                  {editingId ? 'Edit Link' : 'Add New Link'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Link name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Summary</label>
                  <Textarea
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    placeholder="Brief description of the link"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">URL</label>
                  <Input
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    placeholder="https://example.com"
                    type="url"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={editingId ? handleSaveEdit : handleAdd}
                    disabled={!formData.name.trim() || !formData.url.trim()}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {editingId ? 'Save Changes' : 'Add Link'}
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

          {/* Edit existing links */}
          {links.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-muted-foreground">Existing Links:</h4>
              {links.map((link) => (
                <div key={link.id} className="flex items-center justify-between p-2 bg-white dark:bg-gray-700 rounded border">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{link.name}</p>
                    {link.summary && (
                      <p className="text-sm text-muted-foreground truncate">{link.summary}</p>
                    )}
                    <p className="text-xs text-blue-600 dark:text-blue-400 truncate">{link.url}</p>
                  </div>
                  <div className="flex gap-1 ml-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(link)}
                      disabled={editingId !== null || isAdding}
                    >
                      <Edit3 className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(link.id)}
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

      {/* Enhanced Published Links Display */}
      {links.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold font-display text-foreground">Further Reading</h3>
          <div className="grid gap-4">
            {links.map((link) => (
              <div key={link.id} className="group">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-200 dark:border-gray-700 rounded-xl 
                           hover:border-army dark:hover:border-sunburst transition-all duration-300
                           hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800/50
                           hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <div className="flex items-start gap-4">
                    <ExternalLink className="w-6 h-6 text-army dark:text-sunburst mt-1 flex-shrink-0 
                                           group-hover:scale-110 transition-transform" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-lg text-foreground group-hover:text-army 
                                   dark:group-hover:text-sunburst transition-colors mb-2">
                        {link.name}
                      </h4>
                      {link.summary && (
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          {link.summary}
                        </p>
                      )}
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium truncate">
                        {link.url}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkSection;
