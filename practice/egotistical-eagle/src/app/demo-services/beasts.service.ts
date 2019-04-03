import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class BeastsService {
  beasts = [
    {
      type: 'Lion',
      name: 'Brutus',
      mood: 'angry'
    },
    {
      type: 'Polar Bear',
      name: 'Iceberg',
      mood: 'sad'
    },
    {
      type: 'Worm',
      name: 'Fatty',
      mood: 'happy'
    }
  ];
  moodUpdated = new EventEmitter<string>(); // cross-component communication

  constructor(private loggingService: LoggingService) { }

  addBeast(type: string, name: string, mood: string) {
    this.beasts.push({ type, name, mood });
    this.loggingService.logMoodChange(mood);
  }

  updateMood(id: number, mood: string) {
    this.beasts[id].mood = mood;
    this.loggingService.logMoodChange(mood);
  }
}
