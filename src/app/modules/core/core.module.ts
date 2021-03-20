import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ImagePreloadDirective } from './directives/image-preload.directive';



@NgModule({
  declarations: [
    NotFoundComponent,
    ImagePreloadDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NotFoundComponent,
    ImagePreloadDirective
  ]
})
export class CoreModule { }
