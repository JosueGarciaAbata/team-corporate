import { Component, computed, inject, signal, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-blog',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements AfterViewInit, OnDestroy {
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

  ngAfterViewInit() {
    this.initAnimations();
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  private initAnimations() {
    // Hero animations
    gsap.from('.hero-title', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
    });

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.4,
    });

    gsap.from('.hero-badge', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.1,
    });

    // Blog cards animation on scroll
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });
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
