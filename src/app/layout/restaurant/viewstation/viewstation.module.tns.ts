import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ViewstationRoutingModule } from './viewstation-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ViewstationComponent } from './viewstation.component';

@NgModule({
  declarations: [ViewstationComponent],
  imports: [
    ViewstationRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewstationModule { }
