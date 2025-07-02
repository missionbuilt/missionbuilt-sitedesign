
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { createSlug } from '@/utils/anchorUtils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer = ({ content, className = '' }: MarkdownRendererProps) => {
  const markdownComponents = {
    h1: ({ node, children, ...props }: any) => {
      const text = typeof children === 'string' ? children : 
        React.Children.toArray(children).join('');
      const id = createSlug(text);
      return (
        <h1 
          id={id}
          className="text-4xl font-bold font-display mb-6 mt-8 text-foreground scroll-mt-20" 
          {...props}
        >
          {children}
        </h1>
      );
    },
    h2: ({ node, children, ...props }: any) => {
      const text = typeof children === 'string' ? children : 
        React.Children.toArray(children).join('');
      const id = createSlug(text);
      return (
        <h2 
          id={id}
          className="text-3xl font-semibold font-display mb-4 mt-6 text-foreground scroll-mt-20" 
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ node, children, ...props }: any) => {
      const text = typeof children === 'string' ? children : 
        React.Children.toArray(children).join('');
      const id = createSlug(text);
      return (
        <h3 
          id={id}
          className="text-2xl font-medium font-display mb-3 mt-5 text-foreground scroll-mt-20" 
          {...props}
        >
          {children}
        </h3>
      );
    },
    p: ({ node, ...props }: any) => <p className="text-base mb-4 leading-relaxed text-foreground" {...props} />,
    ul: ({ node, ...props }: any) => <ul className="list-disc list-outside mb-4 space-y-2 text-foreground ml-6" {...props} />,
    ol: ({ node, ...props }: any) => <ol className="list-decimal list-outside mb-4 space-y-2 text-foreground ml-6" {...props} />,
    li: ({ node, ...props }: any) => <li className="text-base text-foreground" {...props} />,
    blockquote: ({ node, ...props }: any) => <blockquote className="border-l-4 border-sunburst pl-4 py-2 my-6 italic text-lg bg-gray-50 dark:bg-gray-800 rounded-r text-foreground" {...props} />,
    strong: ({ node, ...props }: any) => <strong className="font-bold text-army dark:text-sunburst" {...props} />,
    em: ({ node, ...props }: any) => <em className="italic" {...props} />,
    table: ({ node, ...props }: any) => {
      return (
        <div className="my-6 overflow-x-auto">
          <Table className="w-full border border-gray-200 dark:border-gray-700">
            {props.children}
          </Table>
        </div>
      );
    },
    thead: ({ node, ...props }: any) => <TableHeader>{props.children}</TableHeader>,
    tbody: ({ node, ...props }: any) => <TableBody>{props.children}</TableBody>,
    tr: ({ node, ...props }: any) => <TableRow>{props.children}</TableRow>,
    th: ({ node, ...props }: any) => (
      <TableHead className="font-semibold text-left">
        {props.children}
      </TableHead>
    ),
    td: ({ node, ...props }: any) => (
      <TableCell>
        {props.children}
      </TableCell>
    ),
  };

  return (
    <div className={`prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-base prose-blockquote:border-l-4 prose-blockquote:border-sunburst prose-blockquote:italic prose-strong:text-army dark:prose-strong:text-sunburst ${className}`}>
      <ReactMarkdown 
        components={markdownComponents}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
