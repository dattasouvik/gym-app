import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribeFoodChartComponent } from './prescribe-food-chart.component';

describe('PrescribeFoodChartComponent', () => {
  let component: PrescribeFoodChartComponent;
  let fixture: ComponentFixture<PrescribeFoodChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescribeFoodChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribeFoodChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
