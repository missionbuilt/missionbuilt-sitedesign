
import React, { useState, useRef, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Eye, Edit3, Save } from 'lucide-react';

interface ContentEditorProps {
  initialContent?: string;
  onSave?: (content: string) => void;
}

const ContentEditor = ({ initialContent = '', onSave }: ContentEditorProps) => {
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    setIsEditing(false);
    onSave?.(content);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      handleSave();
    }
  };

  // Check if we're in development mode (editing capability)
  const isDevelopment = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';

  return (
    <div className="w-full">
      {/* Editor Controls - Only visible in development */}
      {isDevelopment && (
        <div className="flex gap-2 mb-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2"
          >
            <Edit3 className="w-4 h-4" />
            {isEditing ? 'Cancel' : 'Edit Content'}
          </Button>
          
          {isEditing && (
            <Button
              variant="default"
              size="sm"
              onClick={handleSave}
              className="flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save (Ctrl+S)
            </Button>
          )}
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPreview(!isPreview)}
            className="flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            {isPreview ? 'Hide Preview' : 'Preview'}
          </Button>
        </div>
      )}

      {/* Content Area */}
      <div className="min-h-[400px]">
        {isEditing ? (
          <div className="space-y-4">
            <Textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Start writing your content here..."
              className="min-h-[400px] font-mono text-sm"
              rows={20}
            />
            <p className="text-sm text-muted-foreground">
              Tip: Use Ctrl+S to save. You can write in Markdown format.
            </p>
          </div>
        ) : (
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {content ? (
              <div 
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ 
                  __html: content.replace(/\n/g, '<br />') 
                }}
              />
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                {isDevelopment ? (
                  <p>Click "Edit Content" to start writing...</p>
                ) : (
                  <p>Content will appear here once added.</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Preview Mode */}
      {isPreview && isDevelopment && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Published Preview (How visitors will see it):
          </h3>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {content ? (
              <div 
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ 
                  __html: content.replace(/\n/g, '<br />') 
                }}
              />
            ) : (
              <p className="text-muted-foreground">No content to preview.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentEditor;
