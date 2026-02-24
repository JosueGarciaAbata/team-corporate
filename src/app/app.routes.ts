import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Team } from './pages/team/team';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'services', component: Services },
  { path: 'team', component: Team },
];
