
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
              Our Mission
            </span>
            
            <h2 className="heading-md text-slate mb-6">
              The User Mission Method
            </h2>
            
            <p className="text-slate/80 dark:text-slate-200 mb-4">
              This site exists to unify two worlds: Building great products that enable others to succeed, and building great selves through strength—powerlifting, bodybuilding, weight training, and personal development.
            </p>
            
            <p className="text-slate/80 dark:text-slate-200 mb-6">
              The method? It's not new. It's not trendy. It's radically simple. Product management isn't a circus of ceremonies. It's showing up, giving a shit, and making sure your users are stronger because of you.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white dark:bg-slate/20 p-4 rounded-lg shadow-sm border border-slate/10 dark:border-slate/20">
                <div className="font-display font-semibold text-2xl text-steel dark:text-slate-100 mb-1">🧠</div>
                <div className="text-sm text-slate/70 dark:text-slate-300">User Mission Method</div>
              </div>
              <div className="bg-white dark:bg-slate/20 p-4 rounded-lg shadow-sm border border-slate/10 dark:border-slate/20">
                <div className="font-display font-semibold text-2xl text-steel dark:text-slate-100 mb-1">🏋️‍♂️</div>
                <div className="text-sm text-slate/70 dark:text-slate-300">Built, Not Theorized</div>
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
