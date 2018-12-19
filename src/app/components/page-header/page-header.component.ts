import { Component, Input } from '@angular/core';
import { HeaderOptionsModel } from '../../models/header-options.model';

@Component({
  selector: 'srm-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  @Input() headerOptions: HeaderOptionsModel;

}
