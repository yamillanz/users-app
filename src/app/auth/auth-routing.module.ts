import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
      {
        path: 'profile',
        loadComponent() {
          return import('./profile/profile.component').then((m) => m.ProfileComponent);
        },
      },

      // { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
      // { path: 'access', loadChildren: () => import('./access_deneid/access.module').then(m => m.AccessModule) },
      // { path: '**', redirectTo: '/notfound' },
    ]),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
