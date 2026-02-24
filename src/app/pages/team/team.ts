import { Component, signal, computed, AfterViewInit, OnDestroy, ElementRef, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    department: string;
    bio: string;
    initials: string;
    focus: string;
    skills: string[];
    social: { github?: string; linkedin?: string };
}

@Component({
    selector: 'app-team',
    imports: [],
    templateUrl: './team.html',
    styleUrl: './team.css',
})
export class Team implements AfterViewInit, OnDestroy {
    activeFilter = signal<string>('Todos');
    hoveredId = signal<number | null>(null);

    private el = inject(ElementRef);
    private platformId = inject(PLATFORM_ID);
    private observer: IntersectionObserver | null = null;

    departments = ['Todos', 'Frontend', 'Backend', 'Fullstack', 'DevOps'];

    members: TeamMember[] = [
        {
            id: 1,
            name: 'David Barragán',
            role: 'Senior Frontend Engineer',
            department: 'Frontend',
            bio: 'Especialista en interfaces de alto rendimiento con Angular y React. Su enfoque en la accesibilidad y los sistemas de diseño ha definido la identidad visual de cada producto que el equipo ha lanzado.',
            initials: 'DB',
            focus: 'UI Architecture',
            skills: ['Angular', 'React', 'TypeScript', 'Design Systems'],
            social: { github: '#', linkedin: '#' },
        },
        {
            id: 2,
            name: 'Joel Bonilla',
            role: 'Backend Engineer',
            department: 'Backend',
            bio: 'Constructor de APIs resilientes y servicios distribuidos. Lleva años garantizando que la lógica de negocio más crítica opere con latencias imperceptibles y disponibilidad cercana al 100%.',
            initials: 'JB',
            focus: 'Distributed Systems',
            skills: ['Node.js', 'Go', 'PostgreSQL', 'gRPC'],
            social: { github: '#', linkedin: '#' },
        },
        {
            id: 3,
            name: 'Carol Cañizares',
            role: 'Fullstack Engineer',
            department: 'Fullstack',
            bio: 'Desarrolladora integral con visión de producto. Cierra la brecha entre cliente y servidor con una consistencia técnica que reduce tiempos de entrega sin sacrificar calidad.',
            initials: 'CC',
            focus: 'Product Engineering',
            skills: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
            social: { github: '#', linkedin: '#' },
        },
        {
            id: 4,
            name: 'Josué García',
            role: 'Lead Fullstack Engineer',
            department: 'Fullstack',
            bio: 'Líder técnico con capacidad de orquestar equipos y arquitecturas complejas al mismo tiempo. Impulsa estándares de código que perduran más allá de los proyectos individuales.',
            initials: 'JG',
            focus: 'Technical Leadership',
            skills: ['Angular', 'NestJS', 'TypeScript', 'Microservices'],
            social: { github: '#', linkedin: '#' },
        },
        {
            id: 5,
            name: 'Nixon Hurtado',
            role: 'DevOps & Cloud Engineer',
            department: 'DevOps',
            bio: 'Arquitecto de infraestructura que hace invisible la complejidad operacional. Sus pipelines y entornos en la nube son la base silenciosa sobre la que el equipo construye sin fricciones.',
            initials: 'NH',
            focus: 'Cloud Infrastructure',
            skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
            social: { github: '#', linkedin: '#' },
        },
        {
            id: 6,
            name: 'David Manjarres',
            role: 'Backend Engineer',
            department: 'Backend',
            bio: 'Experto en modelado de datos y rendimiento de bases de datos. Su trabajo en optimización de queries y diseño de esquemas sostiene las operaciones de datos más exigentes del equipo.',
            initials: 'DM',
            focus: 'Data & Performance',
            skills: ['Python', 'FastAPI', 'MongoDB', 'Redis'],
            social: { github: '#', linkedin: '#' },
        },
        {
            id: 7,
            name: 'Maybelline Navarro',
            role: 'Frontend Engineer',
            department: 'Frontend',
            bio: 'Especialista en experiencia de usuario y animación web. Transforma flujos de navegación complejos en experiencias intuitivas que los usuarios comprenden en segundos.',
            initials: 'MN',
            focus: 'UX & Motion',
            skills: ['React', 'Framer Motion', 'CSS Architecture', 'A11y'],
            social: { github: '#', linkedin: '#' },
        },
    ];

    filteredMembers = computed(() => {
        const f = this.activeFilter();
        return f === 'Todos' ? this.members : this.members.filter((m) => m.department === f);
    });

    ngAfterViewInit(): void {
        if (!isPlatformBrowser(this.platformId)) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            // Revelar todo inmediatamente si el usuario prefiere movimiento reducido
            this.el.nativeElement.querySelectorAll('.reveal-item').forEach((el: Element) => {
                (el as HTMLElement).classList.add('is-visible');
            });
            return;
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        const delay = el.style.getPropertyValue('--reveal-delay') || '0ms';
                        setTimeout(() => {
                            el.classList.add('is-visible');
                        }, parseInt(delay, 10));
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

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }

    setFilter(dept: string) {
        this.activeFilter.set(dept);
    }

    setHovered(id: number | null) {
        this.hoveredId.set(id);
    }

    trackById(index: number, item: TeamMember) {
        return item.id;
    }
}
