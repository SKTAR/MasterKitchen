import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LayoutComponent } from './layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { MobileModule } from '../shared/modules/mobile/mobile.module.tns';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { HideActionBarDirective } from '../shared/directives/hide-actionbar-directive';
import { MenuSelectComponent } from './restaurant/menu-select/menu-select.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { IngredientComponent } from './restaurant/ingredient/ingredient.component';
import { MenuitemsComponent } from './restaurant/menuitems/menuitems.component';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
@NgModule({
  declarations: [
    LayoutComponent,
    HideActionBarDirective,
    MenuSelectComponent,
    IngredientComponent,
    MenuitemsComponent
  ], // , HeaderComponent, SidebarComponent
  imports: [
    LayoutRoutingModule,
    NativeScriptCommonModule,
    MobileModule,
    TranslateModule,
    NativeScriptUISideDrawerModule, // RadSideDrawer
    NativeScriptUIListViewModule,   // RadListView
    NativeScriptFormsModule,
    
    
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutModule { }
