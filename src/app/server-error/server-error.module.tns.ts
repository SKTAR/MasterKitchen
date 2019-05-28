import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ServerErrorRoutingModule } from './server-error-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ServerErrorComponent } from './server-error.component';

@NgModule({
  declarations: [ServerErrorComponent],
  imports: [
    ServerErrorRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ServerErrorModule { }
