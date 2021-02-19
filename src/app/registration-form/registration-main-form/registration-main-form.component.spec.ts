import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegistrationMainFormComponent } from './registration-main-form.component';

describe('RegistrationMainFormComponent', () => {
  let component: RegistrationMainFormComponent;
  let fixture: ComponentFixture<RegistrationMainFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationMainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
