import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalAccountComponent } from './digital-account.component';

const routes: Routes = [
  {
    path: '',
    component: DigitalAccountComponent,
    data: {
      breadcrumb: 'Conta Digital'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalAccountRoutingModule { }
