import { 
  Component, 
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef 
} from '@angular/core';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {
  @Output() strongBeastCreated = new EventEmitter<{
    beastType: string,
    beastDescription: string
  }>();
  @Output() weakBeastCreated = new EventEmitter<{
    beastType: string,
    beastDescription: string
  }>();
  // newBeastType = '';
  // newBeastDesc = '';
  @ViewChild('beastDescInput') beastDescInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddStrongBeast(typeInput: HTMLInputElement) {
    this.strongBeastCreated.emit({
      beastType: typeInput.value,
      beastDescription: this.beastDescInput.nativeElement.value
    });
  }

  onAddWeakBeast(typeInput: HTMLInputElement) {
    this.weakBeastCreated.emit({
      beastType: typeInput.value,
      beastDescription: this.beastDescInput.nativeElement.value
    });
  }
}
