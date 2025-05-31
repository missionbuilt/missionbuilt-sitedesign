
export interface ChapterLink {
  id: string;
  name: string;
  summary: string;
  url: string;
}

export interface ChapterData {
  content: string;
  links: ChapterLink[];
}

export const escapeForTypeScript = (str: string): string => {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');
};

export const generateChapterFileContent = (originalFile: string, data: ChapterData): string => {
  const escapedContent = escapeForTypeScript(data.content);
  const linksJson = JSON.stringify(data.links, null, 2);
  
  // Define the static data constants
  const staticDataSection = `// Static content data - Auto-generated, do not edit manually
const CHAPTER_CONTENT = \`${escapedContent}\`;

const CHAPTER_LINKS: ChapterLink[] = ${linksJson};

interface ChapterLink {
  id: string;
  name: string;
  summary: string;
  url: string;
}`;

  // Find where to insert the static data (after imports but before the component)
  const lines = originalFile.split('\n');
  const importEndIndex = lines.findIndex(line => 
    !line.trim().startsWith('import') && 
    !line.trim().startsWith('//') && 
    !line.trim().startsWith('/*') && 
    !line.trim().startsWith('*') && 
    !line.trim().startsWith('*/') &&
    line.trim() !== ''
  );

  // Remove any existing static data section
  const filteredLines = lines.filter(line => 
    !line.includes('CHAPTER_CONTENT') && 
    !line.includes('CHAPTER_LINKS') &&
    !line.includes('// Static content data') &&
    !line.includes('interface ChapterLink')
  );

  // Insert the new static data section
  filteredLines.splice(importEndIndex, 0, '', staticDataSection, '');

  return filteredLines.join('\n');
};
