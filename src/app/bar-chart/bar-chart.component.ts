import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      text: 'In Out Status',
      display: true
    }
  };
  public barChartLabels = ['Manager', 'Employees', 'Security Gaurds'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 47], label: 'Department A'},
    {data: [54, 48, 37], label: 'Department B'},
    {data: [38, 41, 49], label: 'Department C'}
  ];
  public barChartColors: Array < any > = [{
    backgroundColor: ['green','green','green'],
    borderColor: ['rgba(135,206,250,1)']
 }];

  ngOnInit(): void {
  }

}
