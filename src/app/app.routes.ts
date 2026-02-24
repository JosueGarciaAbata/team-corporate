import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Blog } from './pages/blog/blog';
import { BlogDetail } from './pages/blog-detail/blog-detail';
import { BlogEditor } from './pages/blog-editor/blog-editor';
import { Team } from './pages/team/team';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'services', component: Services },
  { path: 'team', component: Team },
  { path: 'blog', component: Blog },
  { path: 'blog/new', component: BlogEditor },
  { path: 'blog/edit/:id', component: BlogEditor },
  { path: 'blog/:id', component: BlogDetail }
];
