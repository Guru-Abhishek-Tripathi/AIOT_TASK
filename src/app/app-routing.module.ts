import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: "Dashboard",
    component: ChartsComponent
  },
  {
    path: "Reports",
    component: ReportsComponent
  },
  {
    path: '**',
    redirectTo: 'Dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





