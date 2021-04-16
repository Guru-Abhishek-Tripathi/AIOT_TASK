import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../Shared/common-data.service';

@Component({
  selector: 'app-horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html',
  styleUrls: ['./horizontal-navbar.component.css']
})
export class HorizontalNavbarComponent implements OnInit {

  constructor(private service: CommonDataService) { }
  nav: number = 1;
  ngOnInit(): void {

  }
  getVisible(){
    this.nav = (this.nav + 1) % 2;
    this.service.obs.next(this.nav);
  }

}
