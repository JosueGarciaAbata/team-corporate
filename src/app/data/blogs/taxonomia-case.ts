import type { Blog } from '../../services/blog.models';
import { AUTHORS as a, CATEGORY_MAP as c } from '../blog-catalogs';

export const blogTaxonomiaCASE: Blog = {
  id: 'taxonomia-case',
  title: 'Taxonomía de las Herramientas CASE',
  excerpt: 'Las herramientas CASE se pueden clasificar por su función, su papel como instrumentos para administradores o personal técnico, o por su utilización en los distintos pasos del proceso de ingeniería del software.',
  coverImageUrl: '/assets/img/services/taxonomia_case.webp',
  category: c.software,
  authors: [a.joel, a.carol, a['david-m']],
  date: '2026-03-09',
  readTime: '7 min',
  isStatic: true,
  sections: [
    {
      title: 'Niveles de Integración CASE',
      intro: 'Los niveles relativos de integración CASE muestran cómo interactúan estas soluciones en un entorno de trabajo:',
      imageUrl: '/assets/blog/taxonomia_case/niveles_herramientas.webp',
      imageAlt: 'Diagrama de niveles de integración de herramientas CASE',
      imageCaption: 'Niveles de integración CASE. Fuente: Adaptado de "Software Engineering: A Practitioner’s Approach" de Roger S. Pressman.',
      imageSize: 'image-medium',
      subsections: [
        {
          title: 'Herramienta individual (solución puntual)',
          content: 'En el extremo inferior del espectro de integración se encuentra la herramienta individual. Opera de forma aislada sin intercambio con otras herramientas del entorno.',
        },
        {
          title: 'Intercambio de datos',
          content: 'Estas herramientas producen su salida en un formato estándar compatible con otras herramientas, permitiendo un flujo de datos básico entre ellas.',
        },
        {
          title: 'Puentes y asociaciones',
          content: 'Constructores de herramientas complementarias trabajan juntos para formar un puente (ej. análisis y diseño enlazado con generación de código), reduciendo la fricción entre fases.',
        },
        {
          title: 'Fuente única',
          content: 'Un vendedor integra una cierta cantidad de herramientas distintas y las vende en forma de paquete, garantizando compatibilidad interna entre ellas.',
        },
        {
          title: 'EAIP — Entorno de Apoyo Integrado a Proyectos',
          content: 'El nivel superior de integración. Se utilizan estándares abiertos para construir herramientas 100% compatibles entre sí, ofreciendo una visión unificada de todo el proyecto.',
        },
      ],
    },
    {
      title: 'Herramientas de Administración y Planificación',
      intro: 'Esta parte de la taxonomía se enfoca en la gestión directa del proyecto de software:',
      table: {
        title: 'Tipos de herramientas de administración y planificación',
        headers: ['Tipo', 'Descripción'],
        rows: [
          [
            'Ingeniería de procesos de negocio',
            'Modelan requisitos de información estratégica para representar objetos de datos, relaciones y flujos en la compañía; son la base para alinear TI con negocio.'
          ],
          [
            'Modelado de procesos y gestión',
            'Representan elementos clave del proceso para comprenderlo mejor y guiar al personal técnico en la ejecución cotidiana.'
          ],
          [
            'Planificación de proyectos',
            'Se centran en estimación de costes y esfuerzos, además de planificar duración, personas involucradas y recursos necesarios.'
          ],
          [
            'Análisis de riesgos',
            'Ayudan a construir tablas de riesgos con identificación, evaluación de probabilidad e impacto, y definición de planes de contingencia.'
          ],
          [
            'Gestión de proyectos',
            'Rastrean y monitorizan el plan de forma continua, con seguimiento en tiempo real y alertas automáticas.'
          ]
        ]
      },
    },
    {
      title: 'Herramientas de soporte de desarrollo',
      intro: 'La siguiente parte de la taxonomía se centra en el control y organización del desarrollo del software, identificando factores influyentes como la documentación, los requisitos y las métricas.',
      table: {
        title: 'Tipos de herramientas de soporte de desarrollo',
        headers: ['Tipo', 'Descripción'],
        rows: [
          [
            'Seguimiento de requisitos',
            'Aíslan requisitos combinando análisis de texto de especificación con un sistema de base de datos que almacena y categoriza lo identificado.'
          ],
          [
            'Métricas y gestión',
            'Permiten controlar y coordinar el proceso de ingeniería de software, mejorando calidad del producto y del proceso.'
          ],
          [
            'Documentación',
            'Mejoran productividad al reducir tiempo en documentación y liberar esfuerzo para tareas críticas de desarrollo.'
          ],
          [
            'Software de sistema',
            'Incluyen tecnologías de estaciones de trabajo y redes; el entorno CASE debe adaptarse a software de comunicación de alta calidad.'
          ],
          [
            'Control de calidad',
            'Auditan código fuente para validar estándares del lenguaje y extraen métricas técnicas para estimar la calidad construida.'
          ],
          [
            'Bases de datos',
            'Mantienen la base de datos del proyecto, evolucionando desde modelos relacionales hacia orientados a objetos cuando aplica.'
          ],
          [
            'Gestión de configuración del software',
            'Apoyan identificación de elementos, control de versiones, control de cambios, auditoría y registro de estados.'
          ]
        ]
      },
    },
  ],
};
