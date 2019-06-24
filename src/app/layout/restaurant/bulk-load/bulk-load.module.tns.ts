import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BulkLoadRoutingModule } from './bulk-load-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { BulkLoadComponent } from './bulk-load.component';
import { MenuBulkLoadComponent } from './menu-bulk-load/menu-bulk-load.component';

@NgModule({
  declarations: [BulkLoadComponent, MenuBulkLoadComponent],
  imports: [
    BulkLoadRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BulkLoadModule { }
