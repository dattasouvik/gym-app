import { CoreService } from './../../services/core.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { SideNavigation, SideNavigationAction, SideNavigationActionType } from '../../models/side-navigation.model';

@Component({
  selector: 'core-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  sideMenus: SideNavigation[];
  constructor(
    public authService: AuthService,
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.authService.user$
      .pipe(
        map((user) => {
          const role = user?.role ?? [];
          return this.coreService.sideNavigationMenu(role)
        })
      ).subscribe(menu => this.sideMenus = menu);
  }

  handleNavigation(activity: SideNavigationAction) {
    this.sidenav.toggle();
    if(activity){
      switch (activity.type) {
        case SideNavigationActionType.CALLBACK:
          if (activity.value === 'logout') {
            return this.logout();
          }
          break;
      }
    }
  }

  logout() {
    this.authService.logout().subscribe();
  }

}
