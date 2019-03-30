import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myBeasts = [
    { 
      type: 'lion', 
      description: 'a large tawny-colored cat that lives in prides, found in Africa and northwestern India',
      strength: 25, 
      imageUrl: 'https://picsum.photos/200/200' 
    },
    { 
      type: 'elephant', 
      description: 'a heavy plant-eating mammal with a prehensile trunk, long curved ivory tusks, and large ears, native to Africa and southern Asia', 
      strength: 50,
      imageUrl: 'https://picsum.photos/200/200'  
    },
    { 
      type: 'mouse', 
      description: 'a small rodent that typically has a pointed snout, relatively large ears and eyes, and a long tail', 
      strength: 1,
      imageUrl: 'https://picsum.photos/200/200'  
    },
    { 
      type: 'parrot', 
      description: 'a bird, often vividly colored, with a short down-curved hooked bill, grasping feet, and a raucous voice, found especially in the tropics and feeding on fruits and seeds', 
      strength: 2,
      imageUrl: 'https://picsum.photos/200/200'  
    },
    { 
      type: 'tortoise', 
      description: 'a turtle, typically a herbivorous one that lives on land', 
      strength: 8,
      imageUrl: 'https://picsum.photos/200/200'  
    }
  ];

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  onChangeFirst(): void {
    this.myBeasts[0].description = 'don\'t hurt me, bro';
  }

  onDestroyFirst(): void {
    this.myBeasts.splice(0, 1);
  }

  onStrongBeastAdded(beastData: { 
    beastType: string, 
    beastDescription: string 
  }): void {
    this.myBeasts.push({
      type: beastData.beastType,
      description: beastData.beastDescription,
      strength: this.getRandomInt(21, 101),
      imageUrl: 'https://picsum.photos/200/200'
    });
  }

  onWeakBeastAdded(beastData: { 
    beastType: string, 
    beastDescription: string 
  }): void {
    this.myBeasts.push({
      type: beastData.beastType,
      description: beastData.beastDescription,
      strength: this.getRandomInt(1, 21),
      imageUrl: 'https://picsum.photos/200/200'
    });
  }
}
