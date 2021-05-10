import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DefaultImageModule } from '../default-image/default-image.module';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    DefaultImageModule
  ],
  exports:[
    NotFoundComponent,
    DefaultImageModule
  ]
})
export class CoreModule { }
