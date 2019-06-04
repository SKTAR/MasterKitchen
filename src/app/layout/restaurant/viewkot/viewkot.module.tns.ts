import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ViewkotRoutingModule } from './viewkot-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ViewkotComponent } from './viewkot.component';
import { SplitviewKotComponent } from './splitview-kot/splitview-kot.component';
import { MobileModule } from '../../../shared/modules/mobile/mobile.module.tns';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewkotComponent, SplitviewKotComponent],
  imports: [
    ViewkotRoutingModule,
    NativeScriptCommonModule,
    MobileModule,
    FormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewkotModule { }
