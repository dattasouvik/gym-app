import { CoreService } from './../../services/core.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { distinctUntilChanged, mergeMap, takeUntil } from 'rxjs/operators';
import { HostDirective } from 'src/app/modules/shared/directives/host.directive';
import { AuthService } from 'src/app/services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild(HostDirective, { static: true })
  private homeHost: HostDirective;

   private destroySubject = new Subject();

  constructor(
    private authService: AuthService,
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
    const viewContainerRef = this.homeHost.viewContainerRef;

    this.authService.isLoggedIn$
      .pipe(
        takeUntil(this.destroySubject),
        distinctUntilChanged(),
        mergeMap(isLoggedIn =>
          this.coreService.loadHomeComponent(viewContainerRef, isLoggedIn)
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

}
