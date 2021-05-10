import { Directive, Input, HostBinding, OnInit, ElementRef, HostListener } from '@angular/core';
import { DEFAULT_IMAGE_CONFIG } from '../configs/default-image.config';
import { DefaultImageTypes } from './default-image-model.ts';


@Directive({
  selector: 'img[defaultImgType]'
})
export class ImagePreloadDirective implements OnInit {

  @Input()
  @HostBinding('src') src: string;
  @Input() defaultImgType: DefaultImageTypes = DefaultImageTypes.DEFAULT;
  @HostBinding('class') className;

  private alreadyTried = false;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {}

  @HostListener('error') onError() {
    if (!this.alreadyTried) {
      this.src = this.fetchAltImageUrl(this.defaultImgType);
    }
    this.alreadyTried = true;
  }

  @HostListener('load') onLoad() {
    this.className = 'image-loaded';
  }

  private fetchAltImageUrl(defaultImgType: DefaultImageTypes): string {
    let altImageUrl: string;
    switch (defaultImgType) {
      case DefaultImageTypes.DEFAULT:
        altImageUrl = DEFAULT_IMAGE_CONFIG.default;
        break;
      case DefaultImageTypes.PROFILE:
        altImageUrl = DEFAULT_IMAGE_CONFIG.profile;
        break;
      default:
        altImageUrl = DEFAULT_IMAGE_CONFIG.default;
        break;
    }
    return altImageUrl;
  }

}
