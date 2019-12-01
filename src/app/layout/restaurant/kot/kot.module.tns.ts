import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { KotRoutingModule } from './kot-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { KotComponent } from './kot.component';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { SelectMenuModule } from '../select-menu/select-menu.module.tns';
import { MobileModule } from '../../../@core/mobile-components/mobile.module.tns';
@NgModule({
  declarations: [KotComponent],
  imports: [
    KotRoutingModule,
    NativeScriptCommonModule,
    MobileModule,
    NativeScriptFormsModule,
    SelectMenuModule
    
    


  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class KotModule { }
