
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
    <dc:creator>MissionBuilt</dc:creator>
    <dc:identifier id="pub-id">urn:uuid:${uuid}</dc:identifier>
    <dc:language>en</dc:language>
    <meta property="dcterms:modified">${currentDate}</meta>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="content" href="content.xhtml" media-type="application/xhtml+xml"/>
    <item id="style" href="style.css" media-type="text/css"/>
  </manifest>
  <spine toc="nav">
    <itemref idref="content"/>
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
      <li><a href="content.xhtml">${escapeXml(chapter.title)}</a></li>
    </ol>
  </nav>
</body>
</html>`);

  // Generate chapter content
  const chapterContent = chapter.sections
    ?.map(section => `<section><h2>${escapeXml(section.title)}</h2><div>${escapeXml(section.content)}</div></section>`)
    .join('') || '<p>No content available for this chapter.</p>';

  const furtherReadingContent = generateFurtherReading(chapter.furtherReading);
  const nextChapterMessage = generateNextChapterMessage(chapter.id);

  // Add the content.xhtml file
  oebps?.file("content.xhtml", `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>${escapeXml(chapter.title)}</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <h1>${escapeXml(chapter.title)}</h1>
  <p>${escapeXml(chapter.description)}</p>
  ${chapterContent}
  ${furtherReadingContent}
  ${nextChapterMessage}
</body>
</html>`);

  // Add the style.css file
  oebps?.file("style.css", `body { 
  font-family: Georgia, serif; 
  line-height: 1.6; 
  margin: 1em; 
  color: #333;
}
h1 { 
  font-size: 2em; 
  margin-bottom: 1em;
  color: #2c3e50;
}
h2 { 
  font-size: 1.5em; 
  margin: 1.5em 0 0.5em 0;
  color: #34495e;
}
h3 {
  font-size: 1.2em;
  margin: 1em 0 0.5em 0;
  color: #34495e;
}
section {
  margin-bottom: 2em;
}
ul { 
  list-style-type: disc; 
  padding-left: 2em; 
}
li { 
  margin-bottom: 0.75em; 
}
a { 
  color: #3498db; 
  text-decoration: none; 
}
a:hover { 
  text-decoration: underline; 
}
.next-chapter { 
  margin-top: 3em; 
  border-top: 2px solid #ecf0f1; 
  padding-top: 2em; 
}
p {
  margin-bottom: 1em;
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
