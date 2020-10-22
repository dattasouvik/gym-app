import { TestBed } from '@angular/core/testing';

import { ThemePrefsService } from './theme-prefs.service';

describe('ThemePrefsService', () => {
  let service: ThemePrefsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemePrefsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
