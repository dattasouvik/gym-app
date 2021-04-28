import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightTrackerFormComponent } from './weight-tracker-form.component';

describe('WeightTrackerFormComponent', () => {
  let component: WeightTrackerFormComponent;
  let fixture: ComponentFixture<WeightTrackerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightTrackerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightTrackerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
