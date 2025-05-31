
import { Chapter } from "@/types";

// Helper function to calculate dynamic reading time
export const getDynamicReadingTime = (chapter: Chapter): number => {
  if (!chapter.sections) return 5;
  
  const totalWords = chapter.sections.reduce((total, section) => {
    const wordsInContent = section.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return total + wordsInContent;
  }, 0);
  
  return Math.max(1, Math.ceil(totalWords / 200));
};

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Discipline: The Bedrock of Progress",
    slug: "discipline-the-bedrock-of-progress",
    description: "Why discipline, not motivation, is the key to achieving long-term goals in both powerlifting and product leadership.",
    status: "published" as const,
    publishDate: "2024-05-24",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png",
    sections: [
      {
        title: "The Motivation Myth",
        content: `
          <p>We often hear that motivation is the key to success. People wait for the perfect moment, the surge of inspiration, or the alignment of stars to kickstart their journey. However, relying on motivation is like chasing a fleeting shadow. It comes and goes, and when it vanishes, so does your drive.</p>
          <p>Discipline, on the other hand, is the unwavering commitment to your goals, regardless of your emotional state. It's about showing up even when you don't feel like it, pushing through the discomfort, and staying consistent with your actions.</p>
        `,
      },
      {
        title: "Powerlifting: The Disciplined Grind",
        content: `
          <p>In powerlifting, discipline is the silent force behind every successful lift. It's the countless hours spent in the gym, the meticulous attention to form, and the unwavering adherence to a structured training program. It's about sticking to the plan, even when you're tired, sore, or unmotivated.</p>
          <p>Consider the grueling process of squatting. It requires discipline to maintain proper form, control your breathing, and push through the burning sensation in your muscles. Motivation might get you to start, but discipline is what gets you to complete the set, day after day, week after week.</p>
        `,
      },
      {
        title: "Product Leadership: The Disciplined Vision",
        content: `
          <p>In product leadership, discipline is the compass that guides you through the ever-changing landscape of technology and user needs. It's the ability to stay focused on your vision, prioritize ruthlessly, and make tough decisions, even when faced with uncertainty.</p>
          <p>Think about the process of building a new product feature. It requires discipline to conduct thorough user research, define clear requirements, and iterate relentlessly based on feedback. Motivation might spark the initial idea, but discipline is what ensures that the feature aligns with the overall product strategy and delivers value to users.</p>
        `,
      },
      {
        title: "Building Your Bedrock",
        content: `
          <p>So, how do you cultivate discipline in your own life? Here are a few practical strategies:</p>
          <ul>
            <li><strong>Set Clear Goals:</strong> Define specific, measurable, achievable, relevant, and time-bound (SMART) goals.</li>
            <li><strong>Create a Routine:</strong> Establish a consistent daily or weekly routine that supports your goals.</li>
            <li><strong>Break Down Tasks:</strong> Divide large tasks into smaller, more manageable steps.</li>
            <li><strong>Track Your Progress:</strong> Monitor your progress and celebrate small wins along the way.</li>
            <li><strong>Find an Accountability Partner:</strong> Enlist the support of a friend, coach, or mentor to keep you on track.</li>
          </ul>
          <p>Discipline is not about being perfect; it's about being consistent. It's about showing up, even when you don't feel like it, and pushing through the discomfort. It's the bedrock upon which all progress is built.</p>
        `,
      },
    ],
    furtherReading: [
      {
        title: "Atomic Habits",
        description: "An easy & proven way to build good habits & break bad ones.",
        url: "https://jamesclear.com/atomic-habits",
        note: "A great book on building better habits."
      },
      {
        title: "Discipline Equals Freedom",
        description: "Field Manual by Jocko Willink.",
        url: "https://jockowillink.com/discipline-equals-freedom/",
        note: "A field manual on how to win the war against your weaker self."
      },
    ]
  },
  {
    id: 2,
    title: "Mission: Aligning North Stars",
    slug: "mission-aligning-north-stars",
    description: "The importance of having a clear mission, and how aligning personal and organizational missions drives success.",
    status: "published" as const,
    publishDate: "2024-05-24",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/f6ddf94d-e1c0-4499-996d-59c95ca86f0b.png",
    sections: [
      {
        title: "The Power of a Clear Mission",
        content: `
          <p>A mission is more than just a statement; it's a guiding principle that defines your purpose and direction. Whether you're a powerlifter striving for a personal best or a product leader building a groundbreaking product, a clear mission provides focus, motivation, and alignment.</p>
          <p>Without a mission, you're like a ship without a rudder, drifting aimlessly in the sea of possibilities. You might achieve short-term gains, but you'll lack the long-term vision and resilience to overcome challenges.</p>
        `,
      },
      {
        title: "Powerlifting: The Mission of Strength",
        content: `
          <p>In powerlifting, your mission might be to achieve a specific weightlifting goal, such as squatting double your body weight or competing in a national championship. This mission serves as a North Star, guiding your training, nutrition, and recovery efforts.</p>
          <p>When you have a clear mission, you're more likely to stay committed to your training program, even when faced with setbacks or plateaus. You'll be willing to make sacrifices, such as waking up early to train or skipping social events to prioritize recovery.</p>
        `,
      },
      {
        title: "Product Leadership: The Mission of Value",
        content: `
          <p>In product leadership, your mission might be to solve a specific user problem, disrupt an industry, or create a positive impact on the world. This mission shapes your product strategy, roadmap, and decision-making process.</p>
          <p>When you have a clear mission, you're more likely to build a product that resonates with users, attracts top talent, and generates sustainable growth. You'll be able to articulate your vision to stakeholders, inspire your team, and navigate the complexities of the market.</p>
        `,
      },
      {
        title: "Aligning Personal and Organizational Missions",
        content: `
          <p>The most powerful missions are those that align with your personal values and the goals of your organization. When your personal mission resonates with the company's mission, you're more likely to be engaged, motivated, and fulfilled in your work.</p>
          <p>To align your missions, start by identifying your core values and passions. Then, explore how your skills and talents can contribute to the organization's goals. Look for opportunities to work on projects that align with your interests and allow you to make a meaningful impact.</p>
        `,
      },
    ],
    furtherReading: [
      {
        title: "Start With Why",
        description: "How Great Leaders Inspire Everyone to Take Action by Simon Sinek.",
        url: "https://simonsinek.com/product/start-with-why/",
        note: "A book that explores how leaders can inspire action."
      },
    ]
  },
  {
    id: 3,
    title: "Care: The Human Element",
    slug: "care-the-human-element",
    description: "Why genuine care for yourself, your team, and your users is essential for sustainable success.",
    status: "published" as const,
    publishDate: "2024-05-29",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/a599632d-a996-4c9a-a99f-99218a93983d.png",
    sections: [
      {
        title: "The Importance of Care",
        content: `
          <p>In a world that often prioritizes results over relationships, care is the human element that sets you apart. Whether you're a powerlifter pushing your physical limits or a product leader building innovative solutions, genuine care for yourself, your team, and your users is essential for sustainable success.</p>
          <p>Care is not just a soft skill; it's a strategic advantage. It fosters trust, collaboration, and loyalty, creating a positive environment where individuals can thrive and achieve their full potential.</p>
        `,
      },
      {
        title: "Powerlifting: Caring for Your Body",
        content: `
          <p>In powerlifting, caring for your body is paramount. It's about listening to your body's signals, prioritizing recovery, and avoiding overtraining. It's about nourishing your body with proper nutrition, getting enough sleep, and managing stress.</p>
          <p>When you care for your body, you're more likely to stay injury-free, perform at your best, and enjoy the process of training. You'll be able to push your limits safely and sustainably, achieving long-term progress without sacrificing your health.</p>
        `,
      },
      {
        title: "Product Leadership: Caring for Your Team and Users",
        content: `
          <p>In product leadership, caring for your team and users is equally important. It's about creating a supportive and inclusive environment where team members feel valued, respected, and empowered. It's about understanding your users' needs, empathizing with their pain points, and building solutions that improve their lives.</p>
          <p>When you care for your team, you're more likely to attract and retain top talent, foster collaboration, and drive innovation. When you care for your users, you're more likely to build products that resonate with them, generate loyalty, and create a positive impact on the world.</p>
        `,
      },
      {
        title: "Practicing Care in Action",
        content: `
          <p>So, how do you practice care in action? Here are a few practical strategies:</p>
          <ul>
            <li><strong>Prioritize Self-Care:</strong> Make time for activities that nourish your mind, body, and soul.</li>
            <li><strong>Listen Actively:</strong> Pay attention to what others are saying, both verbally and nonverbally.</li>
            <li><strong>Show Empathy:</strong> Put yourself in others' shoes and try to understand their perspectives.</li>
            <li><strong>Offer Support:</strong> Provide assistance, encouragement, and resources to those in need.</li>
            <li><strong>Express Gratitude:</strong> Acknowledge and appreciate the contributions of others.</li>
          </ul>
          <p>Care is not a one-time act; it's a continuous practice. It's about showing up with compassion, empathy, and a genuine desire to make a positive difference in the lives of others.</p>
        `,
      },
    ],
    furtherReading: [
      {
        title: "Radical Candor",
        description: "Be a Kick-Ass Boss Without Losing Your Humanity by Kim Scott.",
        url: "https://www.radicalcandor.com/",
        note: "A guide to being a better boss."
      },
    ]
  },
  {
    id: 4,
    title: "Feedback: The Loop that Builds Everything",
    slug: "feedback-the-loop-that-builds-everything",
    description: "How continuous feedback loops drive both powerlifting progress and product excellence, from RPE scales to user research.",
    status: "published" as const,
    publishDate: "2024-05-30",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/35170400-1b3f-446c-ae37-a3bb988dc1b8.png",
    sections: [
      {
        title: "The Power of Feedback Loops",
        content: `
          <p>Feedback loops are the engine of progress, whether you're fine-tuning your deadlift form or iterating on a product feature. They provide valuable information about your performance, allowing you to make adjustments and improve over time.</p>
          <p>A feedback loop consists of three key components: input, processing, and output. You take an action (input), observe the results (processing), and then adjust your approach based on the feedback you receive (output). This cycle repeats continuously, driving continuous improvement.</p>
        `,
      },
      {
        title: "Powerlifting: Feedback from the Bar",
        content: `
          <p>In powerlifting, feedback comes from various sources, including your body, your coach, and the weight itself. Your body provides internal feedback, such as muscle soreness, fatigue, and pain. Your coach provides external feedback, such as technique corrections and program adjustments.</p>
          <p>The weight itself provides immediate feedback on your performance. If you can't lift the weight, you know you need to make adjustments to your form, strength, or strategy. If you can lift the weight easily, you know you're ready to increase the load.</p>
        `,
      },
      {
        title: "Product Leadership: Feedback from Users",
        content: `
          <p>In product leadership, feedback comes primarily from your users. User feedback can take many forms, including surveys, interviews, usability testing, and analytics data. It's essential to actively solicit and analyze user feedback to understand their needs, pain points, and preferences.</p>
          <p>User feedback helps you validate your assumptions, identify areas for improvement, and prioritize new features. It ensures that you're building a product that solves real problems and delivers value to your target audience.</p>
        `,
      },
      {
        title: "Building Effective Feedback Loops",
        content: `
          <p>To build effective feedback loops, consider the following strategies:</p>
          <ul>
            <li><strong>Define Clear Metrics:</strong> Identify the key metrics that indicate success or failure.</li>
            <li><strong>Collect Data Regularly:</strong> Establish a system for collecting data on a consistent basis.</li>
            <li><strong>Analyze the Data:</strong> Look for patterns, trends, and insights in the data.</li>
            <li><strong>Take Action:</strong> Make adjustments to your approach based on the feedback you receive.</li>
            <li><strong>Repeat the Cycle:</strong> Continuously monitor your progress and refine your approach.</li>
          </ul>
          <p>Feedback is not just about identifying problems; it's about learning and growing. Embrace feedback as an opportunity to improve your performance and achieve your goals.</p>
        `,
      },
    ],
    furtherReading: [
      {
        title: "Stefi Cohen's Coaching Evolution",
        description: "Explores Stefi Cohen's evolving approach to training, blending isolation and compound movements, and emphasizing adaptability — a model of feedback-driven progression.",
        url: "https://www.hybridperformancemethod.com/blog/are-isolation-movements-better-for-muscle-growth",
        note: ""
      },
      {
        title: "Motor Learning and Coaching Cues",
        description: "Outlines effective coaching cues in baseball, including directional visual prompts like \"turn the flashlight,\" to support motor learning through immediate feedback.",
        url: "https://www.drivelinebaseball.com/2017/02/coaching-hitting-mechanics-part-2-application/",
        note: ""
      },
      {
        title: "Fitbit Sleep Score Anxiety",
        description: "Explores how Fitbit's sleep score feature, intended to empower users, inadvertently created stress and confusion as people began to fixate on a single metric rather than holistic health.",
        url: "https://www.washingtonpost.com/business/2020/02/14/sleep-wellness-employer-oura/",
        note: ""
      },
      {
        title: "RPE and RIR in Strength Training",
        description: "Outlines how Rate of Perceived Exertion (RPE) and Reps in Reserve (RIR) offer subjective yet critical feedback for athletes — emphasizing that true progress requires honest self-assessment, not just numbers.",
        url: "https://www.strongerbyscience.com/reps-in-reserve/",
        note: ""
      },
      {
        title: "Target Canada Collapse",
        description: "A detailed account of how Target's expansion into Canada failed due to systemic issues, misread data, and ignored frontline feedback — resulting in one of the most expensive retail failures in history.",
        url: "https://canadianbusiness.com/ideas/the-last-days-of-target-canada/",
        note: ""
      },
      {
        title: "Elastic's Acquisition of Endgame",
        description: "Provides context on the Endgame acquisition and the iterative, feedback-driven strategy that shaped its product approach.",
        url: "https://techcrunch.com/2019/10/15/elastic-adds-endpoint-security-to-its-expanding-toolset/",
        note: ""
      },
      {
        title: "Slack's Origins and Internal Tool Pivot",
        description: "Details how Slack emerged from an internal communication tool at Tiny Speck, developed during the creation of the game Glitch, and evolved through continuous internal feedback loops.",
        url: "https://www.wired.com/2014/08/the-most-fascinating-profile-youll-ever-read-about-a-guy-and-his-boring-startup",
        note: ""
      },
      {
        title: "Slack's Product Philosophy",
        description: "Reveals how the team behind Slack ritualized internal feedback and refined the tool based on daily use, long before realizing it could become a standalone product.",
        url: "https://review.firstround.com/from-0-to-1b-slacks-founder-shares-their-epic-launch-strategy",
        note: ""
      },
      {
        title: "Figma's Culture of Real-Time Feedback",
        description: "Figma's built-in commenting and mock review workflows enable low-friction, high-impact feedback loops across product and design.",
        url: "https://www.figma.com/blog/inside-figma-building-a-more-collaborative-design-process/",
        note: ""
      },
      {
        title: "Lovable AI and Creative Iteration",
        description: "At UOttOhack, the Lovable team demonstrated how rapid iteration with AI tools can accelerate app development, enabling real-time feedback and collaborative creativity.",
        url: "https://lovable.dev/blog/uottohack-umar-app-development",
        note: ""
      },
      {
        title: "Duolingo's Onboarding and Retention Strategies",
        description: "Analyzes Duolingo's onboarding process, highlighting how personalization and gamification contribute to user retention and engagement.",
        url: "https://www.redfast.com/news/how-duolingos-modern-onboarding-drives-user-retention",
        note: ""
      },
      {
        title: "Duolingo's Feedback-Driven UX",
        description: "Duolingo uses micro-interactions and behavioral cues to offer real-time encouragement and course correction within its language learning platform.",
        url: "https://blog.duolingo.com/duologues-design-conversations/",
        note: ""
      },
      {
        title: "The Problem with Listening to Metrics",
        description: "Highlights how organizations often misinterpret data due to cognitive biases, bad proxies, or unexamined assumptions, leading to poor strategic decisions.",
        url: "https://hbr.org/2022/07/a-better-way-to-put-your-data-to-work",
        note: ""
      },
      {
        title: "Product Managers Must Talk to Users",
        description: "Marty Cagan explains why user conversations are not optional for PMs, and how constant, intentional feedback is essential to product leadership.",
        url: "https://www.svpg.com/discovery-feedback",
        note: ""
      },
      {
        title: "The Medici Effect",
        description: "Frans Johansson's concept of intersectional innovation emphasizes the value of early, diverse input — the \"share early\" principle is foundational to adaptive feedback.",
        url: "https://www.fransjohansson.com/books",
        note: ""
      }
    ]
  },
];

export type { Chapter };
