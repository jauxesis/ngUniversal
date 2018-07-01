import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap'; //to fetch url params

@Component({
  selector: 'app-temphome',
  templateUrl: './temphome.component.html',
  styleUrls: ['./temphome.component.scss']
})
export class TemphomeComponent implements OnInit {

  pageIdentifier:string = '';
  pageUrl:string = '';

  constructor(private route: ActivatedRoute,
    private router: Router,@Inject(DOCUMENT) private document: any,public http:HttpClient) { }

  ngOnInit() {
    
    
    let iid = this.route.snapshot.paramMap.get("id");
    if(iid == null || iid == ""){
      this.pageIdentifier = 'home';
      this.pageUrl = this.document.location.href;
      console.log("none",this.pageIdentifier,this.pageUrl);
    }else{
      this.route.params.subscribe(params => {
          let id = params['id'];
          this.pageIdentifier = id;
          this.pageUrl = this.document.location.href;
          console.log("isid",this.pageIdentifier,this.pageUrl);
      });
    }
  }


}
