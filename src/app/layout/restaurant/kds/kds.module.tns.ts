import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { KdsRoutingModule } from './kds-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  declarations: [],
  imports: [
    KdsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class KdsModule { }
