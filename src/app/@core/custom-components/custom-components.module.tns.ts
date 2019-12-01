import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DirectivesModule } from '../directives/directives.module.tns';
import { SelectMenuModule } from './select-menu/select-menu.module.tns';

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    DirectivesModule,
    SelectMenuModule
  ],
  exports:[
    SelectMenuModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CustomComponentsModule { }
