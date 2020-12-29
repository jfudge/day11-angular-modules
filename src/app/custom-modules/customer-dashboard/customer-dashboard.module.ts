import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CustomerDashboardComponent } from './customer-dashboard.component';


@NgModule({
  declarations: [CustomerDashboardComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  // In order to allow usage of components from your module, you have to explicitly export them
  // If you don't export the components, they cannot be accessed. This is a control point for
  // angular modules.
  exports: [
    // Usually you only want to export items that you intend other developers to use
    // In our case, we only want to export the entire customer dashboard application
    CustomerDashboardComponent,
  ],
})
export class CustomerDashboardModule { }
