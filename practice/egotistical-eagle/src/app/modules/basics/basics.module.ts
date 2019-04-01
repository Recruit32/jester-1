import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BasicsBindingComponent } from './components';


@NgModule({
  declarations: [
    BasicsBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    BasicsBindingComponent
  ],
  providers: []
})
export class BasicsModule { }