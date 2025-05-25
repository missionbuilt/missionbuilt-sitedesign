
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { chapters } from '@/data/chapters-data';
import { useNewBadge } from '@/hooks/useNewBadge';

const FeaturedLogs = () => {
  const { hasVisitedTrainingLogs } = useNewBadge();
  
  // Get the most recent chapters as featured logs
  const featuredLogs = chapters
    .filter(chapter => chapter.status === 'in-progress')
    .slice(0, 3);

  return (
    <section className="py-16 bg-gradient-to-b from-slate/5 to-transparent">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4 animate-fade-in">Latest Training Logs</h2>
        </div>

        {featuredLogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No training logs available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredLogs.map((chapter, index) => (
              <Link 
                key={chapter.id}
                to={`/log/${chapter.id}`}
                className="group block animate-fade-in" 
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="relative p-8 rounded-xl bg-white dark:bg-slate/5 border border-slate/10 dark:border-slate/20 shadow-sm card-hover">
                  {/* NEW Badge for recently added chapters */}
                  {index === 0 && !hasVisitedTrainingLogs && (
                    <Badge 
                      variant="default" 
                      className="absolute top-4 right-4 bg-sunburst text-slate text-xs px-2 py-1 animate-pulse"
                    >
                      NEW
                    </Badge>
                  )}

                  <div className="mb-4">
                    <div className="flex items-center text-muted-foreground text-sm mb-2">
                      <span>Log {chapter.id}</span>
                    </div>
                    <h3 className="heading-sm mb-3 group-hover:text-army transition-colors duration-200">
                      {chapter.title}
                    </h3>
                    <p className="body text-muted-foreground mb-4">
                      {chapter.description}
                    </p>
                  </div>

                  <div className="flex items-center text-foreground font-medium group-hover:text-army transition-colors duration-200">
                    View log
                    <ExternalLink className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedLogs;
