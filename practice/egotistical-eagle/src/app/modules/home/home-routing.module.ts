import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BASICS_ROUTES } from '../basics/basics.routes';
import { LearnComponent } from './pages/learn/learn.component';
import { PRACTICE_ROUTES } from '../practice/practice.routes';
import { PageNotFoundComponent, ErrorPageComponent } from 'src/app/shared/components';

const routes: Routes = [
  { path: '', children: [] },
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
  },
  // redirecting and wildcard routes
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

/* 
* By default, Angular matches paths by prefix
* That means the following route will match both /recipes and just /
* { path: '', redirectTo: '/somewhere-else' }
* This route will not ALWAYS redirect you, hence Angular gives an error
* To fix this behavior, you need to change matching strategy to "full":
* { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
*/

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
