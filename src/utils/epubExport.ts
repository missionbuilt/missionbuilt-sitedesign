import { Chapter, chapters } from "@/data/chapters-data";
import JSZip from 'jszip';
import * as FileSaver from 'file-saver';

const generateEpub = async (chapter: Chapter) => {
  const zip = new JSZip();

  // Generate unique ID and current date
  const uuid = generateUUID();
  const currentDate = new Date().toISOString();

  // Add the mimetype file (must be first and uncompressed)
  zip.file("mimetype", "application/epub+zip");

  // Create the META-INF directory and add container.xml
  const metaInf = zip.folder("META-INF");
  metaInf?.file("container.xml", `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`);

  // Create the OEBPS directory
  const oebps = zip.folder("OEBPS");

  // Generate cover image
  const coverImageBlob = await generateCoverImage(chapter);

  // Add the content.opf file with proper metadata and image cover reference
  oebps?.file("content.opf", `<?xml version="1.0" encoding="UTF-8"?>
<package version="3.0" xmlns="http://www.idpf.org/2007/opf" unique-identifier="pub-id">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>${escapeXml(chapter.title)}</dc:title>
    <dc:creator>Mike Nichols</dc:creator>
    <dc:identifier id="pub-id">urn:uuid:${uuid}</dc:identifier>
    <dc:language>en</dc:language>
    <meta property="dcterms:modified">${currentDate}</meta>
    <meta name="cover" content="cover-image"/>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="cover-image" href="cover.png" media-type="image/png" properties="cover-image"/>
    <item id="cover-page" href="cover.xhtml" media-type="application/xhtml+xml"/>
    <item id="inside-cover" href="inside-cover.xhtml" media-type="application/xhtml+xml"/>
    <item id="content" href="content.xhtml" media-type="application/xhtml+xml"/>
    <item id="license" href="license.xhtml" media-type="application/xhtml+xml"/>
    <item id="style" href="style.css" media-type="text/css"/>
    <item id="logo" href="logo.png" media-type="image/png"/>
  </manifest>
  <spine toc="nav">
    <itemref idref="cover-page"/>
    <itemref idref="inside-cover"/>
    <itemref idref="content"/>
    <itemref idref="license"/>
  </spine>
  <guide>
    <reference type="cover" title="Cover" href="cover.xhtml"/>
  </guide>
</package>`);

  // Add the cover image
  oebps?.file("cover.png", coverImageBlob);

  // Add the nav.xhtml file
  oebps?.file("nav.xhtml", `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
  <title>Table of Contents</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <nav epub:type="toc">
    <h1>Table of Contents</h1>
    <ol>
      <li><a href="cover.xhtml">Cover</a></li>
      <li><a href="inside-cover.xhtml">Inside Cover</a></li>
      <li><a href="content.xhtml">${escapeXml(chapter.title)}</a></li>
      <li><a href="license.xhtml">License</a></li>
    </ol>
  </nav>
</body>
</html>`);

  // Add the cover page (dark mode style) - this is the main cover that should be displayed
  oebps?.file("cover.xhtml", `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Cover</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body class="cover-page dark-cover">
  <div class="cover-content">
    <div class="cover-header">
      <div class="logo-container">
        <img src="logo.png" alt="MissionBuilt Logo" class="logo-image" />
        <div class="logo-text">
          <span class="mission">Mission</span><span class="built">Built</span><span class="domain">.io</span>
        </div>
      </div>
    </div>
    <div class="cover-main">
      <h1 class="cover-title">Mission Built</h1>
      <h2 class="cover-subtitle">Lessons from the Barbell and the Boardroom</h2>
      <p class="cover-training-log">Training Log ${chapter.id}: ${escapeXml(chapter.title)}</p>
      <p class="cover-author">by Mike Nichols</p>
    </div>
    <div class="cover-footer">
      <p class="cc-license">Licensed under Creative Commons Attribution-NonCommercial 4.0</p>
    </div>
  </div>
</body>
</html>`);

  // Add the inside cover page (light mode style)
  oebps?.file("inside-cover.xhtml", `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Inside Cover</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body class="cover-page light-cover">
  <div class="cover-content">
    <div class="cover-header">
      <div class="logo-container">
        <img src="logo.png" alt="MissionBuilt Logo" class="logo-image" />
        <div class="logo-text">
          <span class="mission">Mission</span><span class="built">Built</span><span class="domain">.io</span>
        </div>
      </div>
    </div>
    <div class="cover-main">
      <h1 class="cover-title">Mission Built</h1>
      <h2 class="cover-subtitle">Lessons from the Barbell and the Boardroom</h2>
      <p class="cover-training-log">Training Log ${chapter.id}: ${escapeXml(chapter.title)}</p>
      <p class="cover-author">by Mike Nichols</p>
    </div>
    <div class="cover-footer">
      <p class="cc-license">Licensed under Creative Commons Attribution-NonCommercial 4.0</p>
    </div>
  </div>
</body>
</html>`);

  // Use the actual chapter data directly - this is the EXACT content from the log page
  const chapterContent = renderChapterContentAsHTML(chapter);

  const furtherReadingContent = generateFurtherReading(chapter.furtherReading);
  const nextChapterMessage = generateNextChapterMessage(chapter.id);

  // Add the content.xhtml file with headers and footers
  oebps?.file("content.xhtml", `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>${escapeXml(chapter.title)}</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <header class="page-header">
    <div class="header-left">Mission Built</div>
    <div class="header-right">Training Log ${chapter.id}: ${escapeXml(chapter.title)}</div>
  </header>
  
  <main class="content-main">
    <h1>${escapeXml(chapter.title)}</h1>
    <p class="chapter-description">${escapeXml(chapter.description)}</p>
    ${chapterContent}
    ${furtherReadingContent}
    ${nextChapterMessage}
  </main>
  
  <footer class="page-footer">
    <p>This chapter is part of <em>Mission Built: Lessons from the Barbell and the Boardroom</em><br/>
    © 2025 Mike Nichols · <a href="https://missionbuilt.io">missionbuilt.io</a><br/>
    Licensed under CC BY-NC 4.0</p>
  </footer>
</body>
</html>`);

  // Add the license page
  oebps?.file("license.xhtml", `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>License</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <header class="page-header">
    <div class="header-left">Mission Built</div>
    <div class="header-right">License</div>
  </header>
  
  <main class="content-main">
    <h1>License</h1>
    
    <h2>Mission Built: Lessons from the Barbell and the Boardroom</h2>
    <p><strong>by Mike Nichols</strong></p>
    
    <p>This work is licensed under a<br/>
    <strong>Creative Commons Attribution-NonCommercial 4.0 International License.</strong><br/>
    To view a copy of this license, visit<br/>
    <a href="https://creativecommons.org/licenses/by-nc/4.0">creativecommons.org/licenses/by-nc/4.0</a></p>
    
    <p>You are free to share and adapt this work for non-commercial use, with appropriate credit and a link to <a href="https://missionbuilt.io">missionbuilt.io</a>.</p>
  </main>
  
  <footer class="page-footer">
    <p>This chapter is part of <em>Mission Built: Lessons from the Barbell and the Boardroom</em><br/>
    © 2025 Mike Nichols · <a href="https://missionbuilt.io">missionbuilt.io</a><br/>
    Licensed under CC BY-NC 4.0</p>
  </footer>
</body>
</html>`);

  // Add enhanced CSS with cover pages, headers, footers, and proper styling
  oebps?.file("style.css", `/* Base typography and layout */
body { 
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6; 
  margin: 0;
  padding: 0;
  color: #4A5A68;
}

/* Cover page styles */
.cover-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dark-cover {
  background-color: #0f172a;
  color: #f1f5f9;
}

.light-cover {
  background-color: #ffffff;
  color: #4A5A68;
}

.cover-content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
}

.cover-header {
  flex: 0 0 auto;
  margin-bottom: 2rem;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-image {
  height: 2rem;
  width: auto;
  filter: brightness(0) invert(1);
}

.dark-cover .logo-image {
  filter: brightness(0) invert(1);
}

.light-cover .logo-image {
  filter: none;
}

.logo-text {
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
}

.dark-cover .mission { color: #f1f5f9; }
.dark-cover .built { color: #FFC300; }
.dark-cover .domain { color: #4B5320; }

.light-cover .mission { color: #4A5A68; }
.light-cover .built { color: #FFC300; }
.light-cover .domain { color: #4B5320; }

.cover-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.cover-title {
  font-family: Montserrat, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}

.cover-subtitle {
  font-family: Montserrat, sans-serif;
  font-size: 1.75rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.3;
  opacity: 0.9;
}

.cover-training-log {
  font-size: 1.25rem;
  font-weight: 500;
  margin: 1.5rem 0 0.5rem 0;
  opacity: 0.8;
}

.cover-author {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.5rem 0 0 0;
  opacity: 0.8;
}

.cover-footer {
  flex: 0 0 auto;
  text-align: center;
}

.cc-license {
  font-size: 0.875rem;
  opacity: 0.7;
  margin: 0;
}

/* Page headers and footers */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 2px solid #e2e8f0;
  margin-bottom: 2rem;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.header-left {
  color: #4A5A68;
}

.header-right {
  color: #3A77AD;
}

.page-footer {
  margin-top: 4rem;
  padding: 2rem;
  border-top: 2px solid #e2e8f0;
  text-align: center;
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
}

.page-footer a {
  color: #3A77AD;
  text-decoration: none;
}

.page-footer a:hover {
  text-decoration: underline;
}

/* Content styles */
.content-main {
  padding: 0 2rem;
  max-width: 65ch;
  margin: 0 auto;
}

h1 { 
  font-family: Montserrat, sans-serif;
  font-size: 2.5rem; 
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #4A5A68;
  line-height: 1.2;
}

h2 { 
  font-family: Montserrat, sans-serif;
  font-size: 1.75rem; 
  font-weight: 600;
  margin: 2rem 0 1rem 0;
  color: #3A77AD;
  line-height: 1.3;
}

h3 {
  font-family: Montserrat, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.5rem 0 0.75rem 0;
  color: #4A5A68;
}

.chapter-description {
  font-size: 1.125rem;
  color: #64748b;
  margin-bottom: 2rem;
  font-style: italic;
}

section {
  margin-bottom: 2.5rem;
}

section div {
  margin-top: 1rem;
}

.section-content {
  white-space: pre-line;
  line-height: 1.7;
}

p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

ul { 
  list-style-type: disc; 
  padding-left: 2rem;
  margin: 1rem 0;
}

li { 
  margin-bottom: 0.75rem; 
  line-height: 1.6;
}

a { 
  color: #3A77AD; 
  text-decoration: none; 
}

a:hover { 
  text-decoration: underline; 
}

.next-chapter { 
  margin-top: 3rem; 
  padding-top: 2rem; 
  border-top: 2px solid #e2e8f0;
}

.next-chapter h2 {
  color: #FFC300;
  font-weight: 700;
}

.next-chapter h3 {
  color: #4A5A68;
}

/* Further reading section */
section h2:first-child {
  color: #4A5A68;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

/* Print optimizations */
@media print {
  .cover-page {
    page-break-after: always;
  }
  
  .page-header {
    position: running(header);
  }
  
  .page-footer {
    position: running(footer);
  }
}
`);

  // Add the logo image to the EPUB
  try {
    const logoResponse = await fetch('/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png');
    const logoBlob = await logoResponse.blob();
    oebps?.file("logo.png", logoBlob);
  } catch (error) {
    console.warn('Could not include logo in EPUB:', error);
  }

  // Generate the EPUB file with proper compression
  const content = await zip.generateAsync({ 
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: {
      level: 9
    }
  });
  
  FileSaver.saveAs(content, `${chapter.slug}.epub`);
};

