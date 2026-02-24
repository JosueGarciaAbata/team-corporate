import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  private blogService = inject(BlogService);
  
  blogs = this.blogService.getBlogs();
  
  // Categorías únicas para filtros
  categories = computed(() => {
    const cats = new Set(this.blogs().map(b => b.category));
    return ['Todos', ...Array.from(cats)];
  });

  selectedCategory = 'Todos';

  filteredBlogs = computed(() => {
    if (this.selectedCategory === 'Todos') {
      return this.blogs();
    }
    return this.blogs().filter(b => b.category === this.selectedCategory);
  });

  selectCategory(category: string): void {
    this.selectedCategory = category;
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
