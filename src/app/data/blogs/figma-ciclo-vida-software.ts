import type { Blog } from '../../services/blog.models';
import { AUTHORS as a, CATEGORY_MAP as c } from '../blog-catalogs';

export const blogFigmaCicloVidaSoftware: Blog = {
  id: 'figma-ciclo-vida-software',
  title: 'Figma en el ciclo de vida del software: diseno tecnico, handoff y gestion visual del producto',
  excerpt:
    'Una mirada tecnica a Figma como plataforma de diseno y colaboracion para discovery, prototipado, sistemas de diseno, handoff con desarrollo y control del cambio durante el ciclo de vida del software.',
  coverImageUrl:
    'https://images.unsplash.com/photo-1653647054667-c99dc7f914ef?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlnbWF8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000',
  category: c.software,
  tags: ['Figma', 'Ingeniería de Software', 'UX', 'UI', 'Prototipado', 'Dev Mode', 'Design Systems', 'Handoff', 'Frontend', 'Producto Digital', 'Wireframes', 'Colaboración'],
  authors: [a['david-b']],
  date: '2026-04-01',
  readTime: '14 min',
  isStatic: true,
  sections: [
    {
      title: 'Introduccion',
      intro:
        'Figma suele presentarse como una herramienta de interfaz, pero en proyectos de software maduros su alcance es bastante mayor. Bien utilizada, funciona como una capa de coordinacion visual entre negocio, producto, UX, frontend, QA y stakeholders. Eso cambia el modo en que se levantan requerimientos, se validan flujos, se administra el diseno y se reduce la friccion del handoff tecnico hacia implementacion.',
      subsections: [
        {
          title: 'Mas que mockups bonitos',
          content:
            'En un equipo serio, Figma no deberia limitarse a producir pantallas estaticas. Sirve para estructurar componentes, definir tokens, documentar estados, validar interacciones, anticipar dependencias y alinear criterios antes de abrir un sprint de desarrollo. Ese rol lo convierte en un activo de gestion del proceso, no solo de estetica.'
        },
        {
          title: 'Por que importa en ingenieria de software',
          content:
            'Buena parte de los defectos funcionales y de experiencia no nace en el codigo sino en ambiguedades previas: flujos incompletos, estados no contemplados, inconsistencias entre pantallas o falta de trazabilidad entre diseno y ejecucion. Figma ayuda a cerrar esas brechas porque vuelve visibles decisiones que, de otro modo, quedan dispersas en chats, documentos y reuniones.'
        }
      ]
    },
    {
      title: 'Figma como pieza del ciclo de vida del software',
      intro:
        'Su aporte cambia segun la fase del proyecto. La herramienta no reemplaza backlog, arquitectura, pruebas o repositorios, pero si mejora la calidad de los insumos con los que cada fase trabaja.',
      table: {
        title: 'Contribucion de Figma por etapa del ciclo de vida',
        headers: ['Etapa', 'Aporte operativo de Figma', 'Impacto tecnico esperado'],
        rows: [
          [
            'Discovery y levantamiento',
            'Mapas de flujo, wireframes iniciales, escenarios y pantallas de referencia para discutir alcance.',
            'Menos ambiguedad funcional y mejor definicion de requerimientos.'
          ],
          [
            'Analisis',
            'Modelado de journeys, estados, reglas visibles y relacion entre vistas.',
            'Mayor trazabilidad entre necesidad de negocio y comportamiento esperado.'
          ],
          [
            'Diseno de solucion',
            'Componentes, variantes, prototipos, librerias y especificaciones visuales.',
            'Coherencia de interfaz y disminucion de deuda visual.'
          ],
          [
            'Implementacion',
            'Handoff con medidas, estilos, assets, variables y recursos para desarrollo.',
            'Menos retrabajo entre diseno y frontend.'
          ],
          [
            'QA y validacion',
            'Referencia visual para pruebas de flujo, estados vacios, errores y consistencia.',
            'Mayor precision en pruebas funcionales y visuales.'
          ],
          [
            'Evolucion del producto',
            'Versionado de pantallas, expansion del sistema de diseno y comparacion de cambios.',
            'Control mas ordenado del cambio en releases sucesivos.'
          ]
        ]
      },
      imageUrl: 'https://help.figma.com/hc/article_attachments/26975850870551',
      imageAlt: 'Vista general de Figma Dev Mode con navegacion lateral, canvas y panel de inspeccion',
      imageCaption:
        'Dev Mode convierte el archivo de diseno en una interfaz orientada al handoff tecnico y a la inspeccion por parte de desarrollo.',
      imageSize: 'image-large',
      subsections: [
        {
          title: 'Discovery con evidencia visual',
          content:
            'En fases tempranas, Figma ayuda a bajar ideas abstractas a artefactos verificables: flujos de onboarding, formularios, paneles, dashboards o procesos transaccionales. Eso permite discutir requisitos con algo tangible antes de comprometer tiempo de desarrollo.'
        },
        {
          title: 'Analisis orientado a estados',
          content:
            'Un beneficio tecnico importante es que obliga a pensar estados y no solo pantallas ideales. Cuando el equipo modela carga, error, vacio, exito, permisos, responsive y variantes de componentes, el backlog se vuelve mas realista y el frontend deja de descubrir sorpresas en medio de la implementacion.'
        }
      ]
    },
    {
      title: 'Capacidades tecnicas de la herramienta',
      intro:
        'Figma ha evolucionado desde un editor colaborativo a una plataforma de trabajo con funciones que impactan directamente en arquitectura de interfaz, consistencia y entrega a desarrollo.',
      subsections: [
        {
          title: 'Componentes, variantes y Auto Layout',
          content:
            'Los componentes encapsulan patrones reutilizables; las variantes permiten modelar estados como <strong>default</strong>, <strong>hover</strong>, <strong>disabled</strong> o <strong>loading</strong>; y Auto Layout aporta reglas de composicion que se acercan a conceptos de layout reales como direccion, padding, gap y alineacion. Aunque no reemplaza CSS, si aproxima la intencion estructural que luego el equipo implementa en Flexbox o Grid.'
        },
        {
          title: 'Variables y tokens de diseno',
          content:
            'Variables de color, espaciado, texto, radios o valores booleanos permiten pasar de un diseno manual a un sistema gobernable. Esto es clave cuando la UI necesita temas, modos, marcas, escalas tipograficas o consistencia multi-producto. Desde el punto de vista de ingenieria, reduce valores hardcodeados y mejora la gobernanza de decisiones visuales.'
        },
        {
          title: 'Prototipado interactivo',
          content:
            'El prototipado ya no se limita a navegacion basica. Figma permite conectar eventos, transiciones, cambios de variantes, logica basada en variables y simulacion de interacciones complejas. Eso no sustituye una prueba de integracion real, pero si ayuda a validar comportamiento antes de que el equipo invierta esfuerzo en implementarlo.'
        },
        {
          title: 'Dev Mode e inspeccion',
          content:
            'Dev Mode organiza informacion que normalmente el frontend persigue en varios lugares: medidas, espaciados, colores, assets, nombres de capa, codigo generado, enlaces a recursos y estados listos para desarrollo. El valor real no esta en copiar codigo automaticamente, sino en disminuir friccion y contexto perdido entre diseno y ejecucion.'
        }
      ]
    },
    {
      title: 'Gestion del proceso de diseno y handoff tecnico',
      intro:
        'La herramienta ayuda cuando el diseno se trata como parte del proceso de delivery. En ese escenario, el archivo no es un entregable aislado: es una fuente de verdad compartida.',
      imageUrl: 'https://help.figma.com/hc/article_attachments/32233541075479',
      imageAlt: 'Paneles de Figma Dev Mode mostrando propiedades de capa, componentes y exportacion',
      imageCaption:
        'El panel de inspeccion permite traducir una decision visual a propiedades concretas que desarrollo puede revisar, copiar y contrastar.',
      imageSize: 'image-large',
      table: {
        title: 'Problemas comunes de handoff y como Figma los reduce',
        headers: ['Problema', 'Como se manifiesta', 'Uso de Figma para mitigarlo'],
        rows: [
          [
            'Specs ambiguas',
            'Frontend interpreta medidas o estilos de forma distinta a diseno.',
            'Inspeccion de capas, propiedades, tokens y assets desde Dev Mode.'
          ],
          [
            'Estados faltantes',
            'Se desarrolla solo el happy path y luego aparecen huecos funcionales.',
            'Variantes y prototipos que hacen visibles errores, vacios y permisos.'
          ],
          [
            'Inconsistencia entre pantallas',
            'Botones, formularios y espaciados cambian sin control.',
            'Sistema de componentes compartidos y librerias reutilizables.'
          ],
          [
            'Cambios sin trazabilidad',
            'No queda claro que version debe implementar el equipo.',
            'Comparacion de cambios, ready for dev y anotaciones de handoff.'
          ],
          [
            'Dependencia excesiva de reuniones',
            'Cada duda requiere sincronizacion adicional.',
            'Documentacion visual embebida en el propio archivo y recursos vinculados.'
          ]
        ]
      },
      subsections: [
        {
          title: 'Ready for dev como control de entrada',
          content:
            'Marcar pantallas o secciones como listas para desarrollo tiene valor de gestion. Introduce una puerta de calidad previa al sprint: si no hay estados completos, componentes resueltos y recursos asociados, el trabajo aun no deberia considerarse listo.'
        },
        {
          title: 'Anotaciones y contexto',
          content:
            'Las anotaciones son especialmente utiles para explicar reglas de negocio, restricciones, dependencias con backend o comportamiento responsive. En vez de confiar en memoria colectiva, el archivo conserva notas tecnicas donde ocurren las decisiones.'
        },
        {
          title: 'Relacion con backlog y desarrollo',
          content:
            'El mejor resultado aparece cuando cada flujo visual puede mapearse a historias, criterios de aceptacion y componentes de codigo. Figma no reemplaza Jira, Azure Boards o GitHub, pero puede integrarse a ese ecosistema como referencia visual verificable.'
        }
      ]
    },
    {
      title: 'Figma y sistemas de diseno en proyectos escalables',
      intro:
        'Donde Figma demuestra mas madurez tecnica es en la construccion y mantenimiento de sistemas de diseno. Eso impacta directamente en velocidad, consistencia y gobierno del producto.',
      subsections: [
        {
          title: 'Bibliotecas y reutilizacion',
          content:
            'Las bibliotecas permiten distribuir componentes y estilos a varios archivos y equipos. En proyectos medianos o grandes, esto reduce duplicacion y evita que cada feature invente su propia UI. La ganancia no es solo visual: tambien reduce complejidad de mantenimiento.'
        },
        {
          title: 'Tokens como contrato entre diseno y frontend',
          content:
            'Cuando variables de Figma se alinean con tokens del repositorio, la organizacion gana un lenguaje comun. Color principal, spacing 200, radius medium o semantic success dejan de ser decisiones informales y pasan a ser contratos implementables. Esa alineacion facilita theming, accesibilidad y refactorizacion controlada.'
        },
        {
          title: 'Code Connect y enfoque hacia implementacion',
          content:
            'La idea mas potente no es generar fragmentos de codigo generico, sino conectar componentes de diseno con componentes reales del sistema. Cuando la herramienta muestra a desarrollo como debe usarse una pieza existente en el codebase, el handoff deja de ser decorativo y se vuelve accionable.'
        },
        {
          title: 'Escalabilidad de producto',
          content:
            'En equipos con multiples squads, un sistema de diseno mantenido en Figma ayuda a controlar drift visual, acelera onboarding y mejora consistencia entre modulos. Eso influye incluso en estimaciones, porque el equipo implementa patrones conocidos en vez de soluciones nuevas para cada pantalla.'
        }
      ]
    },
    {
      title: 'Aplicacion practica en un flujo de trabajo profesional',
      intro:
        'Una forma tecnica de insertar Figma en el proceso consiste en definir artefactos minimos por fase y criterios de salida antes de pasar al siguiente equipo.',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1661340652915-41641a096443?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000',
      imageAlt: 'Equipo revisando wireframes y decisiones de experiencia en una mesa de trabajo',
      imageCaption:
        'La colaboracion entre producto, UX y desarrollo funciona mejor cuando las decisiones quedan visibles y ordenadas desde etapas tempranas.',
      imageSize: 'image-large',
      subsections: [
        {
          title: 'Flujo sugerido',
          bullets: [
            'Discovery: mapas de flujo, escenarios y wireframes de baja fidelidad.',
            'Analisis: estados funcionales, reglas visibles, navegacion y supuestos pendientes.',
            'Diseno: componentes, variantes, tokens, responsive y prototipo navegable.',
            'Handoff: pantallas listas para desarrollo, anotaciones, assets y enlaces tecnicos.',
            'QA: contraste entre lo implementado y la referencia visual validada.'
          ],
          content:
            'Este recorrido evita que Figma sea usado al inicio y luego abandonado. La herramienta aporta mas valor cuando acompana todo el trayecto desde la definicion hasta la verificacion.'
        },
        {
          title: 'Practicas de gobierno recomendadas',
          bullets: [
            'Nombrar componentes, variables y paginas con convenciones consistentes.',
            'Separar exploracion, propuestas aprobadas y assets listos para desarrollo.',
            'No aprobar pantallas sin contemplar loading, error, vacio y responsive.',
            'Mantener librerias y tokens alineados con el sistema real de frontend.',
            'Vincular diseno con historias, issues o documentacion externa cuando aplique.'
          ],
          content:
            'Sin disciplina, cualquier archivo termina siendo un lienzo caotico. La herramienta es potente, pero el orden metodologico sigue siendo responsabilidad del equipo.'
        }
      ]
    },
    {
      title: 'Ventajas, limites y criterio tecnico de adopcion',
      intro:
        'Figma resuelve problemas reales, pero no conviene romantizar la herramienta. Su valor depende del nivel de integracion con el proceso de producto y de ingenieria.',
      subsections: [
        {
          title: 'Ventajas principales',
          bullets: [
            'Colaboracion sincrona y asincrona sobre una misma fuente visual.',
            'Mejor handoff tecnico gracias a inspeccion, variables y anotaciones.',
            'Capacidad de modelar sistemas de diseno y patrones reutilizables.',
            'Validacion temprana de flujos con prototipos antes de implementar.',
            'Reduccion de deuda visual e inconsistencias entre pantallas.'
          ],
          content:
            'Cuando se integra correctamente, Figma reduce retrabajo y mejora la calidad de la conversacion entre roles no tecnicos y tecnicos.'
        },
        {
          title: 'Limites que hay que aceptar',
          bullets: [
            'No reemplaza arquitectura de software, backlog, pruebas ni documentacion tecnica profunda.',
            'El codigo generado debe verse como referencia, no como salida de produccion.',
            'Un sistema de diseno mal gobernado en Figma escala el desorden, no la calidad.',
            'Los prototipos no representan performance, latencia, datos reales ni seguridad.'
          ],
          content:
            'La herramienta es excelente para especificar interaccion y estructura visual, pero no debe confundirse con una solucion integral para todo el ciclo de entrega.'
        }
      ]
    },
    {
      title: 'Conclusion',
      intro:
        'Figma ayuda en el ciclo de vida del software porque hace visible lo que normalmente queda implicito: estructura, estados, decisiones visuales, dependencias y contexto para desarrollo. Su mejor uso no es producir pantallas aisladas, sino sostener un flujo continuo entre descubrimiento, diseno, implementacion y validacion.',
      subsections: [
        {
          title: 'Cierre tecnico',
          content:
            'Desde una perspectiva de ingenieria, Figma aporta cuando el equipo lo usa para estandarizar componentes, gobernar tokens, preparar handoff, registrar contexto y disminuir incertidumbre antes de codificar. En ese escenario, el diseno deja de ser una fase decorativa y pasa a ser una parte operativa del delivery.'
        },
        {
          title: 'Video recomendado',
          content:
            'Este video muestra un caso aplicado de como el prototipado y el trabajo en Figma ayudan a aterrizar decisiones de producto antes de pasar a implementacion. Vale la pena verlo despues del articulo para conectar teoria con una experiencia real de trabajo.',
          videoEmbedUrl: 'https://www.youtube.com/embed/CQw9pjonUxs',
          videoTitle: 'How Code and Theory helped redesign YETI.com using Figma',
          videoCaption: 'Caso practico en video sobre prototipado y colaboracion con Figma en un rediseño de producto.'
        }
      ]
    }
  ]
};
