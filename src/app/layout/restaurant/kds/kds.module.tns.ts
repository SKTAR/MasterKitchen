import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { KdsRoutingModule } from './kds-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ViewstationComponent } from './viewstation/viewstation.component';
import { MobileModule } from '../../../shared/modules/mobile/mobile.module.tns';

@NgModule({
  declarations: [ViewstationComponent],
  imports: [
    KdsRoutingModule,
    NativeScriptCommonModule,
    MobileModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class KdsModule { }
