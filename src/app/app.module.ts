import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Add Module for Http Request
import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http'


// import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';
import { OrderfoodComponent } from './orderfood/orderfood.component';
import { ZonetableComponent } from './zonetable/zonetable.component';
import { MenuComponent } from './menu/menu.component';
import { NsRadlistviewComponent } from './ns-radlistview/ns-radlistview.component';
import { LearningComponent } from './learning/learning.component';
import { ActionbarHelperComponent } from './shared/ui/actionbar-helper/actionbar-helper.component';
import { RadlistviewComponent } from './learning/ui-pro/radlistview/radlistview.component';
import { KitchenComponent } from './kitchen/kitchen.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    HomeComponent,
    OrderfoodComponent,
    ZonetableComponent,
    MenuComponent,
    NsRadlistviewComponent,
    LearningComponent,
    ActionbarHelperComponent,
    RadlistviewComponent,
    KitchenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
    // NativeScriptModule,  // Don't define  Native script Module in angular file
    // NativeScriptUISideDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
