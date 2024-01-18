import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    LandingRoutingModule,
    DividerModule,
    StyleClassModule,
    DialogModule,
    PanelModule,
    ButtonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
  ],
  declarations: [LandingComponent],
  exports: [LandingComponent],
})
export class LandingModule {}
