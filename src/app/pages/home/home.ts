import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Project {
  icon: string;
  title: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  services: Service[] = [
    {
      icon: '💻',
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos, rápidos y optimizados para convertir visitantes en clientes.'
    },
    {
      icon: '📱',
      title: 'Aplicaciones Móviles',
      description: 'Desarrollamos apps nativas e híbridas que ofrecen experiencias de usuario excepcionales.'
    },
    {
      icon: '🎨',
      title: 'Diseño UI/UX',
      description: 'Diseñamos interfaces intuitivas y atractivas que conectan con tu audiencia.'
    },
    {
      icon: '🚀',
      title: 'Marketing Digital',
      description: 'Estrategias de marketing que impulsan el crecimiento y la visibilidad de tu marca.'
    },
    {
      icon: '☁️',
      title: 'Soluciones Cloud',
      description: 'Implementamos infraestructura en la nube escalable y segura para tu negocio.'
    },
    {
      icon: '🔧',
      title: 'Consultoría Tech',
      description: 'Asesoramiento experto para optimizar tus procesos y tecnología empresarial.'
    }
  ];

  projects: Project[] = [
    {
      icon: '🏪',
      title: 'E-Commerce Premium',
      category: 'Desarrollo Web',
      description: 'Plataforma de comercio electrónico con +50k productos y pagos integrados.'
    },
    {
      icon: '📊',
      title: 'Dashboard Analytics',
      category: 'Aplicación Web',
      description: 'Panel de control en tiempo real para análisis de datos empresariales.'
    },
    {
      icon: '🏥',
      title: 'App Salud Digital',
      category: 'Aplicación Móvil',
      description: 'Aplicación de telemedicina con videollamadas y gestión de citas.'
    }
  ];
}
