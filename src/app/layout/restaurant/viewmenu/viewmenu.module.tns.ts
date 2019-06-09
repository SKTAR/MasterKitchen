import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ViewmenuRoutingModule } from './viewmenu-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { MenulistComponent } from './menulist/menulist.component';

@NgModule({
  declarations: [MenulistComponent],
  imports: [
    ViewmenuRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewmenuModule { }
