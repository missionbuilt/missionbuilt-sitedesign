// Chapter data structure
export interface Resource {
  title: string;
  description: string;
  url: string;
  note: string;
}

export interface Section {
  id: string;
  title: string;
  content: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  slug: string;
  status: "published" | "coming-soon" | "draft";
  publishDate: string;
  heroImage: string;
  authorName: string;
  sections: Section[];
  furtherReading: Resource[];
  wordCount?: number;
  readingTime?: number;
}

// Utility function to calculate reading time (average 200 words per minute)
export const calculateReadingTime = (wordCount: number): number => {
  return Math.max(1, Math.ceil(wordCount / 200));
};

// Utility function to calculate word count from chapter content
export const calculateWordCount = (chapter: Chapter): number => {
  let totalWords = 0;
  
  // Count words in description
  if (chapter.description) {
    totalWords += chapter.description.split(/\s+/).filter(word => word.length > 0).length;
  }
  
  // Count words in all sections
  if (chapter.sections && chapter.sections.length > 0) {
    chapter.sections.forEach(section => {
      if (section.title) {
        totalWords += section.title.split(/\s+/).filter(word => word.length > 0).length;
      }
      if (section.content) {
        totalWords += section.content.split(/\s+/).filter(word => word.length > 0).length;
      }
    });
  }
  
  return totalWords;
};

// Utility function to get dynamic reading time for a chapter
export const getDynamicReadingTime = (chapter: Chapter): number => {
  const wordCount = calculateWordCount(chapter);
  return calculateReadingTime(wordCount);
};

// Chapter data - clean slate
export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Mission Before Metrics",
    description: "Before progress can be measured, purpose must be clarified. This chapter explores how clear, motivating missions outlast vanity metrics — in both lifting and leadership. It draws on military, product, and gym floor lessons to show that true progress begins with alignment to something bigger than the numbers.",
    slug: "mission-before-metrics",
    status: "published",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/ac4df08f-40f2-4cde-a7f2-08a1413e3676.png",
    authorName: "Mike",
    sections: [
      {
        id: "the-mission-is-the-magnet",
        title: "The Mission is the Magnet",
        content: `<p>Before I ever built products, I served in the U.S. Army as an Airborne intelligence sergeant. That experience — of working in service of something larger than myself, of making decisions under pressure with lives on the line — shaped everything that came after. I learned early that mission comes first. Not ego. Not recognition. Mission.</p>

<p>That mindset followed me from the military to cybersecurity, and into leadership roles where the stakes changed but the values stayed the same. Whether it was securing critical systems, helping build Elastic Security, or coaching in the gym, the goal has always been the same: real strength is lifting others.</p>

<p>One of the proudest chapters of my product career was building Endgame. We entered a brutally competitive market — going head-to-head with massive players like McAfee and CrowdStrike — and carved out real ground. Not because we had more money or brand recognition, but because we had something harder to copy: a clear mission. Protect high-value targets from nation-state level attacks. That focus, and the small, fierce team who rallied behind it, made all the difference.</p>

<p>At the heart of it was Nate Fick, a Marine officer turned tech CEO, and later the U.S. Ambassador for Cyberspace and Digital Policy. He led with conviction, clarity, and a deep respect for the mission. In all-hands meetings, Nate would remind us that we were an "elevator asset company" — that if the building burned down, the most important assets could still fit in the elevator. It wasn't the code or the tools. It was the people — the ones who understood the user's mission and had the passion to serve it.</p>

<p>That idea stuck with me. Nate's example reinforced what I learned in uniform: The success is the user's success. Your mission is their mission.</p>

<p><strong>Metrics are the outcome of making your user successful. Yes, we need to measure them. But they are the result of serving the mission — not the reason for it.</strong></p>

<p>There's a moment in every product meeting when the question slides in like it always does: "How will we measure success?"</p>

<p>It's a good question — just not always a good first question.</p>

<p>In lifting, it's the same story. People chase PRs every week like the number on the barbell is the whole point. Add five pounds. Hit record. Post the clip. Repeat.</p>

<p>But metrics without mission? That's just noise. Pressure with no direction. Goals with no guts.</p>

<blockquote>
<p><em>"The weight on the bar isn't the goal — it's the evidence of progress, not the destination."</em></p>
</blockquote>

<p>We've all seen what happens when this mindset takes over. It's not a failure of talent — it's a failure of alignment. Cyberpunk 2077 didn't initially flop because the devs didn't care — far from it. The development team poured years into building something ambitious. But the pressure to hit a holiday launch window — a decision made at the executive level — overrode the mission of delivering a complete, polished experience. The result was a rocky release, millions in refunds, a reputational hit, and a stock crash.</p>

<p>To their credit, the team stuck with it. Years later, after patches and a reimagined DLC, the game has earned back much of the trust it lost — a testament to what happens when talented people are finally given the space to do the work right.</p>

<p>And we've seen what it looks like to protect the mission — even when it means stepping back. Simone Biles did exactly that in front of the entire world at the 2021 Olympics. Under unimaginable pressure, she chose long-term purpose over short-term performance. She knew something was off, and she honored that instinct.</p>

<blockquote>
<p><em>"I have to focus on my mental health… if you don't, then you're not going to enjoy your score and you're not gonna succeed as much as you want to."</em><br>
- Simone Biles</p>
</blockquote>

<p>Her move wasn't retreat — it was leadership. And in time, she returned to competition stronger, on her terms, and more respected than ever. A different kind of comeback — one powered by mission, not metrics.</p>

<p><strong>Success isn't about hitting every metric. It's about refusing to lose yourself trying.</strong></p>

<h3>More Than Just Good Intentions</h3>

<p>Mission-driven isn't a poster in the break room or a bullet in a pitch deck. It's how you move — how you decide, how you show up when it's hard.</p>

<p>In a world that celebrates velocity, mission is quiet. But that doesn't make it weak. Mission gives you clarity when things get blurry and stamina when things get hard.</p>

<p>Take Patagonia. They once ran a campaign telling customers not to buy their jacket unless they truly needed it. Why? Because their values mattered more than their quarterly revenue.</p>

<p>Or SpaceX — aiming at goals that span decades, not quarters. It's not about idolizing companies. It's about recognizing what real mission-alignment looks like when the stakes are high and the timelines are long.</p>

<p>And it pays off. Research shows that people who believe in the purpose behind their work stay longer, burn out less, and deliver more.</p>

<h3>When Metrics Eclipse Meaning</h3>

<p>Let's be clear: metrics matter. But only when they serve the mission — not when they become it.</p>

<p>Here's where teams lose the plot:</p>

<ul>
<li>They ship fast instead of shipping right.</li>
<li>They chase signups instead of learning why users leave.</li>
<li>They brag about launches and ignore long-term usage.</li>
</ul>

<p>When dates drive development, teams start cutting corners. Feedback loops close. Energy fades. You build momentum toward a number — not toward value.</p>

<p>In the gym, this is ego lifting. In product, it's just as risky. It looks like burned-out engineers, brittle systems, and growth that collapses the second you stop pushing it uphill.</p>

<h3>The Fulfillment Flywheel (Powered by Purpose)</h3>

<p>There's a better model. One that's as relevant in combat as it is in code — or in the squat rack.</p>

<p>It's called the OODA Loop: Observe, Orient, Decide, Act. Developed for fighter pilots. Adopted by startups. Powered by clarity.</p>

<p>But here's the catch — without a clear mission, the whole loop spins out.</p>

<table class="w-full border-collapse border border-gray-300 my-6">
<thead>
<tr class="bg-gray-50">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">OODA Stage</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">With Mission-Driven Focus</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Without It</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-medium">Observe</td>
<td class="border border-gray-300 px-4 py-2">You know what matters to watch</td>
<td class="border border-gray-300 px-4 py-2">You collect everything, drowning in noise</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-medium">Orient</td>
<td class="border border-gray-300 px-4 py-2">Purpose helps filter & frame inputs</td>
<td class="border border-gray-300 px-4 py-2">Metrics get over-prioritized, lose big picture</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-medium">Decide</td>
<td class="border border-gray-300 px-4 py-2">Mission becomes a north star for action</td>
<td class="border border-gray-300 px-4 py-2">Risk of chasing vanity wins or short-term gains</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-medium">Act</td>
<td class="border border-gray-300 px-4 py-2">Execution has energy and resolve</td>
<td class="border border-gray-300 px-4 py-2">Actions may be misaligned or half-hearted</td>
</tr>
</tbody>
</table>

<p>In lifting, it's trusting the plan instead of maxing out because you feel good that day. In product, it's waiting to ship because your users aren't ready — even if your OKRs are.</p>

<blockquote>
<p><em>Mission turns chaos into clarity. It makes every rep count. Every release matter. Every decision directional.</em></p>
</blockquote>

<p>This is the real flywheel of fulfillment: Mission fuels clarity. Clarity powers resilience. Resilience drives real progress. And real progress reinforces the mission.</p>

<p>That's the through-line. That's what keeps us going.</p>

<p><strong>Metrics follow. But the mission leads.</strong></p>`
      },
      {
        id: "the-drift",
        title: "The Drift",
        content: `<p>At first, the metric is a mirror — it reflects the mission. Clean, focused, and true. But over time, something shifts. Quietly. Gradually. The mirror warps. And without noticing, we begin steering toward the reflection instead of the road.</p>

<p>This is the Drift.</p>

<p>It doesn't announce itself. It rarely arrives with bad intent. It begins with a goal:</p>

<ul>
<li>Launch the feature by Q4.</li>
<li>Hit 405 on deadlift.</li>
<li>Increase MAUs by 20%.</li>
</ul>

<p>Reasonable. Measurable. Actionable. These are the numbers we hold up as evidence that we're making progress — and for a while, they are.</p>

<p>But then: the goal becomes the game.</p>

<p>In product, we've seen it time and time again. Shipping becomes more important than solving. Teams crunch to meet a date set quarters ago, long after the user problem has evolved. Metrics chase headlines. Investors want news. Executives want motion. The dashboard glows green while user trust fades red.</p>

<p>Think of Boeing. In the race to beat Airbus, they needed the 737 Max on runways — fast. Shareholder pressure mounted. Deadlines became immovable. On paper, the metrics looked great: deliveries met, costs controlled. But beneath the numbers, safety systems were skipped, warnings dismissed. Two crashes. Hundreds of lives lost. The drift wasn't just technical — it was cultural. Speed overtook scrutiny. The metric overtook the mission.</p>

<p>In strength, the signs are physical — and brutal. Hafthor Björnsson, one of the strongest men in history, returned to powerlifting after two years of boxing. He set his sights on breaking the raw total world record. Big lifts were stacking fast. But recovery lagged behind. He felt the warning signs — tightness, fatigue — but kept pushing.</p>

<blockquote>
<p><em>"I wasn't recovering fully between sessions… not listening to my body, which is silly."</em></p>
</blockquote>

<p>Then came the snap. Attempting a 556-pound bench press, his pec tore clean off the bone. The drift had found him too: progress misaligned with process, recovery sacrificed to reach a number that no longer served the mission. The result was pain, delay, and a lesson carved in scar tissue.</p>

<p>The damage isn't just physical. It's psychological. Because when we treat metrics as the mission, missing them feels like failure. And so we hide the truth, inflate success, or worst of all — stop trying.</p>

<p>The Drift corrodes not through force, but through inversion. It flips process into performance. It turns care into compliance.</p>

<p>And it burns people out.</p>

<p>I've worked with brilliant people who could have built anything — but they left, not because they failed, but because the system stopped valuing why they showed up in the first place. When we reduce contribution to a dashboard, we forget the soul behind the keyboard.</p>

<p>This isn't just anecdotal. Research shows that mission-driven employees are significantly more loyal. A LinkedIn survey found that employees motivated by mission were 54% more likely to stay with their company for five or more years. Another study revealed that companies engaging employees in purpose-driven programs saw a 52% lower turnover among newer employees.</p>

<p>So what's the antidote?</p>

<p>It's not to ignore metrics. It's to anchor them. To use them as signal, not steering. To build systems that reinforce why we do the work, not just how fast we do it.</p>

<p>Because the real goal is not a launch date or a deadlift.</p>

<p>The real goal is built through the reps, not measured by them.</p>`
      },
      {
        id: "repetition-with-intention",
        title: "Repetition with Intention",
        content: `<p>You don't get strong by lifting heavy once. You get strong by showing up again. And again. And again.</p>

<p>But if you do the same thing forever, you don't get stronger — you get stuck.</p>

<p>That's the tension of progress: it demands ritual, but it punishes repetition without variation.</p>

<p>Whether in the gym or in product, growth comes through iteration — small, deliberate cycles of effort. You log your training. You tweak your form. You try a new tempo. In software, you ship. You measure. You talk to the user. You try again. The process isn't glamorous — but it's generative.</p>

<h3>Rituals compound. Rules confine.</h3>

<p>A rule says "do this." A ritual says "do this because it matters." One is brittle. The other bends with you.</p>

<p>Agile, for example, isn't magic. It's just a set of rituals. Daily standups, retros, demos, sprints — all meant to create rhythm and reflection. But rituals only work when they're anchored in meaning and adapted to context. If your team treats retros like checkbox theater, then you're not iterating — you're just looping. And if your standup sounds like "I did stuff, I'll do stuff, no blockers," you've got a ritual without reason.</p>

<p>The same failure shows up in the gym. People find a powerlifting program online and follow it to the letter, even when it doesn't fit their recovery, their age, their job, their life. They wonder why they plateau — or get hurt. It's because they forgot the principle beneath the plan.</p>

<p>That's where most systems fail: not because the framework is flawed, but because the user is forgotten. They're treated like an input to a method, instead of the reason for its existence.</p>

<p>Let's be honest: there's no shortage of books telling you how to do things. And yes — here we are, writing another one.</p>

<p>But this isn't a blueprint. It's a philosophy. The implementation is on you.</p>

<p>What works for one team, one lifter, one body, won't work for another. That's not failure — that's reality.</p>

<p>Stefi Cohen didn't become a record-breaking lifter by blindly following a single powerlifting template. Her training evolved through experimentation: strength phases, hypertrophy cycles, hybrid athletic blocks. She didn't just lift heavy — she studied her feedback, varied her stimuli, and rewrote her rituals to fit her mission. Progress didn't come from rigidity. It came from rhythm and reinvention.</p>

<p>In product, that same spirit of experimentation lives in hack weeks — short, sacred breaks from routine where teams can stretch in new directions.</p>

<p>Atlassian, Spotify, and Elastic have all embraced this. At Elastic, hack weeks became a celebrated ritual — not just for innovation, but for joy. Engineers got to break free from roadmap gravity and chase ideas that didn't need to justify themselves in Jira. Some of Elastic Security's most creative features — including internal workflow improvements, experimental visualizations, and early prototypes of user-requested tooling — were born not in sprint planning, but in that carved-out chaos. Sometimes, the best way to realign with the mission is to deliberately step outside it.</p>

<p>Rituals work when they're shaped by the user, not imposed on them. They're tools — not commandments.</p>

<p>And when they're working, you feel it: not just in output, but in outlook. A team that trusts its rituals doesn't need micromanagement. A lifter that trusts their program doesn't need motivation hacks. The rhythm carries you. The meaning sustains you.</p>

<p>But rituals aren't static.</p>

<p>They must flex to your fatigue. They must bend to your bandwidth. They must evolve — not just to avoid boredom, but to stay honest with the mission. Same input, same outcome. If the goal has changed, so must the reps.</p>

<p>That's what separates the lifter who grows from the one who stalls. That's what separates the product team that adapts from the one that burns out.</p>

<p>Because if the mission is the magnet — rituals are the rails.</p>

<p>They don't tell you where to go. They keep you from sliding off the path while you find it.</p>

<p>Rituals give you direction.</p>

<p>But progress? That comes from the work itself — the grind, the reps, the effort no one applauds.</p>`
      },
      {
        id: "the-work-becomes-the-win",
        title: "The Work Becomes the Win",
        content: `<p>At some point, the reps stop being something you have to do. They just become something you do.</p>

<p>You stop chasing motivation and start trusting momentum. You stop asking when it gets easy and start asking how to keep showing up.</p>

<p>And that's the shift — not just in the gym or in your sprint board, but in your mindset. You lift because you care. You build because it matters. Because you love it.</p>

<p>It's not about PRs or product launches. It's about what they represent: The hours you logged. The patterns you learned. The people you helped.</p>

<p>That's what it means to be mission built.</p>

<p>You're not doing it for the spotlight. You're doing it because you've seen the power of the process — and you're not walking away from it.</p>

<p>Progress doesn't shout — it stacks.</p>

<p>One quiet rep at a time.</p>`
      }
    ],
    furtherReading: []
  },
  {
    id: 5,
    title: "Progress Isn't Pretty",
    description: "It's tempting to chase polished outcomes — but real growth looks messy. This chapter reframes failure, soreness, and setbacks as essential signs of pursuit. From missed PRs to product pivots, it's all part of the mission.",
    slug: "progress-isnt-pretty",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 6,
    title: "The Mission Demands Recovery",
    description: "High performance can't be sustained without strategic rest. Just like training cycles include deload weeks, leadership must include space to reset. This chapter explores burnout, recovery rhythms, and how stillness fuels strength.",
    slug: "the-mission-demands-recovery",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 7,
    title: "Train the Engine, Not Just the Output",
    description: "Don't just chase flashy features or max lifts — build the engine underneath. This chapter will cover foundational systems thinking, aerobic capacity, platform architecture, and the quiet capabilities that make everything else possible.",
    slug: "train-the-engine-not-just-the-output",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 8,
    title: "Decisions Are Made Under Load",
    description: "Stress reveals the truth — in your form, your product, and your team. From crisis decision-making to heavy triples, this chapter explores how clarity, composure, and character are tested under pressure.",
    slug: "decisions-are-made-under-load",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 9,
    title: "Ship It Like You Show Up",
    description: "Great teams ship with the same integrity they train with. This chapter draws a line between effort in the gym and excellence in execution — showing how preparation, not perfection, defines professional momentum.",
    slug: "ship-it-like-you-show-up",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 10,
    title: "The Team Is the Tool",
    description: "No matter how skilled you are, you're only as strong as your squad. In lifting and in leadership, collaboration compounds results. This chapter will emphasize humility, trust, and the compound power of working in sync.",
    slug: "the-team-is-the-tool",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 11,
    title: "Strong Enough to Listen",
    description: "Listening is a strength skill. Whether you're spotting a lift or guiding a product, hearing others — really hearing them — is what separates amateurs from pros. This chapter explores user research, active listening, and feedback loops from the bar to the boardroom.",
    slug: "strong-enough-to-listen",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 12,
    title: "The Weight Is Real. Own It.",
    description: "Responsibility isn't a burden — it's the privilege of those strong enough to carry it. This chapter dives into leadership accountability, from PR mishandling to platform failures, and reminds us that owning the weight is part of the mission.",
    slug: "the-weight-is-real-own-it",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  },
  {
    id: 13,
    title: "Giving a Shit Works",
    description: "The secret ingredient isn't talent. It's care. This closing chapter highlights anonymized success stories and returns to the core theme: that showing up, giving a shit, and working with heart changes lives — and not just your own.",
    slug: "giving-a-shit-works",
    status: "draft",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    authorName: "Mike",
    sections: [],
    furtherReading: []
  }
];
