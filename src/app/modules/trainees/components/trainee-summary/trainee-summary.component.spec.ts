import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeSummaryComponent } from './trainee-summary.component';

describe('TraineeSummaryComponent', () => {
  let component: TraineeSummaryComponent;
  let fixture: ComponentFixture<TraineeSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
