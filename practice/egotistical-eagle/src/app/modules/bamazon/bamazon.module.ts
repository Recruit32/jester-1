import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  BamazonHeaderComponent, 
  BamazonRootComponent 
} from './components';

@NgModule({
  declarations: [
    BamazonHeaderComponent,
    BamazonRootComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BamazonRootComponent
  ],
  providers: []
})
export class BamazonModule { }
export { BamazonRootComponent }