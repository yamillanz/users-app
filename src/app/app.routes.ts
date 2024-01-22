import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/landing/landing.module').then(
        (m) => m.LandingModule
      ),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'notfound',
    loadComponent() {
      return import('./shared/notfound/notfound.component').then(
        (m) => m.NotfoundComponent
      );
    },
  },
  {
    path: 'homelogin',
    loadComponent() {
      return import('./front-office/home-office/home-office.component').then(
        (m) => m.HomeOfficeComponent
      );
    },
    children: [
      {
        path: '',
        loadComponent() {
          return import(
            './front-office/companies-list/companies-list.component'
          ).then((c) => c.CompaniesListComponent);
        },
      },
      {
        path: 'bills',
        loadComponent() {
          return import(
            './front-office/invoices-list/invoices-list.component'
          ).then((m) => m.InvoicesListComponent);
        },
      },
    ],
  },
  { path: '**', redirectTo: '/notfound' },
];
