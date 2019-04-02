import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BASICS_ROUTES } from '../basics/basics.routes';
import { LearnComponent } from './pages/learn/learn.component';

const routes: Routes = [
  { path: '', children: [] },
  { 
    path: 'learn/basics',
    component: LearnComponent,  
    children: BASICS_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
