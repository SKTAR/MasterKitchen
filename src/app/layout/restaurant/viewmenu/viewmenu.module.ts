import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewmenuRoutingModule } from './viewmenu-routing.module';
import { MenulistComponent } from './menulist/menulist.component';

@NgModule({
  declarations: [MenulistComponent],
  imports: [
    CommonModule,
    ViewmenuRoutingModule
  ]
})
export class ViewmenuModule { }
