import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sm-home',
  templateUrl: './home.component.html'
})
export class SmHomeComponent implements OnInit {
  constructor(private router: Router) { }
  
  ngOnInit() { }

  onLoadServer(id: number) {
    // this.router.navigate(['servers'])
  }
}