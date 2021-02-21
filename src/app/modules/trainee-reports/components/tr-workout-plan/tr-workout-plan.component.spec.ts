import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrWorkoutPlanComponent } from './tr-workout-plan.component';

describe('TrWorkoutPlanComponent', () => {
  let component: TrWorkoutPlanComponent;
  let fixture: ComponentFixture<TrWorkoutPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrWorkoutPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrWorkoutPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
