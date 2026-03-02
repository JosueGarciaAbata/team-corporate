import { Component, signal, computed, AfterViewInit, OnDestroy, ElementRef, inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    department: string;
    bio: string;
    initials: string;
    image: string;
    focus: string;
    skills: string[];
    social: { github?: string };
}

@Component({
    selector: 'app-team',
    imports: [RouterLink],
    templateUrl: './team.html',
    styleUrl: './team.css',
})
export class Team implements AfterViewInit, OnDestroy {
    activeFilter = signal<string>('Todos');
    hoveredId = signal<number | null>(null);

    private el = inject(ElementRef);
    private platformId = inject(PLATFORM_ID);
    private zone = inject(NgZone);
    private observer: IntersectionObserver | null = null;
    private cardObserver: IntersectionObserver | null = null;
    private membersSection: HTMLElement | null = null;

    departments = ['Todos', 'Frontend', 'Backend', 'Fullstack', 'DevOps'];

    members: TeamMember[] = [
        {
            id: 1,
            name: 'David Barragán',
            role: 'Senior Frontend Engineer',
            department: 'Frontend',
            bio: 'Especialista en interfaces de alto rendimiento con Angular y React. Su enfoque en la accesibilidad y los sistemas de diseño ha definido la identidad visual de cada producto que el equipo ha lanzado.',
            initials: 'DB',
            image: 'assets/img/team/davidbarragan.png',
            focus: 'UI Architecture',
            skills: ['Angular', 'React', 'TypeScript', 'Design Systems'],
            social: { github: 'https://github.com/DavidJosueP2' },
        },
        {
            id: 2,
            name: 'Joel Bonilla',
            role: 'Backend Engineer',
            department: 'Backend',
            bio: 'Constructor de APIs resilientes y servicios distribuidos. Lleva años garantizando que la lógica de negocio más crítica opere con latencias imperceptibles y disponibilidad cercana al 100%.',
            initials: 'JB',
            image: 'assets/img/team/joel.png',
            focus: 'Distributed Systems',
            skills: ['Node.js', 'Go', 'PostgreSQL', 'gRPC'],
            social: { github: 'https://github.com/JoelBonillaG' },
        },
        {
            id: 3,
            name: 'Carol Cañizares',
            role: 'Fullstack Engineer',
            department: 'Fullstack',
            bio: 'Desarrolladora integral con visión de producto. Cierra la brecha entre cliente y servidor con una consistencia técnica que reduce tiempos de entrega sin sacrificar calidad.',
            initials: 'CC',
            image: 'assets/img/team/carol.png',
            focus: 'Product Engineering',
            skills: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
            social: { github: 'https://github.com/carol104' },
        },
        {
            id: 4,
            name: 'Josué García',
            role: 'Lead Fullstack Engineer',
            department: 'Fullstack',
            bio: 'Líder técnico con capacidad de orquestar equipos y arquitecturas complejas al mismo tiempo. Impulsa estándares de código que perduran más allá de los proyectos individuales.',
            initials: 'JG',
            image: 'assets/img/team/Josue.png',
            focus: 'Technical Leadership',
            skills: ['Angular', 'NestJS', 'TypeScript', 'Microservices'],
            social: { github: 'https://github.com/JosueGarciaAbata' },
        },
        {
            id: 5,
            name: 'Nixon Hurtado',
            role: 'DevOps & Cloud Engineer',
            department: 'DevOps',
            bio: 'Arquitecto de infraestructura que hace invisible la complejidad operacional. Sus pipelines y entornos en la nube son la base silenciosa sobre la que el equipo construye sin fricciones.',
            initials: 'NH',
            image: 'assets/img/team/nixon.png',
            focus: 'Cloud Infrastructure',
            skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
            social: { github: 'https://github.com/NIXON-HS' },
        },
        {
            id: 6,
            name: 'David Manjarres',
            role: 'Backend Engineer',
            department: 'Backend',
            bio: 'Experto en modelado de datos y rendimiento de bases de datos. Su trabajo en optimización de queries y diseño de esquemas sostiene las operaciones de datos más exigentes del equipo.',
            initials: 'DM',
            image: 'assets/img/team/davidmanjarres.png',
            focus: 'Data & Performance',
            skills: ['Python', 'FastAPI', 'MongoDB', 'Redis'],
            social: { github: 'https://github.com/DRTX2' },
        },
        {
            id: 7,
            name: 'Maybelline Navarro',
            role: 'Frontend Engineer',
            department: 'Frontend',
            bio: 'Especialista en experiencia de usuario y animación web. Transforma flujos de navegación complejos en experiencias intuitivas que los usuarios comprenden en segundos.',
            initials: 'MN',
            image: 'assets/img/team/Maybe.png',
            focus: 'UX & Motion',
            skills: ['React', 'Framer Motion', 'CSS Architecture', 'A11y'],
            social: { github: 'https://github.com/M4yb33' },
        },
    ];

