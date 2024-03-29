import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { StationRoutingModule } from './station-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { StationComponent } from './station.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { MobileModule } from '../../../shared/modules/mobile/mobile.module.tns';

@NgModule({
  declarations: [StationComponent],
  imports: [
    StationRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    MobileModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class StationModule { }

