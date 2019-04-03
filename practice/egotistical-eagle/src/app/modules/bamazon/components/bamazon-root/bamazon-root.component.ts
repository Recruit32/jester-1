import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bamazon-root',
  templateUrl: './bamazon-root.component.html',
  styleUrls: ['../../bamazon.shared.scss', './bamazon-root.component.scss']
})
export class BamazonRootComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('Bamazon initialized.');
  }
}