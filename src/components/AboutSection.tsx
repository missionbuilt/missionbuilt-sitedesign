
const AboutSection = () => {
  return (
    <section className="py-16 bg-slate/5 dark:bg-slate/10">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="/placeholder.svg"
                alt="About MissionBuilt.io" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sunburst/20 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-steel/20 rounded-full z-0"></div>
          </div>
          
          {/* Content column */}
          <div>
            <span className="inline-block px-3 py-1 bg-secondary text-slate/80 dark:bg-secondary/30 dark:text-slate-100 rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            
            <h2 className="heading-md text-slate mb-6">
              Military Veteran & Product Leader
            </h2>
            
            <p className="text-slate/80 dark:text-slate-200 mb-4">
              I'm a former Army officer turned product leader, passionate about building mission-driven teams and products that make a difference.
            </p>
            
            <p className="text-slate/80 dark:text-slate-200 mb-6">
              My journey has taught me that the principles of effective leadership apply universally - whether leading military operations or product development. Discipline, strategic thinking, and resilience form the core of both worlds.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white dark:bg-slate/20 p-4 rounded-lg shadow-sm border border-slate/10 dark:border-slate/20">
                <div className="font-display font-semibold text-2xl text-steel dark:text-slate-100 mb-1">12+</div>
                <div className="text-sm text-slate/70 dark:text-slate-300">Years of Service</div>
              </div>
              <div className="bg-white dark:bg-slate/20 p-4 rounded-lg shadow-sm border border-slate/10 dark:border-slate/20">
                <div className="font-display font-semibold text-2xl text-steel dark:text-slate-100 mb-1">8+</div>
                <div className="text-sm text-slate/70 dark:text-slate-300">Years in Product</div>
              </div>
            </div>
            
            <a href="/field-notes" className="btn-army inline-flex items-center">
              Read My Story
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
