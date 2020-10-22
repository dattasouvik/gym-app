import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserAttendenceModule } from './user-attendence/user-attendence.module';
// import { SaveAttendenceComponent } from './user-attendence/save-attendence/save-attendence.component';
import { AttendenceListComponent } from './user-attendence/attendence-list/attendence-list.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ThemeSwitcherModule } from 'src/app/modules/theme-switcher/theme-switcher.module';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';


@NgModule({
  declarations: [
    AppComponent,
    // SaveAttendenceComponent
  ],
  // entryComponents: [SaveAttendenceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    SharedModule,
    ThemeSwitcherModule,
    UserAttendenceModule,
    FullCalendarModule
  ],
  providers: [
    LoadingService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
