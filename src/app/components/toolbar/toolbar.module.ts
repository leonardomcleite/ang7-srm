import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule, MatToolbarModule, MatBadgeModule, MatTooltipModule, MatBottomSheetModule } from '@angular/material';
import { CustomSelectModule } from '../custom-select/custom-select.module';
import { ToolbarComponent } from './toolbar.component';
import { RouterModule } from '@angular/router';
import { BottomSheetModule } from '../bottom-sheet/bottom-sheet.module';


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    BottomSheetModule,
    CustomSelectModule,

    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatBottomSheetModule
  ],
  exports: [
    ToolbarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolbarModule { }
