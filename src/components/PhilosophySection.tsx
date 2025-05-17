
const PhilosophySection = () => {
  return (
    <section className="py-16 bg-slate/5 dark:bg-slate/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-md text-slate dark:text-slate-100 mb-4">Lessons I've Learned</h2>
          <p className="text-slate/80 dark:text-slate-200 max-w-2xl mx-auto">
            I don't preach theory—I share what works. Over years of building products and training, I've found that stripping away the unnecessary reveals what truly matters.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Principle 1 */}
          <div className="bg-white dark:bg-slate/20 rounded-xl p-6 shadow-sm border border-slate/10 dark:border-slate/20 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-steel/10 dark:bg-steel/20 flex items-center justify-center text-steel dark:text-slate-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-slate dark:text-slate-100">Care Deeply About Outcomes</h3>
            <p className="text-slate/70 dark:text-slate-300">
              I've learned to be the voice of the user in every meeting. Fight for clarity, cut the unnecessary, and keep the team focused on what matters.
              We win when our users win. It's that simple.
            </p>
          </div>
          
          {/* Principle 2 */}
          <div className="bg-white dark:bg-slate/20 rounded-xl p-6 shadow-sm border border-slate/10 dark:border-slate/20 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-sunburst/10 dark:bg-sunburst/20 flex items-center justify-center text-sunburst mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-slate dark:text-slate-100">Empathy is a Superpower</h3>
            <p className="text-slate/70 dark:text-slate-300">
              I've learned to truly put myself in my users' shoes and feel their pain points. When you understand their struggles, you naturally share those insights with your team.
              Their mission becomes your mission—and that genuine care is what drives meaningful solutions.
            </p>
          </div>
          
          {/* Principle 3 */}
          <div className="bg-white dark:bg-slate/20 rounded-xl p-6 shadow-sm border border-slate/10 dark:border-slate/20 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-army/10 dark:bg-army/20 flex items-center justify-center text-army dark:text-slate-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-slate dark:text-slate-100">Consistency Beats Complexity</h3>
            <p className="text-slate/70 dark:text-slate-300">
              In my training, I am the user. My mission is growth. I've found that self-development through strength is a daily practice of purpose.
              Progress comes from showing up, listening to my body, and adapting.
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a href="/field-notes" className="btn-secondary inline-flex items-center">
            Learn More
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
