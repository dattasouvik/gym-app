import { TestBed } from '@angular/core/testing';

import { FoodChartService } from './food-chart.service';

describe('FoodChartService', () => {
  let service: FoodChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
