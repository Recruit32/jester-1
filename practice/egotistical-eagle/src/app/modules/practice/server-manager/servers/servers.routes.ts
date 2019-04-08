import { ServersComponent } from './servers.component';
import { SERVER_ROUTES } from './server/server.routes';
import { AuthGuard } from '../services/auth-guard.service';

export const SERVERS_ROUTES = [
  { path: '', component: ServersComponent },
  { 
    path: ':id',
    canActivate: [AuthGuard], 
    children: SERVER_ROUTES 
  }
];