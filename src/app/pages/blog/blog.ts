import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService, Blog as BlogModel } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  private blogService = inject(BlogService);
  private viewportScroller = inject(ViewportScroller);
  private readonly pageSize = 8;
  private readonly toolPriority = [
    'figma-ciclo-vida-software',
    'balsamiq-wireframes',
    'miro-analisis-diseno-software',
    'draw-io',
    'clickup-organizacion-trabajo'
  ];
  private readonly preferredFilters = [
    'Ingeniería de Software',
    'Figma',
    'UX',
    'UI',
    'Draw.io',
    'ClickUp',
    'DevOps',
    'Arquitectura Cloud',
    'Desarrollo Web',
    'Inteligencia Artificial',
    'Balsamiq',
    'Miro',
    'Wireframes',
    'Prototipado'
  ];

  blogs = this.blogService.getBlogs();
  selectedFilters = signal<string[]>([]);
  searchQuery = signal('');
  tagQuery = signal('');
  tagComboboxOpen = signal(false);
  currentPage = signal(1);

  allTags = computed(() => {
    const tags = new Set<string>();

    for (const blog of this.blogs()) {
      for (const tag of this.getTags(blog)) {
        tags.add(tag);
      }
    }

    const priority = new Map(this.preferredFilters.map((tag, index) => [tag, index]));

    return [
      'Todos',
      ...Array.from(tags).sort((left, right) => {
        const leftPriority = priority.get(left);
        const rightPriority = priority.get(right);

        if (leftPriority !== undefined || rightPriority !== undefined) {
          if (leftPriority === undefined) return 1;
          if (rightPriority === undefined) return -1;
          return leftPriority - rightPriority;
        }

        return left.localeCompare(right, 'es');
      })
    ];
  });

  suggestedTags = computed(() => {
    const query = this.tagQuery().trim().toLowerCase();
    const selected = new Set(this.selectedFilters().map((tag) => tag.toLowerCase()));

    return this.allTags()
      .filter((tag) => tag !== 'Todos')
      .filter((tag) => !selected.has(tag.toLowerCase()))
      .filter((tag) => !query || tag.toLowerCase().includes(query))
      .slice(0, 8);
  });

  orderedBlogs = computed(() => {
    const priority = new Map(this.toolPriority.map((id, index) => [id, index]));

    return [...this.blogs()].sort((left, right) => {
      const leftPriority = priority.get(left.id);
      const rightPriority = priority.get(right.id);

      if (leftPriority !== undefined || rightPriority !== undefined) {
        if (leftPriority === undefined) return 1;
        if (rightPriority === undefined) return -1;
        return leftPriority - rightPriority;
      }

      return right.date.localeCompare(left.date);
    });
  });

  filteredBlogs = computed(() =>
    this.orderedBlogs().filter((blog) => {
      const selectedFilters = this.selectedFilters();
      const searchableTags = this.getTags(blog).map((tag) => tag.toLowerCase());
      const filterMatch =
        !selectedFilters.length ||
        selectedFilters.every((filter) => searchableTags.includes(filter.toLowerCase()));
      const query = this.searchQuery().trim().toLowerCase();
      const searchMatch =
        !query ||
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        this.getTags(blog).some((tag) => tag.toLowerCase().includes(query));

      return filterMatch && searchMatch;
    })
  );

  paginatedBlogs = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredBlogs().slice(start, start + this.pageSize);
  });

  totalPages = computed(() => Math.max(1, Math.ceil(this.filteredBlogs().length / this.pageSize)));

  visiblePages = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const start = Math.max(1, current - 1);
    const end = Math.min(total, start + 2);
    const normalizedStart = Math.max(1, end - 2);
    const pages: number[] = [];

    for (let page = normalizedStart; page <= end; page += 1) {
      pages.push(page);
    }

    return pages;
  });

  featuredBlogs = computed(() => this.orderedBlogs().slice(0, 3));
  currentRangeLabel = computed(() => {
    const total = this.filteredBlogs().length;

    if (!total) return '0 resultados';

    const start = (this.currentPage() - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage() * this.pageSize, total);
    return `${start}-${end} de ${total} artículos`;
  });

  toggleFilter(tag: string): void {
    if (tag === 'Todos') {
      this.selectedFilters.set([]);
      this.currentPage.set(1);
      return;
    }

    const current = new Set(this.selectedFilters());

    if (current.has(tag)) {
      current.delete(tag);
    } else {
      current.add(tag);
    }

    this.selectedFilters.set([...current]);
    this.currentPage.set(1);
  }

  updateSearch(query: string): void {
    this.searchQuery.set(query);
    this.currentPage.set(1);
  }

  updateTagQuery(query: string): void {
    this.tagQuery.set(query);
    this.tagComboboxOpen.set(true);
  }

  openTagCombobox(): void {
    this.tagComboboxOpen.set(true);
  }

  closeTagCombobox(): void {
    this.tagComboboxOpen.set(false);
  }

  addFilterFromCombobox(tag: string): void {
    this.toggleFilter(tag);
    this.tagQuery.set('');
    this.tagComboboxOpen.set(false);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages()) return;
    this.currentPage.set(page);
    this.scrollToTop();
  }

  nextPage(): void {
    this.goToPage(this.currentPage() + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage() - 1);
  }

  private scrollToTop(): void {
    setTimeout(() => this.viewportScroller.scrollToPosition([0, 0]));
  }

  getTags(blog: BlogModel): string[] {
    return Array.from(new Set([blog.category, ...(blog.tags ?? [])]));
  }

  isPriorityTool(blog: BlogModel): boolean {
    return this.toolPriority.includes(blog.id);
  }

  isFilterActive(tag: string): boolean {
    return tag === 'Todos' ? this.selectedFilters().length === 0 : this.selectedFilters().includes(tag);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
