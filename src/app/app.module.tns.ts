import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { AutoGridRows, AutoGridColumns } from './shared/grid.directive';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { AuthGuard } from './shared/guard';
import { MobileModule } from './@core/mobile/mobile.module.tns';




@NgModule({
  declarations: [
    AppComponent,
    AutoGridColumns,
  ],
  imports: [
    AppRoutingModule,
    NativeScriptModule,
 //   NativeScriptUISideDrawerModule, // RadSideDrawer
    NativeScriptFormsModule,        // 2 Way Binding
    NativeScriptUIListViewModule, // RadListView
    NativeScriptHttpClientModule,  // You have to import this one when you import HttpclientModule in app.module.ts
    MobileModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
