import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

import { BehaviorSubject, EMPTY, Observable, catchError, of, tap } from 'rxjs';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated: WritableSignal<boolean> = signal(false);
  private http = inject(HttpClient);
  private _userState$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  get userIsAuthenticated(): WritableSignal<boolean> {
    return this._userIsAuthenticated;
  }

  get userState$(): Observable<any> {
    return this._userState$.asObservable();
  }

  get idToken$(): Observable<string | null> {
    // return idToken(this.auth);
    return EMPTY;
  }

  constructor(private router: Router) {}

  signIn(email: string, password: string): Observable<any> {
    // try {
    return this.http.post(environment.URL_API + '/login', { username: email, password }).pipe(
      tap((res: any) => {
        console.log('🚀 ~ file: auth.service.ts:52 ~ AuthService ~ this.http.post ~ res', res);
        if (res.access_token) {
          const decodedToken = jwtDecode(res.access_token);
          console.log('🚀 ~ AuthService ~ .subscribe ~ decodedToken:', decodedToken);
          this._userState$.next(decodedToken);
          this._userIsAuthenticated.set(true);
        }
      }),
      catchError((error) => {
        // console.log('error', error);
        return of(error);
      }),
    );
  }

  async logout() {
    try {
      // await this.auth.signOut();
      this._userIsAuthenticated.set(false);
    } catch (error) {
      console.log('error', error);
    }
    this.router.navigate(['/login']);
  }
}
