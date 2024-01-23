import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { take, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  // console.log('auth', auth);
  return auth.userState$.pipe(
    take(1),
    tap((isLoggedIn) => {
      // console.log('isLoggedIn', isLoggedIn);
      return !isLoggedIn ? router.navigate(['/login']) : true;
    })
  );
};
