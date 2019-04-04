import { PracticeComponent } from './practice.component';
import { SERVER_MANAGER_ROUTES } from './server-manager/server-manager.routes';

export const PRACTICE_ROUTES = [
  { path: '', component: PracticeComponent },
  { 
    path: 'server-manager', 
    children: SERVER_MANAGER_ROUTES 
  }
]