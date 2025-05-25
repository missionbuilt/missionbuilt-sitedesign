import { Chapter } from "@/data/chapters-data";
import JSZip from 'jszip';

export const generateEpub = async (chapter: Chapter): Promise<void> => {
  try {
    const zip = new JSZip();
    
    // Generate filename from chapter title
    const filename = generateFilename(chapter.title);
    
    // Create META-INF folder with container.xml
    zip.folder("META-INF")?.file("container.xml", `<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`);

    // Create OEBPS folder
    const oebps = zip.folder("OEBPS");
    
    // Create content.opf (package document)
    oebps?.file("content.opf", generateContentOpf(chapter));
    
    // Create toc.ncx (navigation)
    oebps?.file("toc.ncx", generateTocNcx(chapter));
    
    // Create cover page
    oebps?.file("cover.html", generateCoverHtml(chapter));
    
    // Create main content
    oebps?.file("content.html", generateContentHtml(chapter));
    
    // Create further reading page
    oebps?.file("further-reading.html", generateFurtherReadingHtml(chapter));
    
    // Create license page
    oebps?.file("license.html", generateLicenseHtml());
    
    // Create basic CSS
    oebps?.file("styles.css", generateCss());
    
    // Create mimetype file (must be first and uncompressed)
    zip.file("mimetype", "application/epub+zip", { compression: "STORE" });
    
    // Generate the EPUB file
    const epubBlob = await zip.generateAsync({ 
      type: "blob",
      mimeType: "application/epub+zip",
      compression: "DEFLATE"
    });
    
    // Create download link
    const url = URL.createObjectURL(epubBlob);
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

// Helper function to escape XML characters
const escapeXml = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

const generateContentOpf = (chapter: Chapter): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookId" version="2.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
    <dc:title>${escapeXml(chapter.title)}</dc:title>
    <dc:creator>MissionBuilt.io</dc:creator>
    <dc:publisher>MissionBuilt.io</dc:publisher>
    <dc:description>${escapeXml(chapter.description)}</dc:description>
    <dc:language>en</dc:language>
    <dc:identifier id="BookId">${chapter.id}</dc:identifier>
  </metadata>
  <manifest>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="cover" href="cover.html" media-type="application/xhtml+xml"/>
    <item id="content" href="content.html" media-type="application/xhtml+xml"/>
    <item id="further-reading" href="further-reading.html" media-type="application/xhtml+xml"/>
    <item id="license" href="license.html" media-type="application/xhtml+xml"/>
    <item id="css" href="styles.css" media-type="text/css"/>
  </manifest>
  <spine toc="ncx">
    <itemref idref="cover"/>
    <itemref idref="content"/>
    <itemref idref="further-reading"/>
    <itemref idref="license"/>
  </spine>
</package>`;
};

const generateTocNcx = (chapter: Chapter): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="${chapter.id}"/>
    <meta name="dtb:depth" content="1"/>
    <meta name="dtb:totalPageCount" content="0"/>
    <meta name="dtb:maxPageNumber" content="0"/>
  </head>
  <docTitle>
    <text>${escapeXml(chapter.title)}</text>
  </docTitle>
  <navMap>
    <navPoint id="cover" playOrder="1">
      <navLabel><text>Cover</text></navLabel>
      <content src="cover.html"/>
    </navPoint>
    <navPoint id="content" playOrder="2">
      <navLabel><text>${escapeXml(chapter.title)}</text></navLabel>
      <content src="content.html"/>
    </navPoint>
    <navPoint id="further-reading" playOrder="3">
      <navLabel><text>Further Reading</text></navLabel>
      <content src="further-reading.html"/>
    </navPoint>
    <navPoint id="license" playOrder="4">
      <navLabel><text>License</text></navLabel>
      <content src="license.html"/>
    </navPoint>
  </navMap>
</ncx>`;
};

const generateCoverHtml = (chapter: Chapter): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Cover</title>
  <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
  <div class="cover">
    <h1>${escapeXml(chapter.title)}</h1>
    <h2>Training Log</h2>
    <p class="author">MissionBuilt.io</p>
    ${chapter.description ? `<p class="description">${escapeXml(chapter.description)}</p>` : ''}
  </div>
</body>
</html>`;
};

const generateContentHtml = (chapter: Chapter): string => {
  // Generate content based on what's actually displayed on the log page
  let contentHtml = '';
  
  if (chapter.id === 1) {
    // Mission Before Metrics - actual content from the log page
    contentHtml = `
      <p>In the pursuit of building great products and achieving excellence, we often get caught up in numbers, dashboards, and metrics that feel important but don't actually move the needle. This chapter explores why mission-driven thinking beats metric-driven thinking every time.</p>
      
      <p>Metrics are seductive. They give us the illusion of progress and control. But when we optimize for metrics instead of outcomes, we risk building the wrong thing entirely. Just like a powerlifter who focuses only on the number on the bar instead of proper form and long-term strength development.</p>
      
      <p>The User Mission Method is simple: before you build anything, before you measure anything, ask yourself one question: "What is the user trying to accomplish, and how can I help them win?" Everything else flows from this core mission alignment.</p>
      
      <p>Mission alignment isn't just a philosophy—it's a practical framework for decision-making. When faced with feature requests, technical debt, or resource allocation decisions, the mission becomes your north star. Does this help users accomplish their goals more effectively?</p>
    `;
  } else if (chapter.id === 2) {
    // Built Through Reps - actual content from the log page
    contentHtml = `
      <p>Greatness isn't born; it's built — one rep, one iteration at a time. Whether it's product iteration or lifting volume, this chapter highlights how repeated effort compounds into capability.</p>
      
      <p>This chapter is currently being developed. The content will be available soon.</p>
      
      <p>In the meantime, check out the Further Reading section for related resources and insights.</p>
    `;
  } else {
    // For other chapters that are coming soon or not started
    contentHtml = `
      <p>This chapter is currently being developed. The content will be available soon.</p>
      
      <p>In the meantime, check out the Further Reading section for related resources and insights.</p>
    `;
  }
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>${escapeXml(chapter.title)}</title>
  <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
  <h1>${escapeXml(chapter.title)}</h1>
  ${chapter.description ? `<p class="description">${escapeXml(chapter.description)}</p>` : ''}
  ${contentHtml}
</body>
</html>`;
};

