import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { TokenInterceptor } from 'src/app/services/token.interceptor';
import { HeaderInterceptor } from 'src/app/services/header.interceptor';
import { CoreModule } from 'src/app/modules/core/core.module';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [
    AppComponent
    // SaveAttendenceComponent
  ],
  // entryComponents: [SaveAttendenceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialDesignModule,
    SharedModule,
    ThemeSwitcherModule,
    UserAttendenceModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    // FullCalendarModule
  ],
  providers: [
    LoadingService,
    MessagesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
