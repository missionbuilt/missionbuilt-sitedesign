import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

interface Link {
  id: string;
  name: string;
  summary: string;
  url: string;
}

interface LinkSectionProps {
  chapterId: string;
  initialLinks: Link[];
  onLinksChange?: (links: Link[]) => void;
}

const LinkSection = ({ initialLinks }: LinkSectionProps) => {
  const [links, setLinks] = useState<Link[]>(initialLinks);

  useEffect(() => {
    setLinks(initialLinks);
  }, [initialLinks]);

  if (links.length === 0) return null;

  return (
    <div className="w-full space-y-6">
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
                <div className="flex-1 min-w-0 overflow-hidden">
                  <h4 className="font-semibold text-lg text-foreground group-hover:text-army
                               dark:group-hover:text-sunburst transition-colors mb-2 break-words">
                    {link.name}
                  </h4>
                  {link.summary && (
                    <p className="text-muted-foreground leading-relaxed mb-3 break-words">
                      {link.summary}
                    </p>
                  )}
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium break-all">
                    {link.url}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkSection;
