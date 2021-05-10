import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreloadDirective } from './directives/image-preload.directive';


@NgModule({
  declarations: [ImagePreloadDirective],
  imports: [
    CommonModule
  ],
  exports: [ ImagePreloadDirective ]
})
export class DefaultImageModule { }
