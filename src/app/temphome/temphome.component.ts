import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-temphome',
  templateUrl: './temphome.component.html',
  styleUrls: ['./temphome.component.scss']
})
export class TemphomeComponent implements OnInit {

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
