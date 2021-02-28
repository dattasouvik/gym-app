import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DomSanitizer } from "@angular/platform-browser";
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
  logoTitle = 'Health World';
  logoIcon: any;

  constructor(
    public authService: AuthService,
    private domSanitizer: DomSanitizer,
    private renderer: Renderer2
    ) {}

  ngOnInit(): void {
    /* Hide version tags for security reasons */
    this.hideVersionTag();
    this.authService.autoLogin();
    this.logoIcon = this.domSanitizer.
    bypassSecurityTrustResourceUrl("../assets/images/logo.jpg");  
  }

  logout(){
    this.authService.logout().subscribe();
  }

  private hideVersionTag():void {
    const rootEl = this.renderer.selectRootElement('app-root',true);
    this.renderer.removeAttribute(rootEl, 'ng-version');
  }

}
