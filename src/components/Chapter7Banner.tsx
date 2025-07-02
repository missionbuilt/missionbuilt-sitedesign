
import { useState, useEffect } from 'react';
import { X, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Chapter7Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('chapter12-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('chapter12-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-sunburst/10 to-army/10 border-b border-sunburst/20 dark:border-army/30">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <BookOpen className="h-5 w-5 text-sunburst" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                <span className="text-sunburst font-bold">Chapter 12 out now:</span>{' '}
                The Weight Is Real. Own It.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Link 
              to="/playbook/chapter-12"
              className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-sunburst transition-colors group"
            >
              Read now
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-1 hover:bg-background/50 rounded-sm transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter7Banner;
