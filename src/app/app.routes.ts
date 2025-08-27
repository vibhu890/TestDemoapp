import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./client-list/client-list.component').then(m => m.ClientListComponent)
  },
  {
    path: 'client-setup',
    loadComponent: () => import('./client-setup/client-setup.component').then(m => m.ClientSetupComponent)
  }
];
