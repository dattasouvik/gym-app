import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessTestReportsComponent } from './fitness-test-reports.component';

describe('FitnessTestReportsComponent', () => {
  let component: FitnessTestReportsComponent;
  let fixture: ComponentFixture<FitnessTestReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessTestReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessTestReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
