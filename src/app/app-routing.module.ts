import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/homepage/homepage.module#HomepageModule',
    canActivate: [AuthService],
  },
  {
    path: 'management-panel',
    loadChildren: './pages/management-panel/management-panel.module#ManagementPanelModule',
    canActivate: [AuthService]
  },
  {
    path: 'receivable',
    loadChildren: './pages/receivable/receivable.module#ReceivableModule',
    canActivate: [AuthService]
  },
  {
    path: 'digital-account',
    loadChildren: './pages/digital-account/digital-account.module#DigitalAccountModule',
    canActivate: [AuthService]
  },
  {
    path: 'not-found',
    loadChildren: './pages/page-not-found/page-not-found.module#PageNotFoundModule',
    canActivate: [AuthService]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
