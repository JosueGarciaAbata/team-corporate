import { Component, AfterViewInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  publishDate: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit, OnDestroy {
  activeFilter = signal('Todos');
  selectedProject = signal<Project | null>(null);

  filters = ['Todos', 'Backend', 'Microservicios', 'Full-Stack', 'Distributed'];

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'Todos') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === filter);
  });

  projects: Project[] = [
    {
      id: 1,
      title: 'Sistema de Gestión de Combustible',
      excerpt: 'Sistema distribuido enfocado en detectar problemas y casos extremos en el consumo de combustible.',
      description: 'Backend distribuido que monitorea el uso de combustible y detecta patrones anómalos, inconsistencias y posibles irregularidades. Diseñado para identificar intentos sofisticados de fraude e ineficiencias operativas en tiempo real.',
      image: 'assets/img/projects/fuel-management.svg',
      technologies: ['Node.js', 'NestJS', 'Sistemas Distribuidos', 'PostgreSQL', 'Redis'],
      category: 'Backend',
      publishDate: '2026-02-17',
    },
    {
      id: 2,
      title: 'Sistema de Gestión Hospitalaria',
      excerpt: 'Arquitectura de microservicios con Spring Cloud, Eureka, API Gateway, Docker y Azure.',
      description: 'Plataforma de gestión hospitalaria basada en microservicios, enfocada en escalabilidad, resiliencia y límites claros entre servicios. Gestiona expedientes de pacientes, citas, facturación y flujos de trabajo médicos.',
      image: 'assets/img/projects/hospital-management.svg',
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Azure', 'Eureka'],
      category: 'Microservicios',
      publishDate: '2026-02-17',
    },
    {
      id: 3,
      title: 'Sistema de Gestión de Reservas',
      excerpt: 'Sistema de reservas de alta concurrencia que valida consistencia y previene reservas duplicadas.',
      description: 'Sistema de reservas diseñado para alto rendimiento, corrección bajo concurrencia y fuertes garantías de consistencia de datos. Gestiona millones de reservas concurrentes con procesamiento de pagos integrado.',
      image: 'assets/img/projects/event-reservation.svg',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Stripe', 'Gatling'],
      category: 'Backend',
      publishDate: '2026-02-17',
    },
    {
      id: 4,
      title: 'Sistema de Gestión de Publicaciones',
      excerpt: 'Sistema full-stack con Spring Boot, APIs REST y pipelines CI/CD usando Jenkins y Docker.',
      description: 'Plataforma de flujo de publicaciones con herramientas de moderación, pipelines de automatización y prácticas de despliegue confiables. Gestiona el ciclo de vida del contenido desde su creación hasta la publicación con auditorías completas.',
      image: 'assets/img/projects/publication-management.svg',
      technologies: ['Java', 'Spring Boot', 'Jenkins', 'CI/CD', 'Docker', 'PostgreSQL'],
      category: 'Full-Stack',
      publishDate: '2026-02-17',
    },
  ];

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
