import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { StockRoutingModule } from './stock-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  declarations: [],
  imports: [
    StockRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class StockModule { }
