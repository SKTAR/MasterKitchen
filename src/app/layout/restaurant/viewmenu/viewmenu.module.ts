import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewmenuRoutingModule } from './viewmenu-routing.module';
import { ViewmenuComponent } from './viewmenu.component';
import { MenucategoryComponent } from './menucategory/menucategory.component';

@NgModule({
  declarations: [ViewmenuComponent, MenucategoryComponent],
  imports: [
    CommonModule,
    ViewmenuRoutingModule
  ]
})
export class ViewmenuModule { }
