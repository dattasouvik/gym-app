import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GymManagement';
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  logout(){
    this.authService.logout().subscribe();
  }

}
