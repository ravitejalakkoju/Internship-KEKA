import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule
  ], 
  exports: [
    MainComponent
  ]
})

export class MainModule { }
