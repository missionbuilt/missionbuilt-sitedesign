

export interface Chapter {
  id: number;
  title: string;
  slug: string;
  description: string;
  status: "published" | "coming-soon" | "draft";
  publishDate: string;
  authorName: string;
  heroImage: string;
  sections: {
    id?: number;
    title: string;
    content: string;
  }[];
  furtherReading: {
    title: string;
    description: string;
    url: string;
    note: string;
  }[];
}

