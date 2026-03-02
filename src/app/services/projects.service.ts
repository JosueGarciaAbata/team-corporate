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
      image: 'assets/img/projects/fuel-management.png',
      technologies: ['Node.js', 'NestJS', 'Sistemas Distribuidos', 'PostgreSQL', 'Redis'],
      category: 'Backend',
      publishDate: '2026-02-17',
    },
    {
      id: 2,
      title: 'Sistema de Gestión Hospitalaria',
      excerpt: 'Arquitectura de microservicios con Spring Cloud, Eureka, API Gateway, Docker y Azure.',
      description: 'Plataforma de gestión hospitalaria basada en microservicios, enfocada en escalabilidad, resiliencia y límites claros entre servicios. Gestiona expedientes de pacientes, citas, facturación y flujos de trabajo médicos.',
      image: 'assets/img/projects/hospital-management.jpeg',
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Azure', 'Eureka'],
      category: 'Microservicios',
      publishDate: '2026-02-17',
    },
    {
      id: 3,
      title: 'Sistema de Gestión de Inventario y Auditorías',
      excerpt: 'Generador automatizado de reportes PDF para auditorías judiciales y control de inventario con gestión de roles.',
      description: 'Sistema completo de gestión de inventario y auditorías diseñado para garantizar cumplimiento normativo. Genera reportes PDF automatizados para auditorías judicales, implementa gestión de roles personalizada basada en acceso por entidad estatal, e incluye una interfaz moderna con Material UI.',
      image: 'assets/img/projects/inventory-audits.png',
      technologies: ['Laravel', 'React', 'MySQL', 'Swagger'],
      category: 'Full-Stack',
      publishDate: '2026-02-17',
    },
    {
      id: 5,
      title: 'UTA Elections Platform',
      excerpt: 'Plataforma de elecciones con estadísticas en tiempo real y noticias para partes interesadas universitarias.',
      description: 'Plataforma electoral completa que proporciona participación electoral en tiempo real, estadísticas de resultados y noticias relevantes para estudiantes, profesores y personal de la universidad. Interfaz responsiva desarrollada con Bootstrap y Laravel.',
      image: 'assets/img/projects/uta-elections.jpeg',
      technologies: ['Laravel', 'Bootstrap', 'MySQL'],
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
    // Retorna los 3 proyectos emblemáticos para el home: id 1, 2, y 5
    return this.projects.filter(p => p.id === 1 || p.id === 2 || p.id === 5);
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
