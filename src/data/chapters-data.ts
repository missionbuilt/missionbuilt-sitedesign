import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  description: string;
  status: "draft" | "published" | "archived";
  publishDate: string;
  authorName: string;
  heroImage: string;
  sections: Section[];
  furtherReading?: Resource[];
}

export interface Section {
  id: string;
  title: string;
  content: string;
}

export interface Resource {
  title: string;
  description: string;
  url: string;
  note?: string;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    slug: "discipline",
    title: "Discipline",
    description: "Discipline is the bridge between goals and accomplishment. It's the relentless commitment to doing what needs to be done, even when you don't feel like it.",
    status: "published" as const,
    publishDate: "2024-01-01",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/a779f82f-19ca-4991-a999-949418a99049.png",
    sections: [
      {
        id: "intro",
        title: "Introduction",
        content: `Discipline is the cornerstone of any significant achievement, whether in the gym or the boardroom. It's the unwavering commitment to a goal, executed through consistent action, regardless of mood or circumstance. This chapter explores how discipline is cultivated, maintained, and leveraged to transform potential into tangible results.`
      },
      {
        id: "the-powerlifting-paradigm",
        title: "The Powerlifting Paradigm",
        content: `In powerlifting, discipline manifests as a rigorous training schedule, meticulous attention to nutrition, and consistent sleep habits. It's about showing up to the gym even when you're tired, sticking to your diet even when you crave junk food, and prioritizing rest even when you have other demands on your time.

The discipline required for powerlifting extends beyond physical exertion. It involves mental fortitude to push through discomfort, the patience to recover properly, and the humility to adjust your approach when progress stalls.

Powerlifters understand that success isn't about occasional bursts of intensity, but rather the accumulation of consistent effort over time. This mindset translates directly to the business world, where sustained discipline is essential for building a successful company.`
      },
      {
        id: "discipline-in-product-leadership",
        title: "Discipline in Product Leadership",
        content: `Product leadership demands a similar level of discipline. It requires a clear vision, a well-defined strategy, and a relentless focus on execution. Product leaders must make tough decisions, prioritize ruthlessly, and hold themselves and their teams accountable.

Discipline in product leadership also means embracing a culture of continuous learning and improvement. It's about seeking feedback, analyzing data, and iterating on your product based on what you learn. It's about staying curious, adaptable, and always striving to improve.

Just as powerlifters track their progress in the gym, product leaders track key metrics to measure the success of their products. They use data to identify areas for improvement and make informed decisions about where to focus their efforts.`
      },
      {
        id: "building-a-discipline-mindset",
        title: "Building a Discipline Mindset",
        content: `Discipline isn't an innate trait; it's a skill that can be developed and strengthened over time. Here are some strategies for building a discipline mindset:

**Set Clear Goals:** Define what you want to achieve, both in the gym and in your career. Clear goals provide a sense of direction and purpose, making it easier to stay motivated and disciplined.

**Create a Routine:** Establish a daily or weekly routine that incorporates the habits and behaviors you need to achieve your goals. A routine provides structure and reduces the need for willpower, making it easier to stay on track.

**Break Down Tasks:** Large, complex tasks can feel overwhelming, making it difficult to stay disciplined. Break them down into smaller, more manageable steps. This makes the tasks feel less daunting and easier to complete.

**Track Your Progress:** Monitor your progress towards your goals. This provides a sense of accomplishment and motivates you to keep going.

**Reward Yourself:** Celebrate your successes, both big and small. This reinforces positive behaviors and makes it easier to stay disciplined in the long run.

**Find an Accountability Partner:** Share your goals with someone who will hold you accountable. This provides an extra layer of motivation and support.

**Embrace Failure:** Failure is inevitable, both in the gym and in your career. Don't let it discourage you. Instead, learn from your mistakes and use them as an opportunity to grow.

**Practice Self-Compassion:** Be kind to yourself when you make mistakes. Everyone struggles from time to time. The key is to learn from your mistakes and keep moving forward.`
      },
      {
        id: "discipline-conclusion",
        title: "Conclusion",
        content: `Discipline is the foundation of all great achievements. It's the unwavering commitment to a goal, executed through consistent action, regardless of mood or circumstance. By cultivating a discipline mindset, you can transform your potential into tangible results, both in the gym and in your career.

Remember, discipline isn't about being perfect; it's about being consistent. It's about showing up, putting in the work, and staying committed to your goals, even when you don't feel like it.

So, embrace the power of discipline and unlock your full potential. The results will speak for themselves.`
      }
    ],
    furtherReading: [
      {
        title: "Atomic Habits by James Clear",
        description: "An easy & proven way to build good habits & break bad ones.",
        url: "https://jamesclear.com/atomic-habits"
      },
      {
        title: "The Power of Habit by Charles Duhigg",
        description: "Why we do what we do in life and business.",
        url: "https://charlesduhigg.com/the-power-of-habit/"
      },
      {
        title: "Discipline Equals Freedom by Jocko Willink",
        description: "Field Manual",
        url: "https://jockowillink.com/discipline-equals-freedom/"
      }
    ]
  },
  {
    id: 2,
    slug: "mission",
    title: "Mission",
    description: "A clearly defined mission provides direction, inspires action, and aligns efforts towards a common purpose.",
    status: "published" as const,
    publishDate: "2024-01-08",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/4199994a-d995-4599-8745-7b974c94018b.png",
    sections: [
      {
        id: "intro",
        title: "Introduction",
        content: `A well-defined mission is the bedrock of any successful endeavor, whether it's a personal fitness journey or a thriving business. It provides clarity, focus, and a sense of purpose that guides decision-making and inspires action. This chapter explores the importance of having a clear mission, how to define it, and how to use it to achieve your goals.`
      },
      {
        id: "the-powerlifting-mission",
        title: "The Powerlifting Mission",
        content: `In powerlifting, a mission might be to achieve a specific total weight, qualify for a competition, or simply improve overall strength and fitness. This mission provides a clear direction for training, nutrition, and recovery efforts.

A powerlifter's mission is not just about lifting heavy weights; it's about pushing personal limits, overcoming challenges, and building mental and physical resilience. It's about the journey of self-improvement and the satisfaction of achieving hard-earned goals.

The mission also fosters a sense of community among powerlifters. They support each other, share knowledge, and celebrate each other's successes. This sense of belonging provides additional motivation and encouragement to stay committed to the mission.`
      },
      {
        id: "mission-in-product-leadership",
        title: "Mission in Product Leadership",
        content: `In product leadership, a mission is a statement of the problem you are trying to solve for your customers and the value you hope to create. It provides a clear direction for product development, marketing, and sales efforts.

A product leader's mission is not just about building a successful product; it's about creating a positive impact on the lives of their customers. It's about understanding their needs, solving their problems, and making their lives better.

The mission also fosters a sense of alignment and purpose within the product team. It helps team members understand how their work contributes to the overall goals of the company and inspires them to do their best work.`
      },
      {
        id: "defining-your-mission",
        title: "Defining Your Mission",
        content: `Defining a clear and compelling mission is essential for success. Here are some steps to help you define your mission:

**Identify Your Values:** What do you care about most? What principles guide your decisions? Your mission should align with your core values.

**Understand Your Purpose:** What problem are you trying to solve? What value are you trying to create? Your mission should address a specific need or desire.

**Set Measurable Goals:** How will you know if you are successful? Your mission should include measurable goals that you can track over time.

**Communicate Your Mission:** Share your mission with others. This will help you stay accountable and inspire others to join you.

**Review and Revise:** Your mission may evolve over time as you learn and grow. Review and revise your mission regularly to ensure it still aligns with your values and goals.`
      },
      {
        id: "mission-conclusion",
        title: "Conclusion",
        content: `A clearly defined mission is the foundation of any successful endeavor. It provides direction, inspires action, and aligns efforts towards a common purpose. By defining your mission, you can create a roadmap for success and achieve your goals, whether in the gym or in your career.

Remember, your mission is not just a statement; it's a commitment. It's a promise to yourself and to others that you will work tirelessly to achieve your goals and make a positive impact on the world.

So, embrace the power of mission and unlock your full potential. The results will speak for themselves.`
      }
    ],
    furtherReading: [
      {
        title: "Start with Why by Simon Sinek",
        description: "How great leaders inspire everyone to take action.",
        url: "https://simonsinek.com/product/start-with-why/"
      },
      {
        title: "Measure What Matters by John Doerr",
        description: "How Google, Bono, and the Gates Foundation rock the world with OKRs.",
        url: "https://www.whatmatters.com/book/"
      },
      {
        title: "The Lean Startup by Eric Ries",
        description: "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
        url: "https://theleanstartup.com/"
      }
    ]
  },
  {
    id: 3,
    slug: "care",
    title: "Care",
    description: "Caring for yourself, your team, and your customers is essential for sustainable success.",
    status: "published" as const,
    publishDate: "2024-01-15",
    authorName: "MissionBuilt.io",
    heroImage: "/lovable-uploads/496799a9-0c11-4991-895f-2959ef248c91.png",
    sections: [
      {
        id: "intro",
        title: "Introduction",
        content: `Care is the often-overlooked ingredient that fuels long-term success, whether in the world of powerlifting or product leadership. It encompasses self-care, team care, and customer care, all of which are essential for building sustainable and fulfilling endeavors. This chapter explores the importance of care, how to cultivate it, and how to integrate it into your daily practices.`
      },
      {
        id: "care-in-powerlifting",
        title: "Care in Powerlifting",
        content: `In powerlifting, self-care is paramount. It involves listening to your body, prioritizing rest and recovery, and nourishing yourself with proper nutrition. It's about understanding your limits and avoiding overtraining, which can lead to injury and burnout.

Care also extends to your training partners. Supporting and encouraging each other, sharing knowledge, and spotting each other's lifts are all acts of care that contribute to a positive and productive training environment.

Powerlifters who prioritize care are more likely to achieve their goals and sustain their progress over the long term. They understand that success is not just about pushing harder; it's about taking care of themselves and their community.`
      },
      {
        id: "care-in-product-leadership",
        title: "Care in Product Leadership",
        content: `In product leadership, care manifests as empathy for your team and your customers. It involves creating a supportive and inclusive work environment where team members feel valued, respected, and empowered.

Care also means understanding your customers' needs and desires and building products that solve their problems and improve their lives. It's about putting their needs first and always striving to exceed their expectations.

Product leaders who prioritize care are more likely to build successful products and create loyal customers. They understand that success is not just about making money; it's about making a positive impact on the world.`
      },
      {
        id: "cultivating-care",
        title: "Cultivating Care",
        content: `Cultivating care requires a conscious effort and a commitment to prioritizing the well-being of yourself and others. Here are some strategies for cultivating care:

**Practice Self-Compassion:** Be kind to yourself when you make mistakes. Everyone struggles from time to time. The key is to learn from your mistakes and keep moving forward.

**Prioritize Rest and Recovery:** Get enough sleep, take breaks throughout the day, and schedule regular vacations. Rest and recovery are essential for both physical and mental health.

**Nourish Your Body:** Eat a healthy diet, drink plenty of water, and avoid processed foods. Proper nutrition provides the energy and nutrients you need to thrive.

**Connect with Others:** Spend time with people who support and uplift you. Social connection is essential for mental and emotional well-being.

**Practice Gratitude:** Take time each day to appreciate the good things in your life. Gratitude can improve your mood and reduce stress.

**Set Boundaries:** Learn to say no to requests that drain your energy or compromise your values. Setting boundaries is essential for protecting your time and energy.

**Practice Mindfulness:** Pay attention to the present moment without judgment. Mindfulness can help you reduce stress and improve your focus.

**Seek Help When Needed:** Don't be afraid to ask for help when you're struggling. There are many resources available to support your physical and mental health.`
      },
      {
        id: "care-conclusion",
        title: "Conclusion",
        content: `Care is the often-overlooked ingredient that fuels long-term success. It encompasses self-care, team care, and customer care, all of which are essential for building sustainable and fulfilling endeavors. By cultivating care, you can create a positive impact on yourself, your team, and your customers.

Remember, care is not a luxury; it's a necessity. It's the foundation of a healthy and productive life.

So, embrace the power of care and unlock your full potential. The results will speak for themselves.`
      }
    ],
    furtherReading: [
      {
        title: "Daring Greatly by Brené Brown",
        description: "How the courage to be vulnerable transforms the way we live, love, parent, and lead.",
        url: "https://brenebrown.com/book/daring-greatly/"
      },
      {
        title: "Radical Candor by Kim Scott",
        description: "Be a kick-ass boss without losing your humanity.",
        url: "https://www.radicalcandor.com/the-book/"
      },
      {
        title: "The Five Dysfunctions of a Team by Patrick Lencioni",
        description: "A leadership fable.",
        url: "https://www.tablegroup.com/product/five-dysfunctions/"
      }
    ]
  },
    {
      id: 4,
      slug: "feedback-loops",
      title: "Feedback Loops",
      description: "How immediate feedback drives progress in both lifting and product development.",
      status: "published" as const,
      publishDate: "2024-12-31",
      authorName: "MissionBuilt.io",
      heroImage: "/lovable-uploads/35170400-1b3f-446c-ae37-a3bb988dc1b8.png",
      sections: [
        {
          id: "intro",
          title: "Introduction",
          content: `Every great lift begins with feedback. The bar tells you immediately whether your setup was right, your timing was perfect, or your form broke down. There's no hiding from the weight—it either moves or it doesn't.

Product development shares this same unforgiving clarity when we create the right feedback loops. User behavior, performance metrics, and team insights provide the same immediate, honest assessment that the barbell does. The question isn't whether feedback exists—it's whether we're listening to it.

This chapter explores how the best lifters and product leaders build systems that give them the information they need, when they need it, to make continuous progress.`
        },
        {
          id: "the-barbell-never-lies",
          title: "The Barbell Never Lies",
          content: `In powerlifting, feedback is immediate and binary. The weight moves, or it doesn't. Your form holds, or it breaks down. The barbell provides constant, honest assessment with every rep.

Elite lifters understand this feedback intimately. They feel the difference between a bar that moves smoothly off their chest versus one that stutters. They recognize when their hip drive timing is off by milliseconds. They know the difference between technical failure and true muscular failure.

This feedback isn't just about the lift itself—it's about everything leading up to it. Sleep quality shows up in warm-up weights. Nutrition affects mental clarity during setup. Stress levels appear in how the bar feels at lockout.

The key insight: feedback is only valuable when you're prepared to receive it honestly and act on it immediately.`
        },
        {
          id: "building-product-feedback-loops",
          title: "Building Product Feedback Loops",
          content: `Product development requires the same commitment to honest, immediate feedback. But unlike the barbell, product feedback often comes disguised, delayed, or diluted through multiple layers of interpretation.

The best product teams build systems that make feedback as immediate and clear as possible:

**User Behavior as Direct Feedback**
Real user actions tell us more than any survey. How long do users spend in a feature? Where do they drop off? What do they click first? This behavioral feedback is as honest as the barbell—users vote with their actions, not their words.

**Internal Team Feedback Loops**
Just as lifters film themselves to review form, product teams need systems to capture and review their own work. Regular retrospectives, design reviews, and code reviews create opportunities for immediate course correction.

**Customer Development Conversations**
Direct user conversations provide the qualitative context that metrics can't capture. Why did they struggle with that flow? What were they trying to accomplish? These conversations are like having a coach spotting your lifts—they see things you can't see yourself.

**Performance Metrics as Form Checks**
System performance, error rates, and uptime metrics provide immediate feedback on technical execution, just like form breakdown signals in lifting.`
        },
        {
          id: "the-speed-of-feedback",
          title: "The Speed of Feedback",
          content: `In lifting, the faster you receive feedback, the faster you can adjust. A missed lift teaches you immediately. Waiting weeks between training sessions slows progress dramatically.

Product development follows the same principle. The time between action and feedback determines how quickly teams can iterate and improve.

**Immediate Feedback Systems**
- Real-time user analytics and heatmaps
- Automated testing and continuous integration
- Feature flags for rapid iteration
- Customer support ticket trends

**Regular Feedback Rhythms**
- Weekly user research sessions
- Daily standups with blockers and wins
- Sprint retrospectives focused on learning
- Monthly customer health reviews

**Long-term Feedback Loops**
- Quarterly business reviews
- Annual customer surveys
- Competitive analysis
- Product-market fit assessments

The key is matching the feedback frequency to the decision speed required. Small product decisions need immediate feedback. Strategic pivots can wait for quarterly reviews.`
        },
        {
          id: "responding-to-feedback",
          title: "Responding to Feedback",
          content: `Receiving feedback is only half the equation. How you respond determines whether feedback drives progress or becomes noise.

**In Lifting:**
A missed lift at 90% might mean backing down to 85% for the next attempt, or it might mean addressing a technical issue before attempting the weight again. Experienced lifters know the difference.

**In Product Development:**
Low user engagement might mean simplifying the interface, or it might mean better onboarding, or it might mean the feature itself needs rethinking. The response depends on understanding the root cause.

**Principles for Effective Response:**
1. **Act quickly on clear signals** - If users consistently abandon a flow at the same step, fix it immediately
2. **Investigate ambiguous feedback** - If metrics are mixed, dig deeper before making changes
3. **Test responses systematically** - Like adjusting one variable at a time in training
4. **Measure the impact of changes** - Close the feedback loop by tracking whether your response worked

The goal isn't to respond to every piece of feedback, but to respond thoughtfully to the feedback that matters most for your current objectives.`
        },
        {
          id: "false-feedback",
          title: "False Feedback",
          content: `Not all feedback is created equal. Both lifting and product development are full of misleading signals that can derail progress if you're not careful.

**In Lifting:**
- A weight that feels heavy might be due to poor sleep, not actual strength loss
- A technique that works for one lifter might be wrong for your body type
- Daily weight fluctuations don't reflect actual strength changes

**In Product Development:**
- Feature requests from vocal users might not represent the broader user base
- Short-term metric dips might be learning curves, not product failures
- Internal team preferences might not align with user needs

**Identifying False Feedback:**
1. **Look for patterns over single data points** - One user complaint vs. systematic issue
2. **Consider the source** - Internal stakeholder vs. target user feedback
3. **Check for confounding factors** - Seasonal effects, external events, or system changes
4. **Validate with multiple feedback types** - Quantitative + qualitative + behavioral

The skill is in filtering signal from noise, focusing on feedback that drives real progress rather than just change for the sake of change.`
        },
        {
          id: "feedback-loops-conclusion",
          title: "Building Your Feedback Systems",
          content: `Both lifting and product development are fundamentally feedback-driven activities. The teams and individuals who build the best feedback systems make the fastest, most sustainable progress.

**Key Principles:**
- **Seek immediate, honest feedback** wherever possible
- **Build multiple types of feedback loops** for different time horizons
- **Respond systematically** rather than reactively
- **Filter false signals** while staying open to uncomfortable truths

The barbell will always tell you the truth about your lift. The challenge is building product systems that give you the same level of honest, actionable feedback about your work.

When you get this right, progress becomes inevitable. Each iteration teaches you something valuable, each release gets you closer to product-market fit, and each user interaction helps you build something better.

The question isn't whether feedback exists—it's whether you're brave enough to listen to it and disciplined enough to act on it.`
        }
      ],
      furtherReading: [
        {
          title: "Stefi Cohen's Coaching Evolution",
          description: "Explores Stefi Cohen's evolving approach to training, blending isolation and compound movements, and emphasizing adaptability—a model of feedback-driven progression.",
          url: "https://www.hybridperformancemethod.com/blog/are-isolation-movements-better-for-muscle-growth"
        },
        {
          title: "Motor Learning and Coaching Cues",
          description: "Outlines effective coaching cues in baseball, including directional visual prompts like \"turn the flashlight,\" to support motor learning through immediate feedback.",
          url: "https://www.drivelinebaseball.com/2017/02/coaching-hitting-mechanics-part-2-application/"
        },
        {
          title: "Duolingo's Onboarding and Retention Strategies",
          description: "Analyzes Duolingo's onboarding process, highlighting how personalization and gamification contribute to user retention and engagement.",
          url: "https://www.redfast.com/news/how-duolingos-modern-onboarding-drives-user-retention"
        },
        {
          title: "Elastic's Acquisition of Endgame",
          description: "Provides context on the Endgame acquisition and the iterative, feedback-driven strategy that shaped its product approach.",
          url: "https://techcrunch.com/2019/10/15/elastic-adds-endpoint-security-to-its-expanding-toolset/",
          note: "Coverage of Elastic's acquisition of Endgame, including reference to its focus on a single, mature endpoint security product."
        },
        {
          title: "Slack's Origins and Internal Tool Pivot",
          description: "Details how Slack emerged from an internal communication tool at Tiny Speck, developed during the creation of the game Glitch, and evolved through continuous internal feedback loops.",
          url: "https://www.wired.com/2014/08/the-most-fascinating-profile-youll-ever-read-about-a-guy-and-his-boring-startup"
        },
        {
          title: "Slack's Product Philosophy",
          description: "Reveals how the team behind Slack ritualized internal feedback and refined the tool based on daily use, long before realizing it could become a standalone product.",
          url: "https://review.firstround.com/from-0-to-1b-slacks-founder-shares-their-epic-launch-strategy"
        },
        {
          title: "Product Managers Must Talk to Users",
          description: "Marty Cagan explains why user conversations are not optional for PMs, and how constant, intentional feedback is essential to product leadership.",
          url: "https://www.svpg.com/discovery-feedback"
        },
        {
          title: "Fitbit Sleep Score Anxiety",
          description: "Explores how Fitbit's sleep score feature, intended to empower users, inadvertently created stress and confusion as people began to fixate on a single metric rather than holistic health.",
          url: "https://www.washingtonpost.com/business/2020/02/14/sleep-wellness-employer-oura/"
        },
        {
          title: "RPE and RIR in Strength Training",
          description: "Outlines how Rate of Perceived Exertion (RPE) and Reps in Reserve (RIR) offer subjective yet critical feedback for athletes—emphasizing that true progress requires honest self-assessment, not just numbers.",
          url: "https://www.strongerbyscience.com/reps-in-reserve/"
        },
        {
          title: "Target Canada Collapse",
          description: "A detailed account of how Target's expansion into Canada failed due to systemic issues, misread data, and ignored frontline feedback—resulting in one of the most expensive retail failures in history.",
          url: "https://canadianbusiness.com/ideas/the-last-days-of-target-canada/"
        },
        {
          title: "The Problem with Listening to Metrics",
          description: "Highlights how organizations often misinterpret data due to cognitive biases, bad proxies, or unexamined assumptions, leading to poor strategic decisions.",
          url: "https://hbr.org/2022/07/a-better-way-to-put-your-data-to-work"
        },
        {
          title: "The Medici Effect",
          description: "Frans Johansson's concept of intersectional innovation emphasizes the value of early, diverse input—the \"share early\" principle is foundational to adaptive feedback.",
          url: "https://www.fransjohansson.com/books"
        },
        {
          title: "Figma's Culture of Real-Time Feedback",
          description: "Figma's built-in commenting and mock review workflows enable low-friction, high-impact feedback loops across product and design.",
          url: "https://www.figma.com/blog/inside-figma-building-a-more-collaborative-design-process/"
        },
        {
          title: "Duolingo's Feedback-Driven UX",
          description: "Duolingo uses micro-interactions and behavioral cues to offer real-time encouragement and course correction within its language learning platform.",
          url: "https://blog.duolingo.com/duologues-design-conversations/"
        },
        {
          title: "Lovable AI and Creative Iteration",
          description: "At UOttOhack, the Lovable team demonstrated how rapid iteration with AI tools can accelerate app development, enabling real-time feedback and collaborative creativity.",
          url: "https://lovable.dev/blog/uottohack-umar-app-development"
        }
      ]
    },
];
