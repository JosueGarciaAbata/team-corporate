import { Component, AfterViewInit, inject, signal } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { Router } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectsService, Project } from '../../services/projects.service';

gsap.registerPlugin(ScrollTrigger);

interface HomeService {
  title: string;
  description: string;
  tag: string;
  features: string[];
  image: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, SlicePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  private router = inject(Router);
  private projectsService = inject(ProjectsService);

  selectedService = signal<HomeService | null>(null);

  projects = this.projectsService.getHomeProjects();

  services: HomeService[] = [
    {
      title: 'Desarrollo Web', tag: 'Desarrollo',
      image: 'assets/img/services/desarrollo-web.webp',
      description: 'Sitios y apps web de alto rendimiento, optimizados para SEO y velocidad.',
      features: ['React / Angular / Vue', 'APIs RESTful & GraphQL', 'Optimización SEO', 'Performance Web Vitals'],
    },
    {
      title: 'Apps Móviles', tag: 'Desarrollo',
      image: 'assets/img/services/desarrollo-movil.webp',
      description: 'Aplicaciones nativas e híbridas para iOS y Android con UX excepcional.',
      features: ['React Native / Flutter', 'iOS & Android', 'Offline First', 'Push Notifications'],
    },
    {
      title: 'Diseño UI/UX', tag: 'Diseño',
      image: 'assets/img/services/disenoui.webp',
      description: 'Interfaces intuitivas y visualmente impactantes que convierten usuarios.',
      features: ['Research & Testing', 'Prototipos Interactivos', 'Design Systems', 'Accesibilidad WCAG'],
    },
    {
      title: 'Marketing Digital', tag: 'Marketing',
      image: 'assets/img/services/marketing-digital.webp',
      description: 'Estrategias basadas en datos para escalar tu presencia y tus ventas.',
      features: ['SEO & SEM', 'Social Media Ads', 'Email Marketing', 'Analytics & KPIs'],
    },
    {
      title: 'Soluciones Cloud', tag: 'Desarrollo',
      image: 'assets/img/services/soluciones-cloud.webp',
      description: 'Infraestructura escalable y segura en AWS, GCP y Azure.',
      features: ['AWS / GCP / Azure', 'DevOps & CI/CD', 'Microservicios', 'Seguridad & Compliance'],
    },
    {
      title: 'Consultoría Tech', tag: 'Consultoría',
      image: 'assets/img/services/consultoria-tech.webp',
      description: 'Asesoramiento experto para tomar las decisiones tecnológicas correctas.',
      features: ['Auditoría Técnica', 'Tech Stack Review', 'Roadmap Digital', 'Team Building'],
    },
  ];

  testimonials = [
    { name: 'Carlos Mendoza', role: 'CEO, Fintech Latam', quote: 'Stratium transformó por completo nuestra plataforma. Entregaron en tiempo récord con una calidad que superó todas las expectativas.', avatar: 'CM' },
    { name: 'Laura Vásquez', role: 'Directora de Producto, RetailCo', quote: 'El equipo entiende el negocio, no solo la tecnología. Eso marca la diferencia. Nuestras conversiones aumentaron un 40%.', avatar: 'LV' },
    { name: 'Daniel Torres', role: 'CTO, HealthStart', quote: 'Profesionales, ágiles y comprometidos. La app que desarrollaron es usada por más de 100k pacientes hoy.', avatar: 'DT' },
  ];

  techStack = ['Angular', 'React', 'Flutter', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'Figma', 'Docker', 'TypeScript'];

  navigateToProject(project: Project): void {
    this.projectsService.setSelectedProjectId(project.id);
    this.router.navigate(['/projects']);
  }

  ngAfterViewInit(): void {
    this.preloadImages();
    this.initHero();
    this.initScrollSections();
  }

  private preloadImages(): void {
    this.services.forEach(s => {
      const img = new window.Image();
      img.src = s.image;
    });
  }

  private initHero(): void {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.h-badge', { opacity: 0, y: 24, scale: 0.85 }, { opacity: 1, y: 0, scale: 1, duration: 0.6 })
      .fromTo('.h-title', { opacity: 0, y: 70, skewY: 2 }, { opacity: 1, y: 0, skewY: 0, duration: 1 }, '-=0.2')
      .fromTo('.h-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .fromTo('.h-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, '-=0.4')
      .fromTo('.h-metrics', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, '-=0.3')
      .fromTo('.h-visual', { opacity: 0, x: 60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power2.out' }, '-=0.9');

    gsap.to('.h-orb-1', { y: -40, x: 20, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.h-orb-2', { y: 30, x: -25, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5 });
    gsap.to('.h-orb-3', { y: -20, x: 15, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 3 });
    gsap.to('.h-scroll-dot', { y: 9, duration: 1.2, repeat: -1, yoyo: true, ease: 'power1.inOut' });

    // ticker scroll
    gsap.to('.ticker-inner', { x: '-50%', duration: 20, repeat: -1, ease: 'none' });
  }

  private initScrollSections(): void {
    // Services
    gsap.fromTo('.srv-head', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: '.srv-head', start: 'top 85%' } });
    gsap.fromTo('.srv-card', { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.1, ease: 'power3.out', clearProps: 'all', scrollTrigger: { trigger: '.srv-grid', start: 'top 85%' } });

    // Projects
    gsap.fromTo('.proj-head', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: '.proj-head', start: 'top 85%' } });
    gsap.fromTo('.proj-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.proj-grid', start: 'top 85%' } });

    // Testimonials
    gsap.fromTo('.tst-card', { opacity: 0, y: 40, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.tst-grid', start: 'top 85%' } });

    // CTA
    gsap.fromTo('.cta-box',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-box', start: 'top 82%' } }
    );
    gsap.fromTo('.cta-info-card',
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-info-card', start: 'top 85%' } }
    );
  }

  openModal(service: HomeService): void {
    this.selectedService.set(service);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      gsap.set('.home-modal-backdrop', { opacity: 0 });
      gsap.set('.home-modal-panel', { opacity: 0, y: 40, scale: 0.96 });
      gsap.to('.home-modal-backdrop', { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to('.home-modal-panel', { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' });
    }, 20);
  }

  closeModal(): void {
    gsap.to('.home-modal-panel', {
      opacity: 0, y: 24, scale: 0.96, duration: 0.25, ease: 'power2.in',
      onComplete: () => {
        this.selectedService.set(null);
        document.body.style.overflow = '';
      },
    });
    gsap.to('.home-modal-backdrop', { opacity: 0, duration: 0.3 });
  }
}
