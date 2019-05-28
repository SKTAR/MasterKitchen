import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { BlankPageComponent } from './blank-page.component';

@NgModule({
  declarations: [BlankPageComponent],
  imports: [
    BlankPageRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BlankPageModule { }
