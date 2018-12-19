import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementPanelComponent } from './management-panel.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementPanelComponent,
    data: {
      breadcrumb: 'Painel de Gestão'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementPanelRoutingModule { }
