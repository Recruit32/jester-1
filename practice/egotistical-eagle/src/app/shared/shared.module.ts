import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { 
  PageNotFoundComponent,
  ErrorPageComponent 
} from './components';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    ErrorPageComponent
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