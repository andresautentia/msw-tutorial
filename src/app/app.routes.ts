import { Routes } from '@angular/router';
import { MswTestComponent } from './pages/components/msw-test.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home.page').then((m) => m.HomePageComponent),
    children: [
      {
        path: '',
        component: MswTestComponent,
      },
    ],
  },
];
