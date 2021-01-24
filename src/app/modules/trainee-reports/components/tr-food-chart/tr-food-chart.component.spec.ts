import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrFoodChartComponent } from './tr-food-chart.component';

describe('TrFoodChartComponent', () => {
  let component: TrFoodChartComponent;
  let fixture: ComponentFixture<TrFoodChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrFoodChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrFoodChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
