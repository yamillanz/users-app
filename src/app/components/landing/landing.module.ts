import { NgModule } from '@angular/core';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    LandingRoutingModule,
    DividerModule,
    StyleClassModule,
    DialogModule,
    PanelModule,
    ButtonModule,
  ],
  declarations: [LandingComponent],
  exports: [LandingComponent],
})
export class LandingModule {}
