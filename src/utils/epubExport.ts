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

  // Add the content.opf file with proper metadata
  oebps?.file("content.opf", `<?xml version="1.0" encoding="UTF-8"?>
<package version="3.0" xmlns="http://www.idpf.org/2007/opf" unique-identifier="pub-id">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>${escapeXml(chapter.title)}</dc:title>
    <dc:creator>Mike Nichols</dc:creator>
    <dc:identifier id="pub-id">urn:uuid:${uuid}</dc:identifier>
    <dc:language>en</dc:language>
    <meta property="dcterms:modified">${currentDate}</meta>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>
    <item id="inside-cover" href="inside-cover.xhtml" media-type="application/xhtml+xml"/>
    <item id="content" href="content.xhtml" media-type="application/xhtml+xml"/>
    <item id="license" href="license.xhtml" media-type="application/xhtml+xml"/>
    <item id="style" href="style.css" media-type="text/css"/>
    <item id="logo" href="logo.png" media-type="image/png"/>
  </manifest>
  <spine toc="nav">
    <itemref idref="cover"/>
    <itemref idref="inside-cover"/>
    <itemref idref="content"/>
    <itemref idref="license"/>
  </spine>
</package>`);

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

  // Add the cover page (dark mode style)
  oebps?.file("cover.xhtml", `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Cover</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body class="cover-page dark-cover">
  <div class="cover-content">
    <div class="cover-header">
      <div class="logo-container">
        <div class="logo-text">
          <span class="mission">Mission</span><span class="built">Built</span><span class="domain">.io</span>
        </div>
      </div>
    </div>
    <div class="cover-main">
      <h1 class="cover-title">Training Log ${chapter.id}</h1>
      <h2 class="cover-subtitle">${escapeXml(chapter.title)}</h2>
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
        <div class="logo-text">
          <span class="mission">Mission</span><span class="built">Built</span><span class="domain">.io</span>
        </div>
      </div>
    </div>
    <div class="cover-main">
      <h1 class="cover-title">Training Log ${chapter.id}</h1>
      <h2 class="cover-subtitle">${escapeXml(chapter.title)}</h2>
      <p class="cover-author">by Mike Nichols</p>
    </div>
    <div class="cover-footer">
      <p class="cc-license">Licensed under Creative Commons Attribution-NonCommercial 4.0</p>
    </div>
  </div>
</body>
</html>`);

  // Generate chapter content
  const chapterContent = chapter.sections
    ?.map(section => `<section><h2>${escapeXml(section.title)}</h2><div>${escapeXml(section.content)}</div></section>`)
    .join('') || '<p>No content available for this chapter.</p>';

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
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.3;
}

.cover-author {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1rem 0 0 0;
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
