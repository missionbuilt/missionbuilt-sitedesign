import React from "react";
import LogSection from "../LogSection";

const TheDriftSection: React.FC = () => {
  return (
    <LogSection id="section-2" title="The Drift">
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        At first, the metric is a mirror — it reflects the mission. Clean, focused, and true.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        But over time, something shifts. Quietly. Gradually. The mirror warps. And without noticing, we begin steering toward the reflection instead of the road.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed font-semibold">
        This is the Drift.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        It doesn't announce itself. It rarely arrives with bad intent. It begins with a goal:
      </p>
      
      <div className="my-6 space-y-2">
        <p className="text-slate dark:text-slate-200 leading-relaxed pl-4 border-l-2 border-army">
          Launch the feature by Q4.
        </p>
        
        <p className="text-slate dark:text-slate-200 leading-relaxed pl-4 border-l-2 border-army">
          Hit 405 on deadlift.
        </p>
        
        <p className="text-slate dark:text-slate-200 leading-relaxed pl-4 border-l-2 border-army">
          Increase MAUs by 20%.
        </p>
      </div>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        Reasonable. Measurable. Actionable. These are the numbers we hold up as evidence that we're making progress — and for a while, they are.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed font-semibold">
        But then: the goal becomes the game.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        In product, we've seen it time and time again. Shipping becomes more important than solving. Teams crunch to meet a date set quarters ago, long after the user problem has evolved. Metrics chase headlines. Investors want news. Executives want motion. The dashboard glows green while user trust fades red.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        Think of Boeing. In the race to beat Airbus, they needed the 737 Max on runways — fast. Shareholder pressure mounted. Deadlines became immovable. On paper, the metrics looked great: deliveries met, costs controlled. But beneath the numbers, safety systems were skipped, warnings dismissed.
      </p>
      
      <div className="my-6 bg-slate/5 dark:bg-slate/10 p-4 rounded-md">
        <p className="text-slate dark:text-slate-200 leading-relaxed">
          Two crashes. Hundreds of lives lost. The drift wasn't just technical — it was cultural. Speed overtook scrutiny. The metric overtook the mission.
        </p>
      </div>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        In strength, the signs are physical — and brutal. Hafthor Björnsson, one of the strongest men in history, returned to powerlifting after two years of boxing. He set his sights on breaking the raw total world record. Big lifts were stacking fast. But recovery lagged behind. He felt the warning signs — tightness, fatigue — but kept pushing.
      </p>
      
      <div className="my-4 text-center">
        <p className="text-slate dark:text-slate-300 italic">
          "I wasn't recovering fully between sessions… not listening to my body, which is silly."
        </p>
      </div>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        Then came the snap. Attempting a 556-pound bench press, his pec tore clean off the bone.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        The drift had found him too: progress misaligned with process, recovery sacrificed to reach a number that no longer serves the mission. The result was pain, delay, and a lesson carved in scar tissue.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        The damage isn't just physical. It's psychological. Because when we treat metrics as the mission, missing them feels like failure. And so we hide the truth, inflate success, or worst of all — stop trying.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        The Drift corrodes not through force, but through inversion. It flips process into performance. It turns care into compliance.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed font-semibold">
        And it burns people out.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        I've worked with brilliant people who could have built anything — but they left, not because they failed, but because the system stopped valuing why they showed up in the first place. When we reduce contribution to a dashboard, we forget the soul behind the keyboard.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        This isn't just anecdotal. Research shows that mission-driven employees are significantly more loyal.
      </p>
      
      <div className="my-4 space-y-2">
        <p className="text-slate dark:text-slate-200 leading-relaxed pl-4 border-l-2 border-slate/20 dark:border-slate/30">
          A LinkedIn survey found that employees motivated by mission were 54% more likely to stay with their company for five or more years.
        </p>
        
        <p className="text-slate dark:text-slate-200 leading-relaxed pl-4 border-l-2 border-slate/20 dark:border-slate/30">
          Another study revealed that companies engaging employees in purpose-driven programs saw a 52% lower turnover among newer employees.
        </p>
      </div>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        So what's the antidote?
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        It's not to ignore metrics. It's to anchor them. To use them as signal, not steering.
      </p>
      
      <div className="my-6 p-5 bg-slate/5 dark:bg-slate/10 rounded-lg border-l-4 border-army">
        <p className="text-slate dark:text-slate-200 leading-relaxed">
          To build systems that reinforce why we do the work, not just how fast we do it.
        </p>
        <p className="text-slate dark:text-slate-200 leading-relaxed mt-2">
          Because the real goal is not a launch date or a deadlift.
        </p>
        <p className="text-slate dark:text-slate-200 leading-relaxed font-semibold mt-2">
          The real goal is built through the reps, not measured by them.
        </p>
      </div>
    </LogSection>
  );
};

export default TheDriftSection;
