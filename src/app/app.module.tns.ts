import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';
import { OrderfoodComponent } from './orderfood/orderfood.component';
import { ZonetableComponent } from './zonetable/zonetable.component';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { LearningComponent } from './learning/learning.component';
import { ActionbarHelperComponent } from './shared/ui/actionbar-helper/actionbar-helper.component';
import { RadlistviewComponent } from './learning/ui-pro/radlistview/radlistview.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { AutoGridRows, AutoGridColumns } from './shared/grid.directive';
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { ButtonComponent } from './learning/ui/button/button.component';
import { GridComponent } from './learning/layouts/grid/grid.component';
import { FlexComponent } from './learning/layouts/flex/flex.component';
import { AbsoluteComponent } from './learning/layouts/absolute/absolute.component';
import { MenuCategoryComponent } from './menucategory/menucategory.component';
import { TabviewComponent } from './learning/ui/tabview/tabview.component';
import { TabGridlayoutAutoRowComponent } from './learning/ui/tab-gridlayout-auto-row/tab-gridlayout-auto-row.component';
import { MenuModule } from './menu/menu.module';
import { NumuricButtonComponent } from './shared/ui/numuric-button/numuric-button.component';
import { StationComponent } from './station/station.component';
import { EmployeeComponent } from './employee/employee.component';
import { AlertGlobalComponent } from './alert-global/alert-global.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    HomeComponent,
    OrderfoodComponent,
    ZonetableComponent,
    MenuCategoryComponent,
    LearningComponent,
    ActionbarHelperComponent,
    RadlistviewComponent,
    KitchenComponent,
    ButtonComponent,
    GridComponent,
    FlexComponent,
    AbsoluteComponent,
    TabviewComponent,
    TabGridlayoutAutoRowComponent,
    AutoGridColumns, // Directive   TabGridlayoutAutoRowComponent
    AutoGridRows, 
    NumuricButtonComponent, 
    StationComponent,
     EmployeeComponent,
      AlertGlobalComponent  // Directive      TabGridlayoutAutoRowComponent
    // MenuComponent
    // RadlistviewComponent,

    // ActionBarComponent,
  ],
  imports: [
    AppRoutingModule,

    NativeScriptModule,
    NativeScriptUISideDrawerModule, // RadSideDrawer
    NativeScriptFormsModule,        // 2 Way Binding
    NativeScriptUIListViewModule, // RadListView
    NativeScriptHttpClientModule  // You have to import this one when you import HttpclientModule in app.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
