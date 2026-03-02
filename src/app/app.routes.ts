import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Projects } from './pages/projects/projects';
import { Blog } from './pages/blog/blog';
import { BlogDetail } from './pages/blog-detail/blog-detail';
import { BlogEditor } from './pages/blog-editor/blog-editor';
import { Team } from './pages/team/team';
import { Contact } from './pages/contact/contact';
import { Privacy } from './pages/privacy/privacy';
import { Terms } from './pages/terms/terms';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'servicios', component: Services },
  { path: 'proyectos', component: Projects },
  { path: 'contacto', component: Contact },
  { path: 'equipo', component: Team },
  { path: 'blog', component: Blog },
  { path: 'blog/nuevo', component: BlogEditor },
  { path: 'blog/editar/:id', component: BlogEditor },
  { path: 'blog/:id', component: BlogDetail },
  { path: 'privacidad', component: Privacy },
  { path: 'terminos', component: Terms }
];
