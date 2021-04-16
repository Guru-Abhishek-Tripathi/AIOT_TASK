import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../Shared/common-data.service';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css']
}) 
export class VerticalNavbarComponent implements OnInit {

  constructor(private service: CommonDataService) { }

  flag:number = 1;
  ngOnInit(): void {
    this.service.obs.subscribe(demo=>this.flag = demo);
  }
  
}
