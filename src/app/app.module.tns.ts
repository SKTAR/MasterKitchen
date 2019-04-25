import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';
import { OrderfoodComponent } from './orderfood/orderfood.component';
import { ZonetableComponent } from './zonetable/zonetable.component';
import { MenuComponent } from './menu/menu.component';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { LearningComponent } from './learning/learning.component';
import { ActionbarHelperComponent } from './shared/ui/actionbar-helper/actionbar-helper.component';
import { RadlistviewComponent } from './learning/ui-pro/radlistview/radlistview.component';
import { KitchenComponent } from './kitchen/kitchen.component';
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { ButtonComponent } from './learning/ui/button/button.component';
import { GridComponent } from './learning/layouts/grid/grid.component';
import { FlexComponent } from './learning/layouts/flex/flex.component';
import { AbsoluteComponent } from './learning/layouts/absolute/absolute.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    HomeComponent,
    OrderfoodComponent,
    ZonetableComponent,
    MenuComponent,
    LearningComponent,
    ActionbarHelperComponent,
    RadlistviewComponent,
    KitchenComponent,
    ButtonComponent,
    GridComponent,
    FlexComponent,
    AbsoluteComponent,
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
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
