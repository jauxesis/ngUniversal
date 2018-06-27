import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { MytestService } from '../services/mytest.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  constructor(public http:HttpClient,public test: MytestService) { }

  ngOnInit() {
  	this.http.get("http://api.ipstack.com/check?access_key=19808360eb5adfabcd2ea1f1a931a5fe").subscribe(
  		data=>{
  			//console.log(data);
  			this.data = JSON.stringify(data);
  		}
  	);

  	this.test.getIP()
  	.then(
  		d=>{console.log("Result",d)},
  		e=>{console.log("fail",e)}
  	)
  	.catch(
  		e=>{console.log("failcatch",e)}
  	)
  }

}
