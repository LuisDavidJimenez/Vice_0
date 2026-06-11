import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Proyecto } from './pages/proyecto/proyecto';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'proyecto', component: Proyecto },

  { path: '**', redirectTo: '' },
];
