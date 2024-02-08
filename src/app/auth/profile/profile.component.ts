import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import UserBase from '../../models/user';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../../users/users.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonModule, CommonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  userForm!: FormGroup;
  router = inject(Router);
  authService = inject(AuthService);
  usersService = inject(UsersService);

  user!: UserBase;
  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
      user_id: new FormControl(''),
    });
  }

  ngOnInit() {
    this.authService.userState$.subscribe(async (user) => {
      if (!user) {
        this.router.navigate(['']);
        return;
      }
      this.user = (await firstValueFrom(this.usersService.getUser(user.id))) as UserBase;
      this.userForm.setValue({
        name: this.user.name,
        last_name: this.user.last_name,
        email: this.user.email,
        password: this.user.password,
        user_id: this.user.user_id,
      });
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.userForm.value);
    // this.router.navigate(['/']);
    return false;
  }
}
