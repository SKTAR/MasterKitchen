import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SignupRoutingModule } from './signup-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    SignupRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SignupModule { }
