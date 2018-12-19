import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageHeaderComponent } from './page-header.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    PageHeaderComponent
  ],
  imports: [
    CommonModule,

    MatIconModule
  ],
  exports: [
    PageHeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageHeaderModule { }
