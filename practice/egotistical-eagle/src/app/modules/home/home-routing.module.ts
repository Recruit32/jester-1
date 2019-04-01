import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnComponent } from './pages/learn/learn.component';
import { BasicsBindingComponent } from '../basics/components/';


const routes: Routes = [
  { path: '', children: [] },
  { 
    path: 'learn', 
    component: LearnComponent, 
    children: [
      {
        path: 'binding',
        component: BasicsBindingComponent
      }
    ]
  },
  // { path: 'learn/binding', component: BasicsBindingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
