import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LayoutComponent } from './layout.component';
import { TranslateModule } from '@ngx-translate/core';

import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { MobileModule } from '../@core/mobile/mobile.module.tns';


@NgModule({
  declarations: [
    LayoutComponent,
   // HideActionBarDirective,
   // MenuSelectComponent,
   //  IngredientComponent,
  //  MenuitemsComponent
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
