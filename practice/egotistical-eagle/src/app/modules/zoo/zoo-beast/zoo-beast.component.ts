import { Component, Input } from '@angular/core';
import { BeastsService } from '../../../demo-services/beasts.service'; 

@Component({
  selector: 'zoo-beast',
  templateUrl: './zoo-beast.component.html',
  styleUrls: ['./zoo-beast.component.scss']
})
export class ZooBeastComponent {
  @Input() beast: { type: string, name: string, mood: string };
  @Input() id: number;

  constructor(private beastsService: BeastsService) { }
  
  onSetMoodTo(mood: string) {
    this.beastsService.updateMood(this.id, mood);
    this.beastsService.moodUpdated.emit(mood);
  }
}