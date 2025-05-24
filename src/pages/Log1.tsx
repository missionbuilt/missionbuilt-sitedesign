
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getLogById } from "@/data/logs-data";

const Log1 = () => {
  const logData = getLogById(1);

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
                In the world of product development, we often get caught up in metrics. MAUs, DAUs, conversion rates, retention curves—these numbers become our north star, our daily obsession. But here's what I've learned after years of building products: <strong>success isn't the dashboard—it's the user's outcome.</strong>
              </p>

              <h2>The Dashboard Trap</h2>
              <p>
                I remember the first time I watched a product manager present their monthly review. Slide after slide of beautiful charts, all trending upward. The team was celebrating. But when I asked a simple question—"What mission are our users trying to accomplish, and are we helping them win?"—the room went quiet.
              </p>

              <p>
                We had optimized for metrics, not missions. We were measuring engagement instead of enablement. We knew how long people stayed on our platform, but we had no idea if we were actually making their lives better.
              </p>

              <h2>The User Mission Method</h2>
              <p>
                This realization led me to develop what I call the User Mission Method. It's simple in concept but profound in practice:
              </p>

              <ol>
                <li><strong>Identify the Mission:</strong> What is your user actually trying to accomplish? Not what they're doing in your app, but what they're trying to achieve in their life or work.</li>
                <li><strong>Map the Journey:</strong> What are all the steps, obstacles, and pain points between where they are and mission success?</li>
                <li><strong>Remove Friction:</strong> How can you eliminate, reduce, or smooth every barrier in their path?</li>
                <li><strong>Measure Mission Success:</strong> Track how many users actually accomplish their mission, not just how they engage with your features.</li>
              </ol>

              <h2>From Metrics to Missions</h2>
              <p>
                When you shift from metrics-first to mission-first thinking, everything changes. Your roadmap becomes clearer. Your feature decisions become obvious. Your team becomes aligned around something that actually matters.
              </p>

              <p>
                The metrics don't disappear—they become supporting actors instead of the star of the show. You still track engagement, but you understand it as a means to an end, not the end itself.
              </p>

              <h2>The Compound Effect</h2>
              <p>
                Here's the beautiful irony: when you focus on mission success instead of vanity metrics, your actual business metrics improve. Happy, successful users become loyal advocates. They stick around longer, refer more people, and provide clearer feedback.
              </p>

              <p>
                It's like strength training. You don't get stronger by staring at the weight on the bar—you get stronger by focusing on perfect form, consistent progression, and showing up every day. The numbers follow the fundamentals, not the other way around.
              </p>

              <h2>Your Next Rep</h2>
              <p>
                If you take one thing from this log, let it be this: <strong>the next time you're in a product meeting, ask about the mission before you ask about the metrics.</strong>
              </p>

              <p>
                What mission are your users trying to accomplish? Are you helping them win? These questions will cut through the noise and point you toward what actually matters.
              </p>

              <p>
                Because at the end of the day, users don't care about your dashboard. They care about their mission. And if you help them succeed, everything else falls into place.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Log1;
