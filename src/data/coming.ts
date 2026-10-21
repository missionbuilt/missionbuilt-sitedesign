/**
 * Coming January 1: the one list every page reads (home, /rack, the app pages, /coach).
 *
 * Source: hq/briefs/site/site-launch-preview-plan.md §5 (product lead, 2026-10-15 v2). Every line
 * here is a draft for Mike's yes. "Live" means in testers' hands (IronStack b75, MealStack b92,
 * MissionStack 0.1.0); an item comes off this list with the build that ships it, and its line moves
 * onto the app's page as a live feature.
 *
 * `star` marks the six items in the home page's Get in first band. `missionstack` items render
 * only once MISSIONSTACK_ANNOUNCED is true.
 */

export type ComingApp = 'ironstack' | 'mealstack' | 'missionstack' | 'together';
export type ComingWhen = 'january' | 'later';

export interface ComingItem {
  id: string;
  app: ComingApp;
  when: ComingWhen;
  title: string;
  detail?: string;
  star?: boolean;
  /** Shown on /coach too. */
  coach?: boolean;
}

export const COMING: ComingItem[] = [
  // IronStack
  {
    id: 'demos-every-lift',
    app: 'ironstack',
    when: 'january',
    star: true,
    title: 'A demo and coaching cues for every lift.',
    detail:
      'Tap Info on any lift: a looping demo, what to set up, what you should feel, the common miss. (Testing now on 4 lifts.)',
  },
  {
    id: 'watch-out-of-range',
    app: 'ironstack',
    when: 'january',
    star: true,
    title: 'Your watch runs the workout even when your phone is out of range,',
    detail: 'in a locker or at home: the plan, the clock, the plates per side.',
  },
  {
    id: 'coach-logs-for-lifter',
    app: 'ironstack',
    when: 'january',
    coach: true,
    title: 'Coaches log for their lifters on the gym floor, even lifters without the app.',
  },

  // MealStack
  {
    id: 'log-food-fast',
    app: 'mealstack',
    when: 'january',
    title: 'Log food in seconds:',
    detail: 'recent, most used and favorites.',
  },

  // MissionStack (rendered only once the name is cleared)
  {
    id: 'plan-ipad-lift-phone',
    app: 'missionstack',
    when: 'january',
    star: true,
    title: 'Plan on the iPad, lift from your phone.',
    detail: 'It syncs with IronStack through your own iCloud.',
  },
  {
    id: 'meals-big-screen',
    app: 'missionstack',
    when: 'january',
    title: 'Plan your meals on the big screen:',
    detail: "MealStack's week on your iPad or Mac.",
  },
  {
    id: 'coach-desk',
    app: 'missionstack',
    when: 'january',
    coach: true,
    title: "Every lifter's week, plan against actual, on an iPad or a Mac.",
  },
  {
    id: 'board-hr-groups',
    app: 'missionstack',
    when: 'january',
    coach: true,
    title: 'Heart rate on the board, and supersets shown as one group.',
  },
  {
    id: 'ask-from-ipad',
    app: 'missionstack',
    when: 'january',
    title: 'Ask Stack AI from your iPad or Mac.',
  },

  // Together
  {
    id: 'the-stack',
    app: 'together',
    when: 'january',
    star: true,
    title: 'One subscription for all three apps',
    detail: '(The Full Stack).',
  },

  // Coming later (after launch)
  {
    id: 'team-lifts',
    app: 'missionstack',
    when: 'later',
    coach: true,
    title: 'Team lifts, several lifters on one board.',
  },
];

/** Items a page may show, given whether the MissionStack name is cleared. */
export function comingFor(opts: { announced: boolean; app?: ComingApp; when?: ComingWhen; star?: boolean; coach?: boolean }) {
  return COMING.filter(
    (c) =>
      (opts.announced || c.app !== 'missionstack') &&
      (opts.app === undefined || c.app === opts.app) &&
      (opts.when === undefined || c.when === opts.when) &&
      (opts.star === undefined || !!c.star === opts.star) &&
      (opts.coach === undefined || !!c.coach === opts.coach),
  );
}