// Function to render chapter content using the actual chapter data
const renderChapterContentAsHTML = (chapter: Chapter): string => {
  // Use the actual chapter sections data directly
  if (!chapter.sections || chapter.sections.length === 0) {
    return '<section class="chapter-section"><p>No content available for this chapter.</p></section>';
  }

  return chapter.sections.map(section => {
    // Split content into paragraphs and preserve line breaks
    const paragraphs = section.content.split('\n\n').filter(p => p.trim().length > 0);
    
    const paragraphsHTML = paragraphs.map(paragraph => 
      `<p>${escapeXml(paragraph.trim())}</p>`
    ).join('');

    return `<section class="chapter-section">
      <h2>${escapeXml(section.title)}</h2>
      <div class="section-content">${paragraphsHTML}</div>
    </section>`;
  }).join('');
};

// Helper function to convert DOM structure to clean EPUB HTML
const convertDOMToEpubHTML = (element: HTMLElement): string => {
  let html = '';
  
  // Process each child node
  for (const child of Array.from(element.children)) {
    if (child.tagName === 'SECTION' || child.classList.contains('space-y-6')) {
      // This is likely a section
      const heading = child.querySelector('h2, h3');
      const content = child.querySelector('.prose, .space-y-4, p, div');
      
      if (heading && content) {
        html += `<section class="chapter-section">
          <h2>${escapeXml(heading.textContent || '')}</h2>
          <div class="section-content">${escapeXml(content.textContent || '')}</div>
        </section>`;
      }
    }
  }
  
  return html || '<section class="chapter-section"><p>No content could be extracted.</p></section>';
};

