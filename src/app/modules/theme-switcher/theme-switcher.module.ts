import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleThemeComponent } from './components/toggle-theme/toggle-theme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from 'src/app/modules/material-design/material-design.module';

@NgModule({
  declarations: [ToggleThemeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialDesignModule
  ],
  exports:[
    ToggleThemeComponent
  ]
})
export class ThemeSwitcherModule { }
