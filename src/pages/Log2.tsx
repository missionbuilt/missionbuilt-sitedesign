
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getLogById } from "@/data/logs-data";

const Log2 = () => {
  const logData = getLogById(2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!logData) {
    return <div>Log not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{logData.title} - Training Log</title>
        <meta name="description" content={logData.excerpt} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center text-slate/60 text-sm mb-4">
                <span>Training Log #{logData.id}</span>
                <span className="mx-2">•</span>
                <span>{logData.date}</span>
              </div>
              <h1 className="heading-lg mb-6">{logData.title}</h1>
              <p className="text-xl text-slate/70 leading-relaxed">
                {logData.excerpt}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p>
                I used to believe in lightning strikes—those moments of sudden breakthrough that would transform everything overnight. In the gym, I'd chase the perfect workout that would add 50 pounds to my deadlift. In product, I'd search for the killer feature that would 10x our growth.
              </p>

              <p>
                <strong>I was wrong about both.</strong>
              </p>

              <h2>The Truth About Reps</h2>
              <p>
                Greatness isn't born in a moment. It's built—one rep, one iteration, one small improvement at a time. Every powerlifter knows this. Every successful product team learns it eventually.
              </p>

              <p>
                In the gym, you don't go from a 135-pound deadlift to 315 in one session. You add 5 pounds here, 10 pounds there. You show up when you don't feel like it. You focus on form when the weight feels light. You trust the process when progress feels slow.
              </p>

              <p>
                Product development works the same way. You don't ship one feature and suddenly have product-market fit. You iterate, you learn, you improve. Each release is a rep. Each user interview is a rep. Each bug fix is a rep.
              </p>

              <h2>Compound Interest of Effort</h2>
              <p>
                The magic happens in the compounding. Those small, consistent improvements stack on top of each other. Your 205-pound deadlift doesn't feel much heavier than 200, but it's part of a trend that leads to 315. Your 2% conversion rate improvement doesn't feel revolutionary, but it's part of a pattern that leads to breakthrough growth.
              </p>

              <p>
                I've seen teams abandon promising features after one iteration because they didn't see immediate results. I've seen lifters quit after a few weeks because they didn't look like Instagram fitness models. Both miss the fundamental truth: <strong>results lag behind effort, but they compound faster than you think.</strong>
              </p>

              <h2>The Daily Practice</h2>
              <p>
                What I've learned is that passion isn't measured by intensity—it's measured by consistency. The lifter who shows up three times a week for a year will outlift the one who goes hard for a month then disappears. The product team that ships weekly improvements will outperform the one that swings for the fences once a quarter.
              </p>

              <p>
                This is why I've built my entire approach around sustainable reps:
              </p>

              <ul>
                <li><strong>In the gym:</strong> Progressive overload. Add weight when form is perfect. Deload when fatigue builds up. Show up consistently.</li>
                <li><strong>In product:</strong> Ship early and often. Learn from each release. Iterate based on real feedback. Build sustainable momentum.</li>
              </ul>

              <h2>When Reps Feel Hard</h2>
              <p>
                There will be days when the weight feels heavier than it should. There will be sprints where the code fights you at every turn. This is normal. This is where growth happens.
              </p>

              <p>
                The temptation is to skip the rep or rush through it. Don't. These are the moments that separate those who build lasting strength from those who plateau. Perfect form under pressure. Quality code when deadlines loom. These are the reps that matter most.
              </p>

              <h2>Your Next Rep</h2>
              <p>
                If you're reading this and feeling like your progress is too slow, remember: <strong>you're exactly where you need to be if you keep showing up.</strong>
              </p>

              <p>
                What's your next rep? What's the smallest improvement you can make today? In your product, in your code, in your process, in your health?
              </p>

              <p>
                Don't wait for the lightning strike. Build your strength one rep at a time. The compound interest of consistent effort will surprise you with how powerful it becomes.
              </p>

              <p>
                Trust the process. Show up. Do the work.
              </p>

              <p>
                Your future self—and your future deadlift—will thank you.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Log2;
