import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basics-directives',
  templateUrl: './basics-directives.component.html',
  styleUrls: ['../../basics.shared.scss', './basics-directives.component.scss']
})
export class BasicsDirectivesComponent implements OnInit {
  toggle: boolean = true;

  constructor() {
  }

  ngOnInit() { 
  }
}
