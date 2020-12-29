import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDashboardScaffoldComponent } from './scaffolds/customer-dashboard-scaffold/customer-dashboard-scaffold.component';
import { AdminDashboardScaffoldComponent } from './scaffolds/admin-dashboard-scaffold/admin-dashboard-scaffold.component';

// Import your feature modules the same way you would any other module
import { CustomerDashboardModule } from './custom-modules/customer-dashboard/customer-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDashboardScaffoldComponent,
    AdminDashboardScaffoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
