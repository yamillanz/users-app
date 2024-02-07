import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
// import { LayoutService, AppConfig } from '../app/services/app.layout.service';
// import { authGuard } from './shared/guards/auth.guard';
// import { PrimeBlocksModule } from './components/primeblocks/primeblocks.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // providers: [LayoutService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  primengConfig = inject(PrimeNGConfig);
  // layoutService = inject(LayoutService);

  ngOnInit(): void {
    // const config: AppConfig = {
    //   ripple: true,
    //   inputStyle: 'outlined',
    //   menuMode: 'overlay',
    //   colorScheme: 'dark',
    //   theme: 'saga-blue',
    //   scale: 14,
    // };
    this.primengConfig.ripple = true;
    // this.layoutService.config = config;
  }
  title = 'fi-app';
}
