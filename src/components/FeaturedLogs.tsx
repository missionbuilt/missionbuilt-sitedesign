
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const FeaturedLogs = () => {
  const featuredLogs = [
    {
      id: 1,
      title: "Mission before Metrics",
      excerpt: "Why zero-sum thinking might be limiting your product decisions and how to break free from this mental model.",
      date: "Jan 20, 2025",
      slug: "/log/1"
    },
    {
      id: 2,
      title: "Building in Public vs. Building for Public",
      excerpt: "The crucial distinction between transparency and performance, and why one builds better products than the other.",
      date: "Jan 22, 2025", 
      slug: "/log/2"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate/5 to-transparent">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4 animate-fade-in">Latest Training Logs</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredLogs.map((log, index) => (
            <Link 
              key={log.id}
              to={log.slug}
              className="group block animate-fade-in" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative p-8 rounded-xl bg-white dark:bg-slate/5 border border-slate/10 dark:border-slate/20 shadow-sm card-hover">
                {/* NEW Badge */}
                <Badge 
                  variant="default" 
                  className="absolute top-4 right-4 bg-sunburst text-slate text-xs px-2 py-1 animate-pulse"
                >
                  NEW
                </Badge>

                <div className="mb-4">
                  <div className="flex items-center text-slate/60 text-sm mb-2">
                    <span>Training Log #{log.id}</span>
                    <span className="mx-2">•</span>
                    <span>{log.date}</span>
                  </div>
                  <h3 className="heading-sm mb-3 group-hover:text-army transition-colors duration-200">
                    {log.title}
                  </h3>
                  <p className="body text-slate/70 mb-4">
                    {log.excerpt}
                  </p>
                </div>

                <div className="flex items-center text-army font-medium group-hover:text-army/80 transition-colors duration-200">
                  Read log
                  <ExternalLink className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLogs;
