
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, Edit3, Save, Heading, List, Quote, Bold, Type, Table as TableIcon } from 'lucide-react';

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

  const insertTextAtCursor = (textToInsert: string) => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentValue = content;
    
    const newValue = currentValue.substring(0, start) + textToInsert + currentValue.substring(end);
    setContent(newValue);
    
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

  // Check if we're in development mode (editing capability)
  const isDevelopment = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';

  const handlePreviewToggle = () => {
    console.log('Preview button clicked, current isPreview:', isPreview);
    setIsPreview(!isPreview);
    console.log('Preview state will be:', !isPreview);
  };

  // Custom components for ReactMarkdown with debugging
  const markdownComponents = {
    h1: ({node, ...props}: any) => <h1 className="text-4xl font-bold font-display mb-6 mt-8 text-foreground" {...props} />,
    h2: ({node, ...props}: any) => <h2 className="text-3xl font-semibold font-display mb-4 mt-6 text-foreground" {...props} />,
    h3: ({node, ...props}: any) => <h3 className="text-2xl font-medium font-display mb-3 mt-5 text-foreground" {...props} />,
    p: ({node, ...props}: any) => <p className="text-base mb-4 leading-relaxed text-foreground" {...props} />,
    ul: ({node, ...props}: any) => <ul className="list-disc list-inside mb-4 space-y-2 text-foreground" {...props} />,
    ol: ({node, ...props}: any) => <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground" {...props} />,
    li: ({node, ...props}: any) => <li className="text-base text-foreground" {...props} />,
    blockquote: ({node, ...props}: any) => <blockquote className="border-l-4 border-sunburst pl-4 py-2 my-6 italic text-lg bg-gray-50 dark:bg-gray-800 rounded-r text-foreground" {...props} />,
    strong: ({node, ...props}: any) => <strong className="font-bold text-army dark:text-sunburst" {...props} />,
    em: ({node, ...props}: any) => <em className="italic" {...props} />,
    table: ({node, ...props}: any) => {
      console.log('Table component rendered with props:', props);
      return (
        <div className="my-4 overflow-x-auto">
          <Table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            {props.children}
          </Table>
        </div>
      );
    },
    thead: ({node, ...props}: any) => {
      console.log('TableHeader component rendered');
      return <TableHeader className="bg-gray-100 dark:bg-gray-800">{props.children}</TableHeader>;
    },
    tbody: ({node, ...props}: any) => {
      console.log('TableBody component rendered');
      return <TableBody>{props.children}</TableBody>;
    },
    tr: ({node, ...props}: any) => {
      console.log('TableRow component rendered');
      return <TableRow className="border-b border-gray-300 dark:border-gray-600">{props.children}</TableRow>;
    },
    th: ({node, ...props}: any) => {
      console.log('TableHead component rendered with content:', props.children);
      return <TableHead className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-foreground">{props.children}</TableHead>;
    },
    td: ({node, ...props}: any) => {
      console.log('TableCell component rendered with content:', props.children);
      return <TableCell className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-foreground">{props.children}</TableCell>;
    },
  };

  return (
    <div className="w-full">
      {/* Editor Controls - Only visible in development */}
      {isDevelopment && (
        <div className="flex flex-col gap-4 mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <div className="flex gap-2">
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
          </div>

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
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Start writing your content here..."
              className="min-h-[400px] font-mono text-sm"
              rows={20}
            />
            <p className="text-sm text-muted-foreground">
              Tip: Use Ctrl+S to save. Click the format buttons above to insert styled text.
            </p>
          </div>
        ) : (
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-base prose-blockquote:border-l-4 prose-blockquote:border-sunburst prose-blockquote:italic prose-strong:text-army dark:prose-strong:text-sunburst">
            {content ? (
              <ReactMarkdown components={markdownComponents}>
                {content}
              </ReactMarkdown>
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
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-base prose-blockquote:border-l-4 prose-blockquote:border-sunburst prose-blockquote:italic prose-strong:text-army dark:prose-strong:text-sunburst">
            {content ? (
              <ReactMarkdown components={markdownComponents}>
                {content}
              </ReactMarkdown>
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
