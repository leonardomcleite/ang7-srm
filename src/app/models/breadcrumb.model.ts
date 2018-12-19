import { Params } from '@angular/router';

export class BreadcrumbModel {
  title: string;
  url: string;
  params ? : Params;
}
