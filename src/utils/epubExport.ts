import { Chapter, chapters } from "@/data/chapters-data";
import JSZip from 'jszip';
import * as FileSaver from 'file-saver';

// Import the actual content function from LogSections
const getSectionContent = (chapterId: number, sectionId: string) => {
  if (chapterId === 1) {
    switch (sectionId) {
      case "mission-is-the-magnet":
        return "Before I ever built products, I served in the U.S. Army as an Airborne intelligence sergeant. That experience — of working in service of something larger than myself, of making decisions under pressure with lives on the line — shaped everything that came after. I learned early that mission comes first. Not ego. Not recognition. Mission.\n\nThat mindset followed me from the military to cybersecurity, and into leadership roles where the stakes changed but the values stayed the same. Whether it was securing critical systems, helping build Elastic Security, or coaching in the gym, the goal has always been the same: real strength is lifting others.\n\nOne of the proudest chapters of my product career was building Endgame. We entered a brutally competitive market — going head-to-head with massive players like McAfee and CrowdStrike — and carved out real ground. Not because we had more money or brand recognition, but because we had something harder to copy: a clear mission. Protect high-value targets from nation-state level attacks. That focus, and the small, fierce team who rallied behind it, made all the difference.\n\nAt the heart of it was Nate Fick, a Marine officer turned tech CEO, and later the U.S. Ambassador for Cyberspace and Digital Policy. He led with conviction, clarity, and a deep respect for the mission. In all-hands meetings, Nate would remind us that we were an \"elevator asset company\" — that if the building burned down, the most important assets could still fit in the elevator. It wasn't the code or the tools. It was the people — the ones who understood the user's mission and had the passion to serve it.\n\nThat idea stuck with me. Nate's example reinforced what I learned in uniform: The success is the user's success. Your mission is their mission.\n\nMetrics are the outcome of making your user successful. Yes, we need to measure them. But they are the result of serving the mission — not the reason for it.\n\nThere's a moment in every product meeting when the question slides in like it always does:\n\"How will we measure success?\"\nIt's a good question — just not always a good first question.\n\nIn lifting, it's the same story. People chase PRs every week like the number on the barbell is the whole point. Add five pounds. Hit record. Post the clip. Repeat.\n\nBut metrics without mission? That's just noise. Pressure with no direction. Goals with no guts.\n\n\"The weight on the bar isn't the goal — it's the evidence of progress, not the destination.\"\n\nWe've all seen what happens when this mindset takes over. It's not a failure of talent — it's a failure of alignment. Cyberpunk 2077 didn't initially flop because the devs didn't care — far from it. The development team poured years into building something ambitious. But the pressure to hit a holiday launch window — a decision made at the executive level — overrode the mission of delivering a complete, polished experience. The result was a rocky release, millions in refunds, a reputational hit, and a stock crash.\n\nTo their credit, the team stuck with it. Years later, after patches and a reimagined DLC, the game has earned back much of the trust it lost — a testament to what happens when talented people are finally given the space to do the work right.\n\nAnd we've seen what it looks like to protect the mission — even when it means stepping back. Simone Biles did exactly that in front of the entire world at the 2021 Olympics. Under unimaginable pressure, she chose long-term purpose over short-term performance. She knew something was off, and she honored that instinct.\n\n\"I have to focus on my mental health… if you don't, then you're not going to enjoy your score and you're not gonna succeed as much as you want to.\" - Simone Biles\n\nHer move wasn't retreat — it was leadership. And in time, she returned to competition stronger, on her terms, and more respected than ever. A different kind of comeback — one powered by mission, not metrics.\n\nSuccess isn't about hitting every metric. It's about refusing to lose yourself trying.\n\nMore Than Just Good Intentions\n\nMission-driven isn't a poster in the break room or a bullet in a pitch deck. It's how you move — how you decide, how you show up when it's hard.\n\nIn a world that celebrates velocity, mission is quiet. But that doesn't make it weak. Mission gives you clarity when things get blurry and stamina when things get hard.\n\nTake Patagonia. They once ran a campaign telling customers not to buy their jacket unless they truly needed it. Why? Because their values mattered more than their quarterly revenue.\n\nOr SpaceX — aiming at goals that span decades, not quarters. It's not about idolizing companies. It's about recognizing what real mission-alignment looks like when the stakes are high and the timelines are long.\n\nAnd it pays off. Research shows that people who believe in the purpose behind their work stay longer, burn out less, and deliver more.\n\nWhen Metrics Eclipse Meaning\n\nLet's be clear: metrics matter. But only when they serve the mission — not when they become it.\n\nHere's where teams lose the plot:\n• They ship fast instead of shipping right.\n• They chase signups instead of learning why users leave.\n• They brag about launches and ignore long-term usage.\n\nWhen dates drive development, teams start cutting corners. Feedback loops close. Energy fades. You build momentum toward a number — not toward value.\n\nIn the gym, this is ego lifting. In product, it's just as risky. It looks like burned-out engineers, brittle systems, and growth that collapses the second you stop pushing it uphill.\n\nThe Fulfillment Flywheel (Powered by Purpose)\n\nThere's a better model. One that's as relevant in combat as it is in code — or in the squat rack.\n\nIt's called the OODA Loop: Observe, Orient, Decide, Act. Developed for fighter pilots. Adopted by startups. Powered by clarity.\n\nBut here's the catch — without a clear mission, the whole loop spins out.\n\nIn lifting, it's trusting the plan instead of maxing out because you feel good that day. In product, it's waiting to ship because your users aren't ready — even if your OKRs are.\n\nMission turns chaos into clarity. It makes every rep count. Every release matter. Every decision directional.\n\nThis is the real flywheel of fulfillment:\n• Mission fuels clarity.\n• Clarity powers resilience.\n• Resilience drives real progress.\n• And real progress reinforces the mission.\n\nThat's the throughline. That's what keeps us going.\nMetrics follow. But the mission leads.";
      case "the-drift":
        return "At first, the metric is a mirror — it reflects the mission. Clean, focused, and true.\nBut over time, something shifts. Quietly. Gradually. The mirror warps. And without noticing, we begin steering toward the reflection instead of the road.\nThis is the Drift.\n\nIt doesn't announce itself. It rarely arrives with bad intent. It begins with a goal:\n\nLaunch the feature by Q4.\nHit 405 on deadlift.\nIncrease MAUs by 20%.\n\nReasonable. Measurable. Actionable. These are the numbers we hold up as evidence that we're making progress — and for a while, they are.\n\nBut then: the goal becomes the game.\n\nIn product, we've seen it time and time again. Shipping becomes more important than solving. Teams crunch to meet a date set quarters ago, long after the user problem has evolved. Metrics chase headlines. Investors want news. Executives want motion. The dashboard glows green while user trust fades red.\n\nThink of Boeing. In the race to beat Airbus, they needed the 737 Max on runways — fast. Shareholder pressure mounted. Deadlines became immovable. On paper, the metrics looked great: deliveries met, costs controlled. But beneath the numbers, safety systems were skipped, warnings dismissed.\nTwo crashes. Hundreds of lives lost. The drift wasn't just technical — it was cultural. Speed overtook scrutiny. The metric overtook the mission.\n\nIn strength, the signs are physical — and brutal. Hafthor Björnsson, one of the strongest men in history, returned to powerlifting after two years of boxing. He set his sights on breaking the raw total world record. Big lifts were stacking fast. But recovery lagged behind. He felt the warning signs — tightness, fatigue — but kept pushing.\n\n\"I wasn't recovering fully between sessions… not listening to my body, which is silly.\"\n\nThen came the snap. Attempting a 556-pound bench press, his pec tore clean off the bone.\nThe drift had found him too: progress misaligned with process, recovery sacrificed to reach a number that no longer served the mission. The result was pain, delay, and a lesson carved in scar tissue.\n\nThe damage isn't just physical. It's psychological. Because when we treat metrics as the mission, missing them feels like failure. And so we hide the truth, inflate success, or worst of all — stop trying.\n\nThe Drift corrodes not through force, but through inversion. It flips process into performance. It turns care into compliance.\n\nAnd it burns people out.\n\nI've worked with brilliant people who could have built anything — but they left, not because they failed, but because the system stopped valuing why they showed up in the first place. When we reduce contribution to a dashboard, we forget the soul behind the keyboard.\n\nThis isn't just anecdotal. Research shows that mission-driven employees are significantly more loyal.\nA LinkedIn survey found that employees motivated by mission were 54% more likely to stay with their company for five or more years.\nAnother study revealed that companies engaging employees in purpose-driven programs saw a 52% lower turnover among newer employees.\n\nSo what's the antidote?\n\nIt's not to ignore metrics. It's to anchor them. To use them as signal, not steering.\nTo build systems that reinforce why we do the work, not just how fast we do it.\n\nBecause the real goal is not a launch date or a deadlift.\nThe real goal is built through the reps, not measured by them.";
      case "repetition-with-intention":
        return "You don't get strong by lifting heavy once.\nYou get strong by showing up again. And again. And again.\nBut if you do the same thing forever, you don't get stronger — you get stuck.\nThat's the tension of progress: it demands ritual, but it punishes repetition without variation.\nWhether in the gym or in product, growth comes through iteration — small, deliberate cycles of effort. You log your training. You tweak your form. You try a new tempo. In software, you ship. You measure. You talk to the user. You try again. The process isn't glamorous — but it's generative.\nRituals compound. Rules confine.\nA rule says \"do this.\"\nA ritual says \"do this because it matters.\"\nOne is brittle. The other bends with you.\nAgile, for example, isn't magic. It's just a set of rituals. Daily standups, retros, demos, sprints — all meant to create rhythm and reflection. But rituals only work when they're anchored in meaning and adapted to context. If your team treats retros like checkbox theater, then you're not iterating — you're just looping. And if your standup sounds like \"I did stuff, I'll do stuff, no blockers,\" you've got a ritual without reason.\nThe same failure shows up in the gym. People find a powerlifting program online and follow it to the letter, even when it doesn't fit their recovery, their age, their job, their life. They wonder why they plateau — or get hurt. It's because they forgot the principle beneath the plan.\nThat's where most systems fail: not because the framework is flawed, but because the user is forgotten. They're treated like an input to a method, instead of the reason for its existence.\nLet's be honest: there's no shortage of books telling you how to do things.\nAnd yes — here we are, writing another one.\nBut this isn't a blueprint. It's a philosophy.\nThe implementation is on you.\nWhat works for one team, one lifter, one body, won't work for another. That's not failure — that's reality.\nStefi Cohen didn't become a record-breaking lifter by blindly following a single powerlifting template. Her training evolved through experimentation: strength phases, hypertrophy cycles, hybrid athletic blocks. She didn't just lift heavy — she studied her feedback, varied her stimuli, and rewrote her rituals to fit her mission.\nProgress didn't come from rigidity. It came from rhythm and reinvention.\nIn product, that same spirit of experimentation lives in hack weeks — short, sacred breaks from routine where teams can stretch in new directions.\nAtlassian, Spotify, and Elastic have all embraced this. At Elastic, hack weeks became a celebrated ritual — not just for innovation, but for joy. Engineers got to break free from roadmap gravity and chase ideas that didn't need to justify themselves in Jira. Some of Elastic Security's most creative features — including internal workflow improvements, experimental visualizations, and early prototypes of user-requested tooling — were born not in sprint planning, but in that carved-out chaos.\nSometimes, the best way to realign with the mission is to deliberately step outside it.\nRituals work when they're shaped by the user, not imposed on them.\nThey're tools — not commandments.\nAnd when they're working, you feel it: not just in output, but in outlook. A team that trusts its rituals doesn't need micromanagement. A lifter that trusts their program doesn't need motivation hacks. The rhythm carries you. The meaning sustains you.\nBut rituals aren't static.\nThey must flex to your fatigue. They must bend to your bandwidth. They must evolve — not just to avoid boredom, but to stay honest with the mission.\nSame input, same outcome. If the goal has changed, so must the reps.\nThat's what separates the lifter who grows from the one who stalls.\nThat's what separates the product team that adapts from the one that burns out.\nBecause if the mission is the magnet —\nrituals are the rails.\nThey don't tell you where to go.\nThey keep you from sliding off the path while you find it.\nRituals give you direction.\nBut progress? That comes from the work itself — the grind, the reps, the effort no one applauds.\nIn the next chapter, we talk about how strength is built — and why it doesn't always look like progress.";
      default:
        return "Content for this section will be added soon.";
    }
  }
  
  if (chapterId === 2) {
    switch (sectionId) {
      case "the-myth-of-overnight-success":
        return "We've all heard the stories.\n\nThe product that \"took off overnight.\"\nThe lifter who casually pulls four plates like they've always been able to.\nThe founder in a garage who changes the world with a single keynote.\n\nIt's tempting to believe that mastery happens like that — in a flash.\n\nBut that's not really how it works.\n\nTake the iPhone. The 2007 reveal made it feel like it dropped from the sky fully formed. But behind that moment were years of trial and error. Touchscreens that didn't quite work. Software that crashed mid-demo. A mountain of prototypes that never saw the light of day. The final product wasn't a stroke of brilliance — it was the result of relentless iteration.\n\nSame with Instagram. What looked like an overnight success was actually the second version of a too-close-to-Foursquare check-in app called Burbn. The team just kept listening, trimming, trying again. One update at a time.\n\nAnd that big deadlift on your feed? Probably not magic. More likely: a hundred quiet sessions, some of them rough. A lot of small choices to show up, tweak form, trust the program.\n\nWe love the idea of sparks — fast wins, big leaps, sudden breakthroughs. But progress usually doesn't feel like that.\n\nMost of the time, it feels a lot more like repetition.\n\nThe engineer fixing the same piece of code — again.\nThe founder rewriting their pitch for the fifth time.\nThe lifter doing the same warm-up cues every session, no matter the weight.\n\nIt's not flashy. But it adds up.\n\nThat's part of what makes the first few months — or the first year — so exhilarating. In the gym, you make gains almost every week. In a startup, your product evolves daily. Everything feels fast, and the feedback is loud.\n\nBut then you hit the plateau.\n\nThe easy wins dry up. Strength doesn't come as quickly. Users get harder to surprise. Suddenly, it's not about chasing sparks anymore — it's about showing up and pushing through.\n\nThis is where the real work begins.\n\nIn lifting, that means grinding through the middle — not maxing out, but mastering the basics under load. In product, it's navigating the shift from scrappy innovation to enterprise-grade reliability. Less fanfare, more focus.\n\nThat's the part people don't always talk about — and the part that actually defines mastery.\n\nIt's not just about adding more weight or shipping more features.\n\nIt's about learning to hone your form.\n\nIn lifting, that might mean dialing in your brace, fixing a subtle shift in your squat, or finally feeling your lats engage in a deadlift.\n\nIn product, it's refining an initiative until it truly solves the right problem — not just adds to the roadmap.\n\nYou start to realize: Reps aren't just about volume.\n\nThey're about attention.\n\nThat's what makes progress sustainable.\n\nAnd that's what Mission Built is really about — building better products, one rep at a time.";
      case "repetition-is-not-redundancy":
        return "In Section 1, we looked at the myth of overnight success — how real strength, in the gym or in product, is built through showing up again and again. But not all reps are created equal. The real magic isn't just in the repetition — it's in how you use it.\n\nNot all reps count the same.\n\nAnyone who's coasted through a gym session, just moving weight, knows the difference. One set burns time. Another builds awareness, precision, and strength — even if the numbers don't change.\n\nThe same is true in product.\n\nRepetition isn't redundant when it's intentional. When it's used to test assumptions, refine interfaces, tune performance, or build something just a little closer to what users actually need. That's the kind of rep that moves things forward.\n\nBut repetition alone isn't enough — variation is what makes repetition transformative.\n\nAs Dr. Mike Israetel, co-founder of Renaissance Periodization, teaches:\n\n\"Training works best when structured into intentional blocks that emphasize different goals. In hypertrophy-focused blocks, lifters increase volume over time — guided by principles like Minimum Effective Volume (MEV), Maximum Adaptive Volume (MAV), and Maximum Recoverable Volume (MRV). This structured overload builds muscle while preserving recovery, setting the stage for later strength expression. The concept isn't just about working hard — it's about working smart, within clear, adaptive boundaries.\"\n\nIn training, we use blocks for different goals: hypertrophy to build muscle, strength to build expression, and deloads to recover and grow. We manipulate movement, load, and tempo to avoid stagnation. A paused bench press, a deficit deadlift, or chains added to a bar — each variation targets a different adaptation, even if the base movement stays the same.\n\nProduct is no different.\n\nYou might run a block of sprints to achieve a specific outcome — refining onboarding, improving performance, or tackling tech debt. Then shift into a new block with a new goal. Like training, it takes enough intentionality to complete a cycle, maybe one, two, or three sprints, before varying the focus. Progress comes not from flailing in every direction, but from focused variation over time.\n\nAnd just like strength doesn't grow without tension, product insight doesn't grow without diverse input.\n\nYou can't just loop with your own team forever. Sometimes you have to stretch — to talk to sales, to customers, to analysts, to skeptics. Even when it's uncomfortable. Especially when it is.\n\nThis is where The Medici Group gets it right: innovation happens when diverse perspectives collide.\n\nAs Frans Johansson puts it in The Medici Effect:\n\n\"When you step into an intersection of fields, disciplines, or cultures, you can combine existing concepts into a large number of extraordinary new ideas.\"\n\nIn the gym, that might mean lifting with people stronger or different than you. In product, it means bringing in voices from outside your echo chamber — support calls, sales objections, the person who almost churned.\n\nReps alone build endurance.\n\nSmart variation builds power.\n\nThis is how you break through the plateau — not by abandoning the reps, but by evolving them.";
      case "when-the-spark-fades":
        return "The first reps are easy — not physically, but emotionally. You're fired up. Everything's new. Progress is loud and obvious.\n\nBut what happens after the rush?\n\nIn lifting, it's the long middle. The early PRs stop coming. Your form stalls. You show up, grind through the same sets, and wonder if you're actually moving forward. You're not always chasing your one-rep max. And you shouldn't be. Strength isn't built by living at your limit — it's built in the space between peaks, when you train with intention and recover with discipline.\n\nIn product, it's the same. You can't always be doing the flashy, innovative thing. Sometimes the most important work is foundational — fixing backend debt, improving accessibility, tightening up performance. The kind of work that creates capacity for brilliance later.\n\nAnd for many, this is where the wheels come off.\n\nBecause motivation — that spark — is unreliable. It's not designed for the long haul. And it doesn't care about your goals.\n\nThat's why systems matter more than sparks.\n\nSystems are how you keep showing up when the dopamine dies down. Morning routines. Logbooks. Standups. Progress reviews. They don't need to be rigid. But they do need to be real. Reps don't get done by accident.\n\nYou don't need hype — you need structure.\n\nIn training, that structure might be a coach, a program, a calendar alert that says \"get under the bar.\" In product, it might be a rhythm of sprint planning, async demos, or check-ins with customers. Externalized accountability is often the only thing that keeps momentum moving.\n\nJames Clear — author of the bestselling book Atomic Habits, known for his work on behavior change and habit formation — wrote:\n\n\"You do not rise to the level of your goals. You fall to the level of your systems.\"\n\nThe work still has to be done. But when your environment supports your actions, it gets done more often.\n\nAnd here's the quiet truth:\n\nThe people who make the biggest progress aren't usually the most intense — they're the most consistent.\n\nThey build when no one's watching.\nThey train when it's not fun.\nThey keep caring — even when the spark is gone.\n\nBut what if you need to find the spark again?\n\nOne of the fastest ways to reignite your drive is to reconnect with the people you're building for. Talk to your users — especially the ones who aren't shouting. You might think the work you're doing isn't flashy, but somewhere out there, someone is craving exactly what you're building.\n\nStability. Accessibility. Visibility. These aren't buzzwords — they're lifelines for users with real problems. Find them. Listen to them. Let them lift you up.\n\nBecause nothing recharges momentum like hearing someone say: \"This made my day better.\"\n\nAnd that brings us to the next section: the power of the quiet reps — the multiplier of boring work.";
      case "the-multiplier-of-boring-work":
        return "There's a kind of work that doesn't make headlines. No one posts their warm-up sets. No one celebrates shaving 100ms off load time.\n\nBut that's the work that wins.\n\nFor every PR pulled in competition, there are hundreds of days of grinding behind it — submaximal sets, long pauses, light reps, mental resets. The same is true in product. Every effortless-looking release rests on a foundation of something much deeper: months of planning, iteration, bug-fixing, and late-night Slack threads.\n\nIn lifting, it's the mobility work you do alone at 6 a.m. The back-off sets you don't skip. The deload week you take seriously. It doesn't look impressive — but it makes everything else possible.\n\nIn product, it's building out role-based access controls — not because it's exciting, but because your biggest customers expect it. It's mapping audit logs across services so your platform isn't a compliance risk anymore. It's the 10th conversation with a user about the same rough edge in the UX. These aren't \"big bets,\" but they're the reason your big bets land.\n\nThat's what boring work does: it compounds.\n\nEach rep you don't skip, each ticket you don't shortcut, each problem you refine instead of avoid — it stacks. Quietly. Relentlessly. And over time, it becomes your edge.\n\nYou don't need to go viral. You need to be trusted.\n\nAnd trust is built in the boring work.\n\nThe warm-up that prevents injury.\nThe small fix that prevents churn.\nThe five-second improvement that gives a user five minutes back.\n\nThis is what separates the strong from the strong enough.\n\nIt's not what you do once.\n\nIt's what you do without applause.\n\nYou do it for the growth. For the discipline. For the user whose day you quietly made better. Not for the accolades.\n\nThat's what separates long-term success from short-term effort — not glory, but the passion to do the work for its own sake. The features and the gains? They're just symptoms. What matters is the mission that fuels them.\n\nThat's why I'm so passionate about product management — and about lifting. Because the best PMs and the best lifters don't just show up for themselves. They show up for the team, for the user, for their own growth — not in a selfish way, but in a way that elevates everything and everyone around them.\n\nAnd if you've made it this far — through the reps, the plateaus, the quiet work — you already know:\n\nThis isn't just about shipping or lifting.\n\nIt's about becoming the kind of person, or the kind of team, that keeps showing up.\n\nThat's the real win. And that's where we end this chapter — not at the peak, but at the foundation.";
      case "the-work-becomes-the-win":
        return "At some point, the reps stop being something you have to do. They just become something you do.\n\nYou stop chasing motivation and start trusting momentum.\n\nYou stop asking when it gets easy and start asking how to keep showing up.\n\nAnd that's the shift — not just in the gym or in your sprint board, but in your mindset. You lift because you care. You build because it matters. Because you love it.\n\nIt's not about PRs or product launches. It's about what they represent: The hours you logged. The patterns you learned. The people you helped.\n\nThat's what it means to be mission built.\n\nYou're not doing it for the spotlight.\n\nYou're doing it because you've seen the power of the process — and you're not walking away from it.\n\nProgress doesn't shout — it stacks.\n\nOne quiet rep at a time.\n\nAnd if repetition is the foundation, what you build on top of it matters.\n\nThe next chapter explores exactly that: how rituals — not rules — help you grow, adapt, and lead with purpose.\n\nUp next: Rituals Over Rules.";
      default:
        return "Content for this section will be added soon.";
    }
  }
  
  return "Content for this section will be added soon.";
};

