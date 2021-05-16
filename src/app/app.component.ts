import { Component, ComponentFactoryResolver, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { distinctUntilChanged, tap } from 'rxjs/operators';
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
  @ViewChild('notification', { read: ViewContainerRef })
  private notificationvRef: ViewContainerRef;

  logoTitle = 'Health World';
  logoIcon: any;
  isLoggedIn = false;

  constructor(
    public authService: AuthService,
    private domSanitizer: DomSanitizer,
    private renderer: Renderer2,
    private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    /* Hide version tags for security reasons */
    this.hideVersionTag();
    this.authService.autoLogin();
    this.logoIcon = this.domSanitizer.
      bypassSecurityTrustResourceUrl('assets/images/logo.jpg');

    this.authService.isLoggedIn$
      .pipe(
        distinctUntilChanged(),
        tap((isLoggedIn) => this.isLoggedIn = isLoggedIn)
      )
      .subscribe(isLoggedIn => this.renderNotification(isLoggedIn));
  }

  logout() {
    this.authService.logout().subscribe(() => this.isLoggedIn = false);
  }

  private hideVersionTag(): void {
    const rootEl = this.renderer.selectRootElement('app-root', true);
    this.renderer.removeAttribute(rootEl, 'ng-version');
  }


  /*
  * Renders (Lazy Loading) NotificationComponent in ng-template
  */
  async renderNotification(isLoggedIn: boolean) {
     const { NotificationComponent } = await
      import('./modules/notifications/components/notification/notification.component');
     this.notificationvRef.clear();
     const   notificationComp = await this.notificationvRef.createComponent(
      this.cfr.resolveComponentFactory(NotificationComponent)
     );
     /* if not loggedin notification is removed */
     if (!isLoggedIn && notificationComp){
      // this.notificationvRef.clear();
      notificationComp.destroy();
    }
  }

}
