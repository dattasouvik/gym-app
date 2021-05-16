import { Component, ComponentFactoryResolver, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { distinctUntilChanged, mergeMap, tap } from 'rxjs/operators';
import { HostDirective } from './modules/shared/directives/host.directive';
import { NotificationService } from './modules/notifications/services/notification.service';
// import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin


// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin,
//   interactionPlugin
// ]);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(HostDirective, { static: true })
  private notificationHost: HostDirective;

  logoTitle = 'Health World';
  logoIcon: any;
  isLoggedIn = false;

  constructor(
    public authService: AuthService,
    private domSanitizer: DomSanitizer,
    private renderer: Renderer2,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    /* Hide version tags for security reasons */
    this.hideVersionTag();
    this.authService.autoLogin();
    this.logoIcon = this.domSanitizer.
      bypassSecurityTrustResourceUrl('assets/images/logo.jpg');

    const viewContainerRef = this.notificationHost.viewContainerRef;

    this.authService.isLoggedIn$
      .pipe(
        distinctUntilChanged(),
        tap((isLoggedIn) => this.isLoggedIn = isLoggedIn),
        mergeMap(isLoggedIn =>
          this.notificationService.loadComponent(viewContainerRef, isLoggedIn)
        )
      )
      .subscribe();
  }

  logout() {
    this.authService.logout().subscribe(() => this.isLoggedIn = false);
  }

  private hideVersionTag(): void {
    const rootEl = this.renderer.selectRootElement('app-root', true);
    this.renderer.removeAttribute(rootEl, 'ng-version');
  }

}
