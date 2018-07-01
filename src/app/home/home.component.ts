import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageIdentifier:string = '';
  pageUrl:string = '';


  data: any;
  constructor(@Inject(DOCUMENT) private document: any,public http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://api.ipstack.com/check?access_key=19808360eb5adfabcd2ea1f1a931a5fe").subscribe(
      data=>{
        //console.log(data);
        this.data = JSON.stringify(data);
      }
    );

    this.pageIdentifier = 'home';
    this.pageUrl = this.document.location.href;
  }
}