const getSections = (chapterId: number) => {
  if (chapterId === 1) {
    return [
      { id: "mission-is-the-magnet", title: "The Mission Is the Magnet" },
      { id: "the-drift", title: "The Drift" },
      { id: "repetition-with-intention", title: "Repetition with Intention" }
    ];
  }
  
  if (chapterId === 2) {
    return [
      { id: "the-myth-of-overnight-success", title: "The Myth of Overnight Success" },
      { id: "repetition-is-not-redundancy", title: "Repetition Is Not Redundancy" },
      { id: "when-the-spark-fades", title: "When the Spark Fades" },
      { id: "the-multiplier-of-boring-work", title: "The Multiplier of Boring Work" },
      { id: "the-work-becomes-the-win", title: "The Work Becomes the Win" }
    ];
  }
  
  return [];
};

const generateEpub = async (chapter: Chapter) => {
  const zip = new JSZip();

  // Generate unique ID and current date
  const uuid = generateUUID();
  const currentDate = new Date().toISOString();

  // Add the mimetype file (must be first and uncompressed)
  zip.file("mimetype", "application/epub+zip");

  // Create the META-INF directory and add container.xml
  const metaInf = zip.folder("META-INF");
  metaInf?.file("container.xml", `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`);

  // Create the OEBPS directory
  const oebps = zip.folder("OEBPS");

  // Generate cover image
  const coverImageBlob = await generateCoverImage(chapter);

  // Add the content.opf file with proper metadata and image cover reference
  oebps?.file("content.opf", `<?xml version="1.0" encoding="UTF-8"?>
<package version="3.0" xmlns="http://www.idpf.org/2007/opf" unique-identifier="pub-id">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>${escapeXml(chapter.title)}</dc:title>
    <dc:creator>Mike Nichols</dc:creator>
    <dc:identifier id="pub-id">urn:uuid:${uuid}</dc:identifier>
    <dc:language>en</dc:language>
    <meta property="dcterms:modified">${currentDate}</meta>
    <meta name="cover" content="cover-image"/>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="cover-image" href="cover.png" media-type="image/png" properties="cover-image"/>
    <item id="cover-page" href="cover.xhtml" media-type="application/xhtml+xml"/>
    <item id="inside-cover" href="inside-cover.xhtml" media-type="application/xhtml+xml"/>
    <item id="content" href="content.xhtml" media-type="application/xhtml+xml"/>
    <item id="license" href="license.xhtml" media-type="application/xhtml+xml"/>
    <item id="style" href="style.css" media-type="text/css"/>
    <item id="logo" href="logo.png" media-type="image/png"/>
  </manifest>
  <spine toc="nav">
    <itemref idref="cover-page"/>
    <itemref idref="inside-cover"/>
    <itemref idref="content"/>
    <itemref idref="license"/>
  </spine>
  <guide>
    <reference type="cover" title="Cover" href="cover.xhtml"/>
  </guide>
</package>`);

  // Add the cover image
  oebps?.file("cover.png", coverImageBlob);

  // Add the nav.xhtml file with visible header and footer elements
  oebps?.file("nav.xhtml", `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
  <title>Table of Contents</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <div class="header-bar">
    <span class="header-left">Mission Built</span>
    <span class="header-right">Training Log ${chapter.id}: ${escapeXml(chapter.title)}</span>
  </div>
  
  <div class="main-content">
    <nav epub:type="toc">
      <h1>Table of Contents</h1>
      <ol>
        <li><a href="cover.xhtml">Cover</a></li>
        <li><a href="inside-cover.xhtml">Inside Cover</a></li>
        <li><a href="content.xhtml">${escapeXml(chapter.title)}</a></li>
        <li><a href="license.xhtml">License</a></li>
      </ol>
    </nav>
  </div>
  
  <div class="footer-bar">
    <span class="footer-left">missionbuilt.io</span>
    <span class="footer-right">CC BY-NC 4.0</span>
  </div>
</body>
</html>`);

  // Add the cover page (dark mode style) - this is the main cover that should be displayed
  oebps?.file("cover.xhtml", `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Cover</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body class="cover-page dark-cover">
  <div class="cover-content">
    <div class="cover-header">
      <div class="logo-container">
        <img src="logo.png" alt="MissionBuilt Logo" class="logo-image" />
        <div class="logo-text">
          <span class="mission">Mission</span><span class="built">Built</span><span class="domain">.io</span>
        </div>
      </div>
    </div>
    <div class="cover-main">
      <h1 class="cover-title">Mission Built</h1>
      <h2 class="cover-subtitle">Lessons from the Barbell and the Boardroom</h2>
      <p class="cover-training-log">Training Log ${chapter.id}: ${escapeXml(chapter.title)}</p>
      <p class="cover-author">by Mike Nichols</p>
    </div>
    <div class="cover-footer">
      <p class="cc-license">Licensed under Creative Commons Attribution-NonCommercial 4.0</p>
    </div>
  </div>
</body>
</html>`);

  // Add the inside cover page with visible header and footer
  oebps?.file("inside-cover.xhtml", `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Inside Cover</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <div class="header-bar">
    <span class="header-left">Mission Built</span>
    <span class="header-right">Training Log ${chapter.id}: ${escapeXml(chapter.title)}</span>
  </div>
  
  <div class="main-content cover-page light-cover">
    <div class="cover-content">
      <div class="cover-header">
        <div class="logo-container">
          <img src="logo.png" alt="MissionBuilt Logo" class="logo-image" />
          <div class="logo-text">
            <span class="mission">Mission</span><span class="built">Built</span><span class="domain">.io</span>
          </div>
        </div>
      </div>
      <div class="cover-main">
        <h1 class="cover-title">Mission Built</h1>
        <h2 class="cover-subtitle">Lessons from the Barbell and the Boardroom</h2>
        <p class="cover-training-log">Training Log ${chapter.id}: ${escapeXml(chapter.title)}</p>
        <p class="cover-author">by Mike Nichols</p>
      </div>
      <div class="cover-footer">
        <p class="cc-license">Licensed under Creative Commons Attribution-NonCommercial 4.0</p>
      </div>
    </div>
  </div>
  
  <div class="footer-bar">
    <span class="footer-left">missionbuilt.io</span>
    <span class="footer-right">CC BY-NC 4.0</span>
  </div>
</body>
</html>`);

  // Build chapter content using the EXACT same source as the log page
  const sections = getSections(chapter.id);
  let chapterContent = '';
  
  if (sections.length > 0) {
    chapterContent = sections.map(section => {
      const content = getSectionContent(chapter.id, section.id);
      return `<section class="chapter-section">
        <h2>${escapeXml(section.title)}</h2>
        <div class="section-content">${escapeXml(content).replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>')}</div>
      </section>`;
    }).join('');
  }

  // Only add further reading if it exists and has content
  const furtherReadingContent = chapter.furtherReading && chapter.furtherReading.length > 0 ? `
    <section>
      <h2>Further Reading</h2>
      <ul>
        ${chapter.furtherReading.map(resource => `
          <li>
            <a href="${escapeXml(resource.url)}">${escapeXml(resource.title)}</a>
            ${resource.description ? `<p>${escapeXml(resource.description)}</p>` : ''}
            ${resource.note ? `<p><em>Note: ${escapeXml(resource.note)}</em></p>` : ''}
          </li>
        `).join('')}
      </ul>
    </section>
  ` : '';

  // Add the content.xhtml file with visible header and footer
  oebps?.file("content.xhtml", `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>${escapeXml(chapter.title)}</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <div class="header-bar">
    <span class="header-left">Mission Built</span>
    <span class="header-right">Training Log ${chapter.id}: ${escapeXml(chapter.title)}</span>
  </div>
  
  <div class="main-content">
    <h1>${escapeXml(chapter.title)}</h1>
    <p class="chapter-description">${escapeXml(chapter.description)}</p>
    ${chapterContent}
    ${furtherReadingContent}
  </div>
  
  <div class="footer-bar">
    <span class="footer-left">missionbuilt.io</span>
    <span class="footer-right">CC BY-NC 4.0</span>
  </div>
</body>
</html>`);

  // Add the license page with visible header and footer
  oebps?.file("license.xhtml", `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>License</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <div class="header-bar">
    <span class="header-left">Mission Built</span>
    <span class="header-right">Training Log ${chapter.id}: ${escapeXml(chapter.title)}</span>
  </div>
  
  <div class="main-content">
    <h1>License</h1>
    
    <h2>Mission Built: Lessons from the Barbell and the Boardroom</h2>
    <p><strong>by Mike Nichols</strong></p>
    
    <p>This work is licensed under a<br/>
    <strong>Creative Commons Attribution-NonCommercial 4.0 International License.</strong><br/>
    To view a copy of this license, visit<br/>
    <a href="https://creativecommons.org/licenses/by-nc/4.0">creativecommons.org/licenses/by-nc/4.0</a></p>
    
    <p>You are free to share and adapt this work for non-commercial use, with appropriate credit and a link to <a href="https://missionbuilt.io">missionbuilt.io</a>.</p>
  </div>
  
  <div class="footer-bar">
    <span class="footer-left">missionbuilt.io</span>
    <span class="footer-right">CC BY-NC 4.0</span>
  </div>
</body>
</html>`);

  // Add simplified CSS that EPUB readers will actually display
  oebps?.file("style.css", `/* Base typography and layout */
body { 
  font-family: Georgia, serif;
  line-height: 1.6; 
  margin: 0;
  padding: 0;
  color: #333333;
  background-color: #ffffff;
}

/* Header and footer bars - Always visible */
.header-bar {
  width: 100%;
  padding: 8px 16px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.header-bar::after {
  content: "";
  display: table;
  clear: both;
}

.header-left {
  float: left;
  color: #495057;
}

.header-right {
  float: right;
  color: #007bff;
}

.footer-bar {
  width: 100%;
  padding: 8px 16px;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  margin-top: 24px;
  font-size: 12px;
  font-weight: bold;
}

.footer-bar::after {
  content: "";
  display: table;
  clear: both;
}

.footer-left {
  float: left;
  color: #007bff;
}

.footer-right {
  float: right;
  color: #6c757d;
}

/* Main content area */
.main-content {
  padding: 0 20px;
  max-width: 600px;
  margin: 0 auto;
}

/* Cover page styles - special case without header/footer bars */
.cover-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dark-cover {
  background-color: #1a1a1a;
  color: #ffffff;
}

.light-cover {
  background-color: #ffffff;
  color: #333333;
}

.cover-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
}

.cover-header {
  flex: 0 0 auto;
  margin-bottom: 40px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-image {
  height: 32px;
  width: auto;
}

.dark-cover .logo-image {
  filter: brightness(0) invert(1);
}

.light-cover .logo-image {
  filter: none;
}

.logo-text {
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 24px;
}

.dark-cover .mission { color: #ffffff; }
.dark-cover .built { color: #ffd700; }
.dark-cover .domain { color: #90ee90; }

.light-cover .mission { color: #333333; }
.light-cover .built { color: #ffa500; }
.light-cover .domain { color: #228b22; }

.cover-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 16px;
}

.cover-title {
  font-family: Arial, sans-serif;
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
}

.cover-subtitle {
  font-family: Arial, sans-serif;
  font-size: 28px;
  font-weight: normal;
  margin: 0;
  line-height: 1.3;
  opacity: 0.9;
}

.cover-training-log {
  font-size: 20px;
  font-weight: bold;
  margin: 24px 0 8px 0;
  opacity: 0.8;
}

.cover-author {
  font-size: 24px;
  font-weight: normal;
  margin: 8px 0 0 0;
  opacity: 0.8;
}

.cover-footer {
  flex: 0 0 auto;
  text-align: center;
}

.cc-license {
  font-size: 14px;
  opacity: 0.7;
  margin: 0;
}

/* Content typography */
h1 { 
  font-family: Arial, sans-serif;
  font-size: 32px; 
  font-weight: bold;
  margin: 0 0 16px 0;
  color: #333333;
  line-height: 1.2;
}

h2 { 
  font-family: Arial, sans-serif;
  font-size: 24px; 
  font-weight: bold;
  margin: 32px 0 16px 0;
  color: #007bff;
  line-height: 1.3;
}

h3 {
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin: 24px 0 12px 0;
  color: #333333;
}

.chapter-description {
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 24px;
  font-style: italic;
}

.chapter-section {
  margin-bottom: 32px;
}

.section-content {
  line-height: 1.7;
}

.section-content p {
  margin-bottom: 16px;
  line-height: 1.7;
}

p {
  margin-bottom: 16px;
  line-height: 1.7;
}

ul { 
  list-style-type: disc; 
  padding-left: 32px;
  margin: 16px 0;
}

li { 
  margin-bottom: 8px; 
  line-height: 1.6;
}

a { 
  color: #007bff; 
  text-decoration: underline; 
}

/* Navigation styles */
nav ol {
  list-style-type: decimal;
  padding-left: 32px;
}

nav li {
  margin-bottom: 8px;
  line-height: 1.5;
}

/* Ensure headers and footers are always visible */
.header-bar,
.footer-bar {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

/* Page break controls */
@page {
  margin: 0.5in;
}

.cover-page {
  page-break-after: always;
}

h1, h2 {
  page-break-after: avoid;
}

.chapter-section {
  page-break-inside: avoid;
}
`);

  // Add the logo image to the EPUB
  try {
    const logoResponse = await fetch('/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png');
    const logoBlob = await logoResponse.blob();
    oebps?.file("logo.png", logoBlob);
  } catch (error) {
    console.warn('Could not include logo in EPUB:', error);
  }

  // Generate the EPUB file with proper compression
  const content = await zip.generateAsync({ 
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: {
      level: 9
    }
  });
  
  FileSaver.saveAs(content, `${chapter.slug}.epub`);
};

