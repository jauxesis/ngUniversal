import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

import { HomeComponent } from './home/home.component';
import { TemphomeComponent } from './temphome/temphome.component';
import { MypageComponent } from './mypage/mypage.component';

const routes: Routes = [
    { 
        path: '', 
        //redirectTo: '/login', 
        component:HomeComponent,
        pathMatch: 'full' ,
        data: { title: 'Login | Cashaa' }
    },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Login | Cashaa' }
    },
    {
        path: 'pick',
        component: TemphomeComponent,
        data: { title: 'Home | Cashaa' }
    },
    {
        path: 'my',
        component: MypageComponent,
        data: { title: 'Home | Cashaa' }
    },
    {
        path: '**',
        component: HomeComponent,
        data: { title: 'Login | Cashaa' }
    },
];
@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes, { enableTracing: true,useHash: false })
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
