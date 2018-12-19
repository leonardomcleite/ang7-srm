import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { CustomSelectComponent } from './custom-select.component';

@NgModule({
  declarations: [
    CustomSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    CustomSelectComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomSelectModule { }
