import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserAttendanceComponent } from './view-user-attendance.component';

describe('ViewUserAttendanceComponent', () => {
  let component: ViewUserAttendanceComponent;
  let fixture: ComponentFixture<ViewUserAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
