import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceDateFilterComponent } from './attendance-date-filter.component';

describe('AttendanceDateFilterComponent', () => {
  let component: AttendanceDateFilterComponent;
  let fixture: ComponentFixture<AttendanceDateFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceDateFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceDateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
