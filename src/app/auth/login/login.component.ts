import { Component, inject } from '@angular/core';
import { LayoutService } from '../../services/app.layout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      :host ::ng-deep .pi-eye,
      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
})
export class LoginComponent {
  visibleErrorMessage: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  valCheck: string[] = ['remember'];
  password!: string;

  layoutService = inject(LayoutService);
  authService = inject(AuthService);
  router = inject(Router);

  constructor() {}

  onSubmit(e: Event): boolean {
    e.preventDefault();
    // const {email, password} = this.loginForm.value;
    return false;
  }

  async login() {
    this.visibleErrorMessage = false;
    const { email, password } = this.loginForm.value;
    const logged = await this.authService.signIn(email, password);
    if (logged) {
      console.log('logged');
      this.router.navigate(['/homelogin']);
    }
    this.visibleErrorMessage = true;
  }

  closeErrorMessage() {
    this.visibleErrorMessage = false;
  }
}
