import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  authState,
  createUserWithEmailAndPassword,
  idToken,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { signInWithRedirect } from '@firebase/auth';
import { Observable } from 'rxjs';
import { SendEmailService } from '../../shared/services/send-email.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly gLoginProvider = new GoogleAuthProvider();
  private readonly auth = inject(Auth);

  private _userIsAuthenticated: WritableSignal<boolean> = signal(false);
  get userIsAuthenticated(): WritableSignal<boolean> {
    return this._userIsAuthenticated;
  }

  get userState$(): Observable<any> {
    return authState(this.auth);
  }

  get idToken$(): Observable<string | null> {
    return idToken(this.auth);
  }

  constructor(private emailSender: SendEmailService, private router: Router) {}

  async signInWithGoogle(): Promise<void> {
    try {
      await signInWithRedirect(this.auth, this.gLoginProvider);
      // const id_TOKEN = await this.auth.currentUser?.getIdToken()
      // await signInWithCustomToken(this.auth, 'token');
      this._userIsAuthenticated.set(true);
    } catch (error) {
      console.log('error', error);
    }
  }

  async signIn(email: string, password: string): Promise<boolean> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this._userIsAuthenticated.set(true);
      return Promise.resolve(true);
    } catch (error) {
      console.log('error', error);
      return Promise.resolve(false);
    }
  }

  async logout() {
    try {
      await this.auth.signOut();
      this._userIsAuthenticated.set(false);
    } catch (error) {
      console.log('error', error);
    }
    this.router.navigate(['/login']);
  }

  async signUp(email: string, password: string): Promise<boolean | void> {
    try {
      const { user } = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('🚀 ~ file: auth.service.ts:48 ~ AuthService ~ signUp ~ user:', user);
      await this.emailSender.sendEmailWithFirebase(user);
      return true;
    } catch (error) {
      // const myError = {
      //   code: (error as any).code,
      //   message: (error as any).message
      // };
      console.log('error Sing up!!!', error);
      return false;
      // throw myError;
    }
  }
}
