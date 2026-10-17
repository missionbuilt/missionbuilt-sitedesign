/**
 * The compare pages (/rack/compare and its three children): every competitor cell, sourced.
 *
 * Source: hq/briefs/site/compare-sources.md (checked 2026-10-15 against each competitor's own site,
 * help center or App Store page). Plan: hq/briefs/site/site-launch-preview-plan.md §8. Words are
 * drafts for Mike's yes.
 *
 * Rules this file keeps:
 *  - A competitor cell is only what their own page says, with the URL. Where the source marked part
 *    of a cell [verify], that part is left out (`trimmed` says what was cut), and the verified part
 *    renders. A cell that is [verify] as a whole keeps its row out of the pages: those rows live in
 *    `pending` on each page until the cell is checked, and are never rendered.
 *  - `excerpt: true` means the source page blocked direct reading and the wording came from search
 *    excerpts of that exact page. It renders, and must be opened in a browser before the page goes
 *    public (Billboard's check).
 *  - Our own cells say only what's in testers' hands (IronStack b75, MealStack b92, the board in
 *    0.1.0), or carry `soon` ("Coming soon", in January) or `later` ("Coming later", after launch).
 *  - No prices. MissionStack is named (Mike cleared the name 2026-10-16 08:30).
 *  - assertPublishable() throws at build time if any rendered text contains "[verify]".
 */
import { MISSIONSTACK_ANNOUNCED } from './missionstack-gate.mjs';

export type Source = { url: string; excerpt?: boolean };
export type Cell = { text: string; sources: Source[]; trimmed?: string };
export type Ours = { text: string; soon?: string; later?: string };
export type Row = { key: string; label: string; ours: Ours; them: Record<string, Cell> };
export type PendingRow = { key: string; label: string; why: string };
export type Better = { text: string; source: Source };

export type ComparePage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  sub: string;
  usName: string;
  competitors: { key: string; name: string }[];
  /** Plain prose about our own app; no claims about anyone else. */
  intro: string[];
  rows: Row[];
  pending: PendingRow[];
  better: Better[];
  /** A block that waits on a fact check; rendered as a marked placeholder. */
  placeholder?: { title: string; body: string };
};

export const CHECKED = 'October 2026';
export const CHECKED_ISO = '2026-10-15';

const s = (url: string, excerpt = false): Source => (excerpt ? { url, excerpt: true } : { url });

// ---------------------------------------------------------------------------------------------
// Page 1: IronStack vs Hevy and Strong
// ---------------------------------------------------------------------------------------------
const HEVY_SITE = 'https://www.hevyapp.com/';
const HEVY_VS_STRONG = 'https://www.hevyapp.com/compare/strong/';
const HEVY_FEATURES = 'https://www.hevyapp.com/features/';
const HEVY_APPSTORE = 'https://apps.apple.com/us/app/hevy-workout-tracker-gym-log/id1458862350';
const STRONG_APPSTORE = 'https://apps.apple.com/us/app/strong-workout-tracker-gym-log/id464254577';

