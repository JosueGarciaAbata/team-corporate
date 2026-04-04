import type { Blog } from '../../services/blog.models';
import { AUTHORS as a, CATEGORY_MAP as c } from '../blog-catalogs';

export const blogJiraConfluence: Blog = {
  id: 'jira-confluence-gestion-trazabilidad',
  title: 'Jira y Confluence: Gestion y Trazabilidad en el Ciclo de Vida del Software',
  excerpt:
    'Una mirada tecnica y practica a Jira (gestion del trabajo) + Confluence (documentacion viva) como un sistema integrado para trazabilidad: desde requerimientos y decisiones, hasta issues, PRs, builds, releases y evidencias de entrega.',
  coverImageUrl: '/assets/blog/jira/jira-integration-hero-image.png',
  category: c.software,
  tags: [
    'Jira',
    'Confluence',
    'Atlassian',
    'Ingeniería de Software',
    'Gestión de Proyectos',
    'Trazabilidad',
    'Requerimientos',
    'Metodologías Ágiles',
    'Scrum',
    'Kanban',
    'Documentación',
    'JQL',
    'Workflows',
    'Release Management',
    'CI/CD',
    'Git'
  ],
  authors: [a['david-m']],
  date: '2026-04-03',
  readTime: '14 min',
  isStatic: true,
  sections: [
    {
      title: 'Introduccion: Gestion, contexto y la brecha de trazabilidad',
      intro:
        'En el desarrollo de software, el problema rara vez es "hacer tareas"; el problema es sostener contexto y mantener trazabilidad. Un requerimiento cambia, un flujo se ajusta, una decision arquitectonica se toma en una reunion; si esos cambios no quedan conectados con el trabajo de implementacion, aparecen inconsistencias: se entrega algo distinto a lo acordado, no se sabe por que se implemento asi, y es dificil auditar o justificar el avance. Jira y Confluence atacan ese punto cuando se usan como un mismo sistema: Jira gestiona el trabajo; Confluence captura el conocimiento y las decisiones.',
      subsections: [
        {
          title: 'Mas alla de tareas y documentos sueltos',
          content:
            'Jira suele verse como "tablero de tickets" y Confluence como "wiki". El valor real aparece cuando se conectan: especificaciones (Confluence) enlazadas a epicas/historias/tareas (Jira), y desde Jira conectadas a cambios en repositorio, builds, releases y despliegues. Esa cadena reduce ambiguedad, mejora la comunicacion entre roles (negocio/analisis/dev/QA) y crea evidencia de que lo entregado corresponde al analisis inicial.'
        }
      ]
    },
    {
      title: 'Arquitectura de operacion: un sistema integrado',
      intro:
        'Pensarlo como arquitectura ayuda a implementarlo bien. En vez de usar dos herramientas separadas, se diseña un flujo donde cada artefacto vive donde corresponde y se conecta con el siguiente:',
      table: {
        title: 'Arquitectura operacional (artefacto -> herramienta -> salida)',
        headers: ['Artefacto', 'Donde vive', 'Como se conecta', 'Resultado esperado'],
        rows: [
          [
            'Requerimientos / PRD / historias de usuario (texto)',
            'Confluence',
            'Smart Links + macros de Jira (issues embebidos)',
            'Una fuente de verdad legible por todo el equipo'
          ],
          [
            'Trabajo planificado (epicas, historias, bugs, tareas)',
            'Jira',
            'Links a paginas de Confluence + attachments + comments',
            'Ejecucion visible y controlada por workflow'
          ],
          [
            'Codigo (commits, PRs, branches)',
            'Git (GitHub/GitLab/Bitbucket)',
            'Vinculo por clave de issue + integracion de development panel',
            'Pruebas y revision conectadas al ticket'
          ],
          [
            'Builds, releases y despliegues',
            'Herramienta CI/CD',
            'Enlaces desde Jira a pipelines, ambientes y versiones',
            'Evidencia de entrega y trazabilidad tecnica'
          ],
          [
            'Decisiones (ADRs), acuerdos y evidencias',
            'Confluence',
            'Plantillas + page history + comentarios + links a Jira',
            'Razonamiento preservado y auditable'
          ]
        ]
      },
      imageUrl: '/assets/blog/jira/jira-treaceability.png',
      imageAlt: 'Esquema de flujo entre requerimientos, issues, codigo y despliegues',
      imageCaption:
        'El objetivo es conectar el ciclo completo: requerimiento -> trabajo -> codigo -> entrega -> evidencia.',
      imageSize: 'image-large',
      subsections: [
        {
          title: 'Jira responde al "que / quien / cuando"; Confluence al "por que / como"',
          content:
            'En Jira se ve el estado de ejecucion: backlog, sprint, responsable, impedimentos, estimaciones. En Confluence se preserva el contexto: definicion funcional, criterios de aceptacion, decisiones, riesgos y acuerdos. La integracion permite navegar de Confluence a Jira (y viceversa) sin perder el hilo.'
        },
        {
          title: 'Evitar duplicar la verdad',
          content:
            'Un anti-patron comun es copiar/pegar la especificacion en el ticket y luego tener versiones distintas. Una practica sana es: Confluence contiene la especificacion y el ticket referencia esa pagina (y copia solo lo minimo operativo: resumen, alcance inmediato, DoD).'
        }
      ]
    },
    {
      title: 'Jira en detalle: jerarquia, workflows y reporting',
      intro:
        'Jira escala bien cuando se modela con disciplina: tipos de issue claros, un workflow que refleje el proceso real y campos que capturen lo minimo necesario para decidir.',
      subsections: [
        {
          title: 'Jerarquia tipica (y por que importa)',
          content:
            'Para que la trazabilidad se entienda como un proceso (y no solo como una lista de issues), esta secuencia puede leerse en formato de escalera, similar a un diagrama de actividades:<br/><br/><strong>A. Inicio (Analista / PO)</strong>: define el objetivo en Confluence y crea la Epica en Jira.<br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;↘ B. Definicion funcional</strong>: redacta Historias con criterios de aceptacion y enlaces al contexto.<br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↘ C. Ejecucion tecnica (Equipo)</strong>: divide en Subtareas y Tasks de soporte; luego desarrolla y vincula commits/PRs al issue.<br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↘ D. Validacion (QA/Equipo)</strong>: ejecuta pruebas y registra Bugs cuando hay desviaciones.<br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↘ E. Punto de decision (Lider / Cliente)</strong>: ¿cumple criterios de aceptacion?<br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ Si cumple</strong>: pasa a Done y se asocia a Version/Release.<br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ Si no cumple</strong>: regresa a In Progress con ajustes, evidencia y nueva validacion.<br/><br/>Este esquema permite visualizar con claridad el avance por etapas y la asignación de responsabilidades. En la práctica, la jerarquía entre épicas, historias y subtareas o bugs aporta control operacional, mientras que el flujo basado en decisiones garantiza la trazabilidad de extremo a extremo: se puede identificar qué se solicitó, quién lo implementó, cómo se validó y en qué release quedó formalmente entregado.'
        },
        {
          title: 'Workflow como contrato del equipo',
          content:
            'Un flujo demasiado simple (To Do / Doing / Done) sirve al inicio, pero en equipos con QA y releases conviene modelar estados como: Ready, In Progress, Code Review, QA, Ready to Deploy, Done. El beneficio es doble: visibilidad real y reglas de calidad (Definition of Done) por estado.'
        },
        {
          title: 'Reporting: de tablero a decisiones',
          content:
            'Con tableros Scrum/Kanban, dashboards y consultas JQL, Jira permite responder preguntas de gestion: que esta bloqueado, que se mueve lento, que se acumula, cual es el throughput y donde estan los cuellos de botella. Lo clave es que los reportes se basen en datos consistentes (campos y estados bien usados).'
        }
      ],
      bullets: [
        'Backlog priorizado con criterios (valor, riesgo, dependencia).',
        'Estimacion y capacidad por sprint (si se usa Scrum).',
        'Versiones / releases para agrupar entregas y generar notas.',
        'Automatizaciones (assign, transiciones, notificaciones) para reducir trabajo manual.',
        'Campos para trazabilidad: componente, etiqueta, prioridad, ambiente, severidad (en bugs).'
      ]
    },
    {
      title: 'Confluence en detalle: documentacion viva y reutilizable',
      intro:
        'Confluence funciona bien cuando la documentacion no es un "cementerio". La idea es que el conocimiento sea navegable, versionado y util en el dia a dia.',
      subsections: [
        {
          title: 'Espacios, arbol de paginas y plantillas',
          content:
            'La organizacion por espacios y un arbol de paginas bien pensado reduce perdida de informacion. Las plantillas (PRD, User Story Spec, ADR, Meeting Notes, Retro) estandarizan calidad y evitan que cada quien documente con un formato distinto.'
        },
        {
          title: 'Macros y "page properties" para control',
          content:
            'Las macros permiten construir indices automaticos, tablas resumen y listas por propiedades (por ejemplo: decisiones por fecha, riesgos por estado, requerimientos por modulo). Eso convierte Confluence en una base consultable, no solo texto.'
        },
        {
          title: 'Control de cambios y auditoria',
          content:
            'El historial de pagina, comentarios y permisos ayudan a mantener disciplina: se puede ver quien cambio que, cuando y por que. Para proyectos academicos o con evaluacion, esto aporta evidencia clara del proceso.'
        }
      ],
      bullets: [
        'Decision log (ADRs) enlazado a epicas de Jira.',
        'Especificaciones tecnicas con diagramas embebidos (UML/arquitectura).',
        'Documentacion de APIs, endpoints o contratos si aplica.',
        'Notas de sprint y retrospectivas para mejora continua.'
      ]
    },
    {
      title: 'Integraciones clave (Jira + Confluence + el resto del stack)',
      intro:
        'La integracion no se limita a vincular un ticket con una pagina. El ecosistema Atlassian suele conectarse con el stack completo de entrega para hacer trazabilidad tecnica real.',
      table: {
        title: 'Integraciones comunes y que aportan a la trazabilidad',
        headers: ['Integracion', 'Que se conecta', 'Aporte practico'],
        rows: [
          [
            'Git (GitHub/GitLab/Bitbucket)',
            'Branches, commits, PRs/MRs, estado de revision',
            'Ver desarrollo asociado a un issue y evitar trabajo sin ticket'
          ],
          [
            'CI/CD (Jenkins, GitHub Actions, GitLab CI, etc.)',
            'Pipelines, builds, artefactos, ambientes',
            'Evidencia automatizada de que una tarea fue build/test/deploy'
          ],
          [
            'ChatOps (Slack / Microsoft Teams)',
            'Notificaciones, cambios de estado, incidentes',
            'Menos friccion en coordinacion y mayor visibilidad en tiempo real'
          ],
          [
            'Docs y diagramas',
            'Embeds/Smart Links (Figma, Miro, diagrams.net, Drive)',
            'Centralizar contexto sin copiar archivos por todos lados'
          ],
          [
            'Calendario y reuniones',
            'Reuniones, agendas, minutos',
            'Mantener acuerdos y acciones enlazados al trabajo'
          ]
        ]
      },
      subsections: [
        {
          title: 'Integraciones que valen oro en equipos de desarrollo',
          content:
            'Las mas utiles son las que reducen trabajo manual y aumentan evidencia: linking automatico de PRs por clave del issue, transiciones por eventos (merge, deploy) y dashboards que muestren el flujo de entrega de extremo a extremo.'
        }
      ]
    },
    {
      title: 'Trazabilidad end-to-end: del requerimiento al despliegue',
      intro:
        'La trazabilidad se vuelve real cuando puedes responder, en minutos, preguntas como: "en que estado esta este requerimiento?", "que codigo lo implemento?", "en que release salio?" y "donde esta la evidencia de QA?".',
      subsections: [
        {
          title: 'Cadena minima recomendada',
          content:
            'Una cadena simple y efectiva puede leerse tambien en formato secuencial:<br/><br/><strong>A. Pagina de requisito (Confluence)</strong><br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;↘ B. Epica / Historia (Jira)</strong><br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↘ C. Subtareas tecnicas y Bugfixes</strong><br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↘ D. PRs / Commits vinculados</strong><br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↘ E. Pipeline (build, test, deploy)</strong><br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↘ F. Version / Release</strong><br/><br/>La clave no es agregar burocracia, sino mantener consistencia en los enlaces entre artefactos para sostener trazabilidad de extremo a extremo.'
        }
      ],
      table: {
        title: 'Ejemplo de matriz de trazabilidad (simplificada)',
        headers: ['Elemento', 'Ejemplo', 'Se enlaza con'],
        rows: [
          ['Requerimiento', 'RF-12: "Crear reporte mensual"', 'Pagina Confluence + Epica'],
          ['Epica', 'EPIC-3 Reportes', 'Historias'],
          ['Historia', 'STORY-21 Reporte mensual exportable', 'Subtareas + PR'],
          ['Subtarea', 'TASK-88 Endpoint /reports/monthly', 'Commit + Build'],
          ['PR', 'Merge a main', 'Issue + pipeline + release']
        ]
      }
    },
    {
      title: 'Aplicacion en el Analisis y Diseno de Software',
      intro:
        'En analisis y diseno, Jira + Confluence se vuelve un marco de trabajo: convierte acuerdos en artefactos claros y luego los traduce a ejecucion sin perder trazabilidad.',
      subsections: [
        {
          title: '1) Requerimientos con criterios de aceptacion',
          content:
            'En Confluence se documentan los requerimientos funcionales y no funcionales con ejemplos, reglas y criterios de aceptacion. Esto reduce interpretaciones y hace que QA y desarrollo tengan una base comun.'
        },
        {
          title: '2) Modelos y diagramas como evidencia de diseno',
          content:
            'Los productos de diseno (casos de uso, diagramas de actividades, clases o arquitectura) se embeben en Confluence y se enlazan a las epicas/historias en Jira. Cuando una decision cambia, el enlace evita que el equipo implemente con un diagrama desactualizado.'
        },
        {
          title: '3) Refinamiento y planeacion con backlog trazable',
          content:
            'Durante refinement, el equipo convierte el analisis (Confluence) en trabajo (Jira): epicas, historias y subtareas. La regla practica: ninguna tarea critica deberia existir sin enlace al contexto que la justifica.'
        },
        {
          title: '4) Cierre con evidencia (y no solo "Done")',
          content:
            'El cierre ideal incluye evidencia: link a PR, resultado de pruebas, notas de release o captura del comportamiento. Esa evidencia se referencia desde el issue y, si aplica, se resume en Confluence para stakeholders.'
        }
      ]
    },
    {
      title: 'Buenas practicas (y errores comunes)',
      intro:
        'Estas herramientas aportan valor cuando el equipo acuerda reglas simples y las sigue. Sin eso, se vuelven solo otra capa de trabajo manual.',
      subsections: [
        {
          title: 'Practicas recomendadas',
          content:
            'Definir un workflow realista, usar plantillas de documentacion, exigir enlaces a contexto, y automatizar lo repetitivo. Mantener la documentacion como "viva": corta, actual y facil de navegar.'
        },
        {
          title: 'Errores comunes',
          content:
            'Duplicar especificaciones (Confluence vs Jira), crear tickets sin criterio de aceptacion, no usar claves en commits/PRs, o tener workflows tan complejos que nadie los sigue. El resultado es perdida de trazabilidad y datos inutiles para reporting.'
        }
      ],
      bullets: [
        'Regla 1: 1 historia = 1 valor verificable con criterios claros.',
        'Regla 2: todo PR/commit que entregue valor debe referenciar el issue.',
        'Regla 3: Confluence concentra la especificacion; Jira concentra la ejecucion.',
        'Regla 4: automatizar transiciones y notificaciones cuando sea posible.'
      ]
    },
    {
      title: 'Recurso complementario en video',
      intro:
        'Como apoyo visual para comprender mejor como Jira y Confluence se integran en un flujo de trazabilidad, este video ofrece una vision practica sobre como organizar y ejecutar trabajo con estas herramientas.',
      subsections: [
        {
          title: 'Flujo de trabajo integrado',
          content:
            'El siguiente video muestra de forma didactica como Jira y Confluence trabajan juntos para sostener un proceso de desarrollo claro, trazable y orientado al valor.',
          videoEmbedUrl: 'https://www.youtube.com/watch?v=GPOWZSxEslU',
          videoTitle: 'Jira y Confluence: Gestion integrada',
          videoCaption:
            'Video recomendado: perspectiva practica sobre integracion de Jira y Confluence en flujos de trabajo y trazabilidad end-to-end.'
        }
      ]
    }
  ]
};
