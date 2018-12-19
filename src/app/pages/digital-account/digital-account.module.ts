import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalAccountRoutingModule } from './digital-account-routing.module';
import { DigitalAccountComponent } from './digital-account.component';
import { PageHeaderModule } from 'src/app/components/page-header/page-header.module';
import { MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [DigitalAccountComponent],
  imports: [
    CommonModule,
    DigitalAccountRoutingModule,

    PageHeaderModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DigitalAccountModule { }
