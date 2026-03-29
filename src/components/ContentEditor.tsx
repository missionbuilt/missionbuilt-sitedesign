import React, { useEffect } from 'react';
import MarkdownRenderer from './MarkdownRenderer';

interface ContentEditorProps {
  initialContent?: string;
  chapterId?: string;
  onSave?: (content: string) => void;
  onContentChange?: (content: string) => void;
}

const ContentEditor = ({ initialContent = '' }: ContentEditorProps) => {
  // Scroll to anchor on page load if present in URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          element.style.backgroundColor = 'rgba(255, 235, 59, 0.3)';
          setTimeout(() => {
            element.style.backgroundColor = '';
          }, 2000);
        }
      }, 100);
    }
  }, [initialContent]);

  return (
    <div className="w-full min-h-[400px]">
      {initialContent ? (
        <MarkdownRenderer content={initialContent} />
      ) : (
        <p className="text-center py-12 text-muted-foreground">Content coming soon.</p>
      )}
    </div>
  );
};

export default ContentEditor;
