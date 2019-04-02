import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basics-binding',
  templateUrl: './basics-binding.component.html',
  styleUrls: ['../../basics.shared.scss', './basics-binding.component.scss']
})
export class BasicsBindingComponent implements OnInit {
  myPets: string[] = ['Lucky', 'Claw', 'Yoshi'];
  petName: string = 'Roar';
  petName2: string = 'Giant';
  allowNewPet: boolean = false;
  petCreated: boolean = false;

  constructor() {
  }

  ngOnInit() { 
    setTimeout(() => {
      this.allowNewPet = true;
    }, 2000);
  }

  onUpdatePetName(event: Event) {
    this.petName = (<HTMLInputElement>event.target).value;
  }

  onCreatePet() {
    this.petCreated = true;
    this.myPets.push(this.petName2);
  }
}
