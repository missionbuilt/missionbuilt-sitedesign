
export const calculateReadTime = (content: string): string => {
  if (!content || content.trim().length === 0) {
    return '0 min read';
  }
  
  // Remove markdown syntax for more accurate word count
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // Remove links, keep text
    .replace(/[#*_~`]/g, '') // Remove markdown formatting
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  // Count words (split by whitespace and filter out empty strings)
  const words = cleanContent.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  
  // Average reading speed is 200-250 words per minute, using 225
  const wordsPerMinute = 225;
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
  if (readTimeMinutes < 1) {
    return '< 1 min read';
  }
  
  return `${readTimeMinutes} min read`;
};
