import { Injectable, signal } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  publishDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private selectedProjectId = signal<number | null>(null);

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

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  getHomeProjects(): Project[] {
    return this.projects.slice(0, 3);
  }

  setSelectedProjectId(id: number | null): void {
    this.selectedProjectId.set(id);
  }

  getSelectedProjectId(): number | null {
    return this.selectedProjectId();
  }

  clearSelectedProjectId(): void {
    this.selectedProjectId.set(null);
  }
}
