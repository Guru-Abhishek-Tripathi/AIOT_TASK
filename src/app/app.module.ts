import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalNavbarComponent } from './vertical-navbar/vertical-navbar.component';
import { HorizontalNavbarComponent } from './horizontal-navbar/horizontal-navbar.component';
import { ChartsComponent } from './charts/charts.component';
import { ReportsComponent } from './reports/reports.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PieChartContractComponent } from './pie-chart-contract/pie-chart-contract.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalNavbarComponent,
    HorizontalNavbarComponent,
    ChartsComponent,
    ReportsComponent,
    BarChartComponent,
    PieChartComponent,
    PieChartContractComponent,
    RadarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
