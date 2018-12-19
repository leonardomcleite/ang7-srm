import { Component } from '@angular/core';
import { Animations } from '../../animations/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [Animations.arise]
})
export class HomepageComponent {}
