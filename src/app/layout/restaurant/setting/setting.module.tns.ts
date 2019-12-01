import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SettingRoutingModule } from './setting-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ZonetableComponent } from './zonetable/zonetable.component';

import { CookstationComponent } from './cookstation/cookstation.component';
import { SettingComponent } from './setting.component';
//import { DropDownModule } from 'nativescript-drop-down/angular';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { MenuStationComponent } from './menu-station/menu-station.component';
import { LinkstationComponent } from './linkstation/linkstation.component';
import { MobileModule } from '../../../@core/mobile-components/mobile.module.tns';


@NgModule({
  declarations: [ZonetableComponent, CookstationComponent, SettingComponent, MenuStationComponent, LinkstationComponent],
  imports: [
    SettingRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule,
    MobileModule,
   // DropDownModule,
    
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SettingModule { }
