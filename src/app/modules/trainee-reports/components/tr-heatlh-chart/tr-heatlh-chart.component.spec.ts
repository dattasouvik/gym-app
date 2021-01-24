import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrHeatlhChartComponent } from './tr-heatlh-chart.component';

describe('TrHeatlhChartComponent', () => {
  let component: TrHeatlhChartComponent;
  let fixture: ComponentFixture<TrHeatlhChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrHeatlhChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrHeatlhChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
