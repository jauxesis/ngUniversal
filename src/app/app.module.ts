import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TemphomeComponent } from './temphome/temphome.component';
import { MypageComponent } from './mypage/mypage.component';

import { DisqusModule } from 'angular2-disqus';

import { HttpClientModule } from '@angular/common/http';

// the second parameter 'fr' is optional
// registerLocaleData(localeFr, 'fr');
registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemphomeComponent,
    MypageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'heroes' }),
    AppRoutingModule,
    HttpClientModule,
    DisqusModule,
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr' },{provide: APP_BASE_HREF, useValue: '/app'} ],
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
