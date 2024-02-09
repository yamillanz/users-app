import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../../users/users.service';

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
export class LoginComponent implements OnInit {
  visibleErrorMessage: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  valCheck: string[] = ['remember'];
  password!: string;

  authService = inject(AuthService);
  router = inject(Router);
  userService = inject(UsersService);

  constructor() {}

  onSubmit(e: Event): boolean {
    e.preventDefault();
    return false;
  }

  async login() {
    this.visibleErrorMessage = false;
    const { email, password } = this.loginForm.value;
    this.authService.signIn(email, password).subscribe((res) => {
      console.log('🚀 ~ file: login.component.ts ~ line 78 ~ LoginComponent ~ this.authService.signIn ~ res', res);
      if (res.error) {
        this.visibleErrorMessage = true;
      }
      if (res.access_token) {
        this.router.navigate(['/profile']);
      }
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      console.log('fetching users for awaiking', res.toLocaleString());
    });
  }

  closeErrorMessage() {
    this.visibleErrorMessage = false;
  }
}
