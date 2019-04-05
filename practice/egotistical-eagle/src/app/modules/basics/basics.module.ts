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
  BasicsRoutingComponent,
  BasicsServicesComponent,
  BasicsTypescriptComponent
} from './components';
import {
  BasicHighlightDirective,
  BetterHighlightDirective,
  UnlessDirective
} from './directives';
// import { BeastsService } from 'src/app/demo-services/beasts.service';
// import { LoggingService } from 'src/app/demo-services/logging.service';
import { ZooModule } from '../zoo/zoo.module';

@NgModule({
  declarations: [
    BasicsRootComponent,
    BasicsInfoComponent,
    BasicsBindingComponent,
    BasicsPetComponent,
    BasicsDirectivesComponent,
    BasicsMiscComponent,
    BasicsRoutingComponent,
    BasicsServicesComponent,
    BasicsTypescriptComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ZooModule
  ],
  providers: []
})
export class BasicsModule { }