import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { ZonetableComponent } from './zonetable/zonetable.component';
import { FormsModule } from '@angular/forms';
import { CookstationComponent } from './cookstation/cookstation.component';
import { SettingComponent } from './setting.component';
import { MenuStationComponent } from './menu-station/menu-station.component';
import { LinkstationComponent } from './linkstation/linkstation.component';


@NgModule({
  declarations: [ZonetableComponent, CookstationComponent, SettingComponent, MenuStationComponent, LinkstationComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule
  ]
})
export class SettingModule { }
