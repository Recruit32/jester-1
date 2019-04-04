export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'CriticalCoconut',
      status: 'online'
    },
    {
      id: 2,
      name: 'DeadInside',
      status: 'offline' 
    },
    {
      id: 3,
      name: 'MalwareMachine',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      s => s.id === id
    );
    return server;
  }

  updateServer(id: number, serverInfo: { name: string, status: string}) {
    const server = this.servers.find(
      s => s.id === id
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}