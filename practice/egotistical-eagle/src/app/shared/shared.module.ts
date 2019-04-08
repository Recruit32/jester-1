import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageNotFoundComponent
  ],
  providers: []
})
export class SharedModule { }
export { PageNotFoundComponent }