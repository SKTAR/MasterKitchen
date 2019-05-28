import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    FormRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FormModule { }
