import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrFitnessTestComponent } from './tr-fitness-test.component';

describe('TrFitnessTestComponent', () => {
  let component: TrFitnessTestComponent;
  let fixture: ComponentFixture<TrFitnessTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrFitnessTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrFitnessTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
