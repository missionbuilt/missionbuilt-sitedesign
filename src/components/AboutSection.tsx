
const AboutSection = () => {
  return (
    <section className="py-16 bg-slate/5">
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
            <span className="inline-block px-3 py-1 bg-secondary text-slate/80 rounded-full text-sm font-medium mb-4">
              MissionBuilt.io Garage
            </span>
            
            <h2 className="heading-md text-slate mb-6">
              Uniting Passion for Product and Power
            </h2>
            
            <p className="text-slate/80 mb-4">
              I'm a product manager by day and weightlifter by... also day (early mornings, actually). 
              MissionBuilt.io is where these two passions converge.
            </p>
            
            <p className="text-slate/80 mb-6">
              Both disciplines require vision, consistency, and a growth mindset. 
              I've found that the principles that build great products also build physical and mental strength, 
              and vice versa.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate/10">
                <div className="font-display font-semibold text-2xl text-steel mb-1">10+</div>
                <div className="text-sm text-slate/70">Years in Product</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate/10">
                <div className="font-display font-semibold text-2xl text-steel mb-1">500+</div>
                <div className="text-sm text-slate/70">Training Sessions</div>
              </div>
            </div>
            
            <a href="/pr-board" className="btn-primary inline-flex items-center">
              View PR Board
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
