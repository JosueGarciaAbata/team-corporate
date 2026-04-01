import type { Blog } from '../../services/blog.models';
import { AUTHORS as a, CATEGORY_MAP as c } from '../blog-catalogs';
const drawioImage1Placeholder = '/assets/blog/drawio/drawioboardpanel.png';
const drawioImage2Placeholder = '/assets/blog/drawio/integrations.png';
export const blogDrawIo: Blog = {
  id: 'draw-io',
  title: 'Draw.io, una herramienta para diagramas de software, arquitectura y diseño',
  excerpt:
    'Draw.io, es una herramienta muy útil a la hora de crear diagramas; cuenta con funcionalidades, ventajas y casos de uso en ingeniería de software, además de una IA incorporada.',
  coverImageUrl: '/assets/img/services/drawio.webp',
  category: c.software,
  authors: [a.carol],
  date: '2026-03-31',
  readTime: '10 min',
  isStatic: true,
  sections: [
    {
      title: '1. ¿Qué es Draw.io?',
      intro:
        'Draw.io (también conocido como diagrams.net) es una herramienta de diagramación gratuita y de código abierto. Permite modelar ideas técnicas de forma visual, desde flujos simples hasta arquitecturas de software completas, sin obligarte a crear una cuenta para empezar.',
      subsections: [
        {
          title: '¿Para quién es útil?',
          content:
            'Es especialmente valioso para desarrolladores, arquitectos, analistas y equipos de producto que necesitan comunicar decisiones técnicas de manera rápida y clara.'
        },
        {
          title: '¿Por qué destaca?',
          content:
            'Su combinación de facilidad de uso, gran biblioteca de formas y capacidad de integración lo convierten en una opción muy competitiva frente a herramientas de pago.'
        }

        
      ]
    },
    {
      title: '2. Características Principales',
      subsections: [
        {
          title: 'Interfaz "Drag & Drop"',
          content:
            'Su editor de arrastrar y soltar permite construir diagramas con rapidez. Puedes partir de plantillas, mover bloques libremente y ajustar conectores sin fricción.'
        },
        {
          title: 'Versatilidad de formatos',
          content:
            'Soporta diagramas de flujo, UML, BPMN, mapas mentales, wireframes y diagramas de infraestructura (AWS, Azure, Cisco), entre otros.'
        },
        {
          title: 'Almacenamiento flexible',
          content:
            'Puedes decidir dónde guardar tus archivos, lo que facilita trabajar según tus políticas de seguridad y colaboración:',
          bullets: [
            'Nube: Google Drive, OneDrive, Dropbox, GitHub o GitLab.',
            'Local: En tu computadora o en almacenamiento del navegador.'
          ]
        },
        {
          title: 'Modo offline',
          content:
            'Cuenta con aplicación de escritorio, ideal para trabajar sin conexión, en entornos restringidos o cuando necesitas mayor control local de tus archivos.'
        }
      ],
      imageUrl: drawioImage1Placeholder,
      imageAlt: 'Interfaz de Draw.io mostrando distintos tipos de diagramas y características de uso',
      imageCaption:
        'Draw.io permite crear desde diagramas simples hasta arquitecturas complejas con una interfaz intuitiva.',
      imageSize: 'image-medium'
    },
    {
      title: '3. Integraciones para equipos de desarrollo',
      intro:
        'Uno de los mayores puntos fuertes de Draw.io es que se integra con herramientas que ya usas en el día a día, mejorando documentación, colaboración y trazabilidad.',
      table: {
        title: 'Impacto operativo de Draw.io por área',
        headers: ['Área', 'Aporte de Draw.io', 'Resultado esperado'],
        rows: [
          [
            'Documentación técnica',
            'Diagramas actualizables junto al código y la documentación funcional',
            'Menor ambiguedad y comunicación más clara'
          ],
          [
            'Revisión de cambios',
            'Versionado de archivos y revisión colaborativa en repositorios',
            'Historial visible y decisiones mejor justificadas'
          ],
          [
            'Trabajo en equipo',
            'Integración con suites colaborativas y entornos de documentación',
            'Mayor alineación entre negocio, diseño y desarrollo'
          ],
          [
            'Entrega de proyectos',
            'Material visual para onboarding, soporte y mantenimiento',
            'Transferencia de conocimiento más rápida'
          ]
        ]
      },
      subsections: [
        {
          title: 'Visual Studio Code: Diagramar sin salir del código',
          content:
            'Con la extensión de Draw.io para VS Code puedes editar diagramas junto a tu proyecto sin cambiar de herramienta.',
          bullets: [
            'Archivos .drawio.png: se visualizan como imagen, pero conservan la capacidad de edición.',
            'Ideal para README y documentación técnica versionada junto al código.'
          ]
        },
        {
          title: 'GitHub / GitLab: Control de versiones para diagramas',
          content:
            'Los diagramas pueden tratarse como cualquier otro artefacto del proyecto, con historial y trazabilidad de cambios.',
          bullets: [
            'Versionado y recuperación de cambios cuando hay iteraciones rápidas.',
            'Trabajo colaborativo mediante ramas y pull requests.',
            'Documentación viva alineada con la evolución del producto.'
          ]
        }
      ]
    },
    {
      title: '4. Integraciones Clave',
      intro:
        'Draw.io se adapta bien a diferentes ecosistemas. Estas integraciones cubren la mayoría de flujos profesionales.',
      subsections: [
        {
          title: 'Ecosistema Atlassian',
          content:
            'Integración nativa con Jira y Confluence. Permite insertar diagramas directamente en tickets y páginas de documentación, manteniendo todo sincronizado y accesible para el equipo.'
        },
        {
          title: 'Google & Microsoft',
          content:
            'Puede usarse con herramientas de Google Workspace y Microsoft 365 para compartir diagramas con perfiles no técnicos.'
        },
        {
          title: 'Desarrollo',
          content:
            'En desarrollo de software, Draw.io ayuda a documentar arquitectura, APIs y decisiones técnicas de manera visual y mantenible.',
          bullets: [
            'Arquitectura de soluciones: representación de componentes, dependencias y flujos de datos.',
            'Diseño de procesos: mapeo de flujos funcionales para análisis y QA.',
            'Onboarding técnico: materiales visuales para acelerar la integración de nuevos miembros.'
          ],
          imageUrl: drawioImage2Placeholder,
          imageAlt: 'Ejemplo de integraciones de Draw.io con herramientas como VS Code, GitHub, Jira y Confluence',
          imageCaption:
            'Draw.io se integra con las herramientas clave del flujo de desarrollo para mejorar documentación y colaboración.',
          imageSize: 'image-medium'
        }
      ]
    },
    {
      title: '5. Buenas prácticas para aprovechar Draw.io',
      intro:
        'La herramienta es potente por sí sola, pero su verdadero valor aparece cuando se usa con criterios de calidad documental.',
      subsections: [
        {
          title: 'Define una convención de diagramado',
          content:
            'Acornpmdar nomenclatura, colores y nivel de detalle evita inconsistencias y reduce el esfuerzo de interpretación entre equipos.'
        },
        {
          title: 'Versiona diagramas junto al código',
          content:
            'Mantener diagramas en el repositorio principal del proyecto asegura que la documentación evolucione al ritmo del producto.',
          bullets: [
            'Incluye diagramas en pull requests cuando existan cambios arquitectónicos.',
            'Usa descripciones de commit claras para explicar el motivo de las modificaciones visuales.'
          ]
        },
        {
          title: 'Piensa en tu audiencia',
          content:
            'No todos los diagramas necesitan el mismo nivel técnico. Ajusta el contenido para desarrolladores, stakeholders o clientes según el contexto.'
        },
        {
          title: 'Actualiza y simplifica',
          content:
            'Un diagrama desactualizado genera más problemas que uno inexistente. Prioriza mantener versiones simples, vigentes y accionables.',
          table: {
            title: 'Checklist de calidad para diagramas en Draw.io',
            headers: ['Criterio', 'Qué revisar'],
            rows: [
              [
                'Claridad visual',
                'Jerarquía de información, legibilidad de etiquetas y uso coherente de conectores.'
              ],
              [
                'Consistencia',
                'Mismos símbolos para conceptos equivalentes en todo el documento.'
              ],
              [
                'Contexto',
                'Título, objetivo y alcance del diagrama para evitar interpretaciones ambiguas.'
              ],
              [
                'Mantenimiento',
                'Fecha de actualización y responsable del contenido técnico.'
              ]
            ]
          }
        },
        {
          title: 'Conclusión',
          content:
            'Draw.io es una herramienta madura, flexible y accesible para documentar software. Si la integras a tu flujo de trabajo y aplicas buenas prácticas de mantenimiento, se convierte en un activo real para la calidad técnica y la colaboración del equipo.'
        },
        {
          title: 'Tutorial básico recomendado',
          content:
            'Para cerrar este blog con una guía práctica, te compartimos un tutorial básico de Draw.io que te ayudará a empezar con los conceptos esenciales y el flujo de trabajo inicial.',
          videoEmbedUrl: 'https://www.youtube.com/embed/mA8AMn2hVpI',
          videoTitle: 'Tutorial básico de Draw.io',
          videoCaption:
            'Video recomendado al final del blog: introducción básica a Draw.io.'
        }
      ]
    }
  ]
};
