import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
        path: 'my',
        component: MypageComponent,
        data: { title: 'Mypage | Cashaa' }
    },
    {
        path: 'my/:id',
        component: MypageComponent,
        data: { title: 'Mypage | Cashaa' }
    },
    {
        path: 'temp',
        component: TemphomeComponent,
        data: { title: 'Mypage | Cashaa' }
    },
    {
        path: 'temp/:id',
        component: TemphomeComponent,
        data: { title: 'Mypage | Cashaa' }
    },
    {
        path: 'page/temp',
        component: TemphomeComponent,
        data: { title: 'Mypage | Cashaa' }
    },
    {
        path: 'page/temp/:id',
        component: TemphomeComponent,
        data: { title: 'Mypage | Cashaa' }
    },
    {
        path: '**',
        component: TemphomeComponent,
        data: { title: 'Login | Cashaa' }
    },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
