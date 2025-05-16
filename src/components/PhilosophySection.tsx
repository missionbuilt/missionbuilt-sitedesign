
const PhilosophySection = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-md text-slate mb-4">Core Philosophy</h2>
          <p className="text-slate/80 max-w-2xl mx-auto">
            The principles that guide both product development and strength training are remarkably similar.
            Here are the foundational ideas that shape my approach to both disciplines.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Principle 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate/10 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-steel/10 flex items-center justify-center text-steel mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-slate">Progressive Growth</h3>
            <p className="text-slate/70">
              Whether building products or strength, sustainable progress comes from consistent, 
              incremental improvements over time, not overnight transformations.
            </p>
          </div>
          
          {/* Principle 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate/10 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-sunburst/10 flex items-center justify-center text-sunburst mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-slate">Form First</h3>
            <p className="text-slate/70">
              Proper technique precedes heavy weights; solid foundations precede feature expansion. 
              Getting the fundamentals right is essential to long-term success.
            </p>
          </div>
          
          {/* Principle 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate/10 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-slate/10 flex items-center justify-center text-slate mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-slate">Adaptation Cycle</h3>
            <p className="text-slate/70">
              Growth occurs through cycles of stress and recovery. Products evolve through 
              build-measure-learn loops; muscles through work-rest-grow cycles.
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a href="/philosophy" className="btn-secondary inline-flex items-center">
            Explore Full Philosophy
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
