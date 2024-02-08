import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import UserBase from '../../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonModule, CommonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  userForm!: FormGroup;
  router = inject(Router);
  authService = inject(AuthService);

  user!: UserBase;
  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
      user_id: new FormControl(''),
    });
    this.authService.userState$.subscribe((user) => {
      this.user = user;
      // this.userForm.setValue({
      //   name: this.user.name,
      //   last_name: this.user.last_name,
      //   email: this.user.email,
      //   password: '',
      //   user_id: this.user.user_id,
      // });
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.userForm.value);
    // this.router.navigate(['/']);
    return false;
  }
}
