import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatListModule,
        MatSliderModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatToolbarModule, MatSlideToggleModule} from '@angular/material';
import { UserAttendenceModule } from './user-attendence/user-attendence.module';
// import { SaveAttendenceComponent } from './user-attendence/save-attendence/save-attendence.component';
import { AttendenceListComponent } from './user-attendence/attendence-list/attendence-list.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    AppComponent,
    // SaveAttendenceComponent
  ],
  // entryComponents: [SaveAttendenceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    UserAttendenceModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
