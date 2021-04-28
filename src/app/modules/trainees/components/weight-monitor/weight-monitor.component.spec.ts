import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightMonitorComponent } from './weight-monitor.component';

describe('WeightMonitorComponent', () => {
  let component: WeightMonitorComponent;
  let fixture: ComponentFixture<WeightMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
