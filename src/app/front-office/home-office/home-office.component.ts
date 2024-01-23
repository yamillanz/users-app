import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppTopBarComponent } from '../topbar/app.topbar.component';
import { SidebarModule } from 'primeng/sidebar';
import { LayoutService } from '../../services/app.layout.service';
import { AppMenuComponent } from '../menu/app.menu.component';
import { AuthService } from '../../auth/services/auth.service';
@Component({
  selector: 'app-home-office',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AppTopBarComponent, SidebarModule, AppMenuComponent, RouterModule],
  templateUrl: './home-office.component.html',
  styleUrl: './home-office.component.scss',
})
export class HomeOfficeComponent {
  sidebarVisible = false;
  authService: AuthService = inject(AuthService);

  constructor(private layoutService: LayoutService) {
    effect(() => {
      const status = this.layoutService.ismenuHoverActiveSignal();
      this.sidebarVisible = status;
    });

    // this.layoutService.isMenuHoverActive.pipe().subscribe((value) => {
    //   console.log('value', value);
    // });
  }
  toggleSidebar() {
    // this.sidebarVisible = !this.sidebarVisible;
  }
}
