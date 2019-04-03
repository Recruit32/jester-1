import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basics-root',
  templateUrl: './basics-root.component.html',
  styleUrls: ['../../basics.shared.scss', './basics-root.component.scss']
})
export class BasicsRootComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('BasicsRootComponent ngOnInit()'); 
  }
}