import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Add Module for Http Request
// import { HttpModule } from '@angular/http';  // Deprecated
import { HttpClientModule } from '@angular/common/http';


// import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';
import { OrderfoodComponent } from './orderfood/orderfood.component';
import { ZonetableComponent } from './zonetable/zonetable.component';

import { LearningComponent } from './learning/learning.component';
import { ActionbarHelperComponent } from './shared/ui/actionbar-helper/actionbar-helper.component';
import { RadlistviewComponent } from './learning/ui-pro/radlistview/radlistview.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './learning/ui/button/button.component';
import { GridComponent } from './learning/layouts/grid/grid.component';
import { FlexComponent } from './learning/layouts/flex/flex.component';
import { AbsoluteComponent } from './learning/layouts/absolute/absolute.component';
import { MenuCategoryComponent } from './menucategory/menucategory.component';
import { TabviewComponent } from './learning/ui/tabview/tabview.component';
import { TabGridlayoutAutoRowComponent } from './learning/ui/tab-gridlayout-auto-row/tab-gridlayout-auto-row.component';
import { NumuricButtonComponent } from './shared/ui/numuric-button/numuric-button.component';
import { StationComponent } from './station/station.component';





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
    NumuricButtonComponent,
    StationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpModule, Deprecated
    HttpClientModule,
    FormsModule,
   // ReactiveFormsModule,
    NgbModule, // https://ng-bootstrap.github.io
   // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
