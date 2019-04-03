import { Component } from '@angular/core';
import { BeastsService } from 'src/app/demo-services/beasts.service';

@Component({
  selector: 'zoo-new-beast',
  templateUrl: './zoo-new-beast.component.html',
  styleUrls: ['./zoo-new-beast.component.scss']
})
export class ZooNewBeastComponent {
  constructor(private beastsService: BeastsService) {
    this.beastsService.moodUpdated.subscribe(
      (mood: string) => alert(`New mood: ${mood}`)
    );
  }

  onCreateBeast(type: string, name: string, mood: string) {
    this.beastsService.addBeast(type, name, mood);
  }
}