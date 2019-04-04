import { ServersComponent } from './servers.component';
import { SERVER_ROUTES } from './server/server.routes';

export const SERVERS_ROUTES = [
  { path: '', component: ServersComponent },
  { path: ':id', children: SERVER_ROUTES }
];