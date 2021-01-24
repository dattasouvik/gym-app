import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeReportsDashboardComponent } from './trainee-reports-dashboard.component';

describe('TraineeReportsDashboardComponent', () => {
  let component: TraineeReportsDashboardComponent;
  let fixture: ComponentFixture<TraineeReportsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeReportsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeReportsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
