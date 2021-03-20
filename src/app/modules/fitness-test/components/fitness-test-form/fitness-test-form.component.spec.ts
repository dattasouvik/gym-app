import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessTestFormComponent } from './fitness-test-form.component';

describe('FitnessTestFormComponent', () => {
  let component: FitnessTestFormComponent;
  let fixture: ComponentFixture<FitnessTestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessTestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
