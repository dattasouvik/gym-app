import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { ThemePrefsService } from '../../theme-switcher/services/theme-prefs.service';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[themeDetector]'
})
export class ThemeDetectorDirective implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(
    private themeService: ThemePrefsService,
    private renderer: Renderer2,
    private hostElement: ElementRef
    ) {}

  ngOnInit(): void {
    this.subscription = this.themeService.theme$
    .pipe(
      distinctUntilChanged()
    )
    .subscribe(themeClass => this.renderer.setAttribute(this.hostElement.nativeElement, 'data-theme', themeClass));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