const generateFurtherReadingHtml = (chapter: Chapter): string => {
  let resourcesHtml = '';
  
  if (chapter.furtherReading && chapter.furtherReading.length > 0) {
    resourcesHtml = chapter.furtherReading.map(resource => `
      <div class="resource">
        <h3><a href="${escapeXml(resource.url)}">${escapeXml(resource.title)}</a></h3>
        ${resource.description ? `<p>${escapeXml(resource.description)}</p>` : ''}
        ${resource.note ? `<p class="note">${escapeXml(resource.note)}</p>` : ''}
      </div>
    `).join('');
  } else {
    resourcesHtml = '<p>No additional resources available.</p>';
  }
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Further Reading</title>
  <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
  <h2>Further Reading</h2>
  ${resourcesHtml}
</body>
</html>`;
};

const generateLicenseHtml = (): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>License</title>
  <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
  <div class="license">
    <h2>License</h2>
    
    <p><strong>Mission Built: Lessons from the Barbell and the Boardroom</strong><br/>
    by Mike Nichols</p>
    
    <p>This work is licensed under a<br/>
    Creative Commons Attribution-NonCommercial 4.0 International License.<br/>
    To view a copy of this license, visit<br/>
    creativecommons.org/licenses/by-nc/4.0</p>
    
    <p>You are free to share and adapt this work for non-commercial use, with appropriate credit and a link to missionbuilt.io.</p>
  </div>
</body>
</html>`;
};

const generateCss = (): string => {
  return `
body {
  font-family: Georgia, serif;
  line-height: 1.6;
  margin: 2em;
  color: #333;
}

.cover {
  text-align: center;
  padding: 50px 20px;
}

.cover h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #2c3e50;
}

.cover h2 {
  color: #666;
  margin-bottom: 30px;
}

.cover .author {
  font-size: 1.2em;
  margin-top: 30px;
}

.cover .description {
  margin-top: 30px;
  font-style: italic;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

h2 {
  color: #34495e;
  margin-top: 2em;
}

.description {
  font-style: italic;
  color: #666;
  margin-bottom: 2em;
}

.resource {
  margin-bottom: 2em;
  padding: 1em;
  border-left: 3px solid #3498db;
  background-color: #f8f9fa;
}

.resource h3 {
  margin-top: 0;
}

.resource .note {
  font-style: italic;
  font-size: 0.9em;
  color: #666;
}

.license {
  padding: 30px;
  font-family: serif;
}

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
`;
};

const generateFilename = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .concat('-training-log.epub');
};
