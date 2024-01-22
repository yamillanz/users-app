import { Component } from '@angular/core';
import { LayoutService } from '../../services/app.layout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  valCheck: string[] = ['remember'];

  password!: string;

  constructor(public layoutService: LayoutService) {}

  onSubmit(e: Event): boolean {
    e.preventDefault();
    const {email, password} = this.loginForm.value;
    return false;
  }
}
