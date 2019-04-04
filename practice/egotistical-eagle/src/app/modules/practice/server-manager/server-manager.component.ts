import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'server-manager',
  templateUrl: './server-manager.component.html',
  styleUrls: ['./server-manager.component.scss']
})
export class ServerManagerComponent implements OnInit {
  navLinks: { display: string, value: string, exact: boolean }[] = [
    { 
      display: 'Home',
      value: '/learn/practice/server-manager',
      exact: true
    },
    { 
      display: 'Servers',
      value: '/learn/practice/server-manager/servers',
      exact: false
    },
    { 
      display: 'Users',
      value: '/learn/practice/server-manager/users',
      exact: false
    }
  ];

  constructor(
    private router: Router, 
    private route: ActivatedRoute
  ) { }
  
  ngOnInit() { }

  onLoadServer(id: number) {
    // complex calculation...
    // programatically navigate:
    this.router.navigate(
      ['servers', id], 
      { 
        // queryParams: { allowEdit: 1 }, 
        // fragment: 'loading', 
        relativeTo: this.route 
      }
    );
  }

  isServerManagerUrl(): boolean {
    return this.router.url === '/learn/practice/server-manager';
  }
}