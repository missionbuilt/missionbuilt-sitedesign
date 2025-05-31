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
      }
    ],
    furtherReading: [
      {
        title: "CD Projekt Red Stock Drops After Buggy, Messy 'Cyberpunk 2077' Launch",
        description: "A case study in date-driven shipping that sacrificed long-term trust for short-term metrics.",
        url: "https://www.forbes.com/sites/davidthier/2020/12/11/cd-projekt-red-stock-drops-after-buggy-messy-cyberpunk-2077-launch/",
        note: "Cyberpunk 2077 Launch & CD Projekt Red"
      },
      {
        title: "What Really Brought Down the Boeing 737 Max?",
        description: "How engineering culture and metric pressures at Boeing overtook the company's safety-driven mission — with catastrophic results.",
        url: "https://www.nytimes.com/2019/09/18/magazine/boeing-737-max-crashes.html",
        note: "Case Study: Product & Organizational Drift"
      },
      {
        title: "Probably My Biggest Mistake - Hafthor Björnsson on Pec Injury",
        description: "A personal reflection on chasing numbers too hard — and paying the price with injury.",
        url: "https://www.essentiallysports.com/bodybuilding-news-probably-my-biggest-mistake-months-after-a-horrifying-pec-tear-while-bench-pressing-strongman-legend-makes-a-candid-confession-about-his-injury-hafthor-bjornsson/",
        note: "Individual Drift: Strength and Misalignment"
      },
      {
        title: "Game of Thrones Star Hafthor Björnsson Suffers Nasty Injury",
        description: "News coverage providing details and public reaction to the injury — reinforces the story's cautionary angle.",
        url: "https://en.as.com/entertainment/game-of-thrones-star-hafthor-bjornsson-suffers-nasty-injury-while-bench-pressing-n/",
        note: "Individual Drift: Strength and Misalignment"
      },
      {
        title: "\"I Don't Have to Be Fine\": Everything Simone Biles Has Said About Mental Health",
        description: "An athlete choosing alignment over achievement — and sparking a global conversation.",
        url: "https://people.com/sports/everything-simone-biles-has-said-about-mental-health/",
        note: "Simone Biles & Mission-Aligned Decision-Making"
      },
      {
        title: "Don't Buy This Jacket",
        description: "Iconic ad campaign where brand values overrode short-term sales incentives.",
        url: "https://www.patagonia.com/stories/dont-buy-this-jacket/story-18615.html",
        note: "Patagonia & Purpose-Driven Brand Behavior"
      },
      {
        title: "The Business Case for Purpose",
        description: "Purpose-driven companies see higher retention, satisfaction, and performance.",
        url: "https://hbr.org/sponsored/2016/04/the-business-case-for-purpose",
        note: "Research on Purpose & Fulfillment"
      },
      {
        title: "2016 Workforce Purpose Index",
        description: "54% of purpose-driven employees are more likely to stay 5+ years.",
        url: "https://www.imperative.com/resource/2016-workforce-purpose-index",
        note: "Research on Purpose & Fulfillment"
      },
      {
        title: "Purpose: Shifting from Why to How",
        description: "A roadmap for operationalizing purpose across the org.",
        url: "https://www.mckinsey.com/business-functions/people-and-organizational-performance/our-insights/purpose-shifting-from-why-to-how",
        note: "Research on Purpose & Fulfillment"
      },
      {
        title: "Improving Employee Retention",
        description: "Research-based strategies for employee retention, including mission alignment and culture as key levers.",
        url: "https://guidehouse.com/-/media/new-library/industries/defense-and-security/documents/2023/gh-161-wp-improving-employee-retention.pdf",
        note: "Research: Purpose and Retention"
      },
      {
        title: "Talent Retention Study",
        description: "Mission-driven workers are significantly more likely to stay long-term — supports your thesis with compelling data.",
        url: "https://benevity.com/talent-retention-study",
        note: "Research: Purpose and Retention"
      },
      {
        title: "Stefi Cohen's Hybrid Methodology",
        description: "An elite athlete's fusion of structure and adaptation in strength programming.",
        url: "https://www.hybridperformancemethod.com/",
        note: "Rituals, Adaptation, and Innovation"
      },
      {
        title: "Agile Retrospectives: Making Good Teams Great",
        description: "A guide to turning recurring team reviews into meaningful improvement rituals.",
        url: "https://www.agilealliance.org/resources/books/agile-retrospectives-making-good-teams-great/",
        note: "Rituals, Adaptation, and Innovation"
      },
      {
        title: "Atlassian ShipIt",
        description: "A structured ritual encouraging innovation through autonomy and creative freedom.",
        url: "https://www.atlassian.com/company/shipit",
        note: "Rituals, Adaptation, and Innovation"
      },
      {
        title: "Scaling Agile @ Spotify",
        description: "How Spotify built agility and creativity into team rituals — not rigid processes.",
        url: "https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf",
        note: "Rituals, Adaptation, and Innovation"
      },
      {
        title: "OODA Loop",
        description: "Military strategy model focused on Observation, Orientation, Decision, and Action. Useful for product and performance under uncertainty.",
        url: "https://en.wikipedia.org/wiki/OODA_loop",
        note: "Strategic Framing: The OODA Loop"
      }
    ]
  },
  {
    id: 2,
    title: "Built Through Reps",
    description: "Mastery doesn't happen in a moment — it's forged through consistent, intentional repetition. This chapter examines how showing up, rep after rep, creates strength and strategy alike. Featuring parallels between building great software and building great squats, it's a case for doing the work — especially when it's boring.",
    slug: "built-through-reps",
    status: "published",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/59ceb206-ccca-4023-b0a3-a37e2a5455f8.png",
    authorName: "Mike",
    sections: [
      {
        id: "the-myth-of-overnight-success",
        title: "The Myth of Overnight Success",
        content: `<p>We've all heard the stories. The product that "took off overnight." The lifter who casually pulls four plates like they've always been able to. The founder in a garage who changes the world with a single keynote.</p>

<p>It's tempting to believe that mastery happens like that — in a flash. But that's not really how it works.</p>

<p>Take the iPhone. The 2007 reveal made it feel like it dropped from the sky fully formed. But behind that moment were years of trial and error. Touchscreens that didn't quite work. Software that crashed mid-demo. A mountain of prototypes that never saw the light of day. The final product wasn't a stroke of brilliance — it was the result of relentless iteration.</p>

<p>Same with Instagram. What looked like an overnight success was actually the second version of a too-close-to-Foursquare check-in app called Burbn. The team just kept listening, trimming, trying again. One update at a time.</p>

<p>And that big deadlift on your feed? Probably not magic. More likely: a hundred quiet sessions, some of them rough. A lot of small choices to show up, tweak form, trust the program.</p>

<p>We love the idea of sparks — fast wins, big leaps, sudden breakthroughs. But progress usually doesn't feel like that. Most of the time, it feels a lot more like repetition.</p>

<p>The engineer fixing the same piece of code — again. The founder rewriting their pitch for the fifth time. The lifter doing the same warm-up cues every session, no matter the weight.</p>

<p>It's not flashy. But it adds up.</p>

<p>That's part of what makes the first few months — or the first year — so exhilarating. In the gym, you make gains almost every week. In a startup, your product evolves daily. Everything feels fast, and the feedback is loud.</p>

<p>But then you hit the plateau.</p>

<p>The easy wins dry up. Strength doesn't come as quickly. Users get harder to surprise. Suddenly, it's not about chasing sparks anymore — it's about showing up and pushing through.</p>

<p>This is where the real work begins.</p>

<p>In lifting, that means grinding through the middle — not maxing out, but mastering the basics under load. In product, it's navigating the shift from scrappy innovation to enterprise-grade reliability. Less fanfare, more focus.</p>

<p>That's the part people don't always talk about — and the part that actually defines mastery.</p>

<p>It's not just about adding more weight or shipping more features. It's about learning to hone your form.</p>

<p>In lifting, that might mean dialing in your brace, fixing a subtle shift in your squat, or finally feeling your lats engage in a deadlift. In product, it's refining an initiative until it truly solves the right problem — not just adds to the roadmap.</p>

<p>You start to realize: Reps aren't just about volume. They're about attention.</p>

<p>That's what makes progress sustainable.</p>

<p>And that's what Mission Built is really about — building better products, one rep at a time.</p>`
      },
      {
        id: "repetition-is-not-redundancy",
        title: "Repetition Is Not Redundancy",
        content: `<p>In Section 1, we looked at the myth of overnight success — how real strength, in the gym or in product, is built through showing up again and again. But not all reps are created equal. The real magic isn't just in the repetition — it's in how you use it.</p>

<p>Not all reps count the same.</p>

<p>Anyone who's coasted through a gym session, just moving weight, knows the difference. One set burns time. Another builds awareness, precision, and strength — even if the numbers don't change.</p>

<p>The same is true in product.</p>

<p>Repetition isn't redundant when it's intentional. When it's used to test assumptions, refine interfaces, tune performance, or build something just a little closer to what users actually need. That's the kind of rep that moves things forward.</p>

<p>But repetition alone isn't enough — variation is what makes repetition transformative.</p>

<p>As Dr. Mike Israetel, co-founder of Renaissance Periodization, teaches:</p>

<blockquote>
<p><em>"Training works best when structured into intentional blocks that emphasize different goals. In hypertrophy-focused blocks, lifters increase volume over time — guided by principles like Minimum Effective Volume (MEV), Maximum Adaptive Volume (MAV), and Maximum Recoverable Volume (MRV). This structured overload builds muscle while preserving recovery, setting the stage for later strength expression. The concept isn't just about working hard — it's about working smart, within clear, adaptive boundaries."</em><br>
Source: https://drmikeisraetel.com/dr-mike-israetel-mv-mev-mav-mrv-explained/</p>
</blockquote>

<p>In training, we use blocks for different goals: hypertrophy to build muscle, strength to build expression, and deloads to recover and grow. We manipulate movement, load, and tempo to avoid stagnation. A paused bench press, a deficit deadlift, or chains added to a bar — each variation targets a different adaptation, even if the base movement stays the same.</p>

<p>Product is no different.</p>

<p>You might run a block of sprints to achieve a specific outcome — refining onboarding, improving performance, or tackling tech debt. Then shift into a new block with a new goal. Like training, it takes enough intentionality to complete a cycle, maybe one, two, or three sprints, before varying the focus. Progress comes not from flailing in every direction, but from focused variation over time.</p>

<p>And just like strength doesn't grow without tension, product insight doesn't grow without diverse input.</p>

<p>You can't just loop with your own team forever. Sometimes you have to stretch — to talk to sales, to customers, to analysts, to skeptics. Even when it's uncomfortable. Especially when it is.</p>

<p>This is where The Medici Group gets it right: innovation happens when diverse perspectives collide.</p>

<p>As Frans Johansson puts it in The Medici Effect:</p>

<blockquote>
<p><em>"When you step into an intersection of fields, disciplines, or cultures, you can combine existing concepts into a large number of extraordinary new ideas."</em></p>
</blockquote>

<p>In the gym, that might mean lifting with people stronger or different than you. In product, it means bringing in voices from outside your echo chamber — support calls, sales objections, the person who almost churned.</p>

<p>Reps alone build endurance. Smart variation builds power.</p>

<p>This is how you break through the plateau — not by abandoning the reps, but by evolving them.</p>`
      },
      {
        id: "when-the-spark-fades",
        title: "When the Spark Fades",
        content: `<p>The first reps are easy — not physically, but emotionally. You're fired up. Everything's new. Progress is loud and obvious.</p>

<p>But what happens after the rush?</p>

<p>In lifting, it's the long middle. The early PRs stop coming. Your form stalls. You show up, grind through the same sets, and wonder if you're actually moving forward. You're not always chasing your one-rep max. And you shouldn't be. Strength isn't built by living at your limit — it's built in the space between peaks, when you train with intention and recover with discipline.</p>

<p>In product, it's the same. You can't always be doing the flashy, innovative thing. Sometimes the most important work is foundational — fixing backend debt, improving accessibility, tightening up performance. The kind of work that creates capacity for brilliance later.</p>

<p>And for many, this is where the wheels come off.</p>

<p>Because motivation — that spark — is unreliable. It's not designed for the long haul. And it doesn't care about your goals.</p>

<p>That's why systems matter more than sparks.</p>

<p>Systems are how you keep showing up when the dopamine dies down. Morning routines. Logbooks. Standups. Progress reviews. They don't need to be rigid. But they do need to be real. Reps don't get done by accident.</p>

<p>You don't need hype — you need structure.</p>

<p>In training, that structure might be a coach, a program, a calendar alert that says "get under the bar." In product, it might be a rhythm of sprint planning, async demos, or check-ins with customers. Externalized accountability is often the only thing that keeps momentum moving.</p>

<p>James Clear — author of the bestselling book Atomic Habits, known for his work on behavior change and habit formation — wrote:</p>

<blockquote>
<p><em>"You do not rise to the level of your goals. You fall to the level of your systems."</em></p>
</blockquote>

<p>The work still has to be done. But when your environment supports your actions, it gets done more often.</p>

<p>And here's the quiet truth: The people who make the biggest progress aren't usually the most intense — they're the most consistent.</p>

<p>They build when no one's watching. They train when it's not fun. They keep caring — even when the spark is gone.</p>

<p>But what if you need to find the spark again?</p>

<p>One of the fastest ways to reignite your drive is to reconnect with the people you're building for. Talk to your users — especially the ones who aren't shouting. You might think the work you're doing isn't flashy, but somewhere out there, someone is craving exactly what you're building.</p>

<p>Stability. Accessibility. Visibility. These aren't buzzwords — they're lifelines for users with real problems. Find them. Listen to them. Let them lift you up.</p>

<p>Because nothing recharges momentum like hearing someone say: "This made my day better."</p>

<p>And that brings us to the next section: the power of the quiet reps — the multiplier of boring work.</p>`
      },
      {
        id: "the-multiplier-of-boring-work",
        title: "The Multiplier of Boring Work",
        content: `<p>There's a kind of work that doesn't make headlines. No one posts their warm-up sets. No one celebrates shaving 100ms off load time.</p>

<p>But that's the work that wins.</p>

<p>For every PR pulled in competition, there are hundreds of days of grinding behind it — submaximal sets, long pauses, light reps, mental resets. The same is true in product. Every effortless-looking release rests on a foundation of something much deeper: months of planning, iteration, bug-fixing, and late-night Slack threads.</p>

<p>In lifting, it's the mobility work you do alone at 6 a.m. The back-off sets you don't skip. The deload week you take seriously. It doesn't look impressive — but it makes everything else possible.</p>

<p>In product, it's building out role-based access controls — not because it's exciting, but because your biggest customers expect it. It's mapping audit logs across services so your platform isn't a compliance risk anymore. It's the 10th conversation with a user about the same rough edge in the UX. These aren't "big bets," but they're the reason your big bets land.</p>

<p>That's what boring work does: it compounds.</p>

<p>Each rep you don't skip, each ticket you don't shortcut, each problem you refine instead of avoid — it stacks. Quietly. Relentlessly. And over time, it becomes your edge.</p>

<p>You don't need to go viral. You need to be trusted.</p>

<p>And trust is built in the boring work.</p>

<p>The warm-up that prevents injury. The small fix that prevents churn. The five-second improvement that gives a user five minutes back.</p>

<p>This is what separates the strong from the strong enough.</p>

<p>It's not what you do once. It's what you do without applause.</p>

<p>You do it for the growth. For the discipline. For the user whose day you quietly made better. Not for the accolades.</p>

<p>That's what separates long-term success from short-term effort — not glory, but the passion to do the work for its own sake. The features and the gains? They're just symptoms. What matters is the mission that fuels them.</p>

<p>That's why I'm so passionate about product management — and about lifting. Because the best PMs and the best lifters don't just show up for themselves. They show up for the team, for the user, for their own growth — not in a selfish way, but in a way that elevates everything and everyone around them.</p>

<p>And if you've made it this far — through the reps, the plateaus, the quiet work — you already know:</p>

<blockquote>
<p><em>This isn't just about shipping or lifting.</em></p>
</blockquote>

<p>It's about becoming the kind of person, or the kind of team, that keeps showing up.</p>

<p>That's the real win. And that's where we end this chapter — not at the peak, but at the foundation.</p>`
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
    furtherReading: [
      {
        title: "No Filter: The Inside Story of Instagram",
        description: "A detailed, behind-the-scenes look at Instagram's transformation from Burbn to a cultural phenomenon.",
        url: "https://en.wikipedia.org/wiki/No_Filter:_The_Inside_Story_of_Instagram",
        note: "The Hidden Grind Behind Success"
      },
      {
        title: "How Steve Jobs Faked His Way Through Unveiling the iPhone",
        description: "The legendary 2007 keynote was held together with last-minute fixes — a reminder that polish often hides process.",
        url: "https://nymag.com/intelligencer/2017/01/how-steve-jobs-faked-his-way-through-unveiling-the-iphone.html",
        note: "The Hidden Grind Behind Success"
      },
      {
        title: "Instagram: Early History and Pivot from Burbn",
        description: "A short overview of Instagram's shift from a check-in app to a global visual platform.",
        url: "https://en.wikipedia.org/wiki/Instagram#History",
        note: "The Hidden Grind Behind Success"
      },
      {
        title: "Overcoming Strength Training Plateaus",
        description: "Why strength stalls, how to adjust volume, intensity, and variation to keep progressing.",
        url: "https://www.ironmaster.com/blog/strength-training-plateau/",
        note: "Lifting Progress & Plateaus"
      },
      {
        title: "MV, MEV, MAV, MRV Explained",
        description: "A breakdown of effective training volume concepts, including minimums, maximums, and overreaching thresholds.",
        url: "https://drmikeisraetel.com/dr-mike-israetel-mv-mev-mav-mrv-explained/",
        note: "Lifting Progress & Plateaus"
      },
      {
        title: "Atomic Habits",
        description: "A guide to building systems that support long-term growth: \"You do not rise to the level of your goals. You fall to the level of your systems.\"",
        url: "https://jamesclear.com/atomic-habits",
        note: "Systems, Habits, and Iteration"
      },
      {
        title: "The Compound Effect",
        description: "Details how small actions done consistently lead to exponential outcomes — a key insight for boring but high-leverage work.",
        url: "https://www.thecompoundeffect.com",
        note: "Systems, Habits, and Iteration"
      },
      {
        title: "Grit: The Power of Passion and Perseverance",
        description: "Explores how consistency beats intensity, and why sticking with it matters more than raw talent.",
        url: "https://angeladuckworth.com/grit-book",
        note: "Systems, Habits, and Iteration"
      },
      {
        title: "The Medici Effect",
        description: "On finding creative inspiration in unlikely intersections — a key idea for hybrid thinkers and builders.",
        url: "https://phoscreative.com/articles/the-medici-effect/",
        note: "Systems, Habits, and Iteration"
      },
      {
        title: "Failing Fast: Why It's Essential for Entrepreneurs",
        description: "A reminder that iteration is how we learn — not a sign of failure, but of refinement.",
        url: "https://online.hbs.edu/blog/post/fail-fast",
        note: "Product Development and Iterative Progress"
      },
      {
        title: "Basecamp's Shape Up Method",
        description: "An approach to product work that values thoughtful iteration, foundational improvements, and meaningful user feedback.",
        url: "https://basecamp.com/shapeup",
        note: "Product Development and Iterative Progress"
      },
      {
        title: "Talking to Humans",
        description: "A practical guide to rediscovering momentum by connecting directly with your users — and learning what really matters.",
        url: "https://talkingtohumans.com",
        note: "Product Development and Iterative Progress"
      },
      {
        title: "Is High Quality Software Worth the Cost?",
        description: "Argues that invisible work like refactoring and testing pays off in speed and stability — a product parallel to mobility work and back-off sets in lifting.",
        url: "https://martinfowler.com/articles/is-quality-worth-cost.html",
        note: "Product Development and Iterative Progress"
      }
    ]
  },
  {
    id: 3,
    title: "Rituals Over Rules",
    description: "Systems that scale aren't built on rigid rules — they're powered by meaningful rituals. This chapter explores how intentional, repeatable behaviors unlock both innovation and resilience. Drawing from training cycles, product cadences, and team habits, it makes the case for flexible structure over dogma.",
    slug: "rituals-over-rules",
    status: "published",
    publishDate: "May 29, 2025",
    heroImage: "/lovable-uploads/7d040410-47c5-475b-9715-13dbc1c5e6bf.png",
    authorName: "Mike",
    sections: [
      {
        id: "the-ritual-is-the-rail",
        title: "The Ritual Is the Rail",
        content: `<p>Rituals keep us on track — not by forcing us forward, but by guiding our momentum. Like rails under a train, they don't power the engine, but they make sure we're headed in the right direction. They keep drift from becoming derailment.</p>

<p>In the gym, rituals aren't written on the whiteboard, but everyone knows them. The way you chalk your hands before a heavy lift. The nod from your training partner. The slap on the back before a max attempt. These moments don't make you stronger by themselves — but they signal that it's time to lock in. They tune your mind and body to the work ahead.</p>

<p>In product, rituals shape how we build — and why. A startup might begin with a single weekly sync, focused on shipping a differentiated capability that makes a mark on the market. That urgency, that clarity of purpose, fuels early momentum. But as the company grows, the rituals evolve. Roadmap reviews become more structured. Standups get tighter. You start shipping the "boring" features — the ones that don't win awards, but win hearts. Role-based access control. Data retention workflows. RBAC and audit logging won't make the cover of TechCrunch, but they're what your biggest customers need to trust you.</p>

<p>These shifts aren't a loss of agility — they're a deepening of commitment. The rituals grow because the mission does.</p>

<p>The difference between a rule and a ritual is intention. Rules are imposed. Rituals are earned. A rule says "follow this or else." A ritual says "this is how we move with purpose." When teams stop questioning why they follow a process, it calcifies into dogma. But when the process stays tied to the mission, it adapts. It grows. It stays human.</p>

<p>Elite lifters know this instinctively. Even as their programming changes — higher volume, lower intensity, or a shift from competition prep to recovery — their rituals stay intact. The warmup flow, the music choice, the way they approach the bar. These things evolve, but they never disappear. They guide the body into readiness. They keep the lifter connected to something deeper than the day's numbers.</p>

<p>And that's the point.</p>

<p>You don't need more rules. You need rails that carry you toward the mission — and flex with the turns ahead.</p>

<p>Because if the mission is the magnet, the ritual is the rail — not to restrict your path, but to keep you from drifting when the pressure builds.</p>`
      },
      {
        id: "listen-to-your-signals",
        title: "Listen to Your Signals",
        content: `<p>Rituals only work if you're paying attention.</p>

<p>You can't run the same program forever. Not in the gym. Not in product. Not in life. Progress demands feedback. And feedback starts with listening.</p>

<p>Lifters learn this early. You might show up ready to deadlift heavy — but your grip feels off, your back's tight, your CNS just isn't firing. (CNS: Central Nervous System — the part of your body responsible for strength output, coordination, and neural drive. If it's fatigued, you'll feel it, even if your muscles are technically rested.)</p>

<p>That's not failure. That's information. A smart lifter doesn't abandon the workout — they adjust. They keep the ritual, shift the intensity. Maybe you pause at 70%, maybe you pivot to accessories. Listening doesn't make you weaker. It keeps you in the game longer.</p>

<p>In product teams, the same truth holds: rituals without awareness become liabilities.</p>

<p>You can run the ceremonies — sprint planning, retros, standups — but if you're ignoring signals from your team or your users, you're performing process theater. Burnout doesn't show up in Jira. Disengagement doesn't flash red in a dashboard. You feel it in the delay before someone unmutes. In the tension after a roadmap shift. In the quiet attrition of both teammates and customers.</p>

<p>Nowhere is this more visible than in the game industry's long-standing reliance on crunch time. Late-stage death marches, where teams work 60-, 70-, 80-hour weeks to hit a ship date. Executives cite passion. Teams call it what it is: avoidable. The rituals of "just one more sprint," of all-hands war rooms, of praise for pulling all-nighters — they're treated as signs of commitment, when they're actually signals of failure.</p>

<p>Failure to listen. To plan. To build sustainable systems. Failure to treat the team as human — not just headcount.</p>

<p>This is where product management has a second, often overlooked role.</p>

<p>Yes, product is the voice of the user inside the development team — but product is also the shield of the team against the wrong voices from above. A good PM doesn't just absorb pressure from the top and pass it down. A good PM pushes back. Uses data to say no to date-driven development. Advocates for pacing, not panic. Protects the team's ability to think, breathe, and build well — even when the deadline is loud.</p>

<blockquote>
<p><em>Because our goal isn't to meet an investor's timeline or an executive's forecast. It's to build the best product to solve our user's mission.</em></p>
</blockquote>

<p>And the only way to do that — sustainably, meaningfully, and well — is to listen.</p>

<p>To your body.</p>

<p>To your team.</p>

<p>To your users.</p>

<p>To the mission.</p>`
      },
      {
        id: "change-the-pattern-not-the-practice",
        title: "Change the Pattern, Not the Practice",
        content: `<p>When things stop working, you don't abandon the ritual — you adapt it.</p>

<p>Progress isn't a straight line. It's a cycle of push, plateau, pivot. And when you hit that plateau — when the usual ritual no longer delivers results — it's not a sign to quit. It's a sign to evolve.</p>

<p>In the gym, this happens all the time. You run a successful squat cycle, adding five pounds a week like clockwork. But then you stall. Your knees cave, your speed slows, and the bar starts winning. The answer isn't to scrap the movement. It's to change the pattern. Maybe you shift to pause squats, change your stance, or drop the volume to focus on recovery. The ritual — showing up and squatting — stays. The shape of it changes.</p>

<p>The same holds true in product.</p>

<p>The standup that once helped your team sync becomes a box-checking chore. The planning meeting that used to set priorities now spirals into status updates. That doesn't mean you stop planning. It means you shift how you plan. You move from live check-ins to async threads. You replace calendar fatigue with focused, flexible rituals that match your team's needs — and their current phase of growth.</p>

<p>Rituals that don't evolve become rules. And rules, as we've seen, break people.</p>

<p>This is especially true in globally distributed teams. At Elastic, our workforce spans time zones and continents. We had to learn — early — that rituals built for co-located teams don't translate. Sync meetings at 10 a.m. in California are 7 p.m. in Berlin, and 2:30 a.m. in Sydney. So we changed the pattern.</p>

<p>We moved toward asynchronous rhythms:</p>

<ul>
<li>Key decisions live in documents, not meetings.</li>
<li>Slack threads replace sidebars.</li>
<li>Recorded meetings include transcripts and tagged callouts.</li>
<li>Big calls are followed by quiet time — space for global teammates to reflect, respond, and contribute.</li>
</ul>

<p>We didn't stop collaborating. We just restructured how and when collaboration happens. The ritual of cross-team communication stayed. Its shape changed. And it made space for more voices, not fewer.</p>

<p>What matters isn't how you do it. What matters is that you keep showing up with purpose.</p>

<p>The gym teaches you this without words. You hit a wall. You adjust. You don't abandon the work — you change the pattern.</p>

<p>Because in the end, progress comes from consistent effort, not perfect conditions.</p>

<p>That's the lesson: rituals serve the mission. When they stop serving, reshape them.</p>

<p>Don't confuse rigidity for discipline.</p>

<p>Don't let the form matter more than the function.</p>

<p>(And please — don't treat your favorite product management book like doctrine. Those frameworks weren't written for your team. Your mission was.)</p>

<p>Rituals aren't constraints — they're commitments. But only if we let them evolve. The strongest systems, the longest-lasting teams, the most resilient lifters — all share this in common: they don't cling to routine for routine's sake. They adapt. With intention. With feedback. With mission in mind.</p>`
      }
    ],
    furtherReading: [
      {
        title: "Chalk Up: Rituals That Prepare the Mind and Body",
        description: "Explores how pre-lift rituals like chalking hands and visualization prepare athletes mentally and physically.",
        url: "https://www.elitefts.com/education/pre-workout-ritual-instructions",
        note: "Training Rituals & Mental Preparation"
      },
      {
        title: "Stefi Cohen's Hybrid Training Philosophy",
        description: "Discusses balancing compound and isolation movements, emphasizing adaptability in training.",
        url: "https://www.hybridperformancemethod.com/blog/are-isolation-movements-better-for-muscle-growth",
        note: "Training Rituals & Mental Preparation"
      },
      {
        title: "Autoregulation: Can It Be Beneficial for Every Type of Strength Athlete?",
        description: "Details how lifters adjust training intensity based on daily readiness, promoting flexibility within structured programs.",
        url: "https://barbend.com/autoregulation/",
        note: "Training Rituals & Mental Preparation"
      },
      {
        title: "CNS Fatigue: Symptoms and Recovery Strategies",
        description: "Addresses central nervous system fatigue and strategies for recovery, highlighting the importance of listening to one's body.",
        url: "https://www.strongerbyscience.com/qa/",
        note: "Training Rituals & Mental Preparation"
      },
      {
        title: "What is a Stand-Up Meeting? [+ Expert Tips]",
        description: "Provides guidance on conducting effective stand-up meetings to maintain team alignment.",
        url: "https://www.atlassian.com/agile/scrum/standups",
        note: "Product Rituals, Burnout & Team Evolution"
      },
      {
        title: "Leadership @ Elastic | Kevin Kluge: Distributed for the Better",
        description: "Discusses Elastic's approach to distributed work and maintaining engineering culture.",
        url: "https://www.elastic.co/blog/leadership-elastic-kevin-kluge-distributed-for-the-better",
        note: "Product Rituals, Burnout & Team Evolution"
      },
      {
        title: "How to Collaborate Effectively If Your Team Is Remote",
        description: "Harvard Business Review offers evidence-based strategies for improving communication and trust across distributed teams — reinforcing the importance of intentional, adaptive rituals in asynchronous environments.",
        url: "https://hbr.org/2018/02/how-to-collaborate-effectively-if-your-team-is-remote",
        note: "Product Rituals, Burnout & Team Evolution"
      },
      {
        title: "Shape Up: Stop Running in Circles and Ship Work that Matters",
        description: "Introduces a methodology that emphasizes flexible work cycles over rigid sprints.",
        url: "https://basecamp.com/shapeup",
        note: "Product Rituals, Burnout & Team Evolution"
      },
      {
        title: "Understanding Developer Burnout",
        description: "Breaks down the causes, symptoms, and strategies for preventing developer burnout — with a focus on workload balance, autonomy, and the importance of adaptive team rituals.",
        url: "https://devskiller.com/blog/developer-burnout/",
        note: "Product Rituals, Burnout & Team Evolution"
      },
      {
        title: "The Hidden Power of Workplace Rituals",
        description: "Explores how intentional rituals in the workplace can strengthen psychological safety, enhance purpose, and boost performance.",
        url: "https://hbr.org/2022/08/the-hidden-power-of-workplace-rituals",
        note: "Organizational Culture & Ritual Evolution"
      },
      {
        title: "Crunch Culture: How Game Development Becomes Toxic",
        description: "Investigates the detrimental effects of excessive overtime in the gaming industry, highlighting how passion-driven projects can lead to burnout and decreased quality.",
        url: "https://reporter.rit.edu/6288/tech/crunch-culture-how-game-development-becomes-toxic/",
        note: "Crunch Time & Anti-patterns in Product Culture"
      },
      {
        title: "Red Dead Redemption 2 Exposes the Gaming Industry's Dangerous Addiction to Overtime",
        description: "WIRED investigates the systemic issue of \"crunch culture\" in game development, using Rockstar Games as a focal point. The article highlights how extended overtime, driven by passion and pressure, can lead to long-term burnout and erode product quality.",
        url: "https://www.wired.com/story/red-dead-redemption-2-rockstar-overtime-crunch/",
        note: "Crunch Time & Anti-patterns in Product Culture"
      },
      {
        title: "How Product Leaders Can Learn to Say No",
        description: "Ken Norton, a former Google product leader and GV partner, emphasizes the critical skill of saying \"no\" in product management. He discusses how ambiguity can derail teams and the necessity for PMs to set clear boundaries, even when facing pressure from executives.",
        url: "https://www.bringthedonuts.com/essays/discipline-of-no.html",
        note: "Product Managers as Advocates & Shields"
      }
    ]
  },
  {
    id: 4,
    title: "Feedback is a Superpower",
    description: "Strength grows where feedback flows. This chapter will dig into how lifters and leaders alike depend on real, raw, and regular feedback to improve. Whether it's a bar path breakdown or a postmortem from a launch, feedback is the force multiplier — but only if you're strong enough to seek it.",
    slug: "feedback-is-a-superpower",
    status: "published",
    publishDate: "May 30, 2025",
    heroImage: "/lovable-uploads/a96316c8-c13a-4222-bdaa-b33931f2e996.png",
    authorName: "Mike",
    sections: [
      {
        id: "cues-not-critiques",
        title: "Cues, Not Critiques",
        content: `<p>My mentor Nate Fick used to talk about the power of laser focus. Not just attention — precision. That phrase gets thrown around a lot, but he meant it in the truest sense.</p>

<p>Laser focus isn't about doing one thing. It's about doing the right thing — the move that creates the most impact. The shift that makes everything else click into place.</p>

<p>I saw that principle in action during my early days at Endgame.</p>

<p>When I joined, we had four different products — all in different markets, serving different users. Built with a small team. Sold with an even smaller one. The problem wasn't that the ideas were bad. They weren't. In fact, each had real potential.</p>

<p>But potential doesn't scale without focus.</p>

<p>Nate made a tough call. He chose to end-of-life three of the products — even though they were generating short-term revenue — and put every ounce of our talent behind a single one.</p>

<p>It was a risk. But it paid off.</p>

<p>We built a best-in-class endpoint protection product in one of the most competitive markets in cybersecurity. Not because we chased everything. But because we aligned everything to a singular mission.</p>

<p>That's what laser focus looks like in the real world. And feedback should work the same way.</p>

<p>When you're under pressure — under the bar, under deadline — you don't need a list of everything that's off. You need one cue. One phrase that slices through the noise and sticks when it counts.</p>

<h3>Point the Flashlight</h3>

<p>Like in baseball.</p>

<p>Coaches used to flood hitters with advice mid-swing. "Keep your hands back." "Level the bat." "Don't bail out." All technically true. None actually helpful in the moment.</p>

<p>Then came this:</p>

<blockquote>
<p><em>"Your belly button's a flashlight. Point it at the pitcher."</em></p>
</blockquote>

<p>It's weird. It's vivid. And it works. The batter stops overthinking and starts moving with intention. The hips rotate. The swing tightens. Power follows.</p>

<p>That's the magic of laser-focused feedback — not more, just clearer.</p>

<h3>Two Words That Changed the Lift</h3>

<p>The same thing happens under the bar.</p>

<p>Stefi Cohen is one of the most accomplished powerlifters on the planet. But even the best get stuck. During a heavy squat cycle, she was losing depth and collapsing forward — the kind of breakdown that could invite a checklist of mechanical critiques.</p>

<p>Her coach didn't do that. He gave her one cue:</p>

<blockquote>
<p><em>"Knees out."</em></p>
</blockquote>

<p>Two words.</p>

<p>Her glutes fired. Her hips opened. Her position locked in. No overcorrection. No overthinking. Just a precise adjustment that reconnected the movement.</p>

<p>That's what real feedback does. It doesn't flood you with everything that's wrong.</p>

<blockquote>
<p><em>It's a spotlight, not a floodlight — aimed at what matters most, right now.</em></p>
</blockquote>

<h3>From Backlog to Breakthrough</h3>

<p>Similarly, in product development, we're inundated with feedback. Users, developers, sales teams, executives — everyone has ideas, and most of them are shared with genuine excitement. Everyone wants the product to be better.</p>

<p>But without focus, we risk becoming a jack of all trades and a master of none. Chasing every suggestion means delivering none of them well.</p>

<p>The best product teams don't just collect feedback — they hone it. They find the thread, the theme, the one insight that can generate the most impact with the least investment.</p>

<p>Because here's the truth: In software, we can build almost anything — given infinite time and budget. But for some reason, executive teams rarely offer those.</p>

<p>So it takes real leadership to sift through the noise, spot what matters most, and act.</p>

<p>Take an example from Dropbox.</p>

<p>Dropbox had a problem most product teams would recognize. Users were signing up… but not sticking around. Specifically, they were dropping off before installing the desktop client — the core part of the experience that made Dropbox more than just another web app.</p>

<p>The team started spinning on solutions. Maybe the onboarding flow needed to be redesigned. Maybe they needed more education, more nudges, more screens. The backlog of ideas kept growing.</p>

<p>Then a PM said something simple:</p>

<blockquote>
<p><em>"You're treating the CTA like a destination, not a trigger."</em></p>
</blockquote>

<p>That one line cut through the noise.</p>

<p>They changed the button copy from "Next" to "Install Dropbox." They added a subtle animation to guide the user forward. That was it.</p>

<p>And conversion went up.</p>

<p>No massive rebuild. No big campaign. Just a focused shift — one that made it crystal clear what the user needed to do next.</p>

<p>It wasn't about the volume of feedback. It was about knowing which piece would actually move the needle.</p>

<blockquote>
<p><em>That's product leadership: listening broadly, then acting precisely.</em></p>
</blockquote>

<h3>The Flashlight, Not the Floodlight</h3>

<p>The same principle applies across every domain — lifting, sport, software.</p>

<p>You don't have infinite time to build a product. You don't have infinite weights to lift and sculpt the perfect physique. You can't act on every idea, every error, every impulse.</p>

<p>So you focus.</p>

<p>Whether you're adjusting your squat, refining your swing, or unblocking a user journey — the best feedback doesn't overwhelm. It illuminates.</p>

<p>Not a floodlight that blinds.</p>

<p>Not a laser that burns.</p>

<p>Just a flashlight, steady and clear, aimed at what matters most right now.</p>

<p>That's how progress happens. Not with noise — with precision.</p>

<p>One cue, one rep at a time.</p>`
      },
      {
        id: "make-feedback-a-ritual",
        title: "Make Feedback a Ritual",
        content: `<p>Feedback isn't something you give once a quarter. It's not a Slack comment or a surprise at review time. It's a rhythm. A rep.</p>

<p>If cues are the spark, rituals are the circuit — they keep the current flowing. The strongest teams and the strongest lifters don't just react to feedback when it shows up. They build it in. They expect it. They practice it. They normalize it.</p>

<p>In lifting, you log your sets. You reflect on what moved well, what felt off, what needs attention tomorrow. Feedback isn't an event — it's a ritual. Same goes for product.</p>

<p>And if you're a product manager, here's the simple truth:</p>

<blockquote>
<p><em>If you're not talking to users, you are failing at your job.</em></p>
</blockquote>

<p>Not falling behind. Not missing a step. Failing.</p>

<p>User feedback isn't a bonus. It's not a "nice to have." It's the core ritual of the role. If you're not making regular space to listen — directly, personally — then you're flying blind.</p>

<p>You're not a scrum master. You're not a backlog babysitter. You are the voice of the user.</p>

<p>And here's what that really means: the user is not a secondary part of your job. They're not a "requirement" that emerges after the product is scoped. They are not a symptom of your development process.</p>

<blockquote>
<p><em>The user — and their mission — is why you have a job.</em></p>
</blockquote>

<p>That's the point of all of this.</p>

<p>The research, the roadmaps, the revenue — all of it is an outcome of solving the user's problem. Not the other way around.</p>

<p>Too many teams fall into the trap of building for elegance, or scale, or conversion — and forget to ask the most important question: Does this move the mission forward?</p>

<p>That's your job as a PM. To hold that line. To make feedback a ritual — not just to improve the product, but to stay anchored to the reason it exists.</p>

<p>Because metrics can drift. Roadmaps can get noisy. But the mission stays clear — if you keep listening.</p>

<h3>Slack: Feedback as the Product</h3>

<p>Slack didn't start out as a product idea. It started as an internal tool. The team at Tiny Speck built it for themselves while working on a multiplayer game called Glitch.</p>

<p>The game didn't succeed. But the internal chat tool did — because the team had built it by listening to their own pain.</p>

<p>They weren't running customer interviews or user panels. They were simply using the tool every day — and treating their own experience as data. The engineers, designers, writers, and founders were all giving and receiving feedback constantly. What was slow? What was confusing? What needed to work better?</p>

<p>The users were them. The feedback was constant. And the ritual was built into the way they worked.</p>

<p>They didn't treat those observations as complaints. They treated them as cues — small signals that, over time, shaped something far more useful than they had originally intended.</p>

<p>So when Glitch shut down, the pivot to Slack wasn't a Hail Mary. It was a progression. The team had already spent years listening to what they needed most — and building it.</p>

<blockquote>
<p><em>Ritualized feedback didn't just improve the product. It revealed the product they should have been building all along.</em></p>
</blockquote>

<p>Slack didn't become Slack by guessing what users wanted.</p>

<p>It became Slack by listening to internal signals — consistently, honestly, and early.</p>

<h3>Elastic: Customer Zero and Design Partner Rituals</h3>

<p>We've seen the same thing at Elastic.</p>

<p>Our internal information security team — "customer zero" — is often the first to use upcoming Elastic Security features. They're not a test group. They're real users with real problems. When something's unclear, slow, or missing, they tell us — early and often. And because they sit just a few channels away, we can respond quickly and refine before anything reaches broader release.</p>

<p>It's not just internal, either. Some of our most pivotal feedback comes from design partners — external users who've volunteered to be on the front lines with us. They opt into early access, knowing the feature might be raw, knowing it might break — because they care about shaping something real. Something that works not just in a demo, but in a live environment.</p>

<p>These aren't one-offs.</p>

<p>They're not spontaneous bursts of goodwill.</p>

<p>They're planned rituals — structured partnerships built into how we deliver great products.</p>

<p>Embedded loops that make the product stronger long before it ever reaches general availability.</p>

<p>Ritualized feedback isn't about checking a box.</p>

<p>It's about building alongside the people who share the mission.</p>

<h3>Relationship-Level Listening</h3>

<p>Collecting feedback is the easy part.</p>

<p>Like in any relationship, getting someone to tell you what's on their mind is just the start. What really matters is what you do next.</p>

<p>Do you listen? Do you actually hear them? Or do you nod, say "totally," and go back to your plan?</p>

<p>It's the same in product. And in training.</p>

<p>You can run all the standups, retros, interviews, and training logs you want — but if you're not listening with intent, you're just gathering noise. You're not growing.</p>

<p>Feedback is only useful if it lands.</p>

<p>And that means learning how to listen — not just politely, but purposefully.</p>`
      },
      {
        id: "listening-is-a-lift",
        title: "Listening Is a Lift",
        content: `<p>You've built the ritual. You're getting the feedback. Now comes the hard part: listening.</p>

<p>Not passively. Not performatively. But actually listening — in a way that helps you grow.</p>

<p>And here's the first thing to understand:</p>

<blockquote>
<p><em>Being user-obsessed doesn't mean the user is always right.</em></p>
</blockquote>

<p>Sometimes users give you feedback in the form of a solution. "Add a new button." "Change this flow." "Make it more like what Company X does."</p>

<p>If you chase those suggestions blindly, you're not listening — you're outsourcing product design.</p>

<p>The real job of a product manager is to listen deeper. To get past the request and find the root. Don't treat the feedback as the answer — treat it as a clue. Your job is to uncover the real problem.</p>

<p>One thing I'm adamant about with my PMs: We don't hand our engineers a solution. We bring them a problem worth solving.</p>

<p>That means doing the work. Talking to users. Studying how others have handled it. Mapping the friction. Listening for what's unsaid.</p>

<p>We work with brilliant, creative engineers. Our job isn't to steal the "how." It's to own the "why." And collaborate on the "how" — together.</p>

<p>Because feedback isn't always clear. It's not always clean. It can be noisy, misdirected, emotional, subtle, or even wrong.</p>

<p>And when you're under pressure — in the middle of a hard training cycle or a high-stakes product push — it's easy to hear what you want to hear. Or to hear nothing at all.</p>

<p>Listening is a skill. One that separates people who just collect feedback from those who actually use it.</p>

<p>It's like lifting: you might record every set and log every number, but if you don't know what the soreness is telling you — if you don't know when to push and when to pause — you're not getting better. You're just getting tired.</p>

<p>Sometimes, the most accurate feedback in a training session isn't in the weight or the timer — it's in how the set felt.</p>

<p>How many reps did you leave in the tank?</p>

<p>What was your rate of perceived exertion?</p>

<p>RIR and RPE are qualitative cues — and they only work if the lifter is honest.</p>

<p>Just like product feedback only works if the team is actually listening.</p>

<h3>When the Data Lies — or We Lie to Ourselves</h3>

<p>Take Fitbit.</p>

<p>When they rolled out sleep scores, users were thrilled. Finally, a single number to tell you how well you slept. But the feedback loop backfired. People started optimizing for the score — going to bed earlier, waking up later — and still feeling exhausted.</p>

<p>Why?</p>

<p>Because the metric didn't tell the whole story. It rewarded quantity, not quality. It missed the impact of stress, caffeine, or real rest. And instead of helping people understand their bodies, it created sleep anxiety — people chasing a number instead of listening to what their bodies were actually telling them.</p>

<blockquote>
<p><em>That's the risk with metrics-as-truth: you end up listening to the wrong signal, just because it's the one that's easy to measure.</em></p>
</blockquote>

<p>And the same thing happens at scale.</p>

<p>Take Target Canada.</p>

<p>When Target expanded into Canada, the surface signals looked great: strong brand awareness, excited customers, big opening-week foot traffic. But underneath, stores were suffering. Inventory systems were broken. Shelves were empty. Pricing was inconsistent. And operational feedback from store teams was ignored or deprioritized.</p>

<p>Leadership focused on the shiny signals — the PR, the launch buzz, the optimism — and missed the messy truths on the ground. They listened to the brand metrics and headlines, not the store managers and logistics teams waving red flags.</p>

<p>Within two years, the entire operation collapsed — costing billions and ending in a full retreat.</p>

<blockquote>
<p><em>When you only listen to what makes you feel good, you stop seeing what's real.<br>
And in product — or business — that kind of selective hearing is deadly.</em></p>
</blockquote>

<h3>Real Strength Isn't in the Signal — It's in the Interpretation</h3>

<p>Feedback isn't rare. It's everywhere. What's rare is someone strong enough to hear it clearly — and humble enough to act on what it really means.</p>

<p>In lifting, that means paying attention to more than numbers. In product, it means resisting the urge to react — and learning to respond.</p>

<p>You don't need more metrics. You need better listening. Listening that filters noise. That finds the root. That says: "I hear you. Let's fix the real thing."</p>

<p>That's what strong teams do.</p>

<p>That's what strong lifters do.</p>

<p>And that's what we do when we care more about truth than comfort.</p>`
      },
      {
        id: "strong-feedback-strong-foundations",
        title: "Strong Feedback, Strong Foundations",
        content: `<p>We should strive for feedback that's constructive — not combative.</p>

<p>I've learned this over the course of my career. As a passionate product leader, I've had to walk a line: How do you bring intensity without intimidation? How do you make sure your excitement doesn't land as insult?</p>

<p>It's not always easy. Passion can blur the edges. And in fast-moving teams, feedback can come fast and hot — even when it's meant to help.</p>

<p>But here's what I've come to believe:</p>

<blockquote>
<p><em>When feedback is anchored in empathy and structured around the mission, it becomes a lift — not a weight.<br>
It pushes people forward instead of pinning them down.</em></p>
</blockquote>

<p>These lessons apply well beyond product, and well beyond management. They show up in how we coach our teammates, how we parent, how we partner, how we grow.</p>

<p>If something matters enough to say out loud, then it matters enough to deliver with care.</p>

<p>Because what you say is only part of it.</p>

<p>How it lands — that's what makes it real.</p>

<h3>Strong Feedback Is Often Micro</h3>

<p>We tend to think feedback has to be a big moment. A review. A reset. A speech.</p>

<p>But most of the feedback that actually changes people — and changes outcomes — is micro.</p>

<p>One cue, one adjustment, one rep at a time.</p>

<p>That's how coaching works on the platform. That's how great PMs guide a team. That's how trust is built — and how performance gets better.</p>

<p>In the gym, the best feedback is short and specific: "Brace before the pull." "You're losing tension at the bottom." You don't wait until after the meet to say it — you say it in the warm-up room, in the moment, when it counts.</p>

<p>In product, it's the same. "This feature's drifting from the core user need — let's tighten it." "That's a great insight — let's surface that earlier in the deck."</p>

<p>Micro feedback avoids defensiveness. It's less likely to be taken personally.</p>

<p>It's just the next rep, done better.</p>

<h3>Share Early, Improve Always</h3>

<p>Too many teams wait too long.</p>

<p>They polish. They perfect. They fear showing something unfinished. But by the time the feedback comes, the team is too attached — or too far gone — to adapt.</p>

<p>The best teams share early.</p>

<blockquote>
<p><em>That's the Medici principle: seek feedback while ideas are still flexible — not fixed.<br>
Let people shape the work before it's locked in.</em></p>
</blockquote>

<p>You can see this principle in action at Figma.</p>

<p>From the start, Figma built real-time collaboration into their product — not as a feature, but as a philosophy. Designers could share mockups midstream, collect comments in context, and adjust in the flow. No long feedback loops. No over-polished reveals. Just open collaboration, one comment at a time.</p>

<p>At Elastic, we embraced that same mindset — first in design, then across product teams.</p>

<p>Figma became a shared space for early feedback: PMs sketch rough flows, designers wire up concepts, and teams review together before a line of code is written. Mock reviews aren't a gate. They're a ritual.</p>

<p>And like everything else, we've evolved it.</p>

<p>Now we're layering in AI tools like Lovable to explore more ideas faster — iterating on copy, visuals, and layouts in minutes, not weeks. It's not about replacing creative work. It's about accelerating how quickly we get to the good ideas — and how early we can gather feedback that makes those ideas stronger.</p>

<p>And feedback doesn't always need to come through conversation.</p>

<p>Just look at Duolingo, one of the most successful learning platforms in the world — and proudly Pittsburgh-built.</p>

<p>They've designed feedback directly into the product experience. From streak celebrations to in-app corrections, every interaction is a tiny nudge: "You're close." "Try again." "You're on track."</p>

<p>There's no giant review. No sit-down critique.</p>

<p>Just micro feedback, in real time, helping users improve without ever slowing them down.</p>

<blockquote>
<p><em>The earlier you share, the better the outcome.<br>
The smaller the feedback, the bigger the impact — if it comes at the right time.</em></p>
</blockquote>

<h3>Strong Feedback Builds Strong People</h3>

<p>Strong feedback doesn't come from shouting. It comes from someone who's done the work. Someone who's built themselves up — not just to be heard, but to be helpful.</p>

<p>The best coaches don't bark orders. They observe, they care, and they offer what helps — when it helps.</p>

<p>In product, the same rule applies.</p>

<p>You don't build trust by waiting until things break.</p>

<p>You build it one cue at a time. One adjustment. One shared win.</p>

<blockquote>
<p><em>Feedback that fuels — not frustrates.<br>
That builds — not breaks.</em></p>
</blockquote>

<p>Even in our personal lives, the principle holds. A daily affirmation. A kind word. A check-in after a hard day. These are all acts of feedback — they tell someone how they're doing, and that you're still with them.</p>

<p>That's how we get stronger. As partners. As teammates. As leaders.</p>

<p>Not through silence. Not through softness.</p>

<p>When it's anchored in empathy and aimed at the mission, feedback stops being friction — and becomes fuel.</p>`
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
