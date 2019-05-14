import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DetailRoutingModule } from './detail-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    DetailRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DetailModule { }