const ironstack: ComparePage = {
  slug: 'hevy-strong',
  title: 'IronStack vs Hevy and Strong: line by line · Mission Built',
  description: `IronStack against Hevy and Strong, paid tiers included: importing your history, the watch, coaching, social, demos, programs, prep sets and privacy. Checked against their own pages, ${CHECKED}.`,
  eyebrow: 'Compare · IronStack',
  h1: 'IronStack, line by line.',
  sub: 'Line by line, including what they do better.',
  usName: 'IronStack',
  competitors: [
    { key: 'hevy', name: 'Hevy' },
    { key: 'strong', name: 'Strong' },
  ],
  intro: [
    'IronStack is a lifting log for iPhone and Apple Watch. You bring your history, log a set by tapping, typing or saying it, and the rest clock talks in your earbuds.',
    'One thing that isn\'t a row below: MissionStack puts the workout you\'re logging on a TV, an iPad or a Mac, one lifter at a time today.',
  ],
  rows: [
    {
      key: 'import',
      label: 'Bring your history',
      ours: { text: 'Hevy and Strong exports bring your history and routines. JuggernautAI and any spreadsheet you kept bring history. A preview shows what it found before anything is saved.' },
      them: {
        hevy: { text: 'Imports Strong CSV files only. One import per account, which can be reverted. Files converted from other apps are not supported.', sources: [s('https://help.hevyapp.com/hc/en-us/articles/38001424401943', true), s(HEVY_VS_STRONG)] },
        strong: { text: 'No import. Strong\'s own CSV export "cannot be imported back into Strong."', sources: [s('https://help.strongapp.io/article/235-export-workout-data')] },
      },
    },
    {
      key: 'watch',
      label: 'Apple Watch',
      ours: {
        text: 'A watch app that runs the workout with your phone nearby: log the set, the rest clock, timed sets, finish from your wrist. The workout lands in Apple Health with heart rate.',
        soon: 'The watch runs the workout on its own when your phone is out of range.',
      },
      them: {
        hevy: { text: 'Watch app (and Wear OS). The site says you can track workouts "completely from your Apple Watch or WearOS device." The App Store says watch workouts save when the watch reconnects to the iPhone.', sources: [s(HEVY_SITE), s(HEVY_APPSTORE)] },
        strong: { text: 'Watch app that logs workouts "with or without your iPhone." Plate and warm-up calculators are not on the watch.', sources: [s(STRONG_APPSTORE), s('https://help.strongapp.io/article/169-plate-calculator')] },
      },
    },
    {
      key: 'rest',
      label: 'Rest timer',
      ours: { text: 'Starts itself, calls "Thirty seconds", "Five seconds" and "Get to work" in your earbuds, and fills the screen at the end.' },
      them: {
        hevy: { text: 'Automatic rest timer, with a per-exercise and a default setting.', sources: [s(HEVY_FEATURES), s('https://help.hevyapp.com/hc/en-us/articles/35385404949143', true)] },
        strong: { text: '"Built in Auto Countdown Timer," with Live Activity and Dynamic Island.', sources: [s(STRONG_APPSTORE)] },
      },
    },
    {
      key: 'plates',
      label: 'Plates and prep sets',
      ours: { text: 'The bar drawn the way it is loaded, plates per side, and prep sets fitted to your plates.' },
      them: {
        hevy: { text: 'Plate calculator. Warm-up set calculator: Pro.', sources: [s('https://www.hevyapp.com/features/weight-plate-calculator/'), s('https://help.hevyapp.com/hc/en-us/articles/33882110558743', true)], trimmed: 'whether the plate calculator is free or Pro' },
        strong: { text: 'Plate and warm-up calculators are Strong PRO features. Free users can tag warm-up sets by hand.', sources: [s('https://help.strongapp.io/article/132-strong-pro'), s('https://help.strongapp.io/article/171-warm-up-calculator')] },
      },
    },
    {
      key: 'programs',
      label: 'Starter programs',
      ours: { text: 'Ten starter programs, from powerlifting to yoga, every week written out, to read in Plan before you pick one.' },
      them: {
        hevy: { text: 'Routine library and split guides. Hevy Trainer (automatic programming) needs Pro. The free tier allows 4 routines.', sources: [s(HEVY_FEATURES), s(HEVY_VS_STRONG), s('https://help.hevyapp.com/hc/en-us/articles/38279350428695', true)] },
        strong: { text: '"Some default templates as examples." The free tier allows 3 templates.', sources: [s('https://help.strongapp.io/article/105-about-templates'), s('https://help.strongapp.io/article/132-strong-pro')] },
      },
    },
    {
      key: 'demos',
      label: 'Exercise demos',
      ours: {
        text: 'Testing now on 4 lifts.',
        soon: 'A demo and coaching cues for every lift.',
      },
      them: {
        hevy: { text: '"400+" exercises with animated demos (its comparison page says about 450). Custom exercises can take a video or GIF.', sources: [s('https://www.hevyapp.com/features/exercise-library/'), s(HEVY_VS_STRONG)] },
        strong: { text: '"Detailed exercise instructions with a growing library of animated videos."', sources: [s(STRONG_APPSTORE)], trimmed: 'library size' },
      },
    },
    {
      key: 'social',
      label: 'Social',
      ours: { text: 'Only partners you invite. Support, no comments, on purpose.' },
      them: {
        hevy: { text: 'A feed: follow, like and comment on workouts. The feed can be turned off in settings.', sources: [s(HEVY_SITE), s(HEVY_VS_STRONG)] },
        strong: { text: 'A share sheet for workouts and routines.', sources: [s(STRONG_APPSTORE)], trimmed: 'whether there is a feed' },
      },
    },
    {
      key: 'android',
      label: 'Android',
      ours: { text: 'No. iPhone and Apple Watch.' },
      them: {
        hevy: { text: 'Yes, plus Wear OS.', sources: [s(HEVY_SITE), s(HEVY_VS_STRONG)] },
        strong: { text: 'Yes.', sources: [s('https://www.strong.app/')] },
      },
    },
    {
      key: 'privacy',
      label: 'Privacy',
      ours: { text: 'Not on the App Store yet, so there is no label to quote. Everything you log is a file on your phone. Nothing goes to Anthropic until you turn Stack AI on. IronStack sends no usage data at all.' },
      them: {
        hevy: { text: 'App Store label: no "Data Used to Track You" section shown. Linked to you: purchases, usage data (analytics), email, name, contacts. Not linked: user ID, sensitive info, diagnostics.', sources: [s(HEVY_APPSTORE)] },
        strong: { text: 'App Store label: no "Data Used to Track You" section shown. Linked to you (app functionality): health and fitness, purchases, email, user ID, device ID, crash data, other data.', sources: [s(STRONG_APPSTORE)] },
      },
    },
  ],
  pending: [
    { key: 'coach', label: 'Coach features', why: 'Strong: not described on its own pages.' },
    { key: 'tv', label: 'TV or big screen', why: 'Hevy and Strong: not described on their own pages.' },
    { key: 'web', label: 'Web app', why: 'Strong: not described ("Access your training from any device" only).' },
  ],
  better: [
    { text: 'Hevy runs on Android, Wear OS and the web as well as iPhone and Apple Watch.', source: s(HEVY_VS_STRONG) },
    { text: 'Hevy has a built-in social feed with follows, likes and comments.', source: s(HEVY_SITE) },
    { text: 'Hevy\'s library has "400+" exercises with animated demos.', source: s('https://www.hevyapp.com/features/exercise-library/') },
    { text: 'Hevy Trainer generates programs with progressive overload (Pro).', source: s(HEVY_VS_STRONG) },
    { text: 'Hevy pairs the lifter app with a coach product, Hevy Coach.', source: s('https://hevycoach.com/') },
    { text: 'Strong runs on Android.', source: s('https://www.strong.app/') },
    { text: 'Strong\'s watch app logs workouts "with or without your iPhone."', source: s(STRONG_APPSTORE) },
  ],
};

