import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DefaultImageModule } from '../default-image/default-image.module';
import { HomeComponent } from './components/home/home.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActivitiesDashboardComponent } from './components/activities-dashboard/activities-dashboard.component';
import { ActivityComponent } from './components/activity/activity.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { HomeNavigationLinksComponent } from './components/home-navigation-links/home-navigation-links.component';
import { HomeRegisterComponent } from './components/home-register/home-register.component';
import { AnonymousUserHomeComponent } from './components/anonymous-user-home/anonymous-user-home.component';
import { LoggedinUserHomeComponent } from './components/loggedin-user-home/loggedin-user-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent,
    ActivitiesDashboardComponent,
    ActivityComponent,
    BookingsComponent,
    HomeNavigationLinksComponent,
    HomeRegisterComponent,
    AnonymousUserHomeComponent,
    LoggedinUserHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    DefaultImageModule,
    SharedModule,
    FlexLayoutModule
  ],
  exports: [
    NotFoundComponent,
    HomeComponent,
    DefaultImageModule
  ]
})
export class CoreModule { }
