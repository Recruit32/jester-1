import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basics-binding',
  templateUrl: './basics-binding.component.html',
  styleUrls: ['./basics-binding.component.scss']
})
export class BasicsBindingComponent implements OnInit {
  petName: string = 'Roar';

  ngOnInit() {

  }

  onUpdatePetName(event: Event) {
    this.petName = (<HTMLInputElement>event.target).value;
  }
}
