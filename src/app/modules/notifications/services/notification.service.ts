import { HttpParams } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable, OnDestroy, ViewContainerRef } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { catchError, share, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Pager } from 'src/app/models/pager.model';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from '../../shared/services/loading.service';
import { ListNotificationsResponse } from '../models/notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService implements OnDestroy {

  private stopPolling = new Subject();
  private notificationInfo$: Observable<Pager>;

  private notificationIcons = [
    {
      class: 'alert-danger',
      icon: 'error_outline'
    },
    {
      class: 'alert-warning',
      icon: 'warning'
    },
    {
      class: 'alert-info',
      icon: 'info_outline'
    },
    {
      class: 'alert-primary',
      icon: 'update'
    },
    {
      class: 'alert-success',
      icon: 'check'
    },
  ];

  constructor(
    private httpService: HttpService,
    private loading: LoadingService,
    private apiHandlerService: ApiHandlerService,
    private cfr: ComponentFactoryResolver
  ) {
    this.notificationInfo$ = timer(1, 900000)
      .pipe(
        switchMap(() => {
          let params = new HttpParams();
          params = params.set('_format', `json`);
          return this.httpService.get<Pager>('notification-count');
        }),
        share(),
        takeUntil(this.stopPolling)
      );
  }

  getNotificationCount(): Observable<any> {
    return this.notificationInfo$;
  }

  getNotifications(page: number = 0) {
    let params = new HttpParams();
    params = params.set('page', `${page}`);
    params = params.set('_format', `json`);
    const notifications$ = this.httpService.get<ListNotificationsResponse>
      ('notifications', { params })
      .pipe(
        catchError(error => this.apiHandlerService.onApiError(error))
      );
    return this.loading.showLoaderUntilCompleted(notifications$);
  }

  getNotificationIcon(type: string) {
    const notification = this.notificationIcons.find( el => el.class === type );
    return notification.icon ?? 'update';
  }

  stopFetchingNotification() {
    this.stopPolling.next();
  }

  /* Render Notification component for loggedin user */
  async loadComponent(vcr: ViewContainerRef, isLoggedIn: boolean) {
    const { NotificationComponent } = await
      import('../components/notification/notification.component');
    vcr.clear();
    /* Remove component forcefully */
    if (!isLoggedIn) {
      return false;
    }
    const component = vcr.createComponent(
      this.cfr.resolveComponentFactory(NotificationComponent));

    if (!isLoggedIn && component) {
      component.destroy();
    }
    return component;
  }

  ngOnDestroy(): void {
    this.stopPolling.next();
    this.stopPolling.complete();
  }

}
