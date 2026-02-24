import { Component, AfterViewInit, signal, computed } from '@angular/core';
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
export class Projects implements AfterViewInit {
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
      title: 'Fuel Management System',
      excerpt: 'Distributed system focused on detecting issues and edge cases in fuel consumption.',
      description: 'A distributed backend that monitors fuel usage and flags anomalous patterns, inconsistencies, and potential misuse. Designed to detect sophisticated fraud attempts and inefficiencies.',
      image: 'assets/img/projects/fuel-management.svg',
      technologies: ['Node.js', 'NestJS', 'Distributed Systems', 'PostgreSQL', 'Redis'],
      category: 'Backend',
      publishDate: '2026-02-17',
    },
    {
      id: 2,
      title: 'Hospital Management System',
      excerpt: 'Microservices architecture with Spring Cloud, Eureka, API Gateway, Docker, and Azure.',
      description: 'A microservices-based hospital management platform focused on scalability, resilience, and clean service boundaries. Handles patient records, appointments, billing, and medical workflows.',
      image: 'assets/img/projects/hospital-management.svg',
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Azure', 'Eureka'],
      category: 'Microservicios',
      publishDate: '2026-02-17',
    },
    {
      id: 3,
      title: 'Event Reservation Management System',
      excerpt: 'High-concurrency reservation system validating consistency and preventing duplicate bookings.',
      description: 'A booking system designed for high throughput, correctness under concurrency, and strong data consistency guarantees. Handles millions of concurrent reservations with payment processing.',
      image: 'assets/img/projects/event-reservation.svg',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Stripe', 'Gatling'],
      category: 'Backend',
      publishDate: '2026-02-17',
    },
    {
      id: 4,
      title: 'Publication Management System',
      excerpt: 'Full-stack system with Spring Boot, REST APIs, and CI/CD pipelines using Jenkins and Docker.',
      description: 'A publication workflow platform with moderation tooling, automation pipelines, and reliable deployment practices. Manages content lifecycle from creation to publishing with comprehensive audit trails.',
      image: 'assets/img/projects/publication-management.svg',
      technologies: ['Java', 'Spring Boot', 'Jenkins', 'CI/CD', 'Docker', 'PostgreSQL'],
      category: 'Full-Stack',
      publishDate: '2026-02-17',
    },
  ];

  ngAfterViewInit() {
    this.initAnimations();
  }

  selectProject(project: Project) {
    this.selectedProject.set(project);
  }

  closeModal() {
    this.selectedProject.set(null);
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
