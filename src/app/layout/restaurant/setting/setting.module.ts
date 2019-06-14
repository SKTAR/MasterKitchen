import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { ZonetableComponent } from './zonetable/zonetable.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ZonetableComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule
  ]
})
export class SettingModule { }
