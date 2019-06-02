import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { StationRoutingModule } from './station-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { StationComponent } from './station.component';

@NgModule({
  declarations: [StationComponent],
  imports: [
    StationRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class StationModule { }
