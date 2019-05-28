import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ChartsRoutingModule } from './charts-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ChartsComponent } from './charts.component';

@NgModule({
  declarations: [ChartsComponent],
  imports: [
    ChartsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChartsModule { }
