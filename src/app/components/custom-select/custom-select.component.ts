import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'srm-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {

  @Input() placeholder: string;
  @Input() data: any[];
  @Input() color: string;
  @Input() backgroundColor: string;
  @Input() icon: string;
  @Input() align: string;
  @Input() width: string;

  // two-way-databinding customizado
  @Input() get optionSelected(): any { return this._optionSelected; }
  @Output() optionSelectedChange: EventEmitter<any> = new EventEmitter();
  set optionSelected(val: any) {
    this._optionSelected = val;
    this.optionSelectedChange.emit(val);
  }
  _optionSelected;

}
