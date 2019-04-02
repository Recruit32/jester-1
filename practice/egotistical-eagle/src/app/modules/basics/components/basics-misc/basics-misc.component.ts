import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basics-misc',
  templateUrl: './basics-misc.component.html',
  styleUrls: ['../../basics.shared.scss', './basics-misc.component.scss']
})
export class BasicsMiscComponent implements OnInit {
  value: number = 100;
  
  constructor() {
  }

  ngOnInit() {
  }
}