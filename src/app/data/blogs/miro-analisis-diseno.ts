import type { Blog } from '../../services/blog.models';
import { AUTHORS as a, CATEGORY_MAP as c } from '../blog-catalogs';

export const blogMiroAnalisisDiseno: Blog = {
  id: 'miro-analisis-diseno-software',
  title: 'Miro como herramienta colaborativa para el analisis y diseno de software',
  excerpt:
    'Una revision de Miro como herramienta de analisis y diseno de software, destacando su facilidad de uso, funcionalidades, colaboracion en tiempo real e integracion en procesos de trabajo de equipo.',
  coverImageUrl: '/assets/blog/miro/portada.jpg',
  category: c.software,
  tags: ['Miro', 'Ingeniería de Software', 'Colaboración', 'Discovery', 'Workflows', 'Brainstorming', 'Wireframes', 'Análisis', 'Diseño', 'Procesos', 'Requerimientos', 'Trabajo en Equipo'],
  authors: [a.joel, a.josue],
  date: '2026-03-31',
  readTime: '10 min',
  isStatic: true,
  sections: [
    {
      title: 'Introduccion',
      intro:
        'En proyectos de software, las primeras decisiones suelen tomarse mucho antes de escribir codigo: identificar el problema, ordenar ideas, acordar alcance, entender actores y definir como se va a construir la solucion. Cuando estas actividades se hacen con herramientas dispersas, aparecen versiones contradictorias, perdida de contexto y retrabajo. Miro surge como una respuesta practica a ese problema: una pizarra digital colaborativa que centraliza la construccion visual de ideas, modelos y flujos de trabajo.',
      subsections: [
        {
          title: 'Relevancia para analisis y diseno',
          content:
            'En el contexto de analisis y diseno de software, Miro no reemplaza al modelado tecnico formal ni a la documentacion final del proyecto; mas bien actua como una capa de trabajo colaborativo que acelera la exploracion y la toma de decisiones. Permite pasar de conversaciones abstractas a artefactos visuales concretos: mapas de actores, matrices de requerimientos, diagramas de flujo, borradores de arquitectura y wireframes tempranos. Esa transicion temprana reduce ambiguedades y ayuda a alinear al equipo desde etapas iniciales.'
        },
        {
          title: 'Referencia del taller',
          content:
            'Este articulo toma como referencia principal el video del taller: https://www.youtube.com/watch?v=rXyyjgL5sJA, complementando sus ideas con una lectura aplicada al trabajo de equipos de desarrollo.'
        }
      ]
    },
    {
      title: 'Que es Miro y como funciona',
      intro:
        'Miro es una plataforma de pizarra digital en linea orientada al trabajo visual colaborativo. Su unidad principal es el tablero, un espacio donde el equipo puede construir, mover y conectar informacion de manera flexible.',
      subsections: [
        {
          title: 'Logica de uso por tableros',
          content:
            'Cada tablero funciona como un lienzo compartido donde se integran notas, texto, formas, conectores, imagenes, enlaces y marcos para organizar secciones. En lugar de trabajar en documentos separados por persona, el equipo trabaja sobre un mismo contexto visual, lo que facilita discutir alcance, priorizar requerimientos y visualizar dependencias.'
        },
        {
          title: 'Elementos visuales y plantillas',
          content:
            'La herramienta ofrece componentes listos para estructurar sesiones: notas adhesivas para ideas, diagramas para procesos, marcos para dividir etapas y plantillas para dinamicas como lluvia de ideas, mapeo de procesos o retrospectivas. Esto reduce friccion al iniciar una sesion porque el equipo no parte de cero y puede enfocarse en la calidad del analisis, no en dibujar desde cero cada estructura.'
        },
        {
          title: 'Edicion compartida y organizacion',
          content:
            'La colaboracion en tiempo real permite que varias personas editen simultaneamente el mismo tablero. En reuniones remotas o hibridas, esto mejora la participacion porque cada integrante puede aportar directamente en el espacio de trabajo. Para proyectos de software, esa simultaneidad es valiosa en talleres de requerimientos, sesiones de descubrimiento y revision de soluciones.'
        }
      ]
    },
    {
      title: 'El valor del enfoque colaborativo',
      intro:
        'El principal diferencial de Miro no es solo su capacidad de dibujar diagramas, sino su aporte al proceso colaborativo. En software, donde participan perfiles funcionales y tecnicos, la colaboracion efectiva es un factor de calidad.',
      imageUrl: '/assets/blog/miro/team-collaboration.jpg',
      imageAlt: 'Equipo colaborando en una pizarra digital de Miro con ideas y notas',
      imageCaption: 'Trabajo colaborativo en tiempo real para construir y depurar ideas de forma conjunta.',
      imageSize: 'image-large',
      subsections: [
        {
          title: 'Co-creacion y consenso',
          content:
            'Durante actividades de descubrimiento, es comun que distintas areas tengan perspectivas parciales del problema. Miro facilita reunir esas miradas en un solo tablero para convertir opiniones dispersas en decisiones trazables. Al visualizar acuerdos y desacuerdos, el equipo puede cerrar definiciones con mayor claridad.'
        },
        {
          title: 'Talleres remotos y asincronos',
          content:
            'Ademas del trabajo en vivo, los tableros pueden evolucionar asincronamente: una persona deja aportes y otra los retoma mas tarde, manteniendo continuidad. Esta dinamica es util cuando el equipo trabaja con horarios diferentes o necesita iterar propuestas entre reuniones.'
        },
        {
          title: 'Comunicacion entre perfiles mixtos',
          content:
            'En proyectos de software, no todos comparten el mismo lenguaje tecnico. Un tablero visual bien estructurado funciona como puente entre negocio, analistas, disenadores y desarrolladores. Esa traduccion visual reduce errores de interpretacion y acelera la validacion de decisiones.'
        }
      ]
    },
    {
      title: 'Miro en actividades de analisis y diseno',
      intro:
        'En un taller de analisis y diseno, Miro aporta valor cuando se utiliza con objetivo metodologico: transformar informacion dispersa en artefactos claros para decidir y ejecutar mejor.',
      table: {
        title: 'Actividad de analisis/diseno y aporte de Miro',
        headers: ['Actividad', 'Como apoya Miro en la practica'],
        rows: [
          [
            'Identificacion de actores',
            'Permite mapear usuarios, roles y relaciones en un mismo lienzo para acordar alcance y responsabilidades.'
          ],
          [
            'Levantamiento de requerimientos',
            'Facilita capturar ideas con notas, agrupar por categorias y priorizar en sesiones colaborativas.'
          ],
          [
            'Requerimientos funcionales y no funcionales',
            'Ayuda a separar y organizar criterios por tipo, incluyendo restricciones tecnicas y de negocio.'
          ],
          [
            'Casos de uso',
            'Permite estructurar escenarios, actores y flujos para validar comportamiento esperado antes de modelado formal.'
          ],
          [
            'Arquitectura general',
            'Sirve para bosquejar componentes, limites de sistema e interacciones iniciales para discutir alternativas.'
          ],
          [
            'Mockups y wireframes',
            'Permite prototipos tempranos de baja o media fidelidad para validar navegacion y contenido rapidamente.'
          ],
          [
            'Organizacion de procesos',
            'Facilita diagramar workflows con responsables, entradas, salidas y puntos de control.'
          ]
        ]
      },
      subsections: [
        {
          title: 'Brainstorming y organizacion inicial',
          content:
            'Para fases tempranas, Miro funciona muy bien como espacio de ideacion estructurada: se generan propuestas, se agrupan por afinidad y se convierten en lineas de trabajo accionables. Este paso ayuda a pasar de ideas sueltas a un backlog inicial mejor argumentado.',
          imageUrl: '/assets/blog/miro/brainstorming.jpg',
          imageAlt: 'Sesion de brainstorming colaborativo en tablero de Miro',
          imageCaption: 'La ideacion visual permite converger mas rapido hacia decisiones utiles para el proyecto.',
          imageSize: 'image-medium'
        },
        {
          title: 'Mockups y wireframes',
          content:
            'En diseno de soluciones, los wireframes de baja fidelidad ayudan a validar estructura, jerarquia visual y flujo de navegacion sin depender todavia de desarrollo frontend. Miro permite construir estos bocetos de forma colaborativa para discutirlos con negocio y usuarios clave.',
          imageUrl: '/assets/blog/miro/ui_wireframes.jpg',
          imageAlt: 'Construccion de wireframes y mockups para una interfaz de software',
          imageCaption: 'El trabajo visual temprano reduce cambios costosos en fases avanzadas de implementacion.',
          imageSize: 'image-medium'
        },
        {
          title: 'Procesos y workflows',
          content:
            'Tambien es util para describir procesos completos: desde el ingreso de una solicitud hasta su cierre. Al visualizar decisiones, bifurcaciones y responsables, el equipo detecta cuellos de botella, dependencias y puntos donde hacen falta reglas de negocio.',
          imageUrl: '/assets/blog/miro/workflow.jpg',
          imageAlt: 'Mapa de flujo de trabajo modelado en Miro',
          imageCaption: 'Modelar procesos de extremo a extremo mejora alineacion y trazabilidad operativa.',
          imageSize: 'image-medium'
        }
      ]
    },
    {
      title: 'Aplicacion practica en proyectos de software',
      intro:
        'En un proyecto academico o empresarial, Miro aporta cuando se integra como espacio de trabajo del equipo y no solo como pizarra ocasional. Un uso efectivo puede organizarse por etapas concretas.',
      subsections: [
        {
          title: 'Ejemplo de uso por fases',
          content:
            'En inicio de proyecto, el equipo puede construir un tablero de descubrimiento con objetivos, actores y alcance. Luego, en analisis, definir requerimientos funcionales y no funcionales, priorizarlos y vincularlos a casos de uso. En diseno, bosquejar arquitectura y wireframes. Finalmente, en planificacion, convertir el resultado en tareas implementables para desarrollo y pruebas.'
        },
        {
          title: 'Coordinacion y trazabilidad',
          content:
            'Cuando cada fase deja evidencia visual en el tablero, se reduce la perdida de contexto entre reuniones. Esto mejora la coordinacion porque todos pueden revisar rapidamente por que se tomo una decision y que informacion la respaldo.'
        },
        {
          title: 'Mas que dibujar',
          content:
            'Su valor real esta en estructurar pensamiento colaborativo. Es decir, convertir conversaciones en artefactos utiles para decidir, comunicar y ejecutar. Por eso, bien utilizada, Miro mejora tanto la calidad del analisis como la eficiencia del trabajo en equipo.'
        }
      ]
    },
    {
      title: 'Justificacion segun los criterios del taller',
      intro:
        'Bajo los criterios solicitados en el taller de herramientas de analisis y diseno, Miro se justifica por su aporte metodologico y operativo en equipos de software.',
      table: {
        title: 'Criterio y aporte de Miro',
        headers: ['Criterio', 'Aporte de Miro'],
        rows: [
          [
            'Facilidad de uso',
            'Interfaz visual intuitiva, baja curva de entrada para iniciar sesiones y organizar informacion sin capacitacion extensa.'
          ],
          [
            'Funcionalidades',
            'Tableros, notas, conectores, marcos, plantillas y recursos visuales para ideacion, analisis, diseno y mapeo de procesos.'
          ],
          [
            'Entorno colaborativo',
            'Edicion simultanea, aportes en tiempo real y continuidad asincrona para equipos distribuidos.'
          ],
          [
            'Integracion',
            'Capacidad de integrarse con ecosistemas de gestion y colaboracion para conectar analisis visual con ejecucion del trabajo.'
          ]
        ]
      },
      subsections: [
        {
          title: 'Facilidad de uso',
          content:
            'Miro permite empezar rapido: abrir un tablero, crear bloques y ordenar informacion de manera inmediata. Esa simplicidad es clave en contextos academicos y profesionales, donde el tiempo de sesion suele ser limitado y se necesita producir resultados visibles en poco tiempo.'
        },
        {
          title: 'Funcionalidades',
          content:
            'Sus capacidades cubren tareas frecuentes del analisis y diseno: capturar ideas, estructurar requerimientos, representar flujos y construir prototipos tempranos. La herramienta admite tanto trabajo divergente (generar muchas alternativas) como convergente (depurar y decidir).' 
        },
        {
          title: 'Entorno colaborativo',
          content:
            'La colaboracion en tiempo real mejora la calidad de las decisiones porque incorpora perspectivas distintas en una misma sesion. Esto es especialmente importante cuando el equipo combina perfiles de negocio, analisis, diseno y desarrollo.'
        },
        {
          title: 'Integracion',
          content:
            'En un proceso profesional, el analisis visual necesita conectarse con herramientas de seguimiento, documentacion y comunicacion. Miro aporta en ese punto al formar parte de un flujo de trabajo mas amplio, evitando que el tablero quede aislado.'
        }
      ]
    },
    {
      title: 'Ventajas y limitaciones',
      intro:
        'Una evaluacion seria requiere reconocer tanto fortalezas como limites. Miro es potente para colaboracion visual, pero su efectividad depende de como se use dentro del proceso del equipo.',
      subsections: [
        {
          title: 'Ventajas principales',
          bullets: [
            'Centraliza ideas, decisiones y artefactos visuales en un solo espacio compartido.',
            'Acelera sesiones de analisis, ideacion y definicion de alcance.',
            'Mejora alineacion entre perfiles tecnicos y no tecnicos mediante lenguaje visual.',
            'Facilita trabajo remoto e hibrido con participacion simultanea del equipo.',
            'Permite pasar de borradores conceptuales a insumos accionables para el proyecto.'
          ],
          content: 'Cuando se acompana de una metodologia clara, sus ventajas se reflejan en menos ambiguedad, mejor comunicacion y mayor velocidad para converger en decisiones.'
        },
        {
          title: 'Limitaciones razonables',
          bullets: [
            'Sin disciplina de facilitacion, un tablero puede volverse desordenado rapidamente.',
            'No sustituye herramientas especializadas de modelado tecnico formal o documentacion definitiva.',
            'Puede requerir acuerdos de equipo sobre nomenclatura y estructura para mantener trazabilidad.',
            'Su valor disminuye si no existe un proceso para convertir lo visual en tareas ejecutables.'
          ],
          content: 'Estas limitaciones no invalidan la herramienta; mas bien recuerdan que su impacto depende del metodo de trabajo y de la madurez colaborativa del equipo.'
        }
      ]
    },
    {
      title: 'Conclusion',
      intro:
        'Miro es una herramienta valiosa para analisis y diseno de software porque fortalece el trabajo colaborativo donde mas importa: en la construccion temprana de entendimiento compartido. Facilita identificar actores, organizar requerimientos, representar procesos, bosquejar arquitectura y validar ideas antes de implementar.',
      subsections: [
        {
          title: 'Cierre para el contexto del taller',
          content:
            'Bajo los criterios de facilidad de uso, funcionalidades, entorno colaborativo e integracion, Miro presenta una justificacion solida para contextos academicos y profesionales. No es solo una pizarra para dibujar: es un entorno de coordinacion visual que ayuda a pensar mejor en equipo, decidir con mas evidencia y ejecutar con mayor coherencia.'
        },
        {
          title: 'Tutorial recomendado para reforzar el contenido',
          content:
            'Para comprender este blog de manera mas clara y aplicada, aqui esta un tutorial practico de Miro. Te recomendamos verlo al finalizar la lectura para conectar la teoria con una demostracion paso a paso.',
          videoEmbedUrl: 'https://www.youtube.com/embed/rXyyjgL5sJA',
          videoTitle: 'Como usar MIRO app | Trabajo colaborativo online',
          videoCaption: 'Tutorial en video: uso de Miro en trabajo colaborativo online.'
        }
      ]
    }
  ]
};
