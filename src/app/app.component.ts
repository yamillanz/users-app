import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
// import { PrimeBlocksModule } from './components/primeblocks/primeblocks.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  primengConfig = inject(PrimeNGConfig);
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  title = 'poc-a17-primeng';
}
