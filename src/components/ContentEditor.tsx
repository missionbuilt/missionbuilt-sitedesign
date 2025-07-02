import React, { useState, useRef, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Eye, Edit3, Save, Heading, List, Quote, Bold, Type, Table as TableIcon, Download, Upload, FileText } from 'lucide-react';
import { contentService } from '@/services/contentService';
import MarkdownRenderer from './MarkdownRenderer';

interface ContentEditorProps {
  initialContent?: string;
  chapterId?: string;
  onSave?: (content: string) => void;
  onContentChange?: (content: string) => void;
}

const ContentEditor = ({ initialContent = '', chapterId, onSave, onContentChange }: ContentEditorProps) => {
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Enhanced development mode detection
  const isDevelopment = process.env.NODE_ENV === 'development' || 
                        window.location.hostname === 'localhost' || 
                        window.location.hostname.includes('lovable.app') ||
                        window.location.hostname.includes('127.0.0.1') ||
                        window.location.port !== '';

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  // Scroll to anchor on page load if present in URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Add temporary highlight effect
          element.style.backgroundColor = 'rgba(255, 235, 59, 0.3)';
          setTimeout(() => {
            element.style.backgroundColor = '';
          }, 2000);
        }
      }, 100);
    }
  }, [content]);

  const handleContentUpdate = (newContent: string) => {
    setContent(newContent);
    onContentChange?.(newContent);
  };

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

  const handleExportContent = () => {
    if (!chapterId) return;
    
    const dataStr = content;
    const dataBlob = new Blob([dataStr], { type: 'text/markdown' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${chapterId}-content-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const importedContent = e.target?.result as string;
        if (importedContent) {
          handleContentUpdate(importedContent);
          console.log('Content imported successfully');
        }
      };
      reader.readAsText(file);
    }
    // Reset the input value
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getBackupInfo = () => {
    if (!chapterId) return null;
    return contentService.getLocalStorageBackupInfo(chapterId);
  };

  const backupInfo = getBackupInfo();

  const insertTextAtCursor = (textToInsert: string) => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentValue = content;
    
    const newValue = currentValue.substring(0, start) + textToInsert + currentValue.substring(end);
    handleContentUpdate(newValue);
    
    // Set cursor position after inserted text
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + textToInsert.length, start + textToInsert.length);
    }, 0);
  };

  const formatButtons = [
    {
      label: 'Title',
      icon: Heading,
      action: () => insertTextAtCursor('\n\n# Title Here\n\n'),
    },
    {
      label: 'Section',
      icon: Heading,
      action: () => insertTextAtCursor('\n\n## Section Title\n\n'),
    },
    {
      label: 'Sub-section',
      icon: Heading,
      action: () => insertTextAtCursor('\n\n### Sub-section Title\n\n'),
    },
    {
      label: 'Bullets',
      icon: List,
      action: () => insertTextAtCursor('\n\n- Bullet point\n- Another point\n- Third point\n\n'),
    },
    {
      label: 'Body',
      icon: Type,
      action: () => insertTextAtCursor('\n\nBody text goes here. This is regular paragraph content.\n\n'),
    },
    {
      label: 'Emphasized',
      icon: Bold,
      action: () => insertTextAtCursor('**emphasized text**'),
    },
    {
      label: 'Quote',
      icon: Quote,
      action: () => insertTextAtCursor('\n\n> "This is a quote or important statement that stands out from the rest of the content."\n\n'),
    },
    {
      label: 'Table',
      icon: TableIcon,
      action: () => insertTextAtCursor('\n\n| Header 1 | Header 2 | Header 3 |\n|----------|----------|----------|\n| Row 1 Col 1 | Row 1 Col 2 | Row 1 Col 3 |\n| Row 2 Col 1 | Row 2 Col 2 | Row 2 Col 3 |\n\n'),
    },
  ];

  const handlePreviewToggle = () => {
    console.log('Preview button clicked, current isPreview:', isPreview);
    setIsPreview(!isPreview);
    console.log('Preview state will be:', !isPreview);
  };

  return (
    <div className="w-full">
      {/* Editor Controls - Show in development environments */}
      {isDevelopment && (
        <div className="flex flex-col gap-4 mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          {/* ... keep existing code (controls section) */}
          <div className="flex flex-wrap gap-2">
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
              variant={isPreview ? "default" : "outline"}
              size="sm"
              onClick={handlePreviewToggle}
              className="flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              {isPreview ? 'Hide Preview' : 'Show Preview'}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleExportContent}
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
              accept=".md,.txt"
              onChange={handleImportContent}
              className="hidden"
            />
          </div>

          {/* Backup Info */}
          {backupInfo && (backupInfo.hasContent || backupInfo.hasMetadata) && (
            <div className="text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded border border-green-200 dark:border-green-800">
              <FileText className="w-3 h-3 inline mr-1" />
              Auto-backup available{backupInfo.lastSaved ? ` (last saved: ${backupInfo.lastSaved})` : ''}
            </div>
          )}

          {/* Formatting Buttons - Only visible when editing */}
          {isEditing && (
            <div className="border-t pt-3">
              <p className="text-sm font-medium text-muted-foreground mb-2">Quick Format:</p>
              <div className="flex flex-wrap gap-2">
                {formatButtons.map((button) => (
                  <Button
                    key={button.label}
                    variant="ghost"
                    size="sm"
                    onClick={button.action}
                    className="flex items-center gap-1 text-xs"
                  >
                    <button.icon className="w-3 h-3" />
                    {button.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Content Area */}
      <div className="min-h-[400px]">
        {isEditing ? (
          <div className="space-y-4">
            <Textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => handleContentUpdate(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Start writing your content here..."
              className="min-h-[400px] font-mono text-sm"
              rows={20}
            />
            <p className="text-sm text-muted-foreground">
              Tip: Use Ctrl+S to save. Content is auto-saved to localStorage while editing.
            </p>
          </div>
        ) : (
          <div>
            {content ? (
              <MarkdownRenderer content={content} />
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

      {/* Preview Mode - Show when preview is enabled */}
      {isPreview && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Published Preview (How visitors will see it):
          </h3>
          {content ? (
            <MarkdownRenderer content={content} />
          ) : (
            <p className="text-muted-foreground">No content to preview.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentEditor;
