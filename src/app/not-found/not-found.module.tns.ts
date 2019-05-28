import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    NotFoundRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NotFoundModule { }
