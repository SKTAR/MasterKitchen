import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { TablesRoutingModule } from './tables-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TablesComponent } from './tables.component';

@NgModule({
  declarations: [TablesComponent],
  imports: [
    TablesRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TablesModule { }
