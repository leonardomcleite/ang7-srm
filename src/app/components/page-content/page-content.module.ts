import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule, MatBottomSheetModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatTooltipModule, MatDividerModule } from '@angular/material';
import { BottomSheetModule } from '../bottom-sheet/bottom-sheet.module';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { InputSearchModule } from '../input-search/input-search.module';
import { SideMenuModule } from '../side-menu/side-menu.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { PageContentComponent } from './page-content.component';
import { CustomSelectModule } from '../custom-select/custom-select.module';

@NgModule({
  declarations: [
    PageContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    BreadcrumbModule,
    ToolbarModule,
    SideMenuModule,
    InputSearchModule,
    CustomSelectModule,

    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ],
  exports: [
    PageContentComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageContentModule { }
