import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightTrackerReportsComponent } from './weight-tracker-reports.component';

describe('WeightTrackerReportsComponent', () => {
  let component: WeightTrackerReportsComponent;
  let fixture: ComponentFixture<WeightTrackerReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightTrackerReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightTrackerReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
