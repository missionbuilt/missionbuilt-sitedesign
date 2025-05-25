import { Chapter, chapters } from "@/data/chapters-data";
import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver';

const generateEpub = async (chapter: Chapter) => {
  const zip = new JSZip();

  // Add the mimetype file
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

  // Add the content.opf file
  oebps?.file("content.opf", `<?xml version="1.0" encoding="UTF-8"?>
<package version="3.0" xmlns="http://www.idpf.org/2007/opf" unique-identifier="pub-id">
  <metadata>
    <dc:title xmlns:dc="http://purl.org/dc/elements/1.1/">${chapter.title}</dc:title>
    <dc:creator xmlns:dc="http://purl.org/dc/elements/1.1/">MissionBuilt</dc:creator>
    <dc:identifier id="pub-id">urn:uuid:{{uuid}}</dc:identifier>
    <meta property="dcterms:modified">{{date}}</meta>
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
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
  <title>Table of Contents</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <nav epub:type="toc">
    <h1>Table of Contents</h1>
    <ol>
      <li><a href="content.xhtml">${chapter.title}</a></li>
    </ol>
  </nav>
</body>
</html>`);

  // Add the content.xhtml file
  const chapterContent = chapter.sections
    ?.map(section => `<h2>${section.title}</h2><p>${section.content}</p>`)
    .join('') || '<p>No content available for this chapter.</p>';

  const generateFurtherReading = (resources: Chapter["furtherReading"]): string => {
    if (!resources || resources.length === 0) {
      return '<p>No further reading resources available.</p>';
    }

    return `
      <h2>Further Reading</h2>
      <ul>
        ${resources.map(resource => `
          <li>
            <a href="${resource.url}">${resource.title}</a>
            <p>${resource.description}</p>
            ${resource.note ? `<p>Note: ${resource.note}</p>` : ''}
          </li>
        `).join('')}
      </ul>
    `;
  };

  const furtherReadingContent = generateFurtherReading(chapter.furtherReading);

  const nextChapterMessage = generateNextChapterMessage(chapter.id);

  oebps?.file("content.xhtml", `<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>${chapter.title}</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <h1>${chapter.title}</h1>
  <p>${chapter.description}</p>
  ${chapterContent}
  ${furtherReadingContent}
  ${nextChapterMessage}
</body>
</html>`);

  // Add the style.css file
  oebps?.file("style.css", `body { font-family: sans-serif; }
h1 { font-size: 1.5em; }
h2 { font-size: 1.2em; }
ul { list-style-type: none; padding: 0; }
li { margin-bottom: 0.5em; }
a { color: navy; text-decoration: none; }
a:hover { text-decoration: underline; }
.next-chapter { margin-top: 2em; border-top: 1px solid #ccc; padding-top: 1em; }
`);

  // Generate the EPUB file
  const content = await zip.generateAsync({ type: "blob" });
  FileSaver.saveAs(content, `${chapter.slug}.epub`);
};

const generateNextChapterMessage = (currentChapterId: number): string => {
  const nextChapter = chapters.find(ch => ch.id === currentChapterId + 1);
  
  if (!nextChapter) {
    return `
      <h2>Good set. We're chalking up for the next one.</h2>
      <div class="next-chapter">
        <h3>Training Log ${currentChapterId + 1}: Coming Soon</h3>
        <p>${chapters[currentChapterId].description}</p>
        <p>Coming soon. Check out <a href="https://missionbuilt.io">missionbuilt.io</a> in the meantime - and follow us on <a href="https://bsky.app/profile/missionbuilt.bsky.social">bluesky</a> for updates.</p>
      </div>
    `; // No next chapter exists
  }
  
  const isPublished = nextChapter.status === 'in-progress';
  
  if (isPublished) {
    return `
      <h2>Take a breath. Hydrate. Next set is up.</h2>
      <div class="next-chapter">
        <h3>Training Log ${nextChapter.id}: ${nextChapter.title}</h3>
        <p>${nextChapter.description}</p>
        <p><a href="https://missionbuilt.io/log/${nextChapter.id}">Read Training Log ${nextChapter.id}</a></p>
      </div>
    `;
  } else {
    return `
      <h2>Good set. We're chalking up for the next one.</h2>
      <div class="next-chapter">
        <h3>Training Log ${nextChapter.id}: ${nextChapter.title}</h3>
        <p>${nextChapter.description}</p>
        <p>Coming soon. Check out <a href="https://missionbuilt.io">missionbuilt.io</a> in the meantime - and follow us on <a href="https://bsky.app/profile/missionbuilt.bsky.social">bluesky</a> for updates.</p>
      </div>
    `;
  }
};

export { generateEpub };
