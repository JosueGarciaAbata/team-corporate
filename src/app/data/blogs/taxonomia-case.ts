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
      subsections: [
        {
          title: 'Ingeniería de procesos de negocio',
          content: 'Modelan los requisitos de información estratégica para representar objetos de datos, relaciones y cómo fluyen en la compañía. Son el punto de partida para alinear TI con negocio.',
        },
        {
          title: 'Modelado de procesos y gestión',
          content: 'Representan los elementos clave del proceso para entenderlo mejor y guiar al personal técnico en su ejecución cotidiana.',
        },
        {
          title: 'Planificación de proyectos',
          content: 'Se centran en la estimación de costes y esfuerzos, así como en la planificación de la duración, el número de personas involucradas y los recursos necesarios.',
        },
        {
          title: 'Análisis de riesgos',
          content: 'Permiten al gestor construir una tabla de riesgos con guías detalladas para su identificación, evaluación de probabilidad e impacto, y definición de planes de contingencia.',
        },
        {
          title: 'Gestión de proyectos',
          content: 'Rastrean y monitorizan el plan de forma continua. Suelen ser extensiones de las herramientas de planificación que añaden seguimiento en tiempo real y alertas automáticas.',
        },
        
      ],
    },
        {
      title: 'Herramientas de soporte de desarrollo',
      intro: 'La siguiente parte de la taxonomía se centra en el control y organización del desarrollo del software, identificando factores influyentes como la documentación, los requisitos y las métricas.',
      subsections: [
        {
          title: 'Seguimiento de requisitos',
          content: 'Utilizan un enfoque sistemático para aislar estos requisitos, al combinar una evaluación del texto de la especificación, con un sistema de gestión de bases de datos, el cual almacena y categoriza los requisitos analizados a partir de esta fuente.',
        },
        {
          title: 'Métricas y gestión',
          content: 'Ayudan a los gestores a controlar y coordinar el proceso de ingeniería de software, y permiten a los ingenieros mejorar la calidad del software desarrollado; se enfocan en características del proceso y del producto. ',
        },
        {
          title: 'Documentación',
          content: 'Representan una gran oportunidad para mejorar la productividad e invertir el tiempo ahorrado en tareas más críticas en el desarrollo del software.',
        },
        {
          title: 'Software de sistema',
          content: 'Son tecnologías de estaciones de trabajo, el entorno CASE deberá adaptarse al software de red de alta calidad y a sus medios de comunicación.',
        },
        {
          title: 'Control de calidad',
          content: 'Realizan una auditoría del código fuente para determinar si el código se ajusta a los estándares del lenguaje, o extraen métricas técnicas para extrapolar la calidad que se construye. ',
        },
        {
          title: 'Bases de datos',
          content: 'Establecen una base de datos del proyecto. Pueden evolucionar a partir de los sistemas de gestión de bases de datos relacionales para transformarse en sistemas de gestión de bases de datos orientadas a objetos.',
        },
        {
          title: 'Gestión de configuración del software',
          content: 'Apoyan y facilitan sus cinco tareas principales: identificación de elementos, control de versiones, control de cambios, auditoría y el registro de estados. ',
        }
        
      ],
    },
  ],
};