const generateCoverImage = async (chapter: Chapter): Promise<Blob> => {
  // Create a canvas to generate the cover image
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Could not get canvas context');
  }

  // Set canvas dimensions (standard book cover ratio)
  canvas.width = 800;
  canvas.height = 1200;

  // Dark gradient background for more visual interest
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#0f172a');
  gradient.addColorStop(0.7, '#1e293b');
  gradient.addColorStop(1, '#0f172a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Load and draw logo
  try {
    const logoImg = new Image();
    logoImg.crossOrigin = 'anonymous';
    
    await new Promise((resolve, reject) => {
      logoImg.onload = resolve;
      logoImg.onerror = reject;
      logoImg.src = '/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png';
    });

    // Draw logo (make it white for dark background)
    ctx.filter = 'brightness(0) invert(1)';
    ctx.drawImage(logoImg, 60, 60, 80, 80);
    ctx.filter = 'none';
  } catch (error) {
    console.warn('Could not load logo for cover image:', error);
  }

  // Draw logo text with better spacing
  ctx.font = 'bold 42px Montserrat, sans-serif';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('Mission', 160, 110);
  
  ctx.fillStyle = '#fbbf24';
  const missionWidth = ctx.measureText('Mission').width;
  ctx.fillText('Built', 160 + missionWidth, 110);
  
  ctx.fillStyle = '#65a30d';
  const builtWidth = ctx.measureText('Built').width;
  ctx.fillText('.io', 160 + missionWidth + builtWidth, 110);

  // Draw main book title with enhanced styling
  ctx.textAlign = 'center';
  ctx.font = 'bold 78px Montserrat, sans-serif';
  ctx.fillStyle = '#f8fafc';
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 2;
  ctx.strokeText('Mission Built', canvas.width / 2, canvas.height / 2 - 150);
  ctx.fillText('Mission Built', canvas.width / 2, canvas.height / 2 - 150);

  // Draw subtitle with improved readability
  ctx.font = '44px Montserrat, sans-serif';
  ctx.fillStyle = '#e2e8f0';
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 1;
  
  // Split subtitle into two lines for better formatting
  const line1 = 'Lessons from the Barbell';
  const line2 = 'and the Boardroom';
  
  ctx.strokeText(line1, canvas.width / 2, canvas.height / 2 - 70);
  ctx.fillText(line1, canvas.width / 2, canvas.height / 2 - 70);
  
  ctx.strokeText(line2, canvas.width / 2, canvas.height / 2 - 20);
  ctx.fillText(line2, canvas.width / 2, canvas.height / 2 - 20);

  // Draw training log info with accent color
  ctx.font = 'bold 36px Montserrat, sans-serif';
  ctx.fillStyle = '#fbbf24';
  ctx.strokeStyle = '#92400e';
  ctx.lineWidth = 1;
  const trainingLogText = `Training Log ${chapter.id}: ${chapter.title}`;
  ctx.strokeText(trainingLogText, canvas.width / 2, canvas.height / 2 + 60);
  ctx.fillText(trainingLogText, canvas.width / 2, canvas.height / 2 + 60);

  // Draw author with elegant styling
  ctx.font = '40px Montserrat, sans-serif';
  ctx.fillStyle = '#cbd5e1';
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 1;
  ctx.strokeText('by Mike Nichols', canvas.width / 2, canvas.height / 2 + 140);
  ctx.fillText('by Mike Nichols', canvas.width / 2, canvas.height / 2 + 140);

  // Add decorative elements
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 100, canvas.height / 2 + 180);
  ctx.lineTo(canvas.width / 2 + 100, canvas.height / 2 + 180);
  ctx.stroke();

  // Draw license with subtle styling
  ctx.font = '26px Inter, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.textAlign = 'center';
  ctx.fillText('Licensed under Creative Commons Attribution-NonCommercial 4.0', canvas.width / 2, canvas.height - 80);

  // Convert canvas to blob
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob || new Blob());
    }, 'image/png');
  });
};

// Helper function to escape XML/HTML content
const escapeXml = (unsafe: string): string => {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&#39;';
      case '"': return '&quot;';
      default: return c;
    }
  });
};

// Helper function to generate UUID
const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export { generateEpub };
