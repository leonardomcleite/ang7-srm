import { Component, Input } from '@angular/core';

@Component({
  selector: 'srm-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent {

  @Input() textAlign: string;
}
