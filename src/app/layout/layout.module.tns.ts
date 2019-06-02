import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LayoutComponent } from './layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { MobileModule } from '../shared/modules/mobile/mobile.module.tns';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';


@NgModule({
  declarations: [LayoutComponent], // , HeaderComponent, SidebarComponent
  imports: [
    LayoutRoutingModule,
    NativeScriptCommonModule,
    MobileModule,
    TranslateModule,
   // NativeScriptUISideDrawerModule, // RadSideDrawer
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutModule { }
