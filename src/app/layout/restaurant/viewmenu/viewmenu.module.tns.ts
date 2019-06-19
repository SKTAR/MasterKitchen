import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ViewmenuRoutingModule } from './viewmenu-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ViewmenuComponent } from './viewmenu.component';
import { MenucategoryComponent } from './menucategory/menucategory.component';
import { MobileModule } from '../../../shared/modules/mobile/mobile.module.tns';
import { CreatemenuComponent } from './createmenu/createmenu.component';



@NgModule({
  declarations: [
    ViewmenuComponent,
    MenucategoryComponent,
    CreatemenuComponent,
   
    
  ],
  imports: [
    ViewmenuRoutingModule,
    NativeScriptCommonModule,
    MobileModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewmenuModule { }