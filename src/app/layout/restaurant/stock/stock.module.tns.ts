import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { StockRoutingModule } from './stock-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { StockComponent } from './stock.component';
import { MobileModule } from '../../../@core/mobile/mobile.module.tns';


@NgModule({
  declarations: [StockComponent],
  imports: [
    StockRoutingModule,
    NativeScriptCommonModule,
    MobileModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class StockModule { }
