import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input-search.component';
import { MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    InputSearchComponent
  ],
  imports: [
    CommonModule,

    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    InputSearchComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputSearchModule { }
