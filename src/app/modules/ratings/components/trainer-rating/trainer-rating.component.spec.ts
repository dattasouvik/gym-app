import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerRatingComponent } from './trainer-rating.component';

describe('TrainerRatingComponent', () => {
  let component: TrainerRatingComponent;
  let fixture: ComponentFixture<TrainerRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
