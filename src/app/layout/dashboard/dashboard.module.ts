import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
// import { ChatComponent } from './components/chat/chat.component';
// import { NotificationComponent } from './components/notification/notification.component';
// import { TimelineComponent } from './components/timeline/timeline.component';
import {
  TimelineComponent,
  NotificationComponent,
  ChatComponent
} from './components';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared/modules/stat/stat.module';

@NgModule({
  declarations: [DashboardComponent, ChatComponent, NotificationComponent, TimelineComponent],
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    DashboardRoutingModule,
    StatModule
  ]
})
export class DashboardModule { }
