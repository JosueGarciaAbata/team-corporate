import { Component, computed, inject, signal } from '@angular/core';
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
  
  // Categorías fijas del servicio
  categories = signal(['Todos', ...this.blogService.getCategories()]);

  selectedCategory = signal('Todos');

  filteredBlogs = computed(() => {
    if (this.selectedCategory() === 'Todos') {
      return this.blogs();
    }
    return this.blogs().filter(b => b.category === this.selectedCategory());
  });

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
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
