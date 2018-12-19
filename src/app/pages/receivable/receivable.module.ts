import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { PageHeaderModule } from 'src/app/components/page-header/page-header.module';
import { ReceivableRoutingModule } from './receivable-routing.module';
import { ReceivableComponent } from './receivable.component';

@NgModule({
  declarations: [ReceivableComponent],
  imports: [
    CommonModule,
    ReceivableRoutingModule,

    PageHeaderModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReceivableModule { }
