import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { NotificationComponent } from './notification.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  declarations: [
    NotificationComponent
  ],
  exports: [
    NotificationComponent
  ],
  entryComponents: [
    NotificationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotificationModule { }
