
import React from "react";
import LogSection from "../LogSection";
import BlockQuote from "../elements/BlockQuote";
import BorderedText from "../elements/BorderedText";
import HighlightedBox from "../elements/HighlightedBox";
import KeyPoint from "../elements/KeyPoint";
import ListContainer from "../elements/ListContainer";

const TheDriftSection: React.FC = () => {
  return (
    <LogSection id="section-2" title="The Drift">
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        At first, the metric is a mirror — it reflects the mission. Clean, focused, and true.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        But over time, something shifts. Quietly. Gradually. The mirror warps. And without noticing, we begin steering toward the reflection instead of the road.
      </p>
      
      <KeyPoint>
        This is the Drift.
      </KeyPoint>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        It doesn't announce itself. It rarely arrives with bad intent. It begins with a goal:
      </p>
      
      <ListContainer>
        <BorderedText>
          Launch the feature by Q4.
        </BorderedText>
        
        <BorderedText>
          Hit 405 on deadlift.
        </BorderedText>
        
        <BorderedText>
          Increase MAUs by 20%.
        </BorderedText>
      </ListContainer>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        Reasonable. Measurable. Actionable. These are the numbers we hold up as evidence that we're making progress — and for a while, they are.
      </p>
      
      <KeyPoint>
        But then: the goal becomes the game.
      </KeyPoint>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        In product, we've seen it time and time again. Shipping becomes more important than solving. Teams crunch to meet a date set quarters ago, long after the user problem has evolved. Metrics chase headlines. Investors want news. Executives want motion. The dashboard glows green while user trust fades red.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        Think of Boeing. In the race to beat Airbus, they needed the 737 Max on runways — fast. Shareholder pressure mounted. Deadlines became immovable. On paper, the metrics looked great: deliveries met, costs controlled. But beneath the numbers, safety systems were skipped, warnings dismissed.
      </p>
      
      <HighlightedBox>
        <p className="text-slate dark:text-slate-200 leading-relaxed">
          Two crashes. Hundreds of lives lost. The drift wasn't just technical — it was cultural. Speed overtook scrutiny. The metric overtook the mission.
        </p>
      </HighlightedBox>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        In strength, the signs are physical — and brutal. Hafthor Björnsson, one of the strongest men in history, returned to powerlifting after two years of boxing. He set his sights on breaking the raw total world record. Big lifts were stacking fast. But recovery lagged behind. He felt the warning signs — tightness, fatigue — but kept pushing.
      </p>
      
      <BlockQuote>
        "I wasn't recovering fully between sessions… not listening to my body, which is silly."
      </BlockQuote>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        Then came the snap. Attempting a 556-pound bench press, his pec tore clean off the bone.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        The drift had found him too: progress misaligned with process, recovery sacrificed to reach a number that no longer served the mission. The result was pain, delay, and a lesson carved in scar tissue.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        The damage isn't just physical. It's psychological. Because when we treat metrics as the mission, missing them feels like failure. And so we hide the truth, inflate success, or worst of all — stop trying.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        The Drift corrodes not through force, but through inversion. It flips process into performance. It turns care into compliance.
      </p>
      
      <KeyPoint>
        And it burns people out.
      </KeyPoint>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        I've worked with brilliant people who could have built anything — but they left, not because they failed, but because the system stopped valuing why they showed up in the first place. When we reduce contribution to a dashboard, we forget the soul behind the keyboard.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        This isn't just anecdotal. Research shows that mission-driven employees are significantly more loyal.
      </p>
      
      <ListContainer>
        <BorderedText borderColor="border-slate/20 dark:border-slate/30">
          A LinkedIn survey found that employees motivated by mission were 54% more likely to stay with their company for five or more years.
        </BorderedText>
        
        <BorderedText borderColor="border-slate/20 dark:border-slate/30">
          Another study revealed that companies engaging employees in purpose-driven programs saw a 52% lower turnover among newer employees.
        </BorderedText>
      </ListContainer>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        So what's the antidote?
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        It's not to ignore metrics. It's to anchor them. To use them as signal, not steering.
      </p>
      
      <HighlightedBox bordered>
        <p className="text-slate dark:text-slate-200 leading-relaxed">
          To build systems that reinforce why we do the work, not just how fast we do it.
        </p>
        <p className="text-slate dark:text-slate-200 leading-relaxed mt-2">
          Because the real goal is not a launch date or a deadlift.
        </p>
        <KeyPoint className="mt-2">
          The real goal is built through the reps, not measured by them.
        </KeyPoint>
      </HighlightedBox>
    </LogSection>
  );
};

export default TheDriftSection;
