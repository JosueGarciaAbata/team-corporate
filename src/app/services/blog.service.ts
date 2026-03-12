import { Injectable, signal } from '@angular/core';

// ─────────────────────────────────────────────────────────
//  Re-export domain types — los imports existentes no cambian
// ─────────────────────────────────────────────────────────
export type { Blog, BlogAuthor, BlogCategory, BlogSection, BlogSubsection, AuthorId } from './blog.models';

import type { Blog, BlogAuthor, BlogCategory, BlogSection, AuthorId } from './blog.models';
import { AUTHORS, CATEGORY_MAP, CATEGORIES } from '../data/blog-catalogs';
import { STATIC_BLOGS } from '../data/blogs';

// ─────────────────────────────────────────────────────────
//  Service
// ─────────────────────────────────────────────────────────

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly STORAGE_KEY = 'stratium-blogs';
  private blogsSignal = signal<Blog[]>([]);

  // Catálogos — datos en src/app/data/blog-catalogs.ts
  static readonly AUTHORS = AUTHORS;
  static readonly CATEGORY_MAP = CATEGORY_MAP;
  static readonly CATEGORIES = CATEGORIES;

  constructor() {
    this.loadBlogs();
  }

  // ── Helpers públicos ──────────────────────────────────

  getCategories(): readonly BlogCategory[] {
    return BlogService.CATEGORIES;
  }

  getAuthors(): BlogAuthor[] {
    return Object.values(BlogService.AUTHORS);
  }

  static getAuthor(id: AuthorId): BlogAuthor {
    return BlogService.AUTHORS[id];
  }

  /** Calcula el tiempo de lectura estimado a partir de las secciones del blog. */
  static calculateReadTime(sections: BlogSection[]): string {
    const WORDS_PER_MINUTE = 200;
    let totalWords = 0;
    for (const section of sections) {
      totalWords += section.title.split(/\s+/).length;
      if (section.intro) totalWords += section.intro.split(/\s+/).length;
      for (const sub of section.subsections ?? []) {
        totalWords += (sub.title ?? '').split(/\s+/).length;
        totalWords += sub.content.split(/\s+/).length;
      }
    }
    const minutes = Math.max(1, Math.round(totalWords / WORDS_PER_MINUTE));
    return `${minutes} min`;
  }

  // Datos de blogs en src/app/data/blogs/
  private getStaticBlogs(): Blog[] {
    return STATIC_BLOGS;
  }


  private loadBlogs(): void {
    const staticBlogs = this.getStaticBlogs();
    const storedBlogs = this.getStoredBlogs();
    // Combinar blogs estáticos con los del localStorage
    this.blogsSignal.set([...staticBlogs, ...storedBlogs]);
  }

  private getStoredBlogs(): Blog[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading blogs from localStorage:', error);
      return [];
    }
  }

  private saveStoredBlogs(blogs: Blog[]): void {
    try {
      // Solo guardar blogs no estáticos
      const userBlogs = blogs.filter(blog => !blog.isStatic);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(userBlogs));
    } catch (error) {
      console.error('Error saving blogs to localStorage:', error);
    }
  }

  getBlogs() {
    return this.blogsSignal.asReadonly();
  }

  getBlogById(id: string): Blog | undefined {
    return this.blogsSignal().find(blog => blog.id === id);
  }

  addBlog(blog: Omit<Blog, 'id' | 'date' | 'readTime'> & { readTime?: string }): void {
    const newBlog: Blog = {
      ...blog,
      id: `user-${Date.now()}`,
      date: this.getCurrentDateInEcuador(),
      readTime: blog.readTime ?? BlogService.calculateReadTime(blog.sections),
      isStatic: false,
    };

    const currentBlogs = this.blogsSignal();
    this.blogsSignal.set([...currentBlogs, newBlog]);
    this.saveStoredBlogs(this.blogsSignal());
  }

  private getCurrentDateInEcuador(): string {
    // Ecuador está en UTC-5 (ECT - Ecuador Time)
    const now = new Date();
    const ecuadorOffset = -5 * 60; // -5 horas en minutos
    const localOffset = now.getTimezoneOffset(); // Offset del navegador
    const ecuadorTime = new Date(now.getTime() + (localOffset + ecuadorOffset) * 60000);

    const year = ecuadorTime.getFullYear();
    const month = String(ecuadorTime.getMonth() + 1).padStart(2, '0');
    const day = String(ecuadorTime.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  updateBlog(id: string, updates: Partial<Blog>): void {
    const blogs = this.blogsSignal();
    const blogToUpdate = blogs.find(b => b.id === id);

    // No permitir editar blogs estáticos
    if (blogToUpdate?.isStatic) {
      console.warn('Cannot edit static blogs');
      return;
    }

    const updatedBlogs = blogs.map(blog =>
      blog.id === id ? { ...blog, ...updates } : blog
    );

    this.blogsSignal.set(updatedBlogs);
    this.saveStoredBlogs(updatedBlogs);
  }

  deleteBlog(id: string): void {
    const blogToDelete = this.blogsSignal().find(b => b.id === id);

    // No permitir eliminar blogs estáticos
    if (blogToDelete?.isStatic) {
      console.warn('Cannot delete static blogs');
      return;
    }

    const filteredBlogs = this.blogsSignal().filter(blog => blog.id !== id);
    this.blogsSignal.set(filteredBlogs);
    this.saveStoredBlogs(filteredBlogs);
  }

  // Utilidad para convertir imagen a base64
  static convertImageToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }
}
