import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDashboardScaffoldComponent } from './scaffolds/customer-dashboard-scaffold/customer-dashboard-scaffold.component';
import { AdminDashboardScaffoldComponent } from './scaffolds/admin-dashboard-scaffold/admin-dashboard-scaffold.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminDashboardScaffoldComponent,
  },
  {
    path: '',
    component: CustomerDashboardScaffoldComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
