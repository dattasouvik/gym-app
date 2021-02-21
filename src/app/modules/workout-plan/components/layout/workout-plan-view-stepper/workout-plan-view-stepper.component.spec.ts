import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlanViewStepperComponent } from './workout-plan-view-stepper.component';

describe('WorkoutPlanViewStepperComponent', () => {
  let component: WorkoutPlanViewStepperComponent;
  let fixture: ComponentFixture<WorkoutPlanViewStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutPlanViewStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutPlanViewStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
