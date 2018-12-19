import { Component } from '@angular/core';
import { Animations } from '../../animations/animations';
import { HeaderOptionsModel } from '../../models/header-options.model';

@Component({
  selector: 'srm-receivable',
  templateUrl: './receivable.component.html',
  styleUrls: ['./receivable.component.scss'],
  animations: [Animations.FadeInAndFadeOut]
})
export class ReceivableComponent {

  headerOptions: HeaderOptionsModel = new HeaderOptionsModel('Ant. de Recebíveis', 'graph');

}
