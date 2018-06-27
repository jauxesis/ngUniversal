import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TemphomeComponent } from './temphome/temphome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemphomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'heroes' }),
    AppRoutingModule
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
