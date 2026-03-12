export type BlogCategory =
  | 'Ingeniería de Software'
  | 'Inteligencia Artificial'
  | 'DevOps'
  | 'Arquitectura Cloud'
  | 'Desarrollo Web';

export type AuthorId =
  | 'david-b'
  | 'joel'
  | 'carol'
  | 'josue'
  | 'nixon'
  | 'david-m'
  | 'maybelline';

export interface BlogAuthor {
  id: AuthorId;
  name: string;
  role: string;
  avatarUrl: string;
}

export interface BlogTable {
  title?: string;
  intro?: string;
  headers: string[];
  rows: string[][];
}

export interface BlogSubsection {
  title?: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageSize?: string;
  bullets?: string[];
  table?: BlogTable;
}

export interface BlogSection {
  title: string;
  intro?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageSize?: string;
  bullets?: string[];
  table?: BlogTable;
  subsections?: BlogSubsection[];
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  coverImageUrl: string;
  category: string;
  authors: BlogAuthor[];
  date: string;
  readTime: string;
  isStatic?: boolean;
  sections: BlogSection[];
}
