import { Component, AfterViewInit, OnDestroy, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectsService, Project } from '../../services/projects.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit, AfterViewInit, OnDestroy {
  private projectsService = inject(ProjectsService);

  activeFilter = signal('Todos');
  selectedProject = signal<Project | null>(null);

  filters = ['Todos', 'Backend', 'Microservicios', 'Full-Stack', 'Distributed'];

  projects = this.projectsService.getProjects();

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'Todos') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === filter);
  });

  ngOnInit(): void {
    // Check if there's a pre-selected project from home page
    const preSelectedId = this.projectsService.getSelectedProjectId();
    if (preSelectedId !== null) {
      const project = this.projectsService.getProjectById(preSelectedId);
      if (project) {
        setTimeout(() => {
          this.selectProject(project);
        }, 500);
      }
      this.projectsService.clearSelectedProjectId();
    }
  }

  ngAfterViewInit() {
    this.initAnimations();
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  selectProject(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }

  filterProjects(filter: string) {
    this.activeFilter.set(filter);
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

    gsap.from('.hero-cta', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.6,
      stagger: 0.1,
    });

    // Project cards animation on scroll
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
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
      day: 'numeric',
    });
  }
}
