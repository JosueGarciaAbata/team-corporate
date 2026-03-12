// ─────────────────────────────────────────────────────────
//  Catálogos estáticos — autores y categorías del equipo
//  Importa aquí para referenciar con a.josue / c.software
// ─────────────────────────────────────────────────────────
import type { AuthorId, BlogAuthor, BlogCategory } from '../services/blog.models';

// ── Autores ───────────────────────────────────────────────

export const AUTHORS: Record<AuthorId, BlogAuthor> = {
  'david-b': {
    id: 'david-b',
    name: 'David Barragán',
    role: 'Senior Frontend Engineer',
    avatarUrl: 'assets/img/team/davidbarragan.png',
  },
  joel: {
    id: 'joel',
    name: 'Joel Bonilla',
    role: 'Backend Engineer',
    avatarUrl: 'assets/img/team/joel.png',
  },
  carol: {
    id: 'carol',
    name: 'Carol Cañizares',
    role: 'Fullstack Engineer',
    avatarUrl: 'assets/img/team/carol.png',
  },
  josue: {
    id: 'josue',
    name: 'Josué García',
    role: 'Lead Fullstack Engineer',
    avatarUrl: 'assets/img/team/Josue.png',
  },
  nixon: {
    id: 'nixon',
    name: 'Nixon Hurtado',
    role: 'DevOps & Cloud Engineer',
    avatarUrl: 'assets/img/team/nixon.png',
  },
  'david-m': {
    id: 'david-m',
    name: 'David Manjarres',
    role: 'Backend Engineer',
    avatarUrl: 'assets/img/team/davidmanjarres.png',
  },
  maybelline: {
    id: 'maybelline',
    name: 'Maybelline Navarro',
    role: 'Frontend Engineer',
    avatarUrl: 'assets/img/team/Maybe.png',
  },
};

// ── Categorías ────────────────────────────────────────────
// Igual que AUTHORS: referencia por clave en lugar de string literal
// Uso: category: c.software  (en lugar de 'Ingeniería de Software')

export const CATEGORY_MAP = {
  software: 'Ingeniería de Software',
  ai:       'Inteligencia Artificial',
  devops:   'DevOps',
  cloud:    'Arquitectura Cloud',
  web:      'Desarrollo Web',
} as const satisfies Record<string, BlogCategory>;

export const CATEGORIES: readonly BlogCategory[] = Object.values(CATEGORY_MAP);
