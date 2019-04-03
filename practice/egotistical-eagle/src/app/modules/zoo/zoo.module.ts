import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZooBeastComponent } from './zoo-beast/zoo-beast.component';
import { ZooNewBeastComponent } from './zoo-new-beast/zoo-new-beast.component';

@NgModule({
  declarations: [
    ZooBeastComponent,
    ZooNewBeastComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ZooBeastComponent,
    ZooNewBeastComponent
  ],
  providers: []
})
export class ZooModule { }
export { ZooBeastComponent, ZooNewBeastComponent }