import { Component, OnInit } from '@angular/core';
import { BeastsService } from '../../../../demo-services/beasts.service';

@Component({
  selector: 'basics-services',
  templateUrl: './basics-services.component.html',
  styleUrls: ['../../basics.shared.scss', './basics-services.component.scss'],
  providers: [BeastsService]
})
export class BasicsServicesComponent implements OnInit {
  beasts: { type: string, name: string, mood: string }[] = [];

  constructor(private beastsService: BeastsService) { }

  ngOnInit() {
    this.beasts = this.beastsService.beasts;
  }
}