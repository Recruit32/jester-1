import { ServerComponent } from './server.component';
import { EDIT_SERVER_ROUTES } from './edit-server/edit-server.routes';
import { ServerResolver } from '../../services/server-resolver.service';

export const SERVER_ROUTES = [
  { path: '', component: ServerComponent, resolve: { pineapple: ServerResolver } },
  { 
    path: 'edit',
    component: ServerComponent,
    children: EDIT_SERVER_ROUTES 
  }
];