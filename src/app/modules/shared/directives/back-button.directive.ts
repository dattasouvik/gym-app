import { Directive, HostListener } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[backButton]'
})
export class BackButtonDirective {

  constructor(private navigation: NavigationService) {}

  @HostListener('click')
  onClick(): void {
    this.navigation.back();
  }
}