    filteredMembers = computed(() => {
        const f = this.activeFilter();
        return f === 'Todos' ? this.members : this.members.filter((m) => m.department === f);
    });

    ngAfterViewInit(): void {
        if (!isPlatformBrowser(this.platformId)) return;

        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

        this.membersSection = this.el.nativeElement.querySelector('.members-section');

        // Scroll al tope al cargar la página
        window.scrollTo({ top: 0, behavior: 'instant' });

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // ── Reveal items (sección "Cómo pensamos") con IntersectionObserver ──
        if (prefersReduced) {
            this.el.nativeElement.querySelectorAll('.reveal-item').forEach((el: Element) => {
                (el as HTMLElement).classList.add('is-visible');
            });
        } else {
            this.observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const el = entry.target as HTMLElement;
                            const delay = el.style.getPropertyValue('--reveal-delay') || '0ms';
                            setTimeout(() => el.classList.add('is-visible'), parseInt(delay, 10));
                            this.observer?.unobserve(el);
                        }
                    });
                },
                { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
            );
            this.el.nativeElement.querySelectorAll('.reveal-item').forEach((el: Element) => {
                this.observer?.observe(el);
            });
        }

        if (prefersReduced) return;

        // Esperar dos frames para que Angular pinte el @for en el DOM
        this.zone.runOutsideAngular(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.setupCardAnimations();
                });
            });
        });
    }

    private setupCardAnimations(): void {
        // Destruir observer anterior si existe
        this.cardObserver?.disconnect();
        this.cardObserver = null;

        const cards = Array.from(
            this.el.nativeElement.querySelectorAll('.member-card')
        ) as HTMLElement[];

        if (!cards.length) return;

        // Estado inicial: todas invisibles antes de que el observer actúe
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(48px) scale(0.96)';
            card.style.transition = 'none';
        });

        // Pequeño delay para que los estilos iniciales se apliquen antes del observer
        setTimeout(() => {
            this.cardObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        const card = entry.target as HTMLElement;
                        if (entry.isIntersecting) {
                            // Card entra al viewport → aparece
                            card.style.transition = 'opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) scale(1)';
                        } else {
                            // Card sale del viewport → desaparece
                            card.style.transition = 'opacity 0.3s ease-in, transform 0.3s ease-in';
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(48px) scale(0.96)';
                        }
                    });
                },
                {
                    threshold: 0.12,
                    rootMargin: '0px 0px -40px 0px',
                }
            );

            cards.forEach(card => this.cardObserver?.observe(card));
        }, 80);
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
        this.cardObserver?.disconnect();
        ScrollTrigger.getAll().forEach(t => t.kill());
    }

    setFilter(dept: string) {
        this.activeFilter.set(dept);

        if (isPlatformBrowser(this.platformId) && this.membersSection) {
            gsap.to(window, {
                duration: 0.65,
                scrollTo: { y: this.membersSection, offsetY: 72 },
                ease: 'power2.inOut',
            });
        }

        // Re-observar las nuevas cards tras el cambio de filtro
        this.zone.runOutsideAngular(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.setupCardAnimations();
                });
            });
        });
    }

    setHovered(id: number | null) {
        this.hoveredId.set(id);
    }

    trackById(index: number, item: TeamMember) {
        return item.id;
    }
}