const generateCoverImage = async (chapter: Chapter): Promise<Blob> => {
  // Create a canvas to generate the cover image
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Could not get canvas context');
  }

  // Set canvas dimensions (standard book cover ratio)
  canvas.width = 800;
  canvas.height = 1200;

  // Dark gradient background for more visual interest
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#0f172a');
  gradient.addColorStop(0.7, '#1e293b');
  gradient.addColorStop(1, '#0f172a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Load and draw logo
  try {
    const logoImg = new Image();
    logoImg.crossOrigin = 'anonymous';
    
    await new Promise((resolve, reject) => {
      logoImg.onload = resolve;
      logoImg.onerror = reject;
      logoImg.src = '/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png';
    });

    // Draw logo (make it white for dark background)
    ctx.filter = 'brightness(0) invert(1)';
    ctx.drawImage(logoImg, 60, 60, 80, 80);
    ctx.filter = 'none';
  } catch (error) {
    console.warn('Could not load logo for cover image:', error);
  }

  // Draw logo text with better spacing
  ctx.font = 'bold 42px Montserrat, sans-serif';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('Mission', 160, 110);
  
  ctx.fillStyle = '#fbbf24';
  const missionWidth = ctx.measureText('Mission').width;
  ctx.fillText('Built', 160 + missionWidth, 110);
  
  ctx.fillStyle = '#65a30d';
  const builtWidth = ctx.measureText('Built').width;
  ctx.fillText('.io', 160 + missionWidth + builtWidth, 110);

  // Draw main book title with enhanced styling
  ctx.textAlign = 'center';
  ctx.font = 'bold 78px Montserrat, sans-serif';
  ctx.fillStyle = '#f8fafc';
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 2;
  ctx.strokeText('Mission Built', canvas.width / 2, canvas.height / 2 - 150);
  ctx.fillText('Mission Built', canvas.width / 2, canvas.height / 2 - 150);

  // Draw subtitle with improved readability
  ctx.font = '44px Montserrat, sans-serif';
  ctx.fillStyle = '#e2e8f0';
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 1;
  
  // Split subtitle into two lines for better formatting
  const line1 = 'Lessons from the Barbell';
  const line2 = 'and the Boardroom';
  
  ctx.strokeText(line1, canvas.width / 2, canvas.height / 2 - 70);
  ctx.fillText(line1, canvas.width / 2, canvas.height / 2 - 70);
  
  ctx.strokeText(line2, canvas.width / 2, canvas.height / 2 - 20);
  ctx.fillText(line2, canvas.width / 2, canvas.height / 2 - 20);

  // Draw training log info with accent color
  ctx.font = 'bold 36px Montserrat, sans-serif';
  ctx.fillStyle = '#fbbf24';
  ctx.strokeStyle = '#92400e';
  ctx.lineWidth = 1;
  const trainingLogText = `Training Log ${chapter.id}: ${chapter.title}`;
  ctx.strokeText(trainingLogText, canvas.width / 2, canvas.height / 2 + 60);
  ctx.fillText(trainingLogText, canvas.width / 2, canvas.height / 2 + 60);

  // Draw author with elegant styling
  ctx.font = '40px Montserrat, sans-serif';
  ctx.fillStyle = '#cbd5e1';
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 1;
  ctx.strokeText('by Mike Nichols', canvas.width / 2, canvas.height / 2 + 140);
  ctx.fillText('by Mike Nichols', canvas.width / 2, canvas.height / 2 + 140);

  // Add decorative elements
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 100, canvas.height / 2 + 180);
  ctx.lineTo(canvas.width / 2 + 100, canvas.height / 2 + 180);
  ctx.stroke();

  // Draw license with subtle styling
  ctx.font = '26px Inter, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.textAlign = 'center';
  ctx.fillText('Licensed under Creative Commons Attribution-NonCommercial 4.0', canvas.width / 2, canvas.height - 80);

  // Convert canvas to blob
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob || new Blob());
    }, 'image/png');
  });
};

