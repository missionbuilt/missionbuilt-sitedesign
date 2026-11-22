/**
 * /rack/plans: one row per app (Mike 2026-10-16 15:21 to 15:27, hq/inbox/marketing/2026-10-16-1525
 * and -1530). Each row reads free to paid for that app only, so nothing looks like it stacks into the
 * next app. Names match across the apps: IronStack Free | IronStack Pro, MealStack Free | MealStack
 * Pro, MissionStack Free, and The Full Stack.
 *
 * - Free is highlighted only where it is truly free to use: logging in IronStack and the gym board in
 *   MissionStack. MealStack's free tier is a small try-it tier (Mike 15:26: "it is more free to try,
 *   but real use needs paid"), decided 10-16 08:47 as the training-day timeline.
 * - The Full Stack is the best deal: the page's one oxblood accent, a Best deal tag and the three-icon
 *   mark. Until prices land, the claim rides on wording and design, with no savings figure.
 * - **No prices anywhere** (Mike 15:27: "just remove prices and keep the rest of the design"). Every
 *   price slot reads from PRICES below; each is null today and shows PRICE_SLOT. When Mike approves the
 *   product lead's rework (due Wed 10-21), the numbers go in PRICES and nowhere else.
 *
 * Live means in testers' hands (IronStack b75, MealStack b92, MissionStack 0.1.0); `soon` renders
 * "Coming soon". Strings are drafts for Mike's yes. assertNoPrices() stops the build if a price, trial
 * or founding line gets into the words, or if PRICES holds a number while PRICES_PUBLIC is false.
 */

/** Flip only on Mike's word that prices can be public. */
export const PRICES_PUBLIC = false;

export type Price = { month: string | null; year: string | null; founding: string | null };

/** The one place prices live. All null until Mike approves the rework. */
export const PRICES: Record<'ironstack_pro' | 'mealstack_pro' | 'full_stack' | 'coach_10' | 'coach_25', Price> = {
  ironstack_pro: { month: null, year: null, founding: null },
  mealstack_pro: { month: null, year: null, founding: null },
  full_stack: { month: null, year: null, founding: null },
  coach_10: { month: null, year: null, founding: null },
  coach_25: { month: null, year: null, founding: null },
};

/** COPY (draft for Mike): what a price slot says until the numbers land. */
export const PRICE_SLOT = 'Pricing coming soon';
/** COPY (draft for Mike): the line under The Full Stack's slot, no savings figure. */
export const FULL_STACK_SLOT = 'The best price on this page when pricing lands.';
/** COPY (draft for Mike): what the apps do together, the reason for the bundle. */
export const FULL_STACK_TOGETHER = 'They work as one: IronStack tells MealStack when you train, and your phone puts the workout on the gym board when you scan its code.';
/** COPY (draft for Mike): what Stack AI is, said once on the plans page. */
export const STACK_AI_LINE = 'Stack AI is the AI in the apps: it reads what you have logged and answers from it.';
/** COPY (draft for Mike): the page's one line about prices. */
export const PRICING_LINE = 'Pricing lands here before it lands in the App Store.';

export type Item = { text: string; soon?: boolean };
export type Tier = {
  id: string;
  name: string;
  /** 'free' = truly free to use (green tag); 'try' = a small try-it tier; 'pro' = the paid hero. */
  kind: 'free' | 'try' | 'pro';
  tag?: string;
  line: string;
  items: Item[];
  price?: keyof typeof PRICES;
};
export type Row = { app: 'ironstack' | 'mealstack' | 'missionstack'; name: string; href: string; tiers: Tier[]; note?: string };

