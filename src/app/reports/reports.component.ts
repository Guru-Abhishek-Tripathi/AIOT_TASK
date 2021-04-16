import { Component, OnInit } from '@angular/core';
import * as Chart from "chart.js";
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  chart:any=[];
  d:number[] = [40,44,42,36,42,46,52,53,50,56,49,47];
  ngOnInit(): void {
    this.chart = new Chart('canvas',{
      type: 'line',
      data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
        datasets:[
          {
            label:'Old Employees',
            data:this.d,
            backgroundColor:'lightred',
            borderColor:'lightred',
            fill:false,
            pointBorderColor: 'grey',
            pointBorderWidth:2,
            pointRadius:4
          },
          {
            label:'New Employees',
            data:[34,32,35,38,41,45,39,38,45,49,51,54],
            backgroundColor:'darkgreen',
            borderColor:'darkgreen',
            fill:false,
            pointBorderColor: 'grey',
            pointBorderWidth:2,
            pointRadius:4
          },
          {
            label:'Contract Employees',
            data:[60,63,66,58,54,57,60,51,46,42,38,39],
            backgroundColor:'orange',
            borderColor:'orange',
            fill:false,
            pointBorderColor: 'grey',
            pointBorderWidth:2,
            pointRadius:4
          },
          {
            label:'Freelancers',
            data:[63,67,62,71,72,75,77,78,81,75,81,90],
            backgroundColor:'blue',
            borderColor:'blue',
            fill:false,
            pointBorderColor: 'grey',
            pointBorderWidth:2,
            pointRadius:4
          },
          {
            label:'Security Gaurds',
            data:[74,70,68,67,71,73,65,66,68,62,58,54],
            backgroundColor:'lightgreen',
            borderColor:'lightgreen',
            fill:false,
            pointBorderColor: 'grey',
            pointBorderWidth:2,
            pointRadius:4
          }
        ]
      },
      options: {
        plugins:{
          title: {
            display: true,
            text: 'Employee Report'
        }
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 20
                }
            }]
        },
        legend:{
          display:true,
          position:"bottom",
          labels:{
            boxWidth:20
          }
        }
      }
    })
  }

}
