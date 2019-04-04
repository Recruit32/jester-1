import { UsersComponent } from './users.component';
import { USER_ROUTES } from './user/user.routes';

export const USERS_ROUTES = [
  { path: '', component: UsersComponent },
  { path: ':id/:name', children: USER_ROUTES }
];