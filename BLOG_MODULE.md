# Blog Module - Stratium Corporate Website

## 📝 Descripción

Módulo de blog completamente funcional para la página corporativa de Stratium, con gestión de posts mediante localStorage y editor de texto enriquecido.

## ✨ Características

### 📚 Blogs Estáticos
- **4 posts precargados** con contenido relacionado a:
  - Herramientas CASE en el desarrollo de software
  - Inteligencia Artificial en transformación digital
  - DevOps y CI/CD mejores prácticas
  - Arquitecturas Cloud-Native (Microservicios y Serverless)

### 🎨 Funcionalidades
- ✅ **Lista de blogs** con sistema de filtrado por categorías
- ✅ **Vista detallada** de cada post con diseño profesional
- ✅ **Editor WYSIWYG** usando ngx-editor para crear/editar posts
- ✅ **Gestión de imágenes** convertidas a Base64 para almacenamiento local
- ✅ **Persistencia en localStorage** para posts creados por usuarios
- ✅ **Posts relacionados** basados en categoría
- ✅ **Diseño responsivo** siguiendo el estilo de la página

## 🗂️ Estructura de Archivos

```
src/app/
├── services/
│   └── blog.service.ts          # Servicio de gestión de blogs
├── pages/
│   ├── blog/
│   │   ├── blog.ts              # Lista de blogs
│   │   ├── blog.html
│   │   └── blog.css
│   ├── blog-detail/
│   │   ├── blog-detail.ts       # Detalle del blog
│   │   ├── blog-detail.html
│   │   └── blog-detail.css
│   └── blog-editor/
│       ├── blog-editor.ts       # Editor de blogs
│       ├── blog-editor.html
│       └── blog-editor.css
```

## 🚀 Rutas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/blog` | Blog | Lista todos los posts |
| `/blog/:id` | BlogDetail | Muestra un post específico |
| `/blog/new` | BlogEditor | Crea un nuevo post |
| `/blog/edit/:id` | BlogEditor | Edita un post existente |

## 💾 Almacenamiento

### Posts Estáticos
Los posts estáticos están definidos en `blog.service.ts` y tienen la propiedad `isStatic: true`. Estos **no pueden ser editados ni eliminados**.

### Posts de Usuario
Los posts creados por usuarios se guardan en `localStorage` bajo la clave `stratium-blogs` con:
- **Contenido HTML** del editor
- **Imágenes en Base64** para evitar dependencias externas
- **Metadatos** (autor, categoría, fecha, tiempo de lectura)

## 🖼️ Gestión de Imágenes

Las imágenes se convierten automáticamente a Base64:
- ✅ Validación de tipo de archivo (solo imágenes)
- ✅ Validación de tamaño máximo (5MB)
- ✅ Preview en tiempo real
- ✅ Almacenamiento local sin necesidad de servidor

## 🎯 Uso

### Crear un Nuevo Post

1. Ir a `/blog`
2. Click en "Escribir nuevo post"
3. Completar el formulario:
   - Subir imagen de portada
   - Título (mínimo 10 caracteres)
   - Resumen (mínimo 20 caracteres)
   - Autor, categoría y tiempo de lectura
   - Contenido con editor WYSIWYG (mínimo 50 caracteres)
4. Click en "Publicar post"

### Editar un Post

1. Ir al detalle del post (`/blog/:id`)
2. Click en "Editar post" (solo disponible para posts de usuario)
3. Modificar los campos deseados
4. Click en "Actualizar post"

### Eliminar un Post

1. Ir al detalle del post
2. Click en "Eliminar" (solo disponible para posts de usuario)
3. Confirmar la acción

## 🎨 Categorías Disponibles

- Ingeniería de Software
- Inteligencia Artificial
- DevOps
- Arquitectura Cloud
- Desarrollo Web
- Ciberseguridad
- UX/UI Design
- Mobile Development
- Data Science
- Otros

## 📦 Dependencias

- **Angular 19+** (standalone components)
- **ngx-editor** - Editor WYSIWYG
- **TailwindCSS** - Estilos
- **RouterModule** - Navegación
- **ReactiveFormsModule** - Formularios

## 🔧 Configuración

El módulo está completamente configurado en:
- `app.routes.ts` - Rutas
- `app.config.ts` - Providers (HttpClient)
- `styles.css` - Estilos globales de ngx-editor

## 🎨 Diseño

El diseño sigue la paleta de colores y estilos de la página corporativa:
- **brand-cream**: #f5f0e8
- **brand-warm**: #e8e0d4
- **brand-charcoal**: #191918
- **brand-accent**: #b8560f
- **brand-muted**: #6b6b5e

Con efectos de:
- Orbs difuminados de fondo
- Cards con hover effects
- Gradientes sutiles
- Animaciones suaves
- Tipografía Europa Grotesk

## 📱 Responsivo

Totalmente responsivo con breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Limitaciones

- Posts estáticos no pueden editarse ni eliminarse
- Imágenes limitadas a 5MB
- Almacenamiento limitado a la capacidad del localStorage (~10MB)
- Sin sincronización entre dispositivos/navegadores

## 🚀 Mejoras Futuras Sugeridas

- [ ] Backend API para persistencia real
- [ ] Sistema de autenticación de autores
- [ ] Comentarios en posts
- [ ] Compartir en redes sociales
- [ ] Búsqueda de posts
- [ ] Tags adicionales
- [ ] Paginación
- [ ] Modo borrador
- [ ] Versionado de posts
