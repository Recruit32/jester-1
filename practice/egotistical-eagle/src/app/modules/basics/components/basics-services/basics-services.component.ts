import { Component, OnInit } from '@angular/core';
import { BeastsService } from '../../../../demo-services/beasts.service';
import { LoggingService } from '../../../../demo-services/logging.service';

@Component({
  selector: 'basics-services',
  templateUrl: './basics-services.component.html',
  styleUrls: ['../../basics.shared.scss', './basics-services.component.scss'],
  providers: [BeastsService, LoggingService]
})
export class BasicsServicesComponent implements OnInit {
  beasts: { type: string, name: string, mood: string }[] = [];

  constructor(private beastsService: BeastsService) { }

  ngOnInit() {
    console.log('BasicsServicesComponent ngOnInit()'); 
    this.beasts = this.beastsService.beasts;
  }
}