import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetComponent } from './bottom-sheet.component';
import { MatBottomSheetModule, MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    BottomSheetComponent
  ],
  imports: [
    CommonModule,

    MatBottomSheetModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    BottomSheetComponent
  ],
  entryComponents: [
    BottomSheetComponent
  ]
})
export class BottomSheetModule { }
