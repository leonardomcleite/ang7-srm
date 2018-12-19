import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageContentModule } from './components/page-content/page-content.module';
import { SideMenuModule } from './components/side-menu/side-menu.module';
import { AuthService } from './services/auth/auth.service';
import { ManagementPanelService } from './services/management-panel/management-panel.service';
import { NotificationModule } from './components/notification/notifiction.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    SideMenuModule,
    PageContentModule,
    NotificationModule,
  ],
  providers: [
    AuthService,
    ManagementPanelService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
