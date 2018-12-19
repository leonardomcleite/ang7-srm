import { Component } from '@angular/core';
import { Animations } from '../../animations/animations';
import { HeaderOptionsModel } from '../../models/header-options.model';

@Component({
  selector: 'srm-digital-account',
  templateUrl: './digital-account.component.html',
  styleUrls: ['./digital-account.component.scss'],
  animations: [Animations.FadeInAndFadeOut]
})
export class DigitalAccountComponent {

  headerOptions: HeaderOptionsModel = new HeaderOptionsModel('Conta Digital', 'arroba');

}
