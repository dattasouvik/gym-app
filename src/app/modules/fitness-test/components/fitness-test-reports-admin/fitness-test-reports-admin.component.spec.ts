import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessTestReportsAdminComponent } from './fitness-test-reports-admin.component';

describe('FitnessTestReportsAdminComponent', () => {
  let component: FitnessTestReportsAdminComponent;
  let fixture: ComponentFixture<FitnessTestReportsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessTestReportsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessTestReportsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
