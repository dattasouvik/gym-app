import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Pager } from 'src/app/models/pager.model';
import { ListNotificationsResponse, Notification } from '../../models/notifications.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  notifications: Notification[];
  pager: Pager;
  pageNumber = 0;
  private subscription: Subscription;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.loadNotifications(this.pageNumber);
  }

  onChangedPage(pageData: PageEvent) {
    this.loadNotifications(pageData.pageIndex);
  }

  private loadNotifications(page: number) {
    this.subscription = this.notificationService.getNotifications(page)
      .subscribe((response: ListNotificationsResponse) => {
        const { rows, pager } = response;
        this.notifications = rows;
        this.pager = pager;
      });
  }

  showIcon(type: string){
    return this.notificationService.getNotificationIcon(type);
  }

}
