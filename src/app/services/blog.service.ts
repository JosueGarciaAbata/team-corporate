import { Injectable, signal } from '@angular/core';

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
  readTime: string;
  isStatic?: boolean; // Para distinguir blogs estáticos de los creados por usuario
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly STORAGE_KEY = 'stratium-blogs';
  private blogsSignal = signal<Blog[]>([]);

  constructor() {
    this.loadBlogs();
  }

  // Blogs estáticos predefinidos
  private getStaticBlogs(): Blog[] {
    return [
      {
        id: 'static-1',
        title: 'El Futuro de las Herramientas CASE en el Desarrollo de Software',
        excerpt: 'Las herramientas CASE (Computer-Aided Software Engineering) están transformando la manera en que los equipos desarrollan software empresarial.',
        content: `
          <h2>¿Qué son las Herramientas CASE?</h2>
          <p>Las herramientas CASE (Computer-Aided Software Engineering) son soluciones de software que asisten a los desarrolladores en todas las fases del ciclo de vida del desarrollo de software. Desde el análisis de requisitos hasta el mantenimiento, estas herramientas automatizan tareas repetitivas y reducen errores humanos.</p>
          
          <h2>Ventajas de las Herramientas CASE Modernas</h2>
          <p>En 2026, las herramientas CASE han evolucionado significativamente. Ahora integran inteligencia artificial para:</p>
          <ul>
            <li><strong>Generación automática de código:</strong> A partir de diagramas UML y especificaciones formales.</li>
            <li><strong>Detección temprana de errores:</strong> Análisis estático en tiempo real durante el diseño.</li>
            <li><strong>Documentación inteligente:</strong> Generación automática de documentación técnica y de usuario.</li>
            <li><strong>Versionado semántico:</strong> Control avanzado de cambios en modelos y arquitecturas.</li>
          </ul>
          
          <h2>Casos de Uso en la Industria</h2>
          <p>Empresas líderes están adoptando herramientas CASE para acelerar el desarrollo de aplicaciones críticas. En fintech, por ejemplo, permiten modelar procesos complejos de compliance de forma visual, reduciendo el tiempo de desarrollo en un 40%.</p>
          
          <h2>El Futuro: CASE + IA Generativa</h2>
          <p>La combinación de herramientas CASE tradicionales con IA generativa está creando un nuevo paradigma. Los desarrolladores pueden ahora describir requisitos en lenguaje natural y obtener arquitecturas completas en minutos, listas para ser refinadas y desplegadas.</p>
          
          <p><em>En Stratium, utilizamos las últimas herramientas CASE para garantizar que cada proyecto cumpla con los más altos estándares de calidad y eficiencia.</em></p>
        `,
        author: 'Dr. Ricardo Méndez',
        date: '2026-02-15',
        imageUrl: '/assets/img/services/herramientas-case.webp',
        category: 'Ingeniería de Software',
        readTime: '8 min',
        isStatic: true
      },
      {
        id: 'static-2',
        title: 'Inteligencia Artificial en la Transformación Digital Empresarial',
        excerpt: 'Cómo la IA está redefiniendo los procesos empresariales y creando nuevas oportunidades de negocio en 2026.',
        content: `
          <h2>La IA como Motor de Transformación</h2>
          <p>La inteligencia artificial ha dejado de ser un concepto futurista para convertirse en una herramienta esencial en la estrategia empresarial. En 2026, el 78% de las empresas Fortune 500 han integrado IA en sus operaciones core.</p>
          
          <h2>Áreas de Mayor Impacto</h2>
          <p>Las áreas donde la IA está generando mayor valor incluyen:</p>
          <ul>
            <li><strong>Atención al Cliente:</strong> Chatbots avanzados que resuelven el 85% de consultas sin intervención humana.</li>
            <li><strong>Análisis Predictivo:</strong> Modelos que anticipan tendencias de mercado con precisión del 92%.</li>
            <li><strong>Automatización de Procesos:</strong> RPA combinado con IA para tareas complejas de decisión.</li>
            <li><strong>Personalización:</strong> Experiencias de usuario adaptadas en tiempo real según comportamiento.</li>
          </ul>
          
          <h2>Casos de Éxito Recientes</h2>
          <p>Una cadena retail implementó IA para optimizar inventario, reduciendo desperdicios en 34% y aumentando ventas en 21%. En el sector financiero, algoritmos de IA detectan fraudes con una tasa de falsos positivos 10 veces menor que sistemas tradicionales.</p>
          
          <h2>Consideraciones Éticas y Gobernanza</h2>
          <p>Con el nuevo marco regulatorio europeo AI Act, las empresas deben garantizar transparencia, equidad y responsabilidad en sus sistemas de IA. Esto incluye auditorías algorítmicas, explicabilidad de decisiones y protección de datos personales.</p>
          
          <h2>El Camino hacia la IA Responsable</h2>
          <p>La clave está en equilibrar innovación con ética. Las empresas líderes están creando comités de ética en IA, estableciendo principios claros y formando a sus equipos en desarrollo responsable.</p>
          
          <p><em>En Stratium, desarrollamos soluciones de IA que priorizan la transparencia, la equidad y el impacto positivo en tu negocio.</em></p>
        `,
        author: 'Ana Sofía Torres',
        date: '2026-02-10',
        imageUrl: '/assets/img/services/ia.webp',
        category: 'Inteligencia Artificial',
        readTime: '10 min',
        isStatic: true
      },
      {
        id: 'static-3',
        title: 'DevOps y CI/CD: Las Mejores Prácticas para 2026',
        excerpt: 'Estrategias modernas de DevOps que están acelerando los ciclos de desarrollo y mejorando la confiabilidad del software.',
        content: `
          <h2>Evolución de DevOps</h2>
          <p>DevOps ha madurado significativamente. Ya no se trata solo de herramientas, sino de cultura, automatización y medición continua. Los equipos de alto rendimiento despliegan código a producción más de 200 veces al día con tasas de fallo mínimas.</p>
          
          <h2>Pipelines CI/CD Modernos</h2>
          <p>Los pipelines actuales integran:</p>
          <ul>
            <li><strong>Testing automatizado multi-capa:</strong> Unit, integration, E2E y performance tests.</li>
            <li><strong>Security scanning integrado:</strong> Análisis de vulnerabilidades en cada commit (DevSecOps).</li>
            <li><strong>Progressive delivery:</strong> Canary releases y feature flags para deploys seguros.</li>
            <li><strong>Observabilidad completa:</strong> Logs, métricas y traces distribuidos desde el día uno.</li>
          </ul>
          
          <h2>Infrastructure as Code (IaC)</h2>
          <p>Terraform, Pulumi y Crossplane son ahora estándar. La infraestructura se versiona igual que el código de aplicación, permitiendo revisiones, rollbacks y compliance as code.</p>
          
          <h2>GitOps y Kubernetes</h2>
          <p>GitOps ha democratizado la gestión de clusters Kubernetes. Con herramientas como ArgoCD y Flux, el estado deseado de la infraestructura vive en Git, y operadores automáticos garantizan convergencia continua.</p>
          
          <h2>Métricas que Importan</h2>
          <p>Las cuatro métricas clave de DORA (DevOps Research and Assessment) siguen siendo fundamentales:</p>
          <ul>
            <li>Deployment Frequency</li>
            <li>Lead Time for Changes</li>
            <li>Mean Time to Recovery (MTTR)</li>
            <li>Change Failure Rate</li>
          </ul>
          
          <h2>El Futuro: AIOps</h2>
          <p>La próxima frontera combina DevOps con IA para predicción de incidentes, auto-remediación y optimización automática de recursos cloud basada en patrones de uso.</p>
          
          <p><em>Stratium implementa pipelines CI/CD de clase mundial que reducen tu time-to-market y aumentan la confiabilidad de tus sistemas.</em></p>
        `,
        author: 'Carlos Ramírez',
        date: '2026-01-28',
        imageUrl: '/assets/img/services/ci-cd.webp',
        category: 'DevOps',
        readTime: '12 min',
        isStatic: true
      },
      {
        id: 'static-4',
        title: 'Arquitecturas Cloud-Native: Microservicios y Serverless',
        excerpt: 'Diseñando aplicaciones escalables y resilientes con las últimas tecnologías cloud-native y patrones arquitectónicos.',
        content: `
          <h2>¿Qué es Cloud-Native?</h2>
          <p>Cloud-native es un enfoque para construir y ejecutar aplicaciones que aprovecha completamente las ventajas del modelo cloud computing. Se basa en microservicios, contenedores, orquestación dinámica y prácticas DevOps.</p>
          
          <h2>Microservicios: Dividir para Conquistar</h2>
          <p>Los microservicios permiten:</p>
          <ul>
            <li><strong>Escalabilidad independiente:</strong> Cada servicio escala según su demanda específica.</li>
            <li><strong>Desarrollo paralelo:</strong> Equipos autónomos trabajando en servicios independientes.</li>
            <li><strong>Resiliencia:</strong> El fallo de un servicio no derriba toda la aplicación.</li>
            <li><strong>Flexibilidad tecnológica:</strong> Cada servicio puede usar el stack más adecuado.</li>
          </ul>
          
          <h2>Serverless: Enfócate en el Código</h2>
          <p>Las arquitecturas serverless eliminan la gestión de infraestructura. AWS Lambda, Azure Functions y Google Cloud Functions permiten ejecutar código sin preocuparse por servidores, escalando automáticamente de cero a miles de invocaciones.</p>
          
          <h2>Patrones de Diseño Cloud-Native</h2>
          <p>Los patrones esenciales incluyen:</p>
          <ul>
            <li><strong>API Gateway:</strong> Punto de entrada unificado para microservicios.</li>
            <li><strong>Circuit Breaker:</strong> Prevención de cascadas de fallos.</li>
            <li><strong>Service Mesh:</strong> Gestión de comunicación, seguridad y observabilidad entre servicios.</li>
            <li><strong>Event-Driven Architecture:</strong> Comunicación asíncrona mediante eventos.</li>
          </ul>
          
          <h2>Observabilidad: Ver lo Invisible</h2>
          <p>En sistemas distribuidos, la observabilidad es crítica. La triada de logs, métricas y traces (con herramientas como OpenTelemetry, Prometheus y Grafana) proporciona visibilidad completa del comportamiento del sistema.</p>
          
          <h2>Costos y Optimización</h2>
          <p>Cloud-native bien implementado reduce costos hasta 40% mediante auto-scaling, spot instances y optimización de recursos. FinOps se ha vuelto esencial para gestionar presupuestos cloud efectivamente.</p>
          
          <h2>Seguridad en Cloud-Native</h2>
          <p>Zero-trust architecture, secrets management, network policies y runtime security son pilares fundamentales. Herramientas como Falco, OPA y service meshes como Istio proporcionan seguridad en profundidad.</p>
          
          <p><em>En Stratium, diseñamos arquitecturas cloud-native que escalan con tu negocio, optimizando costos y maximizando rendimiento.</em></p>
        `,
        author: 'María González',
        date: '2026-01-20',
        imageUrl: '/assets/img/services/microservicios.webp',
        category: 'Arquitectura Cloud',
        readTime: '15 min',
        isStatic: true
      }
    ];
  }

  private loadBlogs(): void {
    const staticBlogs = this.getStaticBlogs();
    const storedBlogs = this.getStoredBlogs();
    // Combinar blogs estáticos con los del localStorage
    this.blogsSignal.set([...staticBlogs, ...storedBlogs]);
  }

  private getStoredBlogs(): Blog[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading blogs from localStorage:', error);
      return [];
    }
  }

  private saveStoredBlogs(blogs: Blog[]): void {
    try {
      // Solo guardar blogs no estáticos
      const userBlogs = blogs.filter(blog => !blog.isStatic);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(userBlogs));
    } catch (error) {
      console.error('Error saving blogs to localStorage:', error);
    }
  }

  getBlogs() {
    return this.blogsSignal.asReadonly();
  }

  getBlogById(id: string): Blog | undefined {
    return this.blogsSignal().find(blog => blog.id === id);
  }

  addBlog(blog: Omit<Blog, 'id' | 'date'>): void {
    const newBlog: Blog = {
      ...blog,
      id: `user-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      isStatic: false
    };
    
    const currentBlogs = this.blogsSignal();
    this.blogsSignal.set([...currentBlogs, newBlog]);
    this.saveStoredBlogs(this.blogsSignal());
  }

  updateBlog(id: string, updates: Partial<Blog>): void {
    const blogs = this.blogsSignal();
    const blogToUpdate = blogs.find(b => b.id === id);
    
    // No permitir editar blogs estáticos
    if (blogToUpdate?.isStatic) {
      console.warn('Cannot edit static blogs');
      return;
    }

    const updatedBlogs = blogs.map(blog =>
      blog.id === id ? { ...blog, ...updates } : blog
    );
    
    this.blogsSignal.set(updatedBlogs);
    this.saveStoredBlogs(updatedBlogs);
  }

  deleteBlog(id: string): void {
    const blogToDelete = this.blogsSignal().find(b => b.id === id);
    
    // No permitir eliminar blogs estáticos
    if (blogToDelete?.isStatic) {
      console.warn('Cannot delete static blogs');
      return;
    }

    const filteredBlogs = this.blogsSignal().filter(blog => blog.id !== id);
    this.blogsSignal.set(filteredBlogs);
    this.saveStoredBlogs(filteredBlogs);
  }

  // Utilidad para convertir imagen a base64
  static convertImageToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }
}
