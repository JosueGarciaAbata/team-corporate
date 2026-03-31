import type { Blog } from '../../services/blog.models';
import { AUTHORS as a, CATEGORY_MAP as c } from '../blog-catalogs';

const balsamiqCoverPlaceholder = '/assets/blog/balsamiq/wiref1.jpg';
const balsamiqImage1Placeholder = '/assets/blog/balsamiq/wiref2.png';
const balsamiqImage2Placeholder = '/assets/blog/balsamiq/logwire.jpg';
const balsamiqImage3Placeholder = '/assets/blog/balsamiq/wiref1.jpg';

export const blogBalsamiqWireframes: Blog = {
  id: 'balsamiq-wireframes',
  title: 'Balsamiq: una herramienta práctica para transformar ideas en interfaces claras',
  excerpt:
    'Una mirada a cómo Balsamiq facilita el análisis y diseño inicial de software mediante wireframes simples, colaborativos y fáciles de entender.',
  coverImageUrl: balsamiqCoverPlaceholder,
  category: c.software,
  authors: [a.josue],
  date: '2026-03-31',
  readTime: '11 min',
  isStatic: true,
  sections: [
    {
      title: 'Introducción',
      intro:
        'En el desarrollo de software, muchas veces los problemas no aparecen por falta de programación, sino por falta de claridad. Una idea puede parecer correcta en conversación, pero al momento de llevarla a una pantalla surgen dudas sobre la estructura, la navegación o la información que realmente debe mostrarse. Por eso, antes de construir una solución, resulta necesario contar con herramientas que permitan visualizarla de manera rápida y comprensible.',
      subsections: [
        {
          content:
            'En ese contexto, Balsamiq se ha consolidado como una herramienta orientada a la creación de wireframes de baja fidelidad, es decir, bocetos digitales que representan pantallas, formularios y flujos sin entrar todavía en detalles visuales finales. Su propuesta consiste en ayudar a los equipos a pensar mejor una interfaz antes de programarla, reduciendo confusiones y mejorando la comunicación entre quienes participan en el proyecto.'
        }
      ],
      imageUrl: balsamiqImage1Placeholder,
      imageAlt: 'Imagen referencial del editor de wireframes y diseño inicial de interfaces',
      imageCaption:
        'Vista general de Balsamiq como herramienta para construir wireframes de baja fidelidad.',
      imageSize: 'image-medium'
    },
    {
      title: '¿Qué es Balsamiq?',
      intro:
        'Balsamiq es una herramienta de wireframing creada para representar ideas de interfaz de manera rápida, simple y ordenada. Un wireframe puede entenderse como el esqueleto de una aplicación o de una página: muestra qué elementos tendrá una pantalla, dónde se ubican y cómo se relacionan, pero sin pretender ser todavía el diseño definitivo.',
      subsections: [
        {
          title: 'Enfoque de baja fidelidad',
          content:
            'Según la documentación de Balsamiq, este tipo de wireframe de baja fidelidad está centrado en la estructura, el diseño funcional y la organización del contenido, no en los detalles visuales finales.'
        },
        {
          title: 'Una estética pensada para discutir ideas',
          content:
            'A diferencia de otras herramientas que apuntan a prototipos más pulidos, Balsamiq mantiene una estética intencionalmente sencilla. Eso hace que el usuario perciba el resultado como una propuesta en construcción, abierta a cambios y revisión. En lugar de distraer la conversación con aspectos como colores o tipografías, permite concentrarse en cuestiones más importantes al inicio del proyecto: qué necesita el usuario, cómo será el recorrido dentro del sistema y qué debe ocurrir en cada interacción.'
        }
      ]
    },
    {
      title: '¿Para qué sirve en el desarrollo de software?',
      intro:
        'Balsamiq es especialmente útil en las etapas de análisis y diseño inicial. Cuando un equipo está definiendo una funcionalidad, una mejora o incluso una idea completa de producto, necesita una forma de convertir conceptos abstractos en algo visible. Balsamiq cumple esa función al permitir crear pantallas de ejemplo en pocos minutos, facilitando la discusión y la validación temprana de decisiones.',
      subsections: [
        {
          title: 'Validación antes de pasar al código',
          content:
            'Esto resulta valioso porque evita avanzar directamente al código sin haber aclarado previamente la lógica de la solución. La herramienta ayuda a alinear equipos, eliminar ambigüedad y cerrar flujos antes de comprometer tiempo en programación o diseño visual. En otras palabras, Balsamiq permite detectar errores de enfoque cuando todavía es barato corregirlos.'
        }
      ],
      bullets: [
        'Bosquejar pantallas web o móviles.',
        'Estructurar formularios y módulos administrativos.',
        'Representar flujos de navegación.',
        'Explicar requisitos funcionales.',
        'Mostrar ideas a clientes, docentes o compañeros.',
        'Recibir retroalimentación antes de desarrollar.'
      ],
      imageUrl: balsamiqImage2Placeholder,
      imageAlt: 'Imagen referencial de un wireframe de login, dashboard o formulario',
      imageCaption:
        'Ejemplo de wireframe donde se define la estructura de una pantalla antes de pasar al diseño final.',
      imageSize: 'image-medium'
    },
    {
      title: 'Características principales',
      intro:
        'Una de las razones por las que Balsamiq es valorado en equipos de producto y desarrollo es que combina simplicidad con funciones suficientes para trabajar con agilidad.',
      subsections: [
        {
          title: 'Componentes prediseñados',
          content:
            'La herramienta ofrece elementos listos para usar, como botones, menús, tablas, campos de texto, tarjetas, barras de navegación e iconos. Esto permite armar una pantalla de manera rápida sin comenzar desde cero.'
        },
        {
          title: 'Arrastrar y soltar',
          content:
            'Su dinámica de uso está pensada para que cualquier persona pueda construir wireframes sin necesidad de ser diseñadora. Balsamiq resalta justamente la simplicidad de drag and drop y la ausencia de una curva de aprendizaje pronunciada.'
        },
        {
          title: 'Enlace entre pantallas',
          content:
            'Los wireframes pueden vincularse entre sí para representar recorridos de usuario y mostrar cómo se pasaría de una vista a otra. Esto ayuda a explicar flujos completos y no solo pantallas aisladas.'
        },
        {
          title: 'Compartición y exportación',
          content:
            'Los diseños pueden compartirse mediante enlace o exportarse como PDF y PNG, lo que facilita presentarlos en clases, reuniones, revisiones o documentación.'
        },
        {
          title: 'Colaboración',
          content:
            'Balsamiq permite comentarios, reacciones y edición en tiempo real, lo cual mejora la revisión grupal y la construcción conjunta de propuestas.'
        },
        {
          title: 'Integración con Jira y Confluence',
          content:
            'La herramienta dispone de versiones específicas para integrarse con Jira y Confluence. En Confluence puede insertarse en páginas para hacer la documentación más visual, y en Jira puede incorporarse en tickets para que el equipo tenga claridad sobre lo que se espera construir.',
          imageUrl: balsamiqImage3Placeholder,
          imageAlt: 'Imagen referencial del editor con componentes o documentación con wireframe insertado',
          imageCaption:
            'Balsamiq permite construir, compartir y discutir wireframes dentro del flujo de trabajo del equipo.',
          imageSize: 'image-medium'
        }
      ]
    },
    {
      title: '¿Por qué es útil en análisis y diseño?',
      intro:
        'La elección de una herramienta no depende solo de sus funciones, sino también de qué tan bien responde a las necesidades reales del proceso. En este caso, Balsamiq encaja bien en análisis y diseño porque ayuda a hacer visibles decisiones que, si solo permanecen en texto o conversación, pueden interpretarse de varias maneras.',
      bullets: [
        'Facilita la comprensión de ideas complejas al volver más concreto un requisito.',
        'Reduce retrabajo porque permite revisar una propuesta antes de programarla.',
        'Mejora la comunicación entre personas con perfiles distintos, incluso si no tienen formación técnica avanzada.',
        'Enfoca la discusión en la lógica del sistema antes del acabado visual.'
      ],
      subsections: [
        {
          title: 'Valor metodológico de la baja fidelidad',
          content:
            'Su estilo de baja fidelidad tiene una ventaja metodológica importante: ayuda a discutir la lógica del sistema antes del acabado visual. Esto es especialmente útil en contextos académicos o en equipos en etapa temprana, donde todavía se están construyendo ideas y no conviene invertir demasiado tiempo en detalles finales.'
        }
      ]
    },
    {
      title: 'Ventajas de usar Balsamiq',
      intro:
        'Entre sus ventajas más relevantes se pueden destacar las siguientes:',
      bullets: [
        '<strong>Rapidez.</strong> Permite pasar de una idea a una representación visual en poco tiempo.',
        '<strong>Facilidad de uso.</strong> No exige experiencia avanzada en diseño.',
        '<strong>Enfoque en lo esencial.</strong> Al ser de baja fidelidad, mantiene la atención en estructura y funcionalidad.',
        '<strong>Trabajo colaborativo.</strong> Permite compartir, comentar y editar junto con otros miembros del equipo.',
        '<strong>Apoyo a la documentación.</strong> Sus integraciones con Jira y Confluence lo hacen útil para especificaciones, tickets y documentación funcional.'
      ]
    },
    {
      title: 'Posibles limitaciones',
      intro:
        'Aunque Balsamiq es muy útil, también tiene un alcance claro. No está orientado al diseño visual final ni a prototipos altamente detallados que simulen por completo el producto definitivo. Su valor está en las primeras fases, cuando todavía se necesita explorar opciones, validar lógica y tomar decisiones antes de profundizar en el detalle visual.',
      subsections: [
        {
          content:
            'Por ello, puede entenderse mejor como una herramienta para pensar y organizar una interfaz, más que para embellecerla. Una vez validada la idea, el proyecto puede continuar en herramientas más enfocadas en alta fidelidad o en implementación.'
        }
      ]
    },
    {
      title: 'Aplicación en un entorno académico o de proyecto',
      intro:
        'En el contexto de un grupo de trabajo, Balsamiq resulta adecuado para representar de forma rápida propuestas de pantallas, módulos o recorridos de usuario. Puede utilizarse, por ejemplo, para bosquejar el inicio de sesión, el panel principal, formularios de registro, vistas administrativas o cualquier otra interfaz que deba discutirse antes del desarrollo.',
      subsections: [
        {
          title: 'Aporte para revisión y toma de decisiones',
          content:
            'Su aporte principal en este tipo de entornos está en que permite presentar ideas de forma clara y ordenada, favoreciendo la participación del equipo y haciendo más sencilla la revisión por parte de docentes, compañeros o clientes. Más que un simple programa de dibujo, funciona como un apoyo concreto para el análisis, la comunicación y la toma de decisiones en las primeras etapas del software.'
        },
        {
          title: 'Una herramienta alineada con el trabajo colaborativo',
          content:
            'Esta utilidad está alineada con el enfoque oficial de Balsamiq, que presenta la herramienta como un medio para alinear equipos y cerrar flujos antes de pasar a código o diseño final.'
        },
        {
          title: 'Recurso complementario en video',
          content:
            'Si quieres ver un ejemplo adicional sobre el uso de Balsamiq y su aplicación práctica en wireframes, puedes revisar este video: <a href="https://www.youtube.com/watch?v=0UWxMvxQInY" target="_blank" rel="noopener noreferrer">Balsamiq video de referencia</a>.'
        }
      ]
    },
    {
      title: 'Conclusión',
      intro:
        'Balsamiq es una herramienta que cumple un papel importante dentro del análisis y diseño de software porque permite traducir ideas en representaciones visuales simples, comprensibles y fáciles de discutir. Su enfoque de baja fidelidad no busca reemplazar el diseño final, sino aportar claridad en el momento en que más se necesita: cuando todavía se está definiendo qué debe construirse y cómo debe funcionar.',
      subsections: [
        {
          content:
            'Por su facilidad de uso, sus opciones de colaboración, su capacidad para compartir wireframes y su integración con plataformas como Jira y Confluence, Balsamiq se convierte en una alternativa pertinente para equipos académicos y profesionales que necesitan comunicar mejor sus propuestas. En ese sentido, más que una herramienta de dibujo, puede entenderse como un recurso para analizar, ordenar y validar soluciones antes de desarrollarlas.'
        }
      ]
    }
  ]
};
