import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import UserBase from '../../models/user';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../../users/users.service';
import { first, firstValueFrom } from 'rxjs';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonModule, CommonModule, InputTextModule, ReactiveFormsModule, DialogModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  userForm!: FormGroup;
  router = inject(Router);
  authService = inject(AuthService);
  usersService = inject(UsersService);

  user: UserBase = {} as UserBase;
  visibleErrorMessage: boolean = false;
  visibleSuccessMessage: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(8)]),
      user_id: new FormControl(''),
    });
  }

  ngOnInit() {
    this.authService.userState$.pipe(first()).subscribe(async (user) => {
      if (!user) {
        this.router.navigate(['']);
        return;
      }
      this.user = (await firstValueFrom(this.usersService.getUser(user.id))) as UserBase;
      this.userForm.setValue({
        name: this.user.name,
        last_name: this.user.last_name,
        email: this.user.email,
        password: '',
        user_id: this.user.user_id,
      });
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.userForm.value);
    const id_update = this.user.id === undefined || !this.user.id ? '' : String(this.user.id);
    if (this.userForm.value.password === '') {
      delete this.userForm.value.password;
    }
    this.usersService.updateUser(id_update, this.userForm.value).subscribe((res) => {
      if (res.error) {
        console.log('Error', res.error.message);
        this.errorMessage = res.error.message.toString();
        this.visibleErrorMessage = true;
        this.visibleSuccessMessage = false;
        return;
      }
      this.successMessage = 'User updated successfully';
      if (!this.userForm.value.password) {
        console.log('que hay', this.userForm.value.password);
        this.successMessage = 'User updated successfully, but the password was not updated';
      }
      this.visibleSuccessMessage = true;
      this.visibleErrorMessage = false;
    });
    // this.router.navigate(['/']);
    return false;
  }

  closeErrorMessage() {
    this.visibleErrorMessage = false;
    this.visibleSuccessMessage = false;
  }
  logout() {
    this.authService.logout();
  }
}
