import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { MessagesComponent } from './components/messages/messages.component';



@NgModule({
  declarations: [LoadingComponent, MessagesComponent],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports:[
    LoadingComponent,
    MessagesComponent
  ]
})
export class SharedModule { }
