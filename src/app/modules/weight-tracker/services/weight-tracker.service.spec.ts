import { TestBed } from '@angular/core/testing';

import { WeightTrackerService } from './weight-tracker.service';

describe('WeightTrackerService', () => {
  let service: WeightTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
