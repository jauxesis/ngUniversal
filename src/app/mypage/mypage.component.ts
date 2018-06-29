import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent implements OnInit {

	pageIdentifier:string = '';
	pageUrl:string = '';

  constructor(
   @Inject(DOCUMENT) private document: any,
  	public routes:Routes
  	) { }

  ngOnInit() {
  	this.pageIdentifier = 'pick';
  	this.pageUrl = this.document.location.href;
  }

}
