import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/pages/home/home.component';
import { LearnComponent } from '../home/pages/learn/learn.component';
import { BasicsModule } from '../basics/basics.module';
import { BamazonModule } from '../bamazon/bamazon.module';
import { PracticeModule } from '../practice/practice.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    LearnComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    BasicsModule,
    PracticeModule,
    BamazonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