// ---------------------------------------------------------------------------------------------
// Page 2: MealStack vs MacroFactor, Cronometer and MyFitnessPal
// ---------------------------------------------------------------------------------------------
const MF_APPSTORE = 'https://apps.apple.com/us/app/macrofactor-macro-tracker/id1553503471';
const CR_APPSTORE = 'https://apps.apple.com/us/app/cronometer-calorie-counter/id1145935738';
const MFP_APPSTORE = 'https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718';

const mealstack: ComparePage = {
  slug: 'macrofactor',
  title: 'MealStack vs MacroFactor, Cronometer and MyFitnessPal · Mission Built',
  description: `Meals timed around your training, set against MacroFactor, Cronometer and MyFitnessPal line by line, with what they do better. Checked against their own pages, ${CHECKED}.`,
  eyebrow: 'Compare · MealStack',
  h1: 'MealStack, line by line.',
  sub: 'Line by line, including what they do better.',
  usName: 'MealStack',
  competitors: [
    { key: 'macrofactor', name: 'MacroFactor' },
    { key: 'cronometer', name: 'Cronometer' },
    { key: 'myfitnesspal', name: 'MyFitnessPal' },
  ],
  intro: [
    'MealStack times your meals around your training. The day is built backward from when you train: the meal before it holds its time, and when the workout moves, the rest of the day re-flows around it.',
    'Your tracker says what you ate. This says when. Keep a food tracker beside it if you like; the block at the end says how the two live together.',
  ],
  rows: [
    {
      key: 'expenditure',
      label: 'Energy expenditure',
      ours: { text: 'No adaptive estimate. You set the target, or ask and a fixed formula does the arithmetic.' },
      them: {
        macrofactor: { text: 'Yes: its "energy expenditure calculation detects changes in your metabolism."', sources: [s(MF_APPSTORE)] },
        cronometer: { text: 'A formula estimate: BMR, activity level, tracker activity, exercise and the thermic effect of food.', sources: [s('https://support.cronometer.com/hc/en-us/articles/31974307318420-Energy-Expenditure', true)] },
        myfitnesspal: { text: 'Goals can be set by hand. Step data can raise the day\'s calorie goal.', sources: [s(MFP_APPSTORE), s('https://support.myfitnesspal.com/hc/en-us/articles/360032625731-Apple-Watch-App', true)], trimmed: 'whether an adaptive model exists' },
      },
    },
    {
      key: 'database',
      label: 'Food database',
      ours: { text: 'Food search and your own saved meals. No size claim: in our tests the barcode scan found 33 of 35 real products.' },
      them: {
        macrofactor: { text: 'About 1,360,000 verified foods in search. Its own pages also claim about 4 million more in the barcode database.', sources: [s('https://help.macrofactorapp.com/en/articles/46-food-search-database'), s('https://macrofactor.com/macrofactor-vs-cronometer/', true)] },
        cronometer: { text: '"More than 1.1 million verified foods" (App Store); "over 1M verified foods" (site).', sources: [s(CR_APPSTORE), s('https://cronometer.com/')] },
        myfitnesspal: { text: '"20.5M+ foods."', sources: [s(MFP_APPSTORE)] },
      },
    },
    {
      key: 'barcode',
      label: 'Barcode scan',
      ours: { text: 'Yes.' },
      them: {
        macrofactor: { text: 'Yes. There is no free tier (a paid app with a trial).', sources: [s(MF_APPSTORE)] },
        cronometer: { text: 'Yes, at no cost.', sources: [s('https://cronometer.com/'), s(CR_APPSTORE)] },
        myfitnesspal: { text: 'Premium only.', sources: [s('https://www.myfitnesspal.com/premium')] },
      },
    },
    {
      key: 'watch',
      label: 'Apple Watch',
      ours: { text: 'Not yet.', soon: 'Your next meal on the watch face, an alert before it, and Log it from your wrist.' },
      them: {
        macrofactor: { text: 'Watch app: log food by hour, weight and water. Has complications.', sources: [s('https://help.macrofactorapp.com/en/articles/273-how-to-log-food-in-the-macrofactor-watch-app', true), s('https://help.macrofactorapp.com/en/articles/265-configuring-complications-for-the-watch-app', true)] },
        cronometer: { text: 'Watch app (watchOS 9 and up). Release notes mention logging food from the watch.', sources: [s(CR_APPSTORE)] },
        myfitnesspal: { text: 'Watch app: add water, quick-add calories, see what\'s left. Calorie and macro complications.', sources: [s('https://support.myfitnesspal.com/hc/en-us/articles/360032625731-Apple-Watch-App', true)] },
      },
    },
    {
      key: 'health',
      label: 'Apple Health',
      ours: { text: 'Writes your macros to Apple Health at the time you actually ate.' },
      them: {
        macrofactor: { text: 'Two-way, with a switch per data type. Reads weight, nutrition and activity; writes nutrition.', sources: [s('https://help.macrofactorapp.com/en/articles/102-integrations'), s('https://help.macrofactorapp.com/en/articles/65-connect-health-connect-or-apple-health', true)], trimmed: 'the full per-type list' },
        cronometer: { text: 'You choose what it reads and writes. Reads activity, biometrics, sleep and workouts; writes nutrition.', sources: [s('https://support.cronometer.com/hc/en-us/articles/360020734212-Apple-Health-Apple-Watch', true), s(CR_APPSTORE)] },
        myfitnesspal: { text: 'Food goes to Health. Exercise comes from Health (same day only). Weight goes both ways. Sleep comes from Health.', sources: [s('https://support.myfitnesspal.com/hc/en-us/articles/360032271092-Apple-Health-connection-and-syncing', true)] },
      },
    },
    {
      key: 'privacy',
      label: 'Privacy',
      ours: { text: 'Not on the App Store yet, so there is no label to quote. The plan, the log and the day stay on your phone. Nothing goes to Anthropic until you turn Stack AI on. Usage data only if you say yes.' },
      them: {
        macrofactor: { text: 'App Store label: no "Data Used to Track You" section shown. Linked to you: health, fitness, purchases, email, name, photos, user ID, usage, diagnostics. Purposes include the developer\'s advertising and analytics.', sources: [s(MF_APPSTORE)] },
        cronometer: { text: 'App Store label: used to track you: contact info, identifiers, usage data. Not linked, used for third-party advertising: device ID, advertising data.', sources: [s(CR_APPSTORE)] },
        myfitnesspal: { text: 'App Store label: used to track you: identifiers, usage data. Linked, used for third-party advertising: device ID, advertising data.', sources: [s(MFP_APPSTORE)] },
      },
    },
  ],
  pending: [
    { key: 'timing', label: 'Meals timed to your training', why: 'Cronometer and MyFitnessPal: not described on their own pages; MacroFactor describes an hourly food timeline but nothing tied to workouts. Not proof it\'s missing, so the row waits.' },
  ],
  better: [
    { text: 'MyFitnessPal claims the largest database, "20.5M+ foods."', source: s(MFP_APPSTORE) },
    { text: 'MacroFactor\'s expenditure estimate adapts to "changes in your metabolism."', source: s(MF_APPSTORE) },
    { text: 'Cronometer scans barcodes at no cost.', source: s('https://cronometer.com/') },
    { text: 'Cronometer runs on the web and Android as well as iOS.', source: s('https://cronometer.com/') },
    { text: 'MacroFactor\'s watch app logs food, weight and water from the wrist.', source: s('https://help.macrofactorapp.com/en/articles/273-how-to-log-food-in-the-macrofactor-watch-app', true) },
    { text: 'Cronometer\'s database is curated and verified, and it lists micronutrients.', source: s(CR_APPSTORE) },
  ],
  placeholder: {
    title: 'Using it with another tracker',
    // Logbook's b92 check (2026-10-15 19:26).
    body: 'MealStack asks once whether to write the meals you log to Apple Health (protein, carbohydrates, fat and calories, at the time you ate), and whether to read food and weight from other apps. Say yes to reading, and what another app logged today shows under Today\'s totals as "Logged in other apps. Not added to MealStack\'s totals." It reads totals only, never food names. If your other tracker also writes meals to Apple Health, log each meal in one app, or turn off MealStack\'s "Write the meals you log" switch, so Health doesn\'t count a meal twice.',
  },
};

// ---------------------------------------------------------------------------------------------
// Page 3: Coach mode vs TrueCoach, Hevy Coach and TrainHeroic
// ---------------------------------------------------------------------------------------------
const TC_FEATURES = 'https://truecoach.co/features/';
const TC_PRICING = 'https://truecoach.co/pricing/';
const HC_SITE = 'https://hevycoach.com/';
const HC_VS_TH = 'https://hevycoach.com/compare/trainheroic/';
const TH_COACH = 'https://www.trainheroic.com/coach/';

const coach: ComparePage = {
  slug: 'truecoach',
  title: 'Coach mode vs TrueCoach, Hevy Coach and TrainHeroic · Mission Built',
  description: `IronStack's Coach mode against TrueCoach, Hevy Coach and TrainHeroic: logging on the floor, plan against actual, builders, clients and limits, with what they do better. Checked ${CHECKED}.`,
  eyebrow: 'Compare · Coach mode',
  h1: 'Coach mode, line by line.',
  sub: 'Line by line, including what they do better.',
  usName: 'Coach mode',
  competitors: [
    { key: 'truecoach', name: 'TrueCoach' },
    { key: 'hevycoach', name: 'Hevy Coach' },
    { key: 'trainheroic', name: 'TrainHeroic' },
  ],
  intro: [
    'Coach mode is inside IronStack. You send the plan, your lifter says yes first, and you see every set against your plan, with each change marked in place.',
    'And on the gym floor, the board puts the live workout on a TV, an iPad or a Mac: the set, the load, the rest clock and records, one lifter at a time today.',
  ],
  rows: [
    {
      key: 'floor',
      label: 'Log for a lifter on the floor',
      ours: { text: 'Yes: log a lifter\'s workout on your phone, and it lands in their IronStack history.', soon: 'Log for lifters without the app.' },
      them: {
        truecoach: { text: 'Yes, for "in-person" and "dual" clients: the coach adds results and marks workouts complete.', sources: [s('https://help.truecoach.co/en/articles/2403903-adding-a-new-client')] },
        hevycoach: { text: 'Yes: the coach app logs "clients\' workouts on live sessions," set by set.', sources: [s(HC_SITE), s(HC_VS_TH)] },
        trainheroic: { text: 'Yes: "Log for Athlete" in the coach mobile app.', sources: [s('https://support.trainheroic.com/hc/en-us/articles/18156852699917-For-Coaches-Editing-Logging-Sessions-for-Athletes-on-Mobile', true)] },
      },
    },
    {
      key: 'plan-actual',
      label: 'Plan against actual',
      ours: { text: 'Every set against your plan. Every change is marked in place: weight, reps, RPE, swaps and skips. Repeat last week\'s plan with a little more weight.' },
      them: {
        truecoach: { text: 'Compliance tracking (assigned exercises against completed) and compliance alerts.', sources: [s('https://truecoach.co/'), s(TC_FEATURES)], trimmed: 'whether there is a side-by-side set view' },
        hevycoach: { text: 'Adherence tracking, 7-day activity in the client list, and a consistency calendar.', sources: [s(HC_SITE), s(HC_VS_TH)], trimmed: 'whether there is a side-by-side set view' },
        trainheroic: { text: 'A dashboard that tracks "compliance, progress, programming status."', sources: [s(TH_COACH)], trimmed: 'whether there is a side-by-side set view' },
      },
    },
    {
      key: 'builder',
      label: 'Where you build',
      ours: {
        text: 'In IronStack on your phone, or on an iPad or a Mac with Apple silicon. For now a plan built on the iPad or Mac stays there.',
        soon: 'Send an iPad-built program to your lifter, and read every lifter\'s week at your desk.',
      },
      them: {
        truecoach: { text: 'A web app at app.truecoach.co, with a drag-and-drop workout and program builder.', sources: [s('https://help.truecoach.co/en/articles/4857023-truecoach-supported-web-browsers-and-devices', true), s(TC_FEATURES)] },
        hevycoach: { text: 'A program builder; the site links to app.hevycoach.com.', sources: [s('https://hevycoach.com/features/workout-program-builder/')], trimmed: 'which platform the builder runs on' },
        trainheroic: { text: 'The "most robust set of coaching tools" is on the website; desktop is recommended.', sources: [s('https://support.trainheroic.com/hc/en-us/articles/18156776017677', true), s('https://www.trainheroic.com/create/')] },
      },
    },
    {
      key: 'notes',
      label: 'Messages and notes',
      ours: { text: 'No chat. A note on a lift, and a private note on each lifter that only you see.' },
      them: {
        truecoach: { text: 'In-app messaging, including group and media. Daily check-ins through habit tracking.', sources: [s(TC_FEATURES), s('https://truecoach.co/')] },
        hevycoach: { text: 'Client chat with notifications. Clients can add progress photos, measurements and workout notes.', sources: [s('https://hevycoach.com/features/'), s(HC_VS_TH)], trimmed: 'check-ins' },
        trainheroic: { text: 'Real-time chat. A fixed 5-question readiness survey (sleep, mood, energy, stress, soreness).', sources: [s(TH_COACH), s('https://support.trainheroic.com/hc/en-us/articles/18156547276557-Athlete-Pro-Readiness', true)] },
      },
    },
    {
      key: 'android',
      label: 'Android clients',
      ours: { text: 'No. Lifters log on iPhone.', soon: 'Log for lifters without the app, whatever phone they carry.' },
      them: {
        truecoach: { text: 'Yes (Android apps for clients and coaches).', sources: [s(TC_FEATURES)] },
        hevycoach: { text: 'Yes (clients use Hevy, which is on Google Play).', sources: [s(HC_SITE)] },
        trainheroic: { text: 'Yes (Google Play app linked).', sources: [s(TH_COACH)] },
      },
    },
    {
      key: 'limits',
      label: 'Lifters per plan',
      ours: { text: 'Coach Free: up to 5 lifters. Coach Pro 10 and 25 are add-ons to The Full Stack. Pricing coming soon.' },
      them: {
        truecoach: { text: 'Starter up to 5, Standard up to 20, Pro up to 50. Custom above that.', sources: [s(TC_PRICING)] },
        hevycoach: { text: 'Client bands from 1–10 up to 501–1,000.', sources: [s('https://hevycoach.com/pricing/')] },
        trainheroic: { text: 'Tiers from 1 athlete up to 1,000; above 1,000, contact sales.', sources: [s(TH_COACH)] },
      },
    },
  ],
  pending: [
    { key: 'tv', label: 'TV or gym display', why: 'TrueCoach and Hevy Coach: not described on their own pages. TrainHeroic: team leaderboards inside the app; no TV view described.' },
    { key: 'clients-pay', label: 'Do clients pay?', why: 'TrainHeroic: the only source is a support FAQ about two years old.' },
  ],
  better: [
    { text: 'TrueCoach has a "3,000+" pro video exercise library (its features section says 3,500+).', source: s(TC_FEATURES) },
    { text: 'TrueCoach collects client payments (TrueCoach Payments, through Stripe) and offers a custom-branded app on its higher tiers.', source: s(TC_PRICING) },
    { text: 'TrueCoach pulls in wearable data (Apple, Garmin, WHOOP) on its Standard and Pro tiers.', source: s(TC_PRICING) },
    { text: 'Hevy Coach gives every client Hevy Pro at no cost.', source: s('https://hevycoach.com/pricing/') },
    { text: 'Hevy Coach\'s clients use a lifter app with Android, Wear OS and web versions.', source: s(HEVY_VS_STRONG) },
    { text: 'TrainHeroic has readiness surveys with analytics for coaches.', source: s('https://support.trainheroic.com/hc/en-us/articles/18156547276557-Athlete-Pro-Readiness', true) },
    { text: 'TrainHeroic has team leaderboards and a marketplace for selling programs.', source: s('https://marketplace.trainheroic.com/') },
    { text: 'TrainHeroic scales to 1,000 athletes on listed tiers.', source: s(TH_COACH) },
  ],
};

