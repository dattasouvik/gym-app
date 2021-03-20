import { InjectionToken, NgModule } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  defaultProfileImg: string;
}

export const APP_DI_CONFIG: AppConfig = {
  defaultProfileImg: `assets/images/default_profile.png`
};

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class AppConfigModule { }
