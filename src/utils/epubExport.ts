import React from 'react';
import EPub from 'epub-gen-memory';
import { saveAs } from 'file-saver';

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  status: 'draft' | 'published';
  readTime: string;
}

const renderContentToString = (content: React.ReactNode): string => {
  const getTextFromReactNode = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (React.isValidElement(node)) {
      const { type, props } = node;
      
      if (typeof type === 'string') {
        let html = '';
        
        // Handle different HTML elements
        switch (type) {
          case 'div':
            html = `<div class="${props.className || ''}">${getTextFromReactNode(props.children)}</div>`;
            break;
          case 'p':
            html = `<p>${getTextFromReactNode(props.children)}</p>`;
            break;
          case 'h1':
            html = `<h1>${getTextFromReactNode(props.children)}</h1>`;
            break;
          case 'h2':
            html = `<h2>${getTextFromReactNode(props.children)}</h2>`;
            break;
          case 'h3':
            html = `<h3>${getTextFromReactNode(props.children)}</h3>`;
            break;
          case 'blockquote':
            html = `<blockquote style="border-left: 4px solid #8B4513; padding-left: 1rem; font-style: italic; color: #666;">${getTextFromReactNode(props.children)}</blockquote>`;
            break;
          case 'ul':
            html = `<ul>${getTextFromReactNode(props.children)}</ul>`;
            break;
          case 'ol':
            html = `<ol>${getTextFromReactNode(props.children)}</ol>`;
            break;
          case 'li':
            html = `<li>${getTextFromReactNode(props.children)}</li>`;
            break;
          case 'table':
            html = `<table border="1" style="border-collapse: collapse; width: 100%; margin: 1rem 0;">${getTextFromReactNode(props.children)}</table>`;
            break;
          case 'thead':
            html = `<thead style="background-color: #f8f9fa;">${getTextFromReactNode(props.children)}</thead>`;
            break;
          case 'tbody':
            html = `<tbody>${getTextFromReactNode(props.children)}</tbody>`;
            break;
          case 'tr':
            html = `<tr>${getTextFromReactNode(props.children)}</tr>`;
            break;
          case 'th':
            html = `<th style="border: 1px solid #dee2e6; padding: 0.75rem; text-align: left; font-weight: bold;">${getTextFromReactNode(props.children)}</th>`;
            break;
          case 'td':
            html = `<td style="border: 1px solid #dee2e6; padding: 0.75rem;">${getTextFromReactNode(props.children)}</td>`;
            break;
          case 'span':
            if (props.className && props.className.includes('text-sm')) {
              html = `<small>${getTextFromReactNode(props.children)}</small>`;
            } else {
              html = `<span>${getTextFromReactNode(props.children)}</span>`;
            }
            break;
          case 'br':
            html = '<br/>';
            break;
          default:
            html = getTextFromReactNode(props.children);
        }
        
        return html;
      }
      
      return getTextFromReactNode(props.children);
    }
    if (Array.isArray(node)) {
      return node.map(getTextFromReactNode).join('');
    }
    return '';
  };

  return getTextFromReactNode(content);
};

export const generateEpub = async (chapters: Chapter | Chapter[], getChapterContent?: (chapterId: number) => string): Promise<void> => {
  try {
    console.log('Starting EPUB generation...');
    
    // Convert single chapter to array for uniform processing
    const chaptersArray = Array.isArray(chapters) ? chapters : [chapters];
    
    // Default content function if none provided
    const defaultGetContent = (chapterId: number): string => {
      return `<p>Content for chapter ${chapterId} will be available soon.</p>`;
    };
    
    const contentFunction = getChapterContent || defaultGetContent;
    
    const epubContent = chaptersArray.map((chapter, index) => {
      const content = contentFunction(chapter.id);
      
      return {
        title: `Chapter ${chapter.id}: ${chapter.title}`,
        data: `
          <html>
            <head>
              <title>Chapter ${chapter.id}: ${chapter.title}</title>
              <style>
                body { 
                  font-family: Georgia, serif; 
                  line-height: 1.6; 
                  margin: 2rem; 
                  color: #333;
                }
                h1, h2, h3 { 
                  color: #8B4513; 
                  margin-top: 2rem; 
                  margin-bottom: 1rem;
                }
                p { 
                  margin-bottom: 1rem; 
                  text-align: justify;
                }
                blockquote { 
                  border-left: 4px solid #8B4513; 
                  padding-left: 1rem; 
                  margin: 1.5rem 0; 
                  font-style: italic; 
                  color: #666; 
                }
                ul, ol { 
                  margin: 1rem 0; 
                  padding-left: 2rem; 
                }
                li { 
                  margin-bottom: 0.5rem; 
                }
                table { 
                  width: 100%; 
                  border-collapse: collapse; 
                  margin: 1.5rem 0; 
                }
                th, td { 
                  border: 1px solid #ddd; 
                  padding: 0.75rem; 
                  text-align: left; 
                }
                th { 
                  background-color: #f8f9fa; 
                  font-weight: bold; 
                }
                .chapter-header {
                  text-align: center;
                  border-bottom: 2px solid #8B4513;
                  padding-bottom: 1rem;
                  margin-bottom: 2rem;
                }
                .chapter-footer {
                  text-align: center;
                  border-top: 1px solid #ddd;
                  padding-top: 1rem;
                  margin-top: 2rem;
                  font-size: 0.9rem;
                  color: #666;
                }
              </style>
            </head>
            <body>
              <div class="chapter-header">
                <h1>Chapter ${chapter.id}</h1>
                <h2>${chapter.title}</h2>
                <p><em>${chapter.subtitle || chapter.description || ''}</em></p>
              </div>
              
              ${content}
              
              <div class="chapter-footer">
                <p>Mission Built: Building Better Products, One Rep at a Time</p>
                <p>Chapter ${chapter.id} of ${chaptersArray.length}</p>
              </div>
            </body>
          </html>
        `
      };
    });

    const bookTitle = chaptersArray.length === 1 
      ? `Mission Built - Chapter ${chaptersArray[0].id}: ${chaptersArray[0].title}`
      : 'Mission Built: Building Better Products, One Rep at a Time';

    const options = {
      title: bookTitle,
      author: 'Mike',
      language: 'en',
      css: `
        body { 
          font-family: Georgia, serif; 
          line-height: 1.6; 
          color: #333; 
        }
        h1, h2, h3 { 
          color: #8B4513; 
          page-break-after: avoid; 
        }
        p { 
          text-align: justify; 
          orphans: 2; 
          widows: 2; 
        }
        blockquote { 
          border-left: 4px solid #8B4513; 
          padding-left: 1rem; 
          font-style: italic; 
          color: #666; 
        }
        table { 
          page-break-inside: avoid; 
        }
        .chapter-header { 
          page-break-before: always; 
        }
      `,
      content: epubContent,
      verbose: true
    };

    console.log('Generating EPUB with options:', options);
    
    const epubBuffer = await EPub(options);
    console.log('EPUB generated successfully, buffer size:', epubBuffer.length);
    
    const fileName = chaptersArray.length === 1 
      ? `mission-built-chapter-${chaptersArray[0].id}.epub`
      : 'mission-built-building-better-products.epub';
    
    const blob = new Blob([epubBuffer], { type: 'application/epub+zip' });
    saveAs(blob, fileName);
    
    console.log('EPUB download initiated');
  } catch (error) {
    console.error('EPUB generation failed:', error);
    throw error;
  }
};
