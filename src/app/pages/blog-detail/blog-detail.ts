import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogService, Blog as BlogModel } from '../../services/blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css'
})
export class BlogDetail implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private blogService = inject(BlogService);

  blog = signal<BlogModel | undefined>(undefined);
  relatedBlogs = signal<BlogModel[]>([]);
  showDeleteModal = signal(false);
  showAuthorsModal = signal(false);
  activeSection = signal<string>('');
  tocOpen = signal(false);
  expandedSections = signal<Set<number>>(new Set());

  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const foundBlog = this.blogService.getBlogById(id);

      if (foundBlog) {
        this.blog.set(foundBlog);
        this.loadRelatedBlogs(foundBlog);
        setTimeout(() => this.initScrollSpy(foundBlog), 300);
      } else {
        this.router.navigate(['/blog']);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private initScrollSpy(post: BlogModel): void {
    this.observer?.disconnect();
    const ids = post.sections.map((_, i) => `section-${i + 1}`);
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    this.observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) {
          // pick the one closest to the top
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          , visible[0]);
          this.activeSection.set(top.target.id);
        }
      },
      { rootMargin: '-10% 0px -60% 0px', threshold: 0 }
    );
    elements.forEach(el => this.observer!.observe(el));
  }

  private loadRelatedBlogs(currentBlog: BlogModel): void {
    const allBlogs = this.blogService.getBlogs()();
    const related = allBlogs
      .filter(b => b.id !== currentBlog.id && b.category === currentBlog.category)
      .slice(0, 3);
    this.relatedBlogs.set(related);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  deleteBlog(): void {
    const currentBlog = this.blog();
    if (!currentBlog || currentBlog.isStatic) return;

    this.showDeleteModal.set(true);
  }

  confirmDelete(): void {
    const currentBlog = this.blog();
    if (!currentBlog) return;

    this.showDeleteModal.set(false);
    this.blogService.deleteBlog(currentBlog.id);
    this.router.navigate(['/blog']);
  }

  closeDeleteModal(): void {
    this.showDeleteModal.set(false);
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    // Offset for the sticky top bar (~56px header + ~48px article bar)
    const offset = 112;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  toggleSection(index: number): void {
    const current = new Set(this.expandedSections());
    if (current.has(index)) {
      current.delete(index);
    } else {
      current.add(index);
    }
    this.expandedSections.set(current);
  }

  isSectionExpanded(index: number): boolean {
    return this.expandedSections().has(index);
  }
}
