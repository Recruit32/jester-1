import { Component, Input } from '@angular/core';

@Component({
  selector: 'basics-pet',
  templateUrl: './basics-pet.component.html',
})
export class BasicsPetComponent { 
  @Input() name: string;
  mood: string = '';

  constructor() {
    this.mood = Math.random() > 0.5 ? '😆' : '😡';
  }

  getColor() {
    return this.mood === '😡' ? 'pink' : 'lightgreen';
  }
}
