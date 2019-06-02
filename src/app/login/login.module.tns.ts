import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './login.component';
import { MobileModule } from '../shared/modules/mobile/mobile.module.tns';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    NativeScriptCommonModule,
    MobileModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule { }
