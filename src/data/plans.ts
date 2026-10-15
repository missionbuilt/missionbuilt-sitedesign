/**
 * /rack/plans: what each plan includes, with no prices (plan §7, hq/briefs/site/site-launch-preview-plan.md).
 *
 * Reworked from feat/pricing-page's pricing.json (#44, feature map #154) for the launch preview:
 * every price, founding price and trial is gone. Prices are private until Mike allows them; the
 * page says "Pricing coming soon". Mike 2026-10-15 19:06 allows exactly these free lines:
 * "Logging in IronStack is free.", "The gym board is free in MissionStack." and "Every app has a
 * free way in, plus paid plans." Nothing says what MealStack's free offering is (still being
 * decided), so MealStack has no free column and no free line.
 *
 * Live means in testers' hands (IronStack b75, MealStack b92, MissionStack 0.1.0); anything else
 * carries `soon` and renders "Coming soon". Strings are drafts for Mike's yes.
 *
 * `assertNoPrices()` runs at build: a "$", a price, a trial or a founding line anywhere in this
 * file's data stops the build.
 */

export const PRICING_LINE = 'Pricing coming soon';

export interface PlanCard {
  id: string;
  name: string;
  line: string;
  includes: { text: string; soon?: boolean }[];
  /** Shown only once MISSIONSTACK_ANNOUNCED. */
  missionstackOnly?: boolean;
}

export const principles = (announced: boolean) => [
  'Everything you build or log stays yours, even if a plan ends.',
  announced ? 'The big screen comes with every plan.' : 'The gym board comes with every plan.',
  'No ads. Nothing sold.',
  "Lifters never pay for their coach's plan.",
  'Logging in IronStack is free.',
  'Every app has a free way in, plus paid plans.',
];

export const plans = (announced: boolean): PlanCard[] => [
  {
    id: 'ironstack',
    name: 'IronStack',
    line: 'Logging is free.',
    includes: [
      { text: 'Logging, programs, your own exercises and history, with no caps' },
      { text: 'Apple Watch' },
      { text: 'Rest clock and timers' },
      { text: 'Starter programs' },
      { text: 'Exercise Info: cues for every lift' },
      { text: 'Social and spotters' },
      { text: 'Coach mode, for lifters with a coach' },
      { text: 'The gym board' },
      { text: '30 days of insights' },
      { text: "Stack AI's answers from your log, on your phone" },
    ],
  },
  {
    id: 'ironstack_pro',
    name: 'IronStack Pro',
    line: 'Everything in IronStack, plus your whole history and Stack AI.',
    includes: [
      { text: 'Insights across your full history' },
      { text: 'Stack AI brings in any program: a photo, a PDF, a spreadsheet or a link' },
      { text: 'Ask Stack AI about your history' },
      { text: 'Swaps and next weights from Stack AI' },
    ],
  },
  {
    id: 'mealstack',
    name: 'MealStack',
    line: 'Your meals, timed around your training.',
    includes: [
      { text: 'Meals timed to your training' },
      { text: 'The day re-flows when your workout moves' },
      { text: 'Scan a barcode to log a food' },
      { text: 'Stack AI builds your plan or reads a menu' },
      { text: 'MealStack on Apple Watch', soon: true },
    ],
  },
  {
    id: 'the_stack',
    name: 'The Stack',
    line: announced
      ? 'IronStack Pro, MealStack and MissionStack, with one Stack AI allowance across all three.'
      : 'IronStack Pro and MealStack, with the gym board, and one Stack AI allowance across all of them.',
    includes: [
      { text: 'Everything in IronStack Pro' },
      { text: 'Everything in MealStack' },
      { text: 'One Stack AI allowance, shared' },
      { text: 'One subscription for all three apps', soon: true },
    ],
  },
];

export const coach = {
  line: "Your lifters never pay. Lifters on Coach Pro 10 and 25 get IronStack Pro while they're linked.",
  tiers: [
    { id: 'coach', name: 'Coach', lifters: 'Up to 5 lifters' },
    { id: 'coach_10', name: 'Coach Pro 10', lifters: 'Up to 10 lifters' },
    { id: 'coach_25', name: 'Coach Pro 25', lifters: 'Up to 25 lifters' },
  ],
};

export const featureColumns = ['IronStack', 'IronStack Pro', 'MealStack', 'The Stack'];

export interface FeatureRow {
  name: string;
  cells: [string, string, string, string];
  soon?: boolean;
}

const Y = '✓';

export const features = (announced: boolean): FeatureRow[] => [
  { name: 'Log fast: prefilled sets, plate math, prep sets for your bar', cells: [Y, Y, Y, Y] },
  { name: 'Rest clock, Live Activity, logging from the Lock Screen', cells: [Y, Y, Y, Y] },
  { name: 'Apple Watch, with heart rate', cells: [Y, Y, Y, Y] },
  { name: 'The watch runs the workout when your phone is out of range', cells: [Y, Y, Y, Y], soon: true },
  { name: 'Unlimited programs, workouts and your own exercises', cells: [Y, Y, Y, Y] },
  { name: 'Starter programs, and cues for the lifts in the library', cells: [Y, Y, Y, Y] },
  { name: 'Bring your history from Hevy, Strong or a spreadsheet', cells: [Y, Y, Y, Y] },
  { name: 'Records, badges and the workout recap', cells: [Y, Y, Y, Y] },
  { name: 'Insights: charts and estimated maxes', cells: ['30 days', 'Full history', '30 days', 'Full history'] },
  { name: 'Share cards and spotters', cells: [Y, Y, Y, Y] },
  { name: announced ? 'The gym board on iPad, Mac or Apple TV' : 'The gym board on a TV, an iPad or a Mac', cells: [Y, Y, Y, Y] },
  { name: 'Train with a coach: share what you choose, get their plans', cells: [Y, Y, Y, Y] },
  { name: 'Stack AI answers from your log, on your phone', cells: [Y, Y, Y, Y] },
  { name: 'Stack AI: ask anything, swap a lift, write a workout or a program', cells: ['', 'Allowance', '', 'Shared allowance'] },
  { name: 'Meals timed to your training', cells: ['', '', Y, Y] },
  { name: 'IronStack tells MealStack when you train, and the day moves with it', cells: ['', '', Y, Y] },
  { name: 'Log food: search, favorites and barcodes', cells: ['', '', Y, Y] },
  { name: 'Stack AI in MealStack: builds your meal plan, reads a menu', cells: ['', '', 'Allowance', 'Shared allowance'] },
  { name: 'MealStack on Apple Watch', cells: ['', '', Y, Y], soon: true },
  { name: 'Sync with your iPad or Mac through your own iCloud', cells: [Y, Y, Y, Y], soon: true },
];

/** Stops the build if a price, trial or founding line slips into the page's data. */
export function assertNoPrices(announced: boolean) {
  const words = JSON.stringify([principles(announced), plans(announced), coach, features(announced)]);
  const hits = [/\$/, /\bprice/i, /\btrial/i, /\bfounding/i, /\bper month\b/i, /\/mo\b/i, /\bfree week\b/i].filter((re) => re.test(words));
  if (hits.length) throw new Error(`/rack/plans can't build: its data mentions a price (${hits.map(String).join(', ')}). No prices until Mike allows them.`);
}
