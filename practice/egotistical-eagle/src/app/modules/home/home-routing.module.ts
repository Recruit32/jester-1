import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BASICS_ROUTES } from '../basics/basics.routes';
import { LearnComponent } from './pages/learn/learn.component';
import { PRACTICE_ROUTES } from '../practice/practice.routes';

const routes: Routes = [
  { path: '', children: [] },
  // { 
  //   path: 'learn/basics',
  //   component: LearnComponent,  
  //   children: BASICS_ROUTES
  // },
  {
    path: 'learn',
    children: [
      { 
        path: 'basics', 
        component: LearnComponent, 
        children: BASICS_ROUTES 
      },
      {
        path: 'practice',
        children: PRACTICE_ROUTES
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
