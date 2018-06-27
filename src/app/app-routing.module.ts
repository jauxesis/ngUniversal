import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TemphomeComponent } from './temphome/temphome.component';

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
