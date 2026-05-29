import type { Blog } from '../../services/blog.models';
import { AUTHORS as a, CATEGORY_MAP as c } from '../blog-catalogs';

const cover = '/assets/blog/kind-kubernetes/docker-engine-kubernetes.png';
const dockerToKind = '/assets/blog/kind-kubernetes/docker-banner.png';
const clusterArchitecture = '/assets/blog/kind-kubernetes/kind-create-cluster.png';
const manifestsMap = '/assets/blog/kind-kubernetes/kubernetes-architecture.png';
const nodeportNetworking = '/assets/blog/kind-kubernetes/pod-networking.png';
const operationsObservability = '/assets/blog/kind-kubernetes/kubernetes-container-engine.png';

export const blogKindKubernetesDocker: Blog = {
  id: 'kind-kubernetes-docker',
  title: 'kind y Kubernetes con Docker: guía práctica para crear clusters locales y desplegar microservicios',
  excerpt:
    'Una guía completa y visual para entender cómo Docker, kind, kubectl y Kubernetes trabajan juntos para ejecutar microservicios en un cluster local, con Deployments, Services, ConfigMaps, Secrets, NodePort, escalado, logs y observabilidad.',
  coverImageUrl: cover,
  category: c.devops,
  tags: [
    'kind',
    'Kubernetes',
    'Docker',
    'Docker Compose',
    'kubectl',
    'DevOps',
    'Microservicios',
    'Contenedores',
    'NodePort',
    'ConfigMap',
    'Secret',
    'Prometheus',
    'Grafana',
    'Observabilidad',
    'NestJS'
  ],
  authors: [a.josue, a.carol, a['david-b'], a.joel, a['david-m'], a.nixon, a.maybelline],
  date: '2026-04-26',
  readTime: '24 min',
  isStatic: true,
  sections: [
    {
      title: '1. Introducción: del contenedor aislado al cluster local',
      intro:
        'Cuando una aplicación crece, deja de ser suficiente ejecutarla manualmente en una sola terminal. Aparecen servicios que dependen entre sí, bases de datos, variables de entorno, puertos, health checks, logs, réplicas y necesidades de disponibilidad. Docker resuelve una parte importante del problema: empaquetar y ejecutar aplicaciones como contenedores. Kubernetes resuelve el siguiente nivel: administrar esos contenedores como un sistema coordinado.',
      imageUrl: cover,
      imageAlt: 'Imagen oficial de Docker sobre integración con Kubernetes',
      imageCaption:
        'Docker y Kubernetes se complementan: Docker empaqueta y ejecuta contenedores; Kubernetes los organiza como cargas de trabajo dentro de un cluster.',
      imageSize: 'image-large',
      subsections: [
        {
          title: 'El problema real',
          content:
            'En desarrollo es común escuchar la frase "en mi máquina sí funciona". Esto suele pasar porque cada entorno tiene versiones distintas de Node, dependencias diferentes, variables mal configuradas, servicios no instalados o puertos ocupados. Docker reduce esa variación porque empaqueta la aplicación y su entorno en una imagen reproducible.'
        },
        {
          title: 'Por qué Kubernetes entra en escena',
          content:
            'Docker permite ejecutar contenedores, pero cuando necesitamos administrar muchas instancias, reiniciar servicios automáticamente, balancear tráfico, separar configuración, escalar réplicas y mantener un estado deseado, necesitamos un orquestador. Kubernetes cumple ese rol.'
        },
        {
          title: 'Por qué kind es ideal para aprender',
          content:
            'kind significa Kubernetes in Docker. Su propuesta es simple y poderosa: crear un cluster Kubernetes local donde cada nodo del cluster es un contenedor Docker. Eso permite practicar conceptos reales de Kubernetes sin pagar una nube y sin instalar un cluster complejo en la computadora.'
        }
      ],
      bullets: [
        '<strong>Docker</strong> empaqueta aplicaciones en imágenes y las ejecuta como contenedores.',
        '<strong>Docker Compose</strong> coordina varios contenedores para desarrollo local.',
        '<strong>Kubernetes</strong> administra contenedores con estado deseado, red, escalado y recuperación.',
        '<strong>kind</strong> crea un cluster Kubernetes local usando Docker.',
        '<strong>kubectl</strong> es la herramienta de línea de comandos para comunicarse con el cluster.'
      ]
    },
    {
      title: '2. Docker como base de la práctica',
      intro:
        'Antes de llegar a Kubernetes es necesario entender qué aporta Docker. Docker permite construir imágenes, ejecutar contenedores, publicar puertos, crear redes internas y persistir datos con volúmenes. En una aplicación de microservicios, estos conceptos aparecen de inmediato.',
      imageUrl: dockerToKind,
      imageAlt: 'Banner oficial de Docker con el logotipo de Docker',
      imageCaption:
        'Docker es la base del laboratorio: primero se construyen imágenes y se ejecutan contenedores antes de pasar al cluster local con kind.',
      imageSize: 'image-large',
      subsections: [
        {
          title: 'Imagen y contenedor',
          content:
            'Una imagen Docker es una plantilla inmutable: contiene el sistema base, dependencias, código compilado y comando de arranque. Un contenedor es una instancia en ejecución de esa imagen. Podemos crear muchos contenedores a partir de la misma imagen.'
        },
        {
          title: 'Dockerfile',
          content:
            'El Dockerfile describe cómo construir la imagen. En una aplicación NestJS suele instalar dependencias, compilar TypeScript y dejar una etapa final liviana para producción. Una buena imagen no debería quedar amarrada a URLs internas del entorno; esas variables se inyectan desde Docker Compose o Kubernetes.'
        },
        {
          title: 'Docker Compose',
          content:
            'Docker Compose permite declarar varios servicios en un solo archivo. En nuestra práctica se usan tres piezas: Redis, inventory-service y order-service. Compose crea una red interna para que los contenedores se comuniquen por nombre, por ejemplo <code>order-service</code> puede llamar a <code>inventory-service:3001</code>.'
        },
        {
          title: 'Redes y nombres internos',
          content:
            'Dentro de un contenedor, <code>localhost</code> apunta al mismo contenedor. Por eso un microservicio no debe llamar a otro usando <code>localhost</code>. Debe usar el nombre del servicio dentro de la red: <code>redis</code>, <code>inventory-service</code> u otro nombre declarado por Compose o Kubernetes.'
        },
        {
          title: 'Volúmenes y datos',
          content:
            'Los contenedores son desechables. Si un contenedor se elimina, su sistema de archivos interno también puede perderse. Un volumen separa los datos del ciclo de vida del contenedor. En la práctica Redis usa un volumen para persistir información bajo <code>/data</code>.'
        },
        {
          title: 'Health checks',
          content:
            'Un proceso puede estar encendido pero no necesariamente listo para recibir tráfico. Docker permite definir health checks para revisar si un servicio responde. Kubernetes también tiene esta idea, pero la divide en readinessProbe y livenessProbe.'
        }
      ],
      table: {
        title: 'Conceptos Docker usados antes de Kubernetes',
        headers: ['Concepto', 'Qué representa', 'Ejemplo en la práctica'],
        rows: [
          ['Imagen', 'Plantilla con código, dependencias y runtime', 'inventory-service:latest'],
          ['Contenedor', 'Instancia en ejecución de una imagen', 'order-service ejecutándose en Docker'],
          ['Red', 'Comunicación interna entre contenedores', 'order-service llama a inventory-service'],
          ['Volumen', 'Persistencia separada del contenedor', 'redis_data montado en /data'],
          ['Healthcheck', 'Validación de que el servicio responde', 'Redis responde con PONG']
        ]
      }
    },
    {
      title: '3. ¿Qué es kind y cómo funciona?',
      intro:
        'kind es una herramienta diseñada para crear clusters Kubernetes locales usando Docker. Su nombre viene de Kubernetes in Docker. En lugar de instalar máquinas virtuales o usar una nube, kind crea contenedores que actúan como nodos Kubernetes.',
      imageUrl: clusterArchitecture,
      imageAlt: 'Captura oficial de kind ejecutando la creación de un cluster Kubernetes local',
      imageCaption:
        'kind crea clusters Kubernetes locales usando contenedores Docker como nodos, por eso es ideal para una práctica guiada sin depender de una nube.',
      imageSize: 'image-large',
      subsections: [
        {
          title: 'Cluster local',
          content:
            'Un cluster es el conjunto de nodos donde Kubernetes ejecuta cargas de trabajo. Con kind podemos crear un cluster local con un nodo control-plane y uno o varios nodos worker. Aunque corra en una laptop, el modelo mental es el mismo que en un cluster real.'
        },
        {
          title: 'Control plane',
          content:
            'El control plane administra el cluster. Incluye componentes como el API Server, scheduler y controladores. Cuando ejecutamos <code>kubectl apply</code>, hablamos con el API Server para declarar recursos.'
        },
        {
          title: 'Workers',
          content:
            'Los workers son nodos donde corren los Pods de la aplicación. En kind, esos workers son contenedores Docker. Kubernetes decide en qué nodo ubicar cada Pod según disponibilidad, configuración y estado del cluster.'
        },
        {
          title: 'Por qué las imágenes se cargan en kind',
          content:
            'Aunque construyamos una imagen con Docker local, el cluster kind necesita tener acceso a esa imagen dentro de sus nodos. Por eso se usa <code>kind load docker-image</code>. Ese comando copia la imagen hacia el cluster para que los Deployments puedan crear Pods con ella.'
        }
      ],
      bullets: [
        '<code>kind create cluster</code> crea el cluster local.',
        '<code>kubectl get nodes</code> muestra los nodos disponibles.',
        '<code>docker ps</code> permite ver que los nodos kind son contenedores Docker.',
        '<code>kind load docker-image</code> carga imágenes locales dentro del cluster.',
        '<code>kind delete cluster</code> elimina el laboratorio local cuando ya no se necesita.'
      ]
    },
    {
      title: '4. Kubernetes en manifiestos: declarar el estado deseado',
      intro:
        'Kubernetes se trabaja normalmente con archivos YAML llamados manifiestos. Cada manifiesto describe un recurso: Namespace, Deployment, Service, ConfigMap, Secret, entre otros. El punto central es que no le decimos a Kubernetes cada paso manual; declaramos el estado deseado y Kubernetes intenta mantenerlo.',
      imageUrl: manifestsMap,
      imageAlt: 'Diagrama de arquitectura de Kubernetes con control plane y nodos de aplicación',
      imageCaption:
        'Los manifiestos YAML declaran recursos que Kubernetes interpreta para mantener un estado deseado en el cluster.',
      imageSize: 'image-large',
      subsections: [
        {
          title: 'Anatomía básica de un YAML',
          content:
            'Un manifiesto suele tener <code>apiVersion</code>, <code>kind</code>, <code>metadata</code> y <code>spec</code>. <code>apiVersion</code> indica la versión de API, <code>kind</code> define el tipo de recurso, <code>metadata</code> contiene nombre, labels y namespace, y <code>spec</code> describe lo que queremos que exista.'
        },
        {
          title: 'Namespace',
          content:
            'Un Namespace separa recursos dentro del cluster. En la práctica se usa <code>micro-demo</code>. Esto evita mezclar nuestros Pods, Services y ConfigMaps con recursos del namespace <code>default</code> o del sistema.'
        },
        {
          title: 'Deployment',
          content:
            'Un Deployment administra Pods. Si declaramos <code>replicas: 5</code> para order-service, Kubernetes intenta mantener cinco Pods disponibles. Si uno se elimina, el Deployment crea otro para volver al estado deseado.'
        },
        {
          title: 'Pod',
          content:
            'El Pod es la unidad mínima que Kubernetes ejecuta. Normalmente contiene un contenedor principal, aunque puede contener más. En nuestra práctica cada Pod ejecuta un microservicio o una herramienta como Redis, Prometheus o Grafana.'
        },
        {
          title: 'Service',
          content:
            'Los Pods pueden cambiar de nombre e IP. Un Service ofrece una dirección estable y balancea tráfico hacia los Pods que coinciden con sus labels. Por eso order-service puede llamar a <code>http://inventory-service</code> sin conocer el nombre real del Pod de inventario.'
        },
        {
          title: 'Labels y selectors',
          content:
            'Kubernetes conecta recursos por labels. Un Service no apunta a un Pod por nombre fijo; busca Pods con una etiqueta específica. Si el selector del Service no coincide con las labels del Pod, el Service existe pero no tendrá endpoints útiles.'
        }
      ],
      table: {
        title: 'Recursos Kubernetes de la práctica',
        headers: ['Recurso', 'Responsabilidad', 'Ejemplo'],
        rows: [
          ['Namespace', 'Agrupar recursos de la aplicación', 'micro-demo'],
          ['Deployment', 'Mantener réplicas y crear Pods', 'order-service con 5 réplicas'],
          ['Pod', 'Ejecutar el contenedor real', 'Pod de inventory-service'],
          ['Service', 'Dar red estable y balanceo interno', 'inventory-service como ClusterIP'],
          ['ConfigMap', 'Inyectar configuración no sensible', 'REDIS_HOST=redis'],
          ['Secret', 'Inyectar datos sensibles o semisensibles', 'GF_SECURITY_ADMIN_PASSWORD']
        ]
      }
    },
    {
      title: '5. ConfigMap y Secret: configuración fuera de la imagen',
      intro:
        'Una buena imagen Docker debe ser portable. La misma imagen debería servir para desarrollo, pruebas, staging o Kubernetes. Lo que cambia entre entornos no debería ser la imagen, sino la configuración externa. En Kubernetes esa configuración se separa con ConfigMaps y Secrets.',
      subsections: [
        {
          title: 'ConfigMap',
          content:
            'Un ConfigMap guarda configuración no sensible: puertos, hosts internos, nombres de servicios o URLs que no contienen credenciales. En la práctica, <code>INVENTORY_SERVICE_URL=http://inventory-service</code> va en ConfigMap porque es una URL interna, no una clave secreta.'
        },
        {
          title: 'Secret',
          content:
            'Un Secret se usa para tokens, contraseñas, credenciales o datos semisensibles. En la práctica se usan Secrets para demostrar el concepto con variables como <code>INVENTORY_DEMO_TOKEN</code> y la contraseña de Grafana.'
        },
        {
          title: 'envFrom',
          content:
            'Los Deployments pueden usar <code>envFrom</code> para importar todas las claves de un ConfigMap o Secret como variables de entorno dentro del contenedor. La aplicación las lee de forma normal con <code>process.env</code>.'
        },
        {
          title: 'No quemar URLs en el Dockerfile',
          content:
            'Aunque un <code>ENV</code> dentro del Dockerfile puede funcionar como valor por defecto, no conviene dejar URLs de servicios internas quemadas en la imagen. Es más claro y portable que Docker Compose y Kubernetes inyecten esos valores.'
        }
      ],
      bullets: [
        '<strong>ConfigMap:</strong> configuración visible y dependiente del entorno.',
        '<strong>Secret:</strong> valores que no deben tratarse como configuración pública.',
        '<strong>Deployment:</strong> consume ambos y los entrega al contenedor.',
        '<strong>Aplicación:</strong> lee las variables desde el entorno sin saber si vienen de Compose o Kubernetes.'
      ],
      table: {
        title: 'Qué va en ConfigMap y qué va en Secret',
        headers: ['Variable', 'Dónde conviene ubicarla', 'Motivo'],
        rows: [
          ['PORT', 'ConfigMap', 'Es configuración normal del servicio'],
          ['REDIS_HOST', 'ConfigMap', 'Es el nombre interno del Service redis'],
          ['INVENTORY_SERVICE_URL', 'ConfigMap', 'Es una URL interna del cluster'],
          ['INVENTORY_DEMO_TOKEN', 'Secret', 'Representa un token de comunicación'],
          ['GF_SECURITY_ADMIN_PASSWORD', 'Secret', 'Es una contraseña de acceso']
        ]
      }
    },
    {
      title: '6. NodePort, ClusterIP y port-forward',
      intro:
        'La red es una de las partes más importantes de Kubernetes. No todos los servicios deben exponerse hacia fuera. En una arquitectura sana, solo se expone lo necesario. En la práctica, order-service es la entrada principal y se expone con NodePort; inventory-service queda interno con ClusterIP.',
      imageUrl: nodeportNetworking,
      imageAlt: 'Diagrama de networking entre Pods dentro de Kubernetes',
      imageCaption:
        'La red de Kubernetes permite que los Pods se comuniquen mediante Services, direcciones internas estables y reglas de exposición como ClusterIP o NodePort.',
      imageSize: 'image-large',
      subsections: [
        {
          title: 'ClusterIP',
          content:
            'ClusterIP es el tipo de Service por defecto. Expone el servicio solo dentro del cluster. Es ideal para Redis, inventario y servicios que no deberían recibir tráfico externo directamente.'
        },
        {
          title: 'NodePort',
          content:
            'NodePort abre un puerto en los nodos del cluster. En kind, además, necesitamos mapear ese puerto del nodo-contenedor hacia nuestra máquina con <code>extraPortMappings</code>. Por eso <code>nodePort: 30080</code> debe coincidir con el mapeo del archivo de kind.'
        },
        {
          title: 'port-forward',
          content:
            '<code>kubectl port-forward</code> abre un túnel temporal desde la máquina local hacia un Pod o Service interno. No cambia el tipo de Service y no es una estrategia de exposición permanente; es útil para probar y depurar.'
        },
        {
          title: 'Recorrido del tráfico',
          content:
            'Cuando se consulta <code>http://localhost:30080</code>, el tráfico entra al puerto mapeado por kind, llega al NodePort del Service order-service y Kubernetes lo envía a uno de los Pods disponibles de order-service.'
        }
      ],
      table: {
        title: 'Tipos de exposición usados en la práctica',
        headers: ['Servicio', 'Tipo', 'Uso'],
        rows: [
          ['order-service', 'NodePort', 'Entrada externa por localhost:30080'],
          ['inventory-service', 'ClusterIP', 'Consumo interno desde order-service'],
          ['redis', 'ClusterIP', 'Consumo interno desde inventory-service'],
          ['prometheus', 'ClusterIP + port-forward', 'Acceso temporal para revisar métricas'],
          ['grafana', 'ClusterIP + port-forward', 'Acceso temporal para visualizar dashboards']
        ]
      }
    },
    {
      title: '7. Despliegue práctico con kubectl',
      intro:
        'Una vez creado el cluster kind y cargadas las imágenes, el despliegue se realiza con kubectl. La práctica usa Kustomize para aplicar todos los manifiestos con un solo comando: <code>kubectl apply -k k8s</code>.',
      subsections: [
        {
          title: 'Crear el cluster',
          content:
            'El archivo <code>kind-config.yaml</code> define el nombre del cluster, los nodos y los mapeos de puertos. Si el puerto NodePort cambia, el cluster debe recrearse porque los mapeos de kind se aplican al momento de crear el cluster.'
        },
        {
          title: 'Construir imágenes',
          content:
            'Los microservicios se construyen con <code>docker build</code>. Esto genera imágenes locales como <code>inventory-service:latest</code> y <code>order-service:latest</code>.'
        },
        {
          title: 'Cargar imágenes en kind',
          content:
            'Después se usa <code>kind load docker-image</code> para que los nodos del cluster puedan usar esas imágenes. Si este paso se olvida, los Pods pueden quedar en estados como ImagePullBackOff o ErrImagePull.'
        },
        {
          title: 'Aplicar manifiestos',
          content:
            '<code>kubectl apply -k k8s</code> crea Namespace, ConfigMaps, Secrets, Services, Deployments y herramientas de observabilidad. Luego <code>kubectl get all -n micro-demo</code> permite revisar el estado.'
        }
      ],
      bullets: [
        '<code>kind create cluster --config k8s/kind/kind-config.yaml</code>',
        '<code>docker build -t inventory-service:latest ./inventory-service</code>',
        '<code>docker build -t order-service:latest ./order-service</code>',
        '<code>kind load docker-image inventory-service:latest --name k8s-practice</code>',
        '<code>kind load docker-image order-service:latest --name k8s-practice</code>',
        '<code>kubectl apply -k k8s</code>',
        '<code>kubectl get all -n micro-demo</code>'
      ],
      table: {
        title: 'Comandos clave del flujo',
        headers: ['Comando', 'Para qué sirve'],
        rows: [
          ['kubectl get nodes', 'Verifica los nodos del cluster'],
          ['kubectl get pods -n micro-demo', 'Muestra Pods y estado de ejecución'],
          ['kubectl get svc -n micro-demo', 'Lista Services y puertos expuestos'],
          ['kubectl describe pod <pod> -n micro-demo', 'Diagnostica eventos y configuración'],
          ['kubectl logs deployment/order-service -n micro-demo', 'Revisa logs del microservicio de órdenes']
        ]
      }
    },
    {
      title: '8. Escalado, auto-recuperación y logs',
      intro:
        'Kubernetes no solo crea recursos. También mantiene el estado declarado. Si pedimos cinco réplicas, Kubernetes intenta sostener cinco réplicas. Si un Pod se elimina, el Deployment crea otro. Si queremos más capacidad, podemos escalar.',
      imageUrl: operationsObservability,
      imageAlt: 'Logotipo de Kubernetes como herramienta de orquestación de contenedores',
      imageCaption:
        'Operar Kubernetes implica observar, diagnosticar y ajustar contenedores distribuidos con herramientas como kubectl, Prometheus y Grafana.',
      imageSize: 'image-large',
      subsections: [
        {
          title: 'Escalado manual',
          content:
            'Con <code>kubectl scale deployment order-service --replicas=8 -n micro-demo</code> Kubernetes crea más Pods de order-service. Esto demuestra que el Deployment controla el número de instancias activas.'
        },
        {
          title: 'Auto-recuperación',
          content:
            'Si eliminamos manualmente un Pod de order-service, Kubernetes detecta que faltan réplicas y crea otro Pod. Esta es una de las ideas centrales del estado deseado.'
        },
        {
          title: 'Logs simples',
          content:
            'Los microservicios incluyen logs cortos para seguir el flujo: orden solicitada, llamada a inventario, respuesta de inventario, stock reservado y orden confirmada. No se loguea cada health check para evitar ruido, porque Kubernetes consulta <code>/health</code> constantemente.'
        },
        {
          title: 'describe',
          content:
            '<code>kubectl describe</code> muestra detalles del recurso: eventos, imagen usada, probes, labels, selectors, montajes, variables y errores. Es una herramienta esencial para diagnosticar cuando un Pod no arranca o un Service no apunta a ningún endpoint.'
        }
      ],
      bullets: [
        '<code>kubectl scale deployment order-service --replicas=8 -n micro-demo</code>',
        '<code>kubectl delete pod -n micro-demo &lt;nombre-del-pod&gt;</code>',
        '<code>kubectl get pods -n micro-demo -w</code>',
        '<code>kubectl logs -n micro-demo deployment/order-service</code>',
        '<code>kubectl describe deployment order-service -n micro-demo</code>'
      ]
    },
    {
      title: '9. Observabilidad: Prometheus y Grafana',
      intro:
        'Una aplicación desplegada no termina en "está corriendo". También necesitamos observarla. En esta práctica se incluyen Prometheus y Grafana para mostrar cómo se puede comenzar a recolectar y visualizar métricas dentro del cluster.',
      subsections: [
        {
          title: 'Prometheus',
          content:
            'Prometheus recolecta métricas haciendo scraping a endpoints HTTP. Los microservicios exponen <code>/metrics</code>, y Prometheus consulta esos endpoints periódicamente para registrar datos del sistema.'
        },
        {
          title: 'Grafana',
          content:
            'Grafana permite visualizar métricas mediante dashboards. En la práctica se configura un datasource de Prometheus para que Grafana pueda consultar las métricas recolectadas.'
        },
        {
          title: 'Acceso temporal',
          content:
            'Prometheus y Grafana se mantienen como ClusterIP. Para acceder desde la máquina local se usa <code>kubectl port-forward</code>. Esto evita exponer herramientas internas innecesariamente.'
        }
      ],
      table: {
        title: 'Herramientas de observabilidad',
        headers: ['Herramienta', 'Rol', 'Acceso recomendado en la práctica'],
        rows: [
          ['Prometheus', 'Recolectar métricas desde /metrics', 'port-forward al Service prometheus'],
          ['Grafana', 'Visualizar métricas en dashboards', 'port-forward al Service grafana'],
          ['kubectl logs', 'Inspeccionar eventos de aplicación', 'CLI'],
          ['kubectl describe', 'Diagnosticar recursos Kubernetes', 'CLI o extensión de VS Code']
        ]
      }
    },
    {
      title: '10. Errores comunes y cómo entenderlos',
      intro:
        'Aprender Kubernetes implica leer estados y eventos. Muchos errores no significan que Kubernetes esté fallando, sino que está informando que algo del estado deseado no puede cumplirse todavía.',
      subsections: [
        {
          title: 'No veo recursos con kubectl get all',
          content:
            'Si los recursos se crearon en <code>micro-demo</code> pero ejecutamos <code>kubectl get all</code> sin namespace, veremos solo el namespace por defecto. La solución es usar <code>kubectl get all -n micro-demo</code> o configurar el namespace actual.'
        },
        {
          title: 'ImagePullBackOff',
          content:
            'Este estado suele aparecer cuando Kubernetes no encuentra la imagen. En kind pasa si construimos la imagen local pero olvidamos cargarla con <code>kind load docker-image</code>.'
        },
        {
          title: 'NodePort no responde',
          content:
            'En kind no basta con cambiar el <code>nodePort</code> del Service. También debe existir un <code>extraPortMappings</code> equivalente en el archivo de kind, y si el cluster ya fue creado, hay que recrearlo.'
        },
        {
          title: 'Service sin endpoints',
          content:
            'Si un Service existe pero no envía tráfico a Pods, probablemente el selector no coincide con las labels de los Pods. Se revisa con <code>kubectl describe svc</code> y <code>kubectl get pods --show-labels</code>.'
        }
      ],
      table: {
        title: 'Lectura rápida de problemas',
        headers: ['Síntoma', 'Causa probable', 'Qué revisar'],
        rows: [
          ['No veo Deployments', 'Namespace incorrecto', 'kubectl get all -n micro-demo'],
          ['ImagePullBackOff', 'Imagen no cargada en kind', 'kind load docker-image'],
          ['localhost:30080 no responde', 'NodePort o extraPortMappings no coinciden', 'Service y kind-config.yaml'],
          ['Pod reinicia varias veces', 'Liveness probe o error de app', 'kubectl logs y kubectl describe'],
          ['Service no enruta', 'Selector no coincide con labels', 'kubectl describe svc']
        ]
      }
    },
    {
      title: '11. Extensión de Kubernetes en VS Code',
      intro:
        'Aunque kubectl es la herramienta principal, la extensión de Kubernetes para VS Code ayuda mucho durante una exposición porque permite visualizar Namespaces, Pods, Deployments, Services, ConfigMaps y Secrets de forma gráfica.',
      subsections: [
        {
          title: 'Qué aporta visualmente',
          content:
            'La extensión permite navegar el cluster desde el editor, abrir manifiestos, revisar recursos y detectar rápidamente si estamos mirando el namespace correcto. Esto complementa la terminal sin reemplazarla.'
        },
        {
          title: 'Cuidado con el namespace',
          content:
            'Al igual que kubectl, la extensión puede mostrar primero el namespace default. Si los recursos están en <code>micro-demo</code>, hay que expandir ese namespace o establecerlo como namespace actual.'
        },
        {
          title: 'Uso recomendado durante la práctica',
          content:
            'La terminal se usa para ejecutar comandos y la extensión se usa para mostrar visualmente el resultado: Pods corriendo, Services creados, Deployments con réplicas y Secrets disponibles.'
        }
      ],
      bullets: [
        'Mostrar el cluster <code>kind-k8s-practice</code>.',
        'Expandir el namespace <code>micro-demo</code>.',
        'Revisar Workloads para ver Deployments y Pods.',
        'Revisar Network para ver Services.',
        'Usar la vista gráfica como apoyo, no como sustituto de kubectl.'
      ]
    },
    {
      title: '12. Cierre: qué aprendemos con kind',
      intro:
        'kind es una herramienta excelente para aprender Kubernetes porque reduce la fricción inicial. No reemplaza un cluster productivo, pero permite practicar de forma realista conceptos clave: nodos, Pods, Deployments, Services, ConfigMaps, Secrets, escalado, logs y observabilidad.',
      subsections: [
        {
          title: 'La idea más importante',
          content:
            'Docker nos permite empaquetar y ejecutar contenedores. Kubernetes nos permite administrarlos. kind nos da un laboratorio local para practicar Kubernetes usando Docker.'
        },
        {
          title: 'Por qué esta práctica es valiosa',
          content:
            'La aplicación no es un simple hola mundo. Tiene microservicios, Redis, comunicación interna, configuración por entorno, secretos, exposición con NodePort, port-forward, métricas y herramientas de observabilidad. Eso permite conectar la teoría con una ejecución más cercana a un caso real.'
        }
      ],
      bullets: [
        'Docker Compose ayuda a entender servicios, redes, puertos y volúmenes.',
        'kind permite crear un cluster Kubernetes local sin nube.',
        'kubectl permite aplicar, inspeccionar y diagnosticar recursos.',
        'Los manifiestos hacen que el despliegue sea repetible y versionable.',
        'Kubernetes mantiene el estado deseado mediante controladores.'
      ]
    },
    {
      title: 'Video final de la práctica',
      intro:
        'Para reforzar el cierre, este video acompaña la explicación final de la práctica y resume visualmente el flujo de trabajo con kind, Docker y Kubernetes.',
      videoEmbedUrl: 'https://youtu.be/XuJWpLYOVKk',
      videoTitle: 'Practica k8s con kind.',
      videoCaption:
        'Video de cierre recomendado para complementar la lectura del blog y visualizar la práctica completa.',
      bullets: [
        'Úsalo al final para conectar la teoría con la demostración.',
        'Ideal para repasar la creación del cluster, despliegue y validación.',
        'Complementa los conceptos de kind, kubectl, Services y manifiestos.'
      ]
    }
  ]
};
