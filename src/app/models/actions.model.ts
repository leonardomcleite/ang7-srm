export class ActiosModel {
  label: string;
  selectable: boolean;
  value?: string;

  constructor(label: string, selectable: boolean, value?: string) {
    this.label = label;
    this.selectable = selectable;
    this.value = value;
  }
}
