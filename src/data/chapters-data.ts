export interface Chapter {
  id: number;
  title: string;
  description: string;
  content: ChapterContent[];
  status: 'published' | 'draft' | 'coming-soon';
}

export interface ChapterContent {
  type: 'section' | 'sub-section' | 'content' | 'quote';
  title?: string;
  content?: string;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Start Where You Are",
    description: "Every rep matters. Every decision counts. Your foundation shapes everything that follows.",
    status: 'published',
    content: [
      {
        type: 'section',
        title: 'The Platform',
        content: 'Powerlifting is more than a sport; it’s a platform for self-discovery. It teaches you about your limits, your will, and your potential.'
      },
      {
        type: 'content',
        content: 'Like product leadership, it humbles you. It demands respect for the process. And it proves that consistent effort, grounded in a clear mission, yields extraordinary results.'
      },
      {
        type: 'content',
        content: 'This book explores how product leadership and powerlifting share the same foundation: discipline, mission, and care.'
      },
      {
        type: 'section',
        title: 'Discipline',
        content: 'In powerlifting, discipline is your training schedule, your diet, your sleep. It’s the commitment to the process, even when you don’t feel like it.'
      },
      {
        type: 'content',
        content: 'In product, discipline is your roadmap, your sprint cycles, your user research. It’s the rigor to stay focused on the mission, even when new ideas pull you in different directions.'
      },
      {
        type: 'section',
        title: 'Mission',
        content: 'In powerlifting, your mission is your goal: a new personal best, a qualifying total, a competition win.'
      },
      {
        type: 'content',
        content: 'In product, your mission is your vision: a product that solves a real problem, a service that delights users, a company that changes the world.'
      },
      {
        type: 'section',
        title: 'Care',
        content: 'In powerlifting, care is your attention to form, your recovery, your injury prevention. It’s about respecting your body and your long-term health.'
      },
      {
        type: 'content',
        content: 'In product, care is your empathy for users, your attention to detail, your commitment to quality. It’s about respecting your users and your long-term impact.'
      },
      {
        type: 'content',
        content: 'These three pillars — discipline, mission, and care — are the foundation of both powerlifting and product leadership. They’re the key to building a strong platform for growth.'
      },
    ]
  },
  {
    id: 2,
    title: "Cues: The Smallest Signal That Changes Everything",
    description: "In lifting and in product, progress lives in the details. The right cue at the right moment can unlock everything.",
    status: 'published',
    content: [
      {
        type: 'section',
        title: 'The Power of Cues',
        content: 'In powerlifting, a cue is a small, specific instruction that helps you improve your form or technique. It’s a reminder to keep your back straight, your core tight, or your elbows in.'
      },
      {
        type: 'content',
        content: 'In product, a cue is a small, specific piece of feedback that helps you improve your product or service. It’s a user comment, a bug report, or a piece of analytics data.'
      },
      {
        type: 'content',
        content: 'The power of cues lies in their ability to focus your attention on the most important details. They help you filter out the noise and concentrate on what matters most.'
      },
      {
        type: 'section',
        title: 'How to Use Cues',
        content: 'In powerlifting, the best cues are short, specific, and actionable. They’re easy to remember and easy to apply.'
      },
      {
        type: 'content',
        content: 'In product, the best cues are clear, concise, and relevant. They’re easy to understand and easy to act on.'
      },
      {
        type: 'content',
        content: 'To use cues effectively, you need to be present and attentive. You need to be open to feedback and willing to adjust your approach.'
      },
      {
        type: 'section',
        title: 'Examples of Cues',
        content: 'Here are some examples of cues in powerlifting:'
      },
      {
        type: 'content',
        content: '- Keep your back straight\n- Tighten your core\n- Drive through your heels\n- Squeeze your glutes\n- Keep your elbows in'
      },
      {
        type: 'content',
        content: 'Here are some examples of cues in product:'
      },
      {
        type: 'content',
        content: '- Users are dropping off at this step\n- This feature is confusing to new users\n- This page is loading slowly\n- This button is not visible enough\n- This copy is not clear enough'
      },
      {
        type: 'section',
        title: 'The Importance of Context',
        content: 'The best cues are always tailored to the individual and the situation. What works for one person may not work for another.'
      },
      {
        type: 'content',
        content: 'In powerlifting, a coach will adjust their cues based on the lifter’s experience, strength, and technique.'
      },
      {
        type: 'content',
        content: 'In product, a product manager will adjust their cues based on the user’s behavior, feedback, and goals.'
      },
      {
        type: 'content',
        content: 'By paying attention to context, you can ensure that your cues are always relevant and effective.'
      }
    ]
  },
  {
    id: 3,
    title: "Systems Build Champions",
    description: "Champions aren't born from single moments of brilliance. They're forged through systems that compound small wins into extraordinary outcomes.",
    status: 'published',
    content: [
      {
        type: 'section',
        title: 'The Power of Systems',
        content: 'In powerlifting, a system is a set of rules, routines, and habits that help you achieve your goals. It’s your training plan, your nutrition plan, and your recovery plan.'
      },
      {
        type: 'content',
        content: 'In product, a system is a set of processes, tools, and practices that help you build and launch successful products. It’s your product development process, your marketing process, and your customer support process.'
      },
      {
        type: 'content',
        content: 'The power of systems lies in their ability to automate your progress. They help you stay consistent, focused, and efficient.'
      },
      {
        type: 'section',
        title: 'How to Build Systems',
        content: 'In powerlifting, the best systems are simple, sustainable, and scalable. They’re easy to follow, easy to maintain, and easy to adjust.'
      },
      {
        type: 'content',
        content: 'In product, the best systems are flexible, adaptable, and measurable. They’re easy to change, easy to improve, and easy to track.'
      },
      {
        type: 'content',
        content: 'To build systems effectively, you need to start small and iterate often. You need to experiment with different approaches and find what works best for you.'
      },
      {
        type: 'section',
        title: 'Examples of Systems',
        content: 'Here are some examples of systems in powerlifting:'
      },
      {
        type: 'content',
        content: '- A training plan that includes specific exercises, sets, and reps\n- A nutrition plan that includes specific foods, macros, and calories\n- A recovery plan that includes specific rest, sleep, and stretching'
      },
      {
        type: 'content',
        content: 'Here are some examples of systems in product:'
      },
      {
        type: 'content',
        content: '- A product development process that includes specific stages, tasks, and deliverables\n- A marketing process that includes specific channels, campaigns, and metrics\n- A customer support process that includes specific tools, procedures, and SLAs'
      },
      {
        type: 'section',
        title: 'The Importance of Feedback',
        content: 'The best systems are always evolving. They’re constantly being refined and improved based on feedback.'
      },
      {
        type: 'content',
        content: 'In powerlifting, a coach will monitor your progress and adjust your system based on your performance, recovery, and goals.'
      },
      {
        type: 'content',
        content: 'In product, a product manager will analyze your data and adjust your system based on your user behavior, feedback, and results.'
      },
      {
        type: 'content',
        content: 'By embracing feedback, you can ensure that your systems are always optimized for success.'
      }
    ]
  },
  {
    id: 4,
    title: "Feedback Loops",
    description: "The strongest lifters and the best products share one thing: they get better through feedback loops that actually work.",
    status: 'published',
    content: [
      {
        type: 'section',
        title: 'The Essence of Feedback Loops',
        content: 'In powerlifting, a feedback loop is how you adjust your training based on results. Did that set feel too heavy? Too light? How’s your recovery? Good lifters use every workout as a chance to learn and adapt.'
      },
      {
        type: 'content',
        content: 'In product, feedback loops are about understanding how users interact with your product. What are they clicking? Where are they getting stuck? The goal is to gather insights and iterate quickly.'
      },
      {
        type: 'content',
        content: 'Effective feedback loops turn data into action, driving continuous improvement.'
      },
      {
        type: 'section',
        title: 'Building Effective Feedback Loops',
        content: 'For powerlifting, this means tracking your workouts, noting how you feel, and adjusting your plan accordingly. It’s about being honest with yourself and making changes when needed.'
      },
      {
        type: 'content',
        content: 'In product, it involves setting up analytics, talking to users, and running experiments. It’s about creating a system where feedback is constantly flowing in and being acted upon.'
      },
      {
        type: 'content',
        content: 'The key is to make the loop as tight as possible, so you can learn and adapt quickly.'
      },
      {
        type: 'section',
        title: 'Examples in Action',
        content: 'In powerlifting, if you notice your squat is feeling weak, you might adjust your accessory work or focus on improving your technique.'
      },
      {
        type: 'content',
        content: 'In product, if you see users aren’t completing a key flow, you might simplify the design or add more guidance.'
      },
      {
        type: 'content',
        content: 'The goal is always to identify the problem, make a change, and then measure the impact.'
      },
      {
        type: 'section',
        title: 'The Role of Humility',
        content: 'The best lifters and product teams are humble. They know they don’t have all the answers and are always open to learning.'
      },
      {
        type: 'content',
        content: 'This means being willing to admit when you’re wrong, seeking out feedback, and constantly challenging your assumptions.'
      },
      {
        type: 'content',
        content: 'Humility is the foundation of any successful feedback loop.'
      },
      {
        type: 'section',
        title: 'Strong Feedback, Strong Foundations',
        content: `We should strive for feedback that's constructive — not combative.
I've learned this over the course of my career. As a passionate product leader, I've had to walk a line: How do you bring intensity without intimidation? How do you make sure your excitement doesn't land as insult?
It's not always easy. Passion can blur the edges. And in fast-moving teams, feedback can come fast and hot — even when it's meant to help.
But here's what I've come to believe:`
      },
      {
        type: 'quote',
        content: `When feedback is anchored in empathy and structured around the mission, it becomes a lift — not a weight.
 It pushes people forward instead of pinning them down.`
      },
      {
        type: 'content',
        content: `These lessons apply well beyond product, and well beyond management. They show up in how we coach our teammates, how we parent, how we partner, how we grow.
If something matters enough to say out loud, then it matters enough to deliver with care.
Because what you say is only part of it.
How it lands — that's what makes it real.`
      },
      {
        type: 'sub-section',
        title: 'Strong Feedback Is Often Micro',
        content: `We tend to think feedback has to be a big moment. A review. A reset. A speech.
But most of the feedback that actually changes people — and changes outcomes — is micro.
One cue, one adjustment, one rep at a time.
That's how coaching works on the platform. That's how great PMs guide a team. That's how trust is built — and how performance gets better.
In the gym, the best feedback is short and specific: "Brace before the pull." "You're losing tension at the bottom." You don't wait until after the meet to say it — you say it in the warm-up room, in the moment, when it counts.
In product, it's the same. "This feature's drifting from the core user need — let's tighten it." "That's a great insight — let's surface that earlier in the deck."
Micro feedback avoids defensiveness. It's less likely to be taken personally.
It's just the next rep, done better.`
      },
      {
        type: 'sub-section',
        title: 'Share Early, Improve Always',
        content: `Too many teams wait too long.
They polish. They perfect. They fear showing something unfinished. But by the time the feedback comes, the team is too attached — or too far gone — to adapt.
The best teams share early.`
      },
      {
        type: 'quote',
        content: `That's the Medici principle: seek feedback while ideas are still flexible — not fixed.
Let people shape the work before it's locked in.`
      }
    ]
  },
];
