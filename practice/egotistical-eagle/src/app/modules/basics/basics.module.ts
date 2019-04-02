import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BasicsRootComponent,
  BasicsInfoComponent,
  BasicsBindingComponent, 
  BasicsPetComponent,
  BasicsDirectivesComponent,
  BasicsMiscComponent,
  BasicsRoutingComponent
} from './components';
import {
  BasicHighlightDirective,
  BetterHighlightDirective,
  UnlessDirective
} from './directives';

@NgModule({
  declarations: [
    BasicsRootComponent,
    BasicsInfoComponent,
    BasicsBindingComponent,
    BasicsPetComponent,
    BasicsDirectivesComponent,
    BasicsMiscComponent,
    BasicsRoutingComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    // ?
  ],
  providers: []
})
export class BasicsModule { }