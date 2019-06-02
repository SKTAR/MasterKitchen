import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { EmployeeRoutingModule } from './employee-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    EmployeeRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class EmployeeModule { }
