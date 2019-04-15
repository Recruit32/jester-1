import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PracticeComponent } from './practice.component';
import { ServerManagerComponent } from './server-manager/server-manager.component';
import { ServersComponent } from './server-manager/servers/servers.component';
import { ServersService } from './server-manager/services/servers.service';
import { ServerComponent } from './server-manager/servers/server/server.component';
import { EditServerComponent } from './server-manager/servers/server/edit-server/edit-server.component';
import { UsersComponent } from './server-manager/users/users.component';
import { UserComponent } from './server-manager/users/user/user.component';
import { AuthService } from './server-manager/services/auth.service';
import { AuthGuard } from './server-manager/services/auth-guard.service';
import { CanDeactivateGuard } from './server-manager/services/can-deactivate-guard.service';
import { ServerResolver } from './server-manager/services/server-resolver.service';


@NgModule({
  declarations: [
    PracticeComponent,
    ServerManagerComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver]
})
export class PracticeModule { }
