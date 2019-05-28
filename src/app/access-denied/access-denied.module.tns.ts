import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AccessDeniedRoutingModule } from './access-denied-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AccessDeniedComponent } from './access-denied.component';

@NgModule({
  declarations: [AccessDeniedComponent],
  imports: [
    AccessDeniedRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AccessDeniedModule { }