const generateFurtherReading = (resources: Chapter["furtherReading"]): string => {
  if (!resources || resources.length === 0) {
    return '<section><h2>Further Reading</h2><p>No further reading resources available.</p></section>';
  }

  return `
    <section>
      <h2>Further Reading</h2>
      <ul>
        ${resources.map(resource => `
          <li>
            <a href="${escapeXml(resource.url)}">${escapeXml(resource.title)}</a>
            <p>${escapeXml(resource.description)}</p>
            ${resource.note ? `<p><em>Note: ${escapeXml(resource.note)}</em></p>` : ''}
          </li>
        `).join('')}
      </ul>
    </section>
  `;
};

const generateNextChapterMessage = (currentChapterId: number): string => {
  const nextChapter = chapters.find(ch => ch.id === currentChapterId + 1);
  
  if (!nextChapter) {
    return `
      <section class="next-chapter">
        <h2>Good set. We're chalking up for the next one.</h2>
        <h3>Training Log ${currentChapterId + 1}: Coming Soon</h3>
        <p>Coming soon. Check out <a href="https://missionbuilt.io">missionbuilt.io</a> in the meantime - and follow us on <a href="https://bsky.app/profile/missionbuilt.bsky.social">bluesky</a> for updates.</p>
      </section>
    `;
  }
  
  const isPublished = nextChapter.status === 'in-progress';
  
  if (isPublished) {
    return `
      <section class="next-chapter">
        <h2>Take a breath. Hydrate. Next set is up.</h2>
        <h3>Training Log ${nextChapter.id}: ${escapeXml(nextChapter.title)}</h3>
        <p>${escapeXml(nextChapter.description)}</p>
        <p><a href="https://missionbuilt.io/log/${nextChapter.id}">Read Training Log ${nextChapter.id}</a></p>
      </section>
    `;
  } else {
    return `
      <section class="next-chapter">
        <h2>Good set. We're chalking up for the next one.</h2>
        <h3>Training Log ${nextChapter.id}: ${escapeXml(nextChapter.title)}</h3>
        <p>${escapeXml(nextChapter.description)}</p>
        <p>Coming soon. Check out <a href="https://missionbuilt.io">missionbuilt.io</a> in the meantime - and follow us on <a href="https://bsky.app/profile/missionbuilt.bsky.social">bluesky</a> for updates.</p>
      </section>
    `;
  }
};

// Helper function to escape XML/HTML content
const escapeXml = (unsafe: string): string => {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&#39;';
      case '"': return '&quot;';
      default: return c;
    }
  });
};

// Helper function to generate UUID
const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export { generateEpub };