export const COMPARE_PAGES: ComparePage[] = [ironstack, mealstack, coach];

/** Every string a page renders, for the [verify] guard. */
function renderedText(p: ComparePage): string[] {
  const out = [p.title, p.description, p.eyebrow, p.h1, p.sub, p.usName, ...p.intro];
  for (const r of p.rows) {
    out.push(r.label, r.ours.text, r.ours.soon ?? '', r.ours.later ?? '');
    for (const c of p.competitors) {
      const cell = r.them[c.key];
      if (!cell) throw new Error(`compare/${p.slug}: row "${r.key}" has no cell for ${c.name}. Move the row to pending.`);
      if (!cell.sources.length) throw new Error(`compare/${p.slug}: row "${r.key}", ${c.name} has no source.`);
      out.push(cell.text);
    }
  }
  for (const b of p.better) out.push(b.text);
  if (p.placeholder) out.push(p.placeholder.title, p.placeholder.body);
  return out;
}

/** Throws at build time if a page would publish an unverified or price-shaped cell. */
export function assertPublishable(p: ComparePage): void {
  for (const t of renderedText(p)) {
    if (/\[verify\]/i.test(t)) throw new Error(`compare/${p.slug}: "[verify]" would be published: ${t}`);
    if (/[$€£]\s?\d/.test(t)) throw new Error(`compare/${p.slug}: a price would be published: ${t}`);
    if (!MISSIONSTACK_ANNOUNCED && /MissionStack/.test(t)) throw new Error(`compare/${p.slug}: names MissionStack before it is cleared: ${t}`);
    if (/—/.test(t)) throw new Error(`compare/${p.slug}: an em dash: ${t}`);
  }
}

for (const p of COMPARE_PAGES) assertPublishable(p);

export function hasExcerpt(cell: Cell): boolean {
  return cell.sources.some((x) => x.excerpt);
}
