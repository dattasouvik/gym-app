import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthMeasuremetsComponent } from './health-measuremets.component';

describe('HealthMeasuremetsComponent', () => {
  let component: HealthMeasuremetsComponent;
  let fixture: ComponentFixture<HealthMeasuremetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthMeasuremetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthMeasuremetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
