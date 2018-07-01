import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DisqusModule } from 'angular2-disqus';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TemphomeComponent } from './temphome/temphome.component';
import { MypageComponent } from './mypage/mypage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemphomeComponent,
    MypageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'heroes' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DisqusModule,
    FormsModule,ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
  	CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { 
	constructor(
	    @Inject(PLATFORM_ID) private platformId: Object,
	    @Inject(APP_ID) private appId: string) {
	    const platform = isPlatformBrowser(platformId) ?
	      'in the browser' : 'on the server';
	    console.log(`Running ${platform} with appId=${appId}`);
	}
}
