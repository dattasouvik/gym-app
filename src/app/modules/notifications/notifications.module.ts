import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CoreModule } from '../core/core.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NotificationListComponent, NotificationComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MaterialDesignModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
