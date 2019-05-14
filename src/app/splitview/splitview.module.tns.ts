import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SplitviewRoutingModule } from './splitview-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SplitviewComponent } from './splitview.component';

@NgModule({
  declarations: [SplitviewComponent],
  imports: [
    SplitviewRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SplitviewModule { }
