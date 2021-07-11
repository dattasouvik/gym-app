import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum ThemeOption {
  LIGHT = 'light',
  DARK = 'dark'
}

const DEFAULT = ThemeOption.LIGHT;
const KEY = 'theme-preference';
const LIGHT_THEME = 'light-theme';
const DARK_THEME = 'dark-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemePrefsService {

  private renderer: Renderer2;

  private themeSubject = new BehaviorSubject<string>(LIGHT_THEME);
  public readonly theme$: Observable<string> = this.themeSubject.asObservable();

  get preferredTheme(): ThemeOption {
    return (localStorage.getItem(KEY) as ThemeOption) || DEFAULT;
  }

  set preferredTheme(value: ThemeOption) {
    localStorage.setItem(KEY, value);

    if (value === ThemeOption.DARK) {
      this.themeSubject.next(DARK_THEME);
      this.renderer.addClass(document.body, DARK_THEME);
      this.renderer.removeClass(document.body, LIGHT_THEME);
    } else {
      this.themeSubject.next(LIGHT_THEME);
      this.renderer.addClass(document.body, LIGHT_THEME);
      this.renderer.removeClass(document.body, DARK_THEME);
    }
  }

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer('body', null);
    this.preferredTheme = this.preferredTheme;
  }
}
