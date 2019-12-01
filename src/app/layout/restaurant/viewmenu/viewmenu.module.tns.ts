import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ViewmenuRoutingModule } from './viewmenu-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ViewmenuComponent } from './viewmenu.component';
import { MenucategoryComponent } from './menucategory/menucategory.component';

import { CreatemenuComponent } from './createmenu/createmenu.component';
import { MobileModule } from '../../../@core/mobile-components/mobile.module.tns';



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
