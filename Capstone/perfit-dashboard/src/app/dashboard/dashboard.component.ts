import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
//import { HeaderComponent } from '../header/header.component';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  user = ""; 


  constructor(private cookieService:CookieService) { }


  ngOnInit() {
		this.user = this.cookieService.get('username');
  }

}
