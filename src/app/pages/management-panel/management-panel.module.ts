import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';
import { PageHeaderModule } from 'src/app/components/page-header/page-header.module';
import { ManagementPanelRoutingModule } from './management-panel-routing.module';
import { ManagementPanelComponent } from './management-panel.component';
import { CustomSelectModule } from 'src/app/components/custom-select/custom-select.module';

@NgModule({
  declarations: [
    ManagementPanelComponent
  ],
  imports: [
    CommonModule,
    ManagementPanelRoutingModule,

    PageHeaderModule,
    CustomSelectModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagementPanelModule { }
