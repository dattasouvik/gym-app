import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessReportsComponent } from './fitness-reports.component';

describe('FitnessReportsComponent', () => {
  let component: FitnessReportsComponent;
  let fixture: ComponentFixture<FitnessReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
