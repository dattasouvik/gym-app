import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pager } from 'src/app/models/pager.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {

  public notification: Pager;
  private notifySubscription: Subscription;

  constructor(
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.notifySubscription = this.notificationService.getNotificationCount()
      .subscribe(
        response => {
          console.log(`Output at ${new Date()}`, response.pager);
          this.notification = response.pager;
        });
  }

  ngOnDestroy() {
    this.notificationService.stopFetchingNotification();
    if (this.notifySubscription) {
      this.notifySubscription.unsubscribe();
    }
  }

  onRedirect() {
    this.router.navigateByUrl('/notifications');
  }


}
// https://blog.angulartraining.com/how-to-do-polling-with-rxjs-and-angular-50d635574965
