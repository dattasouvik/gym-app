import { TestBed } from '@angular/core/testing';

import { FitnessTestService } from './fitness-test.service';

describe('FitnessTestService', () => {
  let service: FitnessTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitnessTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
