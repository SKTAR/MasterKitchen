import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SettingRoutingModule } from './setting-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ZonetableComponent } from './zonetable/zonetable.component';

@NgModule({
  declarations: [ZonetableComponent],
  imports: [
    SettingRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SettingModule { }
