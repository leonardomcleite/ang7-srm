import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatDividerModule, MatIconModule, MatListModule, MatRippleModule } from '@angular/material';
import { SideMenuComponent } from './side-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

    MatListModule,
    MatDividerModule,
    MatRippleModule,
    MatIconModule
  ],
  exports: [
    SideMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SideMenuModule { }
