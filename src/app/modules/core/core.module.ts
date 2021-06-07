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
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { RouterModule } from '@angular/router';
import { FluidFormComponent } from './components/layout/fluid-form/fluid-form.component';

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
    LoggedinUserHomeComponent,
    SideNavigationComponent,
    FluidFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialDesignModule,
    DefaultImageModule,
    SharedModule,
    FlexLayoutModule
  ],
  exports: [
    NotFoundComponent,
    HomeComponent,
    SideNavigationComponent,
    FluidFormComponent,
    DefaultImageModule
  ]
})
export class CoreModule { }
