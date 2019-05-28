import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BsElementRoutingModule } from './bs-element-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { BsElementComponent } from './bs-element.component';

@NgModule({
  declarations: [BsElementComponent],
  imports: [
    BsElementRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BsElementModule { }
