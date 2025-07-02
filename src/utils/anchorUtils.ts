
export const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
};

export const categoryToAnchorMap: Record<string, { chapter: string; anchor: string }> = {
  'Mission Clarity': {
    chapter: 'chapter-1',
    anchor: 'the-mission-is-the-magnet'
  },
  'Metric Awareness (Not Obsession)': {
    chapter: 'chapter-1',
    anchor: 'repetition-with-intention'
  },
  'Drift Detection': {
    chapter: 'chapter-1',
    anchor: 'the-drift'
  },
  'Ritual Reinforcement': {
    chapter: 'chapter-3',
    anchor: 'the-ritual-is-the-rail'
  },
  'Feedback Loops': {
    chapter: 'chapter-4',
    anchor: 'cues-not-critiques'
  },
  'Decision Alignment': {
    chapter: 'chapter-8',
    anchor: 'clarity-beats-certainty'
  },
  'System Check Under Stress': {
    chapter: 'chapter-8',
    anchor: 'stress-tests-the-system'
  },
  'Recovery Rhythm Review': {
    chapter: 'chapter-6',
    anchor: 'the-mission-demands-recovery'
  },
  'Shared PR Reflection': {
    chapter: 'chapter-10',
    anchor: 'trust-is-a-shared-pr'
  }
};

export const getCategoryLink = (categoryName: string): string => {
  const mapping = categoryToAnchorMap[categoryName];
  if (!mapping) {
    console.warn(`No anchor mapping found for category: ${categoryName}`);
    return '/field-notes';
  }
  return `/field-notes/${mapping.chapter}#${mapping.anchor}`;
};
