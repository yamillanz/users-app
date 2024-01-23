import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../services/app.layout.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
})
export class AppTopBarComponent {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService, private authService: AuthService) {}

  logOut() {
    this.authService.logout();
  }
}
