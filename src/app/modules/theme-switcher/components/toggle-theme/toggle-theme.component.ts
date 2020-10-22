import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemeOption, ThemePrefsService } from 'src/app/modules/theme-switcher/services/theme-prefs.service';

@Component({
  selector: 'toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent implements OnInit,OnDestroy {

  toggleTheme = new FormControl(false);
  destroy$ = new Subject();
  showtoggleIcon:string;

  constructor( private themePrefsService: ThemePrefsService ) { }

  ngOnInit(): void {

    this.showtoggleIcon = this.updateIcon(this.themePrefsService.preferredTheme);

    this.toggleTheme.patchValue(
      this.themePrefsService.preferredTheme === ThemeOption.DARK
    );

    this.toggleTheme.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((toggleValue: boolean) => {
        this.themePrefsService.preferredTheme = toggleValue
          ? ThemeOption.DARK
          : ThemeOption.LIGHT;
          this.showtoggleIcon = this.updateIcon(this.themePrefsService.preferredTheme);  
      });
  }

  updateIcon(themeName:string):string{
    let iconName:string;
    switch(themeName){
      case ThemeOption.LIGHT:
        iconName = `brightness_5`;
        break;
      case ThemeOption.DARK:
        iconName = `brightness_2`;
        break;
    }
    return iconName;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
