import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../services/app.layout.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  visible: boolean = false;
  constructor(public layoutService: LayoutService, public router: Router) {}
  showDialog() : void{
    this.visible = true;
  }
}
