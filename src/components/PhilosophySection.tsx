
const PhilosophySection = () => {
  return (
    <section className="py-16 bg-slate/5 dark:bg-slate/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-secondary text-slate/80 dark:bg-secondary/30 dark:text-slate-100 rounded-full text-sm font-medium mb-3">
            The Book
          </span>
          <h2 className="heading-md text-slate dark:text-slate-100 mb-4">Chapters I'm Writing</h2>
          <p className="text-slate/80 dark:text-slate-200 max-w-2xl mx-auto">
            I'm writing this book one chapter at a time, sharing what I've learned. Not as someone who has it all figured out, but as a friend who wants to see you succeed. Take what resonates, leave what doesn't.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Chapter 1 */}
          <div className="bg-white dark:bg-slate/20 rounded-xl p-6 shadow-sm border border-slate/10 dark:border-slate/20 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-steel/10 dark:bg-steel/20 flex items-center justify-center text-steel dark:text-slate-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-slate dark:text-slate-100">Chapter 1: Outcomes Over Outputs</h3>
            <p className="text-slate/70 dark:text-slate-300">
              I've found myself asking in every meeting: "How does this help our users?" It's not about checking boxes or shipping features—it's about making a difference in someone's day. When we focus on outcomes, the right actions become obvious.
            </p>
          </div>
          
          {/* Chapter 2 */}
          <div className="bg-white dark:bg-slate/20 rounded-xl p-6 shadow-sm border border-slate/10 dark:border-slate/20 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-sunburst/10 dark:bg-sunburst/20 flex items-center justify-center text-sunburst mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-slate dark:text-slate-100">Chapter 2: Empathy Drives Action</h3>
            <p className="text-slate/70 dark:text-slate-300">
              When I truly put myself in my users' shoes, I feel their struggles and challenges as my own. This isn't just understanding—it's feeling their pain points. That shared understanding becomes the spark that inspires the team to care deeply about solving the right problems.
            </p>
          </div>
          
          {/* Chapter 3 */}
          <div className="bg-white dark:bg-slate/20 rounded-xl p-6 shadow-sm border border-slate/10 dark:border-slate/20 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-army/10 dark:bg-army/20 flex items-center justify-center text-army dark:text-slate-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-slate dark:text-slate-100">Chapter 3: Daily Pages</h3>
            <p className="text-slate/70 dark:text-slate-300">
              Like writing a book, building strength happens one page, one rep at a time. I've learned that consistency—showing up when it's exciting and when it's not—is what leads to growth. The small daily choices compound into something meaningful.
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a href="/field-notes" className="btn-secondary inline-flex items-center">
            Read More Chapters
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
