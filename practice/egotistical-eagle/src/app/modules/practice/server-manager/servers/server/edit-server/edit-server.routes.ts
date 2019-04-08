import { EditServerComponent } from './edit-server.component';
import { CanDeactivateGuard } from '../../../services/can-deactivate-guard.service';

export const EDIT_SERVER_ROUTES = [
  { path: '', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
];