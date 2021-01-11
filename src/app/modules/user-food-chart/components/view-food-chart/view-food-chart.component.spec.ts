import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFoodChartComponent } from './view-food-chart.component';

describe('ViewFoodChartComponent', () => {
  let component: ViewFoodChartComponent;
  let fixture: ComponentFixture<ViewFoodChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFoodChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFoodChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
