import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
      // { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
      // { path: 'access', loadChildren: () => import('./access_deneid/access.module').then(m => m.AccessModule) },
      { path: '**', redirectTo: '/notfound' },
    ]),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
