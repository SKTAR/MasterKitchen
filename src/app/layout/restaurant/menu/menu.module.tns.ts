import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { MenuSelectComponent } from './menu-select/menu-select.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { MobileModule } from '../../../shared/modules/mobile/mobile.module.tns';
import { IngredientModule } from '../ingredient/ingredient.module.tns';

@NgModule({
  declarations: [MenuSelectComponent, MenuitemsComponent],
  imports: [
    MenuRoutingModule,
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
export class MenuModule { }
