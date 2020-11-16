import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserAttendanceComponent } from './add-user-attendance.component';

describe('AddUserAttendanceComponent', () => {
  let component: AddUserAttendanceComponent;
  let fixture: ComponentFixture<AddUserAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
