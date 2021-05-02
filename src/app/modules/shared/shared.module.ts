import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { MessagesComponent } from './components/messages/messages.component';
import { RedirectComponent } from './components/redirect/redirect.component';



@NgModule({
  declarations: [
    LoadingComponent, MessagesComponent, RedirectComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports:[
    LoadingComponent,
    MessagesComponent,
    RedirectComponent
  ]
})
export class SharedModule { }
