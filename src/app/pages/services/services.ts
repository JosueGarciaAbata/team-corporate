import { Component, AfterViewInit, signal, computed, OnDestroy } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
  tag: string;
  image: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, SlicePipe, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements AfterViewInit, OnDestroy {
  activeFilter = signal('Todos');
  selectedService = signal<Service | null>(null);

  filters = ['Todos', 'Desarrollo', 'Diseño', 'Marketing', 'Consultoría'];

  services: Service[] = [
    {
      id: 1, icon: '💻', title: 'Desarrollo Web', tag: 'Desarrollo',
      image: 'assets/img/services/desarrollo-web.webp',
      description: 'Creamos sitios web y aplicaciones web de alto rendimiento, optimizados para SEO y con experiencias de usuario que convierten visitantes en clientes reales.',
      features: ['React / Angular / Vue', 'APIs RESTful & GraphQL', 'Optimización SEO', 'Performance Web Vitals'],
    },
    {
      id: 2, icon: '📱', title: 'Aplicaciones Móviles', tag: 'Desarrollo',
      image: 'assets/img/services/desarrollo-movil.webp',
      description: 'Desarrollamos apps nativas e híbridas para iOS y Android que ofrecen experiencias fluidas, rápidas y que los usuarios aman usar cada día.',
      features: ['React Native / Flutter', 'iOS & Android', 'Offline First', 'Push Notifications'],
    },
    {
      id: 3, icon: '🎨', title: 'Diseño UI/UX', tag: 'Diseño',
      image: 'assets/img/services/disenoui.webp',
      description: 'Diseñamos interfaces intuitivas y visualmente impactantes basadas en investigación real de usuarios, garantizando una experiencia memorable y efectiva.',
      features: ['Research & Testing', 'Prototipos Interactivos', 'Design Systems', 'Accesibilidad WCAG'],
    },
    {
      id: 4, icon: '🚀', title: 'Marketing Digital', tag: 'Marketing',
      image: 'assets/img/services/marketing-digital.webp',
      description: 'Estrategias de marketing basadas en datos que impulsan el crecimiento orgánico y pagado, aumentando la visibilidad y los ingresos de tu marca.',
      features: ['SEO & SEM', 'Social Media Ads', 'Email Marketing', 'Analytics & KPIs'],
    },
    {
      id: 5, icon: '☁️', title: 'Soluciones Cloud', tag: 'Desarrollo',
      image: 'assets/img/services/soluciones-cloud.webp',
      description: 'Implementamos y gestionamos infraestructura en la nube escalable, segura y de alta disponibilidad usando las mejores plataformas del mercado.',
      features: ['AWS / GCP / Azure', 'DevOps & CI/CD', 'Microservicios', 'Seguridad & Compliance'],
    },
    {
      id: 6, icon: '🔧', title: 'Consultoría Tech', tag: 'Consultoría',
      image: 'assets/img/services/consultoria-tech.webp',
      description: 'Asesoramiento estratégico experto para optimizar tus procesos, elegir la tecnología correcta y escalar tu equipo con los mejores talentos.',
      features: ['Auditoría Técnica', 'Tech Stack Review', 'Roadmap Digital', 'Team Building'],
    },
    {
      id: 7, icon: '🛡️', title: 'Ciberseguridad', tag: 'Consultoría',
      image: 'assets/img/services/ciberseguridad.webp',
      description: 'Protegemos tu negocio con soluciones de seguridad robustas: pentesting, auditorías, protección de datos y respuesta a incidentes en tiempo real.',
      features: ['Pentesting', 'Auditorías de Seguridad', 'GDPR / LOPD', 'Incident Response'],
    },
    {
      id: 8, icon: '📊', title: 'Data & Analytics', tag: 'Marketing',
      image: 'assets/img/services/data-analytics.webp',
      description: 'Convertimos tus datos en decisiones inteligentes. Desde dashboards ejecutivos hasta modelos predictivos de machine learning.',
      features: ['BI & Dashboards', 'Machine Learning', 'Data Pipelines', 'Visualización de Datos'],
    },
    {
      id: 9, icon: '🤖', title: 'Inteligencia Artificial', tag: 'Desarrollo',
      image: 'assets/img/services/inteligencia-artificial.webp',
      description: 'Integramos soluciones de IA y automatización que reducen costos operativos, mejoran la eficiencia y crean ventajas competitivas reales.',
      features: ['Chatbots & IA', 'Automatización RPA', 'NLP & Vision', 'AI Strategy'],
    },
  ];

  stats = [
    { number: '150+', label: 'Proyectos entregados' },
    { number: '98%', label: 'Clientes satisfechos' },
    { number: '12+', label: 'Años de experiencia' },
    { number: '40+', label: 'Expertos en el equipo' },
  ];

  processSteps = [
    { number: '01', icon: '🔍', title: 'Discovery', desc: 'Entendemos tu negocio, objetivos y audiencia para definir la estrategia correcta.' },
    { number: '02', icon: '🎨', title: 'Diseño', desc: 'Creamos prototipos y diseños validados con usuarios reales antes de desarrollar.' },
    { number: '03', icon: '⚙️', title: 'Desarrollo', desc: 'Construimos con tecnologías modernas, código limpio y buenas prácticas ágiles.' },
    { number: '04', icon: '🚀', title: 'Lanzamiento', desc: 'Desplegamos, medimos y optimizamos continuamente para maximizar resultados.' },
  ];

  filteredServices = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'Todos') return this.services;
    return this.services.filter(s => s.tag === filter);
  });

  setFilter(filter: string) {
    this.activeFilter.set(filter);
    ScrollTrigger.getAll().forEach(st => {
      if (st.vars.trigger === '.services-grid' || (st.trigger as Element)?.classList?.contains('service-card')) {
        st.kill();
      }
    });
    setTimeout(() => this.animateCards(), 50);
  }

  openModal(service: Service): void {
    this.selectedService.set(service);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      gsap.from('.modal-backdrop', { opacity: 0, duration: 0.3 });
      gsap.from('.modal-panel', { opacity: 0, y: 40, scale: 0.96, duration: 0.4 });
    }, 20);
  }

  closeModal(): void {
    gsap.to('.modal-panel', {
      opacity: 0,
      y: 24,
      scale: 0.96,
      duration: 0.25,
      onComplete: () => {
        this.selectedService.set(null);
        document.body.style.overflow = '';
      },
    });
    gsap.to('.modal-backdrop', { opacity: 0, duration: 0.3 });
  }

  ngAfterViewInit(): void {
    this.initHeroAnimations();
    this.initScrollAnimations();
    this.initStatsCounter();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  private initHeroAnimations(): void {
    gsap.from('.hero-badge', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: 0.1,
    });

    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: 0.2,
    });

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.4,
    });

    gsap.from('.hero-cta', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.6,
      stagger: 0.1,
    });

    // Orbs animation
    gsap.to('.orb-1', { y: -30, x: 15, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.orb-2', { y: 20, x: -20, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });
    gsap.to('.orb-3', { y: -15, x: 10, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 });
  }

  private initScrollAnimations(): void {
    const scrollElements = [
      { selector: '.stats-bar', y: 40, x: 0 },
      { selector: '.section-tag', y: 0, x: -30 },
      { selector: '.section-title', y: 40, x: 0 },
      { selector: '.filter-bar', y: 20, x: 0 },
    ];

    scrollElements.forEach(({ selector, y, x }) => {
      gsap.from(selector, {
        opacity: 0,
        y,
        x,
        duration: 0.8,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    this.animateCards();
  }

  animateCards(): void {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: index * 0.08,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });
  }

  private initStatsCounter(): void {
    ScrollTrigger.create({
      trigger: '.stats-bar',
      start: 'top 85%',
      once: true,
      onEnter: () => {
        document.querySelectorAll<HTMLElement>('.stat-number').forEach((el) => {
          const target = el.getAttribute('data-target') ?? '0';
          const isPercent = target.includes('%');
          const isPlus = target.includes('+');
          const num = parseInt(target.replace(/[^0-9]/g, ''), 10);
          const counter = { val: 0 };

          gsap.to(counter, {
            val: num,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = Math.round(counter.val) + (isPercent ? '%' : isPlus ? '+' : '');
            },
          });
        });
      },
    });
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}
