import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MenuRoutingModule } from './menu-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { MenuComponent } from './menu.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
// import { AutoGridRows, AutoGridColumns } from '../shared/grid.directive';

@NgModule({
  declarations: [
    MenuComponent,
    MenuCategoryComponent,
    MenuItemsComponent,
   // AutoGridRows,        //  Directive Auto Row Column
   // AutoGridColumns   // Directives  Auto Row Column
  ],
   imports: [
    MenuRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule // Neeed for RadListView
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MenuModule { }
