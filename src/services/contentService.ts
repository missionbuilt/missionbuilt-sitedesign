import { Chapter, ChapterMetadata } from '@/types/chapter';

export interface ChapterLink {
  id: string;
  name: string;
  summary: string;
  url: string;
}

export interface ChapterMeta extends ChapterMetadata {
  links: ChapterLink[];
}

class ContentService {
  private isDevelopment = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';

  async loadChapterContent(chapterId: string): Promise<string> {
    try {
      // In development, try to load from localStorage first
      if (this.isDevelopment) {
        const localContent = localStorage.getItem(`chapter-${chapterId}-content`);
        if (localContent) {
          console.log(`Loaded content for ${chapterId} from localStorage`);
          return localContent;
        }
      }

      // Load from static file
      const response = await fetch(`/src/content/chapters/${chapterId}.md`);
      if (response.ok) {
        const content = await response.text();
        console.log(`Loaded content for ${chapterId} from static file`);
        return content;
      }
      
      return '';
    } catch (error) {
      console.error(`Error loading content for ${chapterId}:`, error);
      return '';
    }
  }

  async loadChapterMetadata(chapterId: string): Promise<ChapterMeta | null> {
    try {
      // In development, try to load from localStorage first
      if (this.isDevelopment) {
        const localMeta = localStorage.getItem(`chapter-${chapterId}-meta`);
        if (localMeta) {
          console.log(`Loaded metadata for ${chapterId} from localStorage`);
          return JSON.parse(localMeta);
        }
      }

      // Load from static file
      const response = await fetch(`/src/content/chapters/${chapterId}-meta.json`);
      if (response.ok) {
        const meta = await response.json();
        console.log(`Loaded metadata for ${chapterId} from static file`);
        return meta;
      }
      
      return null;
    } catch (error) {
      console.error(`Error loading metadata for ${chapterId}:`, error);
      return null;
    }
  }

  saveContentToLocalStorage(chapterId: string, content: string): void {
    if (this.isDevelopment) {
      localStorage.setItem(`chapter-${chapterId}-content`, content);
      localStorage.setItem(`chapter-${chapterId}-content-timestamp`, new Date().toISOString());
      console.log(`Saved content for ${chapterId} to localStorage`);
    }
  }

  saveMetadataToLocalStorage(chapterId: string, metadata: ChapterMeta): void {
    if (this.isDevelopment) {
      localStorage.setItem(`chapter-${chapterId}-meta`, JSON.stringify(metadata, null, 2));
      localStorage.setItem(`chapter-${chapterId}-meta-timestamp`, new Date().toISOString());
      console.log(`Saved metadata for ${chapterId} to localStorage`);
    }
  }

  savePermanently(chapterId: string, content: string, metadata: ChapterMeta): void {
    // Download content file
    const contentBlob = new Blob([content], { type: 'text/markdown' });
    const contentUrl = URL.createObjectURL(contentBlob);
    const contentLink = document.createElement('a');
    contentLink.href = contentUrl;
    contentLink.download = `${chapterId}.md`;
    document.body.appendChild(contentLink);
    contentLink.click();
    document.body.removeChild(contentLink);
    URL.revokeObjectURL(contentUrl);

    // Download metadata file
    const metadataStr = JSON.stringify(metadata, null, 2);
    const metadataBlob = new Blob([metadataStr], { type: 'application/json' });
    const metadataUrl = URL.createObjectURL(metadataBlob);
    const metadataLink = document.createElement('a');
    metadataLink.href = metadataUrl;
    metadataLink.download = `${chapterId}-meta.json`;
    document.body.appendChild(metadataLink);
    metadataLink.click();
    document.body.removeChild(metadataLink);
    URL.revokeObjectURL(metadataUrl);

    console.log(`Downloaded permanent save files for ${chapterId}`);
  }

  clearLocalStorage(chapterId: string): void {
    if (this.isDevelopment) {
      localStorage.removeItem(`chapter-${chapterId}-content`);
      localStorage.removeItem(`chapter-${chapterId}-meta`);
      localStorage.removeItem(`chapter-${chapterId}-content-timestamp`);
      localStorage.removeItem(`chapter-${chapterId}-meta-timestamp`);
      console.log(`Cleared localStorage for ${chapterId}`);
    }
  }

  hasUnsavedChanges(chapterId: string): boolean {
    if (!this.isDevelopment) return false;
    
    const hasContent = localStorage.getItem(`chapter-${chapterId}-content`) !== null;
    const hasMetadata = localStorage.getItem(`chapter-${chapterId}-meta`) !== null;
    
    return hasContent || hasMetadata;
  }

  exportChapterData(chapterId: string, content: string, metadata: ChapterMeta): void {
    const data = {
      content,
      metadata,
      exportedAt: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${chapterId}-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  async importChapterData(file: File): Promise<{ content: string; metadata: ChapterMeta } | null> {
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      
      if (data.content && data.metadata) {
        return {
          content: data.content,
          metadata: data.metadata
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error importing chapter data:', error);
      return null;
    }
  }

  getLocalStorageBackupInfo(chapterId: string): { hasContent: boolean; hasMetadata: boolean; lastSaved?: string } {
    const hasContent = localStorage.getItem(`chapter-${chapterId}-content`) !== null;
    const hasMetadata = localStorage.getItem(`chapter-${chapterId}-meta`) !== null;
    const contentTimestamp = localStorage.getItem(`chapter-${chapterId}-content-timestamp`);
    const metaTimestamp = localStorage.getItem(`chapter-${chapterId}-meta-timestamp`);
    
    let lastSaved: string | undefined;
    if (contentTimestamp || metaTimestamp) {
      const latest = [contentTimestamp, metaTimestamp].filter(Boolean).sort().pop();
      if (latest) {
        lastSaved = new Date(latest).toLocaleString();
      }
    }
    
    return { hasContent, hasMetadata, lastSaved };
  }
}

export const contentService = new ContentService();
