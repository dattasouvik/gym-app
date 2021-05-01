import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrWeightMonitorComponent } from './tr-weight-monitor.component';

describe('TrWeightMonitorComponent', () => {
  let component: TrWeightMonitorComponent;
  let fixture: ComponentFixture<TrWeightMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrWeightMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrWeightMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
