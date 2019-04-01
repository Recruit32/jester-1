import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicsBindingComponent, BasicsPetComponent } from './components';


@NgModule({
  declarations: [
    BasicsBindingComponent,
    BasicsPetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    BasicsBindingComponent
  ],
  providers: []
})
export class BasicsModule { }