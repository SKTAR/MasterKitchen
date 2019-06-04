import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { KotRoutingModule } from './kot-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { KotComponent } from './kot.component';
import { MobileModule } from '../../../shared/modules/mobile/mobile.module.tns';


@NgModule({
  declarations: [KotComponent],
  imports: [
    KotRoutingModule,
    NativeScriptCommonModule,
    MobileModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class KotModule { }
