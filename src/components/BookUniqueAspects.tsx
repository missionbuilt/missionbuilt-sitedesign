
import React from "react";
import { BookText, BookOpen, CheckCircle } from "lucide-react";

const BookUniqueAspects = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-slate/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-grow bg-army/20 max-w-[100px]"></div>
            <BookOpen className="h-5 w-5 text-army/70" />
            <div className="h-px flex-grow bg-army/20 max-w-[100px]"></div>
          </div>

          <div className="text-center mb-10">
            <h2 className="heading-sm mb-3">There are plenty of product books out there — many are fantastic. This one's different. It's:</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* Free */}
            <div className="p-6 rounded-lg bg-slate/5 border border-slate/10 hover:border-army/20 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <div className="p-2 rounded-full bg-army/10">
                  <CheckCircle className="h-5 w-5 text-army" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Free</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                — because good ideas should be shared.
              </p>
            </div>

            {/* Open */}
            <div className="p-6 rounded-lg bg-slate/5 border border-slate/10 hover:border-army/20 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <div className="p-2 rounded-full bg-army/10">
                  <BookOpen className="h-5 w-5 text-army" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Open</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                — because learning grows stronger when it's a conversation.
              </p>
            </div>

            {/* Real */}
            <div className="p-6 rounded-lg bg-slate/5 border border-slate/10 hover:border-army/20 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <div className="p-2 rounded-full bg-army/10">
                  <BookText className="h-5 w-5 text-army" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Real</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                — because this is built between parenting, lifting, and a full-time job.
              </p>
            </div>

            {/* AI-assisted */}
            <div className="p-6 rounded-lg bg-slate/5 border border-slate/10 hover:border-army/20 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <div className="p-2 rounded-full bg-army/10">
                  <svg className="h-5 w-5 text-army" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2c1.5 0 3 .5 3 2v1c0 1.5-.5 2-2 3v1a3 3 0 0 0 3 3c.5 0 1.5 0 2.5-1.5" />
                    <path d="M9 2c-1.5 0-3 .5-3 2v1c0 1.5.5 2 2 3v1a3 3 0 0 1-3 3c-.5 0-1.5 0-2.5-1.5" />
                    <path d="M3.75 19a2.25 2.25 0 0 1 4.5 0 2.25 2.25 0 0 1-4.5 0" />
                    <path d="M15.75 19a2.25 2.25 0 0 1 4.5 0 2.25 2.25 0 0 1-4.5 0" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold mb-2">AI-assisted</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                — because I'd rather build with help than not build at all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookUniqueAspects;
