import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ActionbarHelperComponent } from '../ui/actionbar-helper/actionbar-helper.component';

@NgModule({
  declarations: [
    ActionbarHelperComponent
  ],
  imports: [
    NativeScriptCommonModule
  ],
  exports: [
    ActionbarHelperComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ShareModule { }
