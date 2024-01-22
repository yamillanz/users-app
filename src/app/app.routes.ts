import { Routes } from '@angular/router';
import { NotfoundComponent } from './shared/notfound/notfound.component';
// import { BlocksComponent } from './components/primeblocks/blocks/blocks.component';

export const routes: Routes = [
  // { path: 'blocks', component: BlocksComponent },
  // { path: '**', redirectTo: '' },
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
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' },
];
