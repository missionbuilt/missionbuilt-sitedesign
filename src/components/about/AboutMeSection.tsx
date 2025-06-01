
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const AboutMeSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/82a6be17-e317-4ba1-ba98-d1c365af5e76.png";
    img.onload = () => setImageLoaded(true);
  }, []);
  
  return (
    <div className="flex flex-col items-center space-y-8 mb-16">
      <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-primary/10 relative">
        {!imageLoaded && (
          <Skeleton className="w-full h-full rounded-full" />
        )}
        <img 
          src="/lovable-uploads/82a6be17-e317-4ba1-ba98-d1c365af5e76.png" 
          alt="Mike cartoon character" 
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <Card className="w-full bg-card shadow-md border border-slate/10">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Hi, I'm Mike</h2>
          <div className="space-y-6 text-slate dark:text-slate-200">
            <style>{`
              .prose-bullets ul {
                list-style-type: disc;
                margin-left: 1.5rem;
              }
              .prose-bullets ul li::marker {
                color: hsl(var(--foreground));
              }
              .dark .prose-bullets ul li::marker {
                color: #FFC300 !important;
              }
            `}</style>
            
            <p className="text-lg">
              A product leader by trade, a powerlifter by obsession, and a father before all else.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Professional Journey</h3>
              <p>
                I've spent over 20 years in cybersecurity, from early days as an intelligence analyst in the U.S. Army to leading the vision for Elastic Security as VP of Product. Along the way, I've helped build, ship, and scale security solutions by sticking to one core belief: we win when our users do. Whether I'm mentoring teams or shaping roadmaps, my product philosophy is rooted in empathy, mission, and execution. I've never believed in building for metrics — I build for outcomes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Beyond Work</h3>
              <p>
                Outside of work, I'm a USAPL-certified powerlifting coach and a not-so-serious competitive lifter. My platform may be unofficial, but my PR board is sacred. I train in the garage gym I've been obsessively building for years — a personal cathedral of steel and sweat. It's where I reset, get stronger, and connect with the people I love. The home gym is more than racks and rep schemes; it's a space that keeps my body sharp and my mind clearer than any meeting ever could.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Family</h3>
              <p>
                I'm a proud and lucky dad who learned the meaning of unconditional love the moment they arrived. They've taught me more about patience, play, and perspective than any product launch ever could.
              </p>
            </div>
            
            <div>
              <p className="font-medium">
                What you'll get from me — whether in my work, my writing, or my life — is honesty, heart, and a little bit of barbell grit. I don't pretend to have all the answers, but I show up, give a shit, and do the reps. Every day.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMeSection;