// COPY: every string below is a draft for Mike's yes.
export const rows: Row[] = [
  {
    app: 'ironstack',
    name: 'IronStack',
    href: '/rack/ironstack',
    note: 'Free to log. Pro for your whole history.',
    tiers: [
      {
        id: 'ironstack_free', name: 'IronStack Free', kind: 'free', tag: 'Free',
        line: 'Logging in IronStack is free. No caps.',
        items: [
          { text: 'Every set and program, no caps' },
          { text: 'Apple Watch and the rest clock' },
          { text: 'Starter programs' },
          { text: 'Social with your partners' },
          { text: 'Train with a coach' },
          { text: '30 days of insights' },
        ],
      },
      {
        id: 'ironstack_pro', name: 'IronStack Pro', kind: 'pro', tag: 'Pro', price: 'ironstack_pro',
        line: 'Your whole history, and Stack AI on your own sets.',
        items: [
          { text: 'Insights on your whole history' },
          { text: 'Next weights from your sets' },
          { text: 'Programs from a photo or PDF' },
          { text: 'Ask Stack AI anything' },
        ],
      },
    ],
  },
  {
    app: 'mealstack',
    name: 'MealStack',
    href: '/rack/mealstack',
    note: 'Try it free. Everyday use is MealStack Pro.',
    tiers: [
      {
        id: 'mealstack_free', name: 'MealStack Free', kind: 'try', tag: 'Try free',
        line: 'The training-day timeline, to try it.',
        items: [
          { text: 'Set your workout time' },
          { text: 'See when to eat' },
        ],
      },
      {
        id: 'mealstack_pro', name: 'MealStack Pro', kind: 'pro', tag: 'Pro', price: 'mealstack_pro',
        line: 'Meals timed to your workout, every day.',
        items: [
          { text: 'Log food, hit your targets' },
          { text: 'Plan a week of meals' },
          { text: 'Scan a barcode' },
          { text: 'Stack AI plans and reads menus' },
          { text: 'MealStack on Apple Watch' },
        ],
      },
    ],
  },
  {
    app: 'missionstack',
    name: 'MissionStack',
    href: '/rack/missionstack',
    note: 'Free, with every plan.',
    tiers: [
      {
        id: 'missionstack_free', name: 'MissionStack Free', kind: 'free', tag: 'Free',
        line: 'The gym board is free in MissionStack.',
        items: [
          { text: 'The gym board' },
          { text: 'Plan your weeks' },
          { text: 'Scan to pair, no account' },
          { text: 'Meals on the big screen', soon: true },
        ],
      },
    ],
  },
];

export const fullStack = {
  name: 'The Full Stack',
  tag: 'Best deal',
  line: 'Every app at its best, on one subscription.',
  items: [
    { text: 'IronStack Pro' },
    { text: 'MealStack Pro' },
    { text: 'MissionStack' },
    { text: 'Stack AI across all three' },
  ] as Item[],
  price: 'full_stack' as keyof typeof PRICES,
};

export const principles = [
  'Everything you build or log stays yours, even if a plan ends.',
  'No ads. Nothing sold.',
  "Lifters never pay for their coach's plan.",
];

/** The free coach level's size (Mike 10-16 17:11: "coach mode (first level) is missing Free"). The product lead's rework may change it; change it here. */
export const COACH_FREE_LIFTERS = 5;

// COPY: the coach levels. The paid ones are add-ons to The Full Stack (Mike 09:41), no prices.
export const coach = {
  line: `Up to ${COACH_FREE_LIFTERS} lifters: Coach Free. More: The Full Stack plus Coach Pro 10 or 25. Your lifters never pay, and on Coach Pro they get IronStack Pro while they're linked.`,
  free: { id: 'coach_free', name: 'Coach Free', tag: 'Free', lifters: `Coach up to ${COACH_FREE_LIFTERS} lifters`, line: 'Send plans and see every set, in Coach mode in IronStack.' },
  addons: [
    { id: 'coach_10', name: 'Coach Pro\u00a010', lifters: 'Up to 10 lifters', price: 'coach_10' as keyof typeof PRICES },
    { id: 'coach_25', name: 'Coach Pro\u00a025', lifters: 'Up to 25 lifters', price: 'coach_25' as keyof typeof PRICES },
  ],
  addonLine: 'Add-ons to The Full Stack, for coaches with more lifters.',
};

/** What a slot shows: the price once public, the draft line until then. */
export function priceText(key?: keyof typeof PRICES): string {
  if (!key) return '';
  const p = PRICES[key];
  if (!PRICES_PUBLIC || (!p.month && !p.year)) return PRICE_SLOT;
  return [p.month && `${p.month} a month`, p.year && `${p.year} a year`].filter(Boolean).join(' or ');
}

/** Stops the build if a price, trial or founding line slips into the words, or a number sits in PRICES while prices aren't public. */
export function assertNoPrices() {
  const words = JSON.stringify([rows, fullStack, principles, coach, PRICE_SLOT, FULL_STACK_SLOT, PRICING_LINE]);
  const hits = [/\$\s?\d/, /\d+\.\d\d/, /\btrial/i, /\bfounding/i, /\bper month\b/i, /\/mo\b/i].filter((re) => re.test(words));
  if (hits.length) throw new Error(`/rack/plans can't build: its words mention a price (${hits.map(String).join(', ')}). Prices go in PRICES only, on Mike's word.`);
  if (!PRICES_PUBLIC && Object.values(PRICES).some((p) => p.month || p.year || p.founding)) {
    throw new Error('/rack/plans can\'t build: PRICES holds a number while PRICES_PUBLIC is false.');
  }
}
