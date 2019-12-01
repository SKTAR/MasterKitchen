import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SelectMenuRoutingModule } from './select-menu-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { MenuSelectComponent } from './menu-select/menu-select.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';

import { IngredientModule } from '../ingredient/ingredient.module.tns';
import { MobileModule } from '../../../@core/mobile-components/mobile.module.tns';

@NgModule({
  declarations: [MenuSelectComponent, MenuitemsComponent],
  imports: [
    SelectMenuRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule,   // RadListView
    MobileModule,
    IngredientModule,
  
  ],
  exports: [
    MenuSelectComponent, MenuitemsComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SelectMenuModule { }
