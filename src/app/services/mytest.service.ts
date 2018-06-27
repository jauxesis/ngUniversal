import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MytestService {

  constructor(public http:HttpClient) { }


  getIP(){
  	return new Promise((resolve,reject)=>{
	  	this.http.get("http://api.ipstack.com/check?access_key=19808360eb5adfabcd2ea1f1a931a5fe").subscribe(
	  		data=>{
	  			if(data)
	  				resolve(data);
	  			else
	  				reject({"status":400,"msg":"ok"})
	  		}
	  	)
	});
  }
}
