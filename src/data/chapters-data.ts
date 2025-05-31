export interface ChapterSection {
  id: string;
  title: string;
  content: string;
}

export interface FurtherReadingResource {
  title: string;
  url: string;
  description: string;
  note?: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  status: "published" | "coming-soon" | "draft";
  heroImage: string;
  authorName: string;
  publishDate: string;
  sections?: ChapterSection[];
  furtherReading?: FurtherReadingResource[];
  wordCount?: number;
}

// Import additional content for specific chapters
import { chapter4AdditionalSections } from "./chapters/chapter-4-content";

// Helper function to calculate reading time
export const getDynamicReadingTime = (chapter: Chapter): number => {
  if (chapter.wordCount) {
    return Math.ceil(chapter.wordCount / 200); // 200 words per minute
  }
  
  // Fallback: estimate from content if available
  if (chapter.sections) {
    const totalWords = chapter.sections.reduce((acc, section) => {
      const textContent = section.content.replace(/<[^>]*>/g, ''); // Strip HTML
      return acc + textContent.split(/\s+/).length;
    }, 0);
    return Math.ceil(totalWords / 200);
  }
  
  return 5; // Default fallback
};

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Why Behind the Weight",
    description: "Every rep has purpose. Every choice has consequence. This is where discipline meets direction—and where your mission begins to take shape.",
    status: "published",
    heroImage: "/lovable-uploads/e1905905-308a-4c93-8f94-d5b6f7ecaa56.png",
    authorName: "MissionBuilt.io",
    publishDate: "December 15, 2024",
    wordCount: 1200,
    sections: [
      {
        id: "introduction",
        title: "The Parallel Paths",
        content: `<p>There's something beautiful about the moment before a heavy lift.</p>
        
        <p>The weight sits there, patient and unforgiving. You approach with intention, knowing that everything you've built—your strength, your focus, your preparation—comes down to this moment. There's no negotiating with gravity. No shortcuts. No excuses.</p>
        
        <p>Just you, the weight, and the truth of what you're capable of.</p>
        
        <p>Building great products has the same energy. The same demand for clarity, preparation, and execution. The same respect for process. The same understanding that results don't lie.</p>
        
        <p>Over the years, I've come to see these two worlds—powerlifting and product leadership—as more than parallel. They're symbiotic. Each one teaches lessons that make you better at the other. Each one demands a different kind of strength that, somehow, builds the same foundation.</p>
        
        <blockquote>This book is about that foundation. It's about the principles that hold true whether you're approaching a max deadlift or a product launch. Whether you're coaching someone through their first squat or their first user story.</blockquote>`
      },
      {
        id: "mission-driven-approach",
        title: "Mission-Driven, Rep by Rep",
        content: `<p>Great products, like great lifts, don't happen by accident.</p>
        
        <p>They happen because someone had the discipline to do the work—day after day, rep after rep, iteration after iteration. They happen because someone understood that excellence isn't a destination; it's a practice.</p>
        
        <p>In powerlifting, your mission might be simple: add 20 pounds to your deadlift this year. But getting there requires hundreds of small decisions. Every training session. Every meal. Every choice to prioritize recovery over that extra episode of Netflix.</p>
        
        <p>Product work is the same. Your mission might be to increase user engagement by 15%. But achieving that goal lives in the details: the user research that guides your roadmap, the A/B tests that validate your assumptions, the feedback loops that keep you connected to your users' real needs.</p>
        
        <h3>The Foundation of Care</h3>
        
        <p>What connects both worlds is care. Care for the process. Care for the people you serve. Care for the craft itself.</p>
        
        <p>In the gym, care shows up as attention to form, respect for your training partners, and honest assessment of your progress. In product, it's obsession with user experience, respect for your team's time and expertise, and honest measurement of what's working and what isn't.</p>
        
        <p>Care is what separates the professionals from the pretenders. It's what makes the difference between hitting your numbers and actually getting stronger. Between shipping features and building products that matter.</p>`
      }
    ],
    furtherReading: [
      {
        title: "Atomic Habits by James Clear",
        url: "https://jamesclear.com/atomic-habits",
        description: "The foundational book on building systems and habits that compound over time.",
        note: "Essential reading for understanding how small, consistent actions create big results."
      }
    ]
  },
  {
    id: 2,
    title: "Systems Over Goals",
    description: "Goals point the direction. Systems get you there. Learn why the best performers focus on process, not outcomes—and how to build systems that scale.",
    status: "published",
    heroImage: "/lovable-uploads/dfd1484c-2dce-4c45-a3ef-e17eefa59dcc.png",
    authorName: "MissionBuilt.io",
    publishDate: "December 22, 2024",
    wordCount: 1500,
    sections: [
      {
        id: "goals-vs-systems",
        title: "The Problem with Goals",
        content: `<p>Goals are seductive. They give us direction, motivation, and something to chase. But here's the thing about goals: they're terrible at creating lasting change.</p>
        
        <p>Think about it. Every January, millions of people set fitness goals. "I want to lose 30 pounds." "I want to deadlift 400." "I want to run a marathon." Come February, most of those goals are forgotten, abandoned, or transformed into guilt.</p>
        
        <p>The same pattern plays out in product teams. "We want to increase user retention by 20%." "We want to launch three major features this quarter." "We want to reduce customer support tickets by half."</p>
        
        <p>Noble goals. But goals without systems are just wishes.</p>
        
        <blockquote>Systems are what bridge the gap between where you are and where you want to be. They're the daily practices, the repeatable processes, the habits that compound over time.</blockquote>`
      }
    ]
  },
  {
    id: 3,
    title: "Progressive Overload",
    description: "Growth requires stress. Whether you're building muscle or building products, the principle is the same: add challenge gradually, recover properly, and trust the process.",
    status: "published",
    heroImage: "/lovable-uploads/ac4df08f-40f2-4cde-a7f2-08a1413e3676.png",
    authorName: "MissionBuilt.io",
    publishDate: "December 29, 2024",
    wordCount: 1800
  },
  {
    id: 4,
    title: "Feedback is a Superpower",
    description: "The fastest way to get stronger—in the gym or in your career—is to get better feedback, faster. Learn how to seek it, give it, and use it to accelerate growth.",
    status: "published",
    heroImage: "/lovable-uploads/b2c7b360-89b4-4bba-ab57-8aee39b1cc62.png",
    authorName: "MissionBuilt.io",
    publishDate: "January 5, 2025",
    wordCount: 2200,
    sections: [
      {
        id: "feedback-fundamentals",
        title: "The Mirror and the Spotter",
        content: `<p>In powerlifting, feedback is everything.</p>
        
        <p>Your training partner spots your weak points. The mirror shows your form. The bar tells you the truth about your strength. Without feedback, you're just going through the motions—and probably building bad habits along the way.</p>
        
        <p>Product work is the same. User interviews reveal pain points you'd never see from inside your bubble. A/B tests tell you which features actually move the needle. Your team surfaces blind spots in your strategy.</p>
        
        <p>But here's what most people get wrong about feedback: they wait for it to come to them. They treat it like something that happens to them, rather than something they actively seek and shape.</p>
        
        <blockquote>Great performers don't wait for feedback. They hunt for it. They create systems to capture it. They build cultures where giving and receiving feedback becomes as natural as breathing.</blockquote>`
      },
      {
        id: "types-of-feedback",
        title: "Three Types That Matter",
        content: `<p>Not all feedback is created equal. In both powerlifting and product, there are three types that actually drive improvement:</p>
        
        <h3>1. Technical Feedback</h3>
        <p>This is form feedback. "Your knees are caving in." "This user flow has too much friction." It's specific, actionable, and focused on execution.</p>
        
        <h3>2. Strategic Feedback</h3>
        <p>This is direction feedback. "You're focusing too much on accessory work." "We're solving the wrong problem for our users." It questions not just how you're doing something, but what you're doing and why.</p>
        
        <h3>3. Cultural Feedback</h3>
        <p>This is impact feedback. "You're inspiring others to work harder." "Your communication style is creating confusion in the team." It's about how your actions affect the environment around you.</p>
        
        <p>Most people only seek technical feedback. But the biggest breakthroughs come from strategic and cultural feedback—the kind that challenges your assumptions and expands your perspective.</p>`
      },
      {
        id: "listening-is-lift",
        title: "Listening Is a Lift",
        content: `<p>Here's something I learned the hard way: giving feedback is easy. Receiving it well is a skill.</p>
        
        <p>Your ego wants to defend. Your brain wants to explain. Your pride wants to justify. But none of that helps you get better.</p>
        
        <p>I've seen lifters ignore their coach's cues because they thought they knew better. I've seen product managers dismiss user research because it contradicted their vision. In both cases, the result is the same: stagnation disguised as confidence.</p>
        
        <blockquote>Listening to feedback—really listening—is like adding weight to the bar. It's uncomfortable at first, but it's the only way to get stronger.</blockquote>
        
        <p>The best feedback receivers I know have a few things in common:</p>
        
        <ul>
        <li>They ask clarifying questions instead of making defensive statements</li>
        <li>They separate the feedback from the feedback giver</li>
        <li>They look for patterns across multiple sources</li>
        <li>They experiment with applying feedback before deciding whether it's valid</li>
        </ul>
        
        <p>Remember: feedback isn't about you. It's for you. The faster you can separate those two things, the faster you'll improve.</p>`
      },
      ...chapter4AdditionalSections
    ],
    furtherReading: [
      {
        title: "Thanks for the Feedback by Douglas Stone and Sheila Heen",
        url: "https://www.amazon.com/Thanks-Feedback-Science-Receiving-Well/dp/0670014664",
        description: "The definitive guide to receiving feedback well and using it to grow.",
        note: "Particularly useful for understanding the emotional dynamics of feedback."
      },
      {
        title: "Radical Candor by Kim Scott",
        url: "https://www.radicalcandor.com/",
        description: "How to give feedback that challenges directly while caring personally.",
        note: "Essential reading for anyone in a leadership role."
      }
    ]
  },
  {
    id: 5,
    title: "Form Follows Function",
    description: "Beautiful design isn't just aesthetic—it's functional. Learn why the best products and the best lifts share the same principle: efficiency in service of purpose.",
    status: "coming-soon",
    heroImage: "/lovable-uploads/777697e9-e718-4177-9c47-cb5be778fdd3.png",
    authorName: "MissionBuilt.io",
    publishDate: "January 12, 2025",
    wordCount: 1600
  },
  {
    id: 6,
    title: "Recovery and Reflection",
    description: "Growth happens in the rest, not just the work. Discover why the most successful people build deliberate recovery into their systems—and how to do it yourself.",
    status: "coming-soon",
    heroImage: "/lovable-uploads/8ab5b464-c7fc-453a-9edd-2ee64a40c820.png",
    authorName: "MissionBuilt.io",
    publishDate: "January 19, 2025",
    wordCount: 1400
  },
  {
    id: 7,
    title: "The Power of Constraints",
    description: "Limitations don't limit creativity—they focus it. Learn how constraints in powerlifting and product development actually accelerate innovation.",
    status: "coming-soon",
    heroImage: "/lovable-uploads/fe278df4-1643-4dd0-9a61-51e73f29901d.png",
    authorName: "MissionBuilt.io",
    publishDate: "January 26, 2025",
    wordCount: 1300
  },
  {
    id: 8,
    title: "Building Your Training Partners",
    description: "No one builds anything great alone. Whether it's your lifting crew or your product team, learn how to cultivate relationships that make everyone stronger.",
    status: "draft",
    heroImage: "/lovable-uploads/ad42f773-71de-419d-a4d8-282925688c73.png",
    authorName: "MissionBuilt.io",
    publishDate: "February 2, 2025",
    wordCount: 1500
  },
  {
    id: 9,
    title: "Competing with Yourself",
    description: "The only competition that matters is with who you were yesterday. Learn how to channel competitive energy into personal growth rather than zero-sum thinking.",
    status: "draft",
    heroImage: "/lovable-uploads/af1227a8-77de-4d0f-9dc7-14d29a017dca.png",
    authorName: "MissionBuilt.io",
    publishDate: "February 9, 2025",
    wordCount: 1700
  },
  {
    id: 10,
    title: "Failure and Plateaus",
    description: "Missed lifts and failed launches teach the same lessons. Learn how to mine failure for insights and turn plateaus into launching pads.",
    status: "draft",
    heroImage: "/lovable-uploads/7d040410-47c5-475b-9715-13dbc1c5e6bf.png",
    authorName: "MissionBuilt.io",
    publishDate: "February 16, 2025",
    wordCount: 1900
  },
  {
    id: 11,
    title: "The Long Game",
    description: "Sustainable excellence isn't about peak performance—it's about consistent performance over time. Learn how to build systems that last.",
    status: "draft",
    heroImage: "/lovable-uploads/59ceb206-ccca-4023-b0a3-a37e2a5455f8.png",
    authorName: "MissionBuilt.io",
    publishDate: "February 23, 2025",
    wordCount: 1600
  },
  {
    id: 12,
    title: "Coaching Others",
    description: "The transition from individual contributor to leader mirrors the journey from lifter to coach. Learn how to develop others while continuing to grow yourself.",
    status: "draft",
    heroImage: "/lovable-uploads/e99cef43-4b1f-469b-80cf-a4896d8629b7.png",
    authorName: "MissionBuilt.io",
    publishDate: "March 2, 2025",
    wordCount: 2000
  },
  {
    id: 13,
    title: "Your Next Rep",
    description: "Every ending is a beginning. Learn how to carry these principles forward and continue building your mission, one rep at a time.",
    status: "draft",
    heroImage: "/lovable-uploads/bac59bd2-efe4-453f-bc0e-ead232657edd.png",
    authorName: "MissionBuilt.io",
    publishDate: "March 9, 2025",
    wordCount: 1200
  }
];
