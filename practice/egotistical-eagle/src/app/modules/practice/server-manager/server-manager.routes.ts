import { ServerManagerComponent } from './server-manager.component';
import { SERVERS_ROUTES } from './servers/servers.routes';
import { USERS_ROUTES } from './users/users.routes';
import { AuthGuard } from './services/auth-guard.service';

export const SERVER_MANAGER_ROUTES = [
  { path: '', component: ServerManagerComponent },
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    // ? canActivateChild: [AuthGuard],
    component: ServerManagerComponent,
    children: SERVERS_ROUTES
  },
  { 
    path: 'users',
    component: ServerManagerComponent, 
    children: USERS_ROUTES 
  }
];