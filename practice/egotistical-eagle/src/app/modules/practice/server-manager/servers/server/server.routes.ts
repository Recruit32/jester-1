import { ServerComponent } from './server.component';
import { EDIT_SERVER_ROUTES } from './edit-server/edit-server.routes';

export const SERVER_ROUTES = [
  { path: '', component: ServerComponent },
  { 
    path: 'edit',
    component: ServerComponent,
    children: EDIT_SERVER_ROUTES 
  }
];