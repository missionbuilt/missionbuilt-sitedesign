/**
 * The three apps, as every marketing page shows them (home, /rack, /first, /coach, /rack/plans).
 *
 * One switch decides whether MissionStack is named: MISSIONSTACK_ANNOUNCED
 * (src/data/missionstack-gate.mjs). Until Mike clears the name, the third app is "The gym board",
 * with its icon, and links nowhere outside /rack. Strings marked COPY are drafts for Mike's yes;
 * the ad's lines (Mike, 10-12) are marked as such.
 *
 * The icons are the apps' own (AppIcon.appiconset, icon-1024.png, 2026-10-15), exported to
 * public/images/icons/. Chalk is done, oxblood is now, outlines are ahead (plan §3a).
 */
import { MISSIONSTACK_ANNOUNCED } from './missionstack-gate.mjs';

export type Shot = { src: string; w: number; h: number; alt: string };

export interface StackApp {
  key: 'ironstack' | 'mealstack' | 'missionstack';
  /** The public name: "The gym board" for MissionStack until the name clears. */
  name: string;
  /** The app page, or '' while it isn't public. */
  href: string;
  icon: { src: string; src2x: string; alt: string };
  /** The threes (plan §3a). COPY */
  job: string;
  surface: string;
  does: string;
}

const MS = MISSIONSTACK_ANNOUNCED;

export const STACK: StackApp[] = [
  {
    key: 'ironstack',
    name: 'IronStack',
    href: '/rack/ironstack',
    icon: { src: '/images/icons/ironstack-256.png', src2x: '/images/icons/ironstack-512.png', alt: 'IronStack app icon: a loaded barbell.' },
    job: 'The lift',
    surface: 'Your wrist, and your phone',
    does: 'Log every set. Your coach can see it.',
  },
  {
    key: 'mealstack',
    name: 'MealStack',
    href: '/rack/mealstack',
    icon: { src: '/images/icons/mealstack-256.png', src2x: '/images/icons/mealstack-512.png', alt: 'MealStack app icon: the day\'s meals on a bar.' },
    job: 'The fuel',
    surface: 'Your phone, and soon your wrist',
    does: 'Times your meals around your training.',
  },
  {
    key: 'missionstack',
    name: MS ? 'MissionStack' : 'The gym board',
    href: MS ? '/rack/missionstack' : '',
    icon: { src: '/images/icons/missionstack-256.png', src2x: '/images/icons/missionstack-512.png', alt: MS ? 'MissionStack app icon: the board.' : 'The gym board app icon: a grid of squares.' },
    job: 'The plan, and the board',
    surface: 'The big screen: iPad, Mac, Apple TV',
    does: 'Plan the weeks. Put the live workout on the gym TV.',
  },
];

/** The ad's lines 5 to 8 (approved), each with a real screen. COPY: the body lines. */
export type Tile = { line: string; body: string; href: string; shot: Shot; device: 'watch' | 'phone' | 'tablet' };

export const TILES: Tile[] = [
  { line: 'Every set, on your wrist.', body: 'Log the set and run the clock from your Apple Watch.', href: '/rack/ironstack',
    device: 'watch', shot: { src: '/images/ironstack/watch-set.webp', w: 422, h: 514, alt: 'IronStack on Apple Watch: Box squat, 275 lb for 3 reps, the rest clock and Log set.' } },
  { line: 'Live in the gym.', body: 'Your set, the load and the rest clock, big enough to read from the platform. One lifter on the board today.', href: MS ? '/rack/missionstack' : '/rack',
    device: 'tablet', shot: { src: '/images/missionstack/board-ipad.webp', w: 1080, h: 751, alt: 'The gym board on iPad mid-set, one lifter: the exercise, the set, the load and the rest clock.' } },
  // #164 (b76): a coach can log a workout for a lifter.
  { line: 'Coach them from the floor.', body: 'A coach sends the plan, sees every set and can log a workout for their lifter.', href: '/coach',
    device: 'phone', shot: { src: '/images/ironstack/coach-plan.webp', w: 540, h: 1174, alt: 'Coach mode in IronStack, the lifter\'s side: Today tagged Coach\'s plan with the planned sets and Start workout.' } },
  { line: 'Fuel and plans that keep up.', body: 'Move your workout and the day\'s meals move with it.', href: '/rack/mealstack',
    device: 'phone', shot: { src: '/images/mealstack/session-moved.webp', w: 540, h: 1174, alt: 'MealStack after the workout moved: the carb surge before training, the shake after it and dinner move with it, with an Undo.' } },
];

/** How they work as one: only what's live (plan §3a). COPY */
export const TOGETHER_LIVE = [
  'IronStack tells MealStack when you train, and your day re-flows.',
  'Your phone puts the workout on the board when you scan its code.',
];
export const TOGETHER_SOON = [
  MS ? 'A week planned on the iPad is on your phone.' : 'A week planned on your iPad or Mac is on your phone.',
  'One subscription for all three.',
];
