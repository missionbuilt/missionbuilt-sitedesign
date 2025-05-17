
const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background elements - reduced blur for better clarity */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-army/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-sunburst/10 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-secondary text-slate rounded-full text-sm font-medium mb-6 shadow-sm">
            Philosophy × Product Management × Weightlifting
          </span>
          
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/dfd1484c-2dce-4c45-a3ef-e17eefa59dcc.png" 
              alt="MissionBuilt Logo" 
              className="h-24 w-auto mix-blend-multiply"
            />
          </div>
          
          <h1 className="heading-lg mb-6">
            Building Products with <span className="text-sunburst font-bold">Purpose</span> and <span className="text-sunburst font-bold">Strength</span>
          </h1>
          
          <p className="body-lg mb-10 max-w-2xl mx-auto">
            Exploring the intersection of product management philosophy and the discipline of weightlifting. 
            Both require vision, persistence, and a growth mindset.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/blog" className="btn-army">
              Read the Blog
            </a>
            <a href="/about" className="btn-secondary">
              Learn My Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
