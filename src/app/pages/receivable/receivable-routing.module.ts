import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceivableComponent } from './receivable.component';

const routes: Routes = [
  {
    path: '',
    component: ReceivableComponent,
    data: {
      breadcrumb: 'Ant. de Recebíveis'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivableRoutingModule { }
