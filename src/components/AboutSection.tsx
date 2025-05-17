
import { Button } from "./ui/button";

const AboutSection = () => {
  const mainText = "[Placeholder text for main content]\n\n[Second paragraph of placeholder text]";

  return (
    <section className="py-16 bg-slate/5 dark:bg-slate/10">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/3223ec55-65f3-4378-ac65-31d0a864801c.png"
                alt="Section image" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sunburst/20 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-steel/20 rounded-full z-0"></div>
          </div>
          
          {/* Content column */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-secondary text-slate/80 dark:bg-secondary/30 dark:text-slate-100 rounded-full text-sm font-medium">
                [Section Label]
              </span>
            </div>
            
            <h2 className="heading-md text-slate mb-6">
              [Section Title]
            </h2>
            
            <div className="text-slate/80 dark:text-slate-200 space-y-4">
              {mainText.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="/field-notes" className="btn-army inline-flex items-center">
                [Call to Action]
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
