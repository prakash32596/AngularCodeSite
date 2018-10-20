
import { NgModule,ModuleWithProviders } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';
import { AngularExamplesComponent } from './angular-examples/angular-examples.component';

import {HomeComponent} from './home/home.component';
import {AngularMaterialComponent} from './angular-material/angular-material.component';

export const Router:Routes= [
 {path:'', redirectTo:'/home', pathMatch:'full'},
 {path:'home',component:HomeComponent},
 {path:'angularexamples',component:AngularExamplesComponent},
 {path:'angularmaterial',component:AngularMaterialComponent},
];
 
export const route:ModuleWithProviders= RouterModule.forRoot(Router);