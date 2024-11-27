import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        title: 'Test Books List',
        loadComponent: () => import('./pages/list/list.page'),
      },
    ]
  }
]
