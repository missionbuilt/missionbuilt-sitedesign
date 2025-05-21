
import React from "react";
import LogSection from "../LogSection";
import BlockQuote from "../elements/BlockQuote";
import BorderedText from "../elements/BorderedText";
import HighlightedBox from "../elements/HighlightedBox";
import KeyPoint from "../elements/KeyPoint";
import ListContainer from "../elements/ListContainer";

const RitualsOverRulesSection: React.FC = () => {
  return (
    <LogSection id="section-3" title="Rituals Over Rules">
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        You don't get strong by lifting heavy once.
      </p>
      
      <BorderedText>
        You get strong by showing up again. And again. And again.
      </BorderedText>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        But if you do the same thing forever, you don't get stronger — you get stuck.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        That's the tension of progress: it demands ritual, but it punishes repetition without variation.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        Whether in the gym or in product, growth comes through iteration — small, deliberate cycles of effort. You log your training. You tweak your form. You try a new tempo. In software, you ship. You measure. You talk to the user. You try again. The process isn't glamorous — but it's generative.
      </p>
      
      <KeyPoint>
        Rituals compound. Rules confine.
      </KeyPoint>
      
      <ListContainer>
        <BorderedText>
          A rule says "do this."
        </BorderedText>
        
        <BorderedText>
          A ritual says "do this because it matters."
        </BorderedText>
        
        <BorderedText>
          One is brittle. The other bends with you.
        </BorderedText>
      </ListContainer>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        Agile, for example, isn't magic. It's just a set of rituals. Daily standups, retros, demos, sprints — all meant to create rhythm and reflection. But rituals only work when they're anchored in meaning and adapted to context. If your team treats retros like checkbox theater, then you're not iterating — you're just looping. And if your standup sounds like "I did stuff, I'll do stuff, no blockers," you've got a ritual without reason.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        The same failure shows up in the gym. People find a powerlifting program online and follow it to the letter, even when it doesn't fit their recovery, their age, their job, their life. They wonder why they plateau — or get hurt. It's because they forgot the principle beneath the plan.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        That's where most systems fail: not because the framework is flawed, but because the user is forgotten. They're treated like an input to a method, instead of the reason for its existence.
      </p>

      <HighlightedBox>
        <p className="text-slate dark:text-slate-200 leading-relaxed">
          Let's be honest: there's no shortage of books telling you how to do things.
        </p>
        
        <p className="text-slate dark:text-slate-200 leading-relaxed italic mt-2">
          And yes — here we are, writing another one.
        </p>
        
        <p className="text-slate dark:text-slate-200 leading-relaxed mt-2">
          But this isn't a blueprint. It's a philosophy.
        </p>
        
        <p className="text-slate dark:text-slate-200 leading-relaxed italic mt-2">
          The implementation is on you.
        </p>
      </HighlightedBox>

      <p className="text-slate dark:text-slate-200 leading-relaxed">
        What works for one team, one lifter, one body, won't work for another. That's not failure — that's reality.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        Stefi Cohen didn't become a record-breaking lifter by blindly following a single powerlifting template. Her training evolved through experimentation: strength phases, hypertrophy cycles, hybrid athletic blocks. She didn't just lift heavy — she studied her feedback, varied her stimuli, and rewrote her rituals to fit her mission.
      </p>
      
      <BorderedText borderColor="border-slate/20 dark:border-slate/30" className="italic">
        Progress didn't come from rigidity. It came from rhythm and reinvention.
      </BorderedText>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        In product, that same spirit of experimentation lives in hack weeks — short, sacred breaks from routine where teams can stretch in new directions.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        Atlassian, Spotify, and Elastic have all embraced this. At Elastic, hack weeks became a celebrated ritual — not just for innovation, but for joy. Engineers got to break free from roadmap gravity and chase ideas that didn't need to justify themselves in Jira. Some of Elastic Security's most creative features — including internal workflow improvements, experimental visualizations, and early prototypes of user-requested tooling — were born not in sprint planning, but in that carved-out chaos.
      </p>
      
      <BorderedText>
        Sometimes, the best way to realign with the mission is to deliberately step outside it.
      </BorderedText>
      
      <HighlightedBox bordered>
        <p className="text-slate dark:text-slate-200 leading-relaxed">
          Rituals work when they're shaped by the user, not imposed on them.
        </p>
        <p className="text-slate dark:text-slate-200 leading-relaxed mt-2">
          They're tools — not commandments.
        </p>
      </HighlightedBox>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        And when they're working, you feel it: not just in output, but in outlook. A team that trusts its rituals doesn't need micromanagement. A lifter that trusts their program doesn't need motivation hacks. The rhythm carries you. The meaning sustains you.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        But rituals aren't static.
      </p>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        They must flex to your fatigue. They must bend to your bandwidth. They must evolve — not just to avoid boredom, but to stay honest with the mission.
      </p>
      
      <BorderedText borderColor="border-slate/20 dark:border-slate/30">
        Same input, same outcome. If the goal has changed, so must the reps.
      </BorderedText>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        That's what separates the lifter who grows from the one who stalls.
      </p>
      
      <BorderedText borderColor="border-slate/20 dark:border-slate/30" className="italic">
        That's what separates the product team that adapts from the one that burns out.
      </BorderedText>
      
      <ListContainer>
        <p className="text-slate dark:text-slate-200 leading-relaxed">
          Because if the mission is the magnet —
        </p>
        
        <p className="text-slate dark:text-slate-200 leading-relaxed ml-4">
          rituals are the rails.
        </p>
        
        <p className="text-slate dark:text-slate-200 leading-relaxed">
          They don't tell you where to go.
        </p>
        
        <p className="text-slate dark:text-slate-200 leading-relaxed ml-4">
          They keep you from sliding off the path while you find it.
        </p>
      </ListContainer>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        Rituals give you direction.
      </p>
      
      <BlockQuote className="text-lg text-center font-semibold text-army dark:text-army my-6">
        But progress? That comes from the work itself — the grind, the reps, the effort no one applauds.
      </BlockQuote>
      
      <p className="text-slate dark:text-slate-200 leading-relaxed">
        In the next chapter, we talk about how strength is built — and why it doesn't always look like progress.
      </p>
    </LogSection>
  );
};

export default RitualsOverRulesSection;
