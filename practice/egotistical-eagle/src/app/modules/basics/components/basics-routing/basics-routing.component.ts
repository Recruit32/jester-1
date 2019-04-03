import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basics-routing',
  templateUrl: './basics-routing.component.html',
  styleUrls: ['../../basics.shared.scss', './basics-routing.component.scss']
})
export class BasicsRoutingComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('BasicsRoutingComponent ngOnInit()'); 
  }
}