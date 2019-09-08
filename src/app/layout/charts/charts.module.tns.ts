import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ChartsRoutingModule } from './charts-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ChartsComponent } from './charts.component';
import { MobileModule } from '../../@core/mobile/mobile.module.tns';


@NgModule({
  declarations: [ChartsComponent],
  imports: [
    ChartsRoutingModule,
    NativeScriptCommonModule,
    MobileModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChartsModule { }
