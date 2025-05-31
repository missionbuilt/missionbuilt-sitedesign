import { chapter1Content } from './chapters/chapter-1-content';

export interface Section {
  id: string;
  title: string;
  content: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  publishDate: string;
  authorName: string;
  heroImage: string;
  status: "published" | "coming-soon" | "draft";
  sections?: Section[];
  loadContent?: () => Promise<{ sections: Section[] }>;
}

// Helper function to calculate reading time dynamically
export const getDynamicReadingTime = (chapter: Chapter): number => {
  if (!chapter.sections || chapter.sections.length === 0) {
    return 5; // Default reading time for chapters without sections
  }

  const totalWords = chapter.sections.reduce((total, section) => {
    const textContent = section.content.replace(/<[^>]*>/g, ''); // Strip HTML tags
    const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;
    return total + wordCount;
  }, 0);

  return Math.max(1, Math.ceil(totalWords / 200)); // Assume 200 words per minute reading speed
};

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Mission Before Metrics",
    description: "Why leading with your 'why' creates stronger products than chasing numbers. Like powerlifting, great products start with perfect form—your mission—before adding weight through metrics.",
    publishDate: "May 24, 2025",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/777697e9-e718-4177-9c47-cb5be778fdd3.png",
    status: "published",
    loadContent: async () => chapter1Content
  },
  {
    id: 2,
    title: "The User is Your Training Partner",
    description: "How treating users like training partners—with respect, attention, and genuine care—builds stronger products than treating them like numbers on a dashboard.",
    publishDate: "May 24, 2025",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/dfd1484c-2dce-4c45-a3ef-e17eefa59dcc.png",
    status: "published",
    sections: [
      {
        id: "the-training-partner-mindset",
        title: "The Training Partner Mindset",
        content: `<p>In powerlifting, your training partner isn't just someone who spots you when you're under a heavy bar. They're someone who knows your goals, understands your struggles, celebrates your victories, and calls you out when you're making excuses. They're invested in your success because they know that when you succeed, the whole community gets stronger.</p>

<p>This is how we should think about our users.</p>

<p>But here's what I see happening in most product teams: users are treated like subjects in an experiment. We A/B test them. We track their every move. We analyze their behavior patterns. We segment them into cohorts. We measure their lifetime value.</p>

<p>We treat them like data points, not like people.</p>

<p>And then we wonder why our products feel cold, why our users don't trust us, why our communities don't form naturally, why people use our products but don't love them.</p>`
      },
      {
        id: "what-training-partners-do",
        title: "What Training Partners Do",
        content: `<p>Let me tell you what a good training partner does, and how it applies to product development:</p>

<h3>1. They Know Your Goals</h3>
<p>A good training partner doesn't just show up to the gym with you. They know what you're working toward. Are you trying to hit a new personal record? Preparing for a competition? Coming back from an injury? Working on a specific weakness?</p>

<p>They ask questions. They listen. They remember what you told them last week about your progress, your struggles, your aspirations.</p>

<p>In product terms: Do you actually know what your users are trying to accomplish? Not just within your product, but in their lives? What are their real goals, their real challenges, their real aspirations?</p>

<p>Most product teams can tell you exactly how users behave in their app—which buttons they click, how long they spend on each screen, when they convert, when they churn. But they can't tell you what their users are actually trying to achieve in their lives, or how the product fits into that broader context.</p>

<h3>2. They Provide Honest Feedback</h3>
<p>A training partner will tell you when your form is off, even if it's uncomfortable. They'll point out when you're rushing through reps, when you're using too much weight, when you're not going deep enough on your squats.</p>

<p>They do this not to be critical, but because they care about your progress and your safety.</p>

<p>In product: When was the last time you asked your users for honest feedback about what's not working? Not through a survey or an analytics dashboard, but through a real conversation where they feel safe to tell you the truth?</p>

<p>Most companies are afraid of negative feedback. They design their feedback systems to capture positive sentiment and filter out the rest. But your best users—your training partners—want to help you improve. They just need to trust that you'll actually listen.</p>

<h3>3. They Celebrate Your Wins</h3>
<p>When you hit a personal record, your training partner is the first to celebrate with you. They know how hard you've been working, how many times you've failed at that weight before, what this achievement means for your bigger goals.</p>

<p>In product: Do you celebrate your users' successes? Not just when they upgrade their subscription or increase their usage, but when they achieve their real-world goals?</p>

<p>If you're building a fitness app, are you celebrating when someone runs their first 5K, not just when they log their 100th workout? If you're building a learning platform, are you celebrating when someone gets promoted at work, not just when they complete a course?</p>

<h3>4. They Hold You Accountable</h3>
<p>A training partner will call you out when you're making excuses. When you say you can't lift today because you're tired, they'll remind you that you said the same thing last week. When you want to skip the accessory work because it's boring, they'll point out that your weak points are holding back your main lifts.</p>

<p>They do this because they know the difference between what you want right now and what you want most.</p>

<p>In product: Are you helping your users stay accountable to their goals, even when it's inconvenient for your metrics? Sometimes this means preventing them from making impulsive decisions. Sometimes it means reminding them of commitments they made to themselves. Sometimes it means saying no to feature requests that would help them procrastinate.</p>`
      },
      {
        id: "the-data-vs-relationship-trap",
        title: "The Data vs. Relationship Trap",
        content: `<p>Here's where most product teams get stuck: they think that having more data about users is the same as having a better relationship with users.</p>

<p>It's not.</p>

<p>Imagine if your training partner's only interaction with you was to track your workouts, measure your progress, and send you automated encouragement messages based on your performance data. You'd probably find a new training partner pretty quickly.</p>

<p>Yet this is exactly how most products interact with their users. We collect enormous amounts of behavioral data, but we rarely have real conversations. We send personalized notifications based on algorithms, but we don't actually know what's going on in our users' lives.</p>

<p>Data tells you what happened. Relationships tell you why it happened and what it means.</p>

<p>Both are important, but relationships come first. The data should inform and enhance the relationship, not replace it.</p>`
      },
      {
        id: "building-training-partner-products",
        title: "Building Training Partner Products",
        content: `<p>So how do you build products that treat users like training partners instead of data points?</p>

<h3>Start with Real Conversations</h3>
<p>Before you build anything, talk to your users. Not through surveys or focus groups, but through real, unstructured conversations. Ask them about their goals, their challenges, their daily routines. Ask them what success looks like in their lives, not just in your product.</p>

<p>And then—this is crucial—remember what they tell you. Build systems to capture and share these insights across your team. Make sure everyone understands not just what users do, but who users are and what they're trying to accomplish.</p>

<h3>Design for Long-term Success, Not Short-term Engagement</h3>
<p>A good training partner cares more about your progress toward your goals than about how much time you spend in the gym with them. Sometimes they'll even tell you to take a rest day or work with a different partner if that's what's best for you.</p>

<p>Your product should be the same. Optimize for user success, even when it conflicts with traditional engagement metrics. If your meditation app helps someone reduce their anxiety to the point where they don't need the app as much, that's a win. If your financial app helps someone get their spending under control so they use it less frequently, that's a win.</p>

<h3>Create Feedback Loops, Not Just Data Collection</h3>
<p>Data collection is one-way. Feedback loops are two-way. When users give you feedback—through their behavior or their words—show them that you heard it and what you're doing about it.</p>

<p>This doesn't mean implementing every feature request, but it does mean acknowledging the underlying need and explaining your approach to addressing it.</p>

<h3>Celebrate User Success, Not Just Product Success</h3>
<p>Track and celebrate when your users achieve their real-world goals, not just when they hit your product metrics. Share these stories with your team. Make user success as important as business success in your culture.</p>

<h3>Be Honest About Trade-offs</h3>
<p>Sometimes what's good for your business in the short term isn't what's good for your users. A training partner would tell you the truth in this situation. Your product should too.</p>

<p>This might mean being transparent about how you make money, what data you collect and why, or what the real costs and benefits of your product are. It might mean recommending competitors when they're a better fit for a user's needs.</p>`
      },
      {
        id: "the-compound-effect",
        title: "The Compound Effect",
        content: `<p>Here's what happens when you treat users like training partners instead of data points:</p>

<p>In the short term, your traditional metrics might actually get worse. Users might spend less time in your product. They might be more demanding. They might expect more from you.</p>

<p>But in the long term, something powerful happens. Your users become advocates. They don't just use your product; they recommend it to others. They don't just tolerate your communications; they look forward to them. They don't just pay for your product; they become invested in your success.</p>

<p>This is the compound effect of treating users like partners. Just like in powerlifting, the benefits aren't always immediately visible, but they build over time into something much stronger than what you could achieve with quick fixes.</p>

<p>Your users start to care about your product's success because they see how invested you are in theirs. They give you better feedback because they trust you to use it well. They stick with you through difficult periods because they know you're in it for the long haul.</p>

<p>And eventually, your traditional metrics catch up too. Because when people truly love your product—when they see it as a partner in their success rather than just a tool they use—they naturally engage more, stay longer, and pay more over time.</p>

<p>But it starts with changing how you think about the relationship. It starts with seeing your users not as subjects to be optimized, but as partners to be served.</p>

<p>It starts with caring more about their success than your own metrics.</p>

<p>Because in the end, just like in powerlifting, the strongest relationships are built on mutual respect, shared goals, and genuine care for each other's progress.</p>

<p>Your users are not your data points. They're your training partners.</p>

<p>Treat them accordingly.</p>`
      }
    ]
  },
  {
    id: 3,
    title: "Progressive Overload in Product",
    description: "How the powerlifting principle of gradually increasing difficulty creates stronger products. Small, consistent improvements beat dramatic overhauls every time.",
    publishDate: "May 29, 2025",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/e99cef43-4b1f-469b-80cf-a4896d8629b7.png",
    status: "published",
    sections: [
      {
        id: "the-principle-of-progressive-overload",
        title: "The Principle of Progressive Overload",
        content: `<p>In powerlifting, there's a fundamental principle that drives all strength gains: progressive overload. The idea is simple—to get stronger, you must gradually increase the demands placed on your muscles over time. This could mean adding more weight to the bar, performing more repetitions, or increasing the frequency of your training.</p>

<p>The key word here is <em>gradually</em>.</p>

<p>You don't go from squatting 135 pounds to 315 pounds overnight. You add 5 pounds this week, maybe 10 pounds next week. You increase your reps from 8 to 10, then from 10 to 12. You train three days a week, then four, then five. Each step is manageable, sustainable, and builds on the previous one.</p>

<p>This gradual progression is what allows your body to adapt, grow stronger, and handle increasingly heavier loads without breaking down.</p>

<p>Product development should work the same way.</p>`
      },
      {
        id: "the-big-rewrite-fallacy",
        title: "The Big Rewrite Fallacy",
        content: `<p>But here's what I see happening in most product teams: they try to go from squatting 135 to 315 in one session. They call it "the big rewrite," "the platform migration," or "the complete redesign."</p>

<p>The reasoning always sounds logical: "Our current architecture is holding us back. We need to rebuild from the ground up with modern technology. It'll be faster, more scalable, more maintainable."</p>

<p>Or: "Our UX is outdated. Users expect something more modern. We need to redesign the entire interface to stay competitive."</p>

<p>These aren't necessarily wrong observations. Sometimes your architecture does need updating. Sometimes your UX does need refreshing. But the approach—trying to change everything at once—is where teams get into trouble.</p>

<p>In powerlifting, if you try to add too much weight too quickly, one of several things happens:</p>

<ul>
<li>You fail the lift completely</li>
<li>You succeed but with terrible form, risking injury</li>
<li>You burn out from the excessive strain</li>
<li>You plateau because your supporting muscles can't keep up</li>
</ul>

<p>The same things happen with big rewrites in product development:</p>

<ul>
<li>The project fails completely and never ships</li>
<li>It ships but with major bugs and performance issues</li>
<li>The team burns out from the prolonged crunch</li>
<li>You discover that your new foundation can't support features you hadn't considered</li>
</ul>

<p>I've seen this pattern repeat itself across dozens of companies. The bigger the rewrite, the more likely it is to fail or cause more problems than it solves.</p>`
      },
      {
        id: "what-progressive-overload-looks-like-in-product",
        title: "What Progressive Overload Looks Like in Product",
        content: `<p>Progressive overload in product development means making small, consistent improvements that compound over time. Instead of dramatic overhauls, you focus on incremental changes that move you toward your larger goals.</p>

<p>Here's how this might look in practice:</p>

<h3>Architecture Evolution</h3>
<p>Instead of rewriting your entire backend, you identify the most problematic service and refactor just that one. You implement the new pattern, measure the improvement, and then apply the same approach to the next service. Over six months, you've modernized your entire architecture without ever stopping feature development or risking system stability.</p>

<h3>UX Improvements</h3>
<p>Instead of redesigning your entire interface, you focus on the one flow that's causing the most user friction. You test new approaches, measure the impact, and iterate. Once that flow is working well, you move to the next one. Your users get continuous value, and you learn from each change before applying it more broadly.</p>

<h3>Performance Optimization</h3>
<p>Instead of attempting to solve all performance issues at once, you identify the biggest bottleneck and focus entirely on that. You measure the improvement, celebrate the win, and then move to the next bottleneck. Each optimization teaches you something about your system and your users.</p>

<h3>Feature Development</h3>
<p>Instead of building complete, complex features, you break them down into the smallest possible valuable pieces. You ship the core functionality first, gather feedback, and then add complexity based on what you learn. Users get value sooner, and you avoid building features they don't actually want.</p>`
      },
      {
        id: "the-compound-power-of-small-changes",
        title: "The Compound Power of Small Changes",
        content: `<p>Here's what most people don't understand about progressive overload: the magic isn't in any individual increment. Adding 5 pounds to your squat this week isn't going to transform your physique. The magic is in the compounding effect of consistent increments over time.</p>

<p>If you add just 5 pounds to your squat every month for a year, you've increased your squat by 60 pounds. That's the difference between an intermediate lifter and an advanced lifter. But it happened so gradually that it never felt overwhelming.</p>

<p>The same principle applies to product development. Small improvements compound in ways that dramatic changes can't:</p>

<h3>Learning Compounds</h3>
<p>Each small change teaches you something about your users, your system, your market. These learnings inform the next change, making it more effective. Over time, you develop an intuition for what works that no amount of upfront planning could provide.</p>

<h3>Confidence Compounds</h3>
<p>Successfully shipping small improvements builds team confidence and momentum. Each win makes the next challenge feel more manageable. Teams that consistently ship small improvements become teams that can tackle bigger challenges when they're truly necessary.</p>

<h3>User Trust Compounds</h3>
<p>Users notice when their experience is consistently improving. They start to trust that you're listening to their feedback and working to address their needs. This trust makes them more patient with temporary issues and more willing to try new features.</p>

<h3>Technical Capability Compounds</h3>
<p>Each improvement to your architecture, your processes, or your tools makes the next improvement easier. You build systems that support change rather than resist it. You develop practices that make shipping safer and faster.</p>`
      },
      {
        id: "when-to-break-the-rule",
        title: "When to Break the Rule",
        content: `<p>Now, I'm not saying you should never make big changes. Even in powerlifting, there are times when you need to deload completely and rebuild from scratch—when you're coming back from an injury, when you've developed bad habits that need to be corrected, or when you're switching to a completely different training methodology.</p>

<p>The same is true in product development. Sometimes a big rewrite or redesign is genuinely necessary. Here's when you might consider breaking the progressive overload rule:</p>

<h3>Technical Debt Is Preventing All Progress</h3>
<p>If your current architecture is so problematic that even small changes are extremely difficult and risky, a larger refactoring might be justified. But even then, consider whether you can isolate the most problematic parts and tackle them incrementally.</p>

<h3>Market Conditions Have Fundamentally Changed</h3>
<p>If your industry has shifted in a way that makes your current approach obsolete, you might need to make bigger changes to stay relevant. But make sure you're responding to real market changes, not just competitive pressure or fear of missing out.</p>

<h3>You Have Clear Evidence of What the New Approach Should Be</h3>
<p>Big changes work better when you're moving toward something specific, not just away from something problematic. If you've validated a new approach through smaller experiments, a larger implementation might make sense.</p>

<h3>You Can Afford the Risk</h3>
<p>Big changes are risky. They take longer, cost more, and have a higher chance of failure. Make sure you can afford these risks before taking them on.</p>`
      },
      {
        id: "implementing-progressive-overload",
        title: "Implementing Progressive Overload",
        content: `<p>If you want to apply progressive overload to your product development, here's how to start:</p>

<h3>1. Identify Your Current State</h3>
<p>Just like you need to know your current squat max before you can plan progression, you need to understand your current product capabilities. What's working well? What's causing problems? Where are the biggest opportunities for improvement?</p>

<h3>2. Define Your Target State</h3>
<p>Where do you want to be in 6-12 months? What capabilities do you want to have? What problems do you want to have solved? Be specific, but don't try to plan every detail.</p>

<h3>3. Break It Down</h3>
<p>What's the smallest change you could make this week that would move you toward your target state? Focus on changes that provide immediate value while building toward your larger goal.</p>

<h3>4. Measure and Adjust</h3>
<p>Track the impact of each change. What worked? What didn't? What did you learn? Use these insights to inform your next increment.</p>

<h3>5. Stay Consistent</h3>
<p>The power of progressive overload comes from consistency, not intensity. It's better to make small improvements every week than to alternate between big pushes and periods of stagnation.</p>

<h3>6. Celebrate the Process</h3>
<p>Don't wait until you reach your final goal to celebrate. Acknowledge each successful increment. This builds momentum and helps the team stay motivated during longer improvement cycles.</p>`
      },
      {
        id: "the-long-term-view",
        title: "The Long-term View",
        content: `<p>Progressive overload requires patience. It requires faith that small improvements will add up to significant change over time. It requires resisting the temptation to make dramatic changes when progress feels slow.</p>

<p>This can be challenging in a business environment where there's pressure for immediate results, where competitors seem to be moving faster, where stakeholders want to see dramatic progress.</p>

<p>But here's what I've learned from both powerlifting and product development: sustainable progress beats dramatic spurts every time. The companies that compound small improvements consistently over time outperform the companies that make big bets sporadically.</p>

<p>Your users don't need you to rebuild everything from scratch. They need you to consistently make their experience a little bit better. Your team doesn't need to work on the most cutting-edge technology. They need to work on technology that reliably serves your mission.</p>

<p>Your product doesn't need to be perfect. It needs to be progressively better.</p>

<p>This is the power of progressive overload: it transforms both your product and your team's capability to improve it. Each small change makes you stronger, more capable, more confident in taking on the next challenge.</p>

<p>And over time, when you look back at where you started, you'll be amazed at how far you've come—not through any single dramatic change, but through the consistent application of small improvements that compounded into something much larger.</p>

<p>Just like in powerlifting, the strongest products are built 5 pounds at a time.</p>`
      }
    ]
  },
  {
    id: 4,
    title: "Feedback is a Superpower",
    description: "How powerlifting taught me that feedback—not metrics—is the real driver of improvement. Whether it's form correction or user insights, growth happens when you listen.",
    publishDate: "May 30, 2025",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/fe278df4-1643-4dd0-9a61-51e73f29901d.png",
    status: "published",
    sections: [
      {
        id: "the-mirror-doesnt-lie",
        title: "The Mirror Doesn't Lie",
        content: `<p>There's a moment every powerlifter dreads: watching the video playback of a lift you thought was perfect.</p>

<p>You felt strong. The weight moved smoothly. You hit depth on your squat, locked out your deadlift, pressed the bar in a straight line. In your mind, it was textbook form.</p>

<p>Then you see the video. Your knees cave in. Your back rounds. The bar path looks like a drunken zigzag. What felt like perfection was actually a disaster waiting to happen.</p>

<p>This is feedback in its purest form. Uncomfortable, undeniable, and absolutely essential.</p>

<p>The mirror doesn't lie. The video doesn't lie. Your training partner who points out your form breakdown doesn't lie. They might hurt your ego, but they save you from injury and stagnation.</p>

<p>Yet in product development, we've built elaborate systems to avoid this kind of direct feedback. We hide behind metrics that make us feel good. We design surveys that lead users toward positive responses. We cherry-pick testimonials that confirm what we already believe.</p>

<p>We've become afraid of the mirror.</p>`
      },
      {
        id: "metrics-vs-feedback",
        title: "Metrics vs. Feedback",
        content: `<p>Don't get me wrong—metrics have their place. In powerlifting, I track the weight on the bar, the number of reps, the progression over time. These numbers tell me whether I'm getting stronger.</p>

<p>But they don't tell me why.</p>

<p>If my squat numbers plateau, the metric tells me I'm stuck. But it doesn't tell me that my ankle mobility is limiting my depth, or that I'm not bracing my core properly, or that I'm psyching myself out before heavy attempts.</p>

<p>That information comes from feedback—from watching video, from having a coach observe my movement, from paying attention to how the weight feels during different parts of the lift.</p>

<p>In product development, we often confuse metrics with feedback. We see that user engagement is down and think we have feedback. We see that conversion rates are improving and think we understand what's working.</p>

<p>But metrics only tell you what happened. Feedback tells you why it happened and what it means for your users.</p>

<blockquote>Metrics: "User session duration decreased by 15% this month."<br><br>Feedback: "I've been using the app less because the new update made it harder to find the features I use most often. I spend more time hunting for things than actually getting work done."</blockquote>

<p>The metric tells you there's a problem. The feedback tells you what the problem is and how to fix it.</p>`
      },
      {
        id: "listening-is-a-lift",
        title: "Listening Is a Lift",
        content: `<p>In powerlifting, learning to lift properly is only half the battle. The other half is learning to listen—to your body, to your coach, to the feedback that's constantly available if you're paying attention.</p>

<p>This is harder than it sounds. When you're under a heavy bar, your natural instinct is to force the movement, to power through with brute strength. But the best lifters learn to listen even in those moments of maximum effort. They feel when their form is breaking down. They hear their coach's cues. They respond to feedback in real time.</p>

<p>The same skill applies to product development, but it's even more challenging because the feedback is often delayed, indirect, and mixed with noise.</p>

<h3>The Challenge of Product Feedback</h3>
<p>In powerlifting, feedback is immediate and clear. You either lift the weight or you don't. Your form is either correct or it isn't. The cause and effect are obvious.</p>

<p>In product development, feedback is messy:</p>

<ul>
<li>Users don't always say what they mean</li>
<li>What they say they want isn't always what they actually need</li>
<li>Feedback comes through multiple channels with different levels of reliability</li>
<li>The loudest feedback isn't always the most representative</li>
<li>Some of your most important users never give feedback at all</li>
</ul>

<p>This complexity is why many teams retreat to metrics. Numbers feel cleaner, more objective, easier to act on. But this is like trying to improve your squat by only looking at the weight on the bar and ignoring everything your body is telling you about how the movement feels.</p>

<h3>Developing Your Feedback Listening Skills</h3>
<p>Just like powerlifting, product feedback requires developing specific listening skills:</p>

<p><strong>Listen for the underlying need, not just the stated request.</strong> When a user asks for a specific feature, try to understand what problem they're trying to solve. Often, there's a better solution than what they're requesting.</p>

<p><strong>Pay attention to what people do, not just what they say.</strong> Behavioral feedback is often more reliable than verbal feedback. If users say they love a feature but rarely use it, trust the behavior.</p>

<p><strong>Look for patterns across multiple feedback sources.</strong> Individual pieces of feedback can be misleading, but patterns across different users, channels, and time periods are usually reliable signals.</p>

<p><strong>Listen to the silence.</strong> Sometimes the most important feedback is what people aren't saying. Why aren't they using a feature you built? Why aren't they recommending your product? Why aren't they upgrading?</p>

<p><strong>Create safe spaces for honest feedback.</strong> People won't tell you the truth if they think you'll react poorly or if they don't believe you'll act on it. You have to earn the right to receive honest feedback.</p>`
      }
    ]
  },
  {
    id: 5,
    title: "The Power of Constraints",
    description: "How setting constraints—like competition deadlines or limited resources—forces creativity and focus. Constraints aren't limitations; they're the mother of innovation.",
    publishDate: "June 06, 2025",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    status: "coming-soon"
  },
  {
    id: 6,
    title: "Deload to Reload",
    description: "Why strategic rest—deloading in powerlifting, downtime in product—is essential for long-term growth. You can't sprint a marathon; sometimes, you need to slow down to speed up.",
    publishDate: "June 13, 2025",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    status: "coming-soon"
  },
  {
    id: 7,
    title: "The Value of a Coach",
    description: "How a good coach—whether in powerlifting or product—provides perspective, guidance, and accountability. Mentorship isn't a luxury; it's a force multiplier.",
    publishDate: "June 20, 2025",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    status: "draft"
  },
  {
    id: 8,
    title: "Form Follows Function",
    description: "How prioritizing function over form—in both lifting and product design—leads to better results. Aesthetics matter, but substance wins in the long run.",
    publishDate: "June 27, 2025",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    status: "draft"
  },
  {
    id: 9,
    title: "The Ecosystem of Support",
    description: "How building a supportive ecosystem—from spotters to stakeholders—amplifies your success. No one achieves greatness alone; it takes a village.",
    publishDate: "July 04, 2025",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    status: "draft"
  }
];

// For Chapter 1, we'll need to load content dynamically
const getChapterWithContent = async (chapter: Chapter): Promise<Chapter> => {
  if (chapter.loadContent && !chapter.sections) {
    const content = await chapter.loadContent();
    return { ...chapter, sections: content.sections };
  }
  return chapter;
};

export { getChapterWithContent };
