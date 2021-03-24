import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessTestDetailsComponent } from './fitness-test-details.component';

describe('FitnessTestDetailsComponent', () => {
  let component: FitnessTestDetailsComponent;
  let fixture: ComponentFixture<FitnessTestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessTestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessTestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
