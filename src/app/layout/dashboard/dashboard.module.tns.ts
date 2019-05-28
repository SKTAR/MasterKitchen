import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DashboardComponent } from './dashboard.component';
import { ChatComponent } from './components/chat/chat.component';
import { NotificationComponent } from './components/notification/notification.component';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [DashboardComponent, ChatComponent, NotificationComponent, TimelineComponent],
  imports: [
    DashboardRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
