import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';
import { MessagesComponent } from './components/messages/messages.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { BackButtonDirective } from './directives/back-button.directive';



@NgModule({
  declarations: [
    LoadingComponent, MessagesComponent, RedirectComponent, BackButtonDirective
  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports: [
    LoadingComponent,
    MessagesComponent,
    RedirectComponent,
    BackButtonDirective
  ]
})
export class SharedModule { }
