import { TestBed } from '@angular/core/testing';

import { HealthCardService } from './health-card.service';

describe('HealthCardService', () => {
  let service: HealthCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
