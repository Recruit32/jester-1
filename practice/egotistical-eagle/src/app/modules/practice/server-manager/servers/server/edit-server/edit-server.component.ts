import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../../services/servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'sm-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(
      this.server.id, 
      { name: this.serverName, status: this.serverStatus }
    );
  }
}