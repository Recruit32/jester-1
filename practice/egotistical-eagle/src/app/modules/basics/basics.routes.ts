import {
  BasicsRootComponent,
  BasicsInfoComponent,
  BasicsBindingComponent,
  BasicsDirectivesComponent,
  BasicsMiscComponent,
  BasicsRoutingComponent
} from './components';

export const BASICS_ROUTES = [
  { path: '', component: BasicsRootComponent },
  { path: 'info', component: BasicsInfoComponent },
  { path: 'binding', component: BasicsBindingComponent },
  { path: 'directives', component: BasicsDirectivesComponent },
  { path: 'misc', component: BasicsMiscComponent },
  { path: 'routing', component: BasicsRoutingComponent }
];