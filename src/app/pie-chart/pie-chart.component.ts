import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      text: 'Employee Status',
      display: true
    }
  };
  public pieChartLabels = ['IN', 'Lunch Out', 'Official Out', 'Personal Out'];
  public pieChartData = [29, 22, 28, 21];
  public pieChartType = 'pie';
  public pieChartColors: Array < any > = [{
    backgroundColor: ['green', 'yellow', 'brown', 'orange'],
    borderColor: ['rgba(135,206,250,1)', 'rgba(106,89,205,1)', 'rgba(148,159,177,1)']
 }];


  ngOnInit(): void {
  }

}
