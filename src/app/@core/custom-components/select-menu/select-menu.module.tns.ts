import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SelectMenuComponent } from './select-menu.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
@NgModule({
  declarations: [SelectMenuComponent, MenuItemsComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule,   // RadListView
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SelectMenuModule { }
