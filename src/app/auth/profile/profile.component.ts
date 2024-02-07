import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonModule, CommonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  userForm!: FormGroup;
  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      user_id: new FormControl(''),
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.userForm.value);
    return false;
  }
}
