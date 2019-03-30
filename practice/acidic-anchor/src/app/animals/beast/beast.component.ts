import { 
  Component, 
  OnInit, 
  Input,
  ViewEncapsulation,
  SimpleChanges,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-beast',
  templateUrl: './beast.component.html',
  styleUrls: ['./beast.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class BeastComponent implements OnInit {
  @Input('myBeast') beast: { 
    type: string;
    description: string;
    strength: number; 
    imageUrl: string;
  };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log(`Text content: ${this.header.nativeElement.textContent}`);
    console.log(`Text content of paragraph: ${this.paragraph.nativeElement.textContent}`);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log(`Text content of paragraph: ${this.paragraph.nativeElement.textContent}`);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log(`Text content: ${this.header.nativeElement.textContent}`);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
