import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

export interface Chapter {
  id: number;
  title: string;
  description: string;
  status: "draft" | "coming-soon" | "published";
  authorName: string;
  publishDate: string;
  heroImage: string;
  sections?: Section[];
}

export interface Section {
  id: string;
  title: string;
  content: string;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Discipline is Freedom",
    description: "Why discipline is the secret sauce to achieving anything worthwhile, whether it's building a product or building a stronger you.",
    status: "published" as const,
    authorName: "MissionBuilt.io",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    sections: [
      {
        id: "the-paradox-of-discipline",
        title: "The Paradox of Discipline",
        content: `
          <p>Most people think of discipline as a constraint — a set of rules that box you in. But what if it's actually the key to unlocking your full potential?</p>
          
          <p>Think about it. Discipline is what allows you to consistently show up, even when you don't feel like it. It's what helps you stay focused on your goals, even when distractions abound.</p>
          
          <p>Without discipline, you're at the mercy of your impulses and emotions. You're like a ship without a rudder, tossed around by the waves of life.</p>
          
          <p>But with discipline, you're in control. You're the master of your own destiny.</p>
        `
      },
      {
        id: "discipline-in-product-development",
        title: "Discipline in Product Development",
        content: `
          <p>The same principle applies to product development. Without discipline, your product will be a mess.</p>
          
          <p>You'll be constantly chasing the latest trends, adding features that no one asked for, and neglecting the core functionality that your users rely on.</p>
          
          <p>But with discipline, you can build a product that's focused, user-friendly, and successful.</p>
          
          <p>You'll know exactly what to build, why to build it, and how to build it.</p>
          
          <p>You'll be able to resist the temptation to add unnecessary features, and you'll stay focused on delivering value to your users.</p>
        `
      },
      {
        id: "discipline-in-powerlifting",
        title: "Discipline in Powerlifting",
        content: `
          <p>And it's no different in powerlifting. Without discipline, you'll never reach your full potential.</p>
          
          <p>You'll skip workouts, eat junk food, and neglect your recovery.</p>
          
          <p>But with discipline, you can build a body that's strong, resilient, and capable of anything.</p>
          
          <p>You'll follow a consistent training program, eat a healthy diet, and prioritize your recovery.</p>
          
          <p>You'll be able to push yourself harder than you ever thought possible, and you'll achieve results that you never dreamed of.</p>
        `
      },
      {
        id: "the-path-to-mastery",
        title: "The Path to Mastery",
        content: `
          <p>Discipline is the foundation of mastery. It's what allows you to consistently practice, learn, and improve.</p>
          
          <p>It's not always easy. There will be times when you want to quit, when you feel like you're not making progress.</p>
          
          <p>But if you can stay disciplined, if you can keep showing up and putting in the work, you'll eventually reach your goals.</p>
          
          <p>You'll become a master of your craft, whether it's building products or building a stronger you.</p>
        `
      }
    ]
  },
  {
    id: 2,
    title: "Mission-Driven > Metrics-Driven",
    description: "Why a clear mission is more important than any metric, and how it guides us to build products people truly love.",
    status: "published" as const,
    authorName: "MissionBuilt.io",
    publishDate: "May 24, 2025",
    heroImage: "/lovable-uploads/6964b15f-a694-454c-a89b-7e943a997457.png",
    sections: [
      {
        id: "the-trap-of-metrics",
        title: "The Trap of Metrics",
        content: `
          <p>In the world of product development, it's easy to get caught up in metrics. We track everything from user engagement to conversion rates, and we use these numbers to guide our decisions.</p>
          
          <p>But what happens when metrics become the primary focus? What happens when we optimize for numbers instead of for people?</p>
          
          <p>We risk losing sight of the bigger picture. We risk building products that are technically successful but ultimately unsatisfying.</p>
          
          <p>That's why it's so important to be mission-driven, not just metrics-driven.</p>
        `
      },
      {
        id: "the-power-of-a-clear-mission",
        title: "The Power of a Clear Mission",
        content: `
          <p>A clear mission provides a guiding star. It tells us why we're building this product, who we're building it for, and what problem we're trying to solve.</p>
          
          <p>It helps us make tough decisions when metrics conflict with our values. It reminds us that we're not just building a product, we're building something that can make a real difference in people's lives.</p>
          
          <p>When we're mission-driven, we're more likely to build products that people truly love.</p>
        `
      },
      {
        id: "examples-of-mission-driven-companies",
        title: "Examples of Mission-Driven Companies",
        content: `
          <p>Look at companies like Patagonia, known for its commitment to environmental sustainability. Or TOMS Shoes, which donates a pair of shoes for every pair purchased.</p>
          
          <p>These companies are successful not just because they have great products, but because they have a clear mission that resonates with their customers.</p>
          
          <p>People want to support companies that stand for something, companies that are trying to make the world a better place.</p>
        `
      },
      {
        id: "how-to-become-mission-driven",
        title: "How to Become Mission-Driven",
        content: `
          <p>Becoming mission-driven starts with asking yourself some tough questions:</p>
          
          <ul>
            <li>What problem are we really trying to solve?</li>
            <li>Who are we trying to help?</li>
            <li>What impact do we want to make on the world?</li>
          </ul>
          
          <p>Once you have a clear understanding of your mission, you can use it to guide every decision you make.</p>
          
          <p>From product development to marketing to customer service, let your mission be your compass.</p>
        `
      }
    ]
  },
  {
    id: 3,
    title: "Care Trumps Candor",
    description: "Why genuine care is the foundation of effective communication, and how it fosters trust and collaboration.",
    status: "published" as const,
    authorName: "MissionBuilt.io",
    publishDate: "May 29, 2025",
    heroImage: "/lovable-uploads/a5d8f799-a99d-403c-a594-5989929f896b.png",
    sections: [
      {
        id: "the-myth-of-radical-candor",
        title: "The Myth of Radical Candor",
        content: `
          <p>Radical candor has become a popular buzzword in the business world. The idea is that you should be brutally honest with your colleagues, even if it hurts their feelings.</p>
          
          <p>But what if radical candor isn't all it's cracked up to be? What if it's actually a recipe for disaster?</p>
          
          <p>The problem with radical candor is that it often lacks empathy. It prioritizes honesty over kindness, and it can easily come across as insensitive and mean-spirited.</p>
          
          <p>That's why I believe that care trumps candor.</p>
        `
      },
      {
        id: "the-importance-of-genuine-care",
        title: "The Importance of Genuine Care",
        content: `
          <p>When you genuinely care about your colleagues, you're more likely to communicate with them in a way that's both honest and respectful.</p>
          
          <p>You'll take the time to understand their perspective, and you'll frame your feedback in a way that's constructive and helpful.</p>
          
          <p>You'll also be more likely to offer support and encouragement, which can make a big difference in their performance and morale.</p>
          
          <p>Care is the foundation of trust, and trust is essential for effective collaboration.</p>
        `
      },
      {
        id: "how-to-show-you-care",
        title: "How to Show You Care",
        content: `
          <p>Showing you care doesn't have to be complicated. It can be as simple as:</p>
          
          <ul>
            <li>Listening actively when your colleagues are speaking</li>
            <li>Asking them how they're doing, and really listening to their answer</li>
            <li>Offering help when they're struggling</li>
            <li>Recognizing their accomplishments</li>
            <li>Treating them with respect, even when you disagree with them</li>
          </ul>
          
          <p>These small gestures can go a long way in building strong relationships and fostering a positive work environment.</p>
        `
      },
      {
        id: "care-in-action",
        title: "Care in Action",
        content: `
          <p>I once worked with a product manager who was struggling to get buy-in for her ideas. She was incredibly talented, but she had a hard time communicating her vision in a way that resonated with others.</p>
          
          <p>Instead of telling her that her ideas were bad, I took the time to understand her perspective. I asked her questions about her goals, her assumptions, and her concerns.</p>
          
          <p>Together, we were able to refine her ideas and craft a compelling narrative that convinced the rest of the team.</p>
          
          <p>By showing her that I cared about her success, I was able to help her unlock her full potential.</p>
        `
      }
    ]
  },
  {
    id: 4,
    title: "Cues, Not Critiques",
    description: "The power of laser-focused feedback in product development and powerlifting. How precision beats volume when guiding teams and perfecting technique.",
    status: "published" as const,
    authorName: "MissionBuilt.io",
    publishDate: "May 30, 2025",
    heroImage: "/lovable-uploads/777697e9-e718-4177-9c47-cb5be778fdd3.png",
    sections: [
      {
        id: "cues-not-critiques",
        title: "Cues, Not Critiques",
        content: `
          <p>My mentor Nate Fick used to talk about the power of laser focus. Not just attention — precision. That phrase gets thrown around a lot, but he meant it in the truest sense.</p>
          
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
          
          <blockquote>"Your belly button's a flashlight. Point it at the pitcher."</blockquote>
          
          <p>It's weird. It's vivid. And it works. The batter stops overthinking and starts moving with intention. The hips rotate. The swing tightens. Power follows.</p>
          
          <p>That's the magic of laser-focused feedback — not more, just clearer.</p>
          
          <h3>Two Words That Changed the Lift</h3>
          
          <p>The same thing happens under the bar.</p>
          
          <p>Stefi Cohen is one of the most accomplished powerlifters on the planet. But even the best get stuck. During a heavy squat cycle, she was losing depth and collapsing forward — the kind of breakdown that could invite a checklist of mechanical critiques.</p>
          
          <p>Her coach didn't do that. He gave her one cue:</p>
          
          <blockquote>"Knees out."</blockquote>
          
          <p>Two words.</p>
          
          <p>Her glutes fired. Her hips opened. Her position locked in. No overcorrection. No overthinking. Just a precise adjustment that reconnected the movement.</p>
          
          <p>That's what real feedback does. It doesn't flood you with everything that's wrong.</p>
          
          <blockquote>It's a spotlight, not a floodlight — aimed at what matters most, right now.</blockquote>
          
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
          
          <blockquote>"You're treating the CTA like a destination, not a trigger."</blockquote>
          
          <p>That one line cut through the noise.</p>
          
          <p>They changed the button copy from "Next" to "Install Dropbox." They added a subtle animation to guide the user forward. That was it.</p>
          
          <p>And conversion went up.</p>
          
          <p>No massive rebuild. No big campaign. Just a focused shift — one that made it crystal clear what the user needed to do next.</p>
          
          <p>It wasn't about the volume of feedback. It was about knowing which piece would actually move the needle.</p>
          
          <blockquote>That's product leadership: listening broadly, then acting precisely.</blockquote>
          
          <h3>The Flashlight, Not the Floodlight</h3>
          
          <p>The same principle applies across every domain — lifting, sport, software.</p>
          
          <p>You don't have infinite time to build a product. You don't have infinite weights to lift and sculpt the perfect physique. You can't act on every idea, every error, every impulse.</p>
          
          <p>So you focus.</p>
          
          <p>Whether you're adjusting your squat, refining your swing, or unblocking a user journey — the best feedback doesn't overwhelm. It illuminates.</p>
          
          <p>Not a floodlight that blinds.</p>
          
          <p>Not a laser that burns.</p>
          
          <p>Just a flashlight, steady and clear, aimed at what matters most right now.</p>
          
          <p>That's how progress happens. Not with noise — with precision.</p>
          
          <p>One cue, one rep at a time.</p>
        `
      }
    ]
  }
];

export const getDynamicReadingTime = (chapter: Chapter): number => {
  // Combine all section contents into a single string
  const allText = chapter.sections?.map(section => section.content).join(' ') || '';

  // Remove HTML tags to get plain text
  const plainText = allText.replace(/<[^>]*>/g, '');

  // Calculate reading time based on average words per minute (adjust as needed)
  const wordsPerMinute = 200;
  const wordCount = plainText.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
};
