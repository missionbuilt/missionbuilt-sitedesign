
import { Chapter } from "@/data/chapters-data";

interface EpubContent {
  title: string;
  data: string;
}

export const generateEpub = async (chapter: Chapter): Promise<void> => {
  try {
    // Dynamic import for client-side usage
    const { default: EPub } = await import('epub-gen-memory');
    
    // Convert chapter content to HTML
    const contentHtml = formatChapterContent(chapter);
    
    // Generate filename from chapter title
    const filename = generateFilename(chapter.title);
    
    const content: EpubContent[] = [
      {
        title: "Cover",
        data: generateCoverPage(chapter)
      },
      {
        title: chapter.title,
        data: contentHtml
      },
      {
        title: "Further Reading",
        data: formatFurtherReading(chapter.furtherReading)
      }
    ];

    const options = {
      title: chapter.title,
      author: "MissionBuilt.io",
      publisher: "MissionBuilt.io",
      description: chapter.description,
      content: content
    };

    // Use the library correctly - it only takes options as parameter
    const epubBuffer = await EPub(options);
    
    // Create download link
    const blob = new Blob([epubBuffer], { type: 'application/epub+zip' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
    
    console.log(`EPUB generated: ${filename}`);
    
  } catch (error) {
    console.error('Error generating EPUB:', error);
    throw new Error('Failed to generate EPUB file');
  }
};

const formatChapterContent = (chapter: Chapter): string => {
  let html = `<h1>${chapter.title}</h1>`;
  
  if (chapter.description) {
    html += `<p class="description">${chapter.description}</p>`;
  }
  
  // Add sections content if they exist
  if (chapter.sections && chapter.sections.length > 0) {
    chapter.sections.forEach(section => {
      html += `<h2>${section.title}</h2>`;
      if (section.content) {
        html += `<div>${section.content}</div>`;
      }
    });
  }
  
  return html;
};

const formatFurtherReading = (resources: Array<{
  title: string;
  description: string;
  url: string;
  note: string;
}>): string => {
  if (!resources || resources.length === 0) {
    return '<h2>Further Reading</h2><p>No additional resources available.</p>';
  }
  
  let html = '<h2>Further Reading</h2>';
  
  resources.forEach(resource => {
    html += `
      <div class="resource">
        <h3><a href="${resource.url}">${resource.title}</a></h3>
        ${resource.description ? `<p>${resource.description}</p>` : ''}
        ${resource.note ? `<p><em>${resource.note}</em></p>` : ''}
      </div>
    `;
  });
  
  return html;
};

const generateCoverPage = (chapter: Chapter): string => {
  return `
    <div style="text-align: center; padding: 50px;">
      <h1 style="font-size: 2em; margin-bottom: 20px;">${chapter.title}</h1>
      <h2 style="color: #666; margin-bottom: 30px;">Training Log</h2>
      <p style="font-size: 1.2em;">MissionBuilt.io</p>
      ${chapter.description ? `<p style="margin-top: 30px; font-style: italic;">${chapter.description}</p>` : ''}
    </div>
  `;
};

const generateFilename = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .concat('-training-log.epub');
};
