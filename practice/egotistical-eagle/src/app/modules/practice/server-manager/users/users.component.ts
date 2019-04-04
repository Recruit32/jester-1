import { Component } from '@angular/core';

@Component({
  selector: 'sm-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: { id: number, name: string }[] = [
    {
      id: 1,
      name: 'Thomas'
    },
    {
      id: 2,
      name: 'Rachel'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ]
}