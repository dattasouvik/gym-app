import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMainFormComponent } from './registration-main-form.component';

describe('RegistrationMainFormComponent', () => {
  let component: RegistrationMainFormComponent;
  let fixture: ComponentFixture<RegistrationMainFormComponent>;

  beforeEach(async(() => {
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
