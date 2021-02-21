import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkoutPlanComponent } from './view-workout-plan.component';

describe('ViewWorkoutPlanComponent', () => {
  let component: ViewWorkoutPlanComponent;
  let fixture: ComponentFixture<ViewWorkoutPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWorkoutPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWorkoutPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
